import { Component } from '@angular/core';
import { SkillBadgeComponent } from '../../components/skill-badge/skill-badge.component';
import { PROFILE } from '../../data/profile.data';
import { SKILLS } from '../../data/skills.data';
import { SkillCategory } from '../../models/skill.model';

@Component({
  imports: [SkillBadgeComponent],
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
})
export class AboutPageComponent {
  readonly profile = PROFILE;
  readonly skills = SKILLS;
  readonly categories: readonly SkillCategory[] = [
    'Lenguajes',
    'Frontend',
    'Backend y datos',
    'Herramientas',
  ];

  skillsFor(category: SkillCategory) {
    return this.skills.filter((skill) => skill.category === category);
  }
}
