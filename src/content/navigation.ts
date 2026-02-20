import type { NavItem } from '../types/navigation';
import { sectionIds } from './sectionIds';

export const navigationItems: NavItem[] = [
  {
    id: 1,
    label: 'Home',
    href: `#${sectionIds.home}`,
  },
  {
    id: 2,
    label: 'Skills',
    href: `#${sectionIds.skills}`,
  },
  {
    id: 3,
    label: 'Projects',
    href: `#${sectionIds.projects}`,
  },
  {
    id: 4,
    label: 'Contact',
    href: `#${sectionIds.contact}`,
  },
  {
    id: 5,
    label: 'Experience',
    href: `#${sectionIds.experience}`,
  },
];
