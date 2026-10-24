import React, { useEffect, useRef, useState } from 'react'
import { AlertTriangle, Coffee, Sparkles, X, Stars } from 'lucide-react'

const HACKER_MESSAGES = [
    {
        title: "⚡ STELLAR ARCHITECTURE DISLODGED",
        message: "You just knocked a star out of orbit! Luckily, Rust SIMD vector indexing recalculates gravitational trajectories in <0.5ms.",
    },
    {
        title: "✨ CELESTIAL LAKEHOUSE EVENT",
        message: "Star fragment captured into Snowflake Bronze layer. Deduplicated via dbt Core SCD-2 with zero data loss.",
    },
    {
        title: "🛡️ COSMIC NEUTRALIZATION",
        message: "NVIDIA NeMo Guardrails intercepted falling cosmic debris. 99.8% prompt injection and space anomaly blocked.",
    },
    {
        title: "🌌 MULTIVERSE METRIC CONFIRMED",
        message: "RUET CSE 483rd merit rank calculation confirmed: star particle trajectory matches optimal dynamic programming curves.",
    },
]

export const ShootingStarsCanvas = () => {
    const canvasRef = useRef(null)
    const [hackerAlert, setHackerAlert] = useState(null)
    const [fallCount, setFallCount] = useState(0)
    const alertTimeoutRef = useRef(null)

    // Trigger witty alert on star fall
    const triggerHackerAlert = () => {
        const randomMsg = HACKER_MESSAGES[Math.floor(Math.random() * HACKER_MESSAGES.length)]
        setHackerAlert(randomMsg)
        if (alertTimeoutRef.current) clearTimeout(alertTimeoutRef.current)
        alertTimeoutRef.current = setTimeout(() => {
            setHackerAlert(null)
        }, 7000)
    }

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d', { alpha: true })

        let animationFrameId
        let width = (canvas.width = canvas.parentElement.clientWidth || window.innerWidth)
        let height = (canvas.height = canvas.parentElement.clientHeight || window.innerHeight)

        const handleResize = () => {
            if (!canvas.parentElement) return
            width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth
            height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight
        }
        window.addEventListener('resize', handleResize)

        // 1. Starfield: 160 multi-layered stars with realistic celestial color spectrum
        const STAR_COLORS = ['#ffffff', '#bae6fd', '#fed7aa', '#fbcfe8', '#a7f3d0', '#c7d2fe']
        const starCount = 160
        let stars = Array.from({ length: starCount }, (_, i) => ({
            id: i,
            x: Math.random() * width,
            y: Math.random() * height * 0.9,
            originX: 0,
            originY: 0,
            radius: Math.random() * 1.8 + 0.6,
            color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
            alpha: Math.random() * 0.7 + 0.3,
            twinkleSpeed: (Math.random() * 0.02 + 0.008) * (Math.random() > 0.5 ? 1 : -1),
            isFalling: false,
            vx: 0,
            vy: 0,
            gravity: 0,
            sparkTimer: 0,
        }))

        // Pre-store origin coordinates
        stars.forEach(s => {
            s.originX = s.x
            s.originY = s.y
        })

        // 2. Autonomous diagonal meteors
        let meteors = []
        let lastMeteorTime = performance.now()

        // 3. Falling stars & GPU-friendly spark particles
        let fallingStars = []
        let sparks = []

        const spawnAutonomousMeteor = () => {
            meteors.push({
                x: Math.random() * width * 0.85,
                y: Math.random() * height * 0.35,
                len: Math.random() * 90 + 50,
                speed: Math.random() * 9 + 8,
                angle: Math.PI / 4 + (Math.random() - 0.5) * 0.25,
                alpha: 1,
            })
        }

        // Star click & detachment physics
        const dislodgeStar = (clickX, clickY) => {
            // Find nearest non-falling star within 120px, or pick closest in the upper sky
            let targetStar = null
            let minDist = 140

            for (const s of stars) {
                if (s.isFalling) continue
                const d = Math.hypot(s.x - clickX, s.y - clickY)
                if (d < minDist) {
                    minDist = d
                    targetStar = s
                }
            }

            // If no star is within reach, find any star in the general column above
            if (!targetStar) {
                const candidates = stars.filter(s => !s.isFalling && Math.abs(s.x - clickX) < 220)
                if (candidates.length > 0) {
                    targetStar = candidates[Math.floor(Math.random() * candidates.length)]
                } else {
                    targetStar = stars.find(s => !s.isFalling)
                }
            }

            if (!targetStar) return

            // Convert star to falling physics mode
            targetStar.isFalling = true
            targetStar.vx = (Math.random() - 0.5) * 4
            targetStar.vy = Math.random() * 2 + 1
            targetStar.gravity = 0.38
            targetStar.trail = []

            fallingStars.push(targetStar)
            setFallCount(prev => prev + 1)
            triggerHackerAlert()

            // Initial burst of sparks upon detachment
            for (let i = 0; i < 18; i++) {
                const angle = Math.random() * Math.PI * 2
                const spd = Math.random() * 4.5 + 1.5
                sparks.push({
                    x: targetStar.x,
                    y: targetStar.y,
                    vx: Math.cos(angle) * spd,
                    vy: Math.sin(angle) * spd,
                    color: Math.random() > 0.4 ? '#38bdf8' : '#fbbf24',
                    size: Math.random() * 2.5 + 1,
                    alpha: 1,
                    decay: Math.random() * 0.03 + 0.02,
                })
            }
        }

        const handleCanvasClick = (e) => {
            const rect = canvas.getBoundingClientRect()
            const clickX = e.clientX - rect.left
            const clickY = e.clientY - rect.top
            dislodgeStar(clickX, clickY)
        }

        canvas.addEventListener('click', handleCanvasClick)

        // Also allow clicking outside child containers in About section
        const parentSection = canvas.closest('#about')
        const handleParentClick = (e) => {
            // If user clicked interactive links/buttons, don't interrupt
            if (e.target.closest('a, button, input, textarea')) return
            const rect = canvas.getBoundingClientRect()
            const clickX = e.clientX - rect.left
            const clickY = e.clientY - rect.top
            dislodgeStar(clickX, clickY)
        }
        if (parentSection) {
            parentSection.addEventListener('click', handleParentClick)
        }

        // High-Performance 60FPS Render Loop (Zero GC, Zero shadowBlur lag)
        const render = (now) => {
            ctx.clearRect(0, 0, width, height)

            // Fast Additive Blending for zero-lag neon celestial glow
            ctx.globalCompositeOperation = 'lighter'

            // 1. Draw Twinkling Static Stars
            for (let i = 0; i < stars.length; i++) {
                const s = stars[i]
                if (s.isFalling) continue

                s.alpha += s.twinkleSpeed
                if (s.alpha > 0.95 || s.alpha < 0.25) {
                    s.twinkleSpeed = -s.twinkleSpeed
                }

                ctx.fillStyle = s.color
                ctx.globalAlpha = Math.max(0.1, Math.min(1, s.alpha))
                ctx.beginPath()
                ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2)
                ctx.fill()
            }

            // 2. Autonomous shooting meteors
            if (now - lastMeteorTime > 3200) {
                spawnAutonomousMeteor()
                lastMeteorTime = now
            }

            for (let i = meteors.length - 1; i >= 0; i--) {
                const m = meteors[i]
                m.x += Math.cos(m.angle) * m.speed
                m.y += Math.sin(m.angle) * m.speed
                m.alpha -= 0.016

                if (m.alpha <= 0 || m.x > width || m.y > height) {
                    meteors.splice(i, 1)
                    continue
                }

                ctx.globalAlpha = m.alpha
                const grad = ctx.createLinearGradient(
                    m.x,
                    m.y,
                    m.x - Math.cos(m.angle) * m.len,
                    m.y - Math.sin(m.angle) * m.len
                )
                grad.addColorStop(0, '#38bdf8')
                grad.addColorStop(0.3, '#34d399')
                grad.addColorStop(1, 'transparent')

                ctx.strokeStyle = grad
                ctx.lineWidth = 2.2
                ctx.beginPath()
                ctx.moveTo(m.x, m.y)
                ctx.lineTo(
                    m.x - Math.cos(m.angle) * m.len,
                    m.y - Math.sin(m.angle) * m.len
                )
                ctx.stroke()
            }

            // 3. Falling Stars with Gravity & Trailing Embers
            for (let i = fallingStars.length - 1; i >= 0; i--) {
                const fs = fallingStars[i]
                fs.vy += fs.gravity
                fs.x += fs.vx
                fs.y += fs.vy

                // Emit trail spark every 2 frames
                fs.sparkTimer = (fs.sparkTimer || 0) + 1
                if (fs.sparkTimer % 2 === 0 && sparks.length < 250) {
                    sparks.push({
                        x: fs.x + (Math.random() - 0.5) * 4,
                        y: fs.y + (Math.random() - 0.5) * 4,
                        vx: -fs.vx * 0.3 + (Math.random() - 0.5) * 1.5,
                        vy: -fs.vy * 0.2 + (Math.random() - 0.5) * 1.5,
                        color: Math.random() > 0.5 ? '#67e8f9' : '#fde047',
                        size: Math.random() * 2 + 0.8,
                        alpha: 0.9,
                        decay: 0.035,
                    })
                }

                // Star Head
                ctx.globalAlpha = 1
                ctx.fillStyle = '#ffffff'
                ctx.beginPath()
                ctx.arc(fs.x, fs.y, fs.radius * 1.6, 0, Math.PI * 2)
                ctx.fill()

                // Star Aura
                ctx.fillStyle = '#38bdf8'
                ctx.globalAlpha = 0.5
                ctx.beginPath()
                ctx.arc(fs.x, fs.y, fs.radius * 3.5, 0, Math.PI * 2)
                ctx.fill()

                // If hits bottom or leaves viewport: Impact detonation
                if (fs.y > height - 40) {
                    for (let p = 0; p < 24; p++) {
                        const angle = Math.random() * Math.PI - Math.PI // Upward bouncing arc
                        const spd = Math.random() * 6 + 2
                        sparks.push({
                            x: fs.x,
                            y: height - 40,
                            vx: Math.cos(angle) * spd,
                            vy: Math.sin(angle) * spd,
                            color: Math.random() > 0.4 ? '#38bdf8' : '#f59e0b',
                            size: Math.random() * 3 + 1,
                            alpha: 1,
                            decay: Math.random() * 0.03 + 0.02,
                        })
                    }

                    // Reset star back to heavens
                    fs.isFalling = false
                    fs.x = Math.random() * width
                    fs.y = Math.random() * height * 0.6
                    fs.vx = 0
                    fs.vy = 0
                    fs.alpha = 0.2
                    fallingStars.splice(i, 1)
                }
            }

            // 4. Sparks Physics & Rendering
            for (let i = sparks.length - 1; i >= 0; i--) {
                const p = sparks[i]
                p.x += p.vx
                p.y += p.vy
                p.vy += 0.08 // Light gravity on sparks
                p.vx *= 0.98 // Air resistance
                p.alpha -= p.decay

                if (p.alpha <= 0) {
                    sparks.splice(i, 1)
                    continue
                }

                ctx.globalAlpha = Math.max(0, p.alpha)
                ctx.fillStyle = p.color
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fill()
            }

            // Reset composite operation
            ctx.globalCompositeOperation = 'source-over'
            ctx.globalAlpha = 1.0

            animationFrameId = requestAnimationFrame(render)
        }

        animationFrameId = requestAnimationFrame(render)

        return () => {
            window.removeEventListener('resize', handleResize)
            canvas.removeEventListener('click', handleCanvasClick)
            if (parentSection) {
                parentSection.removeEventListener('click', handleParentClick)
            }
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <>
            {/* Deep Cosmic Night Sky Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 size-full pointer-events-auto cursor-crosshair z-0"
                title="Click anywhere to dislodge a star and watch it fall with sparks!"
            />

            {/* Subtle Interactive Instruction Pill */}
            <div className="absolute top-6 right-6 z-20 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 backdrop-blur-md pointer-events-none select-none shadow-lg">
                <Stars className="size-3.5 text-amber-400 animate-spin" />
                <span>Click sky to dislodge stars ({fallCount} fallen)</span>
            </div>

            {/* Sarcastic Hacker Toast Alert */}
            {hackerAlert && (
                <div className="fixed top-24 left-6 z-50 max-w-sm p-4 bg-gray-950/95 backdrop-blur-2xl border-2 border-cyan-500/70 rounded-2xl shadow-2xl shadow-cyan-500/30 text-white animate-in slide-in-from-left duration-300">
                    <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs font-bold uppercase">
                            <Sparkles className="size-4 animate-bounce text-amber-400" />
                            <span>{hackerAlert.title}</span>
                        </div>
                        <button
                            onClick={() => setHackerAlert(null)}
                            className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 cursor-pointer"
                        >
                            <X className="size-3.5" />
                        </button>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed font-sans mb-3">
                        {hackerAlert.message}
                    </p>

                    <div className="flex items-center justify-between text-[10px] font-mono border-t border-white/10 pt-2 text-gray-400">
                        <span className="text-emerald-400">TELEMETRY: STABLE</span>
                        <a
                            href="#contact"
                            onClick={() => setHackerAlert(null)}
                            className="text-amber-400 font-bold hover:underline flex items-center gap-1"
                        >
                            <Coffee className="size-3" />
                            <span>Tea with Zoro 🍵</span>
                        </a>
                    </div>
                </div>
            )}
        </>
    )
}

export default ShootingStarsCanvas
