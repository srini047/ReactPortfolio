import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sriniketh J',
  subtitle: 'Sophomore Student @PSGiTech',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1FbTVMfWzFc9E1jvWtk4pLK5dCmk35kwP/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project-1.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/srini047/Hack6iX', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-2.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://public.tableau.com/app/profile/sriniketh.j/viz/ViztaVizuals/ViztaVisual-Dashboard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-3.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-4.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/srini047/Code-in-Place-2021', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-5.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-6.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/srini047/HomeSafetyandAutomationSystem', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
