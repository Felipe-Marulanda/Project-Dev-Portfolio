import { TestBed } from '@angular/core/testing';
import { SkillBadgeComponent } from './skill-badge.component';

describe('SkillBadgeComponent', () => {
  it('renders the skill label and mark', async () => {
    await TestBed.configureTestingModule({ imports: [SkillBadgeComponent] }).compileComponents();
    const fixture = TestBed.createComponent(SkillBadgeComponent);
    fixture.componentRef.setInput('skill', {
      name: 'Angular',
      category: 'Frontend',
      mark: 'A',
    });
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Angular');
    expect(fixture.nativeElement.querySelector('.skill-badge__mark').textContent).toContain('A');
  });
});
