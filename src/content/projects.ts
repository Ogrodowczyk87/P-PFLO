// import { StaticImageData } from 'next/image';
import SoftwareHouse from '../assets/SoftwareHouse.jpg';
import IceCream from '../assets/IceCream.webp';
import FilmWeb from '../assets/FilmWeb.png';
import phonebook from '../assets/phonebook.png';
import BetterShip from '../assets/BetterShip.png';
import NEUROFORAGE from '../assets/NEUROFORAGE.png';
import MainProject from '../assets/MainProject.png';

export interface TechnologyGroup {
    category: string;
    items: string[];
}

export interface Project {
    id: number;
    title: string;
    image: string;
    github: string;
    technologies: string[];
    technologyGroups?: TechnologyGroup[];
    description: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Software House',
        image: SoftwareHouse,
        github: 'https://github.com/Ogrodowczyk87/software-house.git',
        technologies: ['HTML', 'SASS', 'JavaScript'],
        description:
            'This is my first mobile-first project, designed with responsiveness in mind. It utilizes HTML, SASS, and JavaScript to create a modern and user-friendly web application.',
    },
    {
        id: 2,
        title: 'Ice Cream Shop',
        image: IceCream,
        github: 'https://github.com/Ogrodowczyk87/Ice-cream-shop.git',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        description:
            'A visually appealing landing page for an ice cream shop, designed with responsiveness in mind. Built using HTML, CSS, and JavaScript to provide a delightful user experience.',
    },
    {
        id: 3,
        title: 'FilmWeb',
        image: FilmWeb,
        github: 'https://github.com/Ogrodowczyk87/FilmWeb.git',
        technologies: ['JavaScript', 'Sass', 'API'],
        description:
            'A collaborative project developed with a team, featuring a movie database web application. It uses JavaScript, Sass, and external APIs to provide users with movie information, ratings, and reviews.',
    },
    {
        id: 4,
        title: 'Phonebook App',
        image: phonebook,
        github: 'https://github.com/Ogrodowczyk87/goit-react-hw-08-phonebook.git',
        technologies: ['React', 'Redux', 'Firebase'],
        description:
            'A contact management application built with React and Redux. It allows users to add, edit, and delete contacts, with real-time data synchronization using Firebase.',
    },
    {
        id: 5,
        title: 'Bettership',
        image: BetterShip,
        github: 'https://github.com/Ogrodowczyk87/BetterShip.git',
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        description:
            'A modern and responsive landing page built with React, TypeScript, and Tailwind CSS. This project demonstrates advanced front-end development skills with clean, maintainable code architecture and beautiful UI design.',
    },
    {
        id: 6,
        title: 'NEUROFORAGE',
        image: NEUROFORAGE,
        github: 'https://github.com/Ogrodowczyk87/NeuroForge-Labs.git',
        technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Supabase'],
        description:
            'ProcesoryPanel is a full-featured web application that includes a secure login flow, a post‑login dashboard with project tracking (stages, milestones, budgets), and a shopping cart experience to demonstrate e‑commerce logic and UI state management. The app focuses on clean, responsive UI, reusable components, and clear data presentation, showing my ability to build modern, scalable front‑end experiences.',
    },
    {
        id: 7,
        title: 'Main Project (In Progress)',
        image: MainProject,
        github: 'https://github.com/Ogrodowczyk87/Shift-Allocation-Automation-System.git',
        technologies: ['React', 'TypeScript', 'AWS'],
        technologyGroups: [
            {
                category: 'Frontend',
                items: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
            },
            {
                category: 'Backend (Serverless Architecture)',
                items: ['AWS Lambda', 'Amazon API Gateway', 'Amazon DynamoDB'],
            },
            {
                category: 'Authentication & Security',
                items: ['Amazon Cognito', 'IAM (role-based access control)'],
            },
            {
                category: 'Hosting & Infrastructure',
                items: [
                    'Amazon S3 (static hosting)',
                    'Amazon CloudFront (CDN)',
                    'AWS CloudWatch (logging & monitoring)',
                    'AWS Budgets (cost control)',
                ],
            },
            {
                category: 'DevOps & Tooling',
                items: [
                    'GitHub (version control)',
                    'CI/CD (planned)',
                    'AWS CDK (Infrastructure as Code - planned)',
                ],
            },
        ],
        description:
            'Shift Allocation Automation System (in progress) to cloud-based application automating shift planning using training constraints, rotation logic and fairness scoring.\n\nThe system is designed to solve a real operational bottleneck affecting planning time, error rate and workload distribution.\n\nCurrent development includes business rule validation, availability management and historical reporting.\n\nThis is not a demo project but a production-oriented system built to address a real business problem.',
    },
];
