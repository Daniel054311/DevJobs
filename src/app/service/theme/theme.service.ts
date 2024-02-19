import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private localStorageKey = 'isDarkMode';
  private isDarkMode: boolean = false;

  constructor(private rendererFactory: RendererFactory2) {
    // Retrieve the theme preference from local storage
    const storedTheme = localStorage.getItem(this.localStorageKey);
    this.isDarkMode = storedTheme ? JSON.parse(storedTheme) : false;
    this.applyThemeToBody();
  }

  private applyThemeToBody(): void {
    const renderer: Renderer2 = this.rendererFactory.createRenderer(null, null);
    if (this.isDarkMode) {
      renderer.addClass(document.body, 'darkMode');
    } else {
      renderer.removeClass(document.body, 'darkMode');
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    // You can also save the theme preference in local storage if needed
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.isDarkMode));
    this.applyThemeToBody();
  }

  getCurrentTheme(): boolean {
    return this.isDarkMode;
  }
}
