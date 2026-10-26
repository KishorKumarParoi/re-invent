import React, { useState, useRef, useEffect } from 'react'
import {
    Terminal as TerminalIcon,
    Sparkles,
    Copy,
    Check,
    RotateCcw,
    Maximize2,
    Minimize2,
    Folder,
    ExternalLink,
    Cpu,
    Shield,
    Database,
    Zap,
    Play
} from 'lucide-react'

export const ALL_15_PROJECTS = [
    {
        id: 1,
        num: '01',
        title: 'Zomato Enterprise AI Lakehouse & Multimodal Dispute Platform',
        stack: 'Snowflake • PySpark • Feast • KServe • MLflow',
        desc: 'Hybrid medallion lakehouse processing multi-modal restaurant dispute claims with automated fraud arbitration.',
        link: 'https://github.com/KishorKumarParoi/zomato-ai-lakehouse',
    },
    {
        id: 2,
        num: '02',
        title: 'Hybrid Anime Intelligence & Continuous LLMOps',
        stack: 'Go 1.24 • Rust SIMD • vLLM Multi-LoRA • Ray Serve',
        desc: 'Dual-engine microservice delivering ultra-low-latency high-throughput character dialogue generation (<15ms token stream).',
        link: 'https://github.com/KishorKumarParoi/hybrid-anime-intelligence',
    },
    {
        id: 3,
        num: '03',
        title: 'Zero-Trust AI Defense & Production Agentic RAG Platform',
        stack: 'BotShield WAF • NVIDIA NeMo • LangGraph • Qdrant',
        desc: 'Enterprise boundary protection mitigating OWASP Top 10 for LLMs, prompt injections, and data exfiltration.',
        link: 'https://github.com/KishorKumarParoi/zero-trust-ai-defense',
    },
    {
        id: 4,
        num: '04',
        title: 'Smart Manufacturing Industrial IIoT & MLOps',
        stack: 'Rust SIMD • Go Gateway • GKE/K3s • ArgoCD • Kafka',
        desc: 'Distributed sensor ingestion mesh delivering real-time anomaly detection and predictive tool maintenance.',
        link: 'https://github.com/KishorKumarParoi/smart_manufacturing',
    },
    {
        id: 5,
        num: '05',
        title: 'Nexus-AI Multi-Cloud Lakehouse & Autonomous Agent Mesh',
        stack: 'LangGraph • DuckDB • FastAPI • Apache Iceberg • Ray',
        desc: 'Self-orchestrating multi-agent graph with automated SQL synthesis, data profiling, and executive reporting.',
        link: 'https://github.com/KishorKumarParoi/nexus-ai',
    },
    {
        id: 6,
        num: '06',
        title: 'Advanced AI Chatbot & HITL Financial Gating',
        stack: 'FastMCP • Qdrant Vector • PostgreSQL • Next.js 15',
        desc: 'Model Context Protocol (FastMCP) gateway integrating strict Human-in-the-Loop authorization for high-risk transfers.',
        link: 'https://github.com/KishorKumarParoi/advanced-ai-chatbot',
    },
    {
        id: 7,
        num: '07',
        title: 'Data Agent: Autonomous Multi-Agent BI & Self-Healing NL2SQL',
        stack: 'LangGraph Supervisor • DuckDB • Streamlit • Claude 3.5',
        desc: 'Supervisor agent delegating SQL generation, schema verification, and interactive visualization charts.',
        link: 'https://github.com/KishorKumarParoi/data-agent',
    },
    {
        id: 8,
        num: '08',
        title: 'Advanced Network Security Medallion Lakehouse',
        stack: 'Azure ADF • Databricks • Synapse CETAS • PowerBI',
        desc: 'Bronze-Silver-Gold enterprise data lakehouse analyzing 35M+ firewall packet telemetry logs.',
        link: 'https://github.com/KishorKumarParoi/network-security-lakehouse',
    },
    {
        id: 9,
        num: '09',
        title: 'AWS SageMaker End-to-End MLOps Pipeline',
        stack: 'SageMaker DAG • Spot Training • CloudWatch • Drift Alarms',
        desc: 'Cost-optimized automated ML lifecycle with automated hyperparameter tuning and model registry governance.',
        link: 'https://github.com/KishorKumarParoi/aws-sagemaker-mlops',
    },
    {
        id: 10,
        num: '10',
        title: 'Cloud-Native Real-Time MLOps: KServe & AWS ECS Fargate',
        stack: 'KServe v1beta1 • Terraform • Docker • GitHub Actions',
        desc: 'Serverless model serving mesh scaling from 0 to 100 replicas with Prometheus SLO tracking.',
        link: 'https://github.com/KishorKumarParoi/cloud-native-mlops',
    },
    {
        id: 11,
        num: '11',
        title: 'Bare-Metal Systems: Rust Git Engine & Async POSIX Shell',
        stack: 'Rust 1.85 • SIMD zlib • SHA-1 Treewalker • Tokio',
        desc: 'Zero-dependency version control plumbing and POSIX-compliant async shell runtime built from scratch.',
        link: 'https://github.com/KishorKumarParoi/bare-metal-systems',
    },
    {
        id: 12,
        num: '12',
        title: 'Koom-AI: Enterprise Asynchronous Video Intelligence Platform',
        stack: 'Next.js 16 • WebRTC • Whisper V3 • Redis Queue',
        desc: 'AI-first video interview analysis synthesizing facial micro-expressions, speech patterns, and technical accuracy.',
        link: 'https://koom-ai.vercel.app',
    },
    {
        id: 13,
        num: '13',
        title: 'User Survival Prediction: Astro CLI Airflow & Redis Feature Store',
        stack: 'Airflow • Redis (<2ms) • Alibi Drift • FastAPI',
        desc: 'Real-time feature serving cluster with automated retraining triggers and population drift analytics.',
        link: 'https://github.com/KishorKumarParoi/user-survival-prediction',
    },
    {
        id: 14,
        num: '14',
        title: 're:invent 3D: High-Fidelity WebGL Shaders & Live EDM Audio Mesh',
        stack: 'Three.js • GLSL Shaders • Web Audio API • React 19',
        desc: 'Metaverse architectural portfolio featuring interactive 3D hacker room, Clash RTS simulation, and real-time audio.',
        link: 'https://3d.kishor.tech',
    },
    {
        id: 15,
        num: '15',
        title: 'macOS Tahoe Portfolio: OS-Grade Windowing Web Environment',
        stack: 'React 19 • GSAP Draggable • TailwindCSS • Zustand',
        desc: 'Full-featured authentic Apple desktop operating system simulator with Finder, Terminal, Safari, and multi-tasking.',
        link: 'https://kishor.tech',
    },
]

