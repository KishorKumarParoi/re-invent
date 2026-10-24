import React, { useState } from 'react'
import { Award, GraduationCap, ExternalLink, Sparkles, BookOpen, UserCheck, CheckCircle2, RotateCw } from 'lucide-react'

const FLASHCARDS = [
    {
        id: 1,
        title: "Deep Learning Specialization",
        institution: "DeepLearning.AI & Stanford",
        mentors: ["Andrew Ng", "Kian Katanforoosh", "Younes Bensouda Mourri"],
        icon: "🧠",
        color: "from-cyan-500/20 to-blue-600/20",
        borderColor: "border-cyan-500/40",
        badgeColor: "text-cyan-300 bg-cyan-950/70 border-cyan-800/50",
        frontSummary: "5-Course Specialization covering Deep Neural Networks, Backprop calculus, CNN architectures (ResNet, YOLO), and Sequence Transformers.",
        topics: [
            "Neural Networks & Deep Learning (Vectorized Forward/Backprop)",
            "Hyperparameter Tuning, Regularization & Optimization (Adam, RMSProp)",
            "Structuring Machine Learning Projects (Orthogonalization, Error Analysis)",
            "Convolutional Neural Networks (ResNets, Inception, Object Detection)",
            "Sequence Models, Attention Mechanisms & Multi-Head Transformers",
        ],
        credential: "Verified Stanford / DeepLearning.AI Specialization",
    },
    {
        id: 2,
        title: "Machine Learning Specialization",
        institution: "Stanford Online & DeepLearning.AI",
        mentors: ["Andrew Ng", "Eddy Shyu"],
        icon: "🤖",
        color: "from-emerald-500/20 to-teal-600/20",
        borderColor: "border-emerald-500/40",
        badgeColor: "text-emerald-300 bg-emerald-950/70 border-emerald-800/50",
        frontSummary: "Foundational mathematical mastery of Supervised, Unsupervised, and Reinforcement Learning paradigms directly under Andrew Ng.",
        topics: [
            "Supervised Learning: Linear Regression, Logistic Regression, Cost Minimization",
            "Advanced Learning Algorithms: Multi-Class Neural Nets, Tree Ensembles, XGBoost",
            "Unsupervised Learning: K-Means Clustering, Anomaly Detection & PCA",
            "Recommender Systems: Collaborative Filtering & Content-Based Filtering",
            "Reinforcement Learning: Bellman Equations, Q-Learning & State Values",
        ],
        credential: "Stanford Online & DeepLearning.AI Credential",
    },
    {
        id: 3,
        title: "Enterprise Production MLOps & Systems",
        institution: "CampusX & Industry AI Architecture",
        mentors: ["Vivian Aranha", "Krish Naik", "Mayank Agarwal", "Sourangshu Paul", "Ed Donner"],
        icon: "⚡",
        color: "from-purple-500/20 to-indigo-600/20",
        borderColor: "border-purple-500/40",
        badgeColor: "text-purple-300 bg-purple-950/70 border-purple-800/50",
        frontSummary: "End-to-End Enterprise MLOps: Automated CI/CD, Model Registry governance, Feast Feature Stores, and Model Context Protocol (FastMCP).",
        topics: [
            "End-to-End Production MLOps Pipelines (Krish Naik / CampusX)",
            "Enterprise AI Systems Architecture (Vivian Aranha)",
            "Agentic AI, n8n & FastMCP Automations (Mayank Agarwal, Ed Donner)",
            "Multimodal Computer Vision & Anti-Fraud Arbitration (Sourangshu Paul)",
            "Kubeflow v2, MLflow, Feast Feature Store over Redis, DVC & KEDA",
        ],
        credential: "Enterprise Production MLOps Architect",
    },
    {
        id: 4,
        title: "Distributed Systems & System Design",
        institution: "High-Throughput Systems Engineering",
        mentors: ["Arpit Bhayani", "Gaurav Sen", "ByteByteGo", "Hussein Nasser", "Zach Wilson"],
        icon: "🌐",
        color: "from-rose-500/20 to-amber-600/20",
        borderColor: "border-rose-500/40",
        badgeColor: "text-rose-300 bg-rose-950/70 border-rose-800/50",
        frontSummary: "High-scale distributed primitives: CQRS, Transactional Outbox over Kafka, Raft consensus, and sub-millisecond network protocols.",
        topics: [
            "High-Throughput Distributed Systems & Storage Engines (Arpit Bhayani)",
            "System Design Primer & High-Scale Microservices (Gaurav Sen, ByteByteGo)",
            "Protocols, TCP/UDP, TLS 1.3 & HTTP/2-3 Internals (Hussein Nasser)",
            "Big Data Engineering, Medallion Architecture & Spark (Zach Wilson)",
            "LLM Tokenizers & GPT Foundations from Scratch (Andrej Karpathy)",
        ],
        credential: "Distributed Systems & High-Throughput Engineering",
    },
    {
        id: 5,
        title: "Interactive 3D Platform & Live Telemetry",
        institution: "re:invent 3D Ecosystem",
        mentors: ["Kishor Kumar Paroi (Architect & Author)"],
        icon: "🚀",
        color: "from-cyan-500/20 to-emerald-500/20",
        borderColor: "border-cyan-400/50",
        badgeColor: "text-cyan-300 bg-cyan-950/70 border-cyan-800/50",
        frontSummary: "Production 3D Metaverse portfolio platform featuring Three.js WebGL, GSAP ScrollTrigger camera choreography, and live PostgreSQL telemetry.",
        topics: [
            "React 19.2 + Rolldown Vite + Tailwind CSS v4 Modern Stack",
            "GSAP 3.13 3D Camera Choreography & Scroll-Driven Bento Grids",
            "Interactive Web Audio API Synthesizers & Free Music Streaming",
            "Supabase PostgreSQL Real-Time Hourly Telemetry Engine",
            "Vercel Edge Sub-100ms Global CDN Optimization",
        ],
        credential: "Live Platform: re-invent-rust.vercel.app",
        link: "https://re-invent-rust.vercel.app",
    },
    {
        id: 6,
        title: "Core CS & Engineering Foundations",
        institution: "RUET (Rajshahi Univ. of Eng. & Tech)",
        mentors: ["RUET Department of Computer Science & Engineering"],
        icon: "🎓",
        color: "from-amber-500/20 to-yellow-600/20",
        borderColor: "border-amber-500/40",
        badgeColor: "text-amber-300 bg-amber-950/70 border-amber-800/50",
        frontSummary: "B.Sc. in Computer Science & Engineering (Merit Rank 483rd, 1,000+ Algorithmic Solves, Codeforces Blue 1680+, CodeChef 5★ 2000+).",
        topics: [
            "Advanced Data Structures & Algorithms (Competitive Blue Coder 1680+)",
            "Operating Systems, Memory Allocation, Concurrency & Posix System Calls",
            "Database Management Systems (DBMS), Indexing, B-Trees & ACID Transactions",
            "Computer Networks, TCP/IP Stack, Socket Programming & Cryptography",
            "Compiler Design, Automata, Software Engineering & Microprocessors",
        ],
        credential: "B.Sc. in Computer Science & Engineering (RUET)",
    },
]

