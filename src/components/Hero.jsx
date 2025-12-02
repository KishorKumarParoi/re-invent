import React from 'react'

const Hero = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [isLoading, setIsLoading] = React.useState(true)
    const [loadedVideos, setLoadedVideos] = React.useState(0)
    const [isMuted, setIsMuted] = React.useState(false)

    const totalVideos = 5
    const nextVideoRef = React.useRef(null)
    const audioRef = React.useRef(null)

    const handleMiniVideoClick = () => {
        // First user gesture: try starting audio if still muted
        if (audioRef.current && audioRef.current.paused) {
            audioRef.current.play().catch(() => { }) // ignore autoplay errors
        }
        setCurrentIndex(prevIndex => ((prevIndex + 1) % totalVideos))
    }

    const handleVideoLoad = () => {
        setLoadedVideos(prev => prev + 1)
    }

    const toggleMute = () => {
        setIsMuted(prev => !prev)
    }

    React.useEffect(() => {
        if (loadedVideos >= 2) {
            setIsLoading(false)
        }
    }, [loadedVideos])

    React.useEffect(() => {
        if (!audioRef.current) return
        audioRef.current.muted = isMuted
        if (!isMuted) {
            audioRef.current.play().catch(() => { }) // will succeed after a user gesture
        } else {
            audioRef.current.pause()
        }
    }, [isMuted])

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`
    const upcomingVideoIndex = ((currentIndex + 1) % totalVideos)

    return (
        <div className='relative h-dvh w-screen overflow-x-hidden'>
            {/* Background music element */}
            <audio
                ref={audioRef}
                src="/audio/audio-5.mp3" // place file in public/audio/hero-theme.mp3
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
                    className='absolute bottom-6 right-6 z-50 flex size-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/70'
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
                            playsInline
                            id='next-video'
                            onLoadedData={handleVideoLoad}
                        />
                    </div>
                </div>
            </div>

            {isLoading && (
                <div className='flex-center absolute z-100 h-dvh w-screen overflow-hidden bg-violet-50'>
                    <div className='three-body'>
                        <div className='three-body__dot'></div>
                        <div className='three-body__dot'></div>
                        <div className='three-body__dot'></div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Hero