import { Component, input } from '@angular/core';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skill-badge',
  templateUrl: './skill-badge.component.html',
  styleUrl: './skill-badge.component.scss',
})
export class SkillBadgeComponent {
  readonly skill = input.required<Skill>();
}
