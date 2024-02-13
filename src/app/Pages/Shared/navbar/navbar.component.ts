import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Job } from '../../../job';
import { JobsService } from '../../../jobs.service';
import { ThemeService } from '../../../theme.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  search: string = "../../../../assets/desktop/icon-search.svg";
  location: string = "../../../../assets/desktop/icon-location.svg";
  checkBox: string = "../../../../assets/desktop/icon-check.svg";
  filterIcon: string = "../../../../assets/mobile/icon-filter.svg";

  jobs: Job[] = [];

  constructor(
    private jobsService: JobsService,
    private themeService: ThemeService
  ) {

  }

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs() {
    this.jobsService.getAllJobs().subscribe((jobs) => {
      this.jobs = jobs;
      console.log(jobs);
    });
  }

  get isDarkMode(): boolean {
    return this.themeService.getCurrentTheme();
  }

}
