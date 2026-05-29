
export const personalInfo = {
  name: 'Sindhav Dinesh',
  title: 'Full Stack Developer & BCA Student',
  bio: 'I am a BCA first-year student at Vidhyadeep University. I enjoy building websites and learning React, JavaScript, and other web technologies through hands-on projects.',
  email: 'Sindhavdinesh82@gmail.com',
  phone: '+91 9510824860',
  location: 'surat, India',
  resumeUrl: '/Sindhav_Dinesh_Resume.pdf',
  aboutImage: '/images/about/about-portrait.png',
};

export const aboutContent = {
  heading: 'Who am I?',
  image: personalInfo.aboutImage ?? '/portfolio.png',
  paragraphs: [
    `Hi, I'm ${personalInfo.name}. I'm currently in my first year of BCA at Vidhyadeep University and I've been learning web development on my own alongside my coursework. I started with basic HTML and CSS, then moved to JavaScript, and now I'm working with React.`,
    'I like building things I can actually show people, not just code that sits on my computer. Most of what I know came from watching tutorials, reading docs, and making mistakes in my own projects.',
    `I'm based in ${personalInfo.location} and looking to learn more through real projects and internships. I'm comfortable with React, JavaScript, and basic Node.js, and I'm always trying to improve.`,
  ],
};

export const socialLinks = [
  { platform: 'GitHub', url: 'https://github.com/sindhavdinesh', icon: 'FaGithub' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/sindhavdinesh', icon: 'FaLinkedin' },
  { platform: 'Twitter', url: 'https://twitter.com/sindhavdinesh', icon: 'FaTwitter' },
  { platform: 'Instagram', url: 'https://instagram.com/sindhavdinesh', icon: 'FaInstagram' }
];

export const stats = [
  { label: 'Projects Completed', value: 6, suffix: '' },
  { label: 'Months of Learning', value: 12, suffix: '+' },
  { label: 'GitHub Repos', value: 10, suffix: '+' },
  { label: 'GitHub Commits', value: 100, suffix: '+' }
];

export { projectsData, projectCategories } from './projectsData';

export const skillsData = [
  { name: 'HTML', level: 95, category: 'frontend', yearsOfExperience: 2, icon: '🌐' },
  { name: 'CSS', level: 90, category: 'frontend', yearsOfExperience: 2, icon: '🎨' },
  { name: 'JavaScript', level: 88, category: 'frontend', yearsOfExperience: 2, icon: '⚡' },
  { name: 'React', level: 85, category: 'frontend', yearsOfExperience: 1, icon: '⚛️' },
  { name: 'TypeScript', level: 75, category: 'frontend', yearsOfExperience: 1, icon: '📘' },

  { name: 'Node.js', level: 78, category: 'backend', yearsOfExperience: 1, icon: '🟢' },
  { name: 'Python', level: 80, category: 'backend', yearsOfExperience: 1, icon: '🐍' },
  { name: 'C', level: 72, category: 'backend', yearsOfExperience: 1, icon: '💻' },
  { name: 'C++', level: 74, category: 'backend', yearsOfExperience: 1, icon: '🚀' },

  { name: 'Google Sheets', level: 82, category: 'tools', yearsOfExperience: 1, icon: '📊' },
  { name: 'Photoshop', level: 88, category: 'design', yearsOfExperience: 2, icon: '🖌️' },
  { name: 'Adobe Premiere Pro', level: 85, category: 'design', yearsOfExperience: 2, icon: '🎬' }
];

export const education = [
  {
    degree: 'BCA — Bachelor of Computer Applications',
    institution: 'Vidhyadeep University',
    period: '2025 - 2027',
    description: 'First year. CGPA: 8.12/10',
  },
  {
  degree: 'MCA / MSc — Study Abroad Goal',
  institution: 'Germany',
  period: 'Future Goal',
  description:
    'Aspiring to pursue an MCA or MSc in Germany while building strong skills in full stack development, cyber security, and modern technologies.'
},
];

export const experienceData = [
  {
    id: 1,
    company: 'Vidhyadeep University',
    role: 'BCA Student',
    period: '2025 - Present',
    description: 'Studying Bachelor of Computer Applications. Learning programming fundamentals, web development, and computer science subjects as part of the curriculum.',
    technologies: ['C', 'C++', 'Python', 'HTML', 'CSS', 'JavaScript']
  },
  {
    id: 2,
    company: 'Self Learning',
    role: 'Frontend Developer (Learning)',
    period: '2025 - Present',
    description: 'Learning React and modern JavaScript through tutorials, documentation, and building my own projects. Focused on understanding components, props, state, and hooks.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap']
  },
  {
    id: 3,
    company: 'Personal Projects',
    role: 'Web Developer',
    period: '2025 - 2026',
    description: 'Built small websites and web apps to practice what I was learning. All projects are on GitHub and deployed on Netlify so anyone can try them.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Git']
  }
];

export const creativeCompanions = [
  {
    id: 1,
    name: 'Akshat Kumbhani',
    role: 'Full Stack Developer',
    bio: 'Coding buddy & project partner — Full Stack & Cyber Security Specialist.',
    image: '/images/companions/friend-1.jpg',
    linkedin: 'https://www.linkedin.com/in/akshat-kumbhani-198816281/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BO9rz0kkFQoenbeKGF3DjJA%3D%3D',
  },
  {
    id: 2,
    name: 'Anugrah rakholiya',
    role: 'Full Stack Developer',
    bio: 'Passionate Full Stack Developer focused on building modern, responsive, and scalable web applications using frontend and backend technologies.',
    image: '/images/companions/friend-2.jpg',
    linkedin: 'https://www.linkedin.com/in/rakholiya-anugrah/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BClxptkPuSr6sK3joEZ3dhw%3D%3D',
  },
];

export const skillCategories = [
  { id: 'frontend', label: 'Frontend Development', color: '#00f3ff' },
  { id: 'backend', label: 'Backend Development', color: '#ff00e4' },
  { id: 'database', label: 'Database', color: '#7000ff' },
  { id: 'tools', label: 'Tools & Technologies', color: '#00ff88' }
];