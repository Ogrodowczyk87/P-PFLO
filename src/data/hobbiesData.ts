import { ReactNode } from 'react';

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
        icon: '📸',

    },
    {
        id: 2,
        title: 'Gaming',
        description:
            'Everyone needs to unwind sometimes! I enjoy playing FPS titles, but I am also familiar with many co-op and multiplayer games. Gaming helps me relax and stay sharp.',
        icon: '🎮',
    },
    {
        id: 3,
        title: 'Reading',
        description:
            'I am a big fan of hard sci-fi literature and similar genres. My favorite authors include B. V. Larson and Stephen Baxter, whose works inspire my imagination.',
        icon: '📚',
    },
];