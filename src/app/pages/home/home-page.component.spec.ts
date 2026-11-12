import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  it('shows the approved introduction and technology badges', async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(HomePageComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Juan Felipe');
    expect(fixture.nativeElement.textContent).toContain('PhishGuard');
    expect(fixture.nativeElement.textContent).toContain('Angular');
    expect(fixture.nativeElement.querySelectorAll('app-skill-badge').length).toBeGreaterThan(0);
  });
});
