import React, { useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti'

const BentoCard = ({ title, description, src, isComingSoon, href, linkLabel = "GitHub Repo ↗" }) => {
    return (
        <div className='relative size-full group'>
            <video
                src={src}
                loop
                muted
                autoPlay
                className='absolute left-0 top-0 size-full object-cover object-center transition-transform duration-500 group-hover:scale-105'
            />
            <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 bg-gradient-to-t from-black/80 via-black/30 to-transparent'>
                <div>
                    <h1 className='bento-title special-font'>
                        {title}
                    </h1>
                    {
                        description && (
                            <p className='mt-3 max-w-64 text-xs md:text-sm text-blue-50/90 leading-relaxed'>
                                {description}
                            </p>
                        )
                    }
                </div>
                {href && (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='inline-flex items-center gap-2 self-start rounded-full bg-cyan-400/20 border border-cyan-400/40 px-3.5 py-1.5 text-xs font-semibold text-cyan-200 backdrop-blur-md transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105 shadow-lg shadow-cyan-500/20'
                    >
                        <span>{linkLabel}</span>
                        <TiLocationArrow className='text-sm' />
                    </a>
                )}
            </div>
        </div>
    )
}

export const BentoTilt = ({ children, className = '' }) => {
    const [transformStyle, setTransformStyle] = useState({})
    const itemRef = useRef()

    const handleMouseMove = (e) => {
        if (!itemRef.current) return
        if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return

        const { left, top, width, height } = itemRef.current.getBoundingClientRect()

        const relativeX = (e.clientX - left) / width
        const relativeY = (e.clientY - top) / height

        const tiltX = (relativeY - 0.5) * 45;
        const tiltY = (relativeX - 0.5) * -45;

        setTransformStyle(`perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.93, 0.975)`)
    }

    const handleMouseLeave = () => {
        setTransformStyle('')
    }

    return (
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    )
}

export default BentoCard