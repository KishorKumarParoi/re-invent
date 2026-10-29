import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import SpotlightSearch from './SpotlightSearch'
import ClashGame from './ClashGame'
import { TiLocationArrow } from 'react-icons/ti'
import { useWindowScroll } from 'react-use'
import gsap from 'gsap'
import { Maximize2, Minimize2, Search, Download, ChevronDown, Gamepad2, Sparkles, ExternalLink, Shield, Menu, X, FileText } from 'lucide-react'

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'AI Journey', href: '#journey' },
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
            setIsMobileMenuOpen(false)
            setShowResumeDropdown(false)
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
                duration: 0.4,
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
                className='fixed inset-x-0 top-2 sm:top-3 z-50 transition-all duration-500 px-2 sm:px-4 max-w-7xl mx-auto w-full'
            >
                <header className='w-full relative'>
                    <nav className='flex w-full items-center justify-between px-2.5 sm:px-4 py-2 sm:py-2.5 bg-black/65 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl relative'>
                        {/* Left: macOS Controls + Logo + Flagship Ecosystem Pills */}
                        <div className='flex items-center gap-2 sm:gap-2.5 shrink-0'>
                            {/* macOS Window Controls */}
                            <div className='hidden sm:flex items-center gap-1.5 mr-1'>
                                <span className='size-2.5 rounded-full bg-[#ff5f56] opacity-80'></span>
                                <span className='size-2.5 rounded-full bg-[#ffbd2e] opacity-80'></span>
                                <button
                                    onClick={toggleFullscreen}
                                    className='size-2.5 rounded-full bg-[#27c93f] hover:scale-125 transition-transform cursor-pointer'
                                    title='Toggle Fullscreen (F)'
                                />
                            </div>

                            <a href="#hero" className="flex items-center gap-1.5 hover:opacity-80 transition shrink-0">
                                <img src='/img/logo.png' alt='logo' className='w-7 sm:w-8 shrink-0' />
                            </a>

                            {/* KOOM-AI Flagship Pill */}
                            <a
                                href="https://koom.kishor.tech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 px-2 sm:px-2.5 py-1 bg-gradient-to-r from-purple-950/80 to-indigo-950/80 hover:from-purple-900 hover:to-indigo-900 border border-purple-500/40 hover:border-cyan-400 rounded-full text-[11px] sm:text-xs font-bold text-white transition-all duration-300 hover:scale-105 shadow-sm shadow-purple-500/20 whitespace-nowrap"
                                title="Navigate to Flagship Product: KOOM-AI (Sub-120ms WebRTC Engine)"
                            >
                                <span className="size-1.5 sm:size-2 rounded-full bg-cyan-400 animate-pulse" />
                                <span className="bg-gradient-to-r from-purple-200 via-white to-cyan-300 bg-clip-text text-transparent">
                                    KOOM-AI
                                </span>
                                <span className="hidden 2xl:inline text-[9px] uppercase tracking-wider text-cyan-300 bg-cyan-950/80 border border-cyan-800/40 px-1 rounded">
                                    Live ↗
                                </span>
                            </a>

                            {/* Flagship Academic / macOS Portfolio Pill */}
                            <a
                                href="https://kishor.tech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden min-[480px]:flex items-center gap-1 px-2 sm:px-2.5 py-1 bg-gradient-to-r from-emerald-950/80 to-teal-950/80 hover:from-emerald-900 hover:to-teal-900 border border-emerald-500/40 hover:border-emerald-300 rounded-full text-[11px] sm:text-xs font-bold text-white transition-all duration-300 hover:scale-105 shadow-sm shadow-emerald-500/20 whitespace-nowrap"
                                title="Open Academic Vantage Portfolio (kishor.tech)"
                            >
                                <span className="size-1.5 sm:size-2 rounded-full bg-emerald-400 animate-ping" />
                                <span className="bg-gradient-to-r from-emerald-200 via-white to-cyan-300 bg-clip-text text-transparent">
                                    kishor.tech
                                </span>
                            </a>
                        </div>

                        {/* Center: Desktop Navigation Section Links (Auto-Resizing & Fluid) */}
                        <div className='hidden xl:flex items-center gap-0.5 2xl:gap-1.5 mx-2'>
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    title={item.name}
                                    href={item.href}
                                    className='px-2 py-1 rounded-lg text-[11px] 2xl:text-xs font-medium text-gray-300 hover:text-cyan-300 hover:bg-white/5 transition whitespace-nowrap'
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        {/* Right: Controls + Gaming + Fullscreen + Resume + Mobile Menu Toggle */}
                        <div className='flex items-center gap-1.5 sm:gap-2 shrink-0'>
                            {/* Spotlight Search: Full button on 2xl, icon on smaller screens */}
                            <button
                                onClick={() => setIsSpotlightOpen(true)}
                                className='hidden 2xl:flex items-center gap-2 bg-white/10 hover:bg-white/15 text-gray-300 px-2.5 py-1 rounded-full text-xs transition border border-white/10 cursor-pointer'
                                title='Spotlight Search (⌘K)'
                            >
                                <Search className='size-3 text-cyan-400' />
                                <span className="text-[11px]">Search...</span>
                                <kbd className='font-mono text-[9px] bg-black/50 px-1 rounded text-gray-400'>⌘K</kbd>
                            </button>
                            <button
                                onClick={() => setIsSpotlightOpen(true)}
                                className='hidden sm:flex 2xl:hidden p-1.5 rounded-full hover:bg-white/10 text-cyan-300 transition cursor-pointer border border-white/5'
                                title='Spotlight Search (⌘K)'
                            >
                                <Search className='size-3.5' />
                            </button>

                            {/* Flashy Gaming Button */}
                            <button
                                onClick={() => setIsGamingOpen(true)}
                                className="relative group overflow-hidden px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-black text-[10px] sm:text-xs uppercase tracking-wider text-black cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-md shadow-amber-500/20 flex items-center gap-1 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 whitespace-nowrap"
                                title="Play Clash of Paroi: Village Defense RTS [Press G]"
                            >
                                <Gamepad2 className="size-3.5 text-black animate-bounce" />
                                <span className="font-extrabold tracking-wider">Gaming</span>
                                <span className="hidden md:inline text-[9px] bg-black/20 text-black px-1 rounded font-mono font-bold">
                                    CoC
                                </span>
                            </button>

                            {/* Fullscreen Toggle */}
                            <button
                                onClick={toggleFullscreen}
                                className='hidden sm:flex p-1.5 sm:p-2 rounded-full hover:bg-white/10 text-cyan-300 transition cursor-pointer'
                                title={isFullscreen ? 'Exit Fullscreen (F)' : 'Enter Fullscreen (F)'}
                            >
                                {isFullscreen ? <Minimize2 className='size-3.5' /> : <Maximize2 className='size-3.5' />}
                            </button>

                            {/* Multi-Format Resume Dropdown Button */}
                            <div className='relative' onMouseLeave={() => setShowResumeDropdown(false)}>
                                <button
                                    onClick={() => setShowResumeDropdown(!showResumeDropdown)}
                                    onMouseEnter={() => setShowResumeDropdown(true)}
                                    className='flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 cursor-pointer whitespace-nowrap'
                                >
                                    <span>Resume</span>
                                    <ChevronDown className={`size-3 transition-transform duration-200 ${showResumeDropdown ? 'rotate-180' : ''}`} />
                                </button>

                                {showResumeDropdown && (
                                    <div className='absolute right-0 top-full mt-2 w-64 max-w-[calc(100vw-1.5rem)] bg-gray-950/95 backdrop-blur-2xl border border-white/20 rounded-2xl p-2.5 shadow-2xl z-50 text-white text-xs space-y-2 animate-in fade-in slide-in-from-top-1 duration-150'>
                                        <div>
                                            <div className='text-[10px] font-bold uppercase text-cyan-400 px-2 py-0.5'>📄 1-Page Academic Split:</div>
                                            <div className='flex gap-1 px-1'>
                                                <a href='/files/resume.pdf' target='_blank' rel='noopener noreferrer' download className='flex-1 text-center bg-white/10 hover:bg-cyan-500/30 text-cyan-200 py-1 rounded text-[11px] font-semibold transition'>PDF</a>
                                                <a href='/files/resume.docx' download className='flex-1 text-center bg-white/10 hover:bg-cyan-500/30 text-cyan-200 py-1 rounded text-[11px] font-semibold transition'>DOCX</a>
                                                <a href='/files/resume.tex' download className='flex-1 text-center bg-white/10 hover:bg-cyan-500/30 text-cyan-200 py-1 rounded text-[11px] font-semibold transition'>LaTeX</a>
                                            </div>
                                        </div>
                                        <div className='border-t border-white/10 pt-1'>
                                            <div className='text-[10px] font-bold uppercase text-emerald-400 px-2 py-0.5'>📑 2-Page ATS Single-Column:</div>
                                            <div className='flex gap-1 px-1'>
                                                <a href='/files/resume_single_column.pdf' target='_blank' rel='noopener noreferrer' download className='flex-1 text-center bg-white/10 hover:bg-emerald-500/30 text-emerald-200 py-1 rounded text-[11px] font-semibold transition'>PDF</a>
                                                <a href='/files/resume_single_column.docx' download className='flex-1 text-center bg-white/10 hover:bg-emerald-500/30 text-emerald-200 py-1 rounded text-[11px] font-semibold transition'>DOCX</a>
                                                <a href='/files/resume_single_column.tex' download className='flex-1 text-center bg-white/10 hover:bg-emerald-500/30 text-emerald-200 py-1 rounded text-[11px] font-semibold transition'>LaTeX</a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Mobile/Tablet Menu Button Toggle (Screens < xl) */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className='xl:hidden p-1.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition border border-white/5 cursor-pointer'
                                aria-label="Toggle Navigation Drawer"
                            >
                                {isMobileMenuOpen ? <X className='size-5 text-cyan-400' /> : <Menu className='size-5' />}
                            </button>
                        </div>
                    </nav>

                    {/* Responsive Mobile/Tablet Cyber Drawer */}
                    {isMobileMenuOpen && (
                        <div className='xl:hidden mt-2 w-full bg-black/95 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl p-4 shadow-2xl space-y-4 max-h-[80vh] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200 text-left font-mono'>
                            {/* Section Navigation Links */}
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center justify-between">
                                    <span>System Navigation:</span>
                                    <span className="text-gray-500 font-normal">8 Modules</span>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                    {navItems.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="px-2.5 py-1.5 rounded-lg text-xs font-sans font-medium text-gray-200 bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 border border-white/5 transition flex items-center justify-between"
                                        >
                                            <span>{item.name}</span>
                                            <span className="text-[10px] text-gray-500">#</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Digital Ecosystem Portals */}
                            <div className="border-t border-white/10 pt-3">
                                <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-2">
                                    Digital Ecosystem Hub:
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                                    <a
                                        href="https://koom.kishor.tech"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-2.5 py-1.5 rounded-lg bg-purple-950/40 border border-purple-500/40 text-purple-300 flex items-center justify-between hover:bg-purple-900/40 transition"
                                    >
                                        <span>⚡ KoomAI</span>
                                        <ExternalLink className="size-3" />
                                    </a>
                                    <a
                                        href="https://kishor.tech"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-2.5 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 flex items-center justify-between hover:bg-emerald-900/40 transition"
                                    >
                                        <span>🎓 kishor.tech</span>
                                        <ExternalLink className="size-3" />
                                    </a>
                                    <a
                                        href="https://macos.kishor.tech"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-2.5 py-1.5 rounded-lg bg-blue-950/40 border border-blue-500/40 text-blue-300 flex items-center justify-between hover:bg-blue-900/40 transition"
                                    >
                                        <span>💻 macOS</span>
                                        <ExternalLink className="size-3" />
                                    </a>
                                    <a
                                        href="https://3d.kishor.tech"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-2.5 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 flex items-center justify-between hover:bg-cyan-900/40 transition"
                                    >
                                        <span>🧊 3D World</span>
                                        <ExternalLink className="size-3" />
                                    </a>
                                </div>
                            </div>

                            {/* Direct Resume Downloads */}
                            <div className="border-t border-white/10 pt-3">
                                <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-2">
                                    Verified Dossier &amp; Resume:
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                    <a
                                        href="/files/resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download
                                        className="px-3 py-2 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 flex items-center justify-between font-sans font-semibold hover:bg-cyan-500/30 transition"
                                    >
                                        <span>📄 1-Page Visual Resume (PDF)</span>
                                        <Download className="size-3.5" />
                                    </a>
                                    <a
                                        href="/files/resume_single_column.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download
                                        className="px-3 py-2 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 flex items-center justify-between font-sans font-semibold hover:bg-emerald-500/30 transition"
                                    >
                                        <span>📑 2-Page ATS Resume (PDF)</span>
                                        <Download className="size-3.5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </header>
            </div>
        </>
    )
}

export default Navbar