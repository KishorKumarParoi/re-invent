import React, { useRef, useEffect, useState } from 'react'
import AnimatedTitle from './AnimatedTitle'
import RoundedCorners from './RoundedCorner.jsx'
import Button from './Button'
import { Sparkles, Compass, Shield, Terminal, X, ExternalLink, Cpu } from 'lucide-react'

const Story = () => {
    const frameRef = useRef(null)
    const rafIdRef = useRef(null)
    const [isPortalOpen, setIsPortalOpen] = useState(false)

    // Ultra-smooth zero-lag tilt using direct CSS transforms & requestAnimationFrame
    const handleMouseMove = (e) => {
        if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return
        if (rafIdRef.current) return

        rafIdRef.current = requestAnimationFrame(() => {
            rafIdRef.current = null
            const element = frameRef.current
            if (!element) return

            const rect = element.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            const centerX = rect.width / 2
            const centerY = rect.height / 2

            const rotateX = ((y - centerY) / centerY) * -5
            const rotateY = ((x - centerX) / centerX) * 5

            element.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
        })
    }

    const handleMouseLeave = () => {
        const element = frameRef.current
        if (!element) return
        element.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    }

    useEffect(() => {
        return () => {
            if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
        }
    }, [])

    return (
        <section id="story" className="relative min-h-dvh w-full max-w-full text-blue-100 py-20 bg-linear-to-b from-black via-slate-950 to-black overflow-hidden transform-gpu">
            {/* Background Radiant Nebula Lights */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[300px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="flex size-full flex-col items-center py-10 pb-24 relative z-10">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-300 mb-3 tracking-widest uppercase">
                    <Compass className="size-4 text-emerald-400 animate-spin" />
                    <span>The Multiversal Architecture Realm</span>
                </div>

                <AnimatedTitle
                    title={"The st<b>o</b>ry of <br/> a hidden real<b>m</b>"}
                    sectionId="#story"
                    containerClass="pointer-events-none mix-blend-difference relative z-10 mb-8"
                />

                <div className="relative size-full max-w-5xl mx-auto px-4">
                    {/* Floating Realm Telemetry Badges (Desktop) */}
                    <div className="hidden lg:flex items-center justify-between max-w-4xl mx-auto mb-4 text-xs font-mono text-gray-400">
                        <div className="flex items-center gap-2 bg-black/60 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
                            <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                            <span>REALM DIMENSION: 15 PRODUCTION PLATFORMS</span>
                        </div>
                        <div className="flex items-center gap-2 bg-black/60 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
                            <Cpu className="size-3.5 text-cyan-400" />
                            <span>RUNTIME: &lt;0.5ms RUST SIMD ENGINE</span>
                        </div>
                    </div>

                    {/* Image container with rounded corners and GPU optimization */}
                    <div className="story-img-container relative overflow-hidden rounded-3xl mx-auto max-w-4xl border border-white/10 shadow-2xl shadow-cyan-500/10 backdrop-blur-sm group">
                        <div className="story-img-mask">
                            <div className="story-img-content relative">
                                <img
                                    ref={frameRef}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                    src="/img/entrance.webp"
                                    alt="Hidden Realm Portal Entrance"
                                    loading="eager"
                                    className="object-contain object-center w-full transition-transform duration-200 ease-out cursor-pointer"
                                    style={{ transform: 'perspective(800px) rotateX(0deg) rotateY(0deg)' }}
                                    onClick={() => setIsPortalOpen(true)}
                                />

                                {/* Interactive Overlay Pill */}
                                <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/70 pointer-events-none" />
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-auto">
                                    <button
                                        onClick={() => setIsPortalOpen(true)}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/80 hover:bg-black border border-cyan-400/50 hover:border-cyan-300 text-cyan-300 font-mono text-xs font-bold tracking-wider uppercase backdrop-blur-xl shadow-xl shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                                    >
                                        <Sparkles className="size-3.5 text-amber-400 animate-bounce" />
                                        <span>Click To Warp Into Realm Archive</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 pointer-events-none z-20">
                            <RoundedCorners />
                        </div>
                    </div>

                    {/* Quotation & Exploration Bar */}
                    <div className="mt-10 flex w-full justify-center md:me-44 md:justify-end">
                        <div className="flex h-full w-fit flex-col items-center md:items-start max-w-md px-6 text-center md:text-left space-y-3">
                            <p className="font-circular-web text-violet-50 text-sm md:text-base leading-relaxed">
                                “Bad programmers worry about the code. Good programmers worry about data structures and their relationships.”
                            </p>
                            <p className="italic text-xs text-cyan-300">~ Linus Torvalds (Linux &amp; Git Creator)</p>

                            <div className="pt-2 flex flex-wrap gap-3">
                                <button
                                    onClick={() => setIsPortalOpen(true)}
                                    className="px-6 py-2.5 rounded-full bg-linear-to-r from-cyan-400 via-teal-400 to-emerald-400 text-black font-extrabold text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
                                >
                                    Explore Realm Manifesto ↗
                                </button>
                                <a
                                    href="#projects"
                                    className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-gray-300 hover:text-white transition cursor-pointer"
                                >
                                    View 15 Architectures
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Interactive Realm Portal Modal */}
            {isPortalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
                    <div className="relative w-full max-w-2xl bg-gray-950 border border-cyan-500/40 rounded-3xl p-6 md:p-8 shadow-2xl shadow-cyan-500/20 text-white space-y-6">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-bold">
                                <Sparkles className="size-4 text-emerald-400" />
                                <span>THE HIDDEN REALM ARCHIVE // PROLOGUE</span>
                            </div>
                            <button
                                onClick={() => setIsPortalOpen(false)}
                                className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition cursor-pointer"
                            >
                                <X className="size-5" />
                            </button>
                        </div>

                        <div className="space-y-4 font-sans text-sm text-gray-300 leading-relaxed">
                            <p>
                                Welcome to the <strong className="text-white">Hidden Realm</strong>. Beyond code lies architectural purity: systems engineered not just to work, but to withstand high concurrency, distributed state divergence, and adversarial prompt attacks.
                            </p>
                            <div className="grid grid-cols-2 gap-3 font-mono text-xs pt-2">
                                <div className="p-3 rounded-2xl bg-black/60 border border-white/10">
                                    <div className="text-emerald-400 font-bold mb-1">RUST SIMD CORE</div>
                                    <div className="text-gray-400">Vector operations running at bare-metal L1 cache speed (&lt;0.5ms).</div>
                                </div>
                                <div className="p-3 rounded-2xl bg-black/60 border border-white/10">
                                    <div className="text-cyan-400 font-bold mb-1">SNOWFLAKE LAKEHOUSE</div>
                                    <div className="text-gray-400">35M+ orders in Medallion layers with dbt Core SCD-2 auditing.</div>
                                </div>
                                <div className="p-3 rounded-2xl bg-black/60 border border-white/10">
                                    <div className="text-purple-400 font-bold mb-1">NEMO GUARDRAILS</div>
                                    <div className="text-gray-400">Zero-trust WAF layer intercepting prompt injections via PyRIT.</div>
                                </div>
                                <div className="p-3 rounded-2xl bg-black/60 border border-white/10">
                                    <div className="text-amber-400 font-bold mb-1">FASTMCP GATEWAY</div>
                                    <div className="text-gray-400">Strict Human-in-the-Loop financial gates for autonomous agent tools.</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs font-mono">
                            <span className="text-gray-400">Architect: Kishor Kumar Paroi (RUET CSE)</span>
                            <a
                                href="#projects"
                                onClick={() => setIsPortalOpen(false)}
                                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold"
                            >
                                <span>Inspect Systems</span>
                                <ExternalLink className="size-3.5" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Story