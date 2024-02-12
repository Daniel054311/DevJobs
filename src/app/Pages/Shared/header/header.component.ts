import { NgClass } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ThemeService } from '../../../theme.service';
import { JobsService } from '../../../jobs.service';
import { Job } from '../../../job';
import { NavbarComponent } from '../filter/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [NgClass, NavbarComponent],
})
export class HeaderComponent implements OnInit {
  @Output() darkModeChange = new EventEmitter<boolean>();

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  toggleDarkMode(): void {
    this.themeService.toggleTheme();
    this.darkModeChange.emit(this.isDarkMode);
  }

  get isDarkMode(): boolean {
    return this.themeService.getCurrentTheme();
  }
}
