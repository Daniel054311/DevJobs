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
  storedTheme: string | null;

  constructor(
    private jobsService: JobsService,
    private themeService: ThemeService
  ) {
    this.storedTheme = this.themeService.getCurrentTheme();
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

  setTheme() {
    this.themeService.toggleTheme();
    this.storedTheme = this.themeService.getCurrentTheme();
  }
}
