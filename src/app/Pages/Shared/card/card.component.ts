import { Component } from '@angular/core';
import { JobsService } from '../../../jobs.service';
import { Job } from '../../../job';
import { ThemeService } from '../../../theme.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  jobs: Job[] = [];

  constructor(
    private router: Router,
    private jobsService: JobsService,
    private themeService: ThemeService
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

  get isDarkMode(): boolean {
    return this.themeService.getCurrentTheme();
  }
}
