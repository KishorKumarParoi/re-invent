import React, { useState, useEffect } from 'react'
import { Search, Command, ArrowRight, FileText, Code, Layers, Sparkles, X, ExternalLink } from 'lucide-react'

const SEARCH_ITEMS = [
    // Projects
    {
        id: 'p1',
        category: 'Flagship Projects',
        title: 'Zomato AI Lakehouse & Multimodal Dispute Platform',
        subtitle: 'Snowflake, PySpark Delta Lake (35M+ rows), dbt SCD-2, Feast Feature Store, CV Anti-Fraud',
        url: 'https://github.com/KishorKumarParoi/zomato-analysis',
        archUrl: 'https://github.com/KishorKumarParoi/zomato-analysis/blob/main/ARCHITECTURE.md',
        badge: 'Lakehouse',
    },
    {
        id: 'p2',
        category: 'Flagship Projects',
        title: 'Hybrid Anime Intelligence & Continuous LLMOps',
        subtitle: 'Rust 1.85 SIMD (<0.5ms), Go 1.24 Auth, vLLM Multi-LoRA, RSLoRA Flywheel, RRF Fusion',
        url: 'https://github.com/KishorKumarParoi/Hybrid-Anime-Recommender',
        archUrl: 'https://github.com/KishorKumarParoi/Hybrid-Anime-Recommender/blob/main/ARCHITECTURE.md',
        badge: 'LLMOps',
    },
    {
        id: 'p3',
        category: 'Flagship Projects',
        title: 'Enterprise AI Security & Agentic RAG Platform',
        subtitle: 'BotShield WAF, NVIDIA NeMo Guardrails, LangGraph Stateful Core, FastMCP Tool Gating',
        url: 'https://github.com/KishorKumarParoi/AI_Security_Production_App',
        archUrl: 'https://github.com/KishorKumarParoi/AI_Security_Production_App/blob/main/ARCHITECTURE.md',
        badge: 'AI Security',
    },
    {
        id: 'p4',
        category: 'Flagship Projects',
        title: 'Smart Manufacturing Industrial AI & Multi-Cloud MLOps',
        subtitle: 'Rust SIMD edge filter, Go gateway, Next.js 15 3D digital twin cockpit, PyTorch autoencoders',
        url: 'https://github.com/KishorKumarParoi/smart-manufacturing',
        archUrl: 'https://github.com/KishorKumarParoi/smart-manufacturing/blob/main/ARCHITECTURE.md',
        badge: 'IoT / Edge',
    },
    {
        id: 'p5',
        category: 'Flagship Projects',
        title: 'Nexus-AI: Enterprise Multi-Cloud Lakehouse & 5-Agent Mesh',
        subtitle: 'Multi-cloud Terraform, Bronze-Silver-Gold Marts (DuckDB <120ms), LangGraph 5-agent mesh',
        url: 'https://github.com/KishorKumarParoi/Nexus_AI',
        archUrl: 'https://github.com/KishorKumarParoi/Nexus_AI/blob/main/ARCHITECTURE.md',
        badge: 'Agent Mesh',
    },
    {
        id: 'p6',
        category: 'Flagship Projects',
        title: 'Autonomous AI Chatbot: Enterprise Agent & HITL Gating',
        subtitle: 'LangGraph Cyclic State Machine, PostgreSQL checkpointer, FastMCP financial HITL approval gates',
        url: 'https://github.com/KishorKumarParoi/Advanced_AI_Chatbot_Project',
        archUrl: 'https://github.com/KishorKumarParoi/Advanced_AI_Chatbot_Project/blob/main/ARCHITECTURE.md',
        badge: 'HITL Agent',
    },
    {
        id: 'p7',
        category: 'Flagship Projects',
        title: 'Core Systems Engineering: Rust Git Engine & POSIX Shell',
        subtitle: 'Bare-metal Rust 1.85 SHA-1 graph, streaming SIMD zlib, zero-copy memory-mapped I/O',
        url: 'https://github.com/KishorKumarParoi/codecrafters-git-rust',
        archUrl: 'https://github.com/KishorKumarParoi/codecrafters-git-rust/blob/main/ARCHITECTURE.md',
        badge: 'Systems / Rust',
    },
    {
        id: 'p8',
        category: 'Flagship Projects',
        title: 'KoomAI — Autonomous Video Recording & Transcription Platform',
        subtitle: 'WebRTC low-latency engine (<120ms), Electron client, MV3 Chrome extension, Next.js 16',
        url: 'https://koom.kishor.tech/',
        archUrl: 'https://github.com/KishorKumarParoi/Koom-AI/blob/main/ARCHITECTURE.md',
        badge: 'Founder / Live',
    },

    // Resume Downloads
    {
        id: 'r1',
        category: 'Resume Downloads',
        title: 'Academic Split Resume (1-Page PDF)',
        subtitle: 'LaTeX compiled RUET template with academic rankings and metrics',
        url: '/files/resume.pdf',
        badge: 'PDF',
    },
    {
        id: 'r2',
        category: 'Resume Downloads',
        title: 'Academic Split Resume (1-Page Word DOCX)',
        subtitle: 'Microsoft Word editable ATS document',
        url: '/files/resume.docx',
        badge: 'DOCX',
    },
    {
        id: 'r3',
        category: 'Resume Downloads',
        title: 'Academic Split Resume (LaTeX .tex Source)',
        subtitle: 'Raw LaTeX source code with geometry and burgundy styling',
        url: '/files/resume.tex',
        badge: 'LaTeX',
    },
    {
        id: 'r4',
        category: 'Resume Downloads',
        title: 'Comprehensive Single-Column ATS Resume (2-Page PDF)',
        subtitle: 'Strictly 2-page compact single-column format with all 11 projects',
        url: '/files/resume_single_column.pdf',
        badge: 'PDF',
    },
    {
        id: 'r5',
        category: 'Resume Downloads',
        title: 'Comprehensive Single-Column ATS Resume (2-Page Word DOCX)',
        subtitle: 'Word DOCX format for single-column ATS parsers',
        url: '/files/resume_single_column.docx',
        badge: 'DOCX',
    },
    {
        id: 'r6',
        category: 'Resume Downloads',
        title: 'Comprehensive Single-Column ATS Resume (LaTeX .tex Source)',
        subtitle: 'Complete 2-page LaTeX single-column source code',
        url: '/files/resume_single_column.tex',
        badge: 'LaTeX',
    },

    // Navigation Anchors
    {
        id: 'n1',
        category: 'Quick Jump',
        title: 'Explore 3D Hero Realm',
        subtitle: 'Interactive 3D camera choreography and GSAP title animation',
        url: '#hero',
        badge: 'Section',
    },
    {
        id: 'n2',
        category: 'Quick Jump',
        title: 'About & Career Journey',
        subtitle: 'Experience at phi0.ai, Samsung AI Core, kepi.ai & competitive programming stats',
        url: '#about',
        badge: 'Section',
    },
    {
        id: 'n3',
        category: 'Quick Jump',
        title: 'Bento 3D Showcase & Projects',
        subtitle: 'Interactive 3D tilt cards with live video backdrops and architecture links',
        url: '#features',
        badge: 'Section',
    },
    {
        id: 'n4',
        category: 'Quick Jump',
        title: 'Contact & Collaboration',
        subtitle: 'Email, WhatsApp, LinkedIn, GitHub, and consultation booking',
        url: '#contact',
        badge: 'Section',
    },
]

