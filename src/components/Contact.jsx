import React, { useRef, useEffect, useState } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Coffee, Sparkles, Send, ExternalLink, Quote, Linkedin, Twitter, MessageSquare, Mail, Github } from "lucide-react";

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
        quote: "It's easier to ask for forgiveness than it is to get permission.",
        author: "Grace Hopper",
        role: "Computer Scientist Pioneer",
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

    // Rotate quotes every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndex((prev) => (prev + 1) % LEGEND_QUOTES.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    // Optimized mouse tilt with RAF throttle (Zero Lag)
    const handleMouseMove = (e) => {
        if (rafIdRef.current) return;

        rafIdRef.current = requestAnimationFrame(() => {
            rafIdRef.current = null;
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * 1.5;
            const rotateY = ((x - centerX) / centerX) * -1.5;

            gsap.to(containerRef.current, {
                duration: 0.4,
                rotateX,
                rotateY,
                transformPerspective: 1000,
                ease: "power1.out",
                overwrite: "auto",
            });
        });
    };

    const handleMouseLeave = () => {
        gsap.to(containerRef.current, {
            duration: 0.6,
            rotateX: 0,
            rotateY: 0,
            ease: "power2.out",
            overwrite: "auto",
        });
    };

    useEffect(() => {
        return () => {
            if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const currentQuote = LEGEND_QUOTES[quoteIndex];

    return (
        <div
            ref={contactRef}
            id="contact"
            className="my-24 min-h-[85vh] w-screen px-4 md:px-10 perspective will-change-transform"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={containerRef}
                className="relative max-w-6xl mx-auto rounded-3xl bg-linear-to-b from-gray-950 via-slate-950 to-black py-20 px-6 md:px-16 text-blue-50 border border-cyan-500/30 backdrop-blur-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden transform-gpu"
                style={{ willChange: "transform" }}
            >
                {/* Apple-grade Glittering Light Glows */}
                <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-80" />
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-56 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-56 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />

                {/* Content Header */}
                <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Steaming Cup of Tea Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r from-amber-500/20 via-cyan-500/20 to-emerald-500/20 border border-amber-400/50 text-xs font-mono font-bold text-amber-300 mb-6 shadow-lg shadow-amber-500/10">
                        <Coffee className="size-4 text-amber-400 animate-bounce" />
                        <span>Let's Connect Over a Cup of Tea & Coffee ☕</span>
                    </div>

                    <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-4 max-w-4xl">
                        <span className="bg-linear-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                            Let's Build the Future Together
                        </span>
                    </h2>

                    <p className="max-w-xl text-sm md:text-base text-gray-300 leading-relaxed mb-8">
                        Whether you are architecting a high-throughput polyglot microservice, building a multi-cloud Medallion Lakehouse, or establishing zero-trust Agentic AI defenses — I'd love to collaborate.
                    </p>

                    {/* Flashing Legendary Programming Quotes Carousel */}
                    <div className="w-full max-w-2xl bg-black/60 border border-white/10 rounded-2xl p-5 mb-8 backdrop-blur-md shadow-inner transition-all duration-500">
                        <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 mb-2">
                            <span className="flex items-center gap-1.5 font-bold">
                                <Quote className="size-3.5 text-amber-400" />
                                <span>Words of the Masters</span>
                            </span>
                            <span className="text-gray-400">#{quoteIndex + 1} of {LEGEND_QUOTES.length}</span>
                        </div>
                        <p className="text-sm md:text-base italic text-gray-200 font-serif leading-relaxed mb-2">
                            "{currentQuote.quote}"
                        </p>
                        <p className="text-xs text-amber-300 font-semibold text-right">
                            — {currentQuote.author} <span className="text-gray-400 font-normal">({currentQuote.role})</span>
                        </p>
                    </div>

                    {/* Direct Contact Actions */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                        <a
                            href="mailto:kishor.ruet.cse@gmail.com"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-cyan-400 via-teal-400 to-emerald-400 text-black font-extrabold uppercase tracking-wider text-xs shadow-xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all"
                        >
                            <Mail className="size-4" />
                            <span>kishor.ruet.cse@gmail.com</span>
                        </a>

                        <a
                            href="https://api.whatsapp.com/send/?phone=8801724714156&text=Hi+Kishor%2C+I+saw+your+portfolio.&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/50 text-emerald-300 font-bold uppercase tracking-wider text-xs hover:scale-105 transition-all"
                        >
                            <MessageSquare className="size-4" />
                            <span>WhatsApp Connect</span>
                        </a>
                    </div>

                    {/* Verified & Updated Social Network Bar */}
                    <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/10 w-full max-w-xl text-xs font-semibold">
                        <a
                            href="https://www.linkedin.com/in/kishor-paroi-b06344166/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-cyan-300 hover:text-white transition hover:scale-110"
                        >
                            <Linkedin className="size-4 text-cyan-400" />
                            <span>LinkedIn Profile ↗</span>
                        </a>

                        <a
                            href="https://twitter.com/paroi_kishor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sky-300 hover:text-white transition hover:scale-110"
                        >
                            <Twitter className="size-4 text-sky-400" />
                            <span>Twitter / X ↗</span>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;