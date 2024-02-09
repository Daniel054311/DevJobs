import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly themeKey = 'themeColor';

  constructor() { }

  getCurrentTheme(): string | null {
    return localStorage.getItem(this.themeKey);
  }

  toggleTheme(): void {
    const currentTheme = this.getCurrentTheme();
    const newTheme = currentTheme === 'themeLight' ? 'themeDark' : 'themeLight';
    localStorage.setItem(this.themeKey, newTheme);
  }
}
