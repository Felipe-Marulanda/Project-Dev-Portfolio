export type SkillCategory = 'Lenguajes' | 'Frontend' | 'Backend y datos' | 'Herramientas';

export interface Skill {
  readonly name: string;
  readonly category: SkillCategory;
  readonly mark: string;
}
