import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const words = containerRef.current.querySelectorAll('.animated-word');

            gsap.from(words, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                    end: 'bottom 60%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                y: 50,
                rotateX: -90,
                transformOrigin: 'top center',
                transformStyle: 'preserve-3d',
                ease: 'power2.out',
                stagger: 0.05,
                duration: 0.6,
            })

        }, containerRef);

        return () => ctx.revert();
    }, [title])

    return (
        <div ref={containerRef} className={`animated-title ${containerClass}`}>
            <h2>KKP</h2>
            {
                title.split('<br />').map((line, index) => (
                    <div key={index} className='flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3'>
                        {
                            line.split(' ').map((word, wIndex) => (
                                <span
                                    key={wIndex}
                                    className='animated-word'
                                    style={{ display: 'inline-block' }}
                                    dangerouslySetInnerHTML={{ __html: word }}
                                />
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default AnimatedTitle;