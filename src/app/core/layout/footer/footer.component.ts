import { Component } from '@angular/core';
import { PROFILE } from '../../../data/profile.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly profile = PROFILE;
  readonly currentYear = new Date().getFullYear();
}
