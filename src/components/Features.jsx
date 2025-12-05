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
        <section className='pb-52'>
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
                                R<b>a</b>
                                <b className='text-purple-600'>d</b>
                                i
                                <b>a</b>
                            </span>
                            <b className='text-blue-400'>n</b>
                            <span className='bg-linear-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent'>
                                <b>t</b>
                            </span>
                        </>}
                        description="A fully immersive 3D metaverse-inspired portfolio showcasing interactive projects, innovative solutions, and creative excellence in a connected digital universe."
                        isComingSoon={false}
                    />
                </BentoTilt>

                <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
                    <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 rounded-2xl'>
                        <BentoCard
                            src={"videos/feature-2.mp4"}
                            title={<>zig<b>m</b>a</>}
                            description={"An anime and gaming-inspired NFT collection - the IP primed for expansion"}
                        />
                    </BentoTilt>

                    <BentoTilt className='bento_tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 rounded-4xl'>
                        <BentoCard
                            src={"videos/feature-3.mp4"}
                            title={<>n<b>e</b>exus</>}
                            description={"A Gamified Social hub, adding a new dimension of play to social iteraction for Web3 communities"}
                        />
                    </BentoTilt>

                    <BentoTilt className='bento_tilt_1 me-14 md:col-span-1 md:me-0 rounded-3xl'>
                        <BentoCard
                            src={"videos/feature-4.mp4"}
                            title={<>az<b>u</b>re</>}
                            description={"A cross-world AI Agent - elevating your gameplay to be more fun and productive"}
                        />
                    </BentoTilt>

                    <BentoTilt className='bento-tilt_2 rounded-2xl'>
                        <div className='flex size-full flex-col justify-between bg-violet-700 p-5'>
                            <h1 className='bento-title special-font max-w-64 text-black'>
                                M<b>o</b>re co<b>m</b>ing s<b>o</b>on!
                            </h1>

                            <TiLocationArrow className='m-5 scale-[5] self-end' />
                        </div>
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