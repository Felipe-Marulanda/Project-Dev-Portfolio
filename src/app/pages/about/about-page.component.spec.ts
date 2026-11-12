import { TestBed } from '@angular/core/testing';
import { AboutPageComponent } from './about-page.component';

describe('AboutPageComponent', () => {
  it('renders the professional profile and contact methods', async () => {
    await TestBed.configureTestingModule({ imports: [AboutPageComponent] }).compileComponents();
    const fixture = TestBed.createComponent(AboutPageComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('PhishGuard');
    expect(fixture.nativeElement.textContent).toContain('juan.castro05@uceva.edu.co');
    expect(fixture.nativeElement.textContent).toContain('+57 323 473 0922');
    expect(fixture.nativeElement.querySelectorAll('.contact-link')).toHaveLength(4);
  });
});
