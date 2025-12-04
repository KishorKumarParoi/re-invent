import React from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [loadedVideos, setLoadedVideos] = React.useState(0)
    const [isMuted, setIsMuted] = React.useState(true)
    const [hasClicked, setHasClicked] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true)

    const totalVideos = 5
    const nextVideoRef = React.useRef(null)
    const audioRef = React.useRef(null)

    // Define color array
    const colors = [
        'text-violet-400',
        'text-fuchsia-500',
        'text-cyan-400',
        'text-yellow-400',
        'text-rose-500',
        'text-emerald-400',
        'text-orange-500',
        'text-pink-500',
        'text-lime-400',
        'text-sky-400',
        'text-purple-500',
        'text-amber-400',
    ]

    const getCurrentColor = () => colors[currentIndex % colors.length]

    const handleMiniVideoClick = () => {
        setHasClicked(true)
        // First user gesture: try starting audio if still muted
        if (audioRef.current && audioRef.current.paused) {
            audioRef.current.play().catch(() => { }) // ignore autoplay errors
        }
        setCurrentIndex(prevIndex => ((prevIndex + 1) % totalVideos))
    }

    useGSAP(() => {
        if (hasClicked) {
            gsap.set('#next-video', { visibility: 'visible' })

            // Animate next video expanding to full screen
            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                duration: 1,
                ease: 'power.inOut',
                onStart: () => nextVideoRef.current.play(),
            })

            // Animate current video shrinking with fade
            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0.5,
                duration: 0.8,
                ease: 'power1.inOut',
            })

            gsap.to('.hero-heading', {
                color: getComputedStyle(document.documentElement).getPropertyValue('--color-' + getCurrentColor().replace('text-', '')),
                duration: 0.1,
                ease: 'power1.inOut',
            })
        }
    }, { dependencies: [currentIndex], revertOnUpdate: true })

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(2% 3%, 74% 7%, 89% 91%, 2% 82%)',
            borderRadius: '30px',
        })

        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0px',
            duration: 1.5,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom top',
                scrub: true,
            }
        })
    })


    const handleVideoLoad = () => {
        setLoadedVideos(prev => prev + 1)
    }

    const toggleMute = () => {
        setIsMuted(prev => !prev)
    }

    React.useEffect(() => {
        if (loadedVideos >= 1) {
            setIsLoading(false)
        }
    }, [loadedVideos])

    React.useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key.toLowerCase() === 'm') {
                setIsMuted((prev) => !prev)
            }
        }
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [])

    React.useEffect(() => {
        if (!audioRef.current) return
        audioRef.current.muted = isMuted
        if (!isMuted) {
            audioRef.current.play().catch(() => { })
        } else {
            audioRef.current.pause()
        }
    }, [isMuted])

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`
    const upcomingVideoIndex = ((currentIndex + 1) % totalVideos)

    return (
        <div className='relative h-dvh w-screen overflow-x-hidden'>
            {isLoading && (
                <div className='flex-center absolute inset-0 z-1000 bg-violet-50'>
                    {/* simpler positioning: inset-0 fills the screen */}
                    <div className='three-body'>
                        <div className='three-body__dot'></div>
                        <div className='three-body__dot'></div>
                        <div className='three-body__dot'></div>
                    </div>
                </div>
            )}
            {/* Background music element */}
            <audio
                ref={audioRef}
                src="/audio/audio-5.mp3"
                loop
                autoPlay
                preload="auto"
            />

            <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
                <video
                    src={getVideoSrc(currentIndex)}
                    id='current-video'
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='absolute left-0 top-0 size-full object-cover object-center'
                    onLoadedData={handleVideoLoad}
                />

                {/* Mute/Unmute button */}
                <button
                    onClick={toggleMute}
                    className='absolute bottom-6 left-6 z-50 flex size-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/70'
                    aria-label={isMuted ? 'Unmute music' : 'Mute music'}
                >
                    {isMuted ? '🔇' : '🔊'}
                </button>

                <div className='mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                    <div
                        onClick={handleMiniVideoClick}
                        className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'
                    >
                        <video
                            ref={nextVideoRef}
                            src={getVideoSrc(upcomingVideoIndex)}
                            className='size-64 origin-center scale-150 object-cover object-center'
                            loop
                            muted
                            autoPlay
                            playsInline
                            id='next-video'
                            onLoadedData={handleVideoLoad}
                        />
                    </div>
                </div>

                <h1 className='special-font hero-heading absolute bottom-12 right-5 z-40 text-blue-100'>
                    G<b>A</b><b className='text-blue-600!'>M</b>I<b>N</b>G
                </h1>

                <div className='absolute left-0 top-0 z-40 size-full'>
                    <div className='mt-24 px-5 sm:px-10'>
                        <h1 className="special-font hero-heading text-blue-100 " >
                            r<b>e</b> ; inve<b>n</b><b>t</b>
                        </h1>
                        <h1 className="special-font hero-heading text-blue-100 " >
                            <b>y</b>o<b className='text-red-600'>u</b>rs<b>e</b><b>l</b><b>f</b>
                        </h1>
                        <p className='mb-5 max-w-64 font-robert-medium text-blue-300/80'>
                            “Even the finest sword plunged into salt water - <br />  will eventually rust.”
                            ― Sun Tzu
                        </p>

                        <Button id="watch-trailer" title="Watch Trailer" leftIcon={<TiLocationArrow />}
                            containerClass='!bg-yellow-300 flex-center gap-1' />

                    </div>
                </div>
            </div >

            <h1 className='special-font hero-heading absolute bottom-12 right-5 text-black'>
                G<b>A</b><b>M</b>I<b>N</b>G
            </h1>
        </div >
    )
}

export default Hero