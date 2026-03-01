import Fire from '../assets/fire.gif';

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link: string;
  image?: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'TypeScript Fundamentals',
    issuer: 'CodeStoryBro',
    date: 'November 2024',
    link: 'https://www.codestorybro.com/check?certId=TSFL-2024-98271546'
  },
  // {
  //   id: 2,
  //   title: 'TS course in progress',
  //   issuer: 'Coursera',
  //   date: '--',
  //   link: '#'
  // },
  {
    id: 3,
    title: 'Cloud Support Specialist',
    issuer: 'CorelationOne',
    date: 'currently in progress',
    link: '#',
    image: Fire
  }
];
