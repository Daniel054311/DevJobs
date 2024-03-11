import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationError, Router, RouterOutlet } from '@angular/router';
import { PageNotFoundComponent } from './Pages/Components/page-not-found/page-not-found.component';
import { HeaderComponent } from './Pages/Shared/header/header.component';
import { Job } from './service/job/job';
import { ThemeService } from './service/theme/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, HeaderComponent, PageNotFoundComponent],
})
export class AppComponent implements OnInit {
  title = 'devjobs';
  jobs: Job[] = [];
  showError: boolean = false;

  constructor(private themeService: ThemeService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationError) {
        this.showError = true;
      }
    });
  }

  ngOnInit(): void {}

  onDarkModeChange(isDarkMode: boolean): void {
    !isDarkMode;
  }

  get isDarkMode(): boolean {
    return this.themeService.getCurrentTheme(); // Get the current theme mode from the ThemeService
  }
}
