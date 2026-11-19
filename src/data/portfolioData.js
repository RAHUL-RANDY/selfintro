export const personalInfo = {
  name: "Rahul R",
  role: "AI & DATA SCIENCE STUDENT",
  headline: "Building Intelligent Solutions Through Code, Creativity & AI.",
  bio: "I'm Rahul, an Artificial Intelligence and Data Science student at Chennai Institute of Technology. I'm passionate about programming, data science, AI-powered applications and building innovative digital solutions that solve real-world problems.",
  status: "Open to Learning & Opportunities",
  stats: [
    { value: "+9.1", label: "CGPA Academic Record" },
    { value: "+4", label: "Featured AI & Data Projects" },
  ],
  location: "Chennai, India",
  institution: "Chennai Institute of Technology",
  degree: "B.Tech in Artificial Intelligence & Data Science",
  cgpa: "9.1",
  email: "rahulr.aids2025@citchennai.net",
  emailPlaceholder: "rahulr.aids2025@citchennai.net",
  githubPlaceholder: "https://github.com/RAHUL-RANDY",
  linkedinPlaceholder: "https://linkedin.com/in/rahul-r",
  resumeFilename: "Rahul_R_Resume.pdf",
};

export const aboutData = {
  heading: "Curious Mind. Creative Builder. Future AI Engineer.",
  paragraphs: [
    "I'm currently pursuing B.Tech in Artificial Intelligence and Data Science at Chennai Institute of Technology. I enjoy exploring new technologies, developing software projects and transforming ideas into practical applications.",
    "My interests include Python programming, Data Science, Artificial Intelligence, Web Development and intelligent automation.",
  ],
  highlights: [
    { label: "Degree", value: "B.Tech AI & DS", sub: "Undergraduate" },
    { label: "Institution", value: "Chennai Institute of Technology", sub: "Affiliated to Anna University" },
    { label: "CGPA", value: "9.1 / 10", sub: "Top Academic Standing" },
    { label: "Location", value: "Chennai, India", sub: "Open to Remote & Hybrid" },
  ],
  pillars: [
    {
      title: "Analytical Thinking",
      desc: "Deconstructing complex business and technical challenges into clean mathematical models and data workflows.",
    },
    {
      title: "Intelligent Automation",
      desc: "Harnessing cutting-edge AI, LLM APIs, and data science pipelines to automate repetitive processes.",
    },
    {
      title: "Practical Engineering",
      desc: "Translating theoretical concepts into production-ready web and software applications with intuitive UX.",
    },
  ],
};

export const skillsData = {
  categories: [
    {
      id: "programming",
      name: "Programming",
      description: "Core languages for algorithmic problem-solving and software systems.",
      skills: [
        { name: "Python", level: "Primary", tag: "Advanced Scripting & AI" },
        { name: "C++", level: "Core", tag: "Data Structures & OOP" },
      ],
    },
    {
      id: "datascience",
      name: "Data Science",
      description: "Scientific computing, data manipulation, visualization, and predictive modeling.",
      skills: [
        { name: "Pandas", level: "Framework", tag: "Data Wrangling & Analysis" },
        { name: "NumPy", level: "Framework", tag: "Vectorized Operations" },
        { name: "Matplotlib", level: "Tool", tag: "Exploratory Data Visualization" },
        { name: "Scikit-learn Fundamentals", level: "Framework", tag: "Supervised & Unsupervised ML" },
      ],
    },
    {
      id: "web",
      name: "Web Development",
      description: "Frontend building blocks for responsive and interactive user interfaces.",
      skills: [
        { name: "HTML5", level: "Frontend", tag: "Semantic Markup" },
        { name: "CSS3 / Modern Styling", level: "Frontend", tag: "Responsive Layouts & Motion" },
        { name: "JavaScript (ES6+)", level: "Frontend", tag: "DOM & Asynchronous Logic" },
      ],
    },
    {
      id: "tools",
      name: "Tools & Ecosystem",
      description: "Version control, relational databases, and AI workbench environments.",
      skills: [
        { name: "Git", level: "Version Control", tag: "Branching & Collaboration" },
        { name: "GitHub", level: "Platform", tag: "CI/CD & Open Repositories" },
        { name: "SQL", level: "Database", tag: "Querying & Relational Schema" },
        { name: "Google AI Studio", level: "AI Platform", tag: "Prompt Engineering & Prototyping" },
      ],
    },
    {
      id: "specialized",
      name: "Additional Competencies",
      description: "Emerging AI methodologies, problem-solving, and system integration.",
      skills: [
        { name: "Prompt Engineering", level: "Specialization", tag: "Few-shot & Structured Prompts" },
        { name: "Problem Solving", level: "Discipline", tag: "Algorithmic Logic" },
        { name: "AI Application Development", level: "Domain", tag: "End-to-End Prototypes" },
      ],
    },
  ],
};

