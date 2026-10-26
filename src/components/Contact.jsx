import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Coffee, Sparkles, Send, ExternalLink, Quote, Linkedin, Twitter,
    MessageSquare, Mail, Github, Download, FileText, GraduationCap,
    Award, Check, Copy, Flame, Swords, Compass, ShieldCheck, Terminal
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const LEGEND_QUOTES = [
    {
        quote: "Talk is cheap. Show me the code.",
        author: "Linus Torvalds",
        role: "Creator of Linux & Git",
    },
    {
        quote: "Focus is saying no to 1,000 good ideas to make sure you don't do the wrong thing.",
        author: "Steve Jobs",
        role: "Co-Founder of Apple",
    },
    {
        quote: "The cost of adding a feature isn't just the time it takes to code it. It's the cost of keeping that feature in existence.",
        author: "John Carmack",
        role: "Id Software / Doom Creator",
    },
    {
        quote: "Simple things should be simple, complex things should be possible.",
        author: "Alan Kay",
        role: "Pioneer of OOP & Smalltalk",
    },
    {
        quote: "Premature optimization is the root of all evil in software engineering.",
        author: "Donald Knuth",
        role: "The Art of Computer Programming",
    },
    {
        quote: "UNIX is very simple, it just needs a genius to understand its simplicity.",
        author: "Dennis Ritchie",
        role: "Creator of C & Unix",
    },
    {
        quote: "Simplicity is prerequisite for reliability.",
        author: "Edsger W. Dijkstra",
        role: "Turing Award Laureate",
    },
];

