import {
  ProjectItem,
  SkillCategoryGroup,
  AchievementItem,
  CertificationItem,
  EducationItem,
} from "@/types";

export const PERSONAL_INFO = {
  name: "Priyanshu Ranjan Verma",
  headline: "Backend Engineering & AI/ML Systems",
  tagline: "Architecting high-concurrency backends, distributed pipelines, and production AI systems.",
  quote: "Specializing in resilient asynchronous backend services, real-time distributed data pipelines, and production-grade AI systems with strict engineering rigor.",
  location: "Bengaluru, India",
  degree: "Bachelor of Engineering in Computer Science & Engineering",
  cgpa: "8.54",
  academicPeriod: "2023–2027",
  institution: "Acharya Institute of Technology, Bengaluru",
  profileImage: "/images/priyanshu_portrait.jpg",
  avatarImage: "/images/priyanshu_avatar.jpg",
  resumePdfUrl: "/priyanshu_resume.pdf",
  // Reconciled Professional Summary from Resumes
  professionalSummary:
    "Computer Science Engineering student with hands-on experience building backend and full-stack systems using Python, FastAPI, PostgreSQL, React, Redis, and Docker. Experienced in REST APIs, asynchronous processing, distributed systems, authentication, testing, and production-oriented software development. Strong foundation in Data Structures & Algorithms, OOP, DBMS, Operating Systems, and Computer Networks.",
  areasOfExpertise: [
    {
      title: "Backend & Concurrency",
      desc: "High-throughput asynchronous REST APIs using FastAPI and Uvicorn, with strict Pydantic data validation, Celery worker orchestration, and event loops.",
    },
    {
      title: "Distributed Systems & Streaming",
      desc: "Real-time stream processing with Kafka and Apache Flink, Redis distributed locks, sliding-window aggregations, and resilient worker topologies.",
    },
    {
      title: "AI/ML & Incident Intelligence",
      desc: "Statistical anomaly detection (Z-score, Isolation Forest), HDBSCAN density clustering on embeddings, and DAG-based root-cause analysis (RCA).",
    },
    {
      title: "RAG & Agentic AI",
      desc: "Dense vector retrieval with pgvector HNSW indexing, Reciprocal Rank Fusion with PostgreSQL FTS, LangChain, LangGraph workflows, and LLM reasoning.",
    },
    {
      title: "Graph Analytics & Fraud Scoring",
      desc: "Sub-second financial transaction risk scoring combining supervised XGBoost, unsupervised Isolation Forest, SHAP explainability, and Neo4j graph traversal.",
    },
    {
      title: "Production Infrastructure & Testing",
      desc: "Containerized deployments via Docker and Kubernetes, Helm charts, Prometheus/Grafana metrics, automated CI, and extensive test suites (100+ to 300+ tests).",
    },
  ],
  links: {
    github: "https://github.com/priyanshu130018",
    linkedin: "https://www.linkedin.com/in/priyanshu-ranjan-verma-b94306308",
    email: "13vermapriyanshu@gmail.com",
    phone: "+91 9204250377",
    leetcode: "https://leetcode.com/u/priyanshu130018",
  },
};

