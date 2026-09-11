export const personalInfo = {
  name: "ANUBHA",
  firstName: "Anubha",
  monogram: "A.",
  brandLine: "CODE • BUILD • LEARN • GROW",
  role: "Software Developer • MCA Student",
  location: "Muzaffarpur, Bihar, India",
  email: "kumarianubha27@gmail.com",
  linkedin: "https://www.linkedin.com/in/anubha-creates",
  github: "https://github.com/Anubha-create",
  resumeUrl: `${import.meta.env.BASE_URL}Anubha-Resume.pdf`,
  portrait: `${import.meta.env.BASE_URL}anubha-portrait.jpg`,
  formalPortrait: `${import.meta.env.BASE_URL}anubha-formal.jpg`,
  summary: "Building practical software and intelligent solutions with a focus on problem solving, clean development, and continuous learning.",
  aboutText: "I am an MCA student and aspiring software developer who enjoys turning technical concepts into practical applications. My project experience spans Java-based web applications, AI/ML systems, NLP, databases, and exploratory data analysis. I approach software engineering with an analytical mindset—prioritizing clean logic, efficient database design, and intuitive user experiences."
};

export const quickFacts = [
  {
    id: "01",
    label: "MCA STUDENT",
    title: "Lovely Professional University",
    highlight: "CGPA: 9.12",
    detail: "Master of Computer Applications (2025 – Present)"
  },
  {
    id: "02",
    label: "SOFTWARE DEVELOPMENT",
    title: "Java • Python • SQL",
    highlight: "Core Engineering",
    detail: "Object-oriented systems, CRUD architectures & APIs"
  },
  {
    id: "03",
    label: "AI & DATA",
    title: "Machine Learning • Analytics • NLP",
    highlight: "Model & Insights",
    detail: "XGBoost, Scikit-learn, TF-IDF & EDA pipelines"
  },
  {
    id: "04",
    label: "CAREER OBJECTIVE",
    title: "Open to Opportunities",
    highlight: "Entry-Level Roles",
    detail: "Full-time Software Developer / IT engineering positions"
  }
];

export const educationList = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    period: "2025 – Present",
    score: "CGPA: 9.12",
    scoreType: "CGPA",
    details: "Advanced coursework in Software Engineering, Advanced Java, Database Systems, Cloud Computing, and Machine Learning algorithms."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "LN Mishra College of Business Management",
    location: "Muzaffarpur, Bihar",
    period: "2017 – 2020",
    score: "82%",
    scoreType: "Percentage",
    details: "Strong foundational grounding in Object-Oriented Programming (C++, Java), Data Structures & Algorithms, Relational Database Management (RDBMS), and Web Technologies."
  },
  {
    degree: "Higher Secondary Certificate (12th)",
    institution: "MBBL Inter College",
    location: "Muzaffarpur, Bihar",
    period: "2015 – 2017",
    score: "73%",
    scoreType: "Percentage",
    details: "Science curriculum with strong emphasis on Mathematics, Physics, and analytical logic."
  }
];

