import ExpressJs from '@/components/technologies/ExpressJs';
import KafkaIcon from '@/components/technologies/Kafka';
import Motion from '@/components/technologies/Motion';
import NextJs from '@/components/technologies/NextJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import RedisIcon from '@/components/technologies/Redis';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [

  {
    title: 'SynqFlow',
    description:
      'A Zapier-inspired automation platform that connects triggers to actions using an event-driven Kafka-based architecture',
    image: '/project/synqflow.png',
    video: 'https://ik.imagekit.io/ucspyjde1/SynqFlowDemo.mp4',
    link: '',
    technologies: [
      { name: 'Kafka', icon: <KafkaIcon key="kafka" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'NextJs', icon: <NextJs key="NextJs" /> },
      { name: 'Express.js', icon: <ExpressJs key="express" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Framer Motion', icon: <Motion key="framer-motion" /> },
    ],
    github: 'https://github.com/yourusername/synqflow',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/synqflow',
    isWorking: true,
  },
    {
    title: 'TrustLens',
    description:
      'A smart browser extension that analyzes Amazon product reviews in real time to generate trustworthy pros and cons using AI, caching, and intelligent scraping.',
    image: '/project/TrustLens.png',
    video: 'https://ik.imagekit.io/ucspyjde1/TrustLensDemoTwo.mp4',
    link: '',
    technologies: [
      { name: 'React.js', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Framer Motion', icon: <Motion key="framer-motion" /> },
      { name: 'Express.js', icon: <ExpressJs key="express" /> },
      { name: 'Redis', icon: <RedisIcon key="redis" /> },
    ],
    github: 'https://github.com/yourusername/trustlens',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/trustLens',
    isWorking: true,
  },
];
