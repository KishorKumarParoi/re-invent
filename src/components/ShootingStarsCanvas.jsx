import React, { useEffect, useRef, useState } from 'react'
import { Terminal, AlertTriangle, X, Sparkles, Coffee } from 'lucide-react'

// Sarcastic Hacker Threats for visitors
const HACKER_MESSAGES = [
    {
        title: "⚠️ 0xDEADBEEF: UNAUTHORIZED REPO APPRECIATION",
        message: "Intrusion detected! You've been inspecting 15 Medallion Lakehouses without starring the GitHub repository. As punishment, your smart microwave is now mining Bitcoin. Just kidding! Relax and let's connect over coffee ☕",
        code: "ERR_CODE_STAR_MISSING",
    },
    {
        title: "🚨 ROOT KERNEL BREACH DETECTED",
        message: "Warning: Your browser just downloaded 15 distributed systems with <0.5ms SIMD scoring. Firewalls breached by sheer engineering awe! Immediate remediation: Schedule an interview with Kishor.",
        code: "ERR_OVERWHELMED_RECRUITER",
    },
    {
        title: "👾 CYBER SENTRY PROTOCOL 404",
        message: "Alert: Our NVIDIA NeMo Guardrails detected 0% chance you'll find a more qualified Principal AI Architect. Resistance is futile. Grab a cup of tea and examine the Snowflake pipeline!",
        code: "WARN_MAX_COMPETENCE",
    },
    {
        title: "⚡ DANGER: CPU CLOCK SYNCHRONIZED TO SANSKRIT",
        message: "Your machine's neural core has been blessed by Om Shanti Stotras. All your bugs are now officially features. You may proceed to explore the 3D Metaverse safely.",
        code: "STOTRA_SANCTIFIED",
    },
    {
        title: "🛡️ THREAT LEVEL: COFFEE OVERFLOW",
        message: "Warning! Prolonged portfolio browsing without a virtual coffee chat will cause heap memory fragmentation. Click 'Let's Connect' to defragment your caffeine levels.",
        code: "TEA_DEFICIENCY_ALERT",
    },
]

