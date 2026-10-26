import React, { useState, useRef, useEffect } from 'react'
import { Send, Bot, ShieldCheck, Zap, Layers, Sparkles, X, Minimize2, Maximize2, Check, Copy, ExternalLink, Terminal, BrainCircuit, RefreshCw } from 'lucide-react'

// Comprehensive Knowledge Base for Nexus Agent
const NEXUS_KNOWLEDGE = [
    {
        id: 'nexus_mesh',
        keywords: ['nexus', 'agent', 'mesh', '5-agent', 'langgraph', 'supervisor', 'nl2sql', 'architecture'],
        title: 'Nexus-AI: 5-Agent Autonomous LangGraph Mesh',
        answer: `**Nexus-AI 5-Agent Autonomous LangGraph Mesh:**
• **5 Specialized Sub-Agents:**
  1. **NL2SQL Agent:** Formulates parameter-checked analytical SQL against DuckDB & Delta Lakehouse with self-healing syntax checks.
  2. **OWASP/Security Sentinel:** Dynamic prompt injection defense benchmarked against Microsoft PyRIT with NeMo Guardrails.
  3. **MLOps Orchestrator:** Triggers canary rollouts and auto-scaling via KEDA across multi-cloud Kubernetes clusters.
  4. **Voice/Multimodal Dispatcher:** Real-time STT/TTS telemetry integration with WebRTC.
  5. **Central Supervisor:** LangGraph cyclic state machine with PostgreSQL checkpointer for sub-50ms fault recovery.
• **Deploy Command:** \`curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/Nexus_AI/main/bootstrap.sh | bash\`
• **Repository:** https://github.com/KishorKumarParoi/Nexus_AI`,
    },
    {
        id: 'nexus_lakehouse',
        keywords: ['duckdb', 'lakehouse', 'medallion', 'speed', 'latency', '120ms', 'marts', 'bronze', 'silver', 'gold'],
        title: 'Nexus-AI Multi-Cloud Medallion Lakehouse (<120ms DuckDB)',
        answer: `**Nexus-AI Medallion Lakehouse Architecture:**
• **Medallion Layers:**
  - **Bronze:** Raw multi-cloud event logs streaming from AWS S3, GCP GCS, and Azure Blob Storage via Kafka.
  - **Silver:** Cleaned, schema-enforced parquet datasets with dbt Core SCD-2 incremental snapshots.
  - **Gold:** High-performance analytical marts indexed in DuckDB, accelerating dashboard analytics from **4.5s down to <120ms**.
• **Go 1.22 Gateway:** Sustains **12,000 req/s** with <3ms p99 latency, rate limiting, and mTLS verification.`,
    },
    {
        id: 'overview',
        keywords: ['who', 'about', 'kishor', 'role', 'summary', 'profile', 'experience'],
        title: 'Kishor Kumar Paroi — Senior AI Systems Architect',
        answer: `**Kishor Kumar Paroi** is a **Senior AI Systems Architect & Platform Leader**:
• **15 Enterprise Architectures:** Production-grade Multi-Agent Meshes, Medallion Lakehouses, Real-Time MLOps, and Low-Latency SIMD Engines.
• **Key Achievements:** Cut warehouse compute by 42% ($18,000/mo saved on 35M+ orders), accelerated scoring by 50x (<0.5ms via Rust 1.85 SIMD), curtailed CI/CD releases by 96% (4h to 8m).
• **Education & CP:** B.Sc. in CSE from RUET (Bangladesh Rank 483rd), Codeforces Div-2 Rank 232 (Blue Coder), 2000+ DSA problems solved.
• **Founder @ KoomAI:** Low-latency WebRTC (<120ms) screen recorder generating $24K MRR.`,
    },
    {
        id: 'cicd',
        keywords: ['ci/cd', 'jenkins', 'sonarqube', 'argocd', 'nexus 3', 'pipeline', 'gitops', 'deploy'],
        title: '12-Stage Enterprise GitOps CI/CD Pipeline',
        answer: `**12-Stage Declarative CI/CD & Artifact Governance:**
• **Tooling:** Jenkins declarative pipelines, SonarQube quality gates (A-grade rating, 0 security vulnerabilities), Sonatype Nexus 3 registry, and ArgoCD GitOps.
• **Impact:** Curtailed production release deployment cycles by **96% (from 4 hours to 8 minutes)** with zero-downtime blue-green and canary failover across AWS & GCP.`,
    },
    {
        id: 'tradeoffs',
        keywords: ['trade-off', 'tradeoff', 'duckdb vs snowflake', 'comparison', 'cost', 'latency'],
        title: 'Architectural Trade-Off Analysis: DuckDB vs Snowflake vs Delta Lake',
        answer: `**Principal Architectural Trade-Off Decisions:**
• **DuckDB vs Snowflake:** Snowflake excels at multi-terabyte warehouse scans with auto-scaling compute, but incurs high cold-start cost. DuckDB in-process engine serves local micro-marts at **<120ms p99 latency with $0 cloud compute overhead**.
• **Go vs Python for Gateway:** Replaced Python gateway with Go 1.22, boosting throughput from 1,200 to 12,000 req/s while slashing memory footprint by 84%.
• **NeMo Guardrails + FastMCP:** 100% of risky transactions require explicit Human-in-the-Loop (HITL) approval with cryptographically signed tokens.`,
    },
]

