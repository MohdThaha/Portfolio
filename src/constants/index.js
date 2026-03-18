export const PERSONAL_INFO = {
  name: "Mohammed Thaha",
  role: "Backend & Cloud Engineer",
  tagline: "I build scalable SaaS platforms, ERP systems, and cloud-native microservices.",
  github: "https://github.com/MohdThaha",
  linkedin: "https://www.linkedin.com/in/mohammed-thaha-dawood-4b2908291/",
  email: "thahad2@gmail.com",
  philosophy: "Solve today's problem cleanly. Don't engineer for a scale you haven't earned yet. Clean APIs, honest code, systems that don't wake you up at 3am."
};

export const HIGHLIGHTS = [
  { label: "Role", value: "Backend Developer" },
  { label: "Focus", value: "SaaS & ERP" },
  { label: "Stack", value: "Node, AWS, Docker" },
];

export const EXPERIENCES = [
  {
    id: "cygnonex-2024",
    company: "Cygnonex Innovation Pvt Ltd",
    role: "Backend Engineer / Full Stack Developer",
    period: "March 2024 - Present",
    achievements: [
      "Developing scalable backend infrastructure for the BillBizz ERP platform.",
      "Implementing secure user auth & identity with AWS Cognito and JWT.",
      "Building and managing CI/CD pipelines using Jenkins for streamlined deployments.",
      "Optimizing API performance and reducing cloud infrastructure costs.",
      "Integrating multi-tenant architectures for robust SaaS operations."
    ],
    techStack: ["Node.js", "Express", "MongoDB", "AWS", "Jenkins", "Cognito"]
  },
  {
    id: "lexyle-2023",
    company: "Lexyle Technologies, Kerala",
    role: "Backend Developer Intern",
    period: "Sep 2023 – Feb 2024",
    achievements: [
      "Built and shipped REST APIs in Node.js/Express.js for internal SaaS tooling used by 3+ clients; contributed to MySQL schema design and query optimisation under senior engineer guidance.",
      "Integrated Docker-based CI/CD pipelines and wrote unit tests, reducing manual deployment steps and improving release reliability across the team."
    ],
    techStack: ["Node.js", "Express.js", "MySQL", "Docker", "CI/CD", "Testing"]
  }
];

export const EDUCATION = [
  {
    id: "vkcet-2019-2023",
    institution: "Valia Koonambaikulathamma College of Engineering & Technology",
    degree: "Bachelor’s Degree in Computer Science",
    period: "2019 - 2023"
  }
];

export const PROJECTS = [
  {
    id: "outrelay",
    title: "outrelay",
    tagline: "Events never lost across service boundaries.",
    description: "Reliable event relay for distributed systems — ensures messages reach their destination even when services go down, restart, or misbehave. Built for the reality of production microservices.",
    techStack: ["Microservices", "Event-driven", "Resilience"],
    link: "https://github.com/MohdThaha/outrelay"
  },
  {
    id: "saga-orchestrator",
    title: "saga-orchestrator",
    tagline: "Multi-step transactions never left half-finished.",
    description: "A SAGA pattern orchestrator for managing complex, multi-service workflows. When one step fails, compensating actions roll back cleanly — no ghost states, no inconsistent data.",
    techStack: ["Node.js", "SAGA Pattern", "Distributed Transactions"],
    link: "https://github.com/MohdThaha/saga-orchestrator"
  },
  {
    id: "idem-guard",
    title: "idem-guard",
    tagline: "Endpoints never executed twice accidentally.",
    description: "Idempotency middleware for Node.js APIs. Duplicate requests — from retries, network blips, or impatient users — are detected and short-circuited before they cause damage.",
    techStack: ["Express/NestJS Middleware", "Redis/DB Hooks", "API Security"],
    link: "https://github.com/MohdThaha/idem-guard"
  },
  {
    id: "aegis",
    title: "Aegis Fraud Detection",
    tagline: "Intelligent system for detecting and preventing fraudulent activities.",
    description: "A machine learning and data-driven approach designed to identify anomalies, evaluate risk, and protect systems against fraudulent behaviors in real-time.",
    techStack: ["Python", "Machine Learning", "Data Science"],
    link: "https://github.com/MohdThaha/Aegis-Fraud-Detection"
  },
  {
    id: "sentinel-gateway",
    title: "Sentinel Gateway",
    tagline: "Robust API gateway for secure microservices routing.",
    description: "A highly performant API gateway that handles routing, rate limiting, and authenticating incoming requests before proxying them to underlying microservices.",
    techStack: ["API Gateway", "Security", "Routing"],
    link: "https://github.com/MohdThaha/Sentinel-gateway"
  },
  {
    id: "dsar-portal",
    title: "DSAR Portal",
    tagline: "Streamlined Data Subject Access Request management.",
    description: "A comprehensive portal designed to handle, track, and automate user requests regarding their personal information in compliance with standard privacy laws.",
    techStack: ["Web Portal", "Compliance", "Automation"],
    link: "https://github.com/MohdThaha/DsarPortal"
  },
  {
    id: "pulse",
    title: "Pulse Sentiment Analyzer",
    tagline: "Real-time market sentiment analysis engine.",
    description: "A real-time tool that ingests diverse data streams to evaluate market sentiment, empowering data-driven financial and business decision-making.",
    techStack: ["Real-time Processing", "Data Pipelines", "NLP"],
    link: "https://github.com/MohdThaha/Pulse-Real-time-Market-Sentiment-Analyzer"
  },
  {
    id: "datalens-suite",
    title: "DataLens Suite",
    tagline: "End-to-end data intelligence and ML serving platform.",
    description: "A robust suite featuring an Anomaly Detection Engine, Decision Intelligence, Exploratory Intelligence, Predictive Modeling, and an ML Model Serving Platform for full-scale data operations.",
    techStack: ["Machine Learning", "Predictive Modeling", "Model Serving"],
    link: "https://github.com/MohdThaha/DataLens-Anomaly_Detection_Engine"
  },
  {
    id: "hr-payroll",
    title: "HR & Payroll",
    tagline: "Complete HR and payroll management system.",
    description: "A streamlined platform designed to handle employee records, track attendance, and process complex payroll calculations efficiently and reliably.",
    techStack: ["Node.js", "Database Design", "ERP"],
    link: "https://github.com/MohdThaha/HrPayroll"
  }
];

export const SKILLS = [
  { category: "Backend & Core", items: ["Node.js", "Express.js", "NestJS", "TypeScript", "Python", "Go", "GraphQL", "gRPC", "WebSockets"] },
  { category: "Databases & Messaging", items: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "ClickHouse", "BullMQ", "Kafka", "RabbitMQ"] },
  { category: "Cloud & Infrastructure", items: ["AWS (ECS, EKS, Lambda, S3, RDS)", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions"] },
  { category: "Architecture & Design", items: ["Microservices", "Event-Driven Architecture", "CQRS", "SAGA Pattern", "Idempotency", "System Design at Scale", "Multi-tenant SaaS ERP"] },
  { category: "Security & AI", items: ["AWS Cognito", "OAuth2.0 / JWT", "LLM Integration", "RAG Pipelines", "Vector Databases", "Zero-Trust Architecture"] }
];

export const PROFILE_IMG = `${process.env.PUBLIC_URL || '/Portfolio'}/assets/images/hero_img.jpg`;