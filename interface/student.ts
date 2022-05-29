export interface Ialuno {
  id: string;
  name: string;
  nickname: string;
  profile: string;
  banner: string;
  photos: string[];
  masterTag: string;
  tags: string[];
  phrase: string;
  description: string;
  social: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    github?: string;
  };
}
