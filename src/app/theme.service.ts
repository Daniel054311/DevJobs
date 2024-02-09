import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode: boolean = false;

  constructor() { }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    // You can also save the theme preference in local storage if needed
  }

  getCurrentTheme(): boolean {
    return this.isDarkMode;
  }
}
