interface Experience {
  company: string;
  date: string;
  desc: string;
}

interface Internship extends Experience {
  role: string;
  img: string;
}

interface Teaching extends Experience {
  module: string;
}

export const INTERNSHIPS: Internship[] = [
  {
    company: 'WaveScan Technologies Pte. Ltd.',
    role: 'UI/UX Developer Intern',
    img: '',
    date: 'May 2020 - December 2020',
    desc:
      'Designed and maintained a brown-field Electron application that performs volumetric rendering \
      and image analysis of scanned data in 2D & 3D using VTKjs with React. Developed a green-field \
      Electron application in HTMLCSS/jQuery and Django that is integrated into a robotic scanner with\
      a RPi4 from ideation phase to a working beta product. Also in charge of redesign and prototyping in\
      Adobe XD for both applications.',
  },
];

export const TEACHINGS: Teaching[] = [
  {
    company: 'National University of Singapore (NUS)',
    date: 'Jan 2019 - Present',
    module: 'CS1010S/X Programming Methodology I',
    desc: 'Taught basic programming in Python. Graded assignments and taught weekly tutorials',
  },
  {
    company: 'National University of Singapore (NUS)',
    date: 'Jan 2020 - Present',
    module: 'CS3240: Interaction Design',
    desc:
      'Taught UX/UI design processes and prototyping skills. \
      Created and improved course material, graded assignments and taught lab sessions. \
      Handled administrative duties for 100+ students.',
  },
  {
    company: 'National University of Singapore (NUS)',
    date: 'Jan 2021 - Present',
    module: 'CS4240: Interaction Design for Virtual and Augmented Reality',
    desc: 'To be updated',
  },
];
