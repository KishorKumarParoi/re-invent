import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BentoCard, { BentoTilt } from './BentoCard'
import ProjectModal from './ProjectModal'
import ProjectRobot from './ProjectRobot'
import { TiLocationArrow } from 'react-icons/ti'
import { Layers, Terminal, Sparkles, ExternalLink, ArrowRight, CheckCircle2, Copy, Check, Cpu, ShieldAlert, Database, Video, Award, Radio, Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const FEATURE_PROJECTS = {
    zomato: {
        id: 'zomato',
        title: '1. Zomato AI Lakehouse & Multimodal Dispute Platform',
        category: 'Medallion Lakehouse & Computer Vision',
        sla: '35M+ Records • <5ms Feast Store • $18K/mo Savings',
        description: 'Multi-cloud enterprise Lakehouse on Snowflake and PySpark Delta Lake ingesting 35M+ orders with dbt Core SCD-2, Feast real-time feature store over Redis, and multimodal CV dispute arbitration.',
        highlights: [
            'Architected enterprise Lakehouse on Snowflake & PySpark Delta Lake processing 35M+ orders (2.3 GB) with dbt Core SCD-2; curtailed warehouse compute by 42% ($18K/mo savings).',
            'Devised real-time feature streaming via Airflow, Debezium CDC WAL, and Feast Store over Redis; lowered serving latency to <5ms, unlocking +$340K quarterly revenue lift.',
            'Operationalized multimodal CV dispute arbitration (dHash anti-fraud, receipt OCR) with G-Eval CoT; neutralized fraudulent claims by 68%, safeguarding $1.2M in annual partner margins.',
            'Deployed decentralized CQRS and Transactional Outbox pattern with Apache Kafka event streams, Great Expectations validation, and AWS S3 Glacier archiving ($7.8K/mo saved).',
            'Mechanized real-time Presidio PII redaction and NeMo Guardrails across review streams; guaranteed 100% GDPR/DPDP data privacy compliance with zero PII leaks into gold layer.',
            'Instituted continuous self-healing data observability via Monte Carlo principles and Prometheus alerts; eradicated silent schema corruption across 14 ingestion channels ($450K protected).',
            'Formulated resilient dead-letter queue (DLQ) automated replay semantics with AWS SQS & Kafka; recovered $210K in transient webhook timeouts with zero order loss.',
        ],
        techStack: ['Snowflake', 'PySpark Delta Lake', 'dbt Core SCD-2', 'Feast Feature Store', 'Apache Airflow', 'Kafka Outbox', 'Computer Vision'],
        repoUrl: 'https://github.com/KishorKumarParoi/zomato-analysis',
        archUrl: 'https://github.com/KishorKumarParoi/zomato-analysis/blob/main/ARCHITECTURE.md',
        docsImagesUrl: 'https://github.com/KishorKumarParoi/zomato-analysis/tree/main/docs/images',
        deployCommand: 'curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/zomato-analysis/main/bootstrap.sh | bash',
    },
    hybrid: {
        id: 'hybrid',
        title: '2. Hybrid Anime Intelligence & Continuous LLMOps Platform',
        category: 'Polyglot LLMOps Mesh',
        sla: '<0.5ms SIMD Scoring • 3.4x Throughput • 68% GPU Cut',
        description: 'Polyglot microservice mesh: Rust 1.85 SIMD vector scoring (<0.5ms, 50x speedup), Go 1.24 gateway, and FastAPI AI core over Kafka with dynamic vLLM Multi-LoRA serving.',
        highlights: [
            'Polyglot mesh: Go 1.24 auth, Rust 1.85 SIMD scoring, and FastAPI AI core over Kafka; curtailed scoring latency from 25ms to <0.5ms (50x speedup), saving 64% CPU cost.',
            'Pioneered hybrid retrieval synthesizing Dual-Tower NCF, ChromaDB HNSW, and BM25 via Reciprocal Rank Fusion (NDCG@10 = 0.94); catalyzed a 28% lift in user session retention.',
            'Served adapters via vLLM Multi-LoRA dynamic multiplexing on 1x GPU with RSLoRA flywheel; curtailed GPU spend by 68% while elevating token throughput to 3.4x.',
            'Codified headless Kubeflow v2 & MLflow continuous training pipeline with DVC data versioning, NeFTune regularization, and stringent model quality gating.',
            'Orchestrated multi-cloud GitOps continuous delivery via ArgoCD across AWS EKS, GCP GKE, and Azure AKS; empowered KEDA autoscaling from 1 to 24 pods in <45s under 15K req/s.',
            'Implemented real-time embedding concept drift observability with Evidently AI & Prometheus; detected semantic divergence within 90 seconds, triggering automated adapter hot-swap.',
        ],
        techStack: ['Rust 1.85 SIMD', 'Go 1.24', 'Python FastAPI', 'vLLM Multi-LoRA', 'Apache Kafka', 'ChromaDB', 'ArgoCD GitOps'],
        repoUrl: 'https://github.com/KishorKumarParoi/Hybrid-Anime-Recommender',
        archUrl: 'https://github.com/KishorKumarParoi/Hybrid-Anime-Recommender/blob/main/ARCHITECTURE.md',
        docsImagesUrl: 'https://github.com/KishorKumarParoi/Hybrid-Anime-Recommender/tree/main/docs/images',
        deployCommand: 'curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/Hybrid-Anime-Recommender/main/bootstrap.sh | bash',
    },
    security: {
        id: 'security',
        title: '3. Enterprise AI Security & Production Agentic RAG Platform',
        category: 'Zero-Trust AI Defense & FastMCP',
        sla: '95%+ Injection Block • <50ms Semantic Cache',
        description: 'Defense-in-depth AI Security Gateway built with BotShield WAF, NVIDIA NeMo Guardrails, LangGraph cyclic state machines, and FastMCP tool execution with strict Human-in-the-Loop financial gates.',
        highlights: [
            'Built zero-trust defense with BotShield WAF and NVIDIA NeMo Guardrails; blocked 95%+ of prompt injections & jailbreaks (benchmarked via Microsoft PyRIT 0.14.0).',
            'Formulated stateful agentic core in LangGraph with MemorySaver checkpoints and Portkey Gateway; saved $8.4K/month (42%) via <50ms semantic similarity caching.',
            'Standardized tool execution via FastMCP with Human-in-the-Loop (HITL) gates and Logfire/LangSmith tracing; guaranteed 100% audit compliance with zero unauthorized tool runs.',
            'Architected hierarchical multi-agent supervisor coordinating 5 specialized sub-agents with cyclic retry loops and state rollbacks; boosted multi-hop reasoning accuracy by 37%.',
            'Instituted high-precision two-stage retrieval combining Jina v3 1024-dim dense vectors, BM25 sparse search, and local ONNX FlashRank cross-encoders (96.4% Context Precision).',
            'Constructed automated red-teaming CI/CD evaluation harness executing 500+ adversarial prompt payloads per release via PyRIT; intercepted 100% of OWASP LLM Top 10 vulnerabilities.',
        ],
        techStack: ['NVIDIA NeMo Guardrails', 'LangGraph', 'FastMCP', 'BotShield WAF', 'Redis Semantic Cache', 'PyRIT RedTeaming'],
        repoUrl: 'https://github.com/KishorKumarParoi/AI_Security_Production_App',
        archUrl: 'https://github.com/KishorKumarParoi/AI_Security_Production_App/blob/main/ARCHITECTURE.md',
        docsImagesUrl: 'https://github.com/KishorKumarParoi/AI_Security_Production_App/tree/main/docs/images',
        deployCommand: 'curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/AI_Security_Production_App/main/bootstrap.sh | bash',
    },
    smart: {
        id: 'smart',
        title: '4. Smart Manufacturing Industrial AI & Multi-Cloud MLOps Platform',
        category: 'Edge & IIoT AI Platform',
        sla: '<20ms Anomaly • 96% Deploy Cut • $420K Saved',
        description: 'Edge-to-cloud industrial intelligence with Rust 1.85 SIMD edge vibration pre-filtering, Go cloud gateway, Next.js 15 3D digital twin cockpit, and PyTorch autoencoder anomaly detection.',
        highlights: [
            'Deployed IoT anomaly detection (PyTorch Autoencoders) and defect inspection (CNN, <20ms); mitigated part escape defect rate by 31%, saving $420K annually in scrap waste.',
            'Built polyglot edge architecture: Rust 1.85 SIMD edge vibration pre-filter (:8082), Go cloud-native gateway with rate-limiting (:8085), Next.js 15 cockpit (:3000), and PyTorch AI core.',
            'Formulated resilient Kubernetes: GKE multi-zone cluster with seamless fallback to host-native K3s CNCF engine for standalone execution on EC2.',
            'Orchestrated 12-stage declarative CI/CD via Jenkins, SonarQube, Nexus 3, and ArgoCD GitOps across AWS & GCP; curtailed deployment cycles by 96% (4h to 8m).',
            'Pioneered single-command zero-touch cloud bootstrap (curl | bash) with deterministic $0.00 teardown (clear.sh --force) coupled with EFK Stack and Prometheus/Grafana (:3001).',
            'Sustained edge offline resilience via local SQLite write-ahead caching and asynchronous MQTT broker sync; averted telemetry loss during network disconnects across 120+ sensors.',
        ],
        techStack: ['Rust 1.85 SIMD', 'Go Gateway', 'PyTorch Autoencoders', 'GKE / K3s', 'ArgoCD GitOps', 'MQTT Broker'],
        repoUrl: 'https://github.com/KishorKumarParoi/smart-manufacturing',
        archUrl: 'https://github.com/KishorKumarParoi/smart-manufacturing/blob/main/ARCHITECTURE.md',
        docsImagesUrl: 'https://github.com/KishorKumarParoi/smart-manufacturing/tree/main/docs/images',
        deployCommand: 'curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/smart-manufacturing/main/bootstrap.sh | bash',
    },
    nexus: {
        id: 'nexus',
        title: '5. Nexus-AI: Enterprise Multi-Cloud Lakehouse & Autonomous Agent Mesh',
        category: 'Multi-Cloud Lakehouse & Agent Mesh',
        sla: '<120ms DuckDB • 5-Agent Mesh • 12K req/s',
        description: 'Enterprise multi-cloud Lakehouse (Bronze-Silver-Gold in DuckDB <120ms) coordinated by a 5-agent LangGraph mesh (Data NL2SQL, Business Analyst, MLOps, OWASP, Voice) with Go 1.22 API Gateway.',
        highlights: [
            'Architected security-first 5-agent mesh (Data NL2SQL, Business Analyst, MLOps Supervisor, OWASP Firewall, Voice Alerts) over LangGraph; accelerated analytics turnaround by 82%.',
            'Constructed 3-tier Medallion Lakehouse (Bronze Parquet → Silver 32-point DQ validation → Gold Star Schema marts) with DuckDB; compressed query latencies from 4.5s to <120ms.',
            'Crafted Go 1.22 API Gateway with JWT edge authentication and token-bucket rate limiting paired with Express BFF and Next.js 16 glassmorphic cockpit; sustained 12K req/s.',
            'Codified multi-cloud infrastructure via Terraform across AWS (EKS, S3, Glue), GCP (GKE, BigQuery), and Azure (AKS, Synapse); compressed provisioning time by 90%.',
            'Governed attribute-based access control (ABAC) and row-level security (RLS) across Medallion Delta tables; enforced strict multi-tenant data isolation across 40+ business units.',
        ],
        techStack: ['LangGraph Multi-Agent', 'DuckDB Lakehouse', 'Go 1.22 Gateway', 'Terraform Multi-Cloud', 'Next.js 16', 'Docker'],
        repoUrl: 'https://github.com/KishorKumarParoi/Nexus_AI',
        archUrl: 'https://github.com/KishorKumarParoi/Nexus_AI/blob/main/ARCHITECTURE.md',
        docsImagesUrl: 'https://github.com/KishorKumarParoi/Nexus_AI/tree/main/docs/images',
        deployCommand: 'curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/Nexus_AI/main/bootstrap.sh | bash',
    },
    chatbot: {
        id: 'chatbot',
        title: '6. Advanced AI Chatbot: Enterprise Autonomous Agent & HITL Platform',
        category: 'Autonomous Conversational Agent',
        sla: 'Sub-50ms Recovery • 99.4% Defense • $3.2K/mo Saved',
        description: 'Enterprise conversational agent engineered with LangGraph cyclic state machines, PostgreSQL checkpointer, FastMCP tool execution with strict Human-in-the-Loop financial approval gates, and BotShield WAF.',
        highlights: [
            'Built enterprise conversational agent using LangGraph cyclic state machines with PostgreSQL checkpointer; enabled fault-tolerant persistence, dynamic rollbacks, and sub-50ms session recovery.',
            'Standardized isolated tool execution using Model Context Protocol (FastMCP) with strict Human-in-the-Loop (HITL) approval gates on financial actions (> $50 refunds/cancellations).',
            'Pioneered BotShield WAF middleware featuring honeypot traps (/.env, /wp-admin), scanner fingerprint dropping, and sliding-window rate limiting; intercepted 99.4% of adversarial probes.',
            'Operationalized two-stage hybrid retrieval with Qdrant (BGE-Large dense vectors) and BM25 sparse keyword matching with real-time SSE token streaming; elevated relevance to 94.8%.',
            'Architected semantic intent caching layer with Redis & Cosine similarity gating (<0.15 threshold); served 38% of repetitive customer intents in <12ms, saving $3.2K/month.',
            'Devised adaptive conversational memory with sliding-window token compaction & vector summary checkpointing; diminished long-context token footprints by 44% across 35+ turn dialogs.',
        ],
        techStack: ['LangGraph Cyclic', 'FastMCP', 'HITL Gating', 'Qdrant Vector DB', 'PostgreSQL Checkpoint', 'BotShield WAF'],
        repoUrl: 'https://github.com/KishorKumarParoi/Advanced_AI_Chatbot_Project',
        archUrl: 'https://github.com/KishorKumarParoi/Advanced_AI_Chatbot_Project/blob/main/ARCHITECTURE.md',
        docsImagesUrl: 'https://github.com/KishorKumarParoi/Advanced_AI_Chatbot_Project/tree/main/docs/images',
        deployCommand: 'curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/Advanced_AI_Chatbot_Project/main/bootstrap.sh | bash',
    },
    dataagent: {
        id: 'dataagent',
        title: '7. Data Agent: Enterprise Multi-Agent Business Intelligence & SQL System',
        category: 'Autonomous SQL & BI System',
        sla: '96.2% Routing • 89% Self-Healing • Zero Injections',
        description: 'Hierarchical LangGraph multi-agent mesh with self-reflective SQL security judge, PostgreSQL dynamic introspection, and autonomous ReAct file ETL transformation agents.',
        highlights: [
            'Architected a LangGraph supervisor router classifying business queries into specialized SQL and ETL analyst subgraphs; garnered 96.2% routing accuracy across operational requests.',
            'Instituted dynamic PostgreSQL schema introspection with an independent LLM security judge; sanitized generated SQL and intercepted 100% of destructive DDL/DML injection attacks.',
            'Built autonomous ReAct tool-calling agent for file extraction, pandas data transformation, and sandboxed python execution; compressed ad-hoc data pipeline development time by 75%.',
            'Integrated self-healing SQL execution with automatic syntax retry & schema reflection; programmatically corrected 89% of initial query execution errors without human intervention.',
            'Orchestrated multi-dialect SQL transpilations supporting PostgreSQL, Snowflake, and BigQuery with proactive EXPLAIN cost estimation; prevented runaway analytical queries.',
        ],
        techStack: ['LangGraph Supervisor', 'ReAct Tool-Calling', 'Self-Healing SQL', 'PostgreSQL Introspection', 'DuckDB', 'Python'],
        repoUrl: 'https://github.com/KishorKumarParoi/Data-Agent',
        archUrl: 'https://github.com/KishorKumarParoi/Data-Agent/blob/main/ARCHITECTURE.md',
        docsImagesUrl: 'https://github.com/KishorKumarParoi/Data-Agent/tree/main/docs/images',
        deployCommand: 'curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/Data-Agent/main/bootstrap.sh | bash',
    },
    azure_etl: {
        id: 'azure_etl',
        title: '8. Advanced Network Security Medallion Lakehouse & Distributed ML Platform',
        category: 'Azure Databricks & Synapse CETAS',
        sla: '1.4B Records • 6.2x Faster • Sub-4ms ML ONNX',
        description: 'Enterprise Lakehouse ingesting security telemetry via Azure Data Factory (ADF v2), Databricks Apache Spark, MongoDB Atlas cross-joining, and Synapse Analytics Serverless CETAS external tables.',
        highlights: [
            'Architected enterprise Lakehouse: orchestrated batch extraction via Azure Data Factory (ADF v2) dynamic lookup and parallel ForEach loops, landing raw logs into ADLS Gen2 Bronze layer.',
            'Conducted large-scale ETL in Azure Databricks (Apache Spark) with Azure AD OAuth 2.0 Client Credentials, cross-joining real-time operational metadata from MongoDB Atlas.',
            'Materialized analytical serving layer in Azure Synapse Analytics Serverless SQL using Managed Identity scoped credentials and CETAS for instant Power BI/Fabric reporting.',
            'Built data validation engine with schema drift traps, KNN imputation + RobustScaler, and multi-model benchmark (XGBoost, CatBoost, Random Forest delivering 98.4% detection accuracy).',
            'Containerized sub-4ms FastAPI ONNX inference serving with single-command zero-touch bootstrapper (curl | bash) and deterministic $0.00 teardown (clear.sh); mitigated p99 latency by 11.8x.',
            'Implemented dynamic partition pruning and Z-Order clustering on ADLS Gen2 Delta Parquet files; expedited complex analytical join queries by 6.2x across 1.4B security log records.',
        ],
        techStack: ['Azure Data Factory v2', 'Azure Databricks Spark', 'ADLS Gen2 Bronze-Silver-Gold', 'Azure Synapse CETAS', 'MongoDB Atlas', 'ONNX Runtime'],
        repoUrl: 'https://github.com/KishorKumarParoi/Advanced_ETL_Project',
        archUrl: 'https://github.com/KishorKumarParoi/Advanced_ETL_Project/blob/main/ARCHITECTURE.md',
        docsImagesUrl: 'https://github.com/KishorKumarParoi/Advanced_ETL_Project/tree/main/docs/images',
        deployCommand: 'curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/Advanced_ETL_Project/main/bootstrap.sh | bash',
    },
    sagemaker: {
        id: 'sagemaker',
        title: '9. AWS SageMaker End-to-End MLOps Pipeline & Governance Platform',
        category: 'AWS Cloud MLOps & Spot Training',
        sla: '70% Cost Reduction • 2,500 req/s • NIST AI RMF',
        description: 'Production SageMaker DAG Pipeline (ProcessingStep → TrainingStep → ConditionStep → ModelStep) with Managed Spot Training, Model Registry gating, and real-time inference drift telemetry.',
        highlights: [
            'Designed SageMaker DAG Pipeline with AWS Managed Spot Training, curtailing model training compute costs by 70%.',
            'Instituted programmatic quality evaluation gating (>= 85% accuracy) for promotion into SageMaker Model Registry, deploying to real-time & serverless endpoints with standard inference contracts.',
            'Configured DataCaptureConfig streaming 100% of live inference payloads to Amazon S3 for baseline statistical drift detection, anomaly alerting, and retraining triggers.',
            'Devised multi-model endpoint deployments with autoscaling policies (target tracking at 70% CPU/GPU); sustained 2,500 req/s with zero cold-start timeouts under spiky production loads.',
            'Hardened inference endpoints with AWS KMS customer-managed keys (CMK) envelope encryption and TLS 1.3 mutual auth; achieved complete compliance with NIST AI RMF governance mandates.',
        ],
        techStack: ['AWS SageMaker Pipelines DAG', 'Managed Spot Training', 'SageMaker Model Registry', 'S3 DataCapture', 'AWS KMS CMK', 'FastAPI'],
        repoUrl: 'https://github.com/KishorKumarParoi/Aws-Sagemaker',
        archUrl: 'https://github.com/KishorKumarParoi/Aws-Sagemaker/blob/main/ARCHITECTURE.md',
        docsImagesUrl: 'https://github.com/KishorKumarParoi/Aws-Sagemaker/tree/main/docs/images',
        deployCommand: 'curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/Aws-Sagemaker/main/bootstrap.sh | bash',
    },
    realtime_mlops: {
        id: 'realtime_mlops',
        title: '10. Cloud-Native Real-Time MLOps: KServe, AWS ECS Fargate & Kubernetes',
        category: 'Serverless MLOps & Autoscaling',
        sla: 'Scale-to-Zero • 65% Idle Savings • 90/10 Canary',
        description: 'Serverless model serving on Kubernetes using KServe v1beta1 InferenceService with dynamic scale-to-zero autoscaling, containerized microservices on AWS ECS Fargate, and modular Terraform IaC.',
        highlights: [
            'Deployed serverless model inference using KServe v1beta1 InferenceService on Kubernetes backed by Amazon S3 model storage; facilitated dynamic scale-to-zero autoscaling, saving 65% idle compute spend.',
            'Architected containerized microservices orchestration on AWS ECS on Fargate with Application Load Balancers and modular Terraform IaC; accelerated infrastructure provisioning by 80%.',
            'Hardened end-to-end container security with Trivy CVE scanning and AWS KMS envelope encryption; ensured 100% programmatic CI/CD gating with zero critical vulnerability deployments.',
            'Configured automated canary traffic routing (90/10 split) via Envoy sidecars with Prometheus-driven automatic rollback on p99 latency regressions (>25ms).',
        ],
        techStack: ['KServe v1beta1', 'Kubernetes', 'AWS ECS on Fargate', 'Terraform Modular IaC', 'Envoy Canary 90/10', 'Trivy CVE Scanning'],
        repoUrl: 'https://github.com/KishorKumarParoi/realtime-mlops',
        archUrl: 'https://github.com/KishorKumarParoi/realtime-mlops/blob/main/ARCHITECTURE.md',
        docsImagesUrl: 'https://github.com/KishorKumarParoi/realtime-mlops/tree/main/docs/images',
        deployCommand: 'curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/realtime-mlops/main/bootstrap.sh | bash',
    },
    rustgit: {
        id: 'rustgit',
        title: '11. Core Systems Engineering: Bare-Metal Rust Git Engine & POSIX Terminal Shell',
        category: 'Bare-Metal Systems Programming',
        sla: 'Sub-Microsecond Latency • Zero-Copy I/O • 100% Safe',
        description: 'Bare-metal Git internals and async POSIX terminal shell implemented in Rust 1.85: SHA-1 object graph, streaming SIMD zlib decompression, delta packfiles, and signal-multiplexed process execution.',
        highlights: [
            'Crafted Git internals in Rust 1.85 (SHA-1 object graph, streaming zlib decompression with SIMD, delta packfiles); matched C Git performance within 3% with 100% memory safety.',
            'Built POSIX shell with async signal multiplexing, fork/exec pipelines, and I/O redirection; clocked sub-microsecond execution latency with 73% lower peak heap allocation.',
        ],
        techStack: ['Rust 1.85', 'Bare-Metal Git Internals', 'SIMD Decompression', 'Async Signals', 'POSIX Pipelines', 'Memory Safety'],
        repoUrl: 'https://github.com/KishorKumarParoi/codecrafters-git-rust',
        archUrl: 'https://github.com/KishorKumarParoi/codecrafters-git-rust/blob/main/ARCHITECTURE.md',
        docsImagesUrl: 'https://github.com/KishorKumarParoi/codecrafters-git-rust/tree/main/docs/images',
        deployCommand: 'curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/codecrafters-git-rust/main/bootstrap.sh | bash',
    },
    koom: {
        id: 'koom',
        title: '12. KOOM-AI: Autonomous Video Recording & Intelligence Platform',
        category: 'High-Performance Video Platform',
        sla: '<120ms WebRTC • 60 FPS 1080p • $24K MRR',
        description: 'Ultra low-latency WebRTC screen recorder and meeting intelligence platform with Electron desktop client (native NVENC/VideoToolbox), MV3 Chrome extension, Next.js 16 cockpit, and Stripe monetization ($24K MRR).',
        highlights: [
            'WebRTC low-latency media pipeline (<120ms latency) with adaptive bitrate streaming sustaining 50K+ active video minutes.',
            'Electron desktop client leveraging native OS-level IPC audio/display capture (45% lower idle CPU usage).',
            'Chrome Extension (Manifest V3) with offscreen documents for synchronized tab/mic mixing (10K+ user recordings).',
            'Next.js 16 App Router with AWS S3 parallel multipart uploads cutting video storage expenses by 62%.',
        ],
        techStack: ['WebRTC (<120ms)', 'ElectronJS', 'Next.js 16', 'Chrome Extension MV3', 'AWS S3 Multipart', 'Stripe Connect'],
        repoUrl: 'https://github.com/KishorKumarParoi/Koom-AI',
        archUrl: 'https://github.com/KishorKumarParoi/Koom-AI/blob/main/ARCHITECTURE.md',
        docsImagesUrl: 'https://github.com/KishorKumarParoi/Koom-AI/tree/main/docs/images',
        deployCommand: 'https://koom-ai.vercel.app',
    },
}

const JUMP_ITEMS = [
    { id: 'zomato', label: '1. Zomato Lakehouse' },
    { id: 'hybrid', label: '2. Anime Intelligence' },
    { id: 'security', label: '3. AI Security' },
    { id: 'smart', label: '4. Smart Mfg' },
    { id: 'nexus', label: '5. Nexus-AI' },
    { id: 'chatbot', label: '6. AI Chatbot' },
    { id: 'dataagent', label: '7. Data Agent' },
    { id: 'azure_etl', label: '8. Azure ETL' },
    { id: 'sagemaker', label: '9. SageMaker' },
    { id: 'realtime_mlops', label: '10. Realtime MLOps' },
    { id: 'rustgit', label: '11. Rust Git' },
    { id: 'koom', label: '12. KOOM-AI' },
]

const Features = () => {
    const titleRef = useRef(null)
    const descRef = useRef(null)
    const containerRef = useRef(null)
    const [selectedProject, setSelectedProject] = useState(null)
    const [copiedId, setCopiedId] = useState(null)

    const copyDeploy = (id, cmd, e) => {
        e.stopPropagation()
        navigator.clipboard.writeText(cmd)
        setCopiedId(id)
        setTimeout(() => setCopiedId(null), 2000)
    }

    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 50, letterSpacing: '0.1em' },
            {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                    end: 'top 30%',
                    toggleActions: 'play pause resume reverse',
                },
                opacity: 1,
                y: 0,
                letterSpacing: '0.05em',
                duration: 1,
                ease: 'power2.out',
            }
        )

        gsap.fromTo(
            descRef.current,
            { opacity: 0, y: 30 },
            {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 65%',
                    end: 'top 25%',
                    toggleActions: 'play pause resume reverse',
                },
                opacity: 0.8,
                y: 0,
                duration: 1.2,
                delay: 0.2,
                ease: 'power2.out',
            }
        )

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <section id='projects' className='pb-40'>
            {/* Fullscreen Architecture & Spec Modal */}
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

            <div className='container mx-auto px-3 md:px-10'>
                <div ref={containerRef} className='px-5 py-24'>
                    <div ref={titleRef} className='relative'>
                        <div className='flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3'>
                            <Sparkles className='size-4 animate-spin text-emerald-400' />
                            <span>Flagship Production Systems • RESUME_SINGLE_COLUMN.pdf</span>
                        </div>
                        <h2 className='font-circular-web text-4xl md:text-6xl font-bold mb-4'>
                            <span className='bg-linear-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent'>
                                Technical Projects
                            </span>
                        </h2>
                        <p className='font-circular-web text-lg text-blue-50 mb-6 tracking-wider'>
                            Production Distributed Systems, Multi-Cloud Medallion Lakehouses & Zero-Trust Agentic AI
                        </p>
                    </div>

                    <div ref={descRef} className='max-w-4xl'>
                        <p className='font-circular-web text-base md:text-lg text-blue-50 leading-relaxed opacity-90 mb-6'>
                            Every architecture is backed by quantitative SLO benchmarks (<b className='text-cyan-400'>&lt;0.5ms SIMD scoring</b>, <b className='text-emerald-400'>35M+ orders in Snowflake/Delta Lake</b>, <b className='text-violet-400'>95%+ prompt injection defense</b>), full <b className='text-white'>ARCHITECTURE.md</b> diagrams, <b className='text-white'>docs/images</b>, and single-command deterministic cloud deployment (<code className='text-amber-400 font-mono text-xs bg-black/60 px-2 py-0.5 rounded'>curl -fsSL ... | bash</code>).
                        </p>

                        {/* Interactive Jump Bar from Resume */}
                        <div className='p-3.5 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10'>
                            <div className='text-xs font-mono font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1.5'>
                                <Terminal className='size-3.5 text-cyan-400' />
                                <span>⚡ Quick Jump & Architecture Inspector:</span>
                            </div>
                            <div className='flex flex-wrap gap-1.5'>
                                {JUMP_ITEMS.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setSelectedProject(FEATURE_PROJECTS[item.id])}
                                        className='px-3 py-1 rounded-full text-xs font-semibold bg-white/5 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-200 border border-white/10 hover:border-cyan-400/50 transition-all hover:scale-105 cursor-pointer flex items-center gap-1'
                                    >
                                        <span>{item.label}</span>
                                        <ExternalLink className='size-2.5 opacity-60' />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* TOP OF TECHNICAL ARSENAL: STUNNING CAPABILITIES FROM RESUME.PDF */}
                    <div className='mt-12'>
                        <div className='flex items-center gap-2 mb-4'>
                            <span className='size-2 rounded-full bg-cyan-400 animate-ping' />
                            <h3 className='text-xs font-mono font-bold uppercase tracking-widest text-cyan-300'>
                                Enterprise AI Architect Roadmap • Core Competencies & Quantitative Impact
                            </h3>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {/* Capability 1: Polyglot SIMD & Low Latency */}
                            <div className='p-5 rounded-2xl bg-linear-to-b from-cyan-950/40 to-black/80 border border-cyan-500/30 hover:border-cyan-400 transition-all hover:scale-[1.02] shadow-xl'>
                                <div className='flex items-center justify-between mb-2'>
                                    <Cpu className='size-5 text-cyan-400' />
                                    <span className='text-[10px] font-mono font-bold text-cyan-300 bg-cyan-950/70 border border-cyan-800/50 px-2 py-0.5 rounded-full'>
                                        &lt;0.5ms SIMD
                                    </span>
                                </div>
                                <h4 className='text-base font-bold text-white mb-1'>Polyglot Systems & SIMD Optimization</h4>
                                <p className='text-xs text-gray-300 leading-relaxed'>
                                    Rust 1.85 SIMD vector scoring (<b className='text-cyan-300'>50x speedup</b>, 64% CPU cost cut), Go 1.24 gateway, zero-copy memory-mapped I/O, POSIX asynchronous concurrency.
                                </p>
                            </div>

                            {/* Capability 2: Medallion Lakehouses */}
                            <div className='p-5 rounded-2xl bg-linear-to-b from-emerald-950/40 to-black/80 border border-emerald-500/30 hover:border-emerald-400 transition-all hover:scale-[1.02] shadow-xl'>
                                <div className='flex items-center justify-between mb-2'>
                                    <Database className='size-5 text-emerald-400' />
                                    <span className='text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/70 border border-emerald-800/50 px-2 py-0.5 rounded-full'>
                                        35M+ Records • $18K/mo
                                    </span>
                                </div>
                                <h4 className='text-base font-bold text-white mb-1'>Multi-Cloud Medallion Lakehouses</h4>
                                <p className='text-xs text-gray-300 leading-relaxed'>
                                    Snowflake & PySpark Delta Lake medallion pipeline with <b className='text-emerald-300'>dbt Core SCD-2</b> transformations, Feast feature store over Redis (&lt;5ms), and Debezium CDC.
                                </p>
                            </div>

                            {/* Capability 3: Zero-Trust AI Security */}
                            <div className='p-5 rounded-2xl bg-linear-to-b from-rose-950/40 to-black/80 border border-rose-500/30 hover:border-rose-400 transition-all hover:scale-[1.02] shadow-xl'>
                                <div className='flex items-center justify-between mb-2'>
                                    <ShieldAlert className='size-5 text-rose-400' />
                                    <span className='text-[10px] font-mono font-bold text-rose-300 bg-rose-950/70 border border-rose-800/50 px-2 py-0.5 rounded-full'>
                                        95%+ Block • &lt;50ms
                                    </span>
                                </div>
                                <h4 className='text-base font-bold text-white mb-1'>Zero-Trust AI Security & NeMo</h4>
                                <p className='text-xs text-gray-300 leading-relaxed'>
                                    NVIDIA NeMo Guardrails, BotShield adaptive WAF, Microsoft PyRIT red-teaming CI/CD evaluation harness, and &lt;50ms semantic similarity caching (<b className='text-rose-300'>$8.4K/mo saved</b>).
                                </p>
                            </div>

                            {/* Capability 4: Continuous LLMOps */}
                            <div className='p-5 rounded-2xl bg-linear-to-b from-purple-950/40 to-black/80 border border-purple-500/30 hover:border-purple-400 transition-all hover:scale-[1.02] shadow-xl'>
                                <div className='flex items-center justify-between mb-2'>
                                    <Zap className='size-5 text-purple-400' />
                                    <span className='text-[10px] font-mono font-bold text-purple-300 bg-purple-950/70 border border-purple-800/50 px-2 py-0.5 rounded-full'>
                                        68% GPU Cut • 3.4x
                                    </span>
                                </div>
                                <h4 className='text-base font-bold text-white mb-1'>Dynamic Multi-LoRA vLLM & RSLoRA</h4>
                                <p className='text-xs text-gray-300 leading-relaxed'>
                                    Dynamic adapter multiplexing on single GPU with continuous RSLoRA adaptation flywheel, Kubeflow v2 pipelines, and automated adapter hot-swapping on drift.
                                </p>
                            </div>

                            {/* Capability 5: FastMCP & HITL Governance */}
                            <div className='p-5 rounded-2xl bg-linear-to-b from-amber-950/40 to-black/80 border border-amber-500/30 hover:border-amber-400 transition-all hover:scale-[1.02] shadow-xl'>
                                <div className='flex items-center justify-between mb-2'>
                                    <Sparkles className='size-5 text-amber-400' />
                                    <span className='text-[10px] font-mono font-bold text-amber-300 bg-amber-950/70 border border-amber-800/50 px-2 py-0.5 rounded-full'>
                                        FastMCP • 100% Audit
                                    </span>
                                </div>
                                <h4 className='text-base font-bold text-white mb-1'>Model Context Protocol & HITL</h4>
                                <p className='text-xs text-gray-300 leading-relaxed'>
                                    Standardized tool execution via Model Context Protocol (FastMCP) with Human-in-the-Loop financial approval gates, cyclic state recovery, and LangSmith tracing.
                                </p>
                            </div>

                            {/* Capability 6: Algorithmic Rigor */}
                            <div className='p-5 rounded-2xl bg-linear-to-b from-blue-950/40 to-black/80 border border-blue-500/30 hover:border-blue-400 transition-all hover:scale-[1.02] shadow-xl'>
                                <div className='flex items-center justify-between mb-2'>
                                    <Award className='size-5 text-blue-400' />
                                    <span className='text-[10px] font-mono font-bold text-blue-300 bg-blue-950/70 border border-blue-800/50 px-2 py-0.5 rounded-full'>
                                        CF Blue • 1000+ DSA
                                    </span>
                                </div>
                                <h4 className='text-base font-bold text-white mb-1'>Algorithmic Foundations & Core CS</h4>
                                <p className='text-xs text-gray-300 leading-relaxed'>
                                    Codeforces Div-2 Rank 232nd (Blue 1680+), 5★ CodeChef (2000+), Meta Hacker Cup R3, RUET CSE Merit Rank 483rd, 1,000+ competitive algorithmic solves.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CYBERNETIC ARCHITECT ROBOT WALKING THROUGH PROJECTS */}
                    <ProjectRobot onSelectProject={(proj) => setSelectedProject(FEATURE_PROJECTS[proj.projectId])} />
                </div>

                {/* 1. TOP HERO CARD: Hybrid Anime Intelligence */}
                <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] rounded-7xl'>
                    <BentoCard
                        src='videos/feature-1.mp4'
                        title={
                            <>
                                <span className='bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent'>
                                    H<b>y</b><b className='text-purple-600'>b</b>r<b>i</b>
                                </span>
                                <b className='text-blue-400'>d</b>
                                <span className='bg-linear-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent'>
                                    <b> AI</b>
                                </span>
                            </>
                        }
                        description='Hybrid Anime Intelligence & LLMOps: vLLM Multi-LoRA dynamic multiplexing, Rust 1.85 SIMD (<0.5ms scoring, 50x speedup), Go 1.24 gateway, and Reciprocal Rank Fusion.'
                        isComingSoon={false}
                        href='https://github.com/KishorKumarParoi/Hybrid-Anime-Recommender'
                        linkLabel='GitHub Repo ↗'
                    />
                    <button
                        onClick={() => setSelectedProject(FEATURE_PROJECTS.hybrid)}
                        className='absolute top-5 right-5 z-20 flex items-center gap-1.5 text-xs font-semibold bg-black/60 hover:bg-black/90 text-cyan-300 border border-cyan-400/40 px-3.5 py-1.5 rounded-full backdrop-blur-md transition shadow-lg cursor-pointer hover:scale-105'
                    >
                        <Layers className='size-3.5' />
                        <span>Architecture & Specs</span>
                    </button>
                </BentoTilt>

                {/* 2. GRID 1: Security, Zomato, Smart Manufacturing, KoomAI */}
                <div className='grid h-auto md:h-[135vh] grid-cols-1 md:grid-cols-2 grid-rows-3 gap-7 mb-7'>
                    {/* Card 2: AI Security */}
                    <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 rounded-2xl relative'>
                        <BentoCard
                            src={'videos/feature-2.mp4'}
                            title={<>AI <b>S</b>ecurity</>}
                            description={'Enterprise Zero-Trust AI Gateway & RAG: NVIDIA NeMo Guardrails, BotShield adaptive WAF, FastMCP tool execution, and sub-50ms semantic caching.'}
                            href='https://github.com/KishorKumarParoi/AI_Security_Production_App'
                            linkLabel='GitHub Repo ↗'
                        />
                        <button
                            onClick={() => setSelectedProject(FEATURE_PROJECTS.security)}
                            className='absolute top-5 right-5 z-20 flex items-center gap-1 text-xs font-semibold bg-black/60 hover:bg-black/90 text-cyan-300 border border-cyan-400/40 px-3 py-1 rounded-full backdrop-blur-md transition cursor-pointer hover:scale-105'
                        >
                            <span>Specs</span>
                        </button>
                    </BentoTilt>

                    {/* Card 3: Zomato Lakehouse */}
                    <BentoTilt className='bento_tilt_1 row-span-1 ms-0 md:ms-0 rounded-4xl relative'>
                        <BentoCard
                            src={'videos/feature-3.mp4'}
                            title={<>Z<b>o</b>mato Lakehouse</>}
                            description={'Multi-Cloud Lakehouse (35M+ orders): PySpark Delta Lake medallion pipeline, Snowflake warehousing, Feast feature store (<5ms), and CV dispute arbitration.'}
                            href='https://github.com/KishorKumarParoi/zomato-analysis'
                            linkLabel='GitHub Repo ↗'
                        />
                        <button
                            onClick={() => setSelectedProject(FEATURE_PROJECTS.zomato)}
                            className='absolute top-5 right-5 z-20 flex items-center gap-1 text-xs font-semibold bg-black/60 hover:bg-black/90 text-cyan-300 border border-cyan-400/40 px-3 py-1 rounded-full backdrop-blur-md transition cursor-pointer hover:scale-105'
                        >
                            <span>Specs</span>
                        </button>
                    </BentoTilt>

                    {/* Card 4: Smart Manufacturing */}
                    <BentoTilt className='bento_tilt_1 me-0 md:me-0 rounded-3xl relative'>
                        <BentoCard
                            src={'videos/feature-4.mp4'}
                            title={<>Smart <b>M</b>anufacturing</>}
                            description={'Industrial AI & MLOps Platform: Rust SIMD telemetry pre-filter, Go gateway, Next.js 15 3D digital twin cockpit, and sub-20ms anomaly detection.'}
                            href='https://github.com/KishorKumarParoi/smart-manufacturing'
                            linkLabel='GitHub Repo ↗'
                        />
                        <button
                            onClick={() => setSelectedProject(FEATURE_PROJECTS.smart)}
                            className='absolute top-5 right-5 z-20 flex items-center gap-1 text-xs font-semibold bg-black/60 hover:bg-black/90 text-cyan-300 border border-cyan-400/40 px-3 py-1 rounded-full backdrop-blur-md transition cursor-pointer hover:scale-105'
                        >
                            <span>Specs</span>
                        </button>
                    </BentoTilt>

                    {/* Card 5: Koom-AI (Upgraded 3D Cyber Card) */}
                    <BentoTilt className='bento-tilt_2 rounded-3xl relative overflow-hidden border border-cyan-500/40 shadow-2xl shadow-purple-900/30'>
                        <div className='relative size-full flex flex-col justify-between p-6 bg-gradient-to-br from-indigo-950 via-purple-950 to-black overflow-hidden group'>
                            {/* Animated Cyber Grid & Glowing Nebula */}
                            <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/20 via-purple-600/20 to-transparent pointer-events-none' />
                            <div className='absolute -bottom-10 -right-10 size-48 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-all duration-700' />
                            
                            {/* Top Badge: 3D Live WebRTC Telemetry */}
                            <div className='relative z-10 flex items-center justify-between'>
                                <div className='flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/50 text-[10px] font-mono font-bold text-cyan-300'>
                                    <Radio className='size-3 text-cyan-400 animate-pulse' />
                                    <span>&lt;120ms WebRTC • 60 FPS</span>
                                </div>
                                <span className='text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/50 px-2.5 py-0.5 rounded-full'>
                                    $24K MRR
                                </span>
                            </div>

                            {/* Middle Title & Description */}
                            <div className='relative z-10 my-4'>
                                <h1 className='text-3xl md:text-4xl font-black tracking-tight text-white mb-2 flex items-center gap-2'>
                                    <span className='bg-linear-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent'>
                                        KOOM-AI
                                    </span>
                                    <Sparkles className='size-5 text-amber-400 animate-spin' />
                                </h1>
                                <p className='text-xs md:text-sm text-gray-200 leading-relaxed font-sans'>
                                    Autonomous Video Recording & Intelligence Platform: Electron desktop with native NVENC/VideoToolbox capture, MV3 Chrome extension, Next.js 16 cockpit, and parallel AWS S3 multipart uploads.
                                </p>

                                {/* 3D Audio Frequency Waveform Visualizer */}
                                <div className='flex items-end gap-1 h-6 mt-4 opacity-80'>
                                    {[12, 18, 8, 22, 14, 26, 10, 20, 16, 24, 12, 18, 14, 22].map((h, i) => (
                                        <div
                                            key={i}
                                            className='flex-1 rounded-full bg-linear-to-t from-cyan-400 to-purple-400 animate-pulse'
                                            style={{
                                                height: `${h}px`,
                                                animationDuration: `${0.4 + (i % 5) * 0.15}s`,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Buttons */}
                            <div className='relative z-10 flex items-center justify-between pt-3 border-t border-white/10'>
                                <a
                                    href='https://koom-ai.vercel.app'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 text-black text-xs font-black uppercase tracking-wider hover:scale-105 transition-all shadow-lg shadow-cyan-500/30'
                                >
                                    <span>Live Platform ↗</span>
                                    <TiLocationArrow className='text-base' />
                                </a>
                                <button
                                    onClick={() => setSelectedProject(FEATURE_PROJECTS.koom)}
                                    className='px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition cursor-pointer hover:border-cyan-400'
                                >
                                    Architecture & Specs
                                </button>
                            </div>
                        </div>
                    </BentoTilt>
                </div>

                {/* 3. BENTO SECTION: Nexus-AI, Chatbot, Rust Git */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-7 mt-7 mb-14'>
                    {/* Project 6: Nexus-AI Lakehouse */}
                    <BentoTilt className='bento-tilt_1 h-[420px] rounded-3xl relative overflow-hidden group'>
                        <BentoCard
                            src={'videos/hero-1.mp4'}
                            title={<>N<b>e</b>xus-<b>A</b>I Lakehouse</>}
                            description={'Multi-Cloud Lakehouse (Bronze-Silver-Gold in DuckDB <120ms) coordinated by 5-Agent LangGraph Mesh (NL2SQL, MLOps, OWASP, Voice) and Go 1.22 Gateway.'}
                            href='https://github.com/KishorKumarParoi/Nexus_AI'
                            linkLabel='GitHub Repo ↗'
                        />
                        <button
                            onClick={() => setSelectedProject(FEATURE_PROJECTS.nexus)}
                            className='absolute top-5 right-5 z-20 flex items-center gap-1 text-xs font-semibold bg-black/60 hover:bg-black/90 text-cyan-300 border border-cyan-400/40 px-3 py-1 rounded-full backdrop-blur-md transition cursor-pointer hover:scale-105'
                        >
                            <Layers className='size-3.5' />
                            <span>Architecture</span>
                        </button>
                    </BentoTilt>

                    {/* Project 7: Autonomous AI Chatbot */}
                    <BentoTilt className='bento-tilt_1 h-[420px] rounded-3xl relative overflow-hidden group'>
                        <BentoCard
                            src={'videos/hero-2.mp4'}
                            title={<>A<b>u</b>tonomous Chatbot</>}
                            description={'Enterprise Agent with LangGraph Cyclic State Machines, PostgreSQL checkpointer (<50ms recovery), FastMCP financial HITL approval gates, and BotShield WAF.'}
                            href='https://github.com/KishorKumarParoi/Advanced_AI_Chatbot_Project'
                            linkLabel='GitHub Repo ↗'
                        />
                        <button
                            onClick={() => setSelectedProject(FEATURE_PROJECTS.chatbot)}
                            className='absolute top-5 right-5 z-20 flex items-center gap-1 text-xs font-semibold bg-black/60 hover:bg-black/90 text-cyan-300 border border-cyan-400/40 px-3 py-1 rounded-full backdrop-blur-md transition cursor-pointer hover:scale-105'
                        >
                            <Layers className='size-3.5' />
                            <span>Architecture</span>
                        </button>
                    </BentoTilt>

                    {/* Project 8: Bare-Metal Rust Git Engine */}
                    <BentoTilt className='bento-tilt_1 h-[420px] rounded-3xl relative overflow-hidden group'>
                        <BentoCard
                            src={'videos/hero-3.mp4'}
                            title={<>R<b>u</b>st Git Engine</>}
                            description={'Bare-Metal Systems in Rust 1.85: SHA-1 graph traversal, streaming SIMD zlib, zero-copy memory-mapped I/O, and sub-microsecond async POSIX terminal pipelines.'}
                            href='https://github.com/KishorKumarParoi/codecrafters-git-rust'
                            linkLabel='GitHub Repo ↗'
                        />
                        <button
                            onClick={() => setSelectedProject(FEATURE_PROJECTS.rustgit)}
                            className='absolute top-5 right-5 z-20 flex items-center gap-1 text-xs font-semibold bg-black/60 hover:bg-black/90 text-cyan-300 border border-cyan-400/40 px-3 py-1 rounded-full backdrop-blur-md transition cursor-pointer hover:scale-105'
                        >
                            <Layers className='size-3.5' />
                            <span>Architecture</span>
                        </button>
                    </BentoTilt>
                </div>

                {/* 4. EXPANDED PRODUCTION ARCHITECTURES SHOWCASE: Data Agent, Azure ETL, SageMaker, Realtime MLOps */}
                <div className='mt-16'>
                    <div className='flex items-center justify-between mb-8 pb-4 border-b border-white/10'>
                        <div>
                            <h3 className='text-2xl md:text-3xl font-extrabold text-white'>
                                Enterprise Data Platforms & Cloud MLOps
                            </h3>
                            <p className='text-xs md:text-sm text-gray-400 mt-1'>
                                Single-column resume technical projects complete with deterministic one-click bash deployments.
                            </p>
                        </div>
                        <span className='hidden sm:block text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-3 py-1 rounded-full'>
                            Production Rigor (Phases 0-5)
                        </span>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {/* Data Agent */}
                        <div className='p-6 rounded-3xl bg-gray-950/90 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between'>
                            <div>
                                <div className='flex items-center justify-between mb-3'>
                                    <span className='text-[10px] font-bold font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'>
                                        7. Autonomous SQL & BI
                                    </span>
                                    <span className='text-[10px] font-mono text-emerald-400'>96.2% Routing • 89% Self-Healing</span>
                                </div>
                                <h4 className='text-xl font-bold text-white mb-2'>
                                    Data Agent: Enterprise Multi-Agent BI & SQL System
                                </h4>
                                <p className='text-xs text-gray-300 leading-relaxed mb-4'>
                                    LangGraph supervisor classifying business requests into SQL and ETL subgraphs with dynamic PostgreSQL schema introspection, independent LLM security judge, and self-healing syntax retry.
                                </p>
                                <div className='flex flex-wrap gap-1 mb-4'>
                                    {FEATURE_PROJECTS.dataagent.techStack.map((tech, i) => (
                                        <span key={i} className='text-[10px] bg-white/5 text-gray-300 px-2 py-0.5 rounded font-mono'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className='flex items-center justify-between pt-4 border-t border-white/10 text-xs'>
                                <button
                                    onClick={(e) => copyDeploy('dataagent', FEATURE_PROJECTS.dataagent.deployCommand, e)}
                                    className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition cursor-pointer font-semibold'
                                >
                                    {copiedId === 'dataagent' ? <Check className='size-3 text-emerald-400' /> : <Copy className='size-3' />}
                                    <span>{copiedId === 'dataagent' ? 'Copied Deploy!' : 'Copy Deploy Cmd'}</span>
                                </button>
                                <button
                                    onClick={() => setSelectedProject(FEATURE_PROJECTS.dataagent)}
                                    className='text-gray-300 hover:text-white font-semibold transition cursor-pointer'
                                >
                                    Inspect Specs ↗
                                </button>
                            </div>
                        </div>

                        {/* Azure ETL */}
                        <div className='p-6 rounded-3xl bg-gray-950/90 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between'>
                            <div>
                                <div className='flex items-center justify-between mb-3'>
                                    <span className='text-[10px] font-bold font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'>
                                        8. Azure Databricks & Synapse
                                    </span>
                                    <span className='text-[10px] font-mono text-emerald-400'>1.4B Logs • 6.2x Speedup</span>
                                </div>
                                <h4 className='text-xl font-bold text-white mb-2'>
                                    Advanced Network Security Medallion Lakehouse
                                </h4>
                                <p className='text-xs text-gray-300 leading-relaxed mb-4'>
                                    ADF v2 dynamic lookup batch pipelines landing into ADLS Gen2, Databricks Spark ETL cross-joining MongoDB Atlas operational data, Synapse CETAS external tables, and sub-4ms ONNX ML inference.
                                </p>
                                <div className='flex flex-wrap gap-1 mb-4'>
                                    {FEATURE_PROJECTS.azure_etl.techStack.map((tech, i) => (
                                        <span key={i} className='text-[10px] bg-white/5 text-gray-300 px-2 py-0.5 rounded font-mono'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className='flex items-center justify-between pt-4 border-t border-white/10 text-xs'>
                                <button
                                    onClick={(e) => copyDeploy('azure_etl', FEATURE_PROJECTS.azure_etl.deployCommand, e)}
                                    className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition cursor-pointer font-semibold'
                                >
                                    {copiedId === 'azure_etl' ? <Check className='size-3 text-emerald-400' /> : <Copy className='size-3' />}
                                    <span>{copiedId === 'azure_etl' ? 'Copied Deploy!' : 'Copy Deploy Cmd'}</span>
                                </button>
                                <button
                                    onClick={() => setSelectedProject(FEATURE_PROJECTS.azure_etl)}
                                    className='text-gray-300 hover:text-white font-semibold transition cursor-pointer'
                                >
                                    Inspect Specs ↗
                                </button>
                            </div>
                        </div>

                        {/* SageMaker */}
                        <div className='p-6 rounded-3xl bg-gray-950/90 border border-white/10 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between'>
                            <div>
                                <div className='flex items-center justify-between mb-3'>
                                    <span className='text-[10px] font-bold font-mono px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40'>
                                        9. AWS Cloud MLOps
                                    </span>
                                    <span className='text-[10px] font-mono text-amber-400'>70% Cost Reduction • 2,500 req/s</span>
                                </div>
                                <h4 className='text-xl font-bold text-white mb-2'>
                                    AWS SageMaker End-to-End MLOps Pipeline & Governance
                                </h4>
                                <p className='text-xs text-gray-300 leading-relaxed mb-4'>
                                    SageMaker DAG Pipeline with Managed Spot Training, Model Registry promotion gating (≥85% accuracy), S3 DataCapture for real-time drift detection, and KMS envelope encryption.
                                </p>
                                <div className='flex flex-wrap gap-1 mb-4'>
                                    {FEATURE_PROJECTS.sagemaker.techStack.map((tech, i) => (
                                        <span key={i} className='text-[10px] bg-white/5 text-gray-300 px-2 py-0.5 rounded font-mono'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className='flex items-center justify-between pt-4 border-t border-white/10 text-xs'>
                                <button
                                    onClick={(e) => copyDeploy('sagemaker', FEATURE_PROJECTS.sagemaker.deployCommand, e)}
                                    className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 transition cursor-pointer font-semibold'
                                >
                                    {copiedId === 'sagemaker' ? <Check className='size-3 text-emerald-400' /> : <Copy className='size-3' />}
                                    <span>{copiedId === 'sagemaker' ? 'Copied Deploy!' : 'Copy Deploy Cmd'}</span>
                                </button>
                                <button
                                    onClick={() => setSelectedProject(FEATURE_PROJECTS.sagemaker)}
                                    className='text-gray-300 hover:text-white font-semibold transition cursor-pointer'
                                >
                                    Inspect Specs ↗
                                </button>
                            </div>
                        </div>

                        {/* Real-Time MLOps */}
                        <div className='p-6 rounded-3xl bg-gray-950/90 border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between'>
                            <div>
                                <div className='flex items-center justify-between mb-3'>
                                    <span className='text-[10px] font-bold font-mono px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40'>
                                        10. Serverless Kubernetes MLOps
                                    </span>
                                    <span className='text-[10px] font-mono text-purple-400'>Scale-to-Zero • 90/10 Canary</span>
                                </div>
                                <h4 className='text-xl font-bold text-white mb-2'>
                                    Cloud-Native Real-Time MLOps: KServe & ECS Fargate
                                </h4>
                                <p className='text-xs text-gray-300 leading-relaxed mb-4'>
                                    KServe v1beta1 serverless inference on Kubernetes with dynamic scale-to-zero autoscaling, AWS ECS on Fargate with ALB, modular Terraform IaC, and Envoy 90/10 automated canary routing.
                                </p>
                                <div className='flex flex-wrap gap-1 mb-4'>
                                    {FEATURE_PROJECTS.realtime_mlops.techStack.map((tech, i) => (
                                        <span key={i} className='text-[10px] bg-white/5 text-gray-300 px-2 py-0.5 rounded font-mono'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className='flex items-center justify-between pt-4 border-t border-white/10 text-xs'>
                                <button
                                    onClick={(e) => copyDeploy('realtime_mlops', FEATURE_PROJECTS.realtime_mlops.deployCommand, e)}
                                    className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition cursor-pointer font-semibold'
                                >
                                    {copiedId === 'realtime_mlops' ? <Check className='size-3 text-emerald-400' /> : <Copy className='size-3' />}
                                    <span>{copiedId === 'realtime_mlops' ? 'Copied Deploy!' : 'Copy Deploy Cmd'}</span>
                                </button>
                                <button
                                    onClick={() => setSelectedProject(FEATURE_PROJECTS.realtime_mlops)}
                                    className='text-gray-300 hover:text-white font-semibold transition cursor-pointer'
                                >
                                    Inspect Specs ↗
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features