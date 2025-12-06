import { Component,OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgIf } from '@angular/common';

type Theme = 'dark' | 'blueprint';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit 
{
  currentYear = new Date().getFullYear();

  // Landing page flag-je
  isLanding = false;

  //aktuális téma
   currentTheme: Theme = 'dark';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(e => {
        const url = e.urlAfterRedirects;
        // landing = üres path = '/'
        this.isLanding = (url === '/' || url === '');
      });
  }

  ngOnInit(): void {
  if (typeof window === 'undefined') {
    return; // SSR alatt vagyunk, nincs theme váltás
  }

  const saved = localStorage.getItem('theme') as Theme | null;

  if (saved === 'dark' || saved === 'blueprint') {
    this.setTheme(saved);
  } else {
    this.setTheme('dark');
  }
}


onThemeToggle(event: Event): void {
  const checked = (event.target as HTMLInputElement).checked;
  // amikor a kapcsoló "űr/sötét" állásban van (checked = true) → dark theme
  // amikor "nappali" állásban (checked = false) → blueprint theme
  this.setTheme(checked ? 'dark' : 'blueprint');
}


  private setTheme(theme: Theme): void {
  this.currentTheme = theme;

  if (typeof window === 'undefined') return;

  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

}
