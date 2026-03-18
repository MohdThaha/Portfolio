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