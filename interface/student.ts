export interface Ialuno {
  id: string;
  name: string;
  nickname: string;
  profile: string;
  banner: string;
  gallery: string[];
  mastertag: string;
  tags: string[];
  phrase: string;
  phrases: string[];
  description: string;
  social: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    github?: string;
  };
}
