export interface Iprofessor {
  id: string;
  name: string;
  nickname: string;
  profile: string;
  banner: string;
  masterSubject: string;
  subjects: string[];
  phrase: string;
  phrases: string[];
  description: string;
  social: {
    email: string;
    linkedin?: string;
    lattes?: string;
  };
}
