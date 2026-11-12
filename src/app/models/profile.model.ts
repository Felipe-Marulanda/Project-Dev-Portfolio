export interface Profile {
  readonly name: string;
  readonly role: string;
  readonly institution: string;
  readonly location: string;
  readonly email: string;
  readonly shortBio: string;
  readonly fullBio: string;
  readonly links: {
    readonly github: string;
    readonly linkedin: string;
    readonly whatsapp: string;
  };
}
