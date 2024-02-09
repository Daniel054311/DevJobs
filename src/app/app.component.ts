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
  storedTheme: string | null;

  constructor(
    private jobsService: JobsService,
    private themeService: ThemeService
  ) {
    this.storedTheme = this.themeService.getCurrentTheme();
  }

  ngOnInit(): void {

  }
  setTheme() {
    this.themeService.toggleTheme();
    this.storedTheme = this.themeService.getCurrentTheme();
  }

}
