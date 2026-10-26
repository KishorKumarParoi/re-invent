import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import SpotlightSearch from './SpotlightSearch'
import ClashGame from './ClashGame'
import { TiLocationArrow } from 'react-icons/ti'
import { useWindowScroll } from 'react-use'
import gsap from 'gsap'
import { Maximize2, Minimize2, Search, Download, ChevronDown, Gamepad2, Sparkles, ExternalLink, Shield } from 'lucide-react'

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: '3D Metaverse', href: '#hacker-room' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
]

export const Navbar = () => {
    const navContainerRef = useRef(null)
    const lastScrollYRef = useRef(0)
    const [isNavVisible, setIsNavVisible] = useState(false)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [isSpotlightOpen, setIsSpotlightOpen] = useState(false)
    const [isGamingOpen, setIsGamingOpen] = useState(false)
    const [showResumeDropdown, setShowResumeDropdown] = useState(false)

    const { y: currentScrollY } = useWindowScroll()

    // Fullscreen Toggle
    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().then(() => {
                setIsFullscreen(true)
            }).catch((err) => {
                console.error("Fullscreen error:", err)
            })
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen().then(() => {
                    setIsFullscreen(false)
                })
            }
        }
    }

    // Keyboard Shortcuts: 'F' for Fullscreen, '⌘K' for Spotlight, 'G' for Gaming
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return
            if (e.metaKey || e.ctrlKey || e.altKey) {
                if (e.key.toLowerCase() === 'k') {
                    e.preventDefault()
                    setIsSpotlightOpen((prev) => !prev)
                }
                return
            }

            if (e.key.toLowerCase() === 'f') {
                e.preventDefault()
                toggleFullscreen()
            } else if (e.key.toLowerCase() === 'g') {
                e.preventDefault()
                setIsGamingOpen((prev) => !prev)
            }
        }

        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement)
        }

        window.addEventListener('keydown', handleKeyDown)
        document.addEventListener('fullscreenchange', handleFullscreenChange)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('fullscreenchange', handleFullscreenChange)
        }
    }, [])

    useEffect(() => {
        const prevY = lastScrollYRef.current

        if (currentScrollY === 0) {
            navContainerRef.current?.classList.remove('floating-nav')
            window.requestAnimationFrame(() => setIsNavVisible(true))
        } else if (currentScrollY > prevY) {
            navContainerRef.current?.classList.add('floating-nav')
            window.requestAnimationFrame(() => setIsNavVisible(false))
        } else {
            navContainerRef.current?.classList.remove('floating-nav')
            window.requestAnimationFrame(() => setIsNavVisible(true))
        }

        lastScrollYRef.current = currentScrollY
    }, [currentScrollY])

    useEffect(() => {
        if (navContainerRef.current) {
            gsap.to(navContainerRef.current, {
                y: isNavVisible ? 0 : -100,
                opacity: isNavVisible ? 1 : 0,
                duration: 0.5,
                ease: 'power2.inOut',
            })
        }
    }, [isNavVisible])

    return (
        <>
            {/* Apple Spotlight Search Palette */}
            <SpotlightSearch isOpen={isSpotlightOpen} onClose={() => setIsSpotlightOpen(false)} />

            {/* Clash of Clans Village Defense RTS Game Modal */}
            <ClashGame isOpen={isGamingOpen} onClose={() => setIsGamingOpen(false)} />

            <div
                ref={navContainerRef}
                className='fixed inset-x-0 top-3 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'
            >
                <header className='absolute top-1/2 w-full -translate-y-1/2'>
                    <nav className='flex size-full items-center justify-between px-3 md:px-5 py-2.5 bg-black/50 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl'>
                        {/* Left: macOS Controls + Logo + KOOM-AI Product Button */}
                        <div className='flex items-center gap-3'>
                            {/* macOS Window Controls */}
                            <div className='hidden sm:flex items-center gap-1.5'>
                                <span className='size-3 rounded-full bg-[#ff5f56] opacity-80'></span>
                                <span className='size-3 rounded-full bg-[#ffbd2e] opacity-80'></span>
                                <button
                                    onClick={toggleFullscreen}
                                    className='size-3 rounded-full bg-[#27c93f] hover:scale-125 transition-transform cursor-pointer'
                                    title='Toggle Fullscreen (F)'
                                />
                            </div>

                            <a href="#hero" className="flex items-center gap-2 hover:opacity-80 transition">
                                <img src='/img/logo.png' alt='logo' className='w-8' />
                            </a>

                            {/* PRODUCT NAVIGATION: Navigate directly to Live KOOM-AI Platform */}
                            <a
                                href="https://koom-ai.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-1.5 px-3 py-1 bg-linear-to-r from-purple-950/80 to-indigo-950/80 hover:from-purple-900 hover:to-indigo-900 border border-purple-500/50 hover:border-cyan-400 rounded-full text-xs font-bold text-white transition-all duration-300 hover:scale-105 shadow-md shadow-purple-500/20"
                                title="Navigate to Flagship Product: KOOM-AI"
                            >
                                <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                                <span className="bg-linear-to-r from-purple-200 via-white to-cyan-300 bg-clip-text text-transparent">
                                    KOOM-AI
                                </span>
                                <span className="hidden lg:inline text-[9px] uppercase tracking-wider text-cyan-300 bg-cyan-950/80 border border-cyan-800/40 px-1 rounded">
                                    Product ↗
                                </span>
                            </a>

                            {/* FLAGSHIP MACOS PORTFOLIO: Navigate directly to kishor.tech */}
                            <a
                                href="https://kishor.tech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-1.5 px-3 py-1 bg-linear-to-r from-emerald-950/80 to-teal-950/80 hover:from-emerald-900 hover:to-teal-900 border border-emerald-500/50 hover:border-emerald-300 rounded-full text-xs font-bold text-white transition-all duration-300 hover:scale-105 shadow-md shadow-emerald-500/20"
                                title="Open macOS Desktop Portfolio (kishor.tech)"
                            >
                                <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                                <span className="bg-linear-to-r from-emerald-200 via-white to-cyan-300 bg-clip-text text-transparent">
                                    kishor.tech
                                </span>
                                <span className="hidden sm:inline text-[9px] uppercase tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-800/40 px-1 rounded">
                                    macOS OS ↗
                                </span>
                            </a>

                            {/* Spotlight Search Trigger */}
                            <button
                                onClick={() => setIsSpotlightOpen(true)}
                                className='hidden xl:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-gray-300 px-3 py-1 rounded-full text-xs transition border border-white/10 cursor-pointer'
                                title='Spotlight Search (⌘K)'
                            >
                                <Search className='size-3 text-cyan-400' />
                                <span>Search projects & architecture...</span>
                                <kbd className='font-mono text-[9px] bg-black/50 px-1 rounded text-gray-400'>⌘K</kbd>
                            </button>
                        </div>

                        {/* Right: Nav items + Flashy Gaming button + Fullscreen + Resume dropdown */}
                        <div className='flex h-full items-center gap-2 md:gap-3'>
                            {/* Nav Sections from Resume */}
                            <div className='hidden md:flex items-center gap-1'>
                                {navItems.map((item, index) => (
                                    <a
                                        key={index}
                                        title={item.name}
                                        href={item.href}
                                        className='nav-hover-btn text-xs font-medium text-gray-300 hover:text-white transition'
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                            {/* FLASHY "GAMING" BUTTON: Clash of Clans Village Defense RTS */}
                            <button
                                onClick={() => setIsGamingOpen(true)}
                                className="relative group overflow-hidden px-3.5 py-1.5 rounded-full font-black text-xs uppercase tracking-wider text-black cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/30 flex items-center gap-1.5 bg-linear-to-r from-amber-400 via-orange-400 to-yellow-300"
                                title="Play Clash of Paroi: Village Defense RTS [Press G]"
                            >
                                <span className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                                <Gamepad2 className="size-4 text-black animate-bounce" />
                                <span className="font-extrabold tracking-wider">Gaming</span>
                                <span className="text-[9px] bg-black/20 text-black px-1 rounded font-mono font-bold">
                                    CoC
                                </span>
                            </button>

                            {/* Fullscreen Toggle Button */}
                            <button
                                onClick={toggleFullscreen}
                                className='p-2 rounded-full hover:bg-white/10 text-cyan-300 transition cursor-pointer'
                                title={isFullscreen ? 'Exit Fullscreen (F)' : 'Enter Fullscreen (F)'}
                            >
                                {isFullscreen ? <Minimize2 className='size-4' /> : <Maximize2 className='size-4' />}
                            </button>

                            {/* Multi-Format Resume Dropdown Button */}
                            <div className='relative' onMouseLeave={() => setShowResumeDropdown(false)}>
                                <button
                                    onClick={() => setShowResumeDropdown(!showResumeDropdown)}
                                    onMouseEnter={() => setShowResumeDropdown(true)}
                                    className='flex items-center gap-1 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 cursor-pointer'
                                >
                                    <span>Resume</span>
                                    <ChevronDown className='size-3' />
                                </button>

                                {showResumeDropdown && (
                                    <div className='absolute right-0 top-9 w-64 bg-gray-950/95 backdrop-blur-xl border border-white/20 rounded-2xl p-2.5 shadow-2xl z-50 text-white text-xs space-y-2 animate-in fade-in duration-150'>
                                        <div>
                                            <div className='text-[10px] font-bold uppercase text-cyan-400 px-2 py-0.5'>1-Page Academic Split:</div>
                                            <div className='flex gap-1 px-1'>
                                                <a href='/files/resume.pdf' target='_blank' rel='noopener noreferrer' download className='flex-1 text-center bg-white/10 hover:bg-cyan-500/30 text-cyan-200 py-1 rounded text-[11px] font-semibold transition'>PDF</a>
                                                <a href='/files/resume.docx' download className='flex-1 text-center bg-white/10 hover:bg-cyan-500/30 text-cyan-200 py-1 rounded text-[11px] font-semibold transition'>DOCX</a>
                                                <a href='/files/resume.tex' download className='flex-1 text-center bg-white/10 hover:bg-cyan-500/30 text-cyan-200 py-1 rounded text-[11px] font-semibold transition'>LaTeX</a>
                                            </div>
                                        </div>
                                        <div className='border-t border-white/10 pt-1'>
                                            <div className='text-[10px] font-bold uppercase text-emerald-400 px-2 py-0.5'>2-Page ATS Single-Column:</div>
                                            <div className='flex gap-1 px-1'>
                                                <a href='/files/resume_single_column.pdf' target='_blank' rel='noopener noreferrer' download className='flex-1 text-center bg-white/10 hover:bg-emerald-500/30 text-emerald-200 py-1 rounded text-[11px] font-semibold transition'>PDF</a>
                                                <a href='/files/resume_single_column.docx' download className='flex-1 text-center bg-white/10 hover:bg-emerald-500/30 text-emerald-200 py-1 rounded text-[11px] font-semibold transition'>DOCX</a>
                                                <a href='/files/resume_single_column.tex' download className='flex-1 text-center bg-white/10 hover:bg-emerald-500/30 text-emerald-200 py-1 rounded text-[11px] font-semibold transition'>LaTeX</a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    )
}

export default Navbar