export const projectsData = [
  {
    id: "project-01",
    number: "01",
    title: "WorkPulse",
    subtitle: "Employee Satisfaction & Workforce Intelligence Platform",
    description:
      "A data science-based platform designed to analyze employee experience and predict workforce satisfaction using predictive modeling and sentiment analytics.",
    longDescription:
      "WorkPulse addresses organizational attrition and engagement risks by gathering multifaceted workplace feedback, processing employee survey signals through machine learning algorithms, and outputting actionable retention insights on an executive dashboard.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Data Analytics", "Streamlit"],
    category: "Data Science & AI",
    status: "Featured Case Study",
    metrics: [
      { label: "Core Model", val: "Random Forest & Classification" },
      { label: "Dataset Analysis", val: "Multivariate HR Metrics" },
      { label: "Outcome", val: "Early Attrition Risk Detection" },
    ],
    architecture: [
      "Data ingestion & feature engineering pipeline using Pandas",
      "Model training & cross-validation with Scikit-learn",
      "Interactive data visualization dashboards for organizational leaders",
    ],
  },
  {
    id: "project-02",
    number: "02",
    title: "SafeBus Nexus",
    subtitle: "Smart Bus Passenger Safety System",
    description:
      "A smart passenger safety concept integrating QR-based access, safety features and real-time monitoring to enhance transit security and passenger well-being.",
    longDescription:
      "SafeBus Nexus provides transit authorities and passengers with end-to-end security verification. Featuring rapid encrypted QR verification, immediate emergency alert broadcast mechanisms, and passenger occupancy tracking.",
    technologies: ["QR Verification", "Python", "Real-Time Monitoring", "Web Interface", "IoT Architecture"],
    category: "Smart Systems & IoT",
    status: "Innovation Prototype",
    metrics: [
      { label: "Verification", val: "Instant QR Validation" },
      { label: "Safety Alert", val: "Real-time Telemetry" },
      { label: "Target", val: "Public & Institutional Fleets" },
    ],
    architecture: [
      "Dynamic passenger QR token generation and validation service",
      "Real-time event logging and emergency signal dispatcher",
      "Central station monitoring interface for proactive incident handling",
    ],
  },
  {
    id: "project-03",
    number: "03",
    title: "AI Resume Analyzer",
    subtitle: "AI Resume Analyzer & Career Advisor",
    description:
      "An application that analyzes resumes against job descriptions, identifies missing skills and provides career improvement suggestions.",
    longDescription:
      "AI Resume Analyzer leverages Natural Language Processing and LLM capabilities to parse PDF/DOCX resumes, compare candidate competencies against target job descriptions, evaluate semantic match score, and generate customized roadmaps for skill enhancement.",
    technologies: ["Google AI Studio", "Gemini API", "Python", "NLP", "Streamlit"],
    category: "Generative AI & NLP",
    status: "Career Productivity",
    metrics: [
      { label: "Engine", val: "Gemini Pro / Google AI Studio" },
      { label: "Extraction", val: "Automated Skill Gap Analysis" },
      { label: "Feedback", val: "Personalized Study Roadmap" },
    ],
    architecture: [
      "Document ingestion and text tokenization pipeline",
      "Prompt engineering framework evaluating semantic relevance against JDs",
      "Structured JSON scoring for missing skills, keyword frequency, and recommendations",
    ],
  },
  {
    id: "project-04",
    number: "04",
    title: "NOVA",
    subtitle: "AI Personal Assistant",
    description:
      "An AI assistant concept with voice interaction, bilingual Tamil and English support, and a premium interface designed for natural everyday assistance.",
    longDescription:
      "NOVA bridges linguistic accessibility through dual-language audio synthesis and natural speech comprehension. Catering specifically to bilingual speakers, it handles scheduling, contextual queries, and desktop automation in both English and Tamil.",
    technologies: ["Python", "Speech Recognition", "Bilingual NLP (Tamil & English)", "Text-to-Speech", "UI Automation"],
    category: "Conversational AI",
    status: "Personal Assistant",
    metrics: [
      { label: "Languages", val: "Bilingual Tamil & English" },
      { label: "Interface", val: "Voice & Minimalist GUI" },
      { label: "Scope", val: "Daily Tasks & Intelligent Q&A" },
    ],
    architecture: [
      "Dual-channel acoustic input with real-time Tamil & English speech parsing",
      "Context-aware intent classification and task execution engine",
      "Low-latency voice feedback synthesizer with tactile visual cues",
    ],
  },
];

