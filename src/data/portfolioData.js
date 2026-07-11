export const personalDetails = {
  name: "Maharaja M",
  roles: [
    "Software Engineer",
    "Full Stack MERN Developer",
    "Java Developer",
    "Cloud Enthusiast"
  ],
  roleShort: "Software Engineer | Full Stack MERN Developer | Java Developer | Cloud Enthusiast",
  location: "Tamil Nadu, India",
  email: "m.maharaja1964@gmail.com",
  github: "https://github.com/Maharaja19",
  linkedin: "https://www.linkedin.com/in/maharaja-murugakumar",
  resumeUrl: "/documents/resume/Maharaja_resume.pdf",
  education: {
    institution: "Government College of Technology",
    degree: "Bachelor of Engineering",
    major: "Computer Science and Engineering",
    cgpa: "7.55/10"
  },
  careerObjective: "Seeking a challenging role in software development where I can leverage my expertise in full-stack MERN development, Java application design, and cloud deployments to build highly scalable, secure, and user-centric web applications while continuously learning and contributing to organizational growth."
};

export const aboutMeStory = {
  intro: "A dedicated Software Engineer with a strong foundation in Computer Science and Engineering, specializing in crafting robust full-stack applications and cloud-native solutions.",
  paragraphs: [
    "My passion for software engineering stems from a love of translating complex real-world logic into clean, functional, and scalable systems. Whether building microservices in Node.js, engineering data pipelines, or designing responsive frontends in React, I find immense satisfaction in creating software that works seamlessly and scales effortlessly.",
    "I have a deep interest in cloud computing and serverless architecture. Deploying secure applications utilizing AWS services like EC2, S3, and CloudFront is a regular part of my workflow, and I continuously seek to optimize deployment pipelines for high availability, low latency, and tight security.",
    "Problem-solving is at the heart of what I do. With solid expertise in Data Structures, Algorithms, Object-Oriented Programming, and database systems, I design robust solutions to technical bottlenecks. For me, continuous learning is a commitment—I actively explore new libraries, design architectures, and security frameworks to build state-of-the-art applications."
  ]
};

