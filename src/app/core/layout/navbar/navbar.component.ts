import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  readonly darkMode = signal(false);

  ngOnInit(): void {
    this.darkMode.set(localStorage.getItem('theme') === 'dark');
    this.applyTheme();
  }

  toggleTheme(): void {
    this.darkMode.update((isDark) => !isDark);
    this.applyTheme();
    localStorage.setItem('theme', this.darkMode() ? 'dark' : 'light');
  }

  private applyTheme(): void {
    document.documentElement.dataset['theme'] = this.darkMode() ? 'dark' : 'light';
  }
}
