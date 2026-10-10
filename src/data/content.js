export const personalInfo = {
  name: 'Satyam Gonkar',
  shortName: 'SG',
  title: 'Data Science Student & Software Developer',
  tagline: 'Turning raw data & complex ideas into sleek, real-world solutions.',
  bio: `I am a Computer Science student at Bansal College of Engineering, Bhopal (RGPV, Batch 2024–2028). Passionate about Data Science, Machine Learning, and Web Development, I focus on analyzing data patterns and building full-stack applications with clean code and high visual aesthetics.`,
  location: 'Ashoka Garden, Bhopal, Madhya Pradesh, India',
  college: 'Bansal College of Engineering, Mandideep (RGPV)',
  degree: 'B.Tech in Computer Science & Engineering (Semester 5)',
  school: 'Govt. Excellence School Barghat',
  email: 'gonkarsatyam0@gmail.com',
  phone: '+91 74405 06686',
  rawPhone: '7440506686',
  linkedin: 'https://linkedin.com/in/satyamgonkar',
  github: 'https://github.com/satyamgonkar',
  availability: 'Open to Internships, Freelance Work & Collaborations'
}

export const stats = [
  { count: '8+', label: 'Projects Built' },
  { count: '6+', label: 'Languages' },
  { count: '1st', label: 'TechnoVision 2026 Prize' },
  { count: '1', label: 'Freelance Client Delivered' },
  { count: '4+', label: 'Certifications' }
]

export const typewriterWords = [
  'Data Scientist',
  'Python Developer',
  'Full Stack Builder',
  'Problem Solver',
  'Freelance Web Dev'
]

