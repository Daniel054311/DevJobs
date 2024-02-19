import { NgClass } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ThemeService } from '../../../service/theme/theme.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [NgClass, NavbarComponent],
})
export class HeaderComponent implements OnInit {
  @Output() darkModeChange = new EventEmitter<boolean>();

  constructor(private router: Router, private themeService: ThemeService) {}

  ngOnInit(): void {}

  routeToHome() {
    this.router.navigate(['/']);
  }

  toggleDarkMode(): void {
    this.themeService.toggleTheme();
    this.darkModeChange.emit(this.isDarkMode);
  }

  get isDarkMode(): boolean {
    return this.themeService.getCurrentTheme();
  }
}
