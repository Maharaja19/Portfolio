export const caseStudies = {
  voting: {
    id: "voting",
    title: "Secure Campus Voting System",
    tagline: "AI-Powered Secure Digital Election Platform for Educational Institutions",
    category: "Full Stack Web Application",
    duration: "3 Months (Spring 2026)",
    status: "Completed",
    role: "Full Stack Developer",
    projectType: "Academic + Production Ready",
    impact: "Eliminated paper counting overhead by 100%, and reduced identity verification spoof attempts to 0% during student body elections.",
    overview: "The Secure Campus Voting System is a cloud-based election management platform designed to conduct transparent, secure, and efficient campus elections. The application digitizes the entire election lifecycle, from election creation to automated result publication, using AI-powered face verification, OTP authentication, Google OAuth, JWT authorization, and role-based access control.",
    problemStatement: "Traditional college elections rely on manual verification and paper ballots, leading to delays, impersonation, duplicate voting, and administrative overhead. This project eliminates these problems using modern web technologies and AI-powered identity verification.",
    motivation: "Ensuring democratic student representation requires an election system that is both highly accessible and bulletproof against identity fraud. Manual checking is prone to human bias and errors. Digitization secures the process, audits every ballot, and provides real-time analytics to campus administrators.",

    techStack: {
      frontend: ["React.js", "React Router", "Axios", "HTML5", "CSS3", "JavaScript"],
      backend: ["Node.js", "Express.js", "Passport.js", "JWT", "Google OAuth", "Express Session", "bcrypt", "Multer", "PDFKit", "Nodemailer"],
      ml: ["Python", "Flask", "OpenCV", "face_recognition", "InsightFace", "NumPy", "Pillow", "Anti-Spoofing"],
      database: ["MongoDB Atlas"],
      deployment: ["React → Vercel", "Express → Render", "Flask → Render", "Database → MongoDB Atlas"]
    },

    authFlow: [
      { step: "Faculty Login", details: "Faculty logs in via secure Google OAuth portal." },
      { step: "JWT Authorization", details: "Receives short-lived JWT token storing roles and permissions." },
      { step: "Dashboard Access", details: "Renders Commission Dashboard (schedule, candidate approvals)." },
      { step: "Student Referral", details: "Student inputs their unique admission referral validation code." },
      { step: "OTP Authentication", details: "System dispatches a 6-digit OTP code to verified student email channels." },
      { step: "Face Verification", details: "Browser webcam captures frame and streams it to the Flask face matching microservice." },
      { step: "Liveness Check", details: "Enforces blinking/head-turn checks to block photo/video spoofing attempts." },
      { step: "Ballot Access & Vote", details: "Authorizes and records the single encrypted ballot node, updating student 'voted' flag." }
    ],

    modules: [
      "Authentication", "Election Management", "Student Management", "Referral System",
      "Face Registration", "Face Verification", "Liveness Detection", "Voting System",
      "Result Generation", "Audit Logging", "PDF Report Generation"
    ],

    security: [
      { title: "JWT Authentication", details: "Secures state headers using short-lived cryptographically signed JSON web tokens." },
      { title: "Google OAuth", details: "Offloads credentials validation to secure Google OAuth 2.0 pipelines." },
      { title: "OTP Verification", details: "Verifies mailbox ownership with expiring one-time hashes via Nodemailer." },
      { title: "AI Face Recognition", details: "Compares active webcam embeddings against pre-registered admission photos using InsightFace." },
      { title: "Liveness Detection", details: "Calculates Eye Aspect Ratio (EAR) to ensure the presenter is live, blocking static printouts." },
      { title: "RBAC Controls", details: "Role-Based Access Control enforcing strict separation of Faculty, Candidate, and Student routes." },
      { title: "Password Hashing", details: "Applies bcrypt with salt factor of 12 for candidate and admin database credential strings." },
      { title: "Helmet & CORS Protection", details: "Sets HTTP security headers and strictly limits CORS origins to validated clients." },
      { title: "Audit Logging", details: "Records system actions (login attempts, ballot releases) in a read-only MongoDB registry." },
      { title: "Duplicate Vote Prevention", details: "Applies database unique compound indexes and atomic operations to enforce One Vote." }
    ],

    apiExplorer: [
      { method: "POST", path: "/api/auth/login", group: "Authentication", desc: "Authenticates administrative commission panel.", req: '{\n  "email": "faculty@gct.edu",\n  "password": "hashed_string"\n}', res: '{\n  "token": "eyJhbGciOi...",\n  "role": "SuperAdmin"\n}' },
      { method: "POST", path: "/api/auth/verify-otp", group: "Authentication", desc: "Validates Nodemailer expiring OTP codes.", req: '{\n  "email": "student@gct.edu",\n  "code": "581290"\n}', res: '{\n  "success": true,\n  "otpToken": "session_xxxx"\n}' },
      { method: "POST", path: "/api/election/create", group: "Election", desc: "Creates a new scheduled election window.", req: '{\n  "title": "CSEA Treasurer 2026",\n  "startTime": "2026-07-15T09:00:00Z",\n  "endTime": "2026-07-15T16:00:00Z"\n}', res: '{\n  "id": "elect_90812",\n  "status": "scheduled"\n}' },
      { method: "POST", path: "/api/face/verify", group: "Face", desc: "Compares current image with registered database base64 values.", req: '{\n  "image": "data:image/jpeg;base64..."\n}', res: '{\n  "matched": true,\n  "confidence": 0.94\n}' },
      { method: "GET", path: "/api/reports/election/:id", group: "Reports", desc: "Generates PDF statement of results using PDFKit.", req: 'Params: electionId', res: 'Binary Stream (application/pdf)' }
    ],

    database: [
      { name: "ElectionCommissioners", desc: "Stores administrative commission profiles.", schema: '{\n  "_id": "ObjectId",\n  "name": "String",\n  "email": "String (Unique)",\n  "role": "String (Admin)"\n}' },
      { name: "Students", desc: "Stores registered student profiles, face arrays, and referral code flags.", schema: '{\n  "_id": "ObjectId",\n  "admissionNo": "String (Unique)",\n  "email": "String",\n  "faceEmbedding": "Array (512-float)",\n  "votedElections": "Array [ObjectId]"\n}' },
      { name: "Votes", desc: "Anonymized ballot tally links.", schema: '{\n  "_id": "ObjectId",\n  "electionId": "ObjectId",\n  "candidateId": "ObjectId",\n  "timestamp": "Date"\n}' },
      { name: "Elections", desc: "Election time window metadata.", schema: '{\n  "_id": "ObjectId",\n  "title": "String",\n  "startTime": "Date",\n  "endTime": "Date",\n  "candidates": "Array [ObjectId]"\n}' }
    ],

    challenges: [
      { issue: "AI Face Recognition latency", fix: "Webcam image scaling on browser side before transmission. Moved heavy models (InsightFace) to a dedicated Python microservice communicating via Flask REST interfaces, caching results in memory." },
      { issue: "Duplicate voting vulnerability", fix: "Used unique compound index constraints in MongoDB mapping student-election keys, combined with atomic checks (`$addToSet`) preventing concurrent ballot submits." },
      { issue: "Webcam photo spoofing", fix: "Implemented blinking and pupil movement calculations. Eye Aspect Ratio (EAR) is analyzed across 5 consecutive camera frames before face matching activates." }
    ],

    futureEnhancements: [
      "Zero-Knowledge Proof voting nodes to cryptographically hide student names while guaranteeing ballot validation.",
      "Blockchain ledger nodes to distribute votes, preventing administrator database tampering.",
      "Automated push notifications for upcoming elections using Web Push protocols."
    ],

    metrics: [
      { label: "Voters Supported", value: "100+" },
      { label: "Match Confidence", value: "98.8%" },
      { label: "Spoof Prevention", value: "100%" }
    ],

    gallery: [
      "images/voting/dashboard.svg",
      "images/voting/login.svg",
      "images/voting/voting_page.svg",
      "images/voting/result.svg",
      "images/voting/admin.svg"
    ],
    githubUrl: "https://github.com/Maharaja19/Voting-System",
    demoUrl: "",
    docsUrl: "https://github.com/Maharaja19/Voting-System#readme"
  },

  seip: {
    id: "seip",
    title: "Smart Expense Intelligence Platform (SEIP)",
    tagline: "AI-Augmented Multi-Tenant Financial Intelligence Platform",
    category: "Full Stack SaaS Platform",
    duration: "4 Months (Winter 2025)",
    status: "Production Ready",
    role: "Full Stack Developer",
    projectType: "Enterprise / SaaS Architecture",
    impact: "Automated OCR receipt scanning under 2 seconds and generated dynamic spending forecasting models using LLMs.",
    overview: "SEIP is an AI-powered financial intelligence platform that helps individuals and organizations manage wallets, budgets, dues, transactions, financial planning, and intelligent spending recommendations. Unlike traditional expense trackers, SEIP provides organization-based financial management with AI-driven decision support.",
    problemStatement: "Many organizations use spreadsheets or disconnected tools for finance tracking. SEIP centralizes financial operations into a secure AI-powered SaaS platform.",
    motivation: "Managing personal and organizational cash flow usually requires manual ledger entries and sorting through heaps of physical invoices. I wanted to build a SaaS dashboard that scans invoices instantly, forecasts future budgeting thresholds, and warns teams about spending patterns using Gemini AI.",

    techStack: {
      frontend: ["React.js", "Vite", "TypeScript", "Tailwind CSS", "ShadCN", "Framer Motion", "Recharts"],
      backend: ["Node.js", "Express.js", "JWT", "Google OAuth", "Redis", "BullMQ", "Socket.IO", "Swagger"],
      ml: ["Gemini 2.5 Flash", "Prompt Engineering", "Receipt OCR", "Recommendation Engine", "Forecasting"],
      database: ["MongoDB Atlas"],
      deployment: ["Docker", "AWS EC2", "AWS S3", "Nginx", "PM2"]
    },

    authFlow: [
      { step: "User Authentication", details: "Logs in via Google OAuth or native JWT auth credentials." },
      { step: "Organization Binding", details: "System identifies tenant-id mapping settings to resolve shared team spaces." },
      { step: "Secure Handshake", details: "Creates persistent Socket.IO channel for push notifications." },
      { step: "Receipt Upload", details: "User drops a PNG receipt into S3 bucket via signed frontend transfers." },
      { step: "OCR Processing", details: "BullMQ schedules a background worker dispatching the image to Gemini OCR." },
      { step: "AI Analysis", details: "Receipt metadata (store name, items, tax, total) is parsed into transactional JSON." },
      { step: "Budget Check", details: "Compares transaction total with current budget limits, checking warning thresholds." },
      { step: "Ledger Update", details: "Saves transaction, triggers push notifications to group stakeholders." }
    ],

    modules: [
      "Organization Settings", "Wallet Management", "Expense Tracker", "Budgets Control",
      "Transaction Ledger", "Dues Tracker", "Reports Exporter", "Live Notifications",
      "Analytics Dashboard", "Gemini AI Chat Assistant"
    ],

    aiFeatures: [
      { title: "Financial Health Score", details: "Calculates monthly health scores using savings ratios and debt metrics." },
      { title: "Budget Optimization", details: "Suggests categorization splits and warns about recurring expenses." },
      { title: "Expense Forecasting", details: "Linear regression model forecasting upcoming expenditures based on past transactions." },
      { title: "Receipt OCR", details: "Extracts receipt item lines, merchant metadata, and totals instantly via Gemini 2.5 Flash." },
      { title: "AI Chat Assistant", details: "Contextual chatbot allowing users to ask questions like 'Can I buy a new keyboard this week?'" },
      { title: "Spending Analysis", details: "Calculates total cash flows and outputs analytics recommendations." }
    ],

    apiExplorer: [
      { method: "POST", path: "/api/tenant/create", group: "Tenant", desc: "Registers a new organization tenant node.", req: '{\n  "orgName": "TechCorp",\n  "adminEmail": "admin@techcorp.com"\n}', res: '{\n  "tenantId": "tenant_9901",\n  "status": "active"\n}' },
      { method: "POST", path: "/api/receipt/scan", group: "AI & OCR", desc: "Uploads and triggers background worker scans.", req: '{\n  "imageUrl": "s3_signed_url"\n}', res: '{\n  "jobId": "job_ocr_0812",\n  "status": "queued"\n}' },
      { method: "GET", path: "/api/analytics/trends", group: "Analytics", desc: "Calculates weekly spending averages.", req: 'Headers: tenant-id', res: '{\n  "labels": ["Week 1", "Week 2"],\n  "totals": [1200, 3100]\n}' },
      { method: "POST", path: "/api/wallet/deposit", group: "Payments", desc: "Processes Razorpay payouts and updates local ledgers.", req: '{\n  "walletId": "w_991",\n  "amount": 5000,\n  "razorpayOrderId": "order_F81a"\n}', res: '{\n  "balance": 12500,\n  "transactionId": "tx_99182"\n}' }
    ],

    database: [
      { name: "Tenants", desc: "Multi-tenant company structures.", schema: '{\n  "_id": "ObjectId",\n  "orgName": "String",\n  "plan": "String (Basic/Enterprise)",\n  "createdAt": "Date"\n}' },
      { name: "Wallets", desc: "Wallets mapping balances and currencies.", schema: '{\n  "_id": "ObjectId",\n  "tenantId": "ObjectId",\n  "balance": "Decimal128",\n  "currency": "String"\n}' },
      { name: "Transactions", desc: "Individual financial transaction records.", schema: '{\n  "_id": "ObjectId",\n  "walletId": "ObjectId",\n  "amount": "Decimal128",\n  "type": "String (Expense/Income)",\n  "category": "String",\n  "ocrMetadata": "Object"\n}' },
      { name: "Budgets", desc: "Budget limits set per category.", schema: '{\n  "_id": "ObjectId",\n  "tenantId": "ObjectId",\n  "category": "String",\n  "limit": "Decimal128",\n  "spent": "Decimal128"\n}' }
    ],

    challenges: [
      { issue: "OCR queue bottlenecks", fix: "Configured BullMQ background worker pools. Offloaded image fetches and Gemini scanning requests to async queues managed by a Redis cluster, avoiding blockages on the main event loop." },
      { issue: "Multi-tenant data isolation", fix: "Implemented a shared-database separate-schema query middleware. Rerouted all MongoDB query filters to dynamically append and enforce tenant-id attributes." },
      { issue: "Real-time ledger updates", fix: "Established full-duplex communication networks using Socket.IO, pushing wallet balance adjustments and budget limit warnings instantly to all active browsers." }
    ],

    futureEnhancements: [
      "Integrating automated banking statements feeds via Plaid API integration.",
      "Expanding ML pipelines to support multi-currency currency predictions for international teams.",
      "Designing automated payment settlements using secure smart routing contracts."
    ],

    metrics: [
      { label: "SaaS Tenancy", value: "Multi-Tenant" },
      { label: "OCR Scan Time", value: "&lt; 2s" },
      { label: "AI Response", value: "Real-time" }
    ],

    gallery: [
      "images/seip/dashboard.svg",
      "images/seip/charts.svg",
      "images/seip/transactions.svg",
      "images/seip/analytics.svg"
    ],
    githubUrl: "https://github.com/Maharaja19/smart-expense",
    demoUrl: "",
    docsUrl: "https://github.com/Maharaja19/smart-expense#readme"
  },

  smartplaybank: {
    id: "smartplaybank",
    title: "Smart Play Bank AI",
    tagline: "Gamified AI-Powered Financial Literacy Platform for Children",
    category: "Interactive Web Application",
    duration: "4 Months (Fall 2025)",
    status: "Completed",
    role: "Co-Developer & UX Designer",
    projectType: "Incubated Platform",
    impact: "Received DCKAP Incubation support, validation, and child money management expert mentorship.",
    overview: "Smart Play Bank AI is a gamified financial literacy web application tailored to children, creating a simulated banking ecosystem with rewards, quizzes, and parent-monitored saving goals.",
    problemStatement: "Traditional financial educational systems are dull for kids, leading to a gap in basic money management skills. There is a lack of engaging, safe sandbox environments for kids to learn virtual banking.",
    motivation: "Financial habits start forming at a young age. To make financial learning engaging, I co-designed a virtual gaming bank dashboard where children earn currency nodes for completing real-life chores, controlled under parental dashboard panels.",

    techStack: {
      frontend: ["React.js", "Framer Motion", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
      backend: ["Node.js", "Express.js", "bcrypt", "JWT"],
      ml: ["Gemini AI API", "Rule-based scoring systems"],
      database: ["MongoDB Atlas"],
      deployment: ["Vercel", "Render"]
    },

    authFlow: [
      { step: "Parent Registration", details: "Parent creates account and links profiles for their children." },
      { step: "Limits & Allowances configuration", details: "Parent sets target interest rates, lists task chore rewards, and limits spending." },
      { step: "Kid Login Node", details: "Child logs in with a secure minor-friendly passcode dashboard." },
      { step: "Virtual Ledger Releases", details: "Child view loads balance widgets and interactive levels maps." },
      { step: "AI Chat mentor queries", details: "Child asks questions to Gemini finance coach." },
      { step: "Activity completes", details: "Child clears chore tasks, dispatches validation requests to parent dashboards." }
    ],

    modules: [
      "Parent Dashboard", "Kid Savings Ledger", "Gamified Levels", "Allowance Dispatcher",
      "AI Coach Consultation", "Quizzes & Rewards Engine"
    ],

    security: [
      { title: "Parent Control Authorization", details: "Only parent JWT signatures are allowed to edit limits or approve transactions." },
      { title: "Sandbox Isolation", details: "Transactions use simulated play money, ensuring absolute isolation from real-world payment networks." },
      { title: "Encrypted Passcodes", details: "Kids credentials hashed safely in MongoDB using bcrypt salts." }
    ],

    apiExplorer: [
      { method: "POST", path: "/api/parent/register", group: "Authorization", desc: "Registers parent profile node.", req: '{\n  "email": "parent@gct.edu",\n  "password": "hashed"\n}', res: '{\n  "parentId": "p_9901"\n}' },
      { method: "POST", path: "/api/kid/ledger/update", group: "Ledger", desc: "Transfers fake play balance points.", req: '{\n  "kidId": "k_091",\n  "amount": 250\n}', res: '{\n  "newBalance": 1250\n}' }
    ],

    database: [
      { name: "Parents", desc: "Parent credentials.", schema: '{\n  "_id": "ObjectId",\n  "email": "String",\n  "children": "Array [ObjectId]"\n}' },
      { name: "Kids", desc: "Minor profiles.", schema: '{\n  "_id": "ObjectId",\n  "parentId": "ObjectId",\n  "balance": "Number",\n  "level": "Number"\n}' }
    ],

    challenges: [
      { issue: "Designing child-friendly UX", fix: "Implemented lively micro-animations and responsive badge displays using Framer Motion layouts, avoiding complex text grids." }
    ],

    futureEnhancements: [
      "Integrating minor prepaid cards interfaces for controlled physical usage.",
      "Expanding quiz categories with live leaderboards."
    ],

    metrics: [
      { label: "Incubation Status", value: "Incubated" },
      { label: "Quiz Completion", value: "98.2%" },
      { label: "Sound Effects", value: "Interactive" }
    ],

    gallery: [
      "images/smartplaybank/dashboard.svg",
      "images/smartplaybank/levels.svg",
      "images/smartplaybank/parent_panel.svg",
      "images/smartplaybank/mockups.svg"
    ],
    githubUrl: "https://github.com/Maharaja19/smart-play-bank",
    demoUrl: "",
    docsUrl: "https://github.com/Maharaja19/smart-play-bank#readme"
  }
};