export const projects = [
  {
    id: 'sentify',
    name: 'Sentify',
    year: '2025',
    category: 'ds',
    badge: 'Minor Project',
    icon: '📊',
    tags: ['Python', 'NLTK', 'VADER', 'Flask', 'Seaborn', 'NLP'],
    summary: 'E-commerce review sentiment analysis tool that classifies feedback and returns clear product verdicts.',
    description: 'Sentify takes product review links or raw feedback text, processes the content using NLTK and VADER sentiment lexicons, and generates visual sentiment trends and word clouds. Shoppers get an instant verdict (Good, Average, or Best) to make confident purchase decisions.',
    highlights: [
      'NLP sentiment classification pipeline built with VADER and NLTK',
      'Interactive visual outputs: word clouds, sentiment distributions, and rating trends',
      'Lightweight Flask API backend with responsive web interface',
      'Reduces purchase research time for e-commerce customers'
    ],
    status: 'Completed',
    statusClass: 'status-done',
    github: 'https://github.com/satyamgonkar/Portfolio',
    featured: true
  },
  {
    id: 'musafirhub',
    name: 'MusafirHub',
    year: '2025',
    category: 'ds',
    badge: 'Major Project',
    icon: '✈️',
    tags: ['Python', 'Django', 'Flask', 'Scikit-learn', 'MySQL', 'Razorpay'],
    summary: 'All-in-one travel booking system featuring demand forecasting, customer segmentation, and price trend analytics.',
    description: 'An end-to-end travel booking platform covering hotels, flights, trains, buses, and cabs. Beyond standard booking flows, MusafirHub integrates ML analytics models built with Scikit-learn, pandas, and NumPy for forecasting booking demand, segmenting users, and flagging fraudulent transactions.',
    highlights: [
      'Demand forecasting and price fluctuation prediction using Scikit-learn',
      'Razorpay payment gateway integration with automated SMTP confirmation emails',
      'Customer segmentation and anomaly detection algorithms for fraud prevention',
      'Comprehensive admin portal with real-time revenue and booking charts'
    ],
    status: 'Completed',
    statusClass: 'status-done',
    github: 'https://github.com/satyamgonkar/Portfolio',
    featured: true
  },
  {
    id: 'agriconnect',
    name: 'AgriConnect',
    year: '2025 – Present',
    category: 'web',
    badge: 'Live Marketplace',
    icon: '🌾',
    tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Gemini AI', 'Tailwind'],
    summary: 'Direct marketplace connecting farmers with wholesalers and consumers, featuring AI voice listings and mandi price trends.',
    description: 'A multi-portal agricultural marketplace designed to eliminate middleman margins. Features voice-assisted bilingual (Hindi/English) product listings powered by Gemini AI, automated APMC mandi price suggestions, and 30+ optimized routes.',
    highlights: [
      '4 distinct portals: Farmers, Wholesalers, Consumers, and Admin',
      'Voice-first Hindi/English form auto-fill powered by Gemini AI API',
      'Live APMC mandi pricing engine scraped for accurate crop value estimation',
      'Deploys effortlessly with zero client-side hydration bugs'
    ],
    status: 'Active',
    statusClass: 'status-live',
    github: 'https://github.com/satyamgonkar',
    featured: true
  },
  {
    id: 'civil-builder',
    name: 'Civil Builder Landing Page',
    year: '2025',
    category: 'freelance',
    badge: 'Paid Freelance Client',
    icon: '🏗️',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Logo Design', 'Freelance'],
    summary: 'Professional landing page and logo design delivered for a Mumbai-based civil construction enterprise.',
    description: 'A custom landing page and brand identity logo crafted for a real construction company in Mumbai via Internshala Freelance. Optimized for lead generation, project portfolio display, and mobile responsiveness.',
    highlights: [
      'Real-world client project secured and delivered on Internshala',
      'Designed custom vector logo reflecting construction industry strength',
      'Includes service showcases, project galleries, and lead generation forms',
      'Passed client review with 100% satisfaction on first release'
    ],
    status: 'Delivered',
    statusClass: 'status-live',
    github: 'https://github.com/satyamgonkar/Portfolio',
    featured: true
  },
  {
    id: 'aegis-link',
    name: 'Aegis Link',
    year: '2025',
    category: 'iot',
    badge: 'Hardware Concept',
    icon: '🏠',
    tags: ['IoT', 'RFID', 'NFC', 'Motion Sensors', 'Gas Sensors', 'C++'],
    summary: 'Smart-home platform with keyless entry and switchless appliance control using multi-sensor arrays.',
    description: 'An integrated IoT home automation and safety suite. Aegis Link uses RFID/NFC modules for keyless door access and infrared/motion sensors to control lighting and appliances without manual switches.',
    highlights: [
      'RFID and NFC authentication modules for keyless entry security',
      'Automated appliance toggling using ambient PIR motion and light sensors',
      'Hazard detection system using gas sensors with alert buzzers',
      'Central SaaS web dashboard connected to microcontrollers'
    ],
    status: 'Completed',
    statusClass: 'status-done',
    github: 'https://github.com/satyamgonkar',
    featured: false
  },
  {
    id: 'snake-game',
    name: 'Snake Game in C',
    year: '2024',
    category: 'cpp',
    badge: 'Game Engine',
    icon: '🐍',
    tags: ['C', 'CLI', 'Algorithms', 'Data Structures'],
    summary: 'Classic arcade Snake game developed in C with dynamic score tracking and speed scaling.',
    description: 'A classic Snake game engine written in pure C. Features continuous smooth input handling, speed escalation as score increases, wall collision, self-biting detection, and high score persistence.',
    highlights: [
      'Grid-based rendering and memory-efficient snake segment linked structure',
      'Real-time keyboard input handling without blocking main execution',
      'Progressive difficulty scaling based on score threshold',
      'Includes game-over animation and instant restart capabilities'
    ],
    status: 'Completed',
    statusClass: 'status-done',
    github: 'https://github.com/satyamgonkar/Portfolio',
    featured: false
  },
  {
    id: 'tictactoe',
    name: 'Tic Tac Toe in C++',
    year: '2024',
    category: 'cpp',
    badge: 'Logic Game',
    icon: '⭕',
    tags: ['C++', 'OOP', 'Logic', 'Games'],
    summary: 'Two-player local multiplayer Tic Tac Toe with automatic win condition and draw detection logic.',
    description: 'A modular C++ implementation of Tic Tac Toe. Players alternate turns on an interactive grid, with algorithmically checked win patterns (rows, columns, diagonals) and tie detection.',
    highlights: [
      'Clean Object-Oriented Programming (OOP) class structure',
      'Pattern checking algorithm for 8 possible winning lines',
      'Multi-round session support without restarting application',
      'Sanitized user input validation preventing illegal moves'
    ],
    status: 'Completed',
    statusClass: 'status-done',
    github: 'https://github.com/satyamgonkar/Portfolio',
    featured: false
  },
  {
    id: 'number-guess',
    name: 'Number Guessing Game',
    year: '2024',
    category: 'cpp',
    badge: 'CLI Game',
    icon: '🎯',
    tags: ['C++', 'Randomization', 'CLI'],
    summary: 'Interactive guess-the-number game with dynamic hints and difficulty modes.',
    description: 'CLI game written in C++ where the computer picks a pseudo-random number within a range. The player gets directional feedback ("Go Higher", "Go Lower") and attempt counters to refine their guesses.',
    highlights: [
      'Custom range generator and seed-based random number calculation',
      'Interactive hint feedback loop for efficient binary search learning',
      'Multiple difficulty levels adjusting upper number bounds'
    ],
    status: 'Completed',
    statusClass: 'status-done',
    github: 'https://github.com/satyamgonkar/Portfolio',
    featured: false
  },
  {
    id: 'multi-portfolio',
    name: 'Responsive Personal Portfolio',
    year: '2025',
    category: 'web',
    badge: 'Web Architecture',
    icon: '🌐',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Canvas', 'EmailJS'],
    summary: 'Multi-page static portfolio with dark particle theme, custom cursor, and EmailJS form handling.',
    description: 'The previous static multi-page website built with raw HTML, CSS, JavaScript, particle canvas, and EmailJS integration, showcasing portfolio projects, experience, and contact forms.',
    highlights: [
      'Particle network canvas animation on hero section',
      'Custom mouse cursor tracking follower',
      'EmailJS integration for direct browser-to-inbox messaging',
      'Full cross-device responsiveness'
    ],
    status: 'Completed',
    statusClass: 'status-done',
    github: 'https://github.com/satyamgonkar/Portfolio',
    featured: false
  }
]