export const projects = [
  {
    id: "finguide-ai",
    number: "01",
    isHeroProject: true,
    title: "FinGuide AI",
    tagline: "AI-Powered Investment Advisor & Stock Trend Prediction",
    date: "Aug 2026",
    category: "AI / Machine Learning & Web",
    techStack: ["Python", "Flask", "XGBoost", "Scikit-learn", "Pandas", "NumPy", "REST APIs"],
    shortDescription: "AI-powered investment advisor that predicts stock trends using XGBoost regression and historical market data.",
    overview: "FinGuide AI is an intelligent financial analytics application engineered to assist investors in navigating market volatility. It merges machine learning regression algorithms with real-time market data to provide actionable investment insights.",
    problem: "Retail investors often struggle with information overload and lack automated, objective tools to gauge equity momentum and risk before making investment decisions.",
    solution: "Engineered an end-to-end web system that fetches live ticker prices and financial news feeds, computes technical momentum indicators, performs volatility modeling, and applies XGBoost regression to output clear Buy/Hold/Sell signals.",
    features: [
      "Spearheaded an AI-powered investment advisor predicting stock trends using XGBoost regression and historical market data",
      "Integrated real-time stock prices and financial news feeds through external REST APIs",
      "Engineered technical indicators and volatility analysis to generate dynamic Buy / Hold / Sell recommendations",
      "Designed an interactive, responsive web interface for stock exploration and visual trend forecasting"
    ],
    whatILearned: "Deepened proficiency in time-series data handling, managing external REST API throughput, training calibrated gradient boosted regression models, and building clean web interfaces with Flask.",
    repo: "https://github.com/Anubha-create/FinGuide-AI.git"
  },
  {
    id: "brainvault",
    number: "02",
    isHeroProject: false,
    title: "BrainVault",
    tagline: "Student Record Management System with Role-Based Authentication",
    date: "May 2026",
    category: "Java Enterprise & Database",
    techStack: ["Java", "HTML", "CSS", "MySQL", "JavaScript"],
    shortDescription: "Student record management system with secure admin and student role-based authentication.",
    overview: "BrainVault is a structured Java web application built to streamline academic administrative operations, student profiles, and grade/record management with rigorous role access controls.",
    problem: "Educational institutions require dependable, role-restricted record systems to prevent unauthorized access while enabling efficient academic record maintenance.",
    solution: "Architected a full CRUD student record platform with distinct session authentication for administrators and students, backed by an optimized MySQL relational schema.",
    features: [
      "Engineered BrainVault with secure role-based authentication separating administrator and student privileges",
      "Developed full CRUD operations to efficiently add, update, search, and manage student academic records",
      "Architected responsive user interfaces and backend database operations for seamless data storage and retrieval",
      "Optimized application performance through iterative testing, SQL query tuning, and debugging"
    ],
    whatILearned: "Gained hands-on experience in Java web architecture, session lifecycle control, relational database normalization, and bulletproof server-side CRUD validation.",
    repo: "https://github.com/Anubha-create/BrainVault.git"
  },
  {
    id: "fake-news-classifier",
    number: "03",
    isHeroProject: false,
    title: "Fake News Classifier",
    tagline: "NLP Machine Learning Detection System",
    date: "Nov 2025",
    category: "Machine Learning & NLP",
    techStack: ["Python", "Logistic Regression", "Scikit-learn", "NLTK", "TF-IDF", "Gradio", "Hugging Face Spaces"],
    shortDescription: "Constructed ML classifier using Python, scikit-learn, and NLTK to detect fake news with 95% accuracy.",
    verifiedStat: "95% Accuracy",
    datasetInfo: "ISOT Dataset • 44,898 Articles",
    overview: "An end-to-end natural language processing pipeline and interactive web classifier trained to detect misinformation and deceptive news articles with high statistical confidence.",
    problem: "The rapid dissemination of misleading online articles undermines public information integrity, necessitating automated text verification models.",
    solution: "Trained a Logistic Regression model on the benchmark ISOT dataset (44,898 articles) utilizing TF-IDF vectorization and a complete text preprocessing pipeline.",
    features: [
      "Constructed ML classifier using Python, scikit-learn, and NLTK achieving 95% test accuracy",
      "Trained Logistic Regression model on ISOT dataset (44,898 articles) using TF-IDF vectorization",
      "Implemented complete NLP preprocessing pipeline: tokenization, lemmatization, and stop-word removal",
      "Deployed interactive web application using Gradio on Hugging Face Spaces for real-time inference"
    ],
    whatILearned: "Mastered natural language preprocessing pipelines, TF-IDF feature weighting, classification metrics evaluation, and cloud model hosting on Hugging Face Spaces.",
    repo: "https://github.com/Anubha-create/fake-news-classifier.git"
  },
  {
    id: "campus-recruitment",
    number: "04",
    isHeroProject: false,
    title: "Campus Recruitment & Placement Management System",
    tagline: "Centralized Placement Drive & Automated Eligibility Screening Portal",
    date: "Aug 2026",
    category: "Java Enterprise & Database",
    techStack: ["Java", "HTML", "CSS", "MySQL", "JavaScript"],
    shortDescription: "Centralized web application to manage student profiles, job drives, applications, and placement activities.",
    overview: "A comprehensive campus placement automation platform facilitating multi-tier coordination between student applicants, corporate recruiters, and college placement officers.",
    problem: "Manual eligibility screening across hundreds of student records during high-volume campus recruitment drives creates administrative bottlenecks and potential human error.",
    solution: "Automated candidate screening using Java business logic evaluating CGPA, branch, graduation year, and backlog criteria against recruiter job postings in real time.",
    features: [
      "Constructed a centralized web application to manage student profiles, job drives, applications, and placement activities",
      "Established role-based access for students, recruiters, and administrators with secure authentication and application tracking",
      "Automated candidate eligibility screening in Java by evaluating CGPA, branch, graduation year, and backlog criteria",
      "Integrated MySQL database operations to maintain job postings, student records, company details, and application statuses"
    ],
    whatILearned: "Strengthened multi-entity schema design, complex conditional business logic in Java, and user journey optimization for disparate stakeholder groups.",
    repo: "https://github.com/Anubha-create/CampusRecruitmentSystem.git"
  }
];

