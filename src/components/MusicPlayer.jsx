import React, { useState, useEffect, useRef } from 'react'
import { Music, Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Sparkles } from 'lucide-react'

// Motivational Music Playlist (30s previews + reliable motivational audio sources)
const MOTIVATION_TRACKS = [
    {
        id: 1,
        title: "Believer (Power Motivation)",
        artist: "Imagine Dragons (Preview)",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        localFallback: "/audio/loop.mp3",
        duration: 30,
        mood: "Unstoppable Energy",
        color: "from-amber-400 to-rose-500",
    },
    {
        id: 2,
        title: "Titan Awakening (Epic Battle)",
        artist: "Two Steps From Hell (Vibe)",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        localFallback: "/audio/audio-5.mp3",
        duration: 30,
        mood: "High Octane Focus",
        color: "from-cyan-400 to-blue-600",
    },
    {
        id: 3,
        title: "Hall of Fame (Winner's Drive)",
        artist: "Script & Will.I.Am (Vibe)",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        localFallback: "/audio/audio-6.mp3",
        duration: 30,
        mood: "Relentless Hustle",
        color: "from-emerald-400 to-teal-600",
    },
    {
        id: 4,
        title: "Matrix Cyberpunk Protocol",
        artist: "Synthwave Motivation",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
        localFallback: "/audio/audio-7.mp3",
        duration: 30,
        mood: "Deep Flow State",
        color: "from-purple-500 to-fuchsia-600",
    },
    {
        id: 5,
        title: "Principal Victory Fanfare",
        artist: "Kishor AI Theme",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
        localFallback: "/audio/audio-8.mp3",
        duration: 30,
        mood: "Triumph & Mastery",
        color: "from-rose-500 to-indigo-600",
    },
]

export const MusicPlayer = () => {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [secondsPlayed, setSecondsPlayed] = useState(0)
    const [isMuted, setIsMuted] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState("")

    const audioRef = useRef(null)
    const timerRef = useRef(null)
    const toastTimeoutRef = useRef(null)
    const synthAudioCtxRef = useRef(null)

    const currentTrack = MOTIVATION_TRACKS[currentTrackIndex]

    const triggerToast = (msg) => {
        setToastMessage(msg)
        setShowToast(true)
        if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current)
        toastTimeoutRef.current = setTimeout(() => setShowToast(false), 2400)
    }

    // Play synthesized motivational arpeggio beat if stream fails or offline
    const playSyntheticBeat = () => {
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext
            if (!AudioCtx) return
            if (!synthAudioCtxRef.current) {
                synthAudioCtxRef.current = new AudioCtx()
            }
            const ctx = synthAudioCtxRef.current
            if (ctx.state === 'suspended') {
                ctx.resume()
            }
            const osc = ctx.createOscillator()
            const gain = ctx.createGain()
            osc.type = 'sawtooth'
            osc.frequency.setValueAtTime(220, ctx.currentTime)
            osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.3)
            gain.gain.setValueAtTime(0.15, ctx.currentTime)
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5)
            osc.connect(gain)
            gain.connect(ctx.destination)
            osc.start()
            osc.stop(ctx.currentTime + 0.5)
        } catch (e) {
            console.warn("Synth beat error:", e)
        }
    }

    // Play track
    const playCurrentTrack = async () => {
        if (!audioRef.current) return
        try {
            audioRef.current.currentTime = 0
            setSecondsPlayed(0)
            await audioRef.current.play()
            setIsPlaying(true)
            triggerToast(`🎵 Playing: ${currentTrack.title} (30s)`)
        } catch (err) {
            console.warn("Audio autoplay blocked or stream fallback:", err)
            // Attempt fallback to local audio
            if (audioRef.current.src !== window.location.origin + currentTrack.localFallback) {
                audioRef.current.src = currentTrack.localFallback
                audioRef.current.play().then(() => {
                    setIsPlaying(true)
                    triggerToast(`🎵 Playing: ${currentTrack.title} (30s)`)
                }).catch(() => {
                    playSyntheticBeat()
                    setIsPlaying(true)
                    triggerToast(`🎵 Motivation Pulse (30s Active)`)
                })
            }
        }
    }

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current?.pause()
            setIsPlaying(false)
            triggerToast("⏸️ Music Paused [Press M to Resume]")
        } else {
            playCurrentTrack()
        }
    }

    const nextTrack = () => {
        setCurrentTrackIndex((prev) => (prev + 1) % MOTIVATION_TRACKS.length)
        setSecondsPlayed(0)
    }

    const prevTrack = () => {
        setCurrentTrackIndex((prev) => (prev - 1 + MOTIVATION_TRACKS.length) % MOTIVATION_TRACKS.length)
        setSecondsPlayed(0)
    }

    // When index changes, if playing or user just switched, auto play
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = currentTrack.url
            if (isPlaying) {
                playCurrentTrack()
            }
        }
    }, [currentTrackIndex])

    // 30s playback enforcement
    useEffect(() => {
        if (isPlaying) {
            timerRef.current = setInterval(() => {
                setSecondsPlayed((prev) => {
                    if (prev >= 29) {
                        // 30s reached! Auto advance to next motivational track
                        nextTrack()
                        triggerToast(`⚡ Next 30s Motivation Track!`)
                        return 0
                    }
                    return prev + 1
                })
            }, 1000)
        } else {
            clearInterval(timerRef.current)
        }
        return () => clearInterval(timerRef.current)
    }, [isPlaying, currentTrackIndex])

    // Global Keyboard Listeners: M, N, P
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Ignore if typing in text inputs or textareas
            if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return
            if (e.metaKey || e.ctrlKey || e.altKey) return

            const key = e.key.toLowerCase()
            if (key === 'm') {
                e.preventDefault()
                togglePlay()
            } else if (key === 'n') {
                e.preventDefault()
                nextTrack()
                triggerToast("⏭️ Next Motivational Track [N]")
            } else if (key === 'p') {
                e.preventDefault()
                prevTrack()
                triggerToast("⏮️ Previous Motivational Track [P]")
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isPlaying, currentTrackIndex])

    return (
        <>
            <audio
                ref={audioRef}
                src={currentTrack.url}
                preload="auto"
                muted={isMuted}
                onError={() => {
                    if (audioRef.current && audioRef.current.src !== window.location.origin + currentTrack.localFallback) {
                        audioRef.current.src = currentTrack.localFallback
                        if (isPlaying) audioRef.current.play().catch(() => playSyntheticBeat())
                    }
                }}
            />

            {/* Quick Toast Notification for Keyboard shortcuts */}
            {showToast && (
                <div className="fixed top-20 right-6 z-100 flex items-center gap-2.5 bg-black/90 backdrop-blur-xl border border-cyan-500/40 px-4 py-2.5 rounded-2xl shadow-2xl shadow-cyan-500/20 text-white text-xs font-semibold animate-in fade-in slide-in-from-top-2 duration-200">
                    <Sparkles className="size-4 text-amber-400 animate-spin" />
                    <span>{toastMessage}</span>
                </div>
            )}

            {/* Floating Audio Controller HUD (Bottom Right) */}
            <div className="fixed bottom-6 right-6 z-50 group">
                <div className="flex items-center gap-3 bg-black/80 hover:bg-black/95 backdrop-blur-2xl border border-white/15 hover:border-cyan-500/50 p-2.5 px-4 rounded-full shadow-2xl transition-all duration-300">
                    {/* Equalizer Wave / Icon */}
                    <button
                        onClick={togglePlay}
                        className="relative flex items-center justify-center size-9 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:scale-105 active:scale-95 transition cursor-pointer"
                        title={isPlaying ? "Pause Motivation Audio (M)" : "Play Motivation Audio (M)"}
                    >
                        {isPlaying ? <Pause className="size-4" /> : <Play className="size-4 ml-0.5" />}
                        {isPlaying && (
                            <span className="absolute -inset-1 rounded-full border border-cyan-400/50 animate-ping pointer-events-none" />
                        )}
                    </button>

                    {/* Track Info & 30s Countdown */}
                    <div className="hidden sm:flex flex-col text-left">
                        <div className="flex items-center gap-1.5">
                            <span className="text-[11px] font-bold text-white max-w-[140px] truncate">
                                {currentTrack.title}
                            </span>
                            <span className="text-[9px] font-mono font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-1 rounded">
                                {30 - secondsPlayed}s
                            </span>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-gray-400">
                            <span>Key:</span>
                            <kbd className="font-mono text-[9px] bg-white/10 px-1 rounded text-cyan-300">M</kbd>
                            <span>Toggle</span>
                            <kbd className="font-mono text-[9px] bg-white/10 px-1 rounded text-cyan-300">N</kbd>
                            <span>Next</span>
                            <kbd className="font-mono text-[9px] bg-white/10 px-1 rounded text-cyan-300">P</kbd>
                            <span>Prev</span>
                        </div>
                    </div>

                    {/* Controls: Prev / Next / Equalizer bars */}
                    <div className="flex items-center gap-1.5 pl-1 border-l border-white/10">
                        <button
                            onClick={prevTrack}
                            className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition cursor-pointer"
                            title="Previous Motivation Song (P)"
                        >
                            <SkipBack className="size-3.5" />
                        </button>
                        <button
                            onClick={nextTrack}
                            className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition cursor-pointer"
                            title="Next Motivation Song (N)"
                        >
                            <SkipForward className="size-3.5" />
                        </button>
                        <button
                            onClick={() => setIsMuted(!isMuted)}
                            className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition cursor-pointer"
                            title={isMuted ? "Unmute" : "Mute"}
                        >
                            {isMuted ? <VolumeX className="size-3.5 text-rose-400" /> : <Volume2 className="size-3.5 text-emerald-400" />}
                        </button>
                    </div>

                    {/* Mini Equalizer Bars */}
                    <div className="flex items-end gap-0.5 h-4 px-1">
                        {[1, 2, 3, 4, 5].map((bar) => (
                            <div
                                key={bar}
                                className={`w-0.5 rounded-full transition-all duration-150 ${
                                    isPlaying
                                        ? 'bg-linear-to-t from-cyan-400 to-emerald-400 animate-pulse'
                                        : 'bg-white/20 h-1'
                                }`}
                                style={{
                                    height: isPlaying ? `${Math.max(4, ((bar * 7 + secondsPlayed * 5) % 16) + 4)}px` : '4px',
                                    animationDuration: `${0.3 + bar * 0.1}s`,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MusicPlayer