export const SKILL_CATEGORIES: SkillCategoryGroup[] = [
  {
    id: "languages",
    category: "LANGUAGES",
    code: "SYS-01 // RUNTIME SYNTAX",
    description: "Core programming languages for algorithmic systems, backend services, and distributed architectures.",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    id: "backend-distributed",
    category: "BACKEND & DISTRIBUTED SYSTEMS",
    code: "SYS-02 // APPLICATION & CONCURRENCY",
    description: "Asynchronous processing, message queues, stream processing, and distributed microservices.",
    skills: [
      "FastAPI",
      "REST APIs",
      "Asynchronous Processing",
      "Kafka",
      "Apache Flink",
      "Celery",
      "NetworkX",
      "Neo4j",
    ],
  },
  {
    id: "frontend",
    category: "FRONTEND",
    code: "SYS-03 // CLIENT INTERFACES",
    description: "Responsive, accessible, and high-performance component architectures.",
    skills: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "databases-caching",
    category: "DATABASES & CACHING",
    code: "SYS-04 // PERSISTENCE & INDEXING",
    description: "Relational persistence, vector similarity search indexes, in-memory caching, and distributed stores.",
    skills: ["PostgreSQL", "MySQL", "Redis", "pgvector"],
  },
  {
    id: "ai-ml",
    category: "AI / MACHINE LEARNING",
    code: "SYS-05 // INTELLIGENCE PIPELINES",
    description: "Predictive models, explainability, vector embeddings, clustering, and retrieval-augmented architectures.",
    skills: [
      "Machine Learning",
      "NLP",
      "Generative AI",
      "LLMs",
      "RAG",
      "Agentic AI",
      "XGBoost",
      "SHAP",
      "HDBSCAN",
      "Isolation Forest",
    ],
  },
  {
    id: "ai-frameworks",
    category: "AI FRAMEWORKS & TOOLS",
    code: "SYS-06 // ORCHESTRATION & INFERENCE",
    description: "Production agentic orchestration, open weights inference, and multimodal LLM APIs.",
    skills: ["LangChain", "LangGraph", "Hugging Face", "Ollama", "Gemini API"],
  },
  {
    id: "cloud-devops",
    category: "CLOUD & DEVOPS",
    code: "SYS-07 // INFRASTRUCTURE & ORCHESTRATION",
    description: "Containerization, cluster management, reverse proxies, and cloud infrastructure.",
    skills: [
      "Docker",
      "Kubernetes",
      "Helm",
      "Nginx",
      "AWS EC2",
      "AWS S3",
      "AWS IAM",
      "AWS RDS",
      "AWS Lambda",
      "AWS Bedrock",
    ],
  },
  {
    id: "testing-tools",
    category: "TESTING & DEVELOPER TOOLS",
    code: "SYS-08 // QUALITY & CI/CD",
    description: "Automated regression testing, version control, operating systems, and API verification.",
    skills: ["Pytest", "API Testing", "Git", "Linux", "Postman"],
  },
  {
    id: "core-cs",
    category: "COMPUTER SCIENCE FUNDAMENTALS",
    code: "SYS-09 // THEORETICAL FOUNDATION",
    description: "Rigorous algorithmic problem solving and low-level computer science principles.",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "vermithor",
    number: "01",
    title: "VERMITHOR",
    tagline: "AI-Powered Production Incident Intelligence Platform",
    category: "BACKEND + AI/ML + DISTRIBUTED SYSTEMS",
    description:
      "Incident-intelligence platform that detects anomalies using Z-score and Isolation Forest, clusters related logs with MiniLM and HDBSCAN, and performs topology-aware root-cause analysis through graph-based analysis; deployed with Docker, Helm, Prometheus/Grafana with 170+ tests.",
    technologies: [
      "Python",
      "FastAPI",
      "Celery",
      "Redis",
      "PostgreSQL",
      "pgvector",
      "HDBSCAN",
      "NetworkX",
      "Docker",
      "Kubernetes",
      "Helm",
      "Prometheus",
      "Grafana",
      "Ollama",
    ],
    githubUrl: "https://github.com/priyanshu130018/Vermithor.git",
    liveUrl: null,
    visualType: "vermithor",
    isFeatured: true,
    highlights: [
      "Statistical Anomaly Detection: Ingests distributed telemetry, flags abrupt spikes with dynamic Z-score and behavioural drifts via multivariate Isolation Forests.",
      "Density-Based Log Clustering: Groups millions of log records using Sentence Transformers (MiniLM) and HDBSCAN density clustering to suppress alert fatigue.",
      "Topology-Aware Causal RCA: Constructs directed dependency graphs with NetworkX to differentiate upstream failure roots from symptom cascades.",
      "Production-Grade Rigor: Backed by 170+ tests, deployed with Docker, Kubernetes, Helm, and monitored via Prometheus & Grafana.",
    ],
    architectureSummary:
      "FastAPI backend with Celery workers over Redis, pgvector-backed incident memory, NetworkX causal DAG engine, and Prometheus/Grafana observability.",
    metrics: [
      { label: "Test Suite", value: "170+ Tests" },
      { label: "Clustering", value: "MiniLM + HDBSCAN" },
      { label: "Causal Engine", value: "NetworkX DAG" },
      { label: "Deployment", value: "K8s + Helm" },
    ],
  },
  {
    id: "namma-connect",
    number: "02",
    title: "NAMMA CONNECT",
    tagline: "AI-Powered Agritourism Marketplace",
    category: "FULL STACK + AGENTIC AI",
    description:
      "Full-stack agritourism marketplace with role-based workflows, partner KYC, service discovery, bookings, semantic search, recommendations, and Agentic AI trip planning; integrated Razorpay payment verification using FastAPI, PostgreSQL, Redis, pgvector, and Gemini with 300+ tests.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Redis",
      "pgvector",
      "Razorpay",
      "Gemini API",
      "LangGraph",
      "Docker",
    ],
    githubUrl: "https://github.com/priyanshu130018/Namma-Connect.git",
    liveUrl: null,
    visualType: "namma",
    isFeatured: true,
    highlights: [
      "Multi-Role Marketplace & KYC: Engineered strict role-based access workflows for Travelers, Farm Hosts, and Admins with partner KYC validation.",
      "Vector Semantic Search & Recommendations: Farm and experience discovery embedded in PostgreSQL using pgvector HNSW similarity indexing.",
      "Agentic AI Trip Planning: Grounded travel itinerary generation powered by Gemini API and LangGraph workflows without hallucination.",
      "Verified Transaction Processing: Integrated Razorpay payment verification, Redis caching for hot regional listings, backed by 300+ tests.",
    ],
    architectureSummary:
      "Decoupled FastAPI service with asynchronous PostgreSQL queries via pgvector, Redis caching layer, React client, and containerized Docker setup.",
    metrics: [
      { label: "Test Suite", value: "300+ Tests" },
      { label: "Semantic Search", value: "pgvector HNSW" },
      { label: "Payments", value: "Razorpay Verified" },
      { label: "AI Planning", value: "Gemini + LangGraph" },
    ],
  },
  {
    id: "detexa",
    number: "03",
    title: "DETEXA",
    tagline: "Real-Time Banking Fraud Detection Platform",
    category: "STREAMING + ML + GRAPH ANALYSIS",
    description:
      "Real-time fraud detection platform combining XGBoost and Isolation Forest with SHAP explanations, achieving 0.974 ROC-AUC and 0.81 PR-AUC on 283K transactions (reported evaluation results), with Kafka/Flink streaming, Redis sliding-window features, Neo4j graph analysis, and a React dashboard.",
    technologies: [
      "Python",
      "FastAPI",
      "Kafka",
      "Apache Flink",
      "Redis",
      "PostgreSQL",
      "Neo4j",
      "XGBoost",
      "SHAP",
      "React",
      "Docker",
    ],
    githubUrl: "https://github.com/priyanshu130018/detexa.git",
    liveUrl: null,
    visualType: "detexa",
    isFeatured: true,
    highlights: [
      "Dual ML Scoring Architecture: Blends supervised XGBoost transaction scoring with unsupervised Isolation Forest for behavioural anomaly detection.",
      "Reported Evaluation Performance: Achieved 0.974 ROC-AUC and 0.81 PR-AUC on an evaluation benchmark of 283,000 transactions.",
      "Streaming Feature Pipeline: Kafka message ingestion paired with Apache Flink and Redis sliding-window aggregation for sub-second feature extraction.",
      "Graph Fraud Syndicates: Neo4j graph traversal mapping transaction networks and circular mule accounts with SHAP feature interpretability.",
    ],
    architectureSummary:
      "Kafka + Flink real-time streaming pipeline feeding Redis sliding-window caches, dual ML scoring inference, Neo4j graph queries, and React dark UI.",
    metrics: [
      { label: "Reported ROC-AUC", value: "0.974" },
      { label: "Reported PR-AUC", value: "0.81" },
      { label: "Dataset Eval", value: "283K Transactions" },
      { label: "Streaming", value: "Kafka + Flink" },
    ],
  },
  {
    id: "tether",
    number: "04",
    title: "TETHER",
    tagline: "Distributed Network Monitoring & Alerting Platform",
    category: "DISTRIBUTED SYSTEMS + NETWORKING",
    description:
      "Distributed monitoring platform where Celery workers probe TCP, HTTP, and DNS targets and trigger Slack, email, and webhook alerts using state-machine workflows, Redis distributed locks, multi-tenant RBAC, refresh-token rotation, and SSRF protection, backed by 110+ tests and CI.",
    technologies: [
      "Python",
      "FastAPI",
      "Celery",
      "Redis",
      "PostgreSQL",
      "React",
      "Docker",
      "Nginx",
    ],
    githubUrl: "https://github.com/priyanshu130018/Tether.git",
    liveUrl: null,
    visualType: "tether",
    isFeatured: true,
    highlights: [
      "Distributed Network Probing: Multi-worker Celery cluster performing active TCP, HTTP, and DNS probes with configurable target timeouts.",
      "Alert State-Machine Workflows: Multi-channel dispatch (Slack, email, webhooks) driven by finite state machines with Redis distributed locks preventing duplicate alerts.",
      "Enterprise Security & Auth: Multi-tenant RBAC, secure JWT refresh-token rotation, strict Pydantic payload sanitation, and SSRF protection for outbound probe targets.",
      "Reliability & CI: Backed by 110+ automated tests, Docker Compose orchestration, and automated CI pipeline checks.",
    ],
    architectureSummary:
      "FastAPI orchestration backend, Celery worker cluster with Redis broker & locks, PostgreSQL persistence, Nginx reverse proxy, and React dashboard.",
    metrics: [
      { label: "Test Suite", value: "110+ Tests & CI" },
      { label: "Probe Targets", value: "TCP / HTTP / DNS" },
      { label: "Coordination", value: "Redis Dist. Locks" },
      { label: "Security", value: "SSRF Shield + RBAC" },
    ],
  },
];