export const skillCategories = [
  {
    title: "Programming",
    icon: "Code2",
    description: "Core languages for building robust logic and backend architectures",
    skills: [
      { name: "Java", level: "Primary", tag: "Backend & OOP" },
      { name: "Python", level: "Primary", tag: "AI, ML & Scripting" },
      { name: "C++", level: "Proficient", tag: "Data Structures & Logic" },
      { name: "SQL", level: "Primary", tag: "Queries & RDBMS" }
    ]
  },
  {
    title: "Web Technologies",
    icon: "Globe",
    description: "Interface development and responsive web architectures",
    skills: [
      { name: "HTML5", level: "Proficient", tag: "Semantic Structure" },
      { name: "CSS3", level: "Proficient", tag: "Responsive Design" },
      { name: "JavaScript", level: "Proficient", tag: "DOM & Dynamic Web" },
      { name: "Flask", level: "Proficient", tag: "Python REST APIs" }
    ]
  },
  {
    title: "Data & AI",
    icon: "Brain",
    description: "Machine learning, statistical modeling, and data manipulation",
    skills: [
      { name: "Pandas", level: "Proficient", tag: "Data Wrangling" },
      { name: "NumPy", level: "Proficient", tag: "Numerical Computing" },
      { name: "Scikit-learn", level: "Proficient", tag: "Machine Learning" },
      { name: "Matplotlib", level: "Proficient", tag: "Visualization" },
      { name: "Seaborn", level: "Proficient", tag: "Statistical Plots" },
      { name: "Exploratory Data Analysis (EDA)", level: "Proficient", tag: "Insights Discovery" },
      { name: "NLTK", level: "Proficient", tag: "Natural Language Processing" },
      { name: "XGBoost", level: "Proficient", tag: "Gradient Boosting" }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: "Wrench",
    description: "Development workflows, version control, and business intelligence",
    skills: [
      { name: "Git", level: "Proficient", tag: "Version Control" },
      { name: "GitHub", level: "Proficient", tag: "Collaboration & Repos" },
      { name: "Power BI", level: "Proficient", tag: "BI Dashboards" },
      { name: "IBM Cognos", level: "Proficient", tag: "Enterprise Analytics" },
      { name: "MySQL", level: "Proficient", tag: "Relational DB" }
    ]
  }
];

export const certifications = [
  {
    id: "cert-01",
    name: "Oracle Agentic AI Certified Foundations Associate",
    issuer: "Oracle",
    date: "July 2026",
    credentialType: "AI & Cloud Foundations",
    skillsLearned: "Agentic AI architectures, autonomous agents, tool calling, foundation models",
    verificationUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=1002F6530BEF6305BCD9FFA511153EF93D8B14C500B696D596618DA53CF51A9E"
  },
  {
    id: "cert-02",
    name: "Data Science & Analytics",
    issuer: "HP LIFE",
    date: "July 2026",
    credentialType: "Professional Certification",
    credentialId: "0a1ebf13-f105-4ef6-bd02-53a4f9b68b5e",
    skillsLearned: "Business data analytics, statistical reasoning, decision intelligence",
    verificationUrl: "https://www.life-global.org/certificate/0a1ebf13-f105-4ef6-bd02-53a4f9b68b5e"
  },
  {
    id: "cert-03",
    name: "Google AI Essentials",
    issuer: "Google / Coursera",
    date: "2026",
    credentialType: "Specialization Credential",
    credentialId: "YQC3GMYR34HJ",
    skillsLearned: "Generative AI workflows, prompt engineering, AI ethics, productivity tooling",
    verificationUrl: "https://www.coursera.org/account/accomplishments/specialization/YQC3GMYR34HJ"
  },
  {
    id: "cert-04",
    name: "Tata - GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata / Forage",
    date: "2026",
    credentialType: "Industry Simulation",
    skillsLearned: "Enterprise GenAI analytics, executive reporting, business data modeling",
    verificationUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_690a3bba950ea250db6cd78d_1783349513247_completion_certificate.pdf"
  },
  {
    id: "cert-05",
    name: "Maximize Productivity With AI Tools",
    issuer: "Coursera",
    date: "2026",
    credentialType: "Verified Certificate",
    credentialId: "4MK1A24GPCBI",
    skillsLearned: "AI tool orchestration, automated workflows, intelligent research",
    verificationUrl: "https://www.coursera.org/account/accomplishments/records/4MK1A24GPCBI"
  },
  {
    id: "cert-06",
    name: "Complete Data Analyst Bootcamp From Basics To Advanced",
    issuer: "Udemy",
    date: "2026",
    credentialType: "Professional Course",
    credentialId: "UC-42055752-a0fe-4798-8800-2c336b314020",
    skillsLearned: "SQL, Python, Excel, data visualization, exploratory analytics",
    verificationUrl: "https://www.udemy.com/certificate/UC-42055752-a0fe-4798-8800-2c336b314020/"
  },
  {
    id: "cert-07",
    name: "SQL (Intermediate)",
    issuer: "HackerRank",
    date: "May 2026",
    credentialType: "Skill Verification",
    credentialId: "39bd8b62a5bb",
    skillsLearned: "Advanced joins, subqueries, group by aggregations, window functions",
    verificationUrl: "https://www.hackerrank.com/certificates/39bd8b62a5bb"
  },
  {
    id: "cert-08",
    name: "Programming in Java",
    issuer: "NPTEL / Swayam",
    date: "May 2026",
    credentialType: "National Academic Certification",
    skillsLearned: "Core Java, OOP principles, multi-threading, collections framework, exception handling"
  },
  {
    id: "cert-09",
    name: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle",
    date: "October 2025",
    credentialType: "Cloud Professional Certification",
    skillsLearned: "OCI Data Science services, model lifecycle, deployment & monitoring"
  },
  {
    id: "cert-10",
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "2025",
    credentialType: "Cloud Professional AI Credential",
    skillsLearned: "LLM fine-tuning, retrieval-augmented generation (RAG), OCI GenAI services"
  }
];

export const projectJourney = [
  {
    period: "Late 2025",
    title: "Natural Language Processing & Model Deployment",
    project: "Fake News Classifier",
    description: "Deepened practical machine learning skills by training a Logistic Regression model on 44,898 articles from the ISOT dataset, achieving 95% accuracy and deploying on Hugging Face Spaces with Gradio.",
    tags: ["Python", "NLP", "Scikit-learn", "Hugging Face"]
  },
  {
    period: "Early 2026",
    title: "Enterprise Java & Relational Architecture",
    project: "BrainVault",
    description: "Engineered a student record management web application with role-based access control (Admin / Student), full CRUD capabilities, and an optimized MySQL backend.",
    tags: ["Java", "MySQL", "Authentication", "CRUD"]
  },
  {
    period: "Mid 2026",
    title: "Advanced Predictive AI & FinTech Analytics",
    project: "FinGuide AI",
    description: "Architected a stock trend prediction system utilizing XGBoost regression, real-time market API feeds, volatility analysis, and dynamic Buy/Hold/Sell signal generation.",
    tags: ["XGBoost", "Flask", "APIs", "Data Analytics"]
  },
  {
    period: "Late 2026",
    title: "Automated Placement Screening & Multi-Tier Systems",
    project: "Campus Recruitment & Placement System",
    description: "Built an end-to-end recruitment management portal with automated candidate eligibility logic checking CGPA, backlog, and branch criteria across multi-role workflows.",
    tags: ["Java", "MySQL", "Business Logic", "Full Stack"]
  }
];

export const whyAnubhaPillars = [
  {
    id: "01",
    title: "Problem Solver",
    summary: "Approaches technical problems analytically and focuses on practical, maintainable solutions rather than unnecessary complexity.",
    evidence: "Implemented automated eligibility verification algorithms in Java and predictive regression modeling in Python to solve concrete workflow challenges."
  },
  {
    id: "02",
    title: "Continuous Learner",
    summary: "Proactively expands skills across software development, AI, and database technologies through rigorous coursework and industry certifications.",
    evidence: "Maintains a 9.12 CGPA in MCA at LPU while earning certifications from Oracle, HP LIFE, NPTEL, and HackerRank."
  },
  {
    id: "03",
    title: "Hands-On Project Builder",
    summary: "Takes full ownership of projects from database schema design and business logic to frontend interfaces and deployment.",
    evidence: "Four complete software and AI projects built with Java, Python, MySQL, and ML libraries with public GitHub repositories."
  },
  {
    id: "04",
    title: "Ready to Contribute",
    summary: "Equipped with strong foundational programming knowledge, disciplined work ethics, and excitement to contribute in an entry-level software or IT role.",
    evidence: "Open for immediate full-time software developer opportunities with a commitment to team collaboration and continuous technical growth."
  }
];
