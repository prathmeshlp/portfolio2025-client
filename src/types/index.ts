export interface Resume {
    name: string;
    email: string;
    phone: string;
    skills: string[];
    experience: { title: string; company: string; duration: string; skills: string[] }[];
    education: { degree: string; institution: string; duration: string }[];
    links: { label: string; url: string }[];
  }