export const techStack = {
  languages: [
    { name: "Java", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "Python", category: "Language" },
    { name: "C", category: "Language" },
    { name: "HTML5", category: "Language" },
    { name: "CSS3", category: "Language" }
  ],
  frameworks: [
    { name: "React.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "Tailwind CSS", category: "Frontend" }
  ],
  databases: [
    { name: "MongoDB", category: "Database" },
    { name: "MySQL", category: "Database" }
  ],
  tools: [
    { name: "Git", category: "Tool" },
    { name: "GitHub", category: "Tool" },
    { name: "VS Code", category: "Tool" },
    { name: "Postman", category: "Tool" },
    { name: "AWS EC2", category: "Cloud" },
    { name: "AWS S3", category: "Cloud" },
    { name: "CloudFront", category: "Cloud" },
    { name: "JWT", category: "Security" },
    { name: "Google OAuth", category: "Security" },
    { name: "REST APIs", category: "Architecture" }
  ]
};

export const skills = [
  { name: "Frontend", level: 90, category: "Core Development" },
  { name: "Backend", level: 85, category: "Core Development" },
  { name: "Database", level: 80, category: "Core Development" },
  { name: "Cloud Development", level: 78, category: "Cloud & Ops" },
  { name: "Authentication & Security", level: 88, category: "Cloud & Ops" },
  { name: "Problem Solving / DSA", level: 82, category: "Theory & Analytics" },
  { name: "Object-Oriented Programming (OOP)", level: 85, category: "Theory & Analytics" },
  { name: "Operating Systems", level: 80, category: "Theory & Analytics" },
  { name: "DBMS", level: 84, category: "Theory & Analytics" },
  { name: "Computer Networks", level: 75, category: "Theory & Analytics" }
];

export const projects = [
  {
    id: "voting",
    title: "Secure College Voting System",
    shortDescription: "A secure cloud-deployed MERN application for college student elections with multi-factor authentication.",
    description: "A highly secure and scalable online election portal designed to handle college representative elections, preventing voter fraud and ensuring immediate results processing using cloud infrastructure.",
    problemStatement: "Traditional college voting methods suffer from lack of security, double voting, high counting errors, and long processing times. Providing an online voting portal requires highly robust security to prevent impersonation, unauthorized access, and tampering with election tallies.",
    architecture: "Multi-tier architecture built with React on the frontend, Express and Node.js on the backend, and MongoDB for database storage. The system is deployed on AWS EC2, with static assets delivered via CloudFront and user profile images stored securely in AWS S3. Security is enforced through JWT tokens and Google OAuth 2.0 integration.",
    features: [
      "JWT-based session authentication with strict cookie policies",
      "OTP-based verification for login and voting confirmation",
      "Google OAuth integration for quick student authentication",
      "Student Referral / Admission number validation logic",
      "Role-Based Access Control (Super Admin, Candidate, Student Voter)",
      "Interactive Admin Dashboard to manage candidates, schedules, and view live statistics",
      "Student Dashboard with candidate manifestos and ballot access",
      "Bulk Excel upload utility for registering voter lists",
      "Dynamic election scheduling and window enforcement",
      "One Vote Policy enforced using cryptographic checks and state flags",
      "AWS cloud deployment (EC2, S3, CloudFront)",
      "Dynamic, real-time result publishing with analytical charts"
    ],
    challenges: "Enforcing the 'One Vote' policy securely under concurrent requests was a challenge. I solved this by implementing transactions in MongoDB and applying unique database indexes on the voter-election pair. Additionally, securing OTP channels and handling bulk file parsing without blocking the Node event loop required microtask optimization and stream processing.",
    contribution: "Designed the full backend authentication layer, integrated Amazon Web Services (EC2 setups, S3 buckets, CloudFront distributions), implemented the voting transaction controllers, and styled the interactive candidate voting panels.",
    learningOutcomes: "Mastered concurrency control in MongoDB, learned details of AWS bucket policy management and SSL distribution, and acquired deeper understanding of JWT signature validations and OAuth callback lifecycles.",
    futureImprovements: "Implementing zero-knowledge proof cryptography to ensure vote anonymity while remaining verifiable, and adding blockchain ledger nodes to record votes immutably.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "AWS EC2", "AWS S3", "CloudFront", "JWT", "Google OAuth"],
    images: [
      "images/voting/dashboard.svg",
      "images/voting/login.svg",
      "images/voting/voting_page.svg",
      "images/voting/result.svg",
      "images/voting/admin.svg"
    ],
    demoUrl: "https://github.com/Maharaja19/voting-system",
    githubUrl: "https://github.com/Maharaja19/voting-system",
    docsUrl: "https://github.com/Maharaja19/voting-system#readme"
  },
  {
    id: "seip",
    title: "Smart Expense Intelligence Platform (SEIP)",
    shortDescription: "AI-powered personal finance management platform with forecasting, analytics, and budgeting charts.",
    description: "An intelligent personal finance manager that categorizes expenses, monitors monthly budgets, and utilizes predictive analysis to forecast future expenditures.",
    problemStatement: "Individuals often struggle to manage their finances because tracking expenses across multiple categories is tedious, and static numbers don't show the future impact of current spending trends.",
    architecture: "React interface integrated with Chart.js for data visualization, communicating with a Node.js microservice. Employs MongoDB to store transaction records and a python-based prediction algorithm (wrapped in a helper script) to provide predictive analytics on future savings.",
    features: [
      "Advanced Expense Analytics with interactive breakdown charts",
      "Predictive financial forecasting using linear regression concepts",
      "Dynamic budget tracking with warning triggers when thresholds exceed 80%",
      "Google OAuth 2.0 and JWT token authentication",
      "Monthly trend analysis, Excel/PDF report generation",
      "Custom categories, transaction searching, and tag tagging filters",
      "Responsive data dashboards built on Glassmorphism design system"
    ],
    challenges: "Synchronizing analytical calculations and updating interactive charts on mobile screens with massive datasets. I optimized this by implementing client-side pagination, using useMemo for calculations, and rendering SVG charts dynamically.",
    contribution: "Engineered the client-side state machine, designed the dashboard visualizations, built the report export utilities, and configured OAuth token handlers.",
    learningOutcomes: "Gained proficiency in advanced React hooks, customized data rendering using Chart.js/Recharts, and learned to design clean RESTful transaction endpoints.",
    futureImprovements: "Integrating Plaid API for automated bank statement syncs, and incorporating an AI assistant chatbot for personalized financial advice.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Chart.js", "JWT", "Google OAuth", "Tailwind CSS"],
    images: [
      "images/seip/dashboard.svg",
      "images/seip/charts.svg",
      "images/seip/transactions.svg",
      "images/seip/analytics.svg"
    ],
    demoUrl: "https://github.com/Maharaja19/smart-expense",
    githubUrl: "https://github.com/Maharaja19/smart-expense",
    docsUrl: "https://github.com/Maharaja19/smart-expense#readme"
  },
  {
    id: "smartplaybank",
    title: "Smart Play Bank AI",
    shortDescription: "AI-powered gamified financial literacy platform for children, awarded in DCKAP Incubation.",
    description: "A gamified financial literacy web application tailored to children, creating a simulated banking ecosystem with rewards, quizzes, and parent-monitored saving goals.",
    problemStatement: "Traditional financial educational systems are dull for kids, leading to a gap in basic money management skills. There is a lack of engaging, safe sandbox environments for kids to learn virtual banking.",
    architecture: "React SPA with a gamified level system. High score leaderboards and virtual account ledger records are powered by Express and MongoDB. Incubation validation was conducted during the DCKAP Incubation program.",
    features: [
      "Interactive AI Mentor explaining financial terminology to children in simple terms",
      "Virtual Banking Simulation (deposit, withdraw, transfers with fake 'Play Money')",
      "Gamified learning modules with quizzes, levels, and custom badge rewards",
      "Parent Dashboard to set interest rates, tasks, allowances, and monitor progress",
      "Incubation validated business model and product validation",
      "Sound effects and lively micro-animations to keep children engaged"
    ],
    challenges: "Designing an interface that was child-friendly but didn't compromise on showing core banking workflows. I collaborated on drafting simple user flows and used Framer Motion for gamification transitions.",
    contribution: "Co-designed the product architecture, coded the virtual savings ledger, developed parent control dashboards, and pitched the MVP in the DCKAP Incubation program.",
    learningOutcomes: "Learned user experience design for younger demographics, pitched ideas to incubators, and built gamified progress tracking modules.",
    futureImprovements: "Integrating a minor-centric prepaid card API and adding family saving challenge groups.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Framer Motion", "Tailwind CSS"],
    images: [
      "images/smartplaybank/dashboard.svg",
      "images/smartplaybank/levels.svg",
      "images/smartplaybank/parent_panel.svg",
      "images/smartplaybank/mockups.svg"
    ],
    demoUrl: "https://github.com/Maharaja19/smart-play-bank",
    githubUrl: "https://github.com/Maharaja19/smart-play-bank",
    docsUrl: "https://github.com/Maharaja19/smart-play-bank#readme"
  }
];

