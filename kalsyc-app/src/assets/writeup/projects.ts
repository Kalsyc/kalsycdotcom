interface Project {
  name: string;
  img: string;
  desc: string;
  techStack: string;
}

export const PROJECTS: Project[] = [
  {
    name: 'Project Kampong',
    img: '',
    desc:
      'An online collaborative platform that serves as a digital aggregator to \
      effectively map assets across communities and establish a data and documentation \
      center for the Social Sector to provide clarity in needs, resources and gaps.\
      ',
    techStack: 'Angular, NodeJS, Express and PostgreSQL',
  },
  {
    name: 'SafeSpace',
    img:
      'A VR Mental Health Simulator and Meditation guide that aims to enhance awareness and understanding \
      of anxiety disorders through gameplay. Voted 2nd best project in iSTePS AY19/20 S2: CS4240 \
      Interaction Design for Virtual & Augmented Reality Showcase out of 10 teams.\
    ',
    desc: '',
    techStack: 'C# with Unity Game Engine, using TobiiXR SDK, SRanpial SDK and SRWorks SDK',
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
  },
];