export const Certificates = () => {
    const [flippedCards, setFlippedCards] = useState({})

    const toggleCard = (id) => {
        setFlippedCards((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    return (
        <section id="certifications" className="relative py-28 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 px-4 py-1.5 rounded-full text-xs font-semibold text-cyan-300 mb-4">
                        <Award className="size-4 text-amber-400" />
                        <span>Academic Excellence, Global Mentors & Certifications</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
                        <span className="bg-linear-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
                            Certifications & Lifelong Learning
                        </span>
                    </h2>
                    <p className="text-sm md:text-base text-gray-400">
                        Interactive flashcards showcasing Stanford Online specializations, deep learning foundations,
                        world-class mentors, and algorithmic mastery. Click any card to flip and inspect full syllabus.
                    </p>
                </div>

                {/* 3D Flashcards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FLASHCARDS.map((card) => {
                        const isFlipped = !!flippedCards[card.id]

                        return (
                            <div
                                key={card.id}
                                onClick={() => toggleCard(card.id)}
                                className="group relative h-[380px] perspective cursor-pointer"
                            >
                                <div
                                    className={`relative size-full rounded-3xl transition-transform duration-700 preserve-3d shadow-2xl ${
                                        isFlipped ? 'rotate-y-180' : ''
                                    }`}
                                >
                                    {/* FRONT OF FLASHCARD */}
                                    <div
                                        className={`absolute inset-0 backface-hidden rounded-3xl p-6 flex flex-col justify-between bg-linear-to-b ${card.color} bg-gray-950/90 backdrop-blur-xl border ${card.borderColor} hover:border-cyan-400 transition-all duration-300`}
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-3xl">{card.icon}</span>
                                                <span className={`text-[10px] font-bold font-mono px-2.5 py-1 rounded-full border ${card.badgeColor}`}>
                                                    {card.institution}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition">
                                                {card.title}
                                            </h3>

                                            <p className="text-xs text-gray-300 leading-relaxed mb-4">
                                                {card.frontSummary}
                                            </p>

                                            {/* Mentors Badge */}
                                            <div className="space-y-1">
                                                <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                                                    <UserCheck className="size-3 text-cyan-400" />
                                                    <span>Mentors & Instructors:</span>
                                                </div>
                                                <div className="flex flex-wrap gap-1">
                                                    {card.mentors.map((m, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="text-[10px] bg-white/10 text-cyan-200 px-2 py-0.5 rounded-md font-medium"
                                                        >
                                                            {m}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                                            <span className="text-[11px] font-semibold text-emerald-400">
                                                {card.credential}
                                            </span>
                                            <div className="flex items-center gap-1 text-cyan-400 font-semibold group-hover:translate-x-1 transition">
                                                <span>Flip Card</span>
                                                <RotateCw className="size-3" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* BACK OF FLASHCARD (SYLLABUS & MASTERY) */}
                                    <div
                                        className={`absolute inset-0 backface-hidden rotate-y-180 rounded-3xl p-6 flex flex-col justify-between bg-gray-950/95 backdrop-blur-2xl border-2 border-cyan-400/80 shadow-cyan-500/20`}
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                                                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                                                    Detailed Curriculum & Mastery
                                                </span>
                                                <RotateCw className="size-3.5 text-gray-400" />
                                            </div>

                                            <h4 className="text-base font-bold text-white mb-3">
                                                {card.title}
                                            </h4>

                                            <ul className="space-y-1.5 text-xs text-gray-300">
                                                {card.topics.map((t, idx) => (
                                                    <li key={idx} className="flex items-start gap-1.5 leading-snug">
                                                        <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                                        <span>{t}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                                            {card.link ? (
                                                <a
                                                    href={card.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:underline"
                                                >
                                                    <span>View Live Platform</span>
                                                    <ExternalLink className="size-3" />
                                                </a>
                                            ) : (
                                                <span className="text-[10px] text-gray-400 font-mono">
                                                    Syllabus verified & audited
                                                </span>
                                            )}
                                            <span className="text-[10px] text-gray-400">Click to flip back</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <style>{`
                .perspective {
                    perspective: 1000px;
                }
                .preserve-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
        </section>
    )
}

export default Certificates
