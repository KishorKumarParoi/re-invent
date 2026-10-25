const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
  {
    id: 4,
    date: "Sep 16, 2023",
    title: "Infinity Image Scrolling Using Intersection Observer API",
    image: "/images/blog1.png",
    link: "https://kishorsblog.hashnode.dev/infinity-image-scrolling-using-intersection-observer-api",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React", "Next", "TypeScript", "Redux", "Tanstack"],
  },
  {
    category: "3D & Animation",
    items: ["Three.js", "GSAP", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Rust", "Node.js", "Express", "NestJS", "Go", "Java"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo", "Flutter"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL", "DynamoDB"],
  },
  {
    category: "Web APIs",
    items: ["GraphQL", "REST", "WebSockets", "WebRTC", "WebVR"],
  },
  {
    category: "Others",
    items: ["Redis", "Kafka", "Nx", "Swagger.io", "Drizzle"],
  },
  {
    category: "AI & ML",
    items: ["Python", "TensorFlow", "n8n", "LangChain"],
  },
  {
    category: "RAG & MCP",
    items: ["Pinecone", "Weaviate", "AWS Bedrock", "Supabase"],
  },
  {
    category: "DevOps",
    items: ["Linux", "Ansible", "Kubernetes", "Terraform"],
  },
  {
    category: "AWS",
    items: ["EC2", "ECR", "S3", "Lambda", "RDS", "CloudFront"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker", "Jenkins", "bun", "Figma"],
  },
  {
    category: "Log/Monitor",
    items: ["ELK Stack", "Prometheus", "Grafana", "DataDog"],
  },
  {
    category: "CI/CD",
    items: ["GitHub Actions", "Travis CI", "Argo CD"],
  },
  {
    category: "Cloud",
    items: ["AWS", "AZURE", "GCP", "Vercel", "Netlify"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS", "Styled-Components"],
  },
  {
    category: "Authentication",
    items: ["JWT", "BetterAuth", "Cognito", "KeyCloack", "Clerk"],
  },
  {
    category: "System Design",
    items: ["Microservices", "Serverless", "Design Patterns"],
  },
  {
    category: "Test/Security",
    items: ["Jest", "Cypress", "E2E", "OWASP", "Postman"],
  },
  {
    category: "Agile Tools",
    items: ["Jira", "Confluence", "Trello", "Asana", "Slack"],
  },
  {
    category: "CS Concepts",
    items: ["DSA", "Networking", "OS", "OOP", "Embedded Systems"],
  },
  {
    category: "Web3",
    items: ["Solidity", "Solana", "Smart Contracts"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/KishorKumarParoi",
  },
  {
    id: 3,
    text: "Facebook",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://www.facebook.com/codewithparoi/",
  },
  {
    id: 2,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/Mr_paroi",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/kishor-kumar-paroi-b06344166/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/1.jpeg",
  },
  {
    id: 2,
    img: "/images/2.jpeg",
  },
  {
    id: 3,
    img: "/images/3.jpeg",
  },
  {
    id: 4,
    img: "/images/4.jpeg",
  },
  {
    id: 5,
    img: "/images/5.jpeg",
  },
  {
    id: 6,
    img: "/images/6.jpeg",
  },
  {
    id: 7,
    img: "/images/7.jpg",
  },
  {
    id: 8,
    img: "/images/8.jpg",
  },
  {
    id: 9,
    img: "/images/9.jpeg",
  },
  {
    id: 10,
    img: "/images/10.jpeg",
  },
  { id: 11, img: "/images/11.jpg" },
  { id: 12, img: "/images/12.jpg" },
  { id: 13, img: "/images/13.jpg" },
  { id: 14, img: "/images/14.jpg" },
  { id: 15, img: "/images/15.jpg" },
  { id: 16, img: "/images/16.jpg" },
  { id: 17, img: "/images/17.jpg" },
  { id: 18, img: "/images/18.jpg" },
  { id: 19, img: "/images/19.jpg" },
  { id: 20, img: "/images/20.jpg" },
  { id: 21, img: "/images/21.jpg" },
  { id: 22, img: "/images/22.jpg" },
  { id: 23, img: "/images/23.jpg" },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  path: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // 1. ZOMATO AI LAKEHOUSE
    {
      id: 101,
      name: "1. Zomato AI Lakehouse & Multimodal Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-8 left-8",
      windowPosition: "top-[12vh] left-[8vw]",
      children: [
        {
          id: 1,
          name: "Architecture & Metrics.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-8",
          subtitle: "Snowflake, PySpark Delta Lake, dbt SCD-2, Feast Store & CV Engine",
          description: [
            "Architected an enterprise multi-cloud Lakehouse on Snowflake and PySpark Delta Lake processing 35M+ orders (2.3 GB) with dbt Core SCD-2, reducing warehouse compute by 42% ($18K/mo operational savings).",
            "Engineered real-time feature streaming via Apache Airflow, Debezium CDC WAL, and Feast Feature Store over Redis, slashing serving latency to <5ms and generating +$340K quarterly revenue lift.",
            "Deployed multimodal CV dispute arbitration (dHash perceptual anti-fraud, receipt OCR) with G-Eval Chain-of-Thought, cutting fraudulent refund claims by 68% and protecting $1.2M in annual partner margins.",
            "Implemented distributed CQRS and Transactional Outbox pattern over Kafka event streams to guarantee exactly-once delivery across 10M+ daily events.",
            "Integrated automated Presidio PII redaction and NVIDIA NeMo Guardrails across review streams for 100% GDPR/DPDP data privacy compliance.",
            "🚀 One-Click Deploy: curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/zomato-analysis/main/bootstrap.sh | bash",
          ],
        },
        {
          id: 2,
          name: "GitHub Repository.url",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/KishorKumarParoi/zomato-analysis",
          position: "top-8 left-48",
        },
        {
          id: 3,
          name: "ARCHITECTURE.md",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-32 left-8",
          subtitle: "Zomato AI Lakehouse & Multimodal Platform — System Architecture & Design Decisions",
          description: [
            "📐 Architectural Blueprint: Distributed event-driven design, multi-stage retrieval mesh, and fault-tolerant failover topologies.",
            "⚡ Throughput & Latency SLOs: Sub-50ms p95 latency guarantees, 99.99% system availability, and high-concurrency resilience.",
            "🛡️ Enterprise Governance: SOC 2 / ISO 27001 compliance standards, automated PII redaction, and strict KMS cryptographic safeguards.",
            "🔗 Full Architecture Document: https://github.com/KishorKumarParoi/zomato-analysis/blob/main/ARCHITECTURE.md",
          ],
        },
        {
          id: 4,
          name: "README.md",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-32 left-48",
          subtitle: "Zomato AI Lakehouse & Multimodal Platform — Quick-Start & Production Runbook",
          description: [
            "📖 System Overview: End-to-end design specifications, architectural decisions, and mathematical modeling foundations.",
            "🚀 Verification Runbook: Single-command deployment pipeline with automated integration tests, health probes, and live telemetry.",
            "📊 Empirical ROI & Impact: Quantified production gains, compute cost reductions, and SLA performance benchmarks.",
            "🔗 Read Full README: https://github.com/KishorKumarParoi/zomato-analysis/blob/main/README.md",
          ],
        },
        {
          id: 10,
          name: "docs/images",
          icon: "/images/folder.png",
          kind: "folder",
          position: "top-56 left-8",
          children: [
            {
              id: 101,
              name: "architecture_flow.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-8 left-8",
              imageUrl: "/images/project-1.png",
            },
            {
              id: 102,
              name: "system_metrics.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-8 left-48",
              imageUrl: "/images/project-1.png",
            },
          ],
        },
        {
          id: 5,
          name: "One-Click Deploy.url",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://raw.githubusercontent.com/KishorKumarParoi/zomato-analysis/main/bootstrap.sh",
          position: "top-56 left-48",
        },
      ],
    },

    // 2. HYBRID ANIME
    {
      id: 102,
      name: "2. Hybrid Anime Intelligence & LLMOps",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-8 left-48",
      windowPosition: "top-[7vh] left-[20vw]",
      children: [
        {
          id: 1,
          name: "Architecture & Metrics.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-8",
          subtitle: "Rust SIMD (<0.5ms), Go 1.24 Gateway, vLLM Multi-LoRA Flywheel",
          description: [
            "Orchestrated a polyglot microservices mesh: Go 1.24 authentication gateway, Rust 1.85 SIMD scoring engine (<0.5ms latency, 50x speedup), and FastAPI core over Kafka.",
            "Pioneered hybrid vector search synthesizing Dual-Tower NCF, ChromaDB HNSW, and BM25 via Reciprocal Rank Fusion (NDCG@10 = 0.94), elevating user retention by 28%.",
            "Served multi-task LoRA adapters via vLLM Multi-LoRA dynamic multiplexing with continuous RSLoRA fine-tuning flywheel on a single GPU (68% GPU cost reduction).",
            "Orchestrated GitOps CD via ArgoCD across AWS EKS, GCP GKE, and Azure AKS with KEDA autoscaling (1 to 24 pods in <45s under 15K req/s).",
            "🚀 One-Click Deploy: curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/Hybrid-Anime-Recommender/main/bootstrap.sh | bash",
          ],
        },
        {
          id: 2,
          name: "GitHub Repository.url",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/KishorKumarParoi/Hybrid-Anime-Recommender",
          position: "top-8 left-48",
        },
        {
          id: 3,
          name: "ARCHITECTURE.md",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-32 left-8",
          subtitle: "Hybrid Anime Intelligence & LLMOps — System Architecture & Design Decisions",
          description: [
            "📐 Polyglot Microservices Topology: Go 1.24 Edge Gateway, Rust 1.85 SIMD Vector Math, and FastAPI Serving via Kafka.",
            "⚡ Throughput Benchmarks: 50x scoring acceleration (<0.5ms p99), 3.4x higher token throughput, and 68% GPU savings.",
            "🛡️ Enterprise MLOps: Automated LoRA adapter hot-swapping, RSLoRA continuous fine-tuning, and multi-cloud KEDA autoscaling.",
            "🔗 Full Architecture Document: https://github.com/KishorKumarParoi/Hybrid-Anime-Recommender/blob/main/ARCHITECTURE.md",
          ],
        },
        {
          id: 4,
          name: "README.md",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-32 left-48",
          subtitle: "Hybrid Anime Intelligence & LLMOps — Production Runbook",
          description: [
            "📖 System Overview: Dual-tower neural collaborative filtering, Reciprocal Rank Fusion (RRF), and dynamic vLLM multi-LoRA serving.",
            "🚀 Zero-Touch Deployment: Single-command deployment script with automated model weights hydration and health checks.",
            "📊 Quantified Benchmarks: Empirical comparison across NDCG@10, Hit Rate@10, and token generation throughput.",
            "🔗 Read Full README: https://github.com/KishorKumarParoi/Hybrid-Anime-Recommender/blob/main/README.md",
          ],
        },
        {
          id: 10,
          name: "docs/images",
          icon: "/images/folder.png",
          kind: "folder",
          position: "top-56 left-8",
          children: [
            {
              id: 101,
              name: "architecture_flow.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-8 left-8",
              imageUrl: "/images/project-2.png",
            },
            {
              id: 102,
              name: "system_metrics.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-8 left-48",
              imageUrl: "/images/project-2.png",
            },
          ],
        },
        {
          id: 5,
          name: "One-Click Deploy.url",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://raw.githubusercontent.com/KishorKumarParoi/Hybrid-Anime-Recommender/main/bootstrap.sh",
          position: "top-56 left-48",
        },
      ],
    },

    // 3. AI SECURITY
    {
      id: 103,
      name: "3. Enterprise AI Security & Production RAG",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-8 left-88",
      windowPosition: "top-[10vh] left-[32vw]",
      children: [
        {
          id: 1,
          name: "Architecture & Metrics.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-8",
          subtitle: "BotShield WAF, NVIDIA NeMo Guardrails, LangGraph Cyclic Mesh",
          description: [
            "Engineered zero-trust AI defense blocking 95%+ of prompt injections and jailbreaks (benchmarked via Microsoft PyRIT 0.14.0).",
            "Stateful agentic core built in LangGraph with MemorySaver checkpoints and Portkey Gateway (<50ms semantic similarity caching, saving $8.4K/mo).",
            "Standardized tool execution via Model Context Protocol (FastMCP) with Human-in-the-Loop (HITL) approval gates.",
            "High-precision two-stage retrieval combining Jina v3 dense vectors, BM25, and local ONNX FlashRank cross-encoders (96.4% Context Precision).",
            "🚀 One-Click Deploy: curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/AI_Security_Production_App/main/bootstrap.sh | bash",
          ],
        },
        {
          id: 2,
          name: "GitHub Repository.url",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/KishorKumarParoi/AI_Security_Production_App",
          position: "top-8 left-48",
        },
        {
          id: 3,
          name: "ARCHITECTURE.md",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-32 left-8",
          subtitle: "Enterprise AI Security & Production RAG — System Architecture",
          description: [
            "📐 Defense-in-Depth Topology: WAF Ingress Inspection, NeMo Input Rails, FastMCP Tool Sandbox, and Output Sanitization.",
            "⚡ Latency & Resilience: Sub-50ms semantic cache lookups, sliding-window rate limiting, and zero-downtime failover.",
            "🛡️ Enterprise Governance: SOC 2 / ISO 27001 compliance standards, 100% audit logging, and automated red-teaming.",
            "🔗 Full Architecture Document: https://github.com/KishorKumarParoi/AI_Security_Production_App/blob/main/ARCHITECTURE.md",
          ],
        },
        {
          id: 4,
          name: "README.md",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-32 left-48",
          subtitle: "Enterprise AI Security & Production RAG — Production Runbook",
          description: [
            "📖 System Overview: Zero-trust AI gateway design, adversarial red-teaming harnesses, and semantic caching architecture.",
            "🚀 Verification Pipeline: Single-command deployment script with automated jailbreak test suites and PyRIT benchmarks.",
            "📊 Security Telemetry: Real-time attack interception analytics, token cost reduction metrics, and precision curves.",
            "🔗 Read Full README: https://github.com/KishorKumarParoi/AI_Security_Production_App/blob/main/README.md",
          ],
        },
        {
          id: 10,
          name: "docs/images",
          icon: "/images/folder.png",
          kind: "folder",
          position: "top-56 left-8",
          children: [
            {
              id: 101,
              name: "architecture_flow.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-8 left-8",
              imageUrl: "/images/project-3.png",
            },
            {
              id: 102,
              name: "system_metrics.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-8 left-48",
              imageUrl: "/images/project-3.png",
            },
          ],
        },
        {
          id: 5,
          name: "One-Click Deploy.url",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://raw.githubusercontent.com/KishorKumarParoi/AI_Security_Production_App/main/bootstrap.sh",
          position: "top-56 left-48",
        },
      ],
    },

    // 4. SMART MANUFACTURING
    {
      id: 104,
      name: "4. Smart Manufacturing Industrial AI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-36 left-8",
      windowPosition: "top-[15vh] left-[15vw]",
      children: [
        {
          id: 1,
          name: "Architecture & Metrics.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-8",
          subtitle: "Rust SIMD Edge, Go Gateway, Next.js 15 3D Twin & Autoencoders",
          description: [
            "Deployed edge anomaly detection (PyTorch Autoencoders) and defect inspection (CNN, <20ms) cutting scrap waste by $420K annually.",
            "Polyglot edge stack: Rust 1.85 SIMD pre-filter (:8082), Go cloud gateway (:8085), Next.js 15 cockpit (:3000), and PyTorch AI core (:8000).",
            "GKE multi-zone cluster with seamless fallback to host-native k3s CNCF engine for standalone execution.",
            "12-stage declarative CI/CD via Jenkins, SonarQube, Nexus 3, and ArgoCD across AWS & GCP (deploy cycles cut by 96%).",
            "🚀 One-Click Deploy: curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/smart-manufacturing/main/bootstrap.sh | bash",
          ],
        },
        {
          id: 2,
          name: "GitHub Repository.url",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/KishorKumarParoi/smart-manufacturing",
          position: "top-8 left-48",
        },
        {
          id: 3,
          name: "ARCHITECTURE.md",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-32 left-8",
          subtitle: "Smart Manufacturing Industrial AI — System Architecture",
          description: [
            "📐 Industrial Edge Topology: IIoT Sensor Stream, Rust SIMD Filter, Go Ingress Gateway, and Autoencoder Inference.",
            "⚡ Latency & Resilience: Sub-20ms defect detection, offline SQLite write-ahead caching, and zero telemetry loss.",
            "🛡️ Enterprise MLOps: 12-stage declarative CI/CD with SonarQube quality gates, Nexus 3 registry, and ArgoCD GitOps.",
            "🔗 Full Architecture Document: https://github.com/KishorKumarParoi/smart-manufacturing/blob/main/ARCHITECTURE.md",
          ],
        },
        {
          id: 4,
          name: "README.md",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-32 left-48",
          subtitle: "Smart Manufacturing Industrial AI — Production Runbook",
          description: [
            "📖 System Overview: Edge-to-cloud industrial telemetry architecture, 3D digital twin cockpit, and anomaly detection models.",
            "🚀 Standalone Bootstrap: Zero-dependency local installer running on lightweight k3s CNCF engine.",
            "📊 Production Metrics: Empirical defect reduction statistics, edge filter throughput benchmarks, and CI/CD timings.",
            "🔗 Read Full README: https://github.com/KishorKumarParoi/smart-manufacturing/blob/main/README.md",
          ],
        },
        {
          id: 10,
          name: "docs/images",
          icon: "/images/folder.png",
          kind: "folder",
          position: "top-56 left-8",
          children: [
            {
              id: 101,
              name: "architecture_flow.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-8 left-8",
              imageUrl: "/images/project-1.png",
            },
          ],
        },
        {
          id: 5,
          name: "One-Click Deploy.url",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://raw.githubusercontent.com/KishorKumarParoi/smart-manufacturing/main/bootstrap.sh",
          position: "top-56 left-48",
        },
      ],
    },

    // 5. NEXUS-AI (NEW PROJECT FROM README)
    {
      id: 105,
      name: "5. Nexus-AI Multi-Cloud Lakehouse & 5-Agent Mesh",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-36 left-48",
      windowPosition: "top-[12vh] left-[25vw]",
      children: [
        {
          id: 1,
          name: "Architecture & Metrics.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-8",
          subtitle: "Multi-Cloud Lakehouse (DuckDB <120ms), 5-Agent LangGraph Mesh",
          description: [
            "Constructed 3-tier Medallion Lakehouse (Bronze -> Silver -> Gold Marts in DuckDB) compressing query latencies from 4.5s to <120ms.",
            "Architected security-first 5-agent mesh (Data NL2SQL, Business Analyst, MLOps, OWASP, Voice) over LangGraph, accelerating analytics by 82%.",
            "Crafted Go 1.22 API Gateway with JWT edge authentication and token-bucket rate limiting sustained 12K req/s.",
            "Codified multi-cloud infrastructure via Terraform across AWS (EKS, S3), GCP (GKE, BigQuery), and Azure (AKS, Synapse).",
            "🚀 One-Click Deploy: curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/Nexus_AI/main/bootstrap.sh | bash",
          ],
        },
        {
          id: 2,
          name: "GitHub Repository.url",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/KishorKumarParoi/Nexus_AI",
          position: "top-8 left-48",
        },
        {
          id: 3,
          name: "ARCHITECTURE.md",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-32 left-8",
          subtitle: "Nexus-AI Multi-Cloud Lakehouse — System Architecture",
          description: [
            "📐 Multi-Cloud Medallion Architecture: DuckDB fast analytical marts, multi-cloud S3/GCS sync, and LangGraph agent coordinator.",
            "⚡ Performance Benchmarks: Sub-120ms SQL query execution, 12K req/s Go gateway throughput, and zero memory leaks.",
            "🛡️ Enterprise Security: Attribute-based access control (ABAC), row-level security (RLS), and OWASP firewall agent.",
            "🔗 Full Architecture Document: https://github.com/KishorKumarParoi/Nexus_AI/blob/main/ARCHITECTURE.md",
          ],
        },
        {
          id: 4,
          name: "README.md",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-32 left-48",
          subtitle: "Nexus-AI Multi-Cloud Lakehouse — Production Runbook",
          description: [
            "📖 System Overview: Automated medallion transformations, agentic NL2SQL query engine, and multi-cloud Terraform pipelines.",
            "🚀 Deployment Guide: Zero-touch single command deployment across AWS, GCP, and Azure environments.",
            "📊 Analytics Benchmarks: Query latency compression curves and agent task completion rate metrics.",
            "🔗 Read Full README: https://github.com/KishorKumarParoi/Nexus_AI/blob/main/README.md",
          ],
        },
        {
          id: 10,
          name: "docs/images",
          icon: "/images/folder.png",
          kind: "folder",
          position: "top-56 left-8",
          children: [
            {
              id: 101,
              name: "architecture_flow.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-8 left-8",
              imageUrl: "/images/project-2.png",
            },
          ],
        },
        {
          id: 5,
          name: "One-Click Deploy.url",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://raw.githubusercontent.com/KishorKumarParoi/Nexus_AI/main/bootstrap.sh",
          position: "top-56 left-48",
        },
      ],
    },

    // 6. AUTONOMOUS CHATBOT (NEW PROJECT FROM README)
    {
      id: 106,
      name: "6. Autonomous AI Chatbot & HITL Financial Gating",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-36 left-88",
      windowPosition: "top-[15vh] left-[35vw]",
      children: [
        {
          id: 1,
          name: "Architecture & Metrics.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-8",
          subtitle: "LangGraph Cyclic State Machine, FastMCP & Financial Approval Gating",
          description: [
            "Built enterprise conversational agent using LangGraph cyclic state machines with PostgreSQL checkpointer for sub-50ms session recovery.",
            "Standardized isolated tool execution with Model Context Protocol (FastMCP) with Human-in-the-Loop (HITL) gates on financial refunds.",
            "Pioneered BotShield WAF middleware featuring honeypot traps and scanner fingerprint dropping (intercepted 99.4% of probes).",
            "Two-stage hybrid retrieval with Qdrant dense vectors, BM25 sparse keywords, and real-time SSE token streaming.",
            "🚀 One-Click Deploy: curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/Advanced_AI_Chatbot_Project/main/bootstrap.sh | bash",
          ],
        },
        {
          id: 2,
          name: "GitHub Repository.url",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/KishorKumarParoi/Advanced_AI_Chatbot_Project",
          position: "top-8 left-48",
        },
        {
          id: 3,
          name: "ARCHITECTURE.md",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-32 left-8",
          subtitle: "Autonomous AI Chatbot — System Architecture",
          description: [
            "📐 Agentic State Machine: LangGraph Cyclic Graph, PostgreSQL thread checkpoints, dynamic rollback, and FastMCP tools.",
            "⚡ Latency & Caching: Sub-12ms Redis semantic cache hits, SSE token streaming, and sub-50ms session recovery.",
            "🛡️ Enterprise HITL Gating: Cryptographic confirmation workflows for high-value financial actions.",
            "🔗 Full Architecture Document: https://github.com/KishorKumarParoi/Advanced_AI_Chatbot_Project/blob/main/ARCHITECTURE.md",
          ],
        },
        {
          id: 4,
          name: "README.md",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-32 left-48",
          subtitle: "Autonomous AI Chatbot — Production Runbook",
          description: [
            "📖 System Overview: Full-stack conversational AI agent with enterprise security guardrails and financial transaction safety.",
            "🚀 Quick Deploy Runbook: Single command setup with docker-compose, PostgreSQL, Qdrant, and Redis.",
            "📊 Accuracy & ROI: 94.8% response relevance and $3.2K/mo token cost reduction metrics.",
            "🔗 Read Full README: https://github.com/KishorKumarParoi/Advanced_AI_Chatbot_Project/blob/main/README.md",
          ],
        },
        {
          id: 10,
          name: "docs/images",
          icon: "/images/folder.png",
          kind: "folder",
          position: "top-56 left-8",
          children: [
            {
              id: 101,
              name: "architecture_flow.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-8 left-8",
              imageUrl: "/images/project-3.png",
            },
          ],
        },
        {
          id: 5,
          name: "One-Click Deploy.url",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://raw.githubusercontent.com/KishorKumarParoi/Advanced_AI_Chatbot_Project/main/bootstrap.sh",
          position: "top-56 left-48",
        },
      ],
    },

    // 7. RUST GIT ENGINE (NEW PROJECT FROM README)
    {
      id: 107,
      name: "7. Core Systems Engineering: Rust Git Engine & Shell",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-64 left-8",
      windowPosition: "top-[10vh] left-[20vw]",
      children: [
        {
          id: 1,
          name: "Architecture & Metrics.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-8",
          subtitle: "Bare-Metal Rust 1.85, SIMD Zlib, Zero-Copy I/O & POSIX Shell",
          description: [
            "Crafted Git internals in Rust 1.85 (SHA-1 graph, streaming zlib with SIMD, delta packfiles) matching C Git performance with 100% memory safety.",
            "Built POSIX shell with async signal multiplexing, fork/exec pipelines, and I/O redirection clocked at sub-microsecond latency.",
            "Achieved 73% lower peak heap allocation compared to standard shell runtimes.",
            "🚀 One-Click Deploy: curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/codecrafters-git-rust/main/bootstrap.sh | bash",
          ],
        },
        {
          id: 2,
          name: "GitHub Repository.url",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/KishorKumarParoi/codecrafters-git-rust",
          position: "top-8 left-48",
        },
        {
          id: 3,
          name: "ARCHITECTURE.md",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-32 left-8",
          subtitle: "Rust Git Engine & POSIX Shell — System Architecture",
          description: [
            "📐 Bare-Metal Architecture: Memory-mapped SHA-1 object graph, streaming SIMD zlib decompression, and POSIX process multiplexer.",
            "⚡ Micro-Benchmarks: Sub-microsecond pipeline latency, zero-copy memory mapping, and compile-time memory safety.",
            "🛡️ Production Safety: 100% safe Rust abstraction layers preventing buffer overflows and use-after-free vulnerabilities.",
            "🔗 Full Architecture Document: https://github.com/KishorKumarParoi/codecrafters-git-rust/blob/main/ARCHITECTURE.md",
          ],
        },
        {
          id: 4,
          name: "README.md",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-32 left-48",
          subtitle: "Rust Git Engine & POSIX Shell — Production Runbook",
          description: [
            "📖 System Overview: Deep dive into Git internal object models (blobs, trees, commits, tags) and UNIX process orchestration.",
            "🚀 Compilation & Test Suite: Cargo build instructions and comprehensive integration test coverage.",
            "📊 Performance Comparison: Wall-clock CPU timing benchmarks against GNU coreutils and C Git.",
            "🔗 Read Full README: https://github.com/KishorKumarParoi/codecrafters-git-rust/blob/main/README.md",
          ],
        },
        {
          id: 10,
          name: "docs/images",
          icon: "/images/folder.png",
          kind: "folder",
          position: "top-56 left-8",
          children: [
            {
              id: 101,
              name: "architecture_flow.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-8 left-8",
              imageUrl: "/images/project-1.png",
            },
          ],
        },
        {
          id: 5,
          name: "One-Click Deploy.url",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://raw.githubusercontent.com/KishorKumarParoi/codecrafters-git-rust/main/bootstrap.sh",
          position: "top-56 left-48",
        },
      ],
    },

    // 8. KOOM-AI (VIDEO PLATFORM)
    {
      id: 108,
      name: "8. KoomAI — Autonomous Video Recording Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-64 left-48",
      windowPosition: "top-[15vh] left-[28vw]",
      children: [
        {
          id: 1,
          name: "Architecture & Metrics.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-8",
          subtitle: "WebRTC (<120ms), Electron Client, MV3 Chrome Extension, Next.js 16",
          description: [
            "Devised real-time WebRTC media pipeline (<120ms glass-to-glass latency) with adaptive bitrate streaming (50K+ active video minutes).",
            "Crafted Electron desktop client leveraging native OS-level IPC audio/display capture and hardware encoding (45% lower idle CPU).",
            "Developed Manifest V3 Chrome Extension with offscreen documents for synchronized tab/mic mixing (10K+ user recordings).",
            "Built Next.js 16 App Router cockpit with AWS S3 multipart uploads cutting video storage expenses by 62%.",
            "Integrated Stripe billing engine generating $24K MRR in pilot enterprise adoption.",
            "🚀 Live Platform: https://koom-ai.vercel.app",
          ],
        },
        {
          id: 2,
          name: "GitHub Repository.url",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/KishorKumarParoi/Koom-AI",
          position: "top-8 left-48",
        },
        {
          id: 3,
          name: "ARCHITECTURE.md",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-32 left-8",
          subtitle: "KoomAI Video Platform — System Architecture",
          description: [
            "📐 Distributed Media Topology: WebRTC SFU Mesh, Electron IPC Bridge, Express Chunk Processor, and S3 multipart pipeline.",
            "⚡ Low-Latency Guarantees: Sub-120ms glass-to-glass latency, 60 FPS 1080p video, and 0% packet stutter.",
            "🛡️ Enterprise Workspace Security: Stripe webhook idempotency, AES-256 S3 bucket encryption, and multi-tenant isolation.",
            "🔗 Full Architecture Document: https://github.com/KishorKumarParoi/Koom-AI/blob/main/ARCHITECTURE.md",
          ],
        },
        {
          id: 4,
          name: "README.md",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-32 left-48",
          subtitle: "KoomAI Video Platform — Production Runbook",
          description: [
            "📖 System Overview: Modern screen-recording architecture, AI transcription pipeline, and edge delivery topology.",
            "🚀 Live Deployment: Global edge deployment on Vercel with CloudFront CDN acceleration.",
            "📊 Commercial Benchmarks: $24K MRR in pilot enterprise adoption and 58% faster First Contentful Paint.",
            "🔗 Read Full README: https://github.com/KishorKumarParoi/Koom-AI/blob/main/README.md",
          ],
        },
        {
          id: 10,
          name: "docs/images",
          icon: "/images/folder.png",
          kind: "folder",
          position: "top-56 left-8",
          children: [
            {
              id: 101,
              name: "architecture_flow.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-8 left-8",
              imageUrl: "/images/project-2.png",
            },
          ],
        },
        {
          id: 5,
          name: "Live Demo.url",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://koom-ai.vercel.app/",
          position: "top-56 left-48",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  path: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-8 left-8",
      imageUrl: "/images/12.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-8 left-40",
      imageUrl: "/images/7.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-32 left-8",
      imageUrl: "/images/15.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-32 left-40",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/17.jpg",
      description: [
        "Hey! I’m Kishor 👋, Full Stack Data/Software Engineer + DevOps + AI/ML.I Love building Product, Scaling, System Design, Solving Complex Problems, Open Source and Competitive Programming.I enjoy building sleek, interactive websites that actually work well.",
        "I specialize in System Design, DevOps, AI/ML,latest Frontend and Backend Technologies and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  path: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      position: "top-8 left-8",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  path: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-8 left-8",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-8 left-48",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

const GALLERY_LOCATION = {
  id: 5,
  type: "gallery",
  path: "gallery",
  name: "Gallery",
  icon: "/icons/gicon1.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "1.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-8 left-8",
      imageUrl: "/images/1.jpeg",
    },
    {
      id: 2,
      name: "2.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-8 left-40", // closer
      imageUrl: "/images/2.jpeg",
    },
    {
      id: 3,
      name: "3.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-8 left-72", // closer
      imageUrl: "/images/3.jpeg",
    },
    {
      id: 4,
      name: "4.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-8 left-[26rem]", // closer than 30rem
      imageUrl: "/images/4.jpeg",
    },
    {
      id: 5,
      name: "5.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-36 left-8", // row closer (from top-40)
      imageUrl: "/images/5.jpeg",
    },
    {
      id: 6,
      name: "6.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-36 left-40", // closer
      imageUrl: "/images/6.jpeg",
    },
    {
      id: 7,
      name: "7.jpg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-36 left-72", // closer
      imageUrl: "/images/7.jpg",
    },
    {
      id: 8,
      name: "8.jpg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-36 left-[26rem]", // closer
      imageUrl: "/images/8.jpg",
    },
    {
      id: 9,
      name: "9.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-64 left-8", // closer (from top-72)
      imageUrl: "/images/9.jpeg",
    },
    {
      id: 10,
      name: "10.jpeg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-64 left-40", // closer
      imageUrl: "/images/10.jpeg",
    },
  ],
};

// Optional: increase spacing inside project folders too
WORK_LOCATION.children[0].children[1].position = "top-8 left-48";
WORK_LOCATION.children[0].children[3].position = "top-32 left-48";
WORK_LOCATION.children[1].children[1].position = "top-8 left-48";
WORK_LOCATION.children[1].children[3].position = "top-32 left-48";
WORK_LOCATION.children[2].children[1].position = "top-8 left-48";
WORK_LOCATION.children[2].children[3].position = "top-32 left-48";

ABOUT_LOCATION.children[1].position = "top-8 left-48";
ABOUT_LOCATION.children[3].position = "top-32 left-48";

TRASH_LOCATION.children[1].position = "top-8 left-48";

// Update locations export:
export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
  gallery: GALLERY_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