export const timelineData = [
  {
    id: 1,
    year: "2023",
    title: "Started BE CSE",
    subtitle: "Government College of Technology, Coimbatore",
    type: "education",
    description: "Began Bachelor of Engineering in Computer Science and Engineering. Gained foundations in algorithmic coding, systems designs, and object-oriented programming.",
    badge: "GCT"
  },
  {
    id: 2,
    year: "2025",
    title: "Treasurer, CSE Association",
    subtitle: "Department Leadership Role",
    type: "leadership",
    description: "Elected as Treasurer of CSEA. Directed resource budgeting, sponsorships coordination, and department accounts auditing.",
    badge: "CSEA"
  },
  {
    id: 3,
    year: "2025",
    title: "NPTEL Elite Certification",
    subtitle: "Database Management Systems",
    type: "achievement",
    description: "Earned Elite rank (Score: 84%) in Database Management Systems validations, representing masteries in relational algebras and SQL query optimizations.",
    badge: "NPTEL"
  },
  {
    id: 4,
    year: "2026",
    title: "Data Analyst Intern",
    subtitle: "Bluekode",
    type: "internship",
    description: "Executed operational metrics audits, SQL query optimizations, and built automated transaction dashboards utilizing Power BI.",
    badge: "Bluekode"
  },
  {
    id: 5,
    year: "2026",
    title: "IBM Certificates Earned",
    subtitle: "Cloud & DevOps Fundamentals",
    type: "achievement",
    description: "Successfully validated credentials in enterprise agile environments, container virtualization (Docker), and cloud architecture (IaaS, PaaS, SaaS) structures.",
    badge: "IBM"
  },
  {
    id: 6,
    year: "2026",
    title: "Treasurer, Literary Debating Society",
    subtitle: "Club Administration Role",
    type: "leadership",
    description: "Appointed LDS club treasurer, tracking registrations and travel finances for national-level intercollegiate debating symposiums.",
    badge: "LDS"
  },
  {
    id: 7,
    year: "2026",
    title: "Secure Voting System Launched",
    subtitle: "MERN Cloud Application",
    type: "internship",
    description: "Built and cloud-deployed an online voting system validating student admissions lists, integrating multi-factor MFA and admin management consoles.",
    badge: "MERN"
  },
  {
    id: 8,
    year: "2026",
    title: "Smart Expense Platform Built",
    subtitle: "AI Personal Finance Project",
    type: "internship",
    description: "Programmed a responsive analytical dashboard tracking expenses, category-wise trends, and future monthly forecasting algorithms.",
    badge: "SEIP"
  },
  {
    id: 9,
    year: "2026",
    title: "DCKAP Incubation Selection",
    subtitle: "Smart Play Bank AI Incubation",
    type: "achievement",
    description: "Awarded student project selection in the DCKAP Incubation program, validating market outreach and child-friendly banking ledger mockups.",
    badge: "Incubation"
  }
];

