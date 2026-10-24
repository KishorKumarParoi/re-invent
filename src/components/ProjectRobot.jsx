import React, { useState, useEffect } from 'react'
import { Bot, Sparkles, ChevronRight, ChevronLeft, Lightbulb, Zap, ShieldCheck, ArrowRight, BrainCircuit } from 'lucide-react'

const ROBOT_INSIGHTS = [
    {
        projectId: 'zomato',
        projectName: 'Zomato AI Lakehouse',
        metric: '$18K/mo Saved • 35M+ Orders',
        quote: "Did you know? In the Zomato Lakehouse, converting brute-force table scans into dbt Core SCD-2 incremental snapshots curtailed warehouse compute by 42% ($18,000/mo savings), while Feast Redis feature store achieved sub-5ms serving!",
        tag: "Data Engineering & Lakehouse",
    },
    {
        projectId: 'hybrid',
        projectName: 'Hybrid Anime Intelligence',
        metric: '<0.5ms SIMD • 50x Speedup',
        quote: "Did you know? Rewriting vector scoring routines in Rust 1.85 SIMD instructions reduced latency from 25ms to <0.5ms (a 50x speedup), slashing AWS EC2 compute spend by 64% while vLLM Multi-LoRA boosted throughput 3.4x!",
        tag: "Low-Latency & LLMOps",
    },
    {
        projectId: 'security',
        projectName: 'Enterprise AI Security Gateway',
        metric: '95%+ Injection Block • <50ms Cache',
        quote: "Did you know? NVIDIA NeMo Guardrails + BotShield WAF blocked over 95% of jailbreaks and prompt injections benchmarked against Microsoft PyRIT, while <50ms semantic similarity caching saved $8.4K/month!",
        tag: "AI Security & Guardrails",
    },
    {
        projectId: 'smart',
        projectName: 'Smart Manufacturing AI',
        metric: '$420K Saved • 96% Deploy Cut',
        quote: "Did you know? Industrial IoT defect autoencoders on PyTorch and Rust SIMD edge pre-filters reduced part escape defect rates by 31%, saving $420,000 annually, while Jenkins + ArgoCD cut deployment cycles by 96%!",
        tag: "Edge AI & Industrial MLOps",
    },
    {
        projectId: 'nexus',
        projectName: 'Nexus-AI Lakehouse Mesh',
        metric: '<120ms DuckDB • 12K req/s',
        quote: "Did you know? Our 3-tier Medallion Lakehouse in DuckDB accelerated dashboard queries from 4.5s down to <120ms, coordinated by a 5-agent LangGraph supervisor and Go 1.22 API gateway sustaining 12K req/s!",
        tag: "Multi-Agent & Analytics",
    },
    {
        projectId: 'chatbot',
        projectName: 'Autonomous AI Chatbot',
        metric: 'Sub-50ms Recovery • 99.4% Defense',
        quote: "Did you know? LangGraph cyclic state machines with PostgreSQL checkpointers enabled sub-50ms session recovery and dynamic rollbacks, while FastMCP Human-in-the-Loop gates eliminated 100% of unauthorized transaction risk!",
        tag: "FastMCP & State Machines",
    },
    {
        projectId: 'dataagent',
        projectName: 'Data Agent BI & SQL',
        metric: '96.2% Routing • 89% Self-Healing',
        quote: "Did you know? Dynamic PostgreSQL schema introspection with an independent LLM security judge programmatically healed 89% of initial query syntax errors without human intervention while blocking 100% of SQL injections!",
        tag: "Self-Healing AI & SQL",
    },
    {
        projectId: 'azure_etl',
        projectName: 'Azure Databricks & Synapse CETAS',
        metric: '1.4B Records • 6.2x Faster Queries',
        quote: "Did you know? Synapse CETAS external tables coupled with dynamic partition pruning and Z-Order clustering accelerated complex join queries by 6.2x across 1.4 Billion security log records!",
        tag: "Big Data & Cloud Lakehouse",
    },
    {
        projectId: 'sagemaker',
        projectName: 'AWS SageMaker DAG Governance',
        metric: '70% Compute Cost Reduction',
        quote: "Did you know? SageMaker DAG Pipelines leveraging AWS Managed Spot Training slashed model training compute costs by 70%, with automated S3 DataCapture for live inference drift telemetry!",
        tag: "AWS Cloud MLOps",
    },
    {
        projectId: 'realtime_mlops',
        projectName: 'Real-Time MLOps: KServe',
        metric: 'Scale-to-Zero • 65% Idle Savings',
        quote: "Did you know? KServe v1beta1 serverless inference on Kubernetes enabled dynamic scale-to-zero autoscaling, curtailing idle GPU/CPU compute spend by 65% with Envoy 90/10 automated canary routing!",
        tag: "Kubernetes & Serverless",
    },
    {
        projectId: 'rustgit',
        projectName: 'Rust Git Engine & POSIX Shell',
        metric: 'Sub-Microsecond • 100% Safe',
        quote: "Did you know? The bare-metal Git internals implemented in Rust 1.85 matched C Git performance within 3% while guaranteeing 100% compile-time memory safety and 73% lower peak heap allocation!",
        tag: "Systems Programming",
    },
    {
        projectId: 'koom',
        projectName: 'KOOM-AI Video Intelligence',
        metric: '<120ms WebRTC • $24K MRR',
        quote: "Did you know? KOOM-AI's low-latency WebRTC media pipeline powered 50,000+ active video minutes at 60 FPS 1080p with Electron native NVENC capture, generating $24K MRR with Next.js 16!",
        tag: "WebRTC & Full-Stack",
    },
]