export const skillsData = {
  bars: [
    { name: 'Python (Pandas, NumPy, Scikit-learn, NLTK)', level: 85, icon: '🐍' },
    { name: 'C++ & C', level: 82, icon: '⚡' },
    { name: 'HTML5 & CSS3 (Glassmorphism, Animations)', level: 88, icon: '🌐' },
    { name: 'JavaScript & React.js', level: 80, icon: '⚛️' },
    { name: 'SQL & Database Design (MySQL, Postgres)', level: 75, icon: '🗄️' },
    { name: 'Java (Core & OOP)', level: 70, icon: '☕' }
  ],
  categories: [
    {
      title: 'Data Science & Machine Learning',
      icon: '📊',
      items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'NLTK', 'VADER', 'Power BI', 'Word Clouds']
    },
    {
      title: 'Programming Languages',
      icon: '💻',
      items: ['Python', 'C++', 'C', 'Java', 'JavaScript', 'SQL']
    },
    {
      title: 'Web & Frameworks',
      icon: '🚀',
      items: ['React.js', 'Next.js', 'Tailwind CSS', 'Django', 'Flask', 'Node.js', 'HTML5/CSS3']
    },
    {
      title: 'Tools & Development',
      icon: '🛠️',
      items: ['Git & GitHub', 'VS Code', 'Jupyter Notebook', 'Netlify', 'IntelliJ IDEA', 'MS Excel (Advanced)']
    }
  ],
  concepts: [
    { title: 'Data Structures', icon: '🔗', desc: 'Arrays, Linked Lists, Stacks, Queues, Trees, Hash Tables' },
    { title: 'Algorithms', icon: '📐', desc: 'Sorting, Searching, Dynamic Programming, Recursion' },
    { title: 'OOP Principles', icon: '🏗️', desc: 'Inheritance, Polymorphism, Encapsulation, Abstraction' },
    { title: 'DBMS & SQL', icon: '🗄️', desc: 'Relational Schemas, Normalization, Complex Queries' },
    { title: 'OS Concepts', icon: '🖥️', desc: 'Process Control, Threading, Memory Allocation, Scheduling' }
  ],
  learning: [
    { status: 'In Progress', icon: '⚛️', title: 'Advanced React & Next.js Architecture', desc: 'Building full-stack server-rendered applications with TypeScript and server components.' },
    { status: 'Studying', icon: '🧮', title: 'Competitive Coding & Advanced DSA', desc: 'Mastering graph theory, dynamic programming, and algorithmic problem solving.' },
    { status: 'Exploring', icon: '🤖', title: 'Deep Learning & LLM Integration', desc: 'Integrating Gemini AI APIs and neural network pipelines into production web services.' }
  ]
}