export const experienceData = [
  {
    company: "Bluekode",
    role: "Data Analyst Intern",
    period: "May 2026 - June 2026",
    logoPlaceholder: "BK",
    experienceCertificate: "/documents/internship/internship-certificate.pdf",
    experienceLetter: "/documents/internship/experience-letter.pdf",
    internPhoto: "/documents/internship/intern-photo.png",
    description: "Collaborated with business units to analyze system logs and operational metrics. Cleaned and structured messy transactional records, translating raw datasets into visual business solutions.",
    skills: ["SQL", "Excel", "Power BI", "Data Cleaning", "Dashboard Development", "Business Analytics"],
    achievements: [
      "Built automated Power BI dashboard tracking platform transaction status, saving stakeholders 5 hours weekly in reporting time",
      "Designed and optimized SQL queries to fetch operational reports 40% faster",
      "Performed data cleansing on a customer database containing over 50,000 records, correcting schema anomalies and removing duplicates"
    ],
    gallery: [
      "/documents/internship/intern-photo.png",
      "images/voting/dashboard.svg"
    ]
  }
];

export const incubationData = {
  title: "DCKAP Incubation Centre",
  highlight: "Selected for DCKAP Incubation Centre through a competitive multi-stage evaluation.",
  project: "Smart Play Bank AI",
  selectionLetter: "/documents/achievements/dckap-incubation.pdf",
  incubationCertificate: "/documents/achievements/dckap-incubation.pdf",
  overview: "Smart Play Bank AI teaches financial literacy to children via virtual simulations, parent analytics, and rewarding gameplay levels.",
  research: "Identified that over 80% of teenagers lack fundamental personal finance knowledge. Market research validated that parents wanted a gamified, safe sandbox ledger to manage real-life allowances and chore completions.",
  validation: "Pitched to the DCKAP executive evaluation board and was selected as one of the incubated student projects, receiving funding allocations and industry expert mentorship pipelines.",
  roadmap: [
    "Phase 1: High fidelity React wireframe (Completed)",
    "Phase 2: Parent dashboard & virtual ledger sync (Current)",
    "Phase 3: AI chatbot mentor integration (Target Q3)",
    "Phase 4: Prepaid family cards beta test (Target Q4)"
  ],
  architectureImg: "images/smartplaybank/dashboard.svg",
  badge: "Selected Startup"
};

export const leadershipData = [
  {
    role: "Treasurer",
    organization: "Computer Science Engineering Association (CSEA)",
    period: "2024 - 2025",
    description: "Led financial planning, sponsorships, and budgeting for various academic symposiums, tech festivals, and department initiatives.",
    stats: "Allocated budget for 10+ department events, coordinated with 15+ external sponsors.",
    achievements: [
      "Successfully managed and audited a budget of INR 1.5 Lakhs for the annual CSE department symposium",
      "Negotiated sponsorships securing 20% higher funding compared to preceding years",
      "Streamlined invoice clearing workflows, achieving 100% audit accuracy"
    ]
  },
  {
    role: "Treasurer",
    organization: "Literary Debating Society (LDS)",
    period: "2023 - 2024",
    description: "Oversaw finances and managed resources for club debates, inter-collegiate tournaments, and guest speaker lectures.",
    stats: "Managed allocations for 5 inter-college debating events, increasing student turnout by 35%.",
    achievements: [
      "Funded and arranged travel, registration, and awards for national debate participants",
      "Created a robust micro-financing tracker which was adopted by all campus clubs",
      "Pioneered a crowd-sourcing fundraising initiative that funded low-income debaters"
    ]
  }
];