export const ShootingStarsCanvas = () => {
    const canvasRef = useRef(null)
    const [hackerAlert, setHackerAlert] = useState(null)
    const alertTimeoutRef = useRef(null)

    // Trigger sarcastic hacker alert
    const triggerHackerAlert = () => {
        const randomMsg = HACKER_MESSAGES[Math.floor(Math.random() * HACKER_MESSAGES.length)]
        setHackerAlert(randomMsg)
        if (alertTimeoutRef.current) clearTimeout(alertTimeoutRef.current)
        alertTimeoutRef.current = setTimeout(() => {
            setHackerAlert(null)
        }, 9000)
    }

    // Every 60s trigger sarcastic alert
    useEffect(() => {
        const initialDelay = setTimeout(() => {
            triggerHackerAlert()
        }, 15000) // first alert at 15s

        const interval = setInterval(() => {
            triggerHackerAlert()
        }, 60000) // every 1 minute

        return () => {
            clearTimeout(initialDelay)
            clearInterval(interval)
            if (alertTimeoutRef.current) clearTimeout(alertTimeoutRef.current)
        }
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')

        let animationFrameId
        let width = (canvas.width = canvas.parentElement.clientWidth)
        let height = (canvas.height = canvas.parentElement.clientHeight)

        const handleResize = () => {
            if (!canvas.parentElement) return
            width = canvas.width = canvas.parentElement.clientWidth
            height = canvas.height = canvas.parentElement.clientHeight
        }
        window.addEventListener('resize', handleResize)

        // 1. Static Twinkling Stars
        const starCount = 120
        const stars = Array.from({ length: starCount }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5 + 0.5,
            alpha: Math.random(),
            twinkleSpeed: Math.random() * 0.02 + 0.005,
        }))

        // 2. Autonomous Shooting Stars
        let shootingStars = []
        let lastShootingStarTime = 0

        // 3. Falling Stars triggered by Click
        let fallingStars = []
        let sparkParticles = []

        const spawnAutonomousShootingStar = () => {
            shootingStars.push({
                x: Math.random() * width * 0.8,
                y: Math.random() * height * 0.4,
                length: Math.random() * 80 + 40,
                speed: Math.random() * 7 + 6,
                angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2, // ~45 degrees diagonal
                opacity: 1,
            })
        }

        // Click Handler: Click on canvas spawns falling star from sky!
        const handleClick = (e) => {
            const rect = canvas.getBoundingClientRect()
            const clickX = e.clientX - rect.left
            const clickY = e.clientY - rect.top

            // Spawn a falling star starting from sky above and plunging down
            fallingStars.push({
                x: clickX,
                y: 0,
                targetY: clickY,
                vy: 4,
                gravity: 0.45,
                color: '#38bdf8',
                size: 3,
                trail: [],
            })

            // Also burst immediate sparks at click point
            for (let i = 0; i < 20; i++) {
                const angle = Math.random() * Math.PI * 2
                const speed = Math.random() * 4 + 1
                sparkParticles.push({
                    x: clickX,
                    y: clickY,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    color: Math.random() > 0.5 ? '#38bdf8' : '#34d399',
                    life: 40,
                    maxLife: 40,
                })
            }
        }
        canvas.addEventListener('click', handleClick)

        const render = (now) => {
            ctx.clearRect(0, 0, width, height)

            // 1. Draw Twinkling Stars
            stars.forEach((s) => {
                s.alpha += s.twinkleSpeed
                if (s.alpha > 1 || s.alpha < 0.2) s.twinkleSpeed = -s.twinkleSpeed
                ctx.fillStyle = `rgba(224, 242, 254, ${Math.abs(s.alpha)})`
                ctx.beginPath()
                ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2)
                ctx.fill()
            })

            // 2. Spawn periodic shooting stars
            if (now - lastShootingStarTime > 2800) {
                spawnAutonomousShootingStar()
                lastShootingStarTime = now
            }

            // Draw & update autonomous shooting stars
            for (let i = shootingStars.length - 1; i >= 0; i--) {
                const ss = shootingStars[i]
                ss.x += Math.cos(ss.angle) * ss.speed
                ss.y += Math.sin(ss.angle) * ss.speed
                ss.opacity -= 0.015

                if (ss.opacity <= 0 || ss.x > width || ss.y > height) {
                    shootingStars.splice(i, 1)
                    continue
                }

                const grad = ctx.createLinearGradient(
                    ss.x,
                    ss.y,
                    ss.x - Math.cos(ss.angle) * ss.length,
                    ss.y - Math.sin(ss.angle) * ss.length
                )
                grad.addColorStop(0, `rgba(56, 189, 248, ${ss.opacity})`)
                grad.addColorStop(0.3, `rgba(52, 211, 153, ${ss.opacity * 0.7})`)
                grad.addColorStop(1, 'rgba(56, 189, 248, 0)')

                ctx.strokeStyle = grad
                ctx.lineWidth = 2
                ctx.beginPath()
                ctx.moveTo(ss.x, ss.y)
                ctx.lineTo(
                    ss.x - Math.cos(ss.angle) * ss.length,
                    ss.y - Math.sin(ss.angle) * ss.length
                )
                ctx.stroke()
            }

            // 3. Falling Stars (Triggered by Click)
            for (let i = fallingStars.length - 1; i >= 0; i--) {
                const fs = fallingStars[i]
                fs.vy += fs.gravity
                fs.y += fs.vy

                // Trail
                fs.trail.push({ x: fs.x, y: fs.y })
                if (fs.trail.length > 10) fs.trail.shift()

                // Draw Trail
                ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)'
                ctx.lineWidth = 3
                ctx.beginPath()
                fs.trail.forEach((t, idx) => {
                    if (idx === 0) ctx.moveTo(t.x, t.y)
                    else ctx.lineTo(t.x, t.y)
                })
                ctx.stroke()

                // Star Head
                ctx.fillStyle = '#f8fafc'
                ctx.shadowColor = '#38bdf8'
                ctx.shadowBlur = 15
                ctx.beginPath()
                ctx.arc(fs.x, fs.y, fs.size, 0, Math.PI * 2)
                ctx.fill()
                ctx.shadowBlur = 0

                // Impact check
                if (fs.y >= fs.targetY || fs.y >= height) {
                    // Explode into firework sparks!
                    for (let j = 0; j < 25; j++) {
                        const angle = Math.random() * Math.PI * 2
                        const speed = Math.random() * 5 + 1
                        sparkParticles.push({
                            x: fs.x,
                            y: fs.targetY,
                            vx: Math.cos(angle) * speed,
                            vy: Math.sin(angle) * speed,
                            color: Math.random() > 0.5 ? '#38bdf8' : '#fbbf24',
                            life: 45,
                            maxLife: 45,
                        })
                    }
                    fallingStars.splice(i, 1)
                }
            }

            // 4. Sparks Particles
            for (let i = sparkParticles.length - 1; i >= 0; i--) {
                const p = sparkParticles[i]
                p.x += p.vx
                p.y += p.vy
                p.vy += 0.08 // gravity on sparks
                p.life--

                if (p.life <= 0) {
                    sparkParticles.splice(i, 1)
                    continue
                }

                const alpha = p.life / p.maxLife
                ctx.fillStyle = p.color
                ctx.globalAlpha = alpha
                ctx.beginPath()
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
                ctx.fill()
                ctx.globalAlpha = 1
            }

            animationFrameId = requestAnimationFrame(render)
        }

        animationFrameId = requestAnimationFrame(render)

        return () => {
            window.removeEventListener('resize', handleResize)
            canvas.removeEventListener('click', handleClick)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 size-full pointer-events-auto cursor-pointer z-0 opacity-80"
                title="Click anywhere to call down a shooting star!"
            />

            {/* Sarcastic Hacker Toast Alert (Every 60s) */}
            {hackerAlert && (
                <div className="fixed top-24 left-6 z-100 max-w-sm p-4 bg-gray-950/95 backdrop-blur-2xl border-2 border-rose-500/80 rounded-2xl shadow-2xl shadow-rose-500/30 text-white animate-in slide-in-from-left duration-300">
                    <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase">
                            <AlertTriangle className="size-4 animate-bounce text-amber-400" />
                            <span>{hackerAlert.title}</span>
                        </div>
                        <button
                            onClick={() => setHackerAlert(null)}
                            className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10"
                        >
                            <X className="size-3.5" />
                        </button>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed font-sans mb-3">
                        {hackerAlert.message}
                    </p>

                    <div className="flex items-center justify-between text-[10px] font-mono border-t border-white/10 pt-2 text-gray-400">
                        <span className="text-cyan-400">STATUS: RECRUITER_CHARMED</span>
                        <a
                            href="#contact"
                            onClick={() => setHackerAlert(null)}
                            className="text-amber-400 font-bold hover:underline flex items-center gap-1"
                        >
                            <Coffee className="size-3" />
                            <span>Let's have tea ☕</span>
                        </a>
                    </div>
                </div>
            )}
        </>
    )
}

export default ShootingStarsCanvas
