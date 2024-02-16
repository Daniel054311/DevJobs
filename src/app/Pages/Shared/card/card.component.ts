import { Component } from '@angular/core';
import { JobsService } from '../../../jobs.service';
import { Job } from '../../../job';
import { ThemeService } from '../../../theme.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    imports: [CommonModule]
})
export class CardComponent {
  jobs: Job[] = [];
  loading: boolean = true;
  errorMessage: boolean = false;

  constructor(
    private router: Router,
    private jobsService: JobsService,
    private themeService: ThemeService,
  ) {}

  ngOnInit(): void {
    this.loadJobs();
  }


  loadJobs() {
    this.jobsService.getAllJobs().subscribe((jobs) => {
      this.jobs = jobs;
    });
  }

  onSelectJob(jobId: number) {
    // Route user to details page with the ID of the selected job
    this.router.navigate(['/app-details', jobId]);
  }

  isLoading():void|boolean {
    if (this.getFilteredJobs().length === 0) {
      this.loading = true;
    } else {
      this.loading = false;
      this.errorMessage = true;
  }
}

  getFilteredJobs(): Job[] {
    // Retrieve filter criteria from FilterService
    const position = this.jobsService.position;
    const location = this.jobsService.location;
    const fullTimeOnly = this.jobsService.fullTimeOnly;

    // Apply filtering logic based on filter criteria
    let filteredJobs = this.jobs;

    if (position) {
      filteredJobs = filteredJobs.filter(job => job.position.toLowerCase().includes(position.toLowerCase()));
    }

    if (location) {
      filteredJobs = filteredJobs.filter(job => job.location.toLowerCase().includes(location.toLowerCase()));
    }

    if (fullTimeOnly) {
      filteredJobs = filteredJobs.filter(job => job.contract === 'Full Time');
    }

    return filteredJobs;
  }

  get isDarkMode(): boolean {
    return this.themeService.getCurrentTheme();
  }
}
