import React, { useState, useEffect, useRef } from 'react'
import { Shield, Swords, Zap, Crosshair, Award, RotateCcw, X, Flame, Sparkles, Volume2, VolumeX } from 'lucide-react'

// Web Audio API Synthesizer for 100% reliable SFX without broken external assets
const playSound = (type) => {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext
        if (!AudioCtx) return
        const ctx = new AudioCtx()

        if (type === 'cannon') {
            const osc = ctx.createOscillator()
            const gain = ctx.createGain()
            osc.type = 'triangle'
            osc.frequency.setValueAtTime(140, ctx.currentTime)
            osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.35)
            gain.gain.setValueAtTime(0.4, ctx.currentTime)
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35)
            osc.connect(gain)
            gain.connect(ctx.destination)
            osc.start()
            osc.stop(ctx.currentTime + 0.35)
        } else if (type === 'arrow') {
            const osc = ctx.createOscillator()
            const gain = ctx.createGain()
            osc.type = 'sine'
            osc.frequency.setValueAtTime(800, ctx.currentTime)
            osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.15)
            gain.gain.setValueAtTime(0.2, ctx.currentTime)
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15)
            osc.connect(gain)
            gain.connect(ctx.destination)
            osc.start()
            osc.stop(ctx.currentTime + 0.15)
        } else if (type === 'wizard') {
            const osc = ctx.createOscillator()
            const gain = ctx.createGain()
            osc.type = 'sawtooth'
            osc.frequency.setValueAtTime(400, ctx.currentTime)
            osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.25)
            gain.gain.setValueAtTime(0.25, ctx.currentTime)
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25)
            osc.connect(gain)
            gain.connect(ctx.destination)
            osc.start()
            osc.stop(ctx.currentTime + 0.25)
        } else if (type === 'victory') {
            [261.63, 329.63, 392.00, 523.25].forEach((freq, idx) => {
                const osc = ctx.createOscillator()
                const gain = ctx.createGain()
                osc.type = 'triangle'
                osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12)
                gain.gain.setValueAtTime(0.2, ctx.currentTime + idx * 0.12)
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + idx * 0.12 + 0.4)
                osc.connect(gain)
                gain.connect(ctx.destination)
                osc.start(ctx.currentTime + idx * 0.12)
                osc.stop(ctx.currentTime + idx * 0.12 + 0.4)
            })
        }
    } catch (e) {
        // Audio error handling
    }
}

export const ClashGame = ({ isOpen, onClose }) => {
    const canvasRef = useRef(null)
    const [gameState, setGameState] = useState('playing') // playing | won | lost
    const [score, setScore] = useState(0)
    const [gold, setGold] = useState(350)
    const [elixir, setElixir] = useState(250)
    const [timeLeft, setTimeLeft] = useState(60)
    const [wave, setWave] = useState(1)
    const [selectedDefense, setSelectedDefense] = useState('cannon')
    const [soundEnabled, setSoundEnabled] = useState(true)

    // Game loop internal refs
    const gameRef = useRef({
        townHall: { x: 350, y: 250, hp: 1200, maxHp: 1200, radius: 38 },
        defenses: [
            { type: 'cannon', x: 260, y: 190, range: 130, damage: 35, fireRate: 900, lastFired: 0, level: 1 },
            { type: 'archer', x: 440, y: 190, range: 160, damage: 20, fireRate: 500, lastFired: 0, level: 1 },
            { type: 'wizard', x: 350, y: 340, range: 140, damage: 45, fireRate: 1200, lastFired: 0, level: 1 },
        ],
        enemies: [],
        projectiles: [],
        particles: [],
        floatingTexts: [],
        nextSpawnTime: 0,
        running: false,
    })

    const resetGame = () => {
        gameRef.current = {
            townHall: { x: 350, y: 250, hp: 1200, maxHp: 1200, radius: 38 },
            defenses: [
                { type: 'cannon', x: 260, y: 190, range: 130, damage: 35, fireRate: 900, lastFired: 0, level: 1 },
                { type: 'archer', x: 440, y: 190, range: 160, damage: 20, fireRate: 500, lastFired: 0, level: 1 },
                { type: 'wizard', x: 350, y: 340, range: 140, damage: 45, fireRate: 1200, lastFired: 0, level: 1 },
            ],
            enemies: [],
            projectiles: [],
            particles: [],
            floatingTexts: [],
            nextSpawnTime: 0,
            running: true,
        }
        setGameState('playing')
        setScore(0)
        setGold(400)
        setElixir(300)
        setTimeLeft(60)
        setWave(1)
    }

    // Place Defense
    const handleCanvasClick = (e) => {
        if (gameState !== 'playing') return
        const canvas = canvasRef.current
        if (!canvas) return
        const rect = canvas.getBoundingClientRect()
        const clientX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : (e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : 0))
        const clientY = e.clientY ?? (e.touches && e.touches[0] ? e.touches[0].clientY : (e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientY : 0))
        const scaleX = canvas.width / (rect.width || 1)
        const scaleY = canvas.height / (rect.height || 1)
        const clickX = (clientX - rect.left) * scaleX
        const clickY = (clientY - rect.top) * scaleY

        // Costs
        const costs = {
            cannon: { gold: 100, elixir: 0, damage: 35, range: 130, fireRate: 900 },
            archer: { gold: 75, elixir: 50, damage: 22, range: 165, fireRate: 500 },
            wizard: { gold: 150, elixir: 100, damage: 50, range: 145, fireRate: 1200 },
        }

        const cost = costs[selectedDefense]
        if (gold >= cost.gold && elixir >= cost.elixir) {
            // Check distance from Town Hall
            const distTH = Math.hypot(clickX - gameRef.current.townHall.x, clickY - gameRef.current.townHall.y)
            if (distTH < 45) return // Too close to Town Hall

            setGold((g) => g - cost.gold)
            setElixir((el) => el - cost.elixir)

            gameRef.current.defenses.push({
                type: selectedDefense,
                x: clickX,
                y: clickY,
                range: cost.range,
                damage: cost.damage,
                fireRate: cost.fireRate,
                lastFired: 0,
                level: 1,
            })

            // Spawn placement spark particles
            for (let i = 0; i < 12; i++) {
                gameRef.current.particles.push({
                    x: clickX,
                    y: clickY,
                    vx: (Math.random() - 0.5) * 5,
                    vy: (Math.random() - 0.5) * 5,
                    color: selectedDefense === 'cannon' ? '#f59e0b' : selectedDefense === 'archer' ? '#10b981' : '#8b5cf6',
                    life: 25,
                })
            }
            if (soundEnabled) playSound('arrow')
        }
    }

    // 60s Timer & Resource Generation
    useEffect(() => {
        if (!isOpen || gameState !== 'playing') return
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    setGameState('won')
                    if (soundEnabled) playSound('victory')
                    return 0
                }
                // Wave progression
                if (prev === 45) setWave(2)
                if (prev === 25) setWave(3)
                if (prev === 10) setWave(4)
                return prev - 1
            })
            // Passive gold/elixir income
            setGold((g) => Math.min(800, g + 8))
            setElixir((e) => Math.min(600, e + 6))
        }, 1000)
        return () => clearInterval(timer)
    }, [isOpen, gameState, soundEnabled])

    // Main Game Animation Loop
    useEffect(() => {
        if (!isOpen) return
        gameRef.current.running = true
        let animationFrameId
        let lastTime = performance.now()

        const spawnEnemy = (now) => {
            const types = [
                { name: 'Goblin', hp: 70, maxHp: 70, speed: 1.6, damage: 8, color: '#22c55e', reward: 25, size: 10 },
                { name: 'Barbarian', hp: 150, maxHp: 150, speed: 1.1, damage: 16, color: '#f97316', reward: 40, size: 13 },
                { name: 'Giant', hp: 380, maxHp: 380, speed: 0.65, damage: 32, color: '#ea580c', reward: 80, size: 18 },
                { name: 'Dragon', hp: 550, maxHp: 550, speed: 0.85, damage: 45, color: '#e11d48', reward: 140, size: 22 },
            ]

            // Choose enemy type based on wave
            let candidateIndex = 0
            if (wave === 1) candidateIndex = Math.random() < 0.7 ? 0 : 1
            else if (wave === 2) candidateIndex = Math.random() < 0.5 ? 1 : 2
            else if (wave >= 3) candidateIndex = Math.random() < 0.4 ? 1 : Math.random() < 0.7 ? 2 : 3

            const template = types[candidateIndex]

            // Spawn along canvas borders
            const angle = Math.random() * Math.PI * 2
            const distance = 420
            const spawnX = gameRef.current.townHall.x + Math.cos(angle) * distance
            const spawnY = gameRef.current.townHall.y + Math.sin(angle) * distance

            gameRef.current.enemies.push({
                ...template,
                id: Math.random(),
                x: spawnX,
                y: spawnY,
            })
        }

        const render = (now) => {
            const dt = now - lastTime
            lastTime = now

            const canvas = canvasRef.current
            if (!canvas) return
            const ctx = canvas.getContext('2d')
            const game = gameRef.current

            // 1. Clear background & draw village grass terrain
            ctx.fillStyle = '#0f2415'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Grid pattern for village tiles
            ctx.strokeStyle = '#183821'
            ctx.lineWidth = 1
            for (let x = 0; x < canvas.width; x += 40) {
                ctx.beginPath()
                ctx.moveTo(x, 0)
                ctx.lineTo(x, canvas.height)
                ctx.stroke()
            }
            for (let y = 0; y < canvas.height; y += 40) {
                ctx.beginPath()
                ctx.moveTo(0, y)
                ctx.lineTo(canvas.width, y)
                ctx.stroke()
            }

            // Outer defense perimeter ring
            ctx.strokeStyle = '#16a34a33'
            ctx.lineWidth = 2
            ctx.setLineDash([8, 8])
            ctx.beginPath()
            ctx.arc(game.townHall.x, game.townHall.y, 200, 0, Math.PI * 2)
            ctx.stroke()
            ctx.setLineDash([])

            // 2. Draw Town Hall (Village Center)
            const th = game.townHall
            ctx.save()
            // Glow effect
            ctx.shadowColor = th.hp > 400 ? '#22c55e' : '#ef4444'
            ctx.shadowBlur = 15
            ctx.fillStyle = '#1e293b'
            ctx.beginPath()
            ctx.arc(th.x, th.y, th.radius, 0, Math.PI * 2)
            ctx.fill()
            ctx.strokeStyle = '#38bdf8'
            ctx.lineWidth = 3
            ctx.stroke()

            // Town hall icon & text
            ctx.fillStyle = '#f8fafc'
            ctx.font = 'bold 12px sans-serif'
            ctx.textAlign = 'center'
            ctx.fillText('🏛️ TOWN HALL', th.x, th.y - 4)
            ctx.font = '10px monospace'
            ctx.fillStyle = '#38bdf8'
            ctx.fillText(`LVL 12 • AI CORE`, th.x, th.y + 12)

            // Town Hall HP Bar
            const hpWidth = 64
            const hpPct = Math.max(0, th.hp / th.maxHp)
            ctx.fillStyle = '#334155'
            ctx.fillRect(th.x - hpWidth / 2, th.y - 48, hpWidth, 6)
            ctx.fillStyle = hpPct > 0.5 ? '#22c55e' : hpPct > 0.25 ? '#f59e0b' : '#ef4444'
            ctx.fillRect(th.x - hpWidth / 2, th.y - 48, hpWidth * hpPct, 6)
            ctx.restore()

            // Check Town Hall death
            if (th.hp <= 0 && gameState === 'playing') {
                setGameState('lost')
                return
            }

            // 3. Spawn enemies on interval
            if (now > game.nextSpawnTime) {
                spawnEnemy(now)
                const spawnInterval = Math.max(700, 2200 - wave * 350)
                game.nextSpawnTime = now + spawnInterval
            }

            // 4. Update and Draw Defenses (Towers)
            game.defenses.forEach((def) => {
                // Draw tower range circle (faint)
                ctx.strokeStyle = def.type === 'cannon' ? '#f59e0b20' : def.type === 'archer' ? '#10b98120' : '#8b5cf620'
                ctx.beginPath()
                ctx.arc(def.x, def.y, def.range, 0, Math.PI * 2)
                ctx.stroke()

                // Draw Tower body
                ctx.fillStyle = def.type === 'cannon' ? '#78350f' : def.type === 'archer' ? '#064e3b' : '#4c1d95'
                ctx.beginPath()
                ctx.arc(def.x, def.y, 16, 0, Math.PI * 2)
                ctx.fill()
                ctx.strokeStyle = def.type === 'cannon' ? '#f59e0b' : def.type === 'archer' ? '#10b981' : '#c084fc'
                ctx.lineWidth = 2
                ctx.stroke()

                // Tower Icon
                ctx.fillStyle = '#fff'
                ctx.font = '12px sans-serif'
                ctx.textAlign = 'center'
                const icon = def.type === 'cannon' ? '💥' : def.type === 'archer' ? '🏹' : '⚡'
                ctx.fillText(icon, def.x, def.y + 4)

                // Tower Target Acquisition & Firing
                if (now - def.lastFired >= def.fireRate) {
                    // Find closest enemy in range
                    let closestEnemy = null
                    let minDist = def.range

                    game.enemies.forEach((enemy) => {
                        const dist = Math.hypot(enemy.x - def.x, enemy.y - def.y)
                        if (dist < minDist) {
                            minDist = dist
                            closestEnemy = enemy
                        }
                    })

                    if (closestEnemy) {
                        def.lastFired = now
                        if (soundEnabled) playSound(def.type)

                        game.projectiles.push({
                            x: def.x,
                            y: def.y,
                            targetX: closestEnemy.x,
                            targetY: closestEnemy.y,
                            targetEnemy: closestEnemy,
                            damage: def.damage,
                            type: def.type,
                            speed: 8,
                        })
                    }
                }
            })

            // 5. Update and Draw Projectiles
            for (let i = game.projectiles.length - 1; i >= 0; i--) {
                const p = game.projectiles[i]
                const dx = p.targetX - p.x
                const dy = p.targetY - p.y
                const dist = Math.hypot(dx, dy)

                if (dist < p.speed) {
                    // Hit target!
                    if (p.targetEnemy && p.targetEnemy.hp > 0) {
                        p.targetEnemy.hp -= p.damage
                        // Spawn damage text
                        game.floatingTexts.push({
                            x: p.targetX,
                            y: p.targetY - 10,
                            text: `-${p.damage}`,
                            color: p.type === 'wizard' ? '#c084fc' : '#fbbf24',
                            alpha: 1,
                        })

                        // Explosion particles
                        for (let k = 0; k < 6; k++) {
                            game.particles.push({
                                x: p.targetX,
                                y: p.targetY,
                                vx: (Math.random() - 0.5) * 4,
                                vy: (Math.random() - 0.5) * 4,
                                color: p.type === 'wizard' ? '#a855f7' : '#f97316',
                                life: 18,
                            })
                        }
                    }
                    game.projectiles.splice(i, 1)
                } else {
                    p.x += (dx / dist) * p.speed
                    p.y += (dy / dist) * p.speed

                    // Render projectile
                    ctx.fillStyle = p.type === 'cannon' ? '#fbbf24' : p.type === 'archer' ? '#34d399' : '#c084fc'
                    ctx.beginPath()
                    ctx.arc(p.x, p.y, p.type === 'cannon' ? 5 : 3, 0, Math.PI * 2)
                    ctx.fill()
                }
            }

            // 6. Update and Draw Enemies
            for (let i = game.enemies.length - 1; i >= 0; i--) {
                const enemy = game.enemies[i]

                // Move toward Town Hall
                const dx = th.x - enemy.x
                const dy = th.y - enemy.y
                const distToTH = Math.hypot(dx, dy)

                if (distToTH <= th.radius + enemy.size) {
                    // Attack Town Hall!
                    th.hp -= enemy.damage * (dt / 1000)
                    // Visual damage effect on Town Hall
                    if (Math.random() < 0.2) {
                        game.particles.push({
                            x: th.x + (Math.random() - 0.5) * 40,
                            y: th.y + (Math.random() - 0.5) * 40,
                            vx: (Math.random() - 0.5) * 3,
                            vy: (Math.random() - 0.5) * 3,
                            color: '#ef4444',
                            life: 15,
                        })
                    }
                } else {
                    enemy.x += (dx / distToTH) * enemy.speed
                    enemy.y += (dy / distToTH) * enemy.speed
                }

                // Check enemy death
                if (enemy.hp <= 0) {
                    setScore((s) => s + enemy.reward)
                    setGold((g) => Math.min(800, g + Math.floor(enemy.reward / 2)))
                    // Death blood/splat particles
                    for (let p = 0; p < 8; p++) {
                        game.particles.push({
                            x: enemy.x,
                            y: enemy.y,
                            vx: (Math.random() - 0.5) * 4,
                            vy: (Math.random() - 0.5) * 4,
                            color: enemy.color,
                            life: 20,
                        })
                    }
                    game.enemies.splice(i, 1)
                    continue
                }

                // Render Enemy
                ctx.save()
                ctx.fillStyle = enemy.color
                ctx.beginPath()
                ctx.arc(enemy.x, enemy.y, enemy.size, 0, Math.PI * 2)
                ctx.fill()
                ctx.strokeStyle = '#ffffff'
                ctx.lineWidth = 1.5
                ctx.stroke()

                // Enemy HP Bar
                const eHpWidth = enemy.size * 2
                const eHpPct = Math.max(0, enemy.hp / enemy.maxHp)
                ctx.fillStyle = '#1e293b'
                ctx.fillRect(enemy.x - eHpWidth / 2, enemy.y - enemy.size - 8, eHpWidth, 4)
                ctx.fillStyle = '#ef4444'
                ctx.fillRect(enemy.x - eHpWidth / 2, enemy.y - enemy.size - 8, eHpWidth * eHpPct, 4)
                ctx.restore()
            }

            // 7. Update and Draw Particles
            for (let i = game.particles.length - 1; i >= 0; i--) {
                const part = game.particles[i]
                part.x += part.vx
                part.y += part.vy
                part.life--
                if (part.life <= 0) {
                    game.particles.splice(i, 1)
                } else {
                    ctx.fillStyle = part.color
                    ctx.beginPath()
                    ctx.arc(part.x, part.y, 2, 0, Math.PI * 2)
                    ctx.fill()
                }
            }

            // 8. Update and Draw Floating Combat Numbers
            for (let i = game.floatingTexts.length - 1; i >= 0; i--) {
                const ft = game.floatingTexts[i]
                ft.y -= 0.6
                ft.alpha -= 0.03
                if (ft.alpha <= 0) {
                    game.floatingTexts.splice(i, 1)
                } else {
                    ctx.fillStyle = ft.color
                    ctx.globalAlpha = ft.alpha
                    ctx.font = 'bold 11px sans-serif'
                    ctx.fillText(ft.text, ft.x, ft.y)
                    ctx.globalAlpha = 1
                }
            }

            animationFrameId = requestAnimationFrame(render)
        }

        animationFrameId = requestAnimationFrame(render)
        return () => cancelAnimationFrame(animationFrameId)
    }, [isOpen, gameState, wave, soundEnabled])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xl p-4 animate-in fade-in duration-200">
            <div className="relative w-full max-w-4xl bg-gray-950 border-2 border-amber-500/50 rounded-3xl shadow-2xl shadow-amber-500/20 overflow-hidden flex flex-col">
                {/* Header HUD */}
                <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-linear-to-r from-amber-950/80 via-black to-emerald-950/80 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                        <div className="p-1.5 sm:p-2 rounded-xl bg-amber-500/20 border border-amber-400 text-amber-400">
                            <Shield className="size-5 sm:size-6 animate-pulse" />
                        </div>
                        <div>
                            <h2 className="text-sm sm:text-lg font-black tracking-wider uppercase bg-linear-to-r from-amber-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                                Clash of Paroi: Village Defense RTS
                            </h2>
                            <p className="text-[10px] sm:text-[11px] text-gray-400">Defend the Town Hall against enemy waves!</p>
                        </div>
                    </div>

                    {/* Stats & Trophies */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-mono font-bold">
                        <div className="flex items-center gap-1 bg-yellow-950/60 border border-yellow-700/50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-yellow-300">
                            <span>🪙 Gold:</span>
                            <span>{gold}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-purple-950/60 border border-purple-700/50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-purple-300">
                            <span>🧪 Elixir:</span>
                            <span>{elixir}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-cyan-950/60 border border-cyan-700/50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-cyan-300">
                            <span>⏱️ Time:</span>
                            <span className="text-amber-400">{timeLeft}s</span>
                        </div>
                        <div className="flex items-center gap-1 bg-emerald-950/60 border border-emerald-700/50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-emerald-300">
                            <span>🏆 Score:</span>
                            <span>{score}</span>
                        </div>
                        <button
                            onClick={() => setSoundEnabled(!soundEnabled)}
                            className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition cursor-pointer"
                            title="Toggle SFX"
                        >
                            {soundEnabled ? <Volume2 className="size-4 text-emerald-400" /> : <VolumeX className="size-4 text-rose-400" />}
                        </button>
                        <button
                            onClick={onClose}
                            className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-rose-500/20 hover:text-rose-400 transition cursor-pointer"
                        >
                            <X className="size-5" />
                        </button>
                    </div>
                </div>

                {/* Defense Selection Bar */}
                <div className="flex items-center justify-between px-6 py-2 bg-black/60 border-b border-white/10 text-xs">
                    <span className="text-gray-400 font-semibold">Select & Click Map to Deploy:</span>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setSelectedDefense('cannon')}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition cursor-pointer ${
                                selectedDefense === 'cannon'
                                    ? 'bg-amber-500/30 border-amber-400 text-amber-300 font-bold shadow-md shadow-amber-500/20'
                                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                            }`}
                        >
                            <span>💥 Cannon</span>
                            <span className="text-[10px] text-amber-400">100g</span>
                        </button>

                        <button
                            onClick={() => setSelectedDefense('archer')}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition cursor-pointer ${
                                selectedDefense === 'archer'
                                    ? 'bg-emerald-500/30 border-emerald-400 text-emerald-300 font-bold shadow-md shadow-emerald-500/20'
                                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                            }`}
                        >
                            <span>🏹 Archer Tower</span>
                            <span className="text-[10px] text-emerald-400">75g 50e</span>
                        </button>

                        <button
                            onClick={() => setSelectedDefense('wizard')}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition cursor-pointer ${
                                selectedDefense === 'wizard'
                                    ? 'bg-purple-500/30 border-purple-400 text-purple-300 font-bold shadow-md shadow-purple-500/20'
                                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                            }`}
                        >
                            <span>⚡ Wizard Tower</span>
                            <span className="text-[10px] text-purple-400">150g 100e</span>
                        </button>
                    </div>

                    <div className="flex items-center gap-1.5 text-gray-400 text-[11px]">
                        <span>Wave:</span>
                        <span className="text-amber-400 font-bold font-mono">#{wave}</span>
                    </div>
                </div>

                {/* Game Canvas */}
                <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden">
                    <canvas
                        ref={canvasRef}
                        width={700}
                        height={460}
                        onClick={handleCanvasClick}
                        onTouchStart={handleCanvasClick}
                        className="cursor-crosshair w-full max-w-[700px] h-[min(55vh,460px)] object-contain shadow-inner touch-none"
                    />

                    {/* Victory Screen */}
                    {gameState === 'won' && (
                        <div className="absolute inset-0 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center animate-in zoom-in-95 duration-200">
                            <Award className="size-16 text-yellow-400 animate-bounce mb-3" />
                            <h3 className="text-3xl font-black text-amber-400 uppercase tracking-widest mb-1">
                                Village Defended!
                            </h3>
                            <p className="text-emerald-300 font-semibold mb-4">
                                You successfully repelled all enemy waves! Recruiter Victory Achieved 🏆
                            </p>
                            <div className="flex gap-4 mb-6 text-sm font-mono bg-white/5 p-4 rounded-2xl border border-white/10">
                                <div>Final Score: <b className="text-amber-400">{score}</b></div>
                                <div>Town Hall Integrity: <b className="text-emerald-400">{Math.round(gameRef.current.townHall.hp)} HP</b></div>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={resetGame}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-amber-500 to-yellow-400 text-black font-bold uppercase tracking-wider hover:scale-105 transition cursor-pointer"
                                >
                                    <RotateCcw className="size-4" /> Play Again
                                </button>
                                <button
                                    onClick={onClose}
                                    className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition cursor-pointer"
                                >
                                    Return to Portfolio
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Defeat Screen */}
                    {gameState === 'lost' && (
                        <div className="absolute inset-0 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center animate-in zoom-in-95 duration-200">
                            <Flame className="size-16 text-rose-500 animate-pulse mb-3" />
                            <h3 className="text-3xl font-black text-rose-500 uppercase tracking-widest mb-1">
                                Town Hall Destroyed!
                            </h3>
                            <p className="text-gray-300 mb-4">
                                The enemy broke through your defenses. Rebuild your towers and try again!
                            </p>
                            <button
                                onClick={resetGame}
                                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-linear-to-r from-rose-500 to-red-600 text-white font-bold uppercase tracking-wider hover:scale-105 transition cursor-pointer shadow-lg shadow-rose-500/40"
                            >
                                <RotateCcw className="size-4" /> Rebuild & Defend
                            </button>
                        </div>
                    )}
                </div>

                {/* Footer Controls */}
                <div className="px-6 py-2.5 bg-black/80 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                    <span>💡 Hint: Place Cannons near center, Archers around perimeter, and Wizard Towers for group damage!</span>
                    <button
                        onClick={resetGame}
                        className="flex items-center gap-1 hover:text-white transition cursor-pointer"
                    >
                        <RotateCcw className="size-3.5" /> Restart Wave
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ClashGame
