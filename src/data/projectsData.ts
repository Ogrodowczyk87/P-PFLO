import { StaticImageData } from 'next/image';
import SoftwareHouse from '../assets/SoftwareHouse.jpg';
import IceCream from '../assets/IceCream.webp';
import FilmWeb from '../assets/FilmWeb.png';
import phonebook from '../assets/phonebook.png';
import build from '../assets/build.svg';

export interface Project {
    id: number;
    title: string;
    image: StaticImageData | string;
    github: string;
    technologies: string[];
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
        title: 'Project Five',
        image: build,
        github: '',
        technologies: ['---', '---'],
        description:
            'This project is currently under construction. More details will be available soon.',
    },
    {
        id: 6,
        title: 'Project Six',
        image: build,
        github: '',
        technologies: ['---', '---', '---'],
        description:
            'This project is currently under construction. More details will be available soon.',
    },
];