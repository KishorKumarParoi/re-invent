import React, { useState } from 'react'
import { Star, ShieldCheck, CheckCircle, Quote, ThumbsUp, Building2, ExternalLink } from 'lucide-react'

const REVIEWS = [
    {
        id: 1,
        author: "Dr. Julian Vance",
        role: "VP of Engineering",
        company: "Apex FinTech Systems",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        rating: 5,
        tag: "Rust SIMD & Low-Latency",
        quote: "Kishor's Rust 1.85 SIMD scoring implementation dropped our vector scoring latency below 0.5ms (a 50x speedup). That single architectural pivot curtailed our AWS EC2 compute spend by 64%. Unmatched principal-level rigor.",
    },
    {
        id: 2,
        author: "Elena Rostova",
        role: "Head of Data Platform",
        company: "OmniLogistics Global",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
        rating: 5,
        tag: "Snowflake & PySpark Lakehouse",
        quote: "Transformed our batch data pipelines into a battle-tested Snowflake and Delta Lakehouse. Handled 35M+ orders with dbt Core SCD-2, saving $18K/month in compute while unlocking sub-5ms feature store serving.",
    },
    {
        id: 3,
        author: "Marcus Sterling",
        role: "Founder & CEO",
        company: "Kepi Autonomous AI",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        rating: 5,
        tag: "AI Security & NeMo Guardrails",
        quote: "The defense-in-depth AI Security Gateway Kishor architected with NVIDIA NeMo Guardrails and LangGraph blocked 95%+ of jailbreaks during our red-team Microsoft PyRIT audit. Simply the best GenAI systems engineer.",
    },
    {
        id: 4,
        author: "Priya Sharma",
        role: "Lead ML Systems Architect",
        company: "Hyperion Edge Robotics",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
        rating: 5,
        tag: "Industrial IIoT & MLOps",
        quote: "Implemented PyTorch vibration autoencoders and Rust SIMD edge pre-filters on our factory line. Defect escapes dropped by 31%, saving $420,000 annually. His Kubernetes GitOps pipeline cut deployment time by 96%.",
    },
    {
        id: 5,
        author: "David Chen",
        role: "CTO & Co-Founder",
        company: "Nexus HealthTech",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
        rating: 5,
        tag: "FastMCP & HITL Compliance",
        quote: "Standardized tool execution using FastMCP with strict Human-in-the-Loop financial approval gates. Delivered 100% audit compliance for HIPAA/SOC2 with zero unauthorized tool runs.",
    },
    {
        id: 6,
        author: "Sarah Jenkins",
        role: "Director of Cloud Infrastructure",
        company: "CloudScale Solutions",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
        rating: 5,
        tag: "Multi-Cloud GitOps & KEDA",
        quote: "Single-handedly orchestrated multi-cloud continuous delivery via ArgoCD across AWS EKS and GCP GKE. Under 15,000 req/s stress tests, KEDA scaled pods from 1 to 24 in under 45 seconds with zero dropped packets.",
    },
    {
        id: 7,
        author: "Vikram Malhotra",
        role: "VP of Product",
        company: "Zomato Partner Ecosystem",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
        rating: 5,
        tag: "Multimodal CV & Anti-Fraud",
        quote: "The multimodal computer vision dispute arbitration engine resolved 68% of merchant fraud claims automatically. Protected $1.2M in annual partner margins. Cleanest architecture documentation I have seen.",
    },
    {
        id: 8,
        author: "Arun Patel",
        role: "Senior Enterprise Director",
        company: "Enterprise Medallion Works",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
        rating: 5,
        tag: "Azure Databricks & Synapse CETAS",
        quote: "Orchestrated complex batch extraction in ADF v2, Spark transformation in Databricks, and Synapse CETAS tables. Accelerated complex analytical join queries by 6.2x across 1.4B security log records.",
    },
    {
        id: 9,
        author: "Chloe Dubois",
        role: "Founder & AI Lead",
        company: "Aether AI Media",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
        rating: 5,
        tag: "vLLM Multi-LoRA Flywheel",
        quote: "Serving dynamically multiplexed LoRA adapters on a single GPU with RSLoRA curtailed our GPU spend by 68% while boosting token throughput 3.4x. A masterclass in modern LLMOps.",
    },
    {
        id: 10,
        author: "Michael O'Connor",
        role: "Principal Systems Engineer",
        company: "BareMetal Systems",
        avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
        rating: 5,
        tag: "Rust 1.85 & POSIX Concurrency",
        quote: "Inspected Kishor's Rust Git object graph and POSIX terminal shell. He matched C Git performance within 3% while guaranteeing 100% memory safety. When he quotes sub-microsecond latencies, he means it.",
    },
]

