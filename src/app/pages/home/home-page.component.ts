import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SkillBadgeComponent } from '../../components/skill-badge/skill-badge.component';
import { PROJECTS } from '../../data/projects.data';
import { PROFILE } from '../../data/profile.data';
import { SKILLS } from '../../data/skills.data';

@Component({
  imports: [RouterLink, SkillBadgeComponent],
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  readonly profile = PROFILE;
  readonly skills = SKILLS;
  readonly featuredProject = PROJECTS[1];
  readonly projectCount = PROJECTS.length.toString().padStart(2, '0');
}
