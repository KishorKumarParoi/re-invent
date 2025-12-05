import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const AnimatedTitle = ({ title, containerClass = "" }) => {
    const containerRef = useRef(null)

    useEffect(() => {
        if (!containerRef.current) return

        // Small delay to ensure DOM is fully rendered
        const timer = setTimeout(() => {
            const ctx = gsap.context(() => {
                const words = containerRef.current?.querySelectorAll('span[data-word="true"]')

                if (!words || words.length === 0) {
                    console.warn('No animated words found')
                    return
                }

                // Reset initial state first
                gsap.set(words, {
                    opacity: 0,
                    y: 120,
                    rotateX: -100,
                    rotateY: 40,
                    scale: 0.3,
                    filter: 'blur(10px)',
                    textShadow: 'none',
                })

                // SINGLE UNIFIED ENTRANCE ANIMATION - ALL EFFECTS IN ONE
                gsap.from(words, {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top center',
                        end: 'bottom top',
                        scrub: 1,
                        markers: false,
                        toggleActions: 'play reverse play reverse',
                    },
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    filter: 'blur(0px)',
                    textShadow: '0 0 30px rgba(34, 211, 238, 0.8), 0 0 60px rgba(16, 185, 129, 0.5)',
                    transformOrigin: 'center center',
                    ease: 'back.out(2)',
                    stagger: {
                        amount: 0.8,
                        from: 'center',
                    },
                    duration: 1.5,
                })

                // Refresh ScrollTrigger to recalculate positions
                ScrollTrigger.refresh()
            }, containerRef)

            return () => ctx.revert()
        }, 100)

        return () => clearTimeout(timer)
    }, [title])

    const renderLines = () => {
        if (!title) {
            console.warn('❌ No title provided to AnimatedTitle')
            return null
        }

        const titleStr = String(title).trim()
        const lines = titleStr.split('<br/>')

        if (lines.length === 0) return null

        return lines.filter(line => line.trim()).map((line, lineIndex) => {
            const trimmedLine = line.trim()
            if (!trimmedLine) return null

            const words = trimmedLine.split(/\s+/).filter(Boolean)

            return (
                <div
                    key={lineIndex}
                    className='flex flex-wrap justify-center gap-3 md:gap-6 px-4 md:px-10 mb-4'
                >
                    {words.map((word, wordIndex) => {
                        const isBold = word.includes('<b>')
                        const cleanWord = word.replace(/<\/?b>/gi, '')

                        return (
                            <span
                                key={`${lineIndex}-${wordIndex}`}
                                data-word="true"
                                className={`inline-block text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter transition-all duration-300 ${isBold
                                    ? 'bg-linear-to-r from-cyan-300 via-emerald-300 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl'
                                    : 'text-white drop-shadow-xl'
                                    } hover:scale-110 hover:drop-shadow-[0_0_30px_rgba(34,211,238,0.8)] cursor-pointer transform will-change-transform`}
                                style={{
                                    filter: isBold ? 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.6))' : 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                {cleanWord}
                            </span>
                        )
                    })}
                </div>
            )
        }).filter(Boolean)
    }

    return (
        <div
            ref={containerRef}
            className={`animated-title text-center py-20 relative overflow-hidden ${containerClass}`}
        >
            {/* Background linear orbs */}
            <div className='absolute inset-0 -z-20 overflow-hidden'>
                <div className='absolute top-1/2 left-1/4 w-96 h-96 bg-linear-to-r from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse'></div>
                <div className='absolute top-1/2 right-1/4 w-96 h-96 bg-linear-to-l from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse' style={{ animationDelay: '0.5s' }}></div>
                <div className='absolute -top-1/4 left-1/2 translate-x-[-50%] w-80 h-80 bg-linear-to-b from-emerald-500/10 to-transparent rounded-full blur-3xl'></div>
            </div>

            {/* Main title container */}
            <div className='relative z-10'>
                {/* Animated title content */}
                <div className='space-y-6 md:space-y-8'>
                    {renderLines()}
                </div>

                {/* Top decorative line */}
                <div className='absolute -top-16 left-1/2 translate-x-[-50%] w-48 h-0.5 bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-60 blur-sm'></div>

                {/* Bottom decorative line */}
                <div className='absolute -bottom-16 left-1/2 translate-x-[-50%] w-48 h-0.5 bg-linear-to-r from-transparent via-emerald-400 to-transparent opacity-60 blur-sm'></div>

                {/* Left accent glow */}
                <div className='absolute -left-20 top-1/2 translate-y-[-50%] w-40 h-40 bg-linear-to-r from-cyan-400/40 to-transparent rounded-full blur-3xl'></div>

                {/* Right accent glow */}
                <div className='absolute -right-20 top-1/2 translate-y-[-50%] w-40 h-40 bg-linear-to-l from-emerald-400/40 to-transparent rounded-full blur-3xl'></div>
            </div>

            {/* Animated accent dots */}
            <div className='mt-16 flex justify-center gap-4'>
                <div className='w-4 h-4 rounded-full bg-linear-to-br from-cyan-400 to-cyan-300 animate-pulse shadow-lg shadow-cyan-400/60 hover:scale-125 transition-transform'></div>
                <div className='w-4 h-4 rounded-full bg-linear-to-br from-emerald-400 to-emerald-300 animate-pulse shadow-lg shadow-emerald-400/60 hover:scale-125 transition-transform' style={{ animationDelay: '0.2s' }}></div>
                <div className='w-4 h-4 rounded-full bg-linear-to-br from-blue-400 to-blue-300 animate-pulse shadow-lg shadow-blue-400/60 hover:scale-125 transition-transform' style={{ animationDelay: '0.4s' }}></div>
            </div>

            {/* Floating particles */}
            <div className='absolute inset-0 pointer-events-none overflow-hidden -z-10'>
                <div className='absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-pulse opacity-60' style={{ animationDelay: '0s' }}></div>
                <div className='absolute top-1/3 right-1/4 w-2 h-2 bg-emerald-300 rounded-full animate-pulse opacity-60' style={{ animationDelay: '0.3s' }}></div>
                <div className='absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-300 rounded-full animate-pulse opacity-60' style={{ animationDelay: '0.6s' }}></div>
                <div className='absolute top-2/3 right-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-pulse opacity-60' style={{ animationDelay: '0.9s' }}></div>
            </div>
        </div>
    )
}

export default AnimatedTitle