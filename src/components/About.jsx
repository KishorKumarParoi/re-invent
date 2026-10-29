import React, { useState, useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedTitle from './AnimatedTitle'
import ShootingStarsCanvas from './ShootingStarsCanvas'
import { Volume2, VolumeX, Play, Pause, Square, Music, Sparkles, RotateCcw, FastForward } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    // Arijit Singh "Asatoma Sadgamaya" Audio State
    const audioRef = useRef(null)
    const mantraRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [isVanished, setIsVanished] = useState(false)
    const SLOKA_START_TIME = 40
    const [hasStartedHover, setHasStartedHover] = useState(false)
    const [audioProgress, setAudioProgress] = useState(0)
    const [currentTimeStr, setCurrentTimeStr] = useState('0:40')
    const [durationStr, setDurationStr] = useState('5:16')

    // Initialize Arijit Singh "Asatoma Sadgamaya" audio (starting at 40s)
    useEffect(() => {
        const audio = new Audio('/audio/asato_ma_sadgamaya.mp3')
        audio.preload = 'auto'
        audio.volume = 0.5

        const handleLoadedMetadata = () => {
            if (audio.currentTime < SLOKA_START_TIME) {
                audio.currentTime = SLOKA_START_TIME
            }
            if (audio.duration) {
                setAudioProgress((SLOKA_START_TIME / audio.duration) * 100)
                const durMins = Math.floor(audio.duration / 60)
                const durSecs = Math.floor(audio.duration % 60).toString().padStart(2, '0')
                setDurationStr(`${durMins}:${durSecs}`)
            }
        }

        const handleTimeUpdate = () => {
            if (audio.duration) {
                setAudioProgress((audio.currentTime / audio.duration) * 100)
                const curMins = Math.floor(audio.currentTime / 60)
                const curSecs = Math.floor(audio.currentTime % 60).toString().padStart(2, '0')
                setCurrentTimeStr(`${curMins}:${curSecs}`)
                const durMins = Math.floor(audio.duration / 60)
                const durSecs = Math.floor(audio.duration % 60).toString().padStart(2, '0')
                setDurationStr(`${durMins}:${durSecs}`)
            }
        }

        // When the song finishes: the Sanskrit sloka section vanishes!
        const handleEnded = () => {
            setIsPlaying(false)
            if (mantraRef.current) {
                gsap.to(mantraRef.current, {
                    opacity: 0,
                    scale: 0.85,
                    y: -40,
                    filter: 'blur(14px)',
                    duration: 1.8,
                    ease: 'power3.inOut',
                    onComplete: () => {
                        setIsVanished(true)
                    }
                })
            } else {
                setIsVanished(true)
            }
        }

        audio.addEventListener('loadedmetadata', handleLoadedMetadata)
        audio.addEventListener('timeupdate', handleTimeUpdate)
        audio.addEventListener('ended', handleEnded)
        audioRef.current = audio

        return () => {
            audio.pause()
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
            audio.removeEventListener('timeupdate', handleTimeUpdate)
            audio.removeEventListener('ended', handleEnded)
            audioRef.current = null
        }
    }, [])

    // Hover handler: when section is hovered, song plays from 40s
    const handleSectionHover = () => {
        if (isVanished) return
        if (audioRef.current && !isPlaying && !hasStartedHover) {
            if (audioRef.current.currentTime < SLOKA_START_TIME) {
                audioRef.current.currentTime = SLOKA_START_TIME
            }
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true)
                    setHasStartedHover(true)
                })
                .catch((err) => {
                    console.log('Hover audio autoplay policy caught:', err)
                })
        }
    }

    const togglePlay = (e) => {
        e?.stopPropagation()
        if (!audioRef.current) return
        if (isPlaying) {
            audioRef.current.pause()
            setIsPlaying(false)
        } else {
            if (audioRef.current.currentTime < SLOKA_START_TIME) {
                audioRef.current.currentTime = SLOKA_START_TIME
            }
            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(console.error)
        }
    }

    const stopAudio = (e) => {
        e?.stopPropagation()
        if (!audioRef.current) return
        audioRef.current.pause()
        audioRef.current.currentTime = SLOKA_START_TIME
        setIsPlaying(false)
        if (audioRef.current.duration) {
            setAudioProgress((SLOKA_START_TIME / audioRef.current.duration) * 100)
        }
        setCurrentTimeStr('0:40')
    }

    const toggleMute = (e) => {
        e?.stopPropagation()
        if (!audioRef.current) return
        const nextMute = !isMuted
        audioRef.current.muted = nextMute
        setIsMuted(nextMute)
    }

    // Fast-forward to end to immediately test and experience the vanish effect
    const fastForwardToEnd = (e) => {
        e?.stopPropagation()
        if (!audioRef.current) return
        if (audioRef.current.duration) {
            audioRef.current.currentTime = Math.max(0, audioRef.current.duration - 2)
            if (!isPlaying) {
                audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error)
            }
        }
    }

    // Re-summon the Sanskrit sloka after it has finished and vanished
    const summonMantra = () => {
        setIsVanished(false)
        setHasStartedHover(false)
        if (audioRef.current) {
            audioRef.current.currentTime = SLOKA_START_TIME
            audioRef.current.pause()
            setIsPlaying(false)
            if (audioRef.current.duration) {
                setAudioProgress((SLOKA_START_TIME / audioRef.current.duration) * 100)
            }
            setCurrentTimeStr('0:40')
        }
        setTimeout(() => {
            if (mantraRef.current) {
                gsap.fromTo(mantraRef.current,
                    { opacity: 0, scale: 0.85, y: 40, filter: 'blur(14px)' },
                    { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)', duration: 1.4, ease: 'power3.out' }
                )
            }
        }, 60)
    }
    useGSAP(() => {
        // Mantra entrance animation
        gsap.from('.mantra-container', {
            opacity: 0,
            y: 60,
            duration: 1.5,
            ease: 'power2.out'
        })

        gsap.from('.mantra-om', {
            opacity: 0,
            scale: 0.5,
            duration: 1,
            ease: 'back.out(1.5)',
            delay: 0.2
        })

        gsap.from('.mantra-sanskrit', {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.4
        })

        gsap.from('.mantra-english', {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power2.out',
            delay: 1
        })

        gsap.from('.mantra-meaning-item', {
            scrollTrigger: {
                trigger: '.mantra-meanings',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -40,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power2.out'
        })

        // Floating animation for Om symbol
        gsap.to('.mantra-om', {
            y: -15,
            duration: 4,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
        })

        // "Hello Orks" dramatic entrance with scroll trigger
        gsap.from('.orks-greeting', {
            scrollTrigger: {
                trigger: '.orks-greeting',
                start: 'top 80%',
                end: 'top 30%',
                toggleActions: 'play none none reverse',
                scrub: 1,
            },
            scale: 0.5,
            rotationX: -90,
            rotationY: 45,
            transformOrigin: 'center center',
            duration: .5,
            ease: 'power3.inOut'
        })

        // About intro paragraphs with word-by-word stagger
        gsap.from('.about-intro p span', {
            scrollTrigger: {
                trigger: '.about-intro',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 20,
            stagger: 0.08,
            duration: 0.6,
            delay: 1.5,
            ease: 'power2.out'
        })

        // Journey cards with scroll trigger
        gsap.from('.journey-card', {
            scrollTrigger: {
                trigger: '.journey-section',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
            y: 80,
            stagger: 0.2,
            duration: 1,
            ease: 'power2.out'
        })

        gsap.from('.skill-badge', {
            scrollTrigger: {
                trigger: '.skills-section',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
            rotation: 360,
            y: 100,
            stagger: {
                each: 0.08,
                from: 'random', // Random order for flashy effect
            },
            duration: 0.8,
            ease: 'back.out(2)',
        })

        // Add glowing pulse effect on each badge
        gsap.to('.skill-badge', {
            scrollTrigger: {
                trigger: '.skills-section',
                start: 'top 80%',
            },
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)',
            stagger: {
                each: 0.08,
                repeat: 1,
                yoyo: true,
            },
            duration: 0.4,
            ease: 'power2.inOut',
        })

        ScrollTrigger.refresh()

        // Connect section animation
        gsap.from('.connect-section', {
            scrollTrigger: {
                trigger: '.connect-section',
                start: 'top 85%',
                toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power2.out'
        })

        // Floating quote animation
        gsap.fromTo('.about-quote',
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.about-quote',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                }
            }
        )

        gsap.to('.about-quote', {
            y: -10,
            duration: 3,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
        })

        // Quote marks floating
        gsap.to('.quote-mark', {
            y: -8,
            x: 4,
            rotation: 3,
            duration: 4,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
            stagger: 0.3,
        })

        // Floating coffee animation
        gsap.to('.floating-coffee', {
            y: 5,
            rotation: 10,
            duration: 2,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
        })

        // Steam effect (optional)
        gsap.to('.coffee-steam', {
            opacity: 0.3,
            y: -20,
            duration: 1.5,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: -1,
            stagger: 0.3,
        })

        ScrollTrigger.refresh()
    }, [])

    // Helper function to split text into words with spans
    const splitIntoWords = (text) => {
        return text.split(' ').map((word, idx) => (
            <span key={idx} className='inline-block mr-1'>
                {word}
            </span>
        ))
    }

    const skills = [
        'LangGraph', 'vLLM', 'FastMCP', 'NVIDIA NeMo', 'DeepEval', 'LangSmith', 'Feast', 'Snowflake',
        'Qdrant', 'Rust SIMD', 'PyTorch', 'PySpark', 'FastAPI', 'Next.js 15', 'Three.js', 'GSAP',
        'TypeScript', 'Python', 'C/C++', 'Rust', 'Go', 'Docker', 'Kubernetes', 'Terraform',
        'AWS SageMaker', 'GCP', 'PostgreSQL', 'Redis', 'Kafka', 'ElasticSearch', 'Delta Lake',
        'WebRTC', 'Triton Server', 'ONNX Runtime', 'Hugging Face', 'MLflow', 'Airflow', 'Argo',
        'Prometheus', 'Grafana', 'OpenTelemetry', 'gRPC', 'GraphQL', 'TailwindCSS', 'React Three Fiber',
        'Competitive Programming', 'System Design', 'Distributed Systems', 'CI/CD Pipelines'
    ]

    console.log('Total skills:', skills.length)

    const meanings = [
        {
            number: '1',
            text: 'Om, (O Lord) From the Phenomenal World of Unreality, Lead me towards the Reality of Eternal Self'
        },
        {
            number: '2',
            text: 'From the Darkness of Ignorance, Lead me towards the Light of Spiritual Knowledge'
        },
        {
            number: '3',
            text: 'From the World of Mortality and Material Attachment, Lead me towards Immortality of Self-Realization'
        },
        {
            number: '4',
            text: 'Om, Peace, Peace, Peace'
        }
    ]

    return (
        <div id='about' className='relative min-h-screen w-full max-w-full bg-linear-to-b from-black via-[#070b24] to-black overflow-hidden transform-gpu will-change-transform'>
            {/* Interactive Shooting Stars Canvas with Click-to-Fall Physics & Sarcastic Hacker Alerts */}
            <ShootingStarsCanvas />

            <div className='relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-16 px-5 py-20'>

                {/* Mantra Section with Arijit Singh "Asatoma Sadgamaya" Music & Vanish Effect */}
                {!isVanished ? (
                    <div 
                        id='mantra' 
                        ref={mantraRef}
                        onMouseEnter={handleSectionHover}
                        className='mantra-container group relative w-full max-w-4xl rounded-3xl border border-violet-500/35 bg-gradient-to-br from-violet-950/50 via-purple-950/30 to-violet-900/20 p-8 sm:p-12 text-center shadow-[0_0_50px_rgba(139,92,246,0.25)] backdrop-blur-md transition-all duration-700'
                    >
                        {/* Divine Audio Player Controller Bar */}
                        <div className='mb-8 mx-auto max-w-2xl bg-black/60 border border-violet-400/30 backdrop-blur-xl rounded-2xl p-3 sm:px-4 shadow-xl text-xs select-none'>
                            <div className='flex flex-wrap items-center justify-between gap-3'>
                                <div className='flex items-center gap-2.5 text-left'>
                                    <div className='relative flex items-center justify-center size-8 rounded-full bg-violet-600/30 border border-violet-400/50 text-violet-300'>
                                        <Music className='size-4' />
                                        {isPlaying && !isMuted && (
                                            <span className='absolute -top-0.5 -right-0.5 size-2 rounded-full bg-emerald-400 animate-ping' />
                                        )}
                                    </div>
                                    <div>
                                        <p className='text-xs sm:text-sm font-bold text-violet-200 tracking-wide'>
                                            Arijit Singh — Asatoma Sadgamaya
                                        </p>
                                        <p className='text-[10px] text-violet-300/80 font-mono'>
                                            {isPlaying ? 'Now Playing • Hovering active' : 'Hover over sloka to play song'}
                                        </p>
                                    </div>
                                </div>

                                {/* Controls: Play, Stop, Mute, Fast Forward */}
                                <div className='flex items-center gap-1.5'>
                                    {/* Play / Pause Toggle */}
                                    <button
                                        onClick={togglePlay}
                                        className='flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-violet-600/80 hover:bg-violet-500 text-white font-semibold shadow-md transition cursor-pointer'
                                        title={isPlaying ? 'Pause Song' : 'Play Song'}
                                    >
                                        {isPlaying ? <Pause className='size-3.5' /> : <Play className='size-3.5' />}
                                        <span className='hidden sm:inline'>{isPlaying ? 'Pause' : 'Play'}</span>
                                    </button>

                                    {/* Stop Button */}
                                    <button
                                        onClick={stopAudio}
                                        className='p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition cursor-pointer'
                                        title='Stop Song & Reset'
                                    >
                                        <Square className='size-3.5 text-red-400 fill-red-400/40' />
                                    </button>

                                    {/* Mute / Unmute Toggle */}
                                    <button
                                        onClick={toggleMute}
                                        className={`p-1.5 rounded-lg transition cursor-pointer ${
                                            isMuted ? 'bg-red-500/20 text-red-300 border border-red-500/40' : 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white'
                                        }`}
                                        title={isMuted ? 'Unmute Song' : 'Mute Song'}
                                    >
                                        {isMuted ? <VolumeX className='size-3.5 text-red-400' /> : <Volume2 className='size-3.5 text-emerald-400' />}
                                    </button>

                                    {/* Test Vanish Button (Skips to end to trigger vanish) */}
                                    <button
                                        onClick={fastForwardToEnd}
                                        className='flex items-center gap-1 px-2 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-400/40 text-[10px] font-mono transition cursor-pointer'
                                        title='Skip to end to preview sloka vanishing effect'
                                    >
                                        <FastForward className='size-3 text-amber-300' />
                                        <span className='hidden md:inline'>Test Vanish</span>
                                    </button>
                                </div>
                            </div>

                            {/* Audio Progress Scrubber & Live Time */}
                            <div className='mt-2.5 pt-2 border-t border-white/10 flex items-center gap-3 text-[10px] font-mono text-gray-400'>
                                <span>{currentTimeStr}</span>
                                <div className='flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden'>
                                    <div 
                                        className='h-full bg-gradient-to-r from-violet-500 to-amber-400 rounded-full transition-all duration-200'
                                        style={{ width: `${audioProgress}%` }}
                                    />
                                </div>
                                <span>{durationStr}</span>
                                <span className='text-amber-300/80 font-semibold hidden sm:inline'>
                                    Auto-vanishes upon song completion
                                </span>
                            </div>
                        </div>

                        {/* Om Symbol */}
                        <div className='mantra-om mb-8 inline-block'>
                            <span className='text-8xl font-bold text-violet-300 drop-shadow-[0_0_30px_rgba(167,139,250,0.6)]'>ॐ</span>
                        </div>

                        {/* Sanskrit Text */}
                        <div className='space-y-6 mb-8'>
                            <div className='mantra-sanskrit text-3xl md:text-4xl leading-relaxed text-blue-100 font-semibold drop-shadow-[0_0_20px_rgba(147,197,253,0.4)]'>
                                असतो मा सद्गमय ।<br />
                                तमसो मा ज्योतिर्गमय ।<br />
                                मृत्योर्मा अमृतं गमय ।<br />
                                ॐ शान्तिः शान्तिः शान्तिः ॥
                            </div>
                        </div>

                        {/* English Transliteration */}
                        <div className='space-y-3 mb-10 border-t border-violet-500/20 pt-8'>
                            <div className='mantra-english text-lg text-blue-200/90 italic'>
                                Om Asato Maa Sad-Gamaya |
                            </div>
                            <div className='mantra-english text-lg text-blue-200/90 italic'>
                                Tamaso Maa Jyotir-Gamaya |
                            </div>
                            <div className='mantra-english text-lg text-blue-200/90 italic'>
                                Mrtyor-Maa Amrtam Gamaya |
                            </div>
                            <div className='mantra-english text-lg text-blue-200/90 italic'>
                                Om Shaantih Shaantih Shaantih ||
                            </div>
                        </div>

                        {/* Meanings */}
                        <div className='mantra-meanings space-y-4 border-t border-violet-500/20 pt-8'>
                            {meanings.map((meaning, idx) => (
                                <div key={idx} className='mantra-meaning-item flex gap-4 text-left'>
                                    <span className='shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-violet-500 to-purple-600 font-bold text-white text-sm'>
                                        {meaning.number}
                                    </span>
                                    <p className='text-blue-100/80 leading-relaxed pt-1'>
                                        {meaning.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    /* Sacred Golden Blessing Card shown when sloka finishes and vanishes */
                    <div className='w-full max-w-4xl rounded-3xl border border-amber-400/40 bg-gradient-to-r from-amber-950/40 via-purple-950/30 to-amber-950/40 p-10 text-center shadow-[0_0_50px_rgba(251,191,36,0.25)] backdrop-blur-md animate-fade-in'>
                        <span className='text-7xl font-bold text-amber-300 drop-shadow-[0_0_30px_rgba(251,191,36,0.6)]'>ॐ</span>
                        <h4 className='text-2xl sm:text-3xl font-bold text-amber-200 mt-3'>
                            ॐ शान्तिः शान्तिः शान्तिः
                        </h4>
                        <p className='text-xs sm:text-sm text-amber-200/80 font-mono mt-2 max-w-xl mx-auto leading-relaxed'>
                            "Lead me from the unreal to the real, from darkness to light, from death to immortality."<br />
                            The Sacred Sloka has completed its journey and merged into the cosmic light.
                        </p>
                        <button
                            onClick={summonMantra}
                            className='mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-amber-500 hover:from-violet-500 hover:to-amber-400 text-white text-xs font-bold shadow-xl transition hover:scale-105 cursor-pointer'
                        >
                            <RotateCcw className='size-3.5' />
                            <span>Re-summon Sacred Sanskrit Sloka &amp; Song</span>
                        </button>
                    </div>
                )}

                {/* About Intro */}
                <div className='about-intro max-w-3xl space-y-6 text-center text-lg leading-relaxed text-blue-200/90'>
                    <div className='orks-greeting'>
                        <span className='text-4xl md:text-5xl font-bold text-red-500 italic'>
                            Hello, Builders! (Bug Fighter 😂)  <br />
                            I am Kishor Kumar Paroi (KKP)
                        </span>
                    </div>

                    <p>
                        {splitIntoWords('Senior AI Systems Engineer & Competitive Programmer with')} <span className='inline-block mr-1'><span className='font-bold text-cyan-400'>4+ years</span></span> {splitIntoWords('of production experience building high-throughput LLMOps architectures, real-time distributed platforms, and multi-agent systems.')}
                    </p>

                    <p>
                        {splitIntoWords('Founder of')} <span className='inline-block mr-1'><a href='https://koom.kishor.tech' target='_blank' rel='noopener noreferrer' className='text-cyan-400 font-bold hover:underline'>Koom-AI</a></span> {splitIntoWords('(autonomous screen recording & transcription cockpit), former Forward Deployment Engineer at')} <span className='inline-block mr-1'><b className='font-bold text-blue-400'>phi0.ai</b></span> {splitIntoWords('(San Francisco), and ML Systems Engineer at')} <span className='inline-block mr-1'><b className='text-emerald-400 font-bold'>Samsung AI Core</b></span> {splitIntoWords('and')} <span className='inline-block mr-1'><b className='text-purple-400 font-bold'>QuantAI</b></span>.
                    </p>

                    {/* Resume Download CTAs */}
                    <div className='flex flex-col items-center gap-3 pt-4'>
                        <div className='text-xs uppercase tracking-wider text-cyan-400 font-semibold'>Download Resume (All Formats)</div>
                        <div className='flex flex-wrap justify-center gap-3'>
                            {/* 1-Page Academic Split */}
                            <div className='flex items-center rounded-2xl border border-cyan-400/40 bg-cyan-950/40 px-3 py-2 backdrop-blur-md shadow-lg shadow-cyan-500/20'>
                                <span className='mr-2 text-xs font-bold text-cyan-300'>📄 1-Page Academic:</span>
                                <div className='flex gap-1.5'>
                                    <a href='/files/resume.pdf' target='_blank' rel='noopener noreferrer' download className='rounded-lg bg-cyan-500/20 px-2 py-1 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-500/40 hover:text-white'>PDF</a>
                                    <a href='/files/resume.docx' download className='rounded-lg bg-cyan-500/20 px-2 py-1 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-500/40 hover:text-white'>DOCX</a>
                                    <a href='/files/resume.tex' download className='rounded-lg bg-cyan-500/20 px-2 py-1 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-500/40 hover:text-white'>LaTeX</a>
                                </div>
                            </div>
                            {/* 2-Page Detailed ATS Single Column */}
                            <div className='flex items-center rounded-2xl border border-emerald-400/40 bg-emerald-950/40 px-3 py-2 backdrop-blur-md shadow-lg shadow-emerald-500/20'>
                                <span className='mr-2 text-xs font-bold text-emerald-300'>📑 2-Page ATS:</span>
                                <div className='flex gap-1.5'>
                                    <a href='/files/resume_single_column.pdf' target='_blank' rel='noopener noreferrer' download className='rounded-lg bg-emerald-500/20 px-2 py-1 text-xs font-semibold text-emerald-200 transition hover:bg-emerald-500/40 hover:text-white'>PDF</a>
                                    <a href='/files/resume_single_column.docx' download className='rounded-lg bg-emerald-500/20 px-2 py-1 text-xs font-semibold text-emerald-200 transition hover:bg-emerald-500/40 hover:text-white'>DOCX</a>
                                    <a href='/files/resume_single_column.tex' download className='rounded-lg bg-emerald-500/20 px-2 py-1 text-xs font-semibold text-emerald-200 transition hover:bg-emerald-500/40 hover:text-white'>LaTeX</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Journey Cards */}
                <div className='journey-section grid w-full max-w-5xl gap-6 md:grid-cols-3'>
                    <div className='journey-card group relative overflow-hidden rounded-2xl border border-violet-500/20 bg-linear-to-br from-violet-900/30 to-purple-900/20 p-6 transition-all duration-300 hover:scale-105 hover:border-violet-400/40 hover:shadow-2xl hover:shadow-violet-500/20'>
                        <div className='absolute inset-0 bg-linear-to-br from-violet-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                        <h3 className='relative mb-3 text-xl font-bold text-violet-300'>🧠 AI Systems & LLMOps</h3>
                        <p className='relative text-sm leading-relaxed text-blue-200/80'>
                            vLLM Multi-LoRA serving, Qdrant dense vector search, Reciprocal Rank Fusion, NeMo guardrails, and sub-10ms neural re-ranking across multi-cloud deployments.
                        </p>
                    </div>

                    <div className='journey-card group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-linear-to-br from-cyan-900/30 to-blue-900/20 p-6 transition-all duration-300 hover:scale-105 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20'>
                        <div className='absolute inset-0 bg-linear-to-br from-cyan-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                        <h3 className='relative mb-3 text-xl font-bold text-cyan-300'>⚡ Competitive Programming</h3>
                        <p className='relative text-sm leading-relaxed text-blue-200/80'>
                            Rank 232nd Codeforces Div-2 (Blue Coder), 5★ CodeChef, 17th IUPC, Meta Hacker Cup R3 qualifier; 2000+ DSA, participated system design hackathon.
                        </p>
                    </div>

                    <div className='journey-card group relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-linear-to-br from-emerald-900/30 to-teal-900/20 p-6 transition-all duration-300 hover:scale-105 hover:border-emerald-400/40 hover:shadow-2xl hover:shadow-emerald-500/20'>
                        <div className='absolute inset-0 bg-linear-to-br from-emerald-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                        <h3 className='relative mb-3 text-xl font-bold text-emerald-300'>🎓 Elite Education & Mentorship</h3>
                        <p className='relative text-sm leading-relaxed text-blue-200/80'>
                            RUET B.Sc. in CSE (Rank 483rd in Bangladesh, CGPA 3.25 D.O), Saint Joseph Dhaka (HSC Rank 85th), S.J Govt Model High School Gopalganj (SSC Rank 90th). Mentored 100+ engineers.
                        </p>
                    </div>
                </div>

                {/* Skills Section - ENHANCED */}
                <div className='skills-section w-full max-w-5xl mt-20'>
                    <h3 className='mb-6 text-center font-general text-2xl font-bold uppercase tracking-wider text-blue-300'>
                        Technical Arsenal
                    </h3>
                    <div className='flex flex-wrap justify-center gap-3'>
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className='skill-badge relative rounded-full border border-blue-400/30 bg-blue-900/30 px-4 py-2 text-sm font-medium text-blue-200 transition-all duration-300 hover:scale-110 hover:border-blue-400/60 hover:bg-blue-800/40 hover:text-blue-100 hover:shadow-lg hover:shadow-blue-500/50 cursor-pointer overflow-hidden'
                                style={{
                                    transformOrigin: 'center center',
                                }}
                            >
                                {skill}
                                {/* Shimmer effect overlay */}
                                <span className='absolute inset-0 rounded-full bg-linear-to-r from-transparent via-white/20 to-transparent shimmer-animation pointer-events-none'></span>
                            </span>
                        ))}
                    </div>
                </div>

                {/* Connect Section */}
                <div id='contact' className='connect-section w-full max-w-3xl rounded-2xl border border-emerald-500/20 bg-linear-to-r from-emerald-900/20 to-teal-900/20 p-8 mt-40 text-center'>
                    <h3 className='mb-4 text-2xl font-bold text-emerald-300 relative'>
                        Let&apos;s Connect over a cup of{' '}
                        <span className='inline-block relative' style={{ display: 'inline-block' }}>
                            {/* Steam lines */}
                            <span className='coffee-steam absolute -top-4 left-1/2 -translate-x-1/2 text-gray-400 text-2xl opacity-50'>~</span>
                            <span className='coffee-steam absolute -top-6 left-1/2 -translate-x-1/2 text-gray-400 text-xl opacity-40'>~</span>
                            <span className='coffee-steam absolute -top-8 left-1/2 -translate-x-1/2 text-gray-400 text-lg opacity-30'>~</span>

                            {/* Coffee emoji */}
                            <span className='floating-coffee inline-block text-5xl' style={{ transformOrigin: 'center center' }}>
                                ☕
                            </span>
                        </span>
                    </h3>
                    <p className='mb-6 text-blue-200/80'>
                        Allow me to invite you over discussion on tech to history, geopolitics to Silicon Valley, business to innovation. Feel free to reach out through any of the platforms below!
                    </p>
                    <div className='flex flex-wrap justify-center gap-4'>
                        <a
                            href='mailto:Kishor.ruet.cse@gmail.com'
                            className='rounded-full bg-blue-700 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-500/50'
                        >
                            📧 Email
                        </a>
                        <a
                            href='https://api.whatsapp.com/send/?phone=8801724714156&text=Hi+Kishor%2C+I+saw+your+portfolio.&type=phone_number&app_absent=0'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='rounded-full bg-green-800 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-green-900 hover:shadow-lg hover:shadow-green-500/50'
                        >
                            💬 WhatsApp
                        </a>
                        <a
                            href='https://www.linkedin.com/in/kishor-kumar-paroi-b06344166/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='rounded-full bg-purple-800 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-purple-900 hover:shadow-lg hover:shadow-blue-600/50'
                        >
                            💼 LinkedIn
                        </a>
                        <a
                            href='https://github.com/KishorKumarParoi'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='rounded-full bg-red-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-lg hover:shadow-blue-600/50'
                        >
                            🐙 GitHub
                        </a>
                        <a
                            href='https://x.com/Mr_paroi'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='rounded-full bg-cyan-700 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-900 hover:shadow-lg hover:shadow-blue-600/50'
                        >
                            𝕏 Twitter (@Mr_paroi)
                        </a>
                    </div>
                </div>

                {/* Quote Section */}
                <div className='relative max-w-3xl'>
                    <span className='quote-mark pointer-events-none absolute -left-8 -top-8 select-none text-[5rem] leading-none text-violet-400/20'>
                        "
                    </span>
                    <span className='quote-mark pointer-events-none absolute -right-8 -bottom-10 select-none text-[5rem] leading-none text-violet-400/20'>
                        "
                    </span>
                    <div className='about-quote relative rounded-3xl border border-violet-500/30 bg-linear-to-br from-violet-950/40 to-purple-950/20 p-8 shadow-2xl'>
                        <p className='text-center italic leading-relaxed text-blue-100'>
                            <span className='font-bold text-violet-300'>&quot;Orks is never defeated in battle&quot;</span> comes from
                            Warhammer 40,000 lore. Orks consider any fight a success—winning is great, dying fighting is also a victory,
                            and retreating means another round. They can&apos;t technically &quot;lose&quot; because their goal is
                            the thrill of the fight itself.
                        </p>
                        <p className='mt-4 text-center text-sm font-medium text-cyan-400'>
                            — A Motto I Live By
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About