const SpotlightSearch = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('')
    const [selectedIndex, setSelectedIndex] = useState(0)

    const filtered = SEARCH_ITEMS.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    )

    useEffect(() => {
        setSelectedIndex(0)
    }, [query])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return

            if (e.key === 'ArrowDown') {
                e.preventDefault()
                setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1))
            } else if (e.key === 'ArrowUp') {
                e.preventDefault()
                setSelectedIndex((prev) => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1))
            } else if (e.key === 'Enter') {
                e.preventDefault()
                if (filtered[selectedIndex]) {
                    window.open(filtered[selectedIndex].url, '_blank')
                    onClose()
                }
            } else if (e.key === 'Escape') {
                onClose()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, selectedIndex, filtered, onClose])

    if (!isOpen) return null

    return (
        <div className='fixed inset-0 z-[9999] flex items-start justify-center pt-24 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200'>
            {/* Click backdrop to close */}
            <div className='absolute inset-0' onClick={onClose} />

            <div className='relative w-full max-w-2xl bg-[#0f0f17]/95 border border-white/20 rounded-2xl shadow-2xl overflow-hidden text-white flex flex-col max-h-[75vh]'>
                {/* Search Bar */}
                <div className='flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-white/5'>
                    <Search className='size-5 text-cyan-400 shrink-0' />
                    <input
                        type='text'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder='Search 15 flagship projects, architecture docs, resume formats, or skills...'
                        className='flex-1 bg-transparent border-none text-sm text-white placeholder-gray-500 focus:outline-hidden'
                        autoFocus
                    />
                    <div className='flex items-center gap-1 text-[11px] font-mono text-gray-400 bg-white/10 px-2 py-0.5 rounded'>
                        <span>ESC</span>
                    </div>
                    <button onClick={onClose} className='text-gray-400 hover:text-white p-1 rounded-full'>
                        <X className='size-4' />
                    </button>
                </div>

                {/* Results List */}
                <div className='overflow-y-auto p-2 space-y-1 flex-1'>
                    {filtered.length === 0 ? (
                        <div className='p-8 text-center text-gray-500 text-sm'>
                            No projects or documents found for "{query}"
                        </div>
                    ) : (
                        filtered.map((item, idx) => (
                            <div
                                key={item.id}
                                onClick={() => {
                                    window.open(item.url, '_blank')
                                    onClose()
                                }}
                                className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition ${
                                    idx === selectedIndex ? 'bg-cyan-500/20 border border-cyan-400/40 text-cyan-200' : 'hover:bg-white/5 text-gray-300'
                                }`}
                            >
                                <div className='flex items-start gap-3 flex-1 min-w-0 pr-3'>
                                    <div className='p-2 rounded-lg bg-white/10 shrink-0 mt-0.5'>
                                        {item.category === 'Flagship Projects' && <Code className='size-4 text-cyan-400' />}
                                        {item.category === 'Resume Downloads' && <FileText className='size-4 text-emerald-400' />}
                                        {item.category === 'Quick Jump' && <Layers className='size-4 text-violet-400' />}
                                    </div>
                                    <div className='min-w-0 flex-1'>
                                        <div className='flex items-center gap-2'>
                                            <h4 className='font-bold text-xs truncate text-white'>{item.title}</h4>
                                            <span className='text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/10 text-gray-400 shrink-0'>
                                                {item.badge}
                                            </span>
                                        </div>
                                        <p className='text-[11px] text-gray-400 truncate mt-0.5'>{item.subtitle}</p>
                                    </div>
                                </div>

                                <div className='flex items-center gap-2 shrink-0'>
                                    {item.archUrl && (
                                        <a
                                            href={item.archUrl}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            onClick={(e) => e.stopPropagation()}
                                            className='text-[10px] bg-white/10 hover:bg-white/20 px-2 py-1 rounded text-cyan-300 flex items-center gap-1 transition'
                                            title='Open ARCHITECTURE.md'
                                        >
                                            <span>Architecture</span>
                                            <ExternalLink className='size-2.5' />
                                        </a>
                                    )}
                                    <ArrowRight className='size-3.5 text-gray-500' />
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer Guide */}
                <div className='px-4 py-2 border-t border-white/10 bg-black/40 flex items-center justify-between text-[11px] text-gray-500 select-none'>
                    <div className='flex items-center gap-3'>
                        <span>Navigate: <kbd className='font-mono bg-white/10 px-1 rounded text-gray-400'>↑</kbd> <kbd className='font-mono bg-white/10 px-1 rounded text-gray-400'>↓</kbd></span>
                        <span>Open: <kbd className='font-mono bg-white/10 px-1 rounded text-gray-400'>Enter</kbd></span>
                        <span>Close: <kbd className='font-mono bg-white/10 px-1 rounded text-gray-400'>ESC</kbd></span>
                    </div>
                    <span className='text-cyan-400 font-semibold'>Kishor Kumar Paroi (KKP) Portfolio</span>
                </div>
            </div>
        </div>
    )
}

export default SpotlightSearch
