import React, { useRef, useState } from 'react'

const BentoCard = ({ title, description, src, isComingSoon }) => {
    return (
        <div className='relative size-full'>
            <video
                src={src}
                loop
                muted
                autoPlay
                className='absolute left-0 top-0 size-full object-cover object-center'
            />
            <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
                <div>
                    <h1 className='bento-title special-font'>
                        {title}
                    </h1>
                    {
                        description && (
                            <p className='mt-3 max-w-64 text-xs md:text-base'>
                                {description}
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export const BentoTilt = ({ children, className = '' }) => {
    const [transformStyle, setTransformStyle] = useState({})
    const itemRef = useRef()

    const handleMouseMove = (e) => {
        if (!itemRef.current) return

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