export const educationData = [
  {
    institution: "Chennai Institute of Technology",
    degree: "B.Tech in Artificial Intelligence and Data Science",
    period: "2023 — Present",
    score: "CGPA: 9.1",
    scoreBadge: "Academic Distinction",
    location: "Chennai, Tamil Nadu, India",
    description:
      "Specializing in machine learning paradigms, algorithms, deep neural network fundamentals, database systems, and statistical computation.",
    highlights: [
      "Consistent 9.1 CGPA reflecting high academic rigor and subject mastery",
      "Active participant in technical symposiums, hackathons, and AI development circles",
      "Key coursework: Object-Oriented Programming, Data Structures & Algorithms, Probability & Statistics, Machine Learning, Database Management Systems",
    ],
  },
];

export const certificationsData = [
  {
    id: "cisco-python",
    title: "Python Programming",
    issuer: "Cisco Networking Academy",
    badge: "Official Certification",
    skills: ["Python Core Syntax", "Data Structures", "OOP Principles", "File Handling & Modules"],
    date: "Certified Credential",
    credentialId: "CSCO-PY-VERIFIED",
    description:
      "Comprehensive certification covering foundational to advanced Python programming, algorithmic logic, standard libraries, and software debugging.",
  },
  {
    id: "mongodb-skillathon",
    title: "MongoDB Skillathon",
    issuer: "MongoDB Student Developer Initiative",
    badge: "Database Mastery",
    skills: ["NoSQL Schemas", "Aggregation Pipelines", "Document Queries", "CRUD Operations"],
    date: "Certified Credential",
    credentialId: "MDB-SKILLATHON-VERIFIED",
    description:
      "Intensive practical training on document-oriented database models, schema design for high-scale applications, indexing, and aggregation pipelines.",
  },
  {
    id: "prompt-eng",
    title: "Prompt Engineering for AI Applications",
    issuer: "AI / Developer Specialization",
    badge: "Generative AI",
    skills: ["LLM Prompt Design", "Few-Shot Techniques", "Structured Outputs", "Context Optimization"],
    date: "Certified Credential",
    credentialId: "PE-AI-SPEC-VERIFIED",
    description:
      "Advanced methodologies in crafting high-precision prompts, chaining context, mitigating hallucinations, and integrating LLMs into programmatic applications.",
  },
];