export const experienceData = {
  highlights: [
    {
      type: 'Freelance Case Study',
      title: 'Civil Builder — Mumbai',
      subtitle: 'Web Design & Brand Logo',
      icon: '🤝',
      accentColor: '#f97316',
      description: 'Secured via Internshala. Delivered a complete landing page website and brand vector logo for a Mumbai-based civil construction firm.',
      deliverables: [
        { icon: '🌐', label: 'Landing Page', detail: 'Responsive lead generation website built with custom HTML & CSS' },
        { icon: '🎨', label: 'Logo Design', detail: 'Brand vector identity mark for corporate materials' },
        { icon: '📱', label: 'Mobile Optimized', detail: 'Cross-browser rendering across desktop and mobile screens' }
      ],
      tags: ['HTML5', 'CSS3', 'Logo Design', 'Client Work', 'Internshala']
    },
    {
      type: 'Internship Milestone',
      title: 'First Industry Internship',
      subtitle: 'Secured via Internshala',
      icon: '🏆',
      accentColor: '#00e5ff',
      description: 'Secured an early internship in 1st year through Internshala, applying data handling and software engineering concepts to practical real-world workflows.',
      deliverables: [
        { icon: '💼', label: 'Practical Work', detail: 'Collaborated on codebases with strict deadlines' },
        { icon: '📈', label: 'Industry Exposure', detail: 'Translated academic knowledge into usable software features' }
      ],
      tags: ['Internshala', 'Industry Exposure', '1st Year Milestone']
    }
  ],
  achievements: [
    { title: '1st Prize — TechnoVision 2026', badge: 'State Level', desc: 'Awarded first place at the state-level TechnoVision project exposition for outstanding engineering implementation.' },
    { title: 'Grand Finalist — Ideathon 2026', badge: 'National Level', desc: 'Selected as Grand Finalist at Ideathon 2026 (PIMR) among hundreds of student innovations.' },
    { title: 'Treasure Hunt Champion 2026', badge: 'College Event', desc: '1st rank winner at Bansal College for algorithmic puzzle solving and team leadership under pressure.' },
    { title: 'Cyber Security & AI/ML Cert', badge: 'SSRGSP 2026', desc: 'Certified in Cyber Security fundamentals and Machine Learning application pipelines at SSRGSP.' }
  ]
}

export const timeline = [
  { year: '2022', title: 'Class 10 — Govt. Excellence School Barghat', desc: 'Scored excellent marks under MP Board with strong math and science foundation.' },
  { year: '2024', title: 'Class 12 — Govt. Excellence School Barghat', desc: 'Completed higher secondary education and commenced B.Tech in CSE at Bansal College of Engineering (RGPV).' },
  { year: '2024', title: 'First Lines of Code in C & C++', desc: 'Mastered core programming concepts: variables, loops, arrays, pointers, and created CLI games (Snake, Tic Tac Toe).' },
  { year: '2025', title: 'Certifications & Early Projects', desc: 'Earned Microsoft Excel & Cisco IoT certifications. Built Sentify (NLP), MusafirHub (ML Travel), and completed Mumbai Civil Builder freelance gig.' },
  { year: '2026', title: 'Competitions & Advanced ML Focus', desc: 'Won 1st Prize at TechnoVision 2026, Grand Finalist at Ideathon 2026 (PIMR), and earned SSRGSP Cyber Security & AI/ML certification.' }
]

export const certifications = [
  { name: 'Microsoft Excel Credential', year: '2025', issuer: 'Microsoft' },
  { name: 'Cisco IoT Fundamentals', year: '2025', issuer: 'Cisco Networking Academy' },
  { name: 'Cyber Security & AI/ML', year: '2026', issuer: 'SSRGSP' },
  { name: 'Data Entry Operator', year: '2025', issuer: 'NASSCOM Sector Skill Council' }
]

export const faqs = [
  {
    q: 'What kind of roles are you currently looking for?',
    a: 'I am actively seeking Data Science, Machine Learning, Python Development, or Full-Stack Web Development internships and junior roles where I can contribute to real datasets and software products.'
  },
  {
    q: 'Which project showcases your Data Science skills best?',
    a: 'Sentify and MusafirHub. Sentify covers NLP text pre-processing, VADER sentiment scoring, and Flask rendering. MusafirHub includes demand forecasting with Scikit-learn, fraud detection logic, and user segmentation.'
  },
  {
    q: 'Can you work on freelance or client projects?',
    a: 'Yes! I have already completed freelance web development and branding work for a Mumbai-based civil construction firm with 100% client satisfaction.'
  },
  {
    q: 'Where are you located and are you open to remote work?',
    a: 'I am based in Bhopal, Madhya Pradesh, India. I am fully equipped and ready to work remotely or relocate for promising opportunities.'
  }
]
