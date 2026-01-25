import { ReactNode } from 'react';
import { ActivityIcon } from '../components/icons/ActivityIcon';
import { AudioLinesIcon } from '../components/icons/AudioLinesIcon';
import { BookOpenCheckIcon } from '../components/icons/BookOpenCheckIcon';
import { TelescopeIcon } from '../components/icons/TelescopeIcon';
import { SwordsIcon } from '../components/icons/SwordsIcon';

export interface HobbyItem {
    id: number;
    title: string;
    description: string;
    icon: ReactNode | string;
}

export const hobbies: HobbyItem[] = [
    {
        id: 1,
        title: 'Photography',
        description:
            'Photography allows me to capture the beauty of the world, which I combine with my passion for traveling. You can follow my journey and see my work on Instagram.',
        icon: <TelescopeIcon size={64} className="text-dark-blue" />,

    },
    {
        id: 2,
        title: 'Gaming',
        description:
            'Everyone needs to unwind sometimes! I enjoy playing FPS titles, but I am also familiar with many co-op and multiplayer games. Gaming helps me relax and stay sharp.',
        icon: <SwordsIcon size={64} className="text-dark-blue" />,
    },
    {
        id: 3,
        title: 'Reading',
        description:
            'I am a big fan of hard sci-fi literature and similar genres. My favorite authors include B. V. Larson and Stephen Baxter, whose works inspire my imagination.',
        icon: <BookOpenCheckIcon size={64} className="text-dark-blue" />,
    },
    {
        id: 4,
        title: 'Sport',
        description:
            'Staying active is important to me. I enjoy various sports and physical activities that help me maintain a healthy lifestyle and boost my energy for coding.',
        icon: <ActivityIcon size={64} className="text-dark-blue" />,
    },
    {
        id: 5,
        title: 'Music',
        description:
            'Music is my constant companion while coding and in daily life. I enjoy discovering new genres and artists, and music helps me stay focused and creative.',
        icon: <AudioLinesIcon size={64} className="text-dark-blue" />,
    },
];
