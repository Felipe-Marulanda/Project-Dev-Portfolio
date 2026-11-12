import { SKILLS } from './skills.data';

describe('SKILLS', () => {
  it('contains unique names and the primary technologies from the profile', () => {
    const names = SKILLS.map((skill) => skill.name);

    expect(new Set(names).size).toBe(SKILLS.length);
    expect(names).toEqual(
      expect.arrayContaining(['Angular', 'React', 'FastAPI', 'Supabase', 'Linux']),
    );
    expect(SKILLS.every((skill) => skill.mark.length > 0)).toBe(true);
  });
});
