import React from 'react'

const RoundedCorners = () => {
    return (
        <div className='absolute inset-0 pointer-events-none overflow-hidden'>
            {/* SVG with filters */}
            <svg
                className="absolute size-0"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="flt_tag">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="8"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="flt_tag"
                        />
                        <feComposite
                            in="SourceGraphic"
                            in2="flt_tag"
                            operator="atop"
                        />
                    </filter>
                </defs>
            </svg>

            {/* Left side bend */}
            <div className='absolute left-0 top-0 bottom-0 w-32 pointer-events-none'
                style={{
                    background: 'linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%)',
                    borderRadius: '0 50px 50px 0',
                    filter: 'drop-shadow(-20px 0 30px rgba(34, 211, 238, 0.3))',
                    backdropFilter: 'blur(5px)',
                }}
            ></div>

            {/* Right side bend */}
            <div className='absolute right-0 top-0 bottom-0 w-32 pointer-events-none'
                style={{
                    background: 'linear-gradient(to left, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%)',
                    borderRadius: '50px 0 0 50px',
                    filter: 'drop-shadow(20px 0 30px rgba(34, 211, 238, 0.3))',
                    backdropFilter: 'blur(5px)',
                }}
            ></div>

            {/* Bottom right corner bend */}
            <div className='absolute bottom-0 right-0 pointer-events-none'
                style={{
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle at bottom right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 100%)',
                    borderRadius: '200px 0 0 0',
                    filter: 'drop-shadow(15px 15px 30px rgba(34, 211, 238, 0.4))',
                    backdropFilter: 'blur(8px)',
                }}
            ></div>

            {/* Top left corner accent */}
            <div className='absolute top-0 left-0 pointer-events-none'
                style={{
                    width: '150px',
                    height: '150px',
                    background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.2) 0%, rgba(16, 185, 129, 0.1) 50%, rgba(0,0,0,0) 100%)',
                    borderRadius: '0 0 150px 0',
                }}
            ></div>

            {/* Glowing edge - Left */}
            <div className='absolute left-0 top-0 bottom-0 w-1 pointer-events-none'
                style={{
                    background: 'linear-gradient(to bottom, rgba(34, 211, 238, 0.5), rgba(34, 211, 238, 0.2), rgba(0,0,0,0))',
                    boxShadow: '0 0 20px rgba(34, 211, 238, 0.6), inset 0 0 20px rgba(34, 211, 238, 0.3)',
                }}
            ></div>

            {/* Glowing edge - Right */}
            <div className='absolute right-0 top-0 bottom-0 w-1 pointer-events-none'
                style={{
                    background: 'linear-gradient(to bottom, rgba(34, 211, 238, 0.5), rgba(34, 211, 238, 0.2), rgba(0,0,0,0))',
                    boxShadow: '0 0 20px rgba(34, 211, 238, 0.6), inset 0 0 20px rgba(34, 211, 238, 0.3)',
                }}
            ></div>

            {/* Glowing edge - Bottom */}
            <div className='absolute bottom-0 left-0 right-0 h-1 pointer-events-none'
                style={{
                    background: 'linear-gradient(to right, rgba(34, 211, 238, 0.5), rgba(34, 211, 238, 0.2), rgba(0,0,0,0))',
                    boxShadow: '0 0 20px rgba(34, 211, 238, 0.6), inset 0 0 20px rgba(34, 211, 238, 0.3)',
                }}
            ></div>

            {/* Decorative corner glow - Bottom Right */}
            <div className='absolute bottom-0 right-0 pointer-events-none'
                style={{
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle at bottom right, rgba(34, 211, 238, 0.15) 0%, rgba(16, 185, 129, 0.05) 50%, rgba(0,0,0,0) 100%)',
                    filter: 'blur(40px)',
                }}
            ></div>
        </div>
    )
}

export default RoundedCorners