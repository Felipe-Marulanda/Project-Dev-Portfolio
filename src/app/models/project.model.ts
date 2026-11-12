export interface Project {
  readonly number: string;
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly highlights: readonly string[];
  readonly repositoryUrl: string;
  readonly appUrl: string;
}
