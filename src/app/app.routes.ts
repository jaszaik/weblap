import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TechDeepDivesComponent } from './pages/tech-deep-dives/tech-deep-dives.component';
import { DeploymentComponent } from './pages/deployment/deployment.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },   // Landing (fedlap)
  { path: 'home', component: HomeComponent }, // Home oldal
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'tech-deep-dives', component: TechDeepDivesComponent },
  { path: 'deployment', component: DeploymentComponent },
  { path: 'contact', component: ContactComponent },

  // bármi más → landingre vissza
  { path: '**', redirectTo: '' }
];