export const certificationData = [
  {
    id: "ibm-devops",
    title: "IBM DevOps Fundamentals",
    issuer: "IBM SkillsBuild",
    category: "Cloud & DevOps",
    filterCategory: "Cloud",
    date: "2024",
    skills: ["DevOps", "Git", "CI/CD", "Software Development Lifecycle", "Containers", "Linux", "Cloud Computing"],
    theme: "from-blue-600 to-indigo-900",
    pdfPath: "/documents/certificates/ibm-devops.pdf",
    thumbnail: "images/certificates/placeholder.svg",
    verifyUrl: "https://github.com/Maharaja19"
  },
  {
    id: "ibm-cloud",
    title: "Introduction to Cloud Computing",
    issuer: "IBM (Coursera)",
    category: "Cloud Computing",
    filterCategory: "Cloud",
    date: "2024",
    skills: ["Cloud", "Virtualization", "IaaS", "PaaS", "SaaS", "Cloud Deployment", "Cloud Architecture"],
    theme: "from-sky-500 to-blue-700",
    pdfPath: "/documents/certificates/ibm-cloud.pdf",
    thumbnail: "images/certificates/placeholder.svg",
    verifyUrl: "https://github.com/Maharaja19"
  },
  {
    id: "jpmorgan-forage",
    title: "JPMorgan Chase & Co. Software Engineering Job Simulation",
    issuer: "Forage",
    category: "Software Engineering",
    filterCategory: "Job Simulation",
    date: "2024",
    skills: ["Java", "Backend Development", "REST APIs", "Software Engineering", "Debugging", "Financial Technology"],
    theme: "from-slate-900 via-indigo-950 to-blue-900",
    pdfPath: "/documents/certificates/jpmorgan-forage.pdf",
    thumbnail: "images/certificates/placeholder.svg",
    verifyUrl: "https://github.com/Maharaja19"
  },
  {
    id: "nptel-python",
    title: "The Joy of Computing using Python",
    issuer: "NPTEL",
    category: "Programming",
    filterCategory: "Programming",
    date: "2023",
    skills: ["Python", "Problem Solving", "Programming Logic", "Algorithms"],
    theme: "from-amber-600 to-yellow-800",
    pdfPath: "/documents/certificates/nptel-python.pdf",
    thumbnail: "images/certificates/placeholder.svg",
    achievement: "Elite (Score: 84%)",
    verifyUrl: "https://github.com/Maharaja19"
  },
  {
    id: "ebpl-genai",
    title: "EBPL Internship on Generative AI",
    issuer: "EBPL",
    category: "Artificial Intelligence",
    filterCategory: "AI",
    date: "2024",
    skills: ["Generative AI", "Prompt Engineering", "LLMs", "AI Applications"],
    theme: "from-purple-600 to-pink-800",
    pdfPath: "/documents/certificates/ebpl-genai.pdf",
    thumbnail: "images/certificates/placeholder.svg",
    verifyUrl: "https://github.com/Maharaja19"
  },
  {
    id: "nm-4th-sem",
    title: "NM Certificate 4th Semester",
    issuer: "Government College of Technology",
    category: "Academic Achievement",
    filterCategory: "College",
    date: "2024",
    skills: ["Computer Science", "Academic Excellence", "Core Engineering"],
    theme: "from-emerald-600 to-teal-800",
    pdfPath: "/documents/academic/nm-4th-sem.pdf",
    thumbnail: "images/certificates/placeholder.svg",
    verifyUrl: "https://github.com/Maharaja19"
  },
  {
    id: "nm-5th-sem",
    title: "NM Certificate 5th Semester",
    issuer: "Government College of Technology",
    category: "Academic Achievement",
    filterCategory: "College",
    date: "2025",
    skills: ["Computer Science", "Academic Excellence", "Core Engineering"],
    theme: "from-emerald-600 to-teal-800",
    pdfPath: "/documents/academic/nm-5th-sem.pdf",
    thumbnail: "images/certificates/placeholder.svg",
    verifyUrl: "https://github.com/Maharaja19"
  }
];

