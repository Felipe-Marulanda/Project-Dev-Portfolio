import { PROJECTS } from './projects.data';

describe('PROJECTS', () => {
  it('contains uniquely numbered projects with repository and app links', () => {
    const numbers = PROJECTS.map((project) => project.number);

    expect(new Set(numbers).size).toBe(PROJECTS.length);
    expect(PROJECTS.length).toBe(4);
    for (const project of PROJECTS) {
      expect(project.repositoryUrl).toMatch(/^https:\/\/github\.com\//);
      expect(project.appUrl).toMatch(/^https:\/\/.+\.github\.io\//);
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.highlights.length).toBeGreaterThan(0);
    }
  });
});