export const ProjectRobot = ({ onSelectProject }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isWalking, setIsWalking] = useState(true)

    const currentInsight = ROBOT_INSIGHTS[currentIndex]

    const nextInsight = () => {
        setCurrentIndex((prev) => (prev + 1) % ROBOT_INSIGHTS.length)
    }

    const prevInsight = () => {
        setCurrentIndex((prev) => (prev - 1 + ROBOT_INSIGHTS.length) % ROBOT_INSIGHTS.length)
    }

    // Auto-walk every 8 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextInsight()
        }, 8500)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative my-10 p-6 md:p-8 rounded-3xl bg-linear-to-r from-gray-950 via-slate-950 to-gray-950 border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 overflow-hidden">
            {/* Ambient Background Lights */}
            <div className="absolute top-0 right-1/4 size-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 size-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 justify-between">
                {/* 3D Animated Cyber Robot Avatar */}
                <div className="flex flex-col items-center shrink-0">
                    <div className="relative group cursor-pointer" onClick={nextInsight} title="Click robot to inspect next architectural secret!">
                        {/* Jet Thruster Glow */}
                        <div className="absolute -bottom-3 inset-x-4 h-6 bg-cyan-400/50 rounded-full blur-md animate-pulse" />

                        {/* Robot Body Container */}
                        <div className="relative size-28 md:size-32 rounded-3xl bg-linear-to-br from-slate-900 via-cyan-950 to-slate-900 border-2 border-cyan-400/60 p-3 shadow-xl shadow-cyan-500/30 flex flex-col items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
                            {/* Robot Head Antenna */}
                            <div className="absolute -top-3 size-2.5 rounded-full bg-cyan-400 animate-ping" />
                            <div className="absolute -top-1.5 w-0.5 h-2 bg-cyan-400" />

                            {/* Robot Eyes Visor */}
                            <div className="w-20 h-7 rounded-xl bg-black border border-cyan-400/80 flex items-center justify-around px-2 mb-2 shadow-inner">
                                <span className="size-2 rounded-full bg-cyan-400 animate-pulse shadow-md shadow-cyan-400" />
                                <div className="h-0.5 w-6 bg-cyan-400/40" />
                                <span className="size-2 rounded-full bg-emerald-400 animate-pulse shadow-md shadow-emerald-400" />
                            </div>

                            {/* Core Badge */}
                            <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-cyan-300 bg-black/60 px-2 py-0.5 rounded-full border border-cyan-500/40">
                                <BrainCircuit className="size-3 text-cyan-400 animate-spin" />
                                <span>AI BOT</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-3">
                        <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                            ARCHITECT_BOT v5.4
                        </span>
                        <div className="text-[10px] text-gray-400">
                            Walking through 12 Flagship Projects
                        </div>
                    </div>
                </div>

                {/* Thought-Provoking Flashcard Bubble */}
                <div className="flex-1 max-w-3xl bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pb-3 border-b border-white/10">
                        <div className="flex items-center gap-2">
                            <span className="text-amber-400 text-xs font-mono font-bold bg-amber-950/70 border border-amber-800/50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                                <Lightbulb className="size-3" />
                                <span>Project #{currentIndex + 1} of 12</span>
                            </span>
                            <span className="text-xs font-mono font-semibold text-cyan-300">
                                {currentInsight.tag}
                            </span>
                        </div>

                        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800/50 px-2.5 py-0.5 rounded-full">
                            {currentInsight.metric}
                        </span>
                    </div>

                    {/* Project Title */}
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                        {currentInsight.projectName}
                    </h4>

                    {/* Quote / Thought Provoking Highlight */}
                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-4">
                        {currentInsight.quote}
                    </p>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                        <div className="flex items-center gap-1">
                            {ROBOT_INSIGHTS.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                                        idx === currentIndex ? 'w-6 bg-cyan-400' : 'w-2 bg-white/20 hover:bg-white/40'
                                    }`}
                                    title={`View Project ${idx + 1}`}
                                />
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={prevInsight}
                                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                                title="Previous Project Insight"
                            >
                                <ChevronLeft className="size-4" />
                            </button>
                            <button
                                onClick={nextInsight}
                                className="p-1.5 rounded-full bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 border border-cyan-500/40 transition cursor-pointer"
                                title="Next Project Insight"
                            >
                                <ChevronRight className="size-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectRobot
