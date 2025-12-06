import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class Home {
constructor(private router: Router) {}

 goToPortfolio() {
    this.router.navigate(['portfolio']);
  }

  goToDeployment() {
    this.router.navigate(['deployment']);
  }
}
