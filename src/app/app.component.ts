import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationError, Router, RouterOutlet } from '@angular/router';
import { JobsService } from './jobs.service';
import { Job } from './job';
import { JobsComponent } from './Pages/Components/jobs/jobs.component';
import { HeaderComponent } from './Pages/Shared/header/header.component';
import { ThemeService } from './theme.service';
import { PageNotFoundComponent } from "./Pages/Components/page-not-found/page-not-found.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, PageNotFoundComponent]
})
export class AppComponent implements OnInit {
  title = 'devjobs';
  jobs: Job[] = [];
  showError: boolean = false;

  constructor(
    private themeService: ThemeService,private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationError) {
        this.showError = true;
      }
    });

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