export const achievementsData = [
  {
    title: "DCKAP Incubation Recognition",
    description: "Smart Play Bank AI was selected and pitch-validated, receiving expert mentorship and potential commercialization pipelines."
  },
  {
    title: "Cloud Deployment Mastery",
    description: "Successfully configured secure React/Node architectures on AWS using cloud components like EC2, secure S3 policies, and CloudFront CDN routing."
  },
  {
    title: "Full Stack MERN Projects",
    description: "Designed, coded, and deployed three production-scale applications from scratch, handling complex user auth flows and backend logic."
  },
  {
    title: "Security Infrastructure",
    description: "Deep knowledge in authentication implementation, applying HTTPOnly cookie storage, JWT verification, and Google OAuth callbacks."
  }
];

export const counterStats = [
  { label: "Projects Completed", value: 2, suffix: "+" },
  { label: "Certificates Earned", value: 5, suffix: "+" },
  { label: "Internships Completed", value: 1, suffix: "+" },
  { label: "Cloud Deployments", value: 1, suffix: "+" },
  { label: "Programming Languages", value: 2, suffix: "+" },
  { label: "Technologies Handled", value: 15, suffix: "+" },
  { label: "Leadership Roles", value: 2, suffix: "" },
  { label: "Incubation", value: 1, suffix: "" }
];

export const documentRegistry = [
  {
    name: "Curriculum Vitae (Resume)",
    category: "Resume",
    path: "/documents/resume/Maharaja_resume.pdf",
    size: "148 KB",
    date: "July 2026",
    thumbnail: "/images/profile/Maharaja.jpeg"
  },
  {
    name: "Bluekode Internship Certificate",
    category: "Internship",
    path: "/documents/internship/internship-certificate.pdf",
    size: "245 KB",
    date: "June 2026",
    thumbnail: "images/certificates/placeholder.svg"
  },
  {
    name: "Bluekode Experience Recommendation Letter",
    category: "Internship",
    path: "/documents/internship/experience-letter.pdf",
    size: "285 KB",
    date: "June 2026",
    thumbnail: "images/certificates/placeholder.svg"
  },
  {
    name: "IBM DevOps Fundamentals Certificate",
    category: "Certificates",
    path: "/documents/certificates/ibm-devops.pdf",
    size: "340 KB",
    date: "2024",
    thumbnail: "images/certificates/placeholder.svg"
  },
  {
    name: "IBM Introduction to Cloud Certificate",
    category: "Certificates",
    path: "/documents/certificates/ibm-cloud.pdf",
    size: "320 KB",
    date: "2024",
    thumbnail: "images/certificates/placeholder.svg"
  },
  {
    name: "JPMorgan Software Engineering Simulation",
    category: "Certificates",
    path: "/documents/certificates/jpmorgan-forage.pdf",
    size: "298 KB",
    date: "2024",
    thumbnail: "images/certificates/placeholder.svg"
  },
  {
    name: "NPTEL Elite Python Certificate",
    category: "Certificates",
    path: "/documents/certificates/nptel-python.pdf",
    size: "512 KB",
    date: "2023",
    thumbnail: "images/certificates/placeholder.svg"
  },
  {
    name: "EBPL Generative AI Internship Certificate",
    category: "Certificates",
    path: "/documents/certificates/ebpl-genai.pdf",
    size: "210 KB",
    date: "2024",
    thumbnail: "images/certificates/placeholder.svg"
  },
  {
    name: "GCT 4th Semester Academic Certificate",
    category: "Academic",
    path: "/documents/academic/nm-4th-sem.pdf",
    size: "185 KB",
    date: "2024",
    thumbnail: "images/certificates/placeholder.svg"
  },
  {
    name: "GCT 5th Semester Academic Certificate",
    category: "Academic",
    path: "/documents/academic/nm-5th-sem.pdf",
    size: "190 KB",
    date: "2025",
    thumbnail: "images/certificates/placeholder.svg"
  },
  {
    name: "DCKAP Incubation Selection Letter",
    category: "Incubation",
    path: "/documents/achievements/dckap-incubation.pdf",
    size: "420 KB",
    date: "2024",
    thumbnail: "images/certificates/placeholder.svg"
  }
];
