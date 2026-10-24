import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BentoCard, { BentoTilt } from './BentoCard'
import ProjectModal from './ProjectModal'
import { TiLocationArrow } from 'react-icons/ti'
import { Layers, Terminal, Sparkles, ExternalLink } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const FEATURE_PROJECTS = {
    hybrid: {
        id: 'hybrid',
        title: 'Hybrid Anime Intelligence & LLMOps',
        category: 'Polyglot LLMOps Mesh',
        sla: '<0.5ms SIMD Scoring • 3.4x Throughput',
        description: 'High-throughput polyglot microservice mesh: Rust 1.85 SIMD scoring (<0.5ms, 50x speedup), Go 1.24 auth, and FastAPI AI core over Kafka with dynamic vLLM Multi-LoRA serving.',
        highlights: [
            'Rust 1.85 SIMD vector scoring reduced CPU compute costs by 64%.',
            'Dual-Tower NCF + ChromaDB HNSW + BM25 synthesized via Reciprocal Rank Fusion (NDCG@10 = 0.94).',
            'vLLM Multi-LoRA dynamic multiplexing with continuous RSLoRA flywheel (68% GPU cost reduction).',
            'Multi-cloud GitOps continuous delivery via ArgoCD across AWS EKS, GCP GKE, and Azure AKS with KEDA autoscaling.',
        ],
        techStack: ['Rust 1.85 SIMD', 'Go 1.24', 'Python FastAPI', 'vLLM Multi-LoRA', 'Apache Kafka', 'ChromaDB', 'ArgoCD'],
        repoUrl: 'https://github.com/KishorKumarParoi/Hybrid-Anime-Recommender',
        archUrl: 'https://github.com/KishorKumarParoi/Hybrid-Anime-Recommender/blob/main/ARCHITECTURE.md',
        docsImagesUrl: 'https://github.com/KishorKumarParoi/Hybrid-Anime-Recommender/tree/main/docs/images',
        deployCommand: 'curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/Hybrid-Anime-Recommender/main/bootstrap.sh | bash',
    },
    security: {
        id: 'security',
        title: 'Enterprise AI Security & Agentic RAG Platform',
        category: 'Zero-Trust AI Gateway',
        sla: '95%+ Injection Block • <50ms Cache',
        description: 'Defense-in-depth AI Security Gateway built with BotShield WAF, NVIDIA NeMo Guardrails, LangGraph cyclic state machines, and FastMCP tool execution.',
        highlights: [
            'Blocked 95%+ of prompt injections and jailbreaks (benchmarked with Microsoft PyRIT 0.14.0).',
            'Stateful agentic core in LangGraph with MemorySaver checkpoints saving $8.4K/mo via <50ms semantic caching.',
            'Standardized tool execution via Model Context Protocol (FastMCP) with strict Human-in-the-Loop financial gates.',
            'Two-stage hybrid retrieval with Jina v3 dense vectors, BM25, and local ONNX FlashRank cross-encoders.',
        ],
        techStack: ['NVIDIA NeMo Guardrails', 'LangGraph', 'FastMCP', 'BotShield WAF', 'Redis Semantic Cache', 'PyRIT RedTeaming'],
        repoUrl: 'https://github.com/KishorKumarParoi/AI_Security_Production_App',
        archUrl: 'https://github.com/KishorKumarParoi/AI_Security_Production_App/blob/main/ARCHITECTURE.md',
        docsImagesUrl: 'https://github.com/KishorKumarParoi/AI_Security_Production_App/tree/main/docs/images',
        deployCommand: 'curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/AI_Security_Production_App/main/bootstrap.sh | bash',
    },
    zomato: {
        id: 'zomato',
        title: 'Zomato AI Lakehouse & Multimodal Dispute Platform',
        category: 'Medallion Lakehouse & CV',
        sla: '35M+ Records • <5ms Feast Store',
        description: 'End-to-end multi-cloud Lakehouse ingesting 35M+ orders (2.3 GB) on Snowflake and PySpark Delta Lake with dbt Core SCD-2 and multimodal computer vision dispute arbitration.',
        highlights: [
            'dbt Core SCD-2 data transformations curtailed warehouse compute by 42% ($18K/mo savings).',
            'Real-time feature streaming via Airflow, Debezium CDC WAL, and Feast over Redis (<5ms latency).',
            'Multimodal CV dispute arbitration (dHash anti-fraud, receipt OCR) with G-Eval CoT (68% fraud drop, $1.2M protected).',
            'Distributed CQRS and Transactional Outbox pattern over Kafka with 100% GDPR/DPDP PII redaction.',
        ],
        techStack: ['Snowflake', 'PySpark Delta Lake', 'dbt Core SCD-2', 'Feast Feature Store', 'Apache Airflow', 'Computer Vision'],
        repoUrl: 'https://github.com/KishorKumarParoi/zomato-analysis',
        archUrl: 'https://github.com/KishorKumarParoi/zomato-analysis/blob/main/ARCHITECTURE.md',
        docsImagesUrl: 'https://github.com/KishorKumarParoi/zomato-analysis/tree/main/docs/images',
        deployCommand: 'curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/zomato-analysis/main/bootstrap.sh | bash',
    },
    smart: {
        id: 'smart',
        title: 'Smart Manufacturing Industrial AI & Multi-Cloud MLOps',
        category: 'Edge & IIoT AI Platform',
        sla: '<20ms Anomaly • 96% Deploy Cut',
        description: 'Edge-to-cloud industrial intelligence with Rust 1.85 SIMD vibration pre-filtering, Go cloud gateway, Next.js 15 3D digital twin cockpit, and PyTorch autoencoder anomaly detection.',
        highlights: [
            'IoT anomaly detection and defect inspection (CNN, <20ms) mitigated scrap waste by $420K annually.',
            'Polyglot edge stack: Rust 1.85 SIMD pre-filter (:8082), Go cloud gateway (:8085), and PyTorch AI (:8000).',
            'GKE multi-zone cluster with seamless fallback to host-native k3s CNCF engine for standalone execution.',
            '12-stage declarative CI/CD via Jenkins, SonarQube, Nexus 3, and ArgoCD (deployment cycle cut by 96%).',
        ],
        techStack: ['Rust 1.85 SIMD', 'Go Gateway', 'PyTorch Autoencoders', 'GKE / K3s', 'ArgoCD GitOps', 'MQTT Broker'],
        repoUrl: 'https://github.com/KishorKumarParoi/smart-manufacturing',
        archUrl: 'https://github.com/KishorKumarParoi/smart-manufacturing/blob/main/ARCHITECTURE.md',
        docsImagesUrl: 'https://github.com/KishorKumarParoi/smart-manufacturing/tree/main/docs/images',
        deployCommand: 'curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/smart-manufacturing/main/bootstrap.sh | bash',
    },
    nexus: {
        id: 'nexus',
        title: 'Nexus-AI: Enterprise Multi-Cloud Lakehouse & Autonomous Agent Mesh',
        category: 'Multi-Cloud Lakehouse & Agent Mesh',
        sla: '<120ms DuckDB • 5-Agent Mesh',
        description: 'Enterprise multi-cloud Lakehouse (Bronze-Silver-Gold in DuckDB <120ms) coordinated by a 5-agent LangGraph mesh (Data NL2SQL, Business Analyst, MLOps, OWASP, Voice) with Go 1.22 API Gateway.',
        highlights: [
            '3-tier Medallion Lakehouse in DuckDB compressed query latencies from 4.5s to <120ms.',
            '5-agent autonomous mesh over LangGraph accelerated ad-hoc enterprise analytics turnaround by 82%.',
            'Go 1.22 API Gateway with JWT edge authentication and token-bucket rate limiting sustained 12K req/s.',
            'Multi-cloud IaC via Terraform across AWS (EKS, S3), GCP (GKE, BigQuery), and Azure (AKS, Synapse).',
        ],
        techStack: ['LangGraph Multi-Agent', 'DuckDB Lakehouse', 'Go 1.22 Gateway', 'Terraform Multi-Cloud', 'Next.js 16', 'Docker'],
        repoUrl: 'https://github.com/KishorKumarParoi/Nexus_AI',
        archUrl: 'https://github.com/KishorKumarParoi/Nexus_AI/blob/main/ARCHITECTURE.md',
        docsImagesUrl: 'https://github.com/KishorKumarParoi/Nexus_AI/tree/main/docs/images',
        deployCommand: 'curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/Nexus_AI/main/bootstrap.sh | bash',
    },
    chatbot: {
        id: 'chatbot',
        title: 'Autonomous AI Chatbot: Enterprise Agent & HITL Financial Gating',
        category: 'Autonomous Conversational Agent',
        sla: 'Sub-50ms Recovery • 99.4% Defense',
        description: 'Enterprise conversational agent engineered with LangGraph cyclic state machines, PostgreSQL checkpointer, FastMCP tool execution with strict Human-in-the-Loop financial approval gates, and BotShield WAF.',
        highlights: [
            'LangGraph cyclic state machines with PostgreSQL checkpointer enabled sub-50ms session recovery and dynamic rollbacks.',
            'FastMCP isolated tool execution with Human-in-the-Loop (HITL) gates on financial refunds/cancellations (zero unauthorized risk).',
            'BotShield WAF middleware with honeypot traps intercepted 99.4% of adversarial probes.',
            'Two-stage hybrid retrieval with Qdrant dense vectors, BM25 sparse matching, and real-time SSE token streaming.',
        ],
        techStack: ['LangGraph Cyclic', 'FastMCP', 'HITL Gating', 'Qdrant Vector DB', 'PostgreSQL Checkpoint', 'BotShield WAF'],
        repoUrl: 'https://github.com/KishorKumarParoi/Advanced_AI_Chatbot_Project',
        archUrl: 'https://github.com/KishorKumarParoi/Advanced_AI_Chatbot_Project/blob/main/ARCHITECTURE.md',
        docsImagesUrl: 'https://github.com/KishorKumarParoi/Advanced_AI_Chatbot_Project/tree/main/docs/images',
        deployCommand: 'curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/Advanced_AI_Chatbot_Project/main/bootstrap.sh | bash',
    },
    rustgit: {
        id: 'rustgit',
        title: 'Core Systems Engineering: Bare-Metal Rust Git Engine & POSIX Shell',
        category: 'Bare-Metal Systems Programming',
        sla: 'Sub-Microsecond Latency • Zero-Copy I/O',
        description: 'Bare-metal Git internals and async POSIX terminal shell implemented in Rust 1.85: SHA-1 object graph, streaming SIMD zlib decompression, delta packfiles, and signal-multiplexed process execution.',
        highlights: [
            'Crafted Git internals in Rust 1.85 (SHA-1 graph, streaming SIMD zlib) matching C Git performance with 100% memory safety.',
            'Built POSIX shell with async signal multiplexing, fork/exec pipelines, and I/O redirection clocked at sub-microsecond latency.',
            '73% lower peak heap allocation compared to traditional UNIX shell implementations.',
        ],
        techStack: ['Rust 1.85', 'Bare-Metal Git Internals', 'SIMD Decompression', 'Async Signals', 'POSIX Pipelines', 'Memory Safety'],
        repoUrl: 'https://github.com/KishorKumarParoi/codecrafters-git-rust',
        archUrl: 'https://github.com/KishorKumarParoi/codecrafters-git-rust/blob/main/ARCHITECTURE.md',
        docsImagesUrl: 'https://github.com/KishorKumarParoi/codecrafters-git-rust/tree/main/docs/images',
        deployCommand: 'curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/codecrafters-git-rust/main/bootstrap.sh | bash',
    },
    koom: {
        id: 'koom',
        title: 'KoomAI — Autonomous Video Recording & Intelligence Platform',
        category: 'High-Performance Video Platform',
        sla: '<120ms WebRTC • 60 FPS 1080p',
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

const Features = () => {
    const titleRef = useRef(null)
    const descRef = useRef(null)
    const containerRef = useRef(null)
    const [selectedProject, setSelectedProject] = useState(null)

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
        <section id='features' className='pb-40'>
            {/* Fullscreen Architecture Modal */}
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

            <div className='container mx-auto px-3 md:px-10'>
                <div ref={containerRef} className='px-5 py-24'>
                    <div ref={titleRef} className='relative'>
                        <h2 className='font-circular-web text-4xl md:text-5xl font-bold mb-4'>
                            <span className='bg-linear-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent'>
                                8 Flagship Architectures
                            </span>
                        </h2>
                        <p className='font-circular-web text-lg text-blue-50 mb-6 tracking-wider'>
                            Production Distributed Systems, Lakehouses & Agentic AI
                        </p>
                    </div>

                    <div ref={descRef} className='max-w-3xl'>
                        <p className='font-circular-web text-base md:text-lg text-blue-50 leading-relaxed opacity-80 mb-4'>
                            Explore <span className='text-cyan-400 font-semibold'>production-grade polyglot microservices</span>, 
                            <span className='text-emerald-400 font-semibold'> multi-cloud Medallion Lakehouses</span>, and 
                            <span className='text-violet-400 font-semibold'> zero-trust Agentic AI frameworks</span>. 
                            Click on any architecture card to inspect its <b className='text-white'>ARCHITECTURE.md</b>, <b className='text-white'>docs/images</b>, and <b className='text-white'>deterministic deployment runbook</b>.
                        </p>
                    </div>

                    <div className='mt-8 flex gap-2'>
                        <div className='h-1 w-12 bg-linear-to-r from-cyan-400 to-emerald-400 rounded-full animate-pulse'></div>
                        <div className='h-1 w-8 bg-linear-to-r from-emerald-400 to-blue-500 rounded-full animate-pulse' style={{ animationDelay: '0.2s' }}></div>
                        <div className='h-1 w-4 bg-linear-to-r from-blue-500 to-violet-500 rounded-full animate-pulse' style={{ animationDelay: '0.4s' }}></div>
                    </div>
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
                        className='absolute top-5 right-5 z-20 flex items-center gap-1.5 text-xs font-semibold bg-black/60 hover:bg-black/90 text-cyan-300 border border-cyan-400/40 px-3.5 py-1.5 rounded-full backdrop-blur-md transition shadow-lg'
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
                            className='absolute top-5 right-5 z-20 flex items-center gap-1 text-xs font-semibold bg-black/60 hover:bg-black/90 text-cyan-300 border border-cyan-400/40 px-3 py-1 rounded-full backdrop-blur-md transition'
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
                            className='absolute top-5 right-5 z-20 flex items-center gap-1 text-xs font-semibold bg-black/60 hover:bg-black/90 text-cyan-300 border border-cyan-400/40 px-3 py-1 rounded-full backdrop-blur-md transition'
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
                            className='absolute top-5 right-5 z-20 flex items-center gap-1 text-xs font-semibold bg-black/60 hover:bg-black/90 text-cyan-300 border border-cyan-400/40 px-3 py-1 rounded-full backdrop-blur-md transition'
                        >
                            <span>Specs</span>
                        </button>
                    </BentoTilt>

                    {/* Card 5: Koom-AI */}
                    <BentoTilt className='bento-tilt_2 rounded-2xl'>
                        <div className='flex size-full flex-col justify-between bg-violet-700 p-5 group transition-all duration-300 hover:bg-violet-600 relative'>
                            <div>
                                <h1 className='bento-title special-font max-w-64 text-black'>
                                    K<b>o</b>om-<b>A</b>I
                                </h1>
                                <p className='text-xs md:text-sm text-black/90 font-medium mt-2'>
                                    High-Performance Loom Alternative with WebRTC (&lt;120ms), Electron desktop, MV3 Chrome extension, Next.js 16 cockpit, and $24K MRR.
                                </p>
                            </div>

                            <div className='flex items-center justify-between w-full mt-4'>
                                <a
                                    href='https://koom-ai.vercel.app'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex items-center gap-1 text-xs uppercase tracking-wider text-black font-bold hover:underline'
                                >
                                    <span>Live Platform ↗</span>
                                    <TiLocationArrow className='text-lg' />
                                </a>
                                <button
                                    onClick={() => setSelectedProject(FEATURE_PROJECTS.koom)}
                                    className='text-xs font-bold bg-black text-white px-3 py-1 rounded-full hover:bg-gray-800 transition'
                                >
                                    Architecture
                                </button>
                            </div>
                        </div>
                    </BentoTilt>
                </div>

                {/* 3. NEW BENTO SECTION: 3 NEW ARCHITECTURES FROM README */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-7 mt-7'>
                    {/* Project 6 (NEW): Nexus-AI Lakehouse */}
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
                            className='absolute top-5 right-5 z-20 flex items-center gap-1 text-xs font-semibold bg-black/60 hover:bg-black/90 text-cyan-300 border border-cyan-400/40 px-3 py-1 rounded-full backdrop-blur-md transition'
                        >
                            <Layers className='size-3.5' />
                            <span>Architecture</span>
                        </button>
                    </BentoTilt>

                    {/* Project 7 (NEW): Autonomous AI Chatbot */}
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
                            className='absolute top-5 right-5 z-20 flex items-center gap-1 text-xs font-semibold bg-black/60 hover:bg-black/90 text-cyan-300 border border-cyan-400/40 px-3 py-1 rounded-full backdrop-blur-md transition'
                        >
                            <Layers className='size-3.5' />
                            <span>Architecture</span>
                        </button>
                    </BentoTilt>

                    {/* Project 8 (NEW): Bare-Metal Rust Git Engine */}
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
                            className='absolute top-5 right-5 z-20 flex items-center gap-1 text-xs font-semibold bg-black/60 hover:bg-black/90 text-cyan-300 border border-cyan-400/40 px-3 py-1 rounded-full backdrop-blur-md transition'
                        >
                            <Layers className='size-3.5' />
                            <span>Architecture</span>
                        </button>
                    </BentoTilt>
                </div>
            </div>
        </section>
    )
}

export default Features