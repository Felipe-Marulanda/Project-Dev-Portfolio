import { TestBed } from '@angular/core/testing';
import { ProjectsPageComponent } from './projects-page.component';

describe('ProjectsPageComponent', () => {
  it('renders a card for every catalog entry', async () => {
    await TestBed.configureTestingModule({ imports: [ProjectsPageComponent] }).compileComponents();
    const fixture = TestBed.createComponent(ProjectsPageComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('app-project-card').length).toBe(4);
    expect(fixture.nativeElement.textContent).toContain('Storage Manager');
  });
});
