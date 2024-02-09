import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../Shared/navbar/navbar.component';
import { JobsService } from '../../../jobs.service';
import { Job } from '../../../job';
import { NgClass } from '@angular/common';
import { ThemeService } from '../../../theme.service';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [NavbarComponent,NgClass],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
})
export class JobsComponent implements OnInit {
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
