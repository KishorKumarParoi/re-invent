import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap'
import RoundedCorners from './RoundedCorner.jsx'

const Story = () => {
    const frameRef = useRef(null)

    const handleMouseLeave = () => {
        const element = frameRef.current;
        if (!element) return;

        const rotateX = 0;
        const rotateY = 0;

        gsap.to(element, {
            duration: 0.3,
            rotateX, rotateY,
            ease: 'power1.inOut'
        })
    }

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * -10;

        gsap.to(element, {
            duration: 0.3,
            rotateX, rotateY,
            transformPerspective: 500,
            ease: 'power2.inOut'
        })
    }

    return (
        <section id="story" className='min-h-dvh w-screen bg-black text-blue-100'>
            <div className='flex size-full flex-col items-center py-10 pb-24'>
                <p className='font-general text-lg uppercase md:text-[10px]'>
                    The Multiversal Metaverse World
                </p>
                <div className='relative size-full'>
                    {/* Project Certificate Section */}
                    <div className='relative z-500 my-16 px-4'>
                        {/* Cool Animated Heading */}
                        <div className='text-center mb-16'>
                            <h1 className='text-5xl md:text-7xl lg:text-8xl font-black tracking-none mb-4'>
                                <span className='bg-linear-to-r from-cyan-300 via-emerald-300 to-blue-400 bg-clip-text text-transparent'>
                                    Proj<span className='relative text-white'>
                                        e
                                        <span className='absolute inset-0 bg-linear-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text animate-pulse'></span>
                                    </span>ct
                                </span>
                                {' '}
                                <span className='text-white drop-shadow-lg'>&</span>
                                {' '}
                                <span className='relative inline-block'>
                                    <span className='absolute -inset-2 bg-linear-to-r from-cyan-500 to-emerald-500 rounded-lg blur opacity-30 animate-pulse'></span>
                                    <span className='relative bg-linear-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent'>
                                        Cert<span className='relative'>
                                            i
                                            <span className='absolute inset-0 bg-linear-to-r from-emerald-400 to-blue-400 text-transparent bg-clip-text animate-pulse'></span>
                                        </span>ficate
                                    </span>
                                </span>
                            </h1>

                            {/* Decorative line and dots */}
                            <div className='flex justify-center items-center gap-4 mt-6'>
                                <div className='h-1 w-12 bg-linear-to-r from-transparent to-cyan-400'></div>
                                <div className='w-3 h-3 rounded-full bg-cyan-400 animate-pulse'></div>
                                <div className='h-1 w-12 bg-linear-to-l from-transparent to-emerald-400'></div>
                            </div>

                            {/* Subtitle */}
                            <p className='text-sm md:text-base text-emerald-300 mt-6 tracking-widest uppercase font-semibold'>
                                Achievements & Recognition
                            </p>
                        </div>

                        <AnimatedTitle
                            title={"The st<b>o</b>ry of <br/> a hidden real<b>m</b>"}
                            sectionId="#story"
                            containerClass="pointer-events-none mix-blend-difference relative z-10"
                        />

                        {/* Image container with rounded corners */}
                        <div className='story-img-container relative overflow-hidden rounded-3xl bottom-52'>
                            <div className='story-img-mask'>
                                <div className='story-img-content'>
                                    <img
                                        ref={frameRef}
                                        onMouseLeave={handleMouseLeave}
                                        onMouseUp={handleMouseLeave}
                                        onMouseEnter={handleMouseLeave}
                                        onMouseMove={handleMouseMove}
                                        src='/img/entrance.webp'
                                        alt='entrance'
                                        className='object-contain object-center'
                                    />
                                </div>
                            </div>
                            {/* RoundedCorners positioned absolutely over the image */}
                            <div className='absolute inset-0 pointer-events-none z-20'>
                                <RoundedCorners />
                            </div>
                        </div>

                        {/* Certificate Cards Grid */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12'>
                            {/* Certificate Card 1 */}
                            <div className='group relative'>
                                <div className='absolute -inset-0.5 bg-linear-to-r from-cyan-400 to-emerald-400 rounded-xl blur opacity-20 group-hover:opacity-100 transition duration-500'></div>
                                <div className='relative px-6 py-8 bg-black/50 backdrop-blur-xl rounded-xl border border-cyan-500/20 hover:border-cyan-500/60 transition'>
                                    <div className='text-4xl mb-3'>🏆</div>
                                    <h3 className='text-lg font-black text-white mb-2'>Excellence Award</h3>
                                    <p className='text-sm text-cyan-300 mb-4'>Recognized for outstanding innovation and impact</p>
                                    <span className='text-xs text-emerald-400 font-semibold'>2024</span>
                                </div>
                            </div>

                            {/* Certificate Card 2 */}
                            <div className='group relative'>
                                <div className='absolute -inset-0.5 bg-linear-to-r from-emerald-400 to-blue-400 rounded-xl blur opacity-20 group-hover:opacity-100 transition duration-500'></div>
                                <div className='relative px-6 py-8 bg-black/50 backdrop-blur-xl rounded-xl border border-emerald-500/20 hover:border-emerald-500/60 transition'>
                                    <div className='text-4xl mb-3'>⭐</div>
                                    <h3 className='text-lg font-black text-white mb-2'>Innovation Leader</h3>
                                    <p className='text-sm text-emerald-300 mb-4'>Leading breakthrough solutions in tech</p>
                                    <span className='text-xs text-blue-400 font-semibold'>2024</span>
                                </div>
                            </div>

                            {/* Certificate Card 3 */}
                            <div className='group relative'>
                                <div className='absolute -inset-0.5 bg-linear-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-20 group-hover:opacity-100 transition duration-500'></div>
                                <div className='relative px-6 py-8 bg-black/50 backdrop-blur-xl rounded-xl border border-blue-500/20 hover:border-blue-500/60 transition'>
                                    <div className='text-4xl mb-3'>🎯</div>
                                    <h3 className='text-lg font-black text-white mb-2'>Global Impact</h3>
                                    <p className='text-sm text-blue-300 mb-4'>Transforming millions of lives worldwide</p>
                                    <span className='text-xs text-purple-400 font-semibold'>2024</span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Story