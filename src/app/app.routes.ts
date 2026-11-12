import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about/about-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { ProjectsPageComponent } from './pages/projects/projects-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Inicio | Juan Felipe Castro' },
  { path: 'projects', component: ProjectsPageComponent, title: 'Proyectos | Juan Felipe Castro' },
  { path: 'about', component: AboutPageComponent, title: 'Perfil y contacto | Juan Felipe Castro' },
  { path: '**', redirectTo: '' },
];
