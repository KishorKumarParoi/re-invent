import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import SpotlightSearch from './SpotlightSearch'
import { TiLocationArrow } from 'react-icons/ti'
import { useWindowScroll } from 'react-use'
import gsap from 'gsap'
import { Maximize2, Minimize2, Search, Command, Download, ChevronDown } from 'lucide-react'

const navItems = ['Features', 'About', 'Story', 'Contact']

const Navbar = () => {
    const navContainerRef = useRef(null)
    const audioRef = useRef(null)
    const [isAudioPlaying, setIsAudioPlaying] = useState(false)
    const [isIndicatorActive, setIsIndicatorActive] = useState(false)
    const lastScrollYRef = useRef(0)
    const [isNavVisible, setIsNavVisible] = useState(false)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [isSpotlightOpen, setIsSpotlightOpen] = useState(false)
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

    // Keyboard Shortcuts: 'F' for Fullscreen, '⌘K' for Spotlight
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Ignore if typing in an input
            if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return

            if (e.key.toLowerCase() === 'f' && !e.metaKey && !e.ctrlKey) {
                e.preventDefault()
                toggleFullscreen()
            } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault()
                setIsSpotlightOpen((prev) => !prev)
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

    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev)
        setIsIndicatorActive((prev) => !prev)
    }

    useEffect(() => {
        if (!audioRef.current) return
        if (isAudioPlaying) {
            audioRef.current.play().catch(() => {})
        } else {
            audioRef.current.pause()
        }
    }, [isAudioPlaying])

    return (
        <>
            {/* Apple Spotlight Search Palette Modal */}
            <SpotlightSearch isOpen={isSpotlightOpen} onClose={() => setIsSpotlightOpen(false)} />

            <div
                ref={navContainerRef}
                className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'
            >
                <header className='absolute top-1/2 w-full -translate-y-1/2'>
                    <nav className='flex size-full items-center justify-between p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl'>
                        {/* Left: macOS Traffic Lights + Logo + Product */}
                        <div className='flex items-center gap-4'>
                            {/* macOS Window Controls with interactive Fullscreen */}
                            <div className='hidden sm:flex items-center gap-1.5'>
                                <span className='size-3 rounded-full bg-[#ff5f56] opacity-80'></span>
                                <span className='size-3 rounded-full bg-[#ffbd2e] opacity-80'></span>
                                <button
                                    onClick={toggleFullscreen}
                                    className='size-3 rounded-full bg-[#27c93f] hover:scale-125 transition-transform cursor-pointer'
                                    title='Toggle Fullscreen (F)'
                                />
                            </div>

                            <img src='/img/logo.png' alt='logo' className='w-9' />

                            <button
                                onClick={() => setIsSpotlightOpen(true)}
                                className='hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-gray-300 px-3 py-1.5 rounded-full text-xs transition border border-white/10'
                                title='Spotlight Search (⌘K)'
                            >
                                <Search className='size-3.5 text-cyan-400' />
                                <span>Search projects & architecture...</span>
                                <kbd className='font-mono text-[10px] bg-black/40 px-1.5 py-0.5 rounded text-gray-400'>⌘K</kbd>
                            </button>
                        </div>

                        {/* Right: Nav items + Fullscreen button + Resume dropdown + Audio */}
                        <div className='flex h-full items-center gap-3'>
                            <div className='hidden md:flex items-center gap-1'>
                                {navItems.map((item, index) => (
                                    <a
                                        key={index}
                                        title={item}
                                        href={`#${item.toLowerCase()}`}
                                        className='nav-hover-btn'
                                    >
                                        {item}
                                    </a>
                                ))}

                                {/* Fullscreen Toggle Button */}
                                <button
                                    onClick={toggleFullscreen}
                                    className='p-2 rounded-full hover:bg-white/10 text-cyan-300 transition'
                                    title={isFullscreen ? 'Exit Fullscreen (F)' : 'Enter Fullscreen (F)'}
                                >
                                    {isFullscreen ? <Minimize2 className='size-4' /> : <Maximize2 className='size-4' />}
                                </button>

                                {/* Multi-Format Resume Dropdown Button */}
                                <div className='relative ml-2' onMouseLeave={() => setShowResumeDropdown(false)}>
                                    <button
                                        onClick={() => setShowResumeDropdown(!showResumeDropdown)}
                                        onMouseEnter={() => setShowResumeDropdown(true)}
                                        className='flex items-center gap-1.5 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40'
                                    >
                                        <span>Resume</span>
                                        <ChevronDown className='size-3' />
                                    </button>

                                    {showResumeDropdown && (
                                        <div className='absolute right-0 top-9 w-60 bg-gray-950/95 backdrop-blur-xl border border-white/20 rounded-2xl p-2.5 shadow-2xl z-50 text-white text-xs space-y-2 animate-in fade-in duration-150'>
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

                            {/* Audio Equalizer */}
                            <button
                                className='ml-3 flex items-center space-x-0.5 p-1 rounded hover:bg-white/10 transition'
                                onClick={toggleAudioIndicator}
                                title={isAudioPlaying ? 'Mute Focus Audio' : 'Play Focus Audio'}
                            >
                                <audio ref={audioRef} src='/audio/loop.mp3' className='hidden' loop />
                                {[1, 2, 3, 4, 5].map((bar) => (
                                    <div
                                        key={bar}
                                        className={`cursor-pointer indicator-line ${isIndicatorActive ? 'active' : ''}`}
                                        style={{ animationDelay: `${bar * 0.1}s` }}
                                    />
                                ))}
                            </button>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    )
}

export default Navbar