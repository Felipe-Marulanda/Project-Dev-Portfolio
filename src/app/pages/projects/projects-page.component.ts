import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { PROJECTS } from '../../data/projects.data';

@Component({
  imports: [ProjectCardComponent],
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss',
})
export class ProjectsPageComponent {
  readonly projects = PROJECTS;
}
