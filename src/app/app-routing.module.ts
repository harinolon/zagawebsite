import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './tabComponents/about/about.component';
import { CareersComponent } from './tabComponents/careers/careers.component';
import { ContactComponent } from './tabComponents/contact/contact.component';
import { DeveloperTrainingComponent } from './tabComponents/developer-training/developer-training.component';
import { PortfolioComponent } from './tabComponents/portfolio/portfolio.component';
import { RedhatCertsComponent } from './tabComponents/redhat-certs/redhat-certs.component';
import { ServicesComponent } from './tabComponents/services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'redhatCerts', component: RedhatCertsComponent },
  { path: 'devTraining', component: DeveloperTrainingComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'career', component: CareersComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
