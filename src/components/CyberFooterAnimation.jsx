import React, { useEffect, useRef } from 'react'

export const CyberFooterAnimation = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')

        let animationFrameId
        let width = (canvas.width = canvas.parentElement.clientWidth)
        let height = (canvas.height = 260)

        const handleResize = () => {
            if (!canvas.parentElement) return
            width = canvas.width = canvas.parentElement.clientWidth
            height = canvas.height = 260
        }
        window.addEventListener('resize', handleResize)

        // 1. Digital Neon Waterfall Particles
        const waterfallStreams = 35
        const waterParticles = Array.from({ length: 180 }, () => ({
            x: Math.random() * (width * 0.35) + width * 0.05, // Waterfall on left side
            y: Math.random() * height,
            vy: Math.random() * 5 + 4,
            length: Math.random() * 12 + 6,
            color: Math.random() > 0.4 ? '#06b6d4' : '#10b981',
            alpha: Math.random() * 0.7 + 0.3,
        }))

        // Pool Ripple Mist
        const poolMist = Array.from({ length: 40 }, () => ({
            x: Math.random() * (width * 0.4) + width * 0.02,
            y: height - Math.random() * 20 - 5,
            vx: (Math.random() - 0.5) * 1.5,
            vy: -Math.random() * 0.8,
            radius: Math.random() * 6 + 3,
            alpha: Math.random() * 0.5 + 0.2,
        }))

        // 2. Flying Tesla Cyber-Car State
        let teslaCar = {
            x: -120,
            y: 75,
            speed: 2.2,
            hoverOffset: 0,
            hoverSpeed: 0.05,
            thrusterParticles: [],
        }

        // 3. Cyber Robot Assistant (Positioned on a ledge in the center-right)
        let robotPulse = 0

        const render = (now) => {
            ctx.clearRect(0, 0, width, height)

            // Background Deep Cyber Glow
            const bgGrad = ctx.createLinearGradient(0, 0, 0, height)
            bgGrad.addColorStop(0, 'rgba(5, 12, 22, 0.4)')
            bgGrad.addColorStop(1, 'rgba(2, 6, 14, 0.9)')
            ctx.fillStyle = bgGrad
            ctx.fillRect(0, 0, width, height)

            // 1. Render Digital Waterfall (Left Side)
            ctx.lineWidth = 1.5
            waterParticles.forEach((p) => {
                p.y += p.vy
                if (p.y > height - 15) {
                    p.y = 10
                    p.x = Math.random() * (width * 0.35) + width * 0.05
                }

                ctx.strokeStyle = p.color
                ctx.globalAlpha = p.alpha
                ctx.beginPath()
                ctx.moveTo(p.x, p.y)
                ctx.lineTo(p.x, p.y + p.length)
                ctx.stroke()
            })
            ctx.globalAlpha = 1

            // Waterfall Luminous Reservoir Pool
            const poolGrad = ctx.createLinearGradient(width * 0.05, height - 25, width * 0.4, height)
            poolGrad.addColorStop(0, 'rgba(6, 182, 212, 0.3)')
            poolGrad.addColorStop(0.5, 'rgba(16, 185, 129, 0.4)')
            poolGrad.addColorStop(1, 'rgba(6, 182, 212, 0.1)')
            ctx.fillStyle = poolGrad
            ctx.fillRect(width * 0.03, height - 25, width * 0.4, 25)

            // Pool Mist Floating
            poolMist.forEach((m) => {
                m.x += m.vx
                m.y += m.vy
                m.alpha -= 0.006
                if (m.alpha <= 0) {
                    m.x = Math.random() * (width * 0.38) + width * 0.03
                    m.y = height - 10
                    m.alpha = Math.random() * 0.4 + 0.2
                }
                ctx.fillStyle = `rgba(56, 189, 248, ${m.alpha})`
                ctx.beginPath()
                ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2)
                ctx.fill()
            })

            // Waterfall Source Header Plate
            ctx.fillStyle = '#0f172a'
            ctx.strokeStyle = '#06b6d4'
            ctx.lineWidth = 2
            ctx.strokeRect(width * 0.04, 5, width * 0.37, 8)
            ctx.fillRect(width * 0.04, 5, width * 0.37, 8)

            // 2. Render Flying Tesla Cyber-Car
            teslaCar.hoverOffset = Math.sin(now * 0.003) * 6
            teslaCar.x += teslaCar.speed

            if (teslaCar.x > width + 140) {
                teslaCar.x = -140
                teslaCar.y = Math.random() * 60 + 50
            }

            const carX = teslaCar.x
            const carY = teslaCar.y + teslaCar.hoverOffset

            // Thruster Particles (Ion Exhaust)
            for (let i = 0; i < 2; i++) {
                teslaCar.thrusterParticles.push({
                    x: carX - 10,
                    y: carY + 8 + (Math.random() - 0.5) * 4,
                    vx: -Math.random() * 4 - 2,
                    vy: (Math.random() - 0.5) * 1.5,
                    color: Math.random() > 0.4 ? '#06b6d4' : '#ec4899',
                    life: 25,
                })
            }

            // Draw Thruster Exhaust Trail
            for (let i = teslaCar.thrusterParticles.length - 1; i >= 0; i--) {
                const tp = teslaCar.thrusterParticles[i]
                tp.x += tp.vx
                tp.y += tp.vy
                tp.life--

                if (tp.life <= 0) {
                    teslaCar.thrusterParticles.splice(i, 1)
                } else {
                    ctx.fillStyle = tp.color
                    ctx.globalAlpha = tp.life / 25
                    ctx.beginPath()
                    ctx.arc(tp.x, tp.y, 2.5, 0, Math.PI * 2)
                    ctx.fill()
                    ctx.globalAlpha = 1
                }
            }

            // Tesla Cyber-Car Geometry (Angular Cybertruck / Cyber Coupe Chassis)
            ctx.save()
            ctx.translate(carX, carY)

            // Cyber-Car Shadow Glow
            ctx.shadowColor = '#06b6d4'
            ctx.shadowBlur = 12

            // Main Angular Body
            ctx.fillStyle = '#1e293b'
            ctx.strokeStyle = '#38bdf8'
            ctx.lineWidth = 1.5
            ctx.beginPath()
            ctx.moveTo(0, 10)       // Front Bumper
            ctx.lineTo(25, -2)      // Hood
            ctx.lineTo(55, -12)     // Roof peak
            ctx.lineTo(85, 2)       // Rear slope
            ctx.lineTo(88, 14)      // Rear Bumper
            ctx.lineTo(0, 14)       // Bottom base
            ctx.closePath()
            ctx.fill()
            ctx.stroke()

            // Cyber Windows (Dark glass with cyan sheen)
            ctx.fillStyle = '#0284c7'
            ctx.beginPath()
            ctx.moveTo(30, 0)
            ctx.lineTo(52, -9)
            ctx.lineTo(75, 2)
            ctx.lineTo(35, 2)
            ctx.closePath()
            ctx.fill()

            // Glowing Angular Headlights (Front Cyan LED Light bar)
            ctx.fillStyle = '#38bdf8'
            ctx.shadowColor = '#38bdf8'
            ctx.shadowBlur = 15
            ctx.fillRect(-2, 8, 5, 3)

            // Glowing Red Taillights (Rear Cyber Bar)
            ctx.fillStyle = '#ef4444'
            ctx.shadowColor = '#ef4444'
            ctx.shadowBlur = 10
            ctx.fillRect(86, 6, 3, 5)

            // Ion Hover Pad Underglow (Bottom)
            ctx.fillStyle = '#06b6d4'
            ctx.shadowColor = '#06b6d4'
            ctx.shadowBlur = 14
            ctx.fillRect(15, 14, 55, 2)

            ctx.restore()

            // 3. Render Robotics Automation Station (Right Side)
            robotPulse = Math.sin(now * 0.005)
            const botX = width * 0.78
            const botY = height - 45

            // Station Platform
            ctx.fillStyle = '#0f172a'
            ctx.strokeStyle = '#334155'
            ctx.lineWidth = 2
            ctx.fillRect(botX - 40, botY + 15, 80, 20)
            ctx.strokeRect(botX - 40, botY + 15, 80, 20)

            // Robot Droid Body
            ctx.fillStyle = '#1e293b'
            ctx.strokeStyle = '#10b981'
            ctx.lineWidth = 1.5
            ctx.beginPath()
            ctx.arc(botX, botY - 5, 14, 0, Math.PI * 2)
            ctx.fill()
            ctx.stroke()

            // Robot Eye Visor (Pulsing Emerald)
            ctx.fillStyle = '#10b981'
            ctx.shadowColor = '#10b981'
            ctx.shadowBlur = 8
            ctx.fillRect(botX - 8, botY - 8, 16, 4)

            // Robot Antenna Beacon
            ctx.strokeStyle = '#10b981'
            ctx.beginPath()
            ctx.moveTo(botX, botY - 19)
            ctx.lineTo(botX, botY - 26)
            ctx.stroke()
            ctx.fillStyle = robotPulse > 0 ? '#34d399' : '#065f46'
            ctx.beginPath()
            ctx.arc(botX, botY - 28, 2.5, 0, Math.PI * 2)
            ctx.fill()
            ctx.shadowBlur = 0

            // Holographic Telemetry Beam projected from Robot
            ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)'
            ctx.lineWidth = 1
            ctx.setLineDash([4, 4])
            ctx.beginPath()
            ctx.moveTo(botX, botY - 10)
            ctx.lineTo(botX - 60, botY - 45)
            ctx.lineTo(botX - 60, botY - 15)
            ctx.closePath()
            ctx.stroke()
            ctx.setLineDash([])

            // Hologram Display Window
            ctx.fillStyle = 'rgba(6, 78, 59, 0.5)'
            ctx.fillRect(botX - 95, botY - 55, 65, 35)
            ctx.strokeStyle = '#10b981'
            ctx.strokeRect(botX - 95, botY - 55, 65, 35)

            ctx.fillStyle = '#6ee7b7'
            ctx.font = '8px monospace'
            ctx.fillText('TESLA_CAR: OK', botX - 90, botY - 45)
            ctx.fillText('WATERFALL: 100%', botX - 90, botY - 35)
            ctx.fillText('UPTIME: 99.9%', botX - 90, botY - 25)

            animationFrameId = requestAnimationFrame(render)
        }

        animationFrameId = requestAnimationFrame(render)

        return () => {
            window.removeEventListener('resize', handleResize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <div className="relative w-full h-[260px] rounded-3xl overflow-hidden border border-cyan-500/20 bg-black shadow-2xl mb-6">
            <canvas ref={canvasRef} className="size-full block" />
            
            {/* Overlay Labels */}
            <div className="absolute top-3 left-4 flex items-center gap-2 pointer-events-none">
                <span className="size-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-[10px] font-mono font-bold uppercase text-cyan-300 bg-black/60 px-2 py-0.5 rounded border border-cyan-500/30">
                    🌊 Digital Matrix Waterfall
                </span>
            </div>

            <div className="absolute top-3 right-4 flex items-center gap-2 pointer-events-none">
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-300 bg-black/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    🤖 Autonomous Robotics Hub & ⚡ Flying Tesla
                </span>
            </div>
        </div>
    )
}

export default CyberFooterAnimation
