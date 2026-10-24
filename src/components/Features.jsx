import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BentoCard, { BentoTilt } from './BentoCard'
import { TiLocationArrow } from 'react-icons/ti'

gsap.registerPlugin(ScrollTrigger)

const Features = () => {
    const titleRef = useRef(null)
    const descRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        // Animate title on scroll
        gsap.fromTo(
            titleRef.current,
            {
                opacity: 0,
                y: 50,
                letterSpacing: '0.1em'
            },
            {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                    end: 'top 30%',
                    toggleActions: 'play pause resume reverse',
                },
                opacity: 1,
                y: 0,
                letterSpacing: '0.05em',
                duration: 1,
                ease: 'power2.out'
            }
        )

        // Animate description with stagger
        gsap.fromTo(
            descRef.current,
            {
                opacity: 0,
                y: 30
            },
            {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 65%',
                    end: 'top 25%',
                    toggleActions: 'play pause resume reverse',
                },
                opacity: 0.8,
                y: 0,
                duration: 1.2,
                delay: 0.2,
                ease: 'power2.out'
            }
        )

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <section id='features' className='pb-52'>
            <div className='container mx-auto px-3 md:px-10'>
                <div ref={containerRef} className='px-5 py-32'>
                    {/* Main Title with linear and glow */}
                    <div ref={titleRef} className='relative'>
                        <h2 className='font-circular-web text-4xl md:text-5xl font-bold mb-6'>
                            <span className='bg-linear-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent animate-pulse'>
                                Immersive 3D Portfolio
                            </span>
                        </h2>
                        <p className='font-circular-web text-lg text-blue-50 mb-8 tracking-wider'>
                            Welcome to My Metaverse
                        </p>
                    </div>

                    {/* Description with better copy */}
                    <div ref={descRef} className='max-w-2xl'>
                        <p className='font-circular-web text-base md:text-lg text-blue-50 leading-relaxed opacity-80 mb-4'>
                            Step into a <span className='text-cyan-400 font-semibold'>dynamic 3D universe</span> where my work comes alive.
                            This isn't just a portfolio—it's an <span className='text-emerald-400 font-semibold'>immersive metaverse experience </span>
                            designed to showcase innovation, creativity, and technical excellence.
                        </p>
                        <p className='font-circular-web text-base md:text-lg text-blue-50 leading-relaxed opacity-70'>
                            Explore <span className='text-blue-400 font-semibold'>interactive 3D environments</span>,
                            navigate through <span className='text-violet-400 font-semibold'>interconnected digital spaces</span>,
                            and discover how cutting-edge technology transforms traditional portfolios into unforgettable experiences.
                        </p>
                    </div>

                    {/* Animated divider */}
                    <div className='mt-12 flex gap-2'>
                        <div className='h-1 w-12 bg-linear-to-r from-cyan-400 to-emerald-400 rounded-full animate-pulse'></div>
                        <div className='h-1 w-8 bg-linear-to-r from-emerald-400 to-blue-500 rounded-full animate-pulse' style={{ animationDelay: '0.2s' }}></div>
                        <div className='h-1 w-4 bg-linear-to-r from-blue-500 to-violet-500 rounded-full animate-pulse' style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>

                {/* Bento Card Section */}
                <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] rounded-7xl'>
                    <BentoCard
                        src="videos/feature-1.mp4"
                        title={<>
                            <span className='bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent'>
                                H<b>y</b>
                                <b className='text-purple-600'>b</b>
                                r
                                <b>i</b>
                            </span>
                            <b className='text-blue-400'>d</b>
                            <span className='bg-linear-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent'>
                                <b> AI</b>
                            </span>
                        </>}
                        description="Hybrid Anime Intelligence & LLMOps: vLLM Multi-LoRA serving, Qdrant 384-dim dense vector search, BM25 lexical retrieval, RRF fusion, and sub-10ms ONNX neural re-ranking (99.8% latency reduction)."
                        isComingSoon={false}
                    />
                </BentoTilt>

                <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
                    <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 rounded-2xl'>
                        <BentoCard
                            src={"videos/feature-2.mp4"}
                            title={<>AI <b>S</b>ecurity</>}
                            description={"Enterprise Zero-Trust AI Gateway & RAG: NVIDIA NeMo Guardrails, BotShield adaptive WAF, FastMCP tool execution, and sub-50ms semantic caching."}
                        />
                    </BentoTilt>

                    <BentoTilt className='bento_tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 rounded-4xl'>
                        <BentoCard
                            src={"videos/feature-3.mp4"}
                            title={<>Z<b>o</b>mato Lakehouse</>}
                            description={"Multi-Cloud Lakehouse & Multimodal Engine: PySpark Delta Lake medallion pipeline, Snowflake warehousing, Feast feature store, and visual recommendations."}
                        />
                    </BentoTilt>

                    <BentoTilt className='bento_tilt_1 me-14 md:col-span-1 md:me-0 rounded-3xl'>
                        <BentoCard
                            src={"videos/feature-4.mp4"}
                            title={<>Smart <b>M</b>anufacturing</>}
                            description={"Industrial AI & MLOps Platform: Rust SIMD telemetry ingestion, Go gateway, Next.js 15 3D digital twin cockpit, and sub-5ms anomaly detection."}
                        />
                    </BentoTilt>

                    <BentoTilt className='bento-tilt_2 rounded-2xl'>
                        <a 
                            href="https://koom-ai.vercel.app" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className='flex size-full flex-col justify-between bg-violet-700 p-5 group transition-all duration-300 hover:bg-violet-600'
                        >
                            <div>
                                <h1 className='bento-title special-font max-w-64 text-black'>
                                    K<b>o</b>om-<b>A</b>I
                                </h1>
                                <p className='text-xs md:text-sm text-black/90 font-medium mt-2'>
                                    Autonomous Screen-Recording & Intelligence Cockpit with WebRTC, Next.js 16, AWS S3, and real-time meeting transcription.
                                </p>
                            </div>

                            <div className='flex items-center justify-between w-full mt-4'>
                                <span className='text-xs uppercase tracking-wider text-black font-bold'>Live Platform ↗</span>
                                <TiLocationArrow className='text-black text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
                            </div>
                        </a>
                    </BentoTilt>

                    <BentoTilt className='bento-tilt_2 rounded-4xl'>
                        <video src='videos/feature-5.mp4'
                            loop
                            muted
                            autoPlay
                            className='size-full object-contain object-center'
                        />
                    </BentoTilt>
                </div>
            </div>

        </section>
    )
}

export default Features