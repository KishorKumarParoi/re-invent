import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap'
import RoundedCorners from './RoundedCorner.jsx'
import Button from './Button'

const Story = () => {
    const frameRef = useRef(null)

    const handleMouseLeave = () => {
        const element = frameRef.current
        if (!element) return

        gsap.to(element, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: 'power1.inOut'
        })
    }

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e
        const element = frameRef.current
        if (!element) return

        const rect = element.getBoundingClientRect()
        const x = clientX - rect.left
        const y = clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * 10
        const rotateY = ((x - centerX) / centerX) * -10

        gsap.to(element, {
            duration: 0.3,
            rotateX,
            rotateY,
            transformPerspective: 500,
            ease: 'power2.inOut'
        })
    }

    return (
        <section id="story" className="min-h-dvh w-screen text-blue-100 py-16">
            <div className="flex size-full flex-col items-center py-10 pb-24">
                <p className="font-general text-xs uppercase tracking-widest text-cyan-400 mb-2">
                    The Multiversal Metaverse World
                </p>

                <AnimatedTitle
                    title={"The st<b>o</b>ry of <br/> a hidden real<b>m</b>"}
                    sectionId="#story"
                    containerClass="pointer-events-none mix-blend-difference relative z-10 mb-8"
                />

                <div className="relative size-full">
                    {/* Image container with rounded corners */}
                    <div className="story-img-container relative overflow-hidden rounded-3xl mx-auto max-w-4xl">
                        <div className="story-img-mask">
                            <div className="story-img-content">
                                <img
                                    ref={frameRef}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                    src="/img/entrance.webp"
                                    alt="entrance"
                                    className="object-contain object-center w-full"
                                />
                            </div>
                        </div>
                        <div className="absolute inset-0 pointer-events-none z-20">
                            <RoundedCorners />
                        </div>
                    </div>

                    <div className="mt-8 flex w-full justify-center md:me-44 md:justify-end">
                        <div className="flex h-full w-fit flex-col items-center md:items-start max-w-md px-6 text-center md:text-left">
                            <p className="font-circular-web text-violet-50 text-sm md:text-base leading-relaxed">
                                “Bad programmers worry about the code. Good programmers worry about data structures and their relationships.”
                            </p>
                            <p className="italic text-xs text-cyan-300 mt-1">~ Linus Torvalds (Linux Creator)</p>
                            <Button
                                id="realm-button"
                                title="discover prologue"
                                containerClass="mt-5 bg-linear-to-r from-cyan-300 via-purple-400 to-blue-400 text-black font-bold"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story