const Contact = () => {
    const contactRef = useRef(null);
    const containerRef = useRef(null);
    const rafIdRef = useRef(null);
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [activeResumeTab, setActiveResumeTab] = useState("pillars");
    const [copiedEmail, setCopiedEmail] = useState(null);

    // Form state
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        topic: "Principal AI Architecture",
        message: "",
    });
    const [isSent, setIsSent] = useState(false);

    // Rotate quotes every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndex((prev) => (prev + 1) % LEGEND_QUOTES.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    // Optimized mouse tilt with zero lag (disabled on touch devices to ensure smooth scrolling)
    const handleMouseMove = (e) => {
        if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;
        if (rafIdRef.current) return;

        rafIdRef.current = requestAnimationFrame(() => {
            rafIdRef.current = null;
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -1.5;
            const rotateY = ((x - centerX) / centerX) * 1.5;

            containerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    };

    const handleMouseLeave = () => {
        if (!containerRef.current) return;
        containerRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    };

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopiedEmail(type);
        setTimeout(() => setCopiedEmail(null), 3000);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const senderName = formState.name.trim() || "Portfolio Visitor";
        const senderEmail = formState.email.trim() || "Not specified";
        const topic = formState.topic || "Principal AI Architecture";
        const subject = encodeURIComponent(`[${topic}] Inquiry from ${senderName}`);
        const body = encodeURIComponent(
            `Hi Kishor,\n\n${formState.message.trim()}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nSender Name: ${senderName}\nSender Email: ${senderEmail}\nDomain Topic: ${topic}\nPlatform: Reinvent 3D Portfolio (https://re-invent-rust.vercel.app/)\nSent At: ${new Date().toLocaleString()}`
        );
        const recipient = "kishor.ruet.cse@gmail.com";
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
        const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

        // Directly pop up mail composer
        try {
            const popup = window.open(gmailUrl, "_blank", "width=800,height=650,left=150,top=100,scrollbars=yes,resizable=yes");
            if (!popup || popup.closed || typeof popup.closed === "undefined") {
                window.location.href = mailtoUrl;
            }
        } catch {
            window.location.href = mailtoUrl;
        }

        setIsSent(true);
        setTimeout(() => setIsSent(false), 6000);
    };

    const currentQuote = LEGEND_QUOTES[quoteIndex];

    return (
        <div
            ref={contactRef}
            id="contact"
            className="my-24 min-h-[90vh] w-screen px-4 md:px-10 perspective will-change-transform"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={containerRef}
                className="relative max-w-6xl mx-auto rounded-3xl bg-linear-to-b from-gray-950 via-slate-950 to-black py-16 px-6 md:px-14 text-blue-50 border border-cyan-500/30 backdrop-blur-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden transform-gpu transition-transform duration-200 ease-out"
            >
                {/* Visual Ambient Glows */}
                <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-80" />
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-56 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-56 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />

                {/* Zoro Swordsman Sipping Tea Graphic Integration (Top Right Floating) */}
                <div className="absolute -top-12 -right-8 w-44 md:w-60 opacity-30 lg:opacity-75 pointer-events-none select-none transition-all duration-500 hover:opacity-100">
                    <div className="relative">
                        <img
                            src="/img/swordman.webp"
                            alt="Zoro anime swordsman sipping tea"
                            className="w-full object-contain sword-man-clip-path filter drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]"
                        />
                        {/* Steaming Tea Aura Indicator */}
                        <div className="absolute top-10 left-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 border border-amber-400/50 text-[10px] font-mono text-amber-300 backdrop-blur-md shadow-lg">
                            <Coffee className="size-3 text-amber-400 animate-bounce" />
                            <span>ZORO'S TEA HOUR 🍵</span>
                        </div>
                    </div>
                </div>

                {/* Content Header */}
                <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Steaming Cup of Tea Badge with Zoro Lore */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r from-amber-500/20 via-cyan-500/20 to-emerald-500/20 border border-amber-400/50 text-xs font-mono font-bold text-amber-300 mb-6 shadow-lg shadow-amber-500/10">
                        <Coffee className="size-4 text-amber-400 animate-bounce" />
                        <span>Let's Connect Over a Cup of Tea & Coffee 🍵☕</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 max-w-4xl">
                        <span className="bg-linear-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                            Living Resume & Executive Directory
                        </span>
                    </h2>

                    <p className="max-w-2xl text-sm md:text-base text-gray-300 leading-relaxed mb-6 font-sans">
                        “When you decided to build the impossible, you stopped being ordinary. Let's sip tea and architect systems that endure.” — Direct access to verified resume data, production credentials, and contact channels.
                    </p>

                    {/* LIVE ATS RESUME SYNC BADGE & RESUME DOWNLOADS */}
                    <div className="w-full max-w-3xl bg-black/70 border border-cyan-500/40 rounded-2xl p-4 mb-8 backdrop-blur-md shadow-lg">
                        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3 mb-4">
                            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold">
                                <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                                <span>LIVE ATS RESUME SYNCHRONIZED</span>
                                <span className="text-gray-400 hidden sm:inline">• DHAKA / GLOBAL REMOTE</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <a
                                    href="/files/resume_single_column.pdf"
                                    download="Kishor_Kumar_Paroi_Resume_Single_Column.pdf"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 text-cyan-300 text-xs font-bold font-mono transition-all hover:scale-105 active:scale-95"
                                    title="Download Single-Column High-Density ATS Resume"
                                >
                                    <Download className="size-3.5" />
                                    <span>ATS Single Column PDF</span>
                                </a>

                                <a
                                    href="/files/resume.pdf"
                                    download="Kishor_Kumar_Paroi_Resume.pdf"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-gray-200 text-xs font-bold font-mono transition-all hover:scale-105 active:scale-95"
                                    title="Download Standard 2-Page Executive Resume"
                                >
                                    <FileText className="size-3.5" />
                                    <span>Executive PDF</span>
                                </a>
                            </div>
                        </div>

                        {/* Interactive Living Resume Dossier Tabs */}
                        <div className="flex flex-wrap items-center justify-center gap-2 mb-4 text-xs font-mono">
                            {[
                                { id: "pillars", label: "Core Pillars", icon: Compass },
                                { id: "education", label: "Education (RUET)", icon: GraduationCap },
                                { id: "competitive", label: "Competitive Solves", icon: Award },
                                { id: "koomai", label: "Founder @ KoomAI", icon: Sparkles },
                            ].map((tab) => {
                                const Icon = tab.icon;
                                const isActive = activeResumeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveResumeTab(tab.id)}
                                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${isActive
                                                ? "bg-linear-to-r from-cyan-400 to-emerald-400 text-black shadow-md shadow-cyan-500/30"
                                                : "bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10"
                                            }`}
                                    >
                                        <Icon className="size-3.5" />
                                        <span>{tab.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Living Resume Tab Panels */}
                        <div className="text-left font-mono text-xs text-gray-300 p-3 rounded-xl bg-black/50 border border-white/5">
                            {activeResumeTab === "pillars" && (
                                <div className="space-y-2">
                                    <div className="text-cyan-400 font-bold flex items-center gap-2">
                                        <Compass className="size-4 text-emerald-400" />
                                        <span>PRINCIPAL AI SYSTEMS ARCHITECTURAL BLUEPRINT:</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
                                        <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                                            <span className="text-emerald-300 font-bold">• Multi-Cloud Agentic AI (MCP):</span> FastMCP tool standardization, cyclic state graphs in LangGraph, and Human-in-the-Loop financial gates.
                                        </div>
                                        <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                                            <span className="text-cyan-300 font-bold">• High-Throughput SIMD Vector Engines:</span> Rust 1.85 SIMD scoring (&lt;0.5ms, 50x speedup), Go 1.24 API gateways, and vLLM Multi-LoRA multiplexing.
                                        </div>
                                        <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                                            <span className="text-purple-300 font-bold">• Medallion Lakehouses & Streaming:</span> Snowflake & PySpark Delta Lake processing 35M+ orders with dbt Core SCD-2 auditing ($18K/mo saved).
                                        </div>
                                        <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                                            <span className="text-amber-300 font-bold">• Zero-Trust DevSecOps & Governance:</span> NVIDIA NeMo Guardrails, BotShield WAF, Presidio PII redaction, and 100% Terraform IaC.
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeResumeTab === "education" && (
                                <div className="space-y-2">
                                    <div className="text-cyan-400 font-bold flex items-center gap-2">
                                        <GraduationCap className="size-4 text-amber-400" />
                                        <span>ACADEMIC MERIT & ENGINEERING FOUNDATIONS:</span>
                                    </div>
                                    <div className="space-y-1.5 text-[11px] pt-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
                                            <div>
                                                <strong className="text-white">B.Sc. in Computer Science &amp; Engineering</strong> — Rajshahi University of Engineering &amp; Technology (RUET)
                                            </div>
                                            <div className="text-emerald-400 font-bold">Merit Rank 483rd in Bangladesh (CGPA 3.25 / 4.00)</div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
                                            <div>
                                                <strong className="text-white">Higher Secondary Certificate (HSC)</strong> — Saint Joseph Higher Secondary School
                                            </div>
                                            <div className="text-cyan-400 font-bold">Merit Rank 85th in Dhaka Board (GPA 5.00 / 5.00)</div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
                                            <div>
                                                <strong className="text-white">Secondary School Certificate (SSC)</strong> — S.J Govt Model High School (Gopalganj)
                                            </div>
                                            <div className="text-amber-400 font-bold">Merit Rank 90th in Dhaka Board (GPA 5.00 / 5.00)</div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeResumeTab === "competitive" && (
                                <div className="space-y-2">
                                    <div className="text-cyan-400 font-bold flex items-center gap-2">
                                        <Award className="size-4 text-amber-400" />
                                        <span>COMPETITIVE CODING & ALGORITHMIC SOLVES:</span>
                                    </div>
                                    <p className="text-[11px] text-gray-300">
                                        Extensive competitive programming mastery across dynamic programming, graph theory, flow networks, and number theory:
                                    </p>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px] pt-1">
                                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                                            <div className="text-emerald-400 font-extrabold text-base">1,000+</div>
                                            <div className="text-gray-400 text-[10px]">Total Solves</div>
                                        </div>
                                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                                            <div className="text-blue-400 font-extrabold text-base">1680+</div>
                                            <div className="text-gray-400 text-[10px]">Codeforces Blue</div>
                                        </div>
                                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                                            <div className="text-yellow-400 font-extrabold text-base">5★ 2000+</div>
                                            <div className="text-gray-400 text-[10px]">CodeChef Stars</div>
                                        </div>
                                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                                            <div className="text-purple-400 font-extrabold text-base">RUET</div>
                                            <div className="text-gray-400 text-[10px]">ACM-ICPC Teams</div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeResumeTab === "koomai" && (
                                <div className="space-y-2">
                                    <div className="text-cyan-400 font-bold flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Sparkles className="size-4 text-emerald-400" />
                                            <span>FOUNDER &amp; ARCHITECT @ KOOM-AI:</span>
                                        </div>
                                        <a
                                            href="https://koom-ai.vercel.app/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-emerald-400 hover:underline flex items-center gap-1 text-[11px]"
                                        >
                                            <span>Live Platform</span>
                                            <ExternalLink className="size-3" />
                                        </a>
                                    </div>
                                    <p className="text-[11px] text-gray-300 leading-relaxed">
                                        Next-generation multi-agent automation platform designed to orchestrate self-healing data workflows, model context protocol (FastMCP) integrations, and enterprise AI copilots with sub-second execution guarantees.
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-1 text-[10px]">
                                        <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/40 text-cyan-300">Live: koom-ai.vercel.app</span>
                                        <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/40 text-emerald-300">FastMCP Tools</span>
                                        <span className="px-2 py-0.5 rounded bg-purple-950/80 border border-purple-800/40 text-purple-300">Autonomous Mesh</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ROTATING MASTER PROGRAMMER QUOTES */}
                    <div className="w-full max-w-2xl bg-black/60 border border-white/10 rounded-2xl p-4 mb-8 backdrop-blur-md shadow-inner transition-all duration-500">
                        <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 mb-2">
                            <span className="flex items-center gap-1.5 font-bold">
                                <Quote className="size-3.5 text-amber-400" />
                                <span>Words of the Masters</span>
                            </span>
                            <span className="text-gray-400">#{quoteIndex + 1} of {LEGEND_QUOTES.length}</span>
                        </div>
                        <p className="text-sm italic text-gray-200 font-serif leading-relaxed mb-2">
                            "{currentQuote.quote}"
                        </p>
                        <p className="text-xs text-amber-300 font-semibold text-right">
                            — {currentQuote.author} <span className="text-gray-400 font-normal">({currentQuote.role})</span>
                        </p>
                    </div>

                    {/* DIRECT CONTACT ACTION BUTTONS (RESUME.PDF VERIFIED) */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-8 w-full max-w-3xl">
                        {/* Primary RUET Email */}
                        <div className="flex items-center bg-cyan-950/40 border border-cyan-500/40 rounded-full px-3.5 py-1.5 text-xs font-mono">
                            <Mail className="size-3.5 text-cyan-400 mr-2" />
                            <a href="mailto:1703053@student.ruet.ac.bd" className="text-cyan-200 hover:text-white mr-2">
                                1703053@student.ruet.ac.bd
                            </a>
                            <button
                                onClick={() => copyToClipboard("1703053@student.ruet.ac.bd", "ruet")}
                                className="text-gray-400 hover:text-cyan-300 p-1 cursor-pointer"
                                title="Copy RUET Email"
                            >
                                {copiedEmail === "ruet" ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
                            </button>
                        </div>

                        {/* Executive Primary Gmail */}
                        <div className="flex items-center bg-emerald-950/40 border border-emerald-500/40 rounded-full px-3.5 py-1.5 text-xs font-mono">
                            <Mail className="size-3.5 text-emerald-400 mr-2" />
                            <a href="mailto:kishor.ruet.cse@gmail.com" className="text-emerald-200 hover:text-white mr-2">
                                kishor.ruet.cse@gmail.com
                            </a>
                            <button
                                onClick={() => copyToClipboard("kishor.ruet.cse@gmail.com", "gmail")}
                                className="text-gray-400 hover:text-emerald-300 p-1 cursor-pointer"
                                title="Copy Gmail"
                            >
                                {copiedEmail === "gmail" ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
                            </button>
                        </div>

                        {/* LinkedIn Direct */}
                        <a
                            href="https://www.linkedin.com/in/kishor-kumar-paroi-b06344166/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077b5]/20 hover:bg-[#0077b5]/35 border border-[#0077b5]/60 text-cyan-200 hover:text-white font-bold text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-md shadow-blue-500/10 cursor-pointer"
                            title="Connect on LinkedIn"
                        >
                            <Linkedin className="size-3.5 text-cyan-400" />
                            <span>LinkedIn ↗</span>
                        </a>

                        {/* Twitter / X Direct */}
                        <a
                            href="https://x.com/Mr_paroi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-md shadow-white/5 cursor-pointer"
                            title="Follow on Twitter / X"
                        >
                            <Twitter className="size-3.5 text-sky-400" />
                            <span>𝕏 / Twitter (@Mr_paroi) ↗</span>
                        </a>

                        {/* WhatsApp Direct */}
                        <a
                            href="https://wa.me/8801724714156"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/50 text-emerald-300 font-bold text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all"
                        >
                            <MessageSquare className="size-3.5" />
                            <span>+880 1724-714156 (WhatsApp)</span>
                        </a>
                    </div>

                    {/* INTERACTIVE INQUIRY FORM */}
                    <form onSubmit={handleFormSubmit} className="w-full max-w-2xl bg-black/60 border border-white/10 rounded-2xl p-6 mb-8 text-left space-y-4 backdrop-blur-md">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-2">
                            <span className="text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-2">
                                <Send className="size-3.5 text-emerald-400" />
                                <span>Book Architectural Consultation or Say Hello</span>
                            </span>
                            <span className="text-[10px] font-mono text-gray-400">Response &lt;12 hrs</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[11px] font-mono text-gray-400 mb-1">Your Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    placeholder="Linus Torvalds"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                                />
                            </div>
                            <div>
                                <label className="block text-[11px] font-mono text-gray-400 mb-1">Your Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    placeholder="linus@linuxfoundation.org"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[11px] font-mono text-gray-400 mb-1">Collaboration Domain</label>
                            <select
                                value={formState.topic}
                                onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                                className="w-full bg-gray-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                            >
                                <option value="Principal AI Architecture">Principal AI Systems &amp; Distributed Architecture</option>
                                <option value="Medallion Lakehouse & MLOps">Medallion Lakehouse, Feast &amp; MLOps Mesh</option>
                                <option value="Zero-Trust AI & NeMo WAF">Zero-Trust Agentic AI Defense &amp; FastMCP</option>
                                <option value="Founder & Enterprise Collaboration">Founder / Full-Time Executive Leadership</option>
                                <option value="Tea or Coffee Chat">Casual Tech Chat over Tea &amp; Coffee 🍵</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-[11px] font-mono text-gray-400 mb-1">Your Message</label>
                            <textarea
                                required
                                rows={3}
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                placeholder="Tell me about your distributed challenge, lakehouse scale, or upcoming project..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-linear-to-r from-cyan-400 via-teal-400 to-emerald-400 text-black font-extrabold text-xs uppercase tracking-wider hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg shadow-cyan-500/20 cursor-pointer flex items-center justify-center gap-2"
                        >
                            <Send className="size-4" />
                            <span>Dispatch Executive Message</span>
                        </button>

                        {isSent && (
                            <p className="text-center text-xs font-mono text-emerald-400 pt-2 animate-pulse">
                                ✓ Email composer popped up! Directly sending to kishor.ruet.cse@gmail.com
                            </p>
                        )}
                    </form>

                    {/* VERIFIED SOCIAL NETWORK BAR (RESUME.PDF CORRECTED) */}
                    <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/10 w-full max-w-xl text-xs font-semibold">
                        <a
                            href="https://www.linkedin.com/in/kishor-kumar-paroi-b06344166/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-cyan-300 hover:text-white transition hover:scale-110"
                        >
                            <Linkedin className="size-4 text-cyan-400" />
                            <span>LinkedIn Profile ↗</span>
                        </a>

                        <a
                            href="https://x.com/Mr_paroi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sky-300 hover:text-white transition hover:scale-110"
                        >
                            <Twitter className="size-4 text-sky-400" />
                            <span>Twitter / X (@Mr_paroi) ↗</span>
                        </a>

                        <a
                            href="https://github.com/KishorKumarParoi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-purple-300 hover:text-white transition hover:scale-110"
                        >
                            <Github className="size-4 text-purple-400" />
                            <span>GitHub Repos ↗</span>
                        </a>

                        <a
                            href="https://kishor.tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-cyan-300 hover:text-white transition hover:scale-110"
                        >
                            <Terminal className="size-4 text-cyan-400" />
                            <span>kishor.tech (macOS OS) ↗</span>
                        </a>

                        <a
                            href="https://koom-ai.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-emerald-300 hover:text-white transition hover:scale-110"
                        >
                            <Sparkles className="size-4 text-emerald-400" />
                            <span>KoomAI Product ↗</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;