import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Terminal, Shield, Cpu, Activity, Sparkles, Maximize2 } from 'lucide-react'

export const HackerRoom = () => {
    const mountRef = useRef(null)
    const [activeTab, setActiveTab] = useState('telemetry')
    const [isHovered, setIsHovered] = useState(false)
    const [hasWebGLError, setHasWebGLError] = useState(false)

    useEffect(() => {
        const mount = mountRef.current
        if (!mount) return

        let renderer
        let animationFrameId
        let handleMouseMove
        let handleResize

        try {
            // Check if WebGL context can be created
            const canvas = document.createElement('canvas')
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
            if (!gl) {
                setHasWebGLError(true)
                return
            }

            // 1. Scene, Camera, Renderer
            const scene = new THREE.Scene()
            scene.fog = new THREE.FogExp2(0x030712, 0.04)

            const width = mount.clientWidth || 800
            const height = mount.clientHeight || 500

            const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
            camera.position.set(0, 3, 10)
            camera.lookAt(0, 0, 0)

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
            renderer.setSize(width, height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            renderer.toneMapping = THREE.ACESFilmicToneMapping
            mount.appendChild(renderer.domElement)

            // 2. Cyber Grid Floor
            const gridHelper = new THREE.GridHelper(30, 30, 0x06b6d4, 0x1e293b)
            gridHelper.position.y = -2
            scene.add(gridHelper)

        // 3. Central 3D Cyber Console / CRT Monitor
        const monitorGroup = new THREE.Group()

        // Monitor Base & Stand
        const standGeo = new THREE.CylinderGeometry(0.3, 0.5, 0.8, 16)
        const darkMat = new THREE.MeshStandardMaterial({
            color: 0x0f172a,
            roughness: 0.3,
            metalness: 0.8,
        })
        const stand = new THREE.Mesh(standGeo, darkMat)
        stand.position.y = -1.2
        monitorGroup.add(stand)

        // Monitor Screen Frame
        const frameGeo = new THREE.BoxGeometry(4.2, 2.6, 0.4)
        const frameMat = new THREE.MeshStandardMaterial({
            color: 0x111827,
            roughness: 0.4,
            metalness: 0.9,
        })
        const monitorFrame = new THREE.Mesh(frameGeo, frameMat)
        monitorFrame.position.y = 0.4
        monitorGroup.add(monitorFrame)

        // Glowing Screen Face
        const screenGeo = new THREE.PlaneGeometry(3.9, 2.3)
        // Canvas Texture for Dynamic Matrix Terminal Screen
        const screenCanvas = document.createElement('canvas')
        screenCanvas.width = 512
        screenCanvas.height = 300
        const sCtx = screenCanvas.getContext('2d')
        const screenTexture = new THREE.CanvasTexture(screenCanvas)

        const screenMat = new THREE.MeshBasicMaterial({
            map: screenTexture,
            transparent: true,
            opacity: 0.95,
        })
        const screenMesh = new THREE.Mesh(screenGeo, screenMat)
        screenMesh.position.set(0, 0.4, 0.21)
        monitorGroup.add(screenMesh)

        // Holographic Floating Wireframe Core (Above Monitor)
        const holoGeo = new THREE.IcosahedronGeometry(0.8, 1)
        const holoMat = new THREE.MeshBasicMaterial({
            color: 0x10b981,
            wireframe: true,
            transparent: true,
            opacity: 0.7,
        })
        const holoCore = new THREE.Mesh(holoGeo, holoMat)
        holoCore.position.set(0, 2.2, 0)
        monitorGroup.add(holoCore)

        // Orbiting Torus Ring
        const ringGeo = new THREE.TorusGeometry(1.3, 0.03, 16, 64)
        const ringMat = new THREE.MeshBasicMaterial({
            color: 0x06b6d4,
            transparent: true,
            opacity: 0.6,
        })
        const ringMesh = new THREE.Mesh(ringGeo, ringMat)
        ringMesh.position.set(0, 2.2, 0)
        ringMesh.rotation.x = Math.PI / 3
        monitorGroup.add(ringMesh)

        scene.add(monitorGroup)

        // 4. Volumetric Cyber Dust / Matrix Particles
        const particleCount = 400
        const particleGeo = new THREE.BufferGeometry()
        const positions = new Float32Array(particleCount * 3)
        const colors = new Float32Array(particleCount * 3)

        for (let i = 0; i < particleCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 20
            positions[i + 1] = (Math.random() - 0.5) * 12 + 2
            positions[i + 2] = (Math.random() - 0.5) * 15

            // Cyan & Emerald colors
            const isEmerald = Math.random() > 0.5
            colors[i] = isEmerald ? 0.06 : 0.02
            colors[i + 1] = isEmerald ? 0.72 : 0.71
            colors[i + 2] = isEmerald ? 0.5 : 0.83
        }

        particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

        const particleMat = new THREE.PointsMaterial({
            size: 0.08,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
        })
        const particles = new THREE.Points(particleGeo, particleMat)
        scene.add(particles)

        // 5. Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
        scene.add(ambientLight)

        const cyanSpot = new THREE.PointLight(0x06b6d4, 3, 20)
        cyanSpot.position.set(-4, 4, 4)
        scene.add(cyanSpot)

        const emeraldSpot = new THREE.PointLight(0x10b981, 3, 20)
        emeraldSpot.position.set(4, 3, 4)
        scene.add(emeraldSpot)

        // 6. Interactive Mouse Movement
        let mouseX = 0
        let mouseY = 0
        let targetX = 0
        let targetY = 0

        handleMouseMove = (e) => {
            const rect = mount.getBoundingClientRect()
            mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1
            mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
        }
        window.addEventListener('mousemove', handleMouseMove)

        // 7. Matrix Code Draw on Screen Canvas
        let matrixFrame = 0
        const matrixChars = "01アイウエオカキクケコサシスセソタチツテトKKPAROISIMD95%"
        const columns = Math.floor(screenCanvas.width / 16)
        const drops = Array(columns).fill(1)

        const updateMatrixScreen = () => {
            sCtx.fillStyle = 'rgba(5, 12, 22, 0.2)'
            sCtx.fillRect(0, 0, screenCanvas.width, screenCanvas.height)

            sCtx.fillStyle = '#10b981'
            sCtx.font = '12px monospace'

            for (let i = 0; i < drops.length; i++) {
                const char = matrixChars[Math.floor(Math.random() * matrixChars.length)]
                const x = i * 16
                const y = drops[i] * 16

                sCtx.fillText(char, x, y)
                if (y > screenCanvas.height && Math.random() > 0.975) {
                    drops[i] = 0
                }
                drops[i]++
            }

            // HUD overlay text on screen
            sCtx.fillStyle = '#38bdf8'
            sCtx.font = 'bold 14px monospace'
            sCtx.fillText('// ARCHITECT_CORE_v5.4', 20, 30)
            sCtx.fillStyle = '#f8fafc'
            sCtx.font = '11px monospace'
            sCtx.fillText('> SIMD RUST: <0.5ms', 20, 60)
            sCtx.fillText('> LAKEHOUSE: 35M+ ROWS', 20, 80)
            sCtx.fillText('> NEMO WAF: 95%+ BLOCKED', 20, 100)
            sCtx.fillText('> RECRUITER: SPEECHLESS', 20, 120)

            screenTexture.needsUpdate = true
        }

        // 8. Animation Loop
        let clock = new THREE.Clock()

        const animate = () => {
            const elapsed = clock.getElapsedTime()

            // Smooth camera lerp with mouse
            targetX = mouseX * 1.5
            targetY = mouseY * 0.8
            camera.position.x += (targetX - camera.position.x) * 0.05
            camera.position.y += (targetY + 2.5 - camera.position.y) * 0.05
            camera.lookAt(0, 0.5, 0)

            // Monitor subtle floating & rotating
            monitorGroup.rotation.y = Math.sin(elapsed * 0.5) * 0.08
            holoCore.rotation.x = elapsed * 0.8
            holoCore.rotation.y = elapsed * 1.2
            ringMesh.rotation.z = -elapsed * 0.6

            // Floating dust particles
            const posAttr = particleGeo.attributes.position
            for (let i = 1; i < particleCount * 3; i += 3) {
                posAttr.array[i] += Math.sin(elapsed + i) * 0.005
            }
            posAttr.needsUpdate = true

            // Update Matrix Screen every 2 frames
            matrixFrame++
            if (matrixFrame % 2 === 0) {
                updateMatrixScreen()
            }

            renderer.render(scene, camera)
            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        // Resize handler
        handleResize = () => {
            if (!mount) return
            const w = mount.clientWidth
            const h = mount.clientHeight
            camera.aspect = w / h
            camera.updateProjectionMatrix()
            renderer.setSize(w, h)
        }
        window.addEventListener('resize', handleResize)
        } catch (err) {
            console.warn('WebGL initialization failed, switching to telemetry fallback:', err)
            setHasWebGLError(true)
            return
        }

        return () => {
            if (handleMouseMove) window.removeEventListener('mousemove', handleMouseMove)
            if (handleResize) window.removeEventListener('resize', handleResize)
            if (animationFrameId) cancelAnimationFrame(animationFrameId)
            if (renderer) renderer.dispose()
            if (mount) mount.innerHTML = ''
        }
    }, [])

    return (
        <section id="hacker-room" className="relative min-h-[85vh] w-full py-20 bg-linear-to-b from-black via-gray-950 to-black text-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
                            <Sparkles className="size-4 animate-spin text-emerald-400" />
                            <span>3D Metaverse Workstation • Real-Time WebGL</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                            <span className="bg-linear-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                                3D Hacker Room
                            </span>
                            <span className="text-white"> & Telemetry</span>
                        </h2>
                    </div>

                    <p className="text-sm md:text-base text-gray-400 max-w-md">
                        Interactive 3D architectural terminal built with Three.js & GLSL shaders.
                        Move your cursor across the cockpit to explore the live neural runtime.
                    </p>
                </div>

                {/* 3D Canvas Container */}
                <div className="relative w-full h-[540px] rounded-3xl border border-white/10 bg-radial from-cyan-950/20 via-black to-black shadow-2xl shadow-cyan-500/10 overflow-hidden">
                    {/* Three.js Canvas Mount or Telemetry Standby Fallback */}
                    {!hasWebGLError ? (
                        <div ref={mountRef} className="size-full cursor-grab active:cursor-grabbing" />
                    ) : (
                        <div className="size-full flex flex-col items-center justify-center p-8 relative overflow-hidden bg-gradient-to-b from-gray-950 via-cyan-950/20 to-black">
                            <div className="relative z-10 text-center max-w-xl space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                                    <Cpu className="size-4 animate-spin text-emerald-400" />
                                    <span>REAL-TIME TELEMETRY ENGINE ACTIVE</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-white">Interactive Cockpit Telemetry</h3>
                                <p className="text-xs md:text-sm text-gray-400 font-mono">
                                    WebGL GPU context in standby. Continuous telemetry pipeline running in high-performance mode:
                                </p>
                                <div className="grid grid-cols-2 gap-3 text-left font-mono text-xs pt-2">
                                    <div className="p-3.5 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-md">
                                        <div className="text-emerald-400 font-bold mb-1">RUST SIMD ENGINE</div>
                                        <div className="text-gray-400">&lt;0.5ms p99 Latency SLA</div>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-md">
                                        <div className="text-cyan-400 font-bold mb-1">ICEBERG LAKEHOUSE</div>
                                        <div className="text-gray-400">35M+ Events Deduplicated</div>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-md">
                                        <div className="text-purple-400 font-bold mb-1">NEMO GUARDRAILS</div>
                                        <div className="text-gray-400">99.8% Jailbreak Prevention</div>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-md">
                                        <div className="text-amber-400 font-bold mb-1">FASTMCP GATEWAY</div>
                                        <div className="text-gray-400">12 Enterprise AI Tools</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Cockpit HUD Overlay (Top Left) */}
                    <div className="absolute top-6 left-6 z-10 pointer-events-none space-y-2">
                        <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md border border-cyan-500/30 px-3 py-1.5 rounded-full text-xs font-mono text-cyan-300">
                            <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                            <span>STATUS: LIVE_RUNTIME_ACTIVE</span>
                        </div>
                        <div className="bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-2xl text-[11px] font-mono text-gray-300 max-w-xs space-y-1">
                            <div className="text-cyan-400 font-bold">SYSTEM TELEMETRY:</div>
                            <div>• Architecture: Principal AI Systems</div>
                            <div>• Polyglot: Rust 1.85 SIMD + Go 1.24 + Python</div>
                            <div>• Models: vLLM Multi-LoRA + NeMo Guardrails</div>
                            <div>• Lakehouse: Snowflake + PySpark Delta</div>
                        </div>
                    </div>

                    {/* HUD Controls (Bottom Bar) */}
                    <div className="absolute bottom-6 inset-x-6 z-10 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
                        <div className="flex items-center gap-2 bg-black/75 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-mono text-gray-300 pointer-events-auto">
                            <span className="text-emerald-400 font-bold">Mouse Orbit:</span>
                            <span>Tilt & rotate 3D camera dynamically</span>
                        </div>

                        <div className="flex items-center gap-2 pointer-events-auto">
                            <a
                                href="https://github.com/KishorKumarParoi/re-invent"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 px-4 py-2 rounded-full text-xs font-bold transition hover:scale-105"
                            >
                                <Terminal className="size-3.5" />
                                <span>Inspect 3D Source</span>
                            </a>
                            <a
                                href="#projects"
                                className="flex items-center gap-1.5 bg-linear-to-r from-cyan-500 to-emerald-400 text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition hover:scale-105 shadow-lg shadow-cyan-500/30"
                            >
                                <span>Explore Projects</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HackerRoom