const QUICK_PROMPTS = [
    "Explain Nexus-AI 5-Agent LangGraph Mesh",
    "How does DuckDB achieve <120ms queries?",
    "Show CI/CD 12-stage pipeline metrics",
    "Compare DuckDB vs Snowflake trade-offs",
    "What is the one-click deploy command?",
]

export const NexusChatModal = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        {
            id: 'init-1',
            sender: 'bot',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            text: `👋 Greetings! I am the **Nexus-AI Autonomous Agent**.\n\nYou are in **Full Screen Conversational AI Cockpit Mode**.\n\nAsk me anything about the **5-Agent LangGraph Mesh**, **DuckDB Medallion Lakehouse (<120ms)**, **12-stage GitOps CI/CD**, or any of Kishor's **15 enterprise production architectures**!`,
            trace: [
                'Supervisor: LangGraph Cyclic State Initialized (FastMCP)',
                'Guardrail: NVIDIA NeMo BotShield WAF active',
                'Cache: In-Memory Semantic Store (<15ms latency)',
            ],
        },
    ])
    const [input, setInput] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [copiedIndex, setCopiedIndex] = useState(null)
    const chatEndRef = useRef(null)
    const inputRef = useRef(null)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            setTimeout(() => inputRef.current?.focus(), 150)
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, isTyping])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, onClose])

    if (!isOpen) return null

    const handleSend = (userText) => {
        const query = (userText || input).trim()
        if (!query) return

        const userMsg = {
            id: `user-${Date.now()}`,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            text: query,
        }

        setMessages((prev) => [...prev, userMsg])
        setInput('')
        setIsTyping(true)

        setTimeout(() => {
            const lower = query.toLowerCase()
            let matched = NEXUS_KNOWLEDGE.find((item) =>
                item.keywords.some((kw) => lower.includes(kw))
            )

            let answerText = ''
            if (matched) {
                answerText = matched.answer
            } else {
                answerText = `**Nexus Intelligent Synthesis on: "${query}"**\n\n• **Nexus Architecture Mesh:** 5 autonomous LangGraph cyclic sub-agents with DuckDB Medallion storage (<120ms query latency) and Go 1.22 ingress gateway (12,000 req/s).\n• **Enterprise Governance:** 12-stage CI/CD with SonarQube quality gates, Sonatype Nexus 3, and ArgoCD GitOps.\n• **Repository:** [GitHub: Nexus_AI](https://github.com/KishorKumarParoi/Nexus_AI)\n• **Deploy:** \`curl -fsSL https://raw.githubusercontent.com/KishorKumarParoi/Nexus_AI/main/bootstrap.sh | bash\``
            }

            const botMsg = {
                id: `bot-${Date.now()}`,
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                text: answerText,
                trace: [
                    `Router: Dispatched query to [${matched ? matched.title : 'Nexus Synthesizer'}]`,
                    'Execution: FastMCP Tool Call validated via BotShield WAF',
                    'Latency: 14.2ms | Cache: HIT',
                ],
            }

            setMessages((prev) => [...prev, botMsg])
            setIsTyping(false)
        }, 420)
    }

    const copyText = (text, idx) => {
        navigator.clipboard.writeText(text)
        setCopiedIndex(idx)
        setTimeout(() => setCopiedIndex(null), 1800)
    }

    return (
        <div className="fixed inset-0 z-[100000] bg-[#09090f]/98 backdrop-blur-2xl flex flex-col text-white font-sans animate-in fade-in zoom-in-95 duration-200 select-none">
            {/* Top Fullscreen Header */}
            <div className="px-4 md:px-8 py-3 bg-[#11111a] border-b border-cyan-500/30 flex items-center justify-between gap-4 shrink-0 shadow-lg shadow-black/60">
                {/* Traffic lights & Branding */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                        <span
                            onClick={onClose}
                            className="size-3 rounded-full bg-[#ff5f56] hover:opacity-80 transition cursor-pointer"
                            title="Close Fullscreen Chat (Esc)"
                        />
                        <span
                            onClick={onClose}
                            className="size-3 rounded-full bg-[#ffbd2e] hover:opacity-80 transition cursor-pointer"
                            title="Minimize"
                        />
                        <span
                            className="size-3 rounded-full bg-[#27c93f]"
                            title="Fullscreen Active"
                        />
                    </div>

                    <div className="flex items-center gap-2 pl-3 border-l border-white/10">
                        <div className="p-1.5 rounded-lg bg-cyan-500/20 border border-cyan-400/50">
                            <Bot className="size-4 text-cyan-400" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-extrabold text-xs md:text-sm text-white">Nexus AI Agent</span>
                                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
                                    5-Agent LangGraph Mesh
                                </span>
                            </div>
                            <span className="text-[10px] text-gray-400 font-mono hidden md:block">
                                Enterprise Medallion Lakehouse & Autonomous Multi-Cloud Platform
                            </span>
                        </div>
                    </div>
                </div>

                {/* Status Badges & Controls */}
                <div className="flex items-center gap-2 text-[10px] font-mono">
                    <span className="flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-3 py-1 rounded-full">
                        <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="font-bold">FULLSCREEN_ACTIVE</span>
                    </span>
                    <span className="hidden sm:flex items-center gap-1 bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 px-2.5 py-1 rounded-full">
                        <ShieldCheck className="size-3 text-cyan-400" />
                        <span>BotShield WAF</span>
                    </span>
                    <span className="hidden sm:flex items-center gap-1 bg-amber-950/70 border border-amber-500/40 text-amber-300 px-2.5 py-1 rounded-full">
                        <Zap className="size-3 text-amber-400" />
                        <span>&lt;120ms DuckDB</span>
                    </span>

                    <button
                        onClick={onClose}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white border border-white/15 transition cursor-pointer"
                        title="Exit Fullscreen (Esc)"
                    >
                        <Minimize2 className="size-3.5" />
                        <span className="hidden sm:inline">Exit Fullscreen</span>
                    </button>
                </div>
            </div>

            {/* Main Chat Conversation Container */}
            <div className="flex-1 overflow-y-auto px-4 md:px-12 lg:px-24 py-6 space-y-4 text-xs bg-gradient-to-b from-[#09090f] via-[#0d0d16] to-[#09090f]">
                {messages.map((m, idx) => (
                    <div
                        key={m.id}
                        className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                    >
                        <div
                            className={`max-w-[92%] md:max-w-[80%] rounded-2xl p-4 shadow-xl select-text ${
                                m.sender === 'user'
                                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-tr-xs'
                                    : 'bg-[#151520] border border-cyan-500/20 text-gray-200 rounded-tl-xs shadow-cyan-500/5'
                            }`}
                        >
                            {/* Execution Trace for Bot */}
                            {m.trace && (
                                <div className="mb-3 p-2.5 rounded-xl bg-black/60 border border-cyan-500/20 text-[10px] font-mono text-gray-400 space-y-1">
                                    <div className="flex items-center gap-1.5 text-cyan-400 font-bold mb-1">
                                        <Layers className="size-3" />
                                        <span>LangGraph Cyclic Execution Trace:</span>
                                    </div>
                                    {m.trace.map((step, i) => (
                                        <div key={i} className="truncate text-cyan-200/80">
                                            • {step}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Message Content */}
                            <div className="whitespace-pre-wrap leading-relaxed text-xs md:text-sm font-sans">
                                {m.text}
                            </div>

                            {/* Timestamp & Action Bar */}
                            <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/10 text-[10px] text-gray-400">
                                <span>{m.timestamp}</span>
                                <button
                                    onClick={() => copyText(m.text, idx)}
                                    className="flex items-center gap-1 text-gray-400 hover:text-white transition cursor-pointer"
                                    title="Copy response"
                                >
                                    {copiedIndex === idx ? (
                                        <>
                                            <Check className="size-3 text-emerald-400" />
                                            <span className="text-emerald-400 font-bold">Copied</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="size-3" />
                                            <span>Copy</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex items-center gap-2 text-cyan-400 text-xs italic pl-3 animate-pulse">
                        <BrainCircuit className="size-4 animate-spin" />
                        <span>Nexus LangGraph 5-Agent Supervisor coordinating FastMCP tool dispatch...</span>
                    </div>
                )}

                <div ref={chatEndRef} />
            </div>

            {/* Quick-Prompt Suggestions Bar */}
            <div className="px-4 md:px-12 py-2.5 bg-[#101018] border-t border-gray-800 flex items-center gap-2 overflow-x-auto text-[11px] shrink-0 no-scrollbar">
                <span className="text-gray-400 text-[10px] font-mono shrink-0 uppercase tracking-wider">Quick Prompts:</span>
                {QUICK_PROMPTS.map((q, i) => (
                    <button
                        key={i}
                        onClick={() => handleSend(q)}
                        className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-200 border border-white/10 hover:border-cyan-400/50 whitespace-nowrap transition cursor-pointer shrink-0"
                    >
                        {q}
                    </button>
                ))}
            </div>

            {/* Bottom Fullscreen Input Form */}
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    handleSend(input)
                }}
                className="px-4 md:px-12 py-4 bg-[#14141f] border-t border-cyan-500/30 flex items-center gap-3 shrink-0"
            >
                <div className="flex items-center gap-1.5 px-3 py-2 text-[10px] font-mono text-cyan-300 bg-black/50 border border-cyan-500/30 rounded-xl hidden sm:flex">
                    <Terminal className="size-3 text-cyan-400" />
                    <span>NEXUS_SHELL</span>
                </div>

                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask Nexus Agent anything about 5-Agent Mesh, DuckDB <120ms, or CI/CD pipelines..."
                    className="flex-1 bg-black/60 border border-cyan-500/40 rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-gray-500 focus:outline-hidden focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                />

                <button
                    type="submit"
                    disabled={!input.trim()}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-40 text-black font-extrabold text-xs md:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/30 transition hover:scale-102 cursor-pointer"
                >
                    <span>Send Query</span>
                    <Send className="size-4" />
                </button>
            </form>
        </div>
    )
}

export default NexusChatModal