const QUICK_COMMANDS = [
    { cmd: 'projects', desc: 'Catalog of 15 Enterprise Systems' },
    { cmd: 'skills', desc: 'AI, LLMOps & Lakehouse Arsenal' },
    { cmd: 'arch', desc: 'Neofetch 3D Metaverse Specs' },
    { cmd: 'experience', desc: 'Principal Architect Career Track' },
    { cmd: 'cp', desc: 'Competitive Coding Accolades' },
    { cmd: 'education', desc: 'RUET CSE & Academic Honors' },
    { cmd: 'contact', desc: 'Direct Communication Channels' },
    { cmd: 'matrix', desc: 'Cyberpunk Digital Rain Effect' },
    { cmd: 'clear', desc: 'Flush Terminal Buffer' },
]

export const CyberTerminal = () => {
    const [inputVal, setInputVal] = useState('')
    const [history, setHistory] = useState([
        {
            type: 'system',
            text: [
                '🌐 KISHOR KUMAR PAROI — 3D METAVERSE CYBERNETIC TERMINAL [v4.8.2]',
                'Type `help` or `projects` to inspect all 15 production AI systems.',
                '💡 Tip: Click any quick command chip below or press Tab for auto-completion.',
            ].join('\n'),
        },
    ])
    const [cmdHistory, setCmdHistory] = useState([])
    const [historyIndex, setHistoryIndex] = useState(-1)
    const [copied, setCopied] = useState(false)
    const [isMaximized, setIsMaximized] = useState(false)

    const terminalEndRef = useRef(null)
    const inputRef = useRef(null)

    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [history])

    const handleRunCommand = (commandStr) => {
        const trimmed = commandStr.trim()
        if (!trimmed) return

        const args = trimmed.split(/\s+/)
        const cmd = args[0].toLowerCase()

        setCmdHistory((prev) => [...prev, trimmed])
        setHistoryIndex(-1)

        const newEntries = [{ type: 'user', text: `paroi@3d-metaverse:~$ ${trimmed}` }]

        switch (cmd) {
            case 'help':
                newEntries.push({
                    type: 'output',
                    text: [
                        'AVAILABLE CYBERNETIC COMMANDS:',
                        '--------------------------------------------------------------------------------',
                        '  projects          List all 15 enterprise AI systems & production lakehouses',
                        '  project <1-15>    Deep-dive architectural inspect for a specific project',
                        '  skills            AI Architecture, LLMOps, Rust SIMD & Lakehouse arsenal',
                        '  arch / neofetch   Display 3D Metaverse node telemetry and hardware specs',
                        '  experience        Principal AI Architect track and founding experience',
                        '  cp / competitive  Codeforces Blue (232nd), CodeChef 5★, LeetCode 1000+',
                        '  education         RUET CSE (Rank 483rd in Bangladesh), Saint Joseph HSC',
                        '  contact           Reach Kishor via Email, Twitter/X, LinkedIn & GitHub',
                        '  matrix            Simulate cyber digital rain sequence',
                        '  clear             Clear active terminal screen buffer',
                        '--------------------------------------------------------------------------------',
                    ].join('\n'),
                })
                break

            case 'projects':
                newEntries.push({
                    type: 'output',
                    text: [
                        'PAROI PRODUCTION DIRECTORY (ALL 15 FLAGSHIP AI & SYSTEMS PROJECTS):',
                        '================================================================================',
                        ...ALL_15_PROJECTS.map(
                            (p) => `${p.num}. [${p.title}]\n    Stack: ${p.stack}\n    Summary: ${p.desc}\n    Repo: ${p.link}`
                        ),
                        '================================================================================',
                        '💡 Type `project 1` through `project 15` for individual system inspection.',
                        '🌐 Live macOS Desktop: https://kishor.tech | 3D Metaverse: https://3d.kishor.tech',
                    ].join('\n\n'),
                })
                break

            case 'project': {
                const pNum = parseInt(args[1], 10)
                const found = ALL_15_PROJECTS.find((p) => p.id === pNum)
                if (found) {
                    newEntries.push({
                        type: 'output',
                        text: [
                            `================================================================================`,
                            `PROJECT ${found.num}: ${found.title}`,
                            `--------------------------------------------------------------------------------`,
                            `ARCHITECTURAL STACK: ${found.stack}`,
                            `DESCRIPTION:         ${found.desc}`,
                            `REPOSITORY / URL:    ${found.link}`,
                            `STATUS:              PRODUCTION DEPLOYED (SLO: 99.9% Uptime)`,
                            `================================================================================`,
                        ].join('\n'),
                    })
                } else {
                    newEntries.push({
                        type: 'output',
                        text: `Error: Invalid project ID. Use 1 through 15 (e.g., 'project 1'). Type 'projects' for the full index.`,
                    })
                }
                break
            }

            case 'skills':
                newEntries.push({
                    type: 'output',
                    text: [
                        'CORE AI ARCHITECTURE & DISTRIBUTED SYSTEMS SKILLSET:',
                        '--------------------------------------------------------------------------------',
                        '• GenAI & LLMOps:        vLLM Multi-LoRA, NeMo Guardrails, FlashRank ONNX, LangGraph, RAGAS',
                        '• Medallion Lakehouses:  Snowflake, Databricks, Apache Iceberg, Delta Lake, PySpark, DuckDB',
                        '• Bare-Metal & Systems:  Rust 1.85 SIMD, Go 1.24, Linux POSIX Shell, High-Performance I/O',
                        '• MLOps & Production:    K8s / GKE, KServe, ArgoCD GitOps, Feast Feature Store, MLflow',
                        '• Real-Time Streaming:   Apache Kafka, Redis Feature Cache (<2ms), WebRTC, WebGL Shaders',
                        '• Platform & Security:   FastMCP Protocol, BotShield WAF, Zero-Trust IAM, SOC 2 / ISO 27001',
                        '--------------------------------------------------------------------------------',
                    ].join('\n'),
                })
                break

            case 'neofetch':
            case 'arch':
                newEntries.push({
                    type: 'output',
                    text: [
                        '       /\\          paroi@3d-metaverse',
                        '      /  \\         ------------------',
                        '     / /\\ \\        OS: 3D Metaverse Cyber Kernel 6.8 (x86_64)',
                        '    / /  \\ \\       Host: Three.js Real-Time Shader Engine',
                        '   / / /\\ \\ \\      Kernel: 6.8.0-metaverse-rt (Real-Time Preempt)',
                        '  / / /  \\ \\ \\     Uptime: 24/7 Continuous Streaming',
                        ' / / / /\\ \\ \\ \\    Shell: zsh 5.9 (cyber-x86_64)',
                        '/ / / /  \\ \\ \\ \\   Resolution: 3840x2160 Retina 4K',
                        '\\ \\ \\ \\  / / / /   CPU: Apple M-Series Ultra / 16x Intel Xeon Scalable',
                        ' \\ \\ \\ \\/ / / /    GPU: Dual NVIDIA H100 SXM5 80GB (NVLink Mesh)',
                        '  \\ \\ \\  / / /     Memory: 64 GB Unified LPDDR5',
                        '   \\ \\ \\/ / /      Lakehouse: Snowflake + Apache Iceberg Medallion',
                        '    \\ \\  / /       Status: Open for Principal AI Architect Roles',
                    ].join('\n'),
                })
                break

            case 'experience':
                newEntries.push({
                    type: 'output',
                    text: [
                        'PRINCIPAL ENGINEERING & ARCHITECTURAL CAREER TRACK:',
                        '--------------------------------------------------------------------------------',
                        '⭐ Principal AI Systems Architect (Contract / Advisory) (2024 – Present)',
                        '   - Architected Medallion Lakehouses (Snowflake, Databricks, PySpark) for 35M+ records.',
                        '   - Implemented Zero-Trust AI Agent Defense with NeMo Guardrails & FlashRank re-ranking.',
                        '',
                        '⭐ Founder & Lead Systems Architect — KOOM-AI (2023 – Present)',
                        '   - Built enterprise asynchronous video interview intelligence platform.',
                        '   - Engineered real-time micro-expression & technical proficiency synthesis mesh.',
                        '',
                        '⭐ AI & MLOps Infrastructure Engineer (2022 – 2024)',
                        '   - Deployed high-throughput KServe v1beta1 model clusters on GKE/K3s with ArgoCD.',
                        '   - Built sub-2ms real-time feature retrieval with Redis and Feast feature stores.',
                        '--------------------------------------------------------------------------------',
                    ].join('\n'),
                })
                break

            case 'cp':
            case 'competitive':
                newEntries.push({
                    type: 'output',
                    text: [
                        'COMPETITIVE PROGRAMMING & ALGORITHMIC DISTINCTIONS:',
                        '--------------------------------------------------------------------------------',
                        '🏆 Codeforces Div-2: Ranked 232nd in Div-2 (Blue Coder)',
                        '⭐ CodeChef: 5★ Rated Competitive Programmer (Rating 2000+)',
                        '🎯 IUPC: 17th Rank in National Inter-University Programming Contest',
                        '🏅 Meta Hacker Cup: Qualified for Round 3',
                        '🧠 LeetCode: 1000+ Algorithmic & Dynamic Programming problems mastered',
                        '--------------------------------------------------------------------------------',
                    ].join('\n'),
                })
                break

            case 'education':
                newEntries.push({
                    type: 'output',
                    text: [
                        'ACADEMIC BACKGROUND & HONORS:',
                        '--------------------------------------------------------------------------------',
                        '🎓 Rajshahi University of Engineering & Technology (RUET) (2018 – 2023)',
                        '   - Degree: B.Sc. in Computer Science & Engineering',
                        '   - Admission Merit: Rank 483rd in Bangladesh National Admission',
                        '',
                        '🎓 Saint Joseph Higher Secondary School, Dhaka (2015 – 2017)',
                        '   - Degree: Higher Secondary Certificate (HSC) | GPA: 5.00 / 5.00',
                        '   - Merit: Rank 85th in Dhaka Board Merit List',
                        '',
                        '🎓 S.J Govt Model High School, Gopalganj (2013 – 2015)',
                        '   - Degree: Secondary School Certificate (SSC) | GPA: 5.00 / 5.00',
                        '   - Merit: Rank 90th in Dhaka Board Merit List',
                        '--------------------------------------------------------------------------------',
                    ].join('\n'),
                })
                break

            case 'contact':
                newEntries.push({
                    type: 'output',
                    text: [
                        'COMMUNICATION CHANNELS & PROFILES:',
                        '--------------------------------------------------------------------------------',
                        '📧 Email:       kishorkumarparoi77@gmail.com',
                        '💼 LinkedIn:    https://www.linkedin.com/in/kishor-kumar-paroi/',
                        '🐙 GitHub:      https://github.com/KishorKumarParoi',
                        '🐦 X / Twitter: https://x.com/Mr_paroi (@Mr_paroi)',
                        '💬 WhatsApp:    +8801792638392',
                        '🌐 macOS UI:    https://kishor.tech',
                        '🚀 3D Realm:    https://3d.kishor.tech',
                        '--------------------------------------------------------------------------------',
                    ].join('\n'),
                })
                break

            case 'matrix':
                newEntries.push({
                    type: 'output',
                    text: [
                        'WAKE UP, NEO...',
                        'THE MATRIX HAS YOU.',
                        'FOLLOW THE WHITE RABBIT.',
                        'KNOCK, KNOCK, NEO.',
                        '01001011 01001001 01010011 01001000 01001111 01010010 (KISHOR)',
                        'SYSTEM SECURED: ZERO-TRUST AGENTIC MESH ACTIVE.',
                    ].join('\n'),
                })
                break

            case 'clear':
                setHistory([])
                setInputVal('')
                return

            default:
                newEntries.push({
                    type: 'output',
                    text: `bash: command not found: ${cmd}. Type 'help' or click a command chip below.`,
                })
                break
        }

        setHistory((prev) => [...prev, ...newEntries])
        setInputVal('')
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            handleRunCommand(inputVal)
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            if (cmdHistory.length > 0) {
                const nextIndex = historyIndex + 1 < cmdHistory.length ? historyIndex + 1 : historyIndex
                setHistoryIndex(nextIndex)
                setInputVal(cmdHistory[cmdHistory.length - 1 - nextIndex])
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            if (historyIndex > 0) {
                const nextIndex = historyIndex - 1
                setHistoryIndex(nextIndex)
                setInputVal(cmdHistory[cmdHistory.length - 1 - nextIndex])
            } else if (historyIndex === 0) {
                setHistoryIndex(-1)
                setInputVal('')
            }
        } else if (e.key === 'Tab') {
            e.preventDefault()
            const match = QUICK_COMMANDS.map((q) => q.cmd).find((c) => c.startsWith(inputVal.trim().toLowerCase()))
            if (match) setInputVal(match)
        }
    }

    const copyTerminalLog = () => {
        const text = history.map((h) => h.text).join('\n')
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section id="terminal" className="relative w-full py-16 bg-black text-white overflow-hidden border-t border-white/10">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-10 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
                            <TerminalIcon className="size-4 animate-pulse text-emerald-400" />
                            <span>Interactive Cybernetic Console • CLI Node</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                            <span className="bg-linear-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                                3D Metaverse
                            </span>
                            <span className="text-white"> Terminal</span>
                        </h2>
                    </div>

                    <p className="text-sm md:text-base text-gray-400 max-w-md font-mono">
                        Type <code className="text-cyan-300 font-bold bg-cyan-950/80 px-1.5 py-0.5 rounded border border-cyan-500/30">projects</code> to inspect all 15 flagship production systems, or tap any quick chip.
                    </p>
                </div>

                {/* Main Terminal Window */}
                <div
                    className={`relative rounded-2xl border border-cyan-500/30 bg-[#070b14]/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 transition-all duration-300 overflow-hidden ${
                        isMaximized ? 'h-[750px]' : 'h-[520px]'
                    }`}
                >
                    {/* Terminal Title Bar */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-[#0d1424] border-b border-cyan-500/20 select-none">
                        <div className="flex items-center gap-2">
                            <span className="size-3 rounded-full bg-rose-500/80 hover:bg-rose-400 cursor-pointer shadow-xs shadow-rose-500/50" />
                            <span className="size-3 rounded-full bg-amber-500/80 hover:bg-amber-400 cursor-pointer shadow-xs shadow-amber-500/50" />
                            <span className="size-3 rounded-full bg-emerald-500/80 hover:bg-emerald-400 cursor-pointer shadow-xs shadow-emerald-500/50" />
                            <span className="ml-3 text-[11px] font-mono text-gray-400 flex items-center gap-1.5">
                                <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                                <span>paroi@3d-metaverse: ~/projects (zsh)</span>
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={copyTerminalLog}
                                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-[11px] font-mono transition cursor-pointer border border-white/10"
                                title="Copy Terminal Output"
                            >
                                {copied ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3" />}
                                <span>{copied ? 'Copied' : 'Copy'}</span>
                            </button>
                            <button
                                onClick={() => setHistory([])}
                                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition cursor-pointer border border-white/10"
                                title="Reset Screen"
                            >
                                <RotateCcw className="size-3.5" />
                            </button>
                            <button
                                onClick={() => setIsMaximized((m) => !m)}
                                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition cursor-pointer border border-white/10"
                                title={isMaximized ? 'Restore Size' : 'Maximize Window'}
                            >
                                {isMaximized ? <Minimize2 className="size-3.5" /> : <Maximize2 className="size-3.5" />}
                            </button>
                        </div>
                    </div>

                    {/* Terminal Output Body */}
                    <div
                        onClick={() => inputRef.current?.focus()}
                        className="p-4 md:p-6 h-[calc(100%-80px)] overflow-y-auto font-mono text-xs md:text-[13px] leading-relaxed space-y-3 cursor-text selection:bg-cyan-500 selection:text-black"
                    >
                        {history.map((entry, idx) => (
                            <div key={idx} className="whitespace-pre-wrap break-words">
                                {entry.type === 'user' && (
                                    <div className="text-cyan-400 font-bold flex items-center gap-2">
                                        <span>❯</span>
                                        <span>{entry.text}</span>
                                    </div>
                                )}
                                {entry.type === 'system' && (
                                    <div className="text-emerald-400/90 bg-emerald-950/20 border border-emerald-500/20 p-3 rounded-xl">
                                        {entry.text}
                                    </div>
                                )}
                                {entry.type === 'output' && (
                                    <div className="text-gray-300 bg-black/40 p-3 rounded-xl border border-white/5">
                                        {entry.text}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Interactive Active Input Prompt */}
                        <div className="flex items-center gap-2 pt-1 text-cyan-400">
                            <span className="font-bold text-emerald-400">paroi@3d-metaverse:~$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={inputVal}
                                onChange={(e) => setInputVal(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type 'projects' or click below..."
                                className="flex-1 bg-transparent text-white outline-none font-mono text-xs md:text-[13px] caret-cyan-400"
                                autoFocus
                            />
                        </div>

                        <div ref={terminalEndRef} />
                    </div>

                    {/* Terminal Footer Status */}
                    <div className="absolute bottom-0 inset-x-0 px-4 py-1.5 bg-[#090e1a] border-t border-cyan-500/20 flex items-center justify-between text-[11px] font-mono text-gray-400 select-none">
                        <div className="flex items-center gap-3">
                            <span className="text-cyan-400 font-bold">MODE: INTERACTIVE</span>
                            <span className="hidden sm:inline">•</span>
                            <span className="hidden sm:inline">15 PROJECTS LOADED</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-emerald-400">UTF-8</span>
                            <span>•</span>
                            <span className="text-amber-400">LATENCY &lt;1ms</span>
                        </div>
                    </div>
                </div>

                {/* Quick Command Action Chips Bar */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider mr-1">Quick Run:</span>
                    {QUICK_COMMANDS.map((q) => (
                        <button
                            key={q.cmd}
                            onClick={() => handleRunCommand(q.cmd)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/40 text-gray-300 hover:text-cyan-300 text-xs font-mono transition cursor-pointer active:scale-95 shadow-sm"
                            title={q.desc}
                        >
                            <span className="text-cyan-400 font-bold">❯</span>
                            <span>{q.cmd}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CyberTerminal
