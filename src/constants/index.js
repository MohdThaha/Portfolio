const publicPath = process.env.PUBLIC_URL || '/Portfolio';

export const PERSONAL_INFO = {
  name: "Mohammed Thaha",
  role: "Software Engineer Backend",
  tagline: "I design production-grade APIs, SaaS platforms, ERP systems, and cloud-native services that stay calm under load.",
  github: "https://github.com/MohdThaha",
  linkedin: "https://www.linkedin.com/in/mohammed-thaha-dawood/",
  email: "thahad2@gmail.com",
  resume: `${publicPath}/assets/pdf/Mohammed_Thaha.pdf`,
  philosophy: "Clean APIs, honest architecture, resilient systems, and product decisions that survive real users."
};

export const HIGHLIGHTS = [
  { label: "Current", value: "Software Engineer Backend" },
  { label: "Specialty", value: "Backend Systems" },
  { label: "Domain", value: "SaaS / ERP / Cloud" },
  { label: "Experience", value: "2023 - Present" }
];

export const SYSTEM_SIGNALS = [
  { label: "API design", value: "REST, GraphQL, gRPC" },
  { label: "Reliability", value: "Idempotency, queues, retries" },
  { label: "Cloud", value: "AWS, Docker, CI/CD" },
  { label: "Data", value: "MongoDB, PostgreSQL, Redis" }
];

export const EXPERIENCES = [
  {
    id: "revyrie-2026",
    company: "Revyrie Global",
    role: "Software Engineer Backend",
    period: "July 2026 - Present",
    tone: "Current mission",
    achievements: [
      "Building backend services and cloud-ready product infrastructure for modern business workflows.",
      "Designing APIs, data flows, and integrations with a focus on reliability, observability, and maintainable delivery.",
      "Contributing to system architecture decisions across authentication, deployment, and service communication."
    ],
    techStack: ["Node.js", "TypeScript", "Cloud", "APIs", "System Design", "DevOps"]
  },
  {
    id: "cygnonex-2024",
    company: "Cygnonex Innovation Pvt Ltd",
    role: "Backend Engineer / Full Stack Developer",
    period: "March 2024 - July 2026",
    tone: "SaaS + ERP scale-up",
    achievements: [
      "Developed scalable backend infrastructure for BillBizz ERP and multi-tenant SaaS operations.",
      "Implemented secure identity and access flows with AWS Cognito, JWT, and role-aware APIs.",
      "Built CI/CD workflows with Jenkins and improved deployment reliability across active product modules.",
      "Optimized API performance, data access patterns, and cloud infrastructure cost for production workloads."
    ],
    techStack: ["Node.js", "Express", "MongoDB", "AWS", "Jenkins", "Cognito"]
  },
  {
    id: "lexyle-2023",
    company: "Lexyle Technologies, Kerala",
    role: "Backend Developer Intern",
    period: "Sep 2023 - Feb 2024",
    tone: "Foundation sprint",
    achievements: [
      "Built REST APIs in Node.js and Express.js for internal SaaS tooling while contributing to MySQL schema design.",
      "Worked with Docker-based delivery flows, unit tests, and senior engineering review cycles."
    ],
    techStack: ["Node.js", "Express.js", "MySQL", "Docker", "CI/CD", "Testing"]
  }
];

export const EDUCATION = [
  {
    id: "vkcet-2019-2023",
    institution: "Valia Koonambaikulathamma College of Engineering & Technology",
    degree: "Bachelor's Degree in Computer Science",
    period: "2019 - 2023"
  }
];

export const PROJECTS = [
  {
    id: "outrelay",
    title: "outrelay",
    tagline: "Durable event relay for distributed systems.",
    description: "Reliably moves events across service boundaries so messages still land when services restart, retry, or misbehave.",
    techStack: ["Microservices", "Event-driven", "Resilience"],
    link: "https://github.com/MohdThaha/outrelay",
    accent: "Event mesh"
  },
  {
    id: "saga-orchestrator",
    title: "saga-orchestrator",
    tagline: "Workflow coordination for multi-step transactions.",
    description: "A SAGA pattern orchestrator for service workflows with compensating actions when one step fails.",
    techStack: ["Node.js", "SAGA Pattern", "Distributed Transactions"],
    link: "https://github.com/MohdThaha/saga-orchestrator",
    accent: "Consistency"
  },
  {
    id: "idem-guard",
    title: "idem-guard",
    tagline: "Idempotency middleware for safer APIs.",
    description: "Stops duplicate requests from retries, network issues, and impatient users before they create repeated side effects.",
    techStack: ["Express", "Redis", "API Safety"],
    link: "https://github.com/MohdThaha/idem-guard",
    accent: "Request shield"
  },
  {
    id: "aegis",
    title: "Aegis Fraud Detection",
    tagline: "Risk and anomaly detection system.",
    description: "A machine learning approach for identifying suspicious activity, scoring risk, and protecting high-value workflows.",
    techStack: ["Python", "ML", "Data Science"],
    link: "https://github.com/MohdThaha/Aegis-Fraud-Detection",
    image: `${publicPath}/assets/images/aegis.png`,
    accent: "Intelligence"
  },
  {
    id: "sentinel-gateway",
    title: "Sentinel Gateway",
    tagline: "Secure gateway for microservice traffic.",
    description: "Handles routing, rate limiting, and authentication before requests reach downstream services.",
    techStack: ["API Gateway", "Security", "Routing"],
    link: "https://github.com/MohdThaha/Sentinel-gateway",
    accent: "Edge control"
  },
  {
    id: "datalens-suite",
    title: "DataLens Suite",
    tagline: "ML operations and decision intelligence.",
    description: "A data intelligence suite for anomaly detection, predictive modeling, exploration, and model serving.",
    techStack: ["Machine Learning", "Analytics", "Model Serving"],
    link: "https://github.com/MohdThaha/DataLens-Anomaly_Detection_Engine",
    image: `${publicPath}/assets/images/datalens.png`,
    accent: "ML platform"
  }
];

export const SKILLS = [
  { category: "Backend", items: ["Node.js", "Express.js", "NestJS", "TypeScript", "Python", "Go", "GraphQL", "gRPC", "WebSockets"] },
  { category: "Data & Messaging", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch", "BullMQ", "Kafka", "RabbitMQ"] },
  { category: "Cloud & Delivery", items: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Nginx", "Linux"] },
  { category: "Architecture", items: ["Microservices", "Event-Driven Design", "CQRS", "SAGA Pattern", "Idempotency", "Multi-tenant SaaS", "ERP Systems"] },
  { category: "Security & AI", items: ["AWS Cognito", "OAuth 2.0", "JWT", "RBAC", "LLM Integration", "RAG Pipelines", "Vector Databases"] }
];

export const PROFILE_IMG = `${publicPath}/assets/images/portrait-editorial.png`;