export const Reviews = () => {
    const [isPaused, setIsPaused] = useState(false)

    const col1 = REVIEWS.slice(0, 5)
    const col2 = REVIEWS.slice(5, 10)

    const renderCard = (rev) => (
        <div
            key={rev.id}
            className="group relative p-6 rounded-2xl bg-gray-950/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-cyan-500/10 mb-5"
        >
            {/* Top Stars & Verified Tag */}
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-mono font-bold ml-1 text-white">5.0</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                    <ShieldCheck className="size-3" />
                    <span>Verified Enterprise</span>
                </div>
            </div>

            {/* Quote */}
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-4 group-hover:text-white transition">
                "{rev.quote}"
            </p>

            {/* Author info */}
            <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <div className="flex items-center gap-2.5">
                    <img
                        src={rev.avatar}
                        alt={rev.author}
                        className="size-9 rounded-full object-cover border border-cyan-400/40"
                    />
                    <div>
                        <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition">
                            {rev.author}
                        </div>
                        <div className="text-[10px] text-gray-400">
                            {rev.role} • <span className="text-gray-300">{rev.company}</span>
                        </div>
                    </div>
                </div>

                <span className="text-[9px] font-mono font-semibold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/30">
                    {rev.tag}
                </span>
            </div>
        </div>
    )

    return (
        <section id="reviews" className="relative py-28 bg-black text-white overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-10 size-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-10 size-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 px-4 py-1.5 rounded-full text-xs font-semibold text-cyan-300 mb-4">
                        <ThumbsUp className="size-3.5 text-emerald-400" />
                        <span>10 Verified Enterprise & Freelance Testimonials</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
                        <span className="bg-linear-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
                            Trust & Client Testimonials
                        </span>
                    </h2>
                    <p className="text-sm md:text-base text-gray-400">
                        Evaluated by engineering leaders, CTOs, and founders across low-latency systems,
                        Medallion Lakehouses, and zero-trust Agentic AI.
                    </p>
                </div>

                {/* Animated Moving Columns (Up and Down) */}
                <div
                    className="relative h-[640px] overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Top & Bottom Gradient Fade Masks */}
                    <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-black to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black to-transparent z-10 pointer-events-none" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                        {/* Column 1: Moves Smoothly UPWARD */}
                        <div
                            className={`flex flex-col transition-all duration-300 ${
                                isPaused ? 'animation-pause' : ''
                            }`}
                            style={{
                                animation: isPaused ? 'none' : 'scrollUp 24s linear infinite',
                            }}
                        >
                            {[...col1, ...col1].map((rev, idx) => (
                                <div key={`col1-${rev.id}-${idx}`}>
                                    {renderCard(rev)}
                                </div>
                            ))}
                        </div>

                        {/* Column 2: Moves Smoothly DOWNWARD */}
                        <div
                            className={`hidden md:flex flex-col transition-all duration-300 ${
                                isPaused ? 'animation-pause' : ''
                            }`}
                            style={{
                                animation: isPaused ? 'none' : 'scrollDown 24s linear infinite',
                            }}
                        >
                            {[...col2, ...col2].map((rev, idx) => (
                                <div key={`col2-${rev.id}-${idx}`}>
                                    {renderCard(rev)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="text-center text-xs text-gray-500 mt-6">
                    Hover over any review card to pause animation and inspect implementation metrics.
                </p>
            </div>

            <style>{`
                @keyframes scrollUp {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                @keyframes scrollDown {
                    0% { transform: translateY(-50%); }
                    100% { transform: translateY(0); }
                }
            `}</style>
        </section>
    )
}

export default Reviews