export const ADDITIONAL_PROJECTS: ProjectItem[] = [
  {
    id: "manan-ai",
    number: "05",
    title: "MANAN AI",
    tagline: "AI Chat & Document Intelligence Platform",
    category: "RAG & MULTIMODAL",
    description:
      "Document intelligence platform with hybrid RAG search, OCR-based document understanding, semantic retrieval, and long-term memory, enabling context-aware, document-grounded conversations.",
    technologies: [
      "Python",
      "FastAPI",
      "Docker",
      "PostgreSQL",
      "pgvector",
      "LangChain",
      "Hugging Face",
      "Gemini API",
      "Ollama",
    ],
    githubUrl: "https://github.com/priyanshu130018/Manan-AI.git",
    liveUrl: null,
    visualType: "manan",
    isFeatured: false,
    highlights: [
      "Hybrid RAG Retrieval: Merges dense vector similarity (384-D all-MiniLM-L6-v2) with PostgreSQL Full-Text Search via Reciprocal Rank Fusion (RRF).",
      "Multimodal OCR Parsing: Ingestion of PDF, DOCX, PPTX, and scanned images with vision OCR models.",
      "Long-Term Session Memory: Context-grounded conversational threads with token compaction and branch regeneration.",
    ],
    architectureSummary:
      "PostgreSQL with pgvector HNSW indexing, FastAPI REST endpoints, and multimodal document chunking pipelines.",
    metrics: [
      { label: "Retrieval", value: "Dense + FTS RRF" },
      { label: "Vector Dim", value: "384-D HNSW" },
      { label: "Model Routing", value: "Gemini / Ollama" },
    ],
  },
  {
    id: "watchman",
    number: "06",
    title: "WATCHMAN",
    tagline: "Personalized Movie Recommendation System",
    category: "RECOMMENDER SYSTEMS",
    description:
      "Hybrid recommendation engine combining TMDB metadata, genre and cast features, content similarity, and user-preference signals to generate and rank personalized movie recommendations.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Docker",
      "Celery",
      "Redis",
      "TMDB API",
      "Hybrid Recommendation",
    ],
    githubUrl: "https://github.com/priyanshu130018/WatchMan.git",
    liveUrl: null,
    visualType: "watchman",
    isFeatured: false,
    highlights: [
      "Hybrid Scoring Matrix: Blends content-based feature cosine similarity (cast, directors, genres) with collaborative user rating histories.",
      "Asynchronous Catalog Sync: Celery background workers syncing movie metadata and caching hot recommendations in Redis.",
      "Cold-Start Optimization: Onboarding preference vector initialization to seed high-confidence recommendations immediately.",
    ],
    architectureSummary:
      "FastAPI service with Celery background worker pipelines, Redis cache, TMDB API integration, and React client.",
    metrics: [
      { label: "Algorithm", value: "Hybrid Content + Collab" },
      { label: "Worker Stack", value: "Celery + Redis" },
      { label: "Data Source", value: "TMDB API" },
    ],
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "leetcode",
    metric: "120+",
    metricNumber: 120,
    suffix: "+",
    title: "DSA Problems Solved",
    subtitle: "LeetCode Algorithmic Problem Solving",
    description:
      "Solved 120+ Data Structures & Algorithms problems on LeetCode, strengthening algorithmic problem-solving and interview readiness across dynamic programming, trees, graphs, heaps, and sliding-window techniques.",
    category: "DSA",
    badge: "120+ PROBLEMS SOLVED",
  },
  {
    id: "hackathons",
    metric: "4+",
    metricNumber: 4,
    suffix: "+",
    title: "Hackathons",
    subtitle: "Rapid Prototyping Under Tight Deadlines",
    description:
      "Delivered 4+ hackathon projects in team settings, converting problem statements into functional AI and full-stack prototypes under tight deadlines.",
    category: "HACKATHONS",
    badge: "4+ HACKATHON PROTOTYPES",
  },
  {
    id: "academic-cgpa",
    metric: "8.54",
    metricNumber: 8.54,
    suffix: "",
    title: "Academic CGPA",
    subtitle: "B.E. Computer Science & Engineering",
    description:
      "Demonstrated academic excellence at Acharya Institute of Technology, Bengaluru, with an 8.54 CGPA across core computer science disciplines including DSA, Operating Systems, DBMS, and Computer Networks.",
    category: "ACADEMICS",
    badge: "CGPA: 8.54 / 10.0",
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "oracle-ai-genai",
    title: "AI and Generative AI",
    issuer: "Oracle University",
    category: "Artificial Intelligence & Generative AI",
    description:
      "Certified by Oracle University in AI and Generative AI fundamentals, large language models, retrieval-augmented architectures, and cloud AI services.",
    badgeText: "ORACLE UNIVERSITY CERTIFIED",
    credentialCode: "ORACLE-AI-GENAI",
  },
  {
    id: "linkedin-cloud-foundations",
    title: "Foundations of Cloud Computing",
    issuer: "LinkedIn Learning",
    category: "Cloud Computing & Architecture",
    description:
      "Completed certification covering foundational cloud architecture principles, compute virtualization, storage distribution, networking, and cloud security best practices.",
    badgeText: "LINKEDIN LEARNING CERTIFIED",
    credentialCode: "LL-CLOUD-FND",
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "Acharya Institute of Technology",
    location: "Bengaluru, India",
    degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
    period: "2023 – 2027",
    score: "CGPA: 8.54",
    highlights: [
      "Rigorous undergraduate engineering program in Computer Science & Engineering.",
      "Core focus on backend systems, distributed architectures, asynchronous REST APIs, and AI/ML workflows.",
      "Coursework in Data Structures & Algorithms, OOP, Database Management Systems (DBMS), Operating Systems, and Computer Networks.",
    ],
  },
];

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Areas of Expertise", href: "#expertise" },
  { name: "Education & Achievements", href: "#academics" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];
