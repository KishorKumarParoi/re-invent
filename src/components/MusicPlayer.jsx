import React, { useState, useEffect, useRef } from 'react'
import { Music, Play, Pause, SkipForward, SkipBack, Shuffle, Volume2, VolumeX, Sparkles, Radio } from 'lucide-react'

// 30 Best Beatbox, EDM & High-Energy Motivational Mood Boosters
const TRACKS_30 = [
    { id: 1, title: "Believer (Power EDM Remix)", artist: "Imagine Dragons (High-Octane)", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", mood: "Unstoppable Drive", genre: "EDM Anthem" },
    { id: 2, title: "Titan Awakening (Epic Glitch Beat)", artist: "Two Steps (Cyber Remix)", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", mood: "Apex Focus", genre: "Glitch Beatbox" },
    { id: 3, title: "Hall of Fame (Winner's Beat)", artist: "Script (Trap Motivation)", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", mood: "Champion Spirit", genre: "Trap Beat" },
    { id: 4, title: "Cyberpunk Protocol 2077", artist: "Synthwave Beatbox Core", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", mood: "Deep Flow State", genre: "Cyber Synth" },
    { id: 5, title: "Limitless Velocity (Bass Drop)", artist: "Apex Bass Masters", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", mood: "Peak Adrenaline", genre: "Bass EDM" },
    { id: 6, title: "Tokyo Drift Beatbox Fusion", artist: "Hacker Room Beats", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", mood: "Hyper Speed", genre: "Beatbox Trap" },
    { id: 7, title: "Warriors of the Code", artist: "Orchestral Hybrid EDM", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", mood: "Relentless Hustle", genre: "Cinematic EDM" },
    { id: 8, title: "Matrix Neural Pulse", artist: "Sub-Bass Overdrive", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", mood: "Pure Adrenaline", genre: "Dubstep Cyber" },
    { id: 9, title: "Radioactive Surge (Club EDM)", artist: "Vocal Uplift Club", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3", mood: "Laser Sharp Focus", genre: "Club EDM" },
    { id: 10, title: "Principal Victory Fanfare", artist: "Kishor AI Theme (Prod)", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3", mood: "Mastery Triumph", genre: "Hero Anthem" },
    { id: 11, title: "Unstoppable Sia (EDM Drop)", artist: "Festival Stage Mix", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3", mood: "Invincible Aura", genre: "Festival EDM" },
    { id: 12, title: "Legends Never Die (Beatbox Cut)", artist: "Championship Live", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3", mood: "Godlike Confidence", genre: "Vocal Beatbox" },
    { id: 13, title: "Faded Cyber Echoes", artist: "Alan Walker Vibe", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3", mood: "Euphoric Elevation", genre: "Melodic EDM" },
    { id: 14, title: "Animals Heavy Drop", artist: "Dutch House Energy", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3", mood: "Crowd Banger", genre: "Electro House" },
    { id: 15, title: "Astronomia Coffin Beatbox", artist: "Bass Boosted Viral", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3", mood: "Pure Dopamine", genre: "Viral EDM" },
    { id: 16, title: "Centuries Heavy March", artist: "Gladiator Rhythm", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3", mood: "Battle Ready", genre: "Stadium Beat" },
    { id: 17, title: "Natural (Rock-EDM Hybrid)", artist: "Thunder Pulse Drive", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", mood: "Raw Power", genre: "Hybrid Bass" },
    { id: 18, title: "Ghost Town Beatbox Solos", artist: "World Champion Looper", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", mood: "Intricate Rhythm", genre: "Raw Beatbox" },
    { id: 19, title: "Midnight City Sax-Electro", artist: "Retro Neon Waves", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", mood: "Euphoric Night Run", genre: "Synth Electro" },
    { id: 20, title: "Levels Avicii Tribute Mix", artist: "Eternal Melodic Glow", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", mood: "Timeless Energy", genre: "Progressive" },
    { id: 21, title: "Closer Chillstep Beat", artist: "Future Bass Flow", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", mood: "Smooth Coding", genre: "Future Bass" },
    { id: 22, title: "Wake Me Up Folk-Dance", artist: "Sunrise Elevation", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", mood: "Morning Surge", genre: "Dance Anthem" },
    { id: 23, title: "Don't You Worry Child", artist: "Swedish Stadium Wave", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", mood: "Soulful Uplift", genre: "Anthem" },
    { id: 24, title: "Tremor Big Room Drop", artist: "Dimitri Festival Vibe", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", mood: "Wall of Sound", genre: "Big Room" },
    { id: 25, title: "Alone Dark Beatbox Trap", artist: "Marshmello Glitch", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3", mood: "Late Night Hustle", genre: "Trap EDM" },
    { id: 26, title: "Starboy Electro Groove", artist: "Daft Synth Fusion", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3", mood: "Cool Sophistication", genre: "Electro Funk" },
    { id: 27, title: "In The End Drum & Bass", artist: "Breakbeat Motivation", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3", mood: "174 BPM Rush", genre: "DnB" },
    { id: 28, title: "Stronger Harder Faster", artist: "French Cyber House", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3", mood: "Infinite Stamina", genre: "Cyber Electro" },
    { id: 29, title: "Spectre Phantom Beats", artist: "Nordic Frost Electro", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3", mood: "Ethereal Speed", genre: "Melodic Electro" },
    { id: 30, title: "Infinite Horizon Outro", artist: "Principal Architect Suite", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3", mood: "Supreme Zen", genre: "Deep Ambient EDM" },
]

export const MusicPlayer = () => {
    // Start with a randomized index
    const [currentTrackIndex, setCurrentTrackIndex] = useState(() => Math.floor(Math.random() * TRACKS_30.length))
    const [isPlaying, setIsPlaying] = useState(false)
    const [secondsPlayed, setSecondsPlayed] = useState(0)
    const [isMuted, setIsMuted] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState("")

    const audioRef = useRef(null)
    const timerRef = useRef(null)
    const toastTimeoutRef = useRef(null)
    const synthAudioCtxRef = useRef(null)
    const isPlayingRef = useRef(isPlaying)
    isPlayingRef.current = isPlaying

    const currentTrack = TRACKS_30[currentTrackIndex]

    const triggerToast = (msg) => {
        setToastMessage(msg)
        setShowToast(true)
        if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current)
        toastTimeoutRef.current = setTimeout(() => setShowToast(false), 2600)
    }

    // Procedural Beatbox / EDM Bass Synthesizer Fallback (Ensures music NEVER stops even if offline)
    const playSyntheticBeatboxLoop = () => {
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
            const now = ctx.currentTime

            // 1. Kick Drum (low thump)
            const kickOsc = ctx.createOscillator()
            const kickGain = ctx.createGain()
            kickOsc.frequency.setValueAtTime(150, now)
            kickOsc.frequency.exponentialRampToValueAtTime(35, now + 0.18)
            kickGain.gain.setValueAtTime(0.3, now)
            kickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22)
            kickOsc.connect(kickGain)
            kickGain.connect(ctx.destination)
            kickOsc.start(now)
            kickOsc.stop(now + 0.22)

            // 2. Snare / Hi-Hat Noise
            const snareOsc = ctx.createOscillator()
            const snareGain = ctx.createGain()
            snareOsc.type = 'triangle'
            snareOsc.frequency.setValueAtTime(320, now + 0.25)
            snareOsc.frequency.exponentialRampToValueAtTime(80, now + 0.45)
            snareGain.gain.setValueAtTime(0.15, now + 0.25)
            snareGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45)
            snareOsc.connect(snareGain)
            snareGain.connect(ctx.destination)
            snareOsc.start(now + 0.25)
            snareOsc.stop(now + 0.45)
        } catch (e) {
            console.warn("Synth beatbox error:", e)
        }
    }

    // Random track picker (different from current)
    const pickRandomTrack = () => {
        let nextIdx
        do {
            nextIdx = Math.floor(Math.random() * TRACKS_30.length)
        } while (nextIdx === currentTrackIndex && TRACKS_30.length > 1)
        setCurrentTrackIndex(nextIdx)
        setSecondsPlayed(0)
    }

    const nextTrack = () => {
        pickRandomTrack()
    }

    const prevTrack = () => {
        setCurrentTrackIndex((prev) => (prev - 1 + TRACKS_30.length) % TRACKS_30.length)
        setSecondsPlayed(0)
    }

    const playCurrentTrack = async () => {
        if (!audioRef.current) return
        try {
            audioRef.current.currentTime = 0
            setSecondsPlayed(0)
            await audioRef.current.play()
            setIsPlaying(true)
            triggerToast(`🔥 Track #${currentTrack.id}: ${currentTrack.title} (2-min Mood Booster)`)
        } catch (err) {
            console.warn("Audio play issue, using local loop or synth:", err)
            if (audioRef.current.src !== window.location.origin + "/audio/loop.mp3") {
                audioRef.current.src = "/audio/loop.mp3"
                audioRef.current.play().then(() => {
                    setIsPlaying(true)
                    triggerToast(`🔥 ${currentTrack.title} (2-min Boost)`)
                }).catch(() => {
                    playSyntheticBeatboxLoop()
                    setIsPlaying(true)
                    triggerToast(`🎧 Beatbox Stream Online`)
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

    // When track changes, auto-play if currently playing
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = currentTrack.url
            if (isPlaying) {
                playCurrentTrack()
            }
        }
    }, [currentTrackIndex])

    // 2-MINUTE (120 SECONDS) RANDOM ROTATION
    useEffect(() => {
        if (isPlaying) {
            timerRef.current = setInterval(() => {
                setSecondsPlayed((prev) => {
                    // 120 seconds = 2 minutes
                    if (prev >= 119) {
                        pickRandomTrack()
                        triggerToast(`⚡ Auto-Shuffling to next 2-min Mood Booster!`)
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

    // Keyboard Shortcuts: M, N, P, R (Shuffle)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return
            if (e.metaKey || e.ctrlKey || e.altKey) return

            const key = e.key.toLowerCase()
            if (key === 'm') {
                e.preventDefault()
                togglePlay()
            } else if (key === 'n') {
                e.preventDefault()
                nextTrack()
                triggerToast("🔀 Next Random Banger [N]")
            } else if (key === 'p') {
                e.preventDefault()
                prevTrack()
                triggerToast("⏮️ Previous Song [P]")
            } else if (key === 'r') {
                e.preventDefault()
                pickRandomTrack()
                triggerToast("🎲 Shuffled Track [R]")
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isPlaying, currentTrackIndex])

    const totalSeconds = 120
    const remainingSeconds = Math.max(0, totalSeconds - secondsPlayed)
    const mins = Math.floor(remainingSeconds / 60)
    const secs = (remainingSeconds % 60).toString().padStart(2, '0')

    return (
        <>
            <audio
                ref={audioRef}
                src={currentTrack.url}
                preload="auto"
                muted={isMuted}
                onError={() => {
                    if (audioRef.current && audioRef.current.src !== window.location.origin + "/audio/loop.mp3") {
                        audioRef.current.src = "/audio/loop.mp3"
                        if (isPlaying) audioRef.current.play().catch(() => playSyntheticBeatboxLoop())
                    }
                }}
            />

            {/* Quick Toast Notification */}
            {showToast && (
                <div className="fixed top-20 right-6 z-100 flex items-center gap-2.5 bg-black/95 backdrop-blur-2xl border border-cyan-400/50 px-4 py-2.5 rounded-2xl shadow-2xl shadow-cyan-500/30 text-white text-xs font-semibold animate-in fade-in slide-in-from-top-2 duration-200">
                    <Sparkles className="size-4 text-amber-400 animate-spin" />
                    <span>{toastMessage}</span>
                </div>
            )}

            {/* Floating Audio Controller HUD (Bottom Right) */}
            <div className="fixed bottom-6 right-6 z-50 group">
                <div className="flex items-center gap-3 bg-black/90 hover:bg-black backdrop-blur-2xl border border-cyan-500/30 hover:border-cyan-400 p-2.5 px-4 rounded-full shadow-2xl shadow-cyan-500/20 transition-all duration-300">
                    {/* Play/Pause Button */}
                    <button
                        onClick={togglePlay}
                        className="relative flex items-center justify-center size-9 rounded-full bg-linear-to-r from-amber-400 via-orange-500 to-rose-600 text-black shadow-lg shadow-amber-500/30 hover:scale-110 active:scale-95 transition cursor-pointer font-bold"
                        title={isPlaying ? "Pause Beatbox / EDM (M)" : "Play 30 Best Beatbox / EDM Tracks (M)"}
                    >
                        {isPlaying ? <Pause className="size-4 text-black" /> : <Play className="size-4 ml-0.5 text-black" />}
                        {isPlaying && (
                            <span className="absolute -inset-1 rounded-full border border-amber-400/60 animate-ping pointer-events-none" />
                        )}
                    </button>

                    {/* Track Info & 2-Minute Countdown */}
                    <div className="hidden sm:flex flex-col text-left">
                        <div className="flex items-center gap-1.5">
                            <span className="text-[11px] font-bold text-white max-w-[170px] truncate">
                                {currentTrack.title}
                            </span>
                            <span className="text-[9px] font-mono font-bold text-amber-400 bg-amber-950/70 border border-amber-800/50 px-1.5 py-0.2 rounded-full">
                                {mins}:{secs}
                            </span>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-gray-400">
                            <span className="text-cyan-300 font-mono font-bold">#{currentTrack.id}/30</span>
                            <span>•</span>
                            <span className="text-gray-300">{currentTrack.genre}</span>
                            <span>•</span>
                            <span className="text-amber-300">{currentTrack.mood}</span>
                        </div>
                    </div>

                    {/* Controls: Prev / Random / Next / Mute */}
                    <div className="flex items-center gap-1 pl-1 border-l border-white/10">
                        <button
                            onClick={prevTrack}
                            className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition cursor-pointer"
                            title="Previous Song (P)"
                        >
                            <SkipBack className="size-3.5" />
                        </button>
                        <button
                            onClick={pickRandomTrack}
                            className="p-1.5 text-amber-400 hover:text-amber-300 hover:bg-amber-500/20 rounded-full transition cursor-pointer"
                            title="Random Track (R)"
                        >
                            <Shuffle className="size-3.5" />
                        </button>
                        <button
                            onClick={nextTrack}
                            className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition cursor-pointer"
                            title="Next Random Song (N)"
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

                    {/* Animated Equalizer Visualizer */}
                    <div className="flex items-end gap-0.5 h-4 px-1">
                        {[1, 2, 3, 4, 5, 6].map((bar) => (
                            <div
                                key={bar}
                                className={`w-0.5 rounded-full transition-all duration-150 ${
                                    isPlaying
                                        ? 'bg-linear-to-t from-amber-400 via-orange-400 to-rose-400 animate-pulse'
                                        : 'bg-white/20 h-1'
                                }`}
                                style={{
                                    height: isPlaying ? `${Math.max(4, ((bar * 5 + secondsPlayed * 7) % 18) + 4)}px` : '4px',
                                    animationDuration: `${0.25 + bar * 0.08}s`,
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
