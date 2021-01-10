export interface ProjectInterface {
  name: string;
  img: string;
  desc: string;
  techStack: string;
  link: string;
  src: string;
}

export const PROJECTS: ProjectInterface[] = [
  {
    name: 'Project Kampong',
    img: '',
    desc:
      'An online collaborative platform that serves as a digital aggregator to \
      effectively map assets across communities and establish a data and documentation \
      center for the Social Sector to provide clarity in needs, resources and gaps.\
      ',
    techStack: 'Angular, NodeJS, Express and PostgreSQL',
    link: 'https://kampong.app/home',
    src: 'https://github.com/Project-Kampong',
  },
  {
    name: 'SafeSpace',
    img: '',
    desc:
      'A VR Mental Health Simulator and Meditation guide that aims to enhance awareness and understanding \
      of anxiety disorders through gameplay. Voted 2nd best project in iSTePS AY19/20 S2: CS4240 \
      Interaction Design for Virtual & Augmented Reality Showcase out of 10 teams.\
      ',
    techStack: 'C# with Unity Game Engine, using TobiiXR SDK, SRanpial SDK and SRWorks SDK',
    link: 'https://isteps.comp.nus.edu.sg/event/cs4240/module/AY2019-20+Semester_2+Task_1/project/7',
    src: 'https://github.com/Kalsyc/SafeSpace',
  },
  {
    name: 'Digital Kampung',
    img: '',
    desc:
      "Part of Google Developer Student Club NUS (DSCNUS). Worked on a project that aims \
      to connect 20,000 SMEs under the Federation of Merchants Association Singapore (FMAS) and consumers. \
      The project enables the general public to view the food of Singapore's many hawker centres and allow \
      users to check hawker food prices, find their way to the most popular or nearby hawker and leave reviews.\
      ",
    techStack: 'React, NodeJS, Express and PostgreSQL',
    link: 'https://github.com/DigitalKampong',
    src: 'https://github.com/DigitalKampong',
  },
];
