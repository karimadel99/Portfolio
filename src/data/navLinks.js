import { FaHome, FaInfoCircle, FaProjectDiagram } from 'react-icons/fa';

export const navLinks = [
  { to: '/',         icon: FaHome,           label: 'Home',     end: true },
  { to: '/about',    icon: FaInfoCircle,    label: 'About',    end: false },
  { to: '/projects', icon: FaProjectDiagram, label: 'Projects', end: false },
];
