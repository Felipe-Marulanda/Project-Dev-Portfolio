import { TestBed } from '@angular/core/testing';
import { ProjectCardComponent } from './project-card.component';

describe('ProjectCardComponent', () => {
  it('renders the project details and both destination links', async () => {
    await TestBed.configureTestingModule({ imports: [ProjectCardComponent] }).compileComponents();
    const fixture = TestBed.createComponent(ProjectCardComponent);
    fixture.componentRef.setInput('project', {
      number: '01',
      title: 'Portfolio',
      category: 'Web',
      description: 'Un proyecto de muestra.',
      technologies: ['Angular'],
      highlights: ['Responsive'],
      repositoryUrl: 'https://github.com/example/repo',
      appUrl: 'https://example.github.io/repo/',
    });
    fixture.detectChanges();
    const links = fixture.nativeElement.querySelectorAll('a');

    expect(fixture.nativeElement.textContent).toContain('Portfolio');
    expect(links).toHaveLength(2);
    expect(links[0].getAttribute('href')).toBe('https://github.com/example/repo');
    expect(links[1].getAttribute('href')).toBe('https://example.github.io/repo/');
  });
});
