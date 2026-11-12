import { provideRouter } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders the primary navigation', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Proyectos');
    expect(fixture.nativeElement.textContent).toContain('Contacto');
  });

  it('toggles and persists the color theme', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    fixture.nativeElement.querySelector('button').click();

    expect(document.documentElement.dataset['theme']).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  });
});
