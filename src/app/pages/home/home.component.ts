import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToPortfolio() {
    this.router.navigate(['portfolio']);
  }

  goToDeployment() {
    this.router.navigate(['deployment']);
  }
}
