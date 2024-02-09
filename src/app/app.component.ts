import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JobsService } from './jobs.service';
import { Job } from './job';
import { JobsComponent } from './Pages/Components/jobs/jobs.component';
import { HeaderComponent } from './Pages/Shared/header/header.component';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'devjobs';
  jobs: Job[] = [];


  constructor(
    private jobsService: JobsService,
    private themeService: ThemeService
  ) {

  }

  ngOnInit(): void {

  }

  onDarkModeChange(isDarkMode: boolean): void {
    !isDarkMode;
  }

  get isDarkMode(): boolean {
    return this.themeService.getCurrentTheme(); // Get the current theme mode from the ThemeService
  }

}
