import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private localStorageKey = 'isDarkMode';
  private isDarkMode: boolean = false;

  constructor() {
    // Retrieve the theme preference from local storage
    const storedTheme = localStorage.getItem(this.localStorageKey);
    this.isDarkMode = storedTheme ? JSON.parse(storedTheme) : false;
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    // You can also save the theme preference in local storage if needed
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.isDarkMode));
  }

  getCurrentTheme(): boolean {
    return this.isDarkMode;
  }
}
