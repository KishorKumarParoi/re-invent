import React from 'react'

const Hero = () => {
    const [currentIndex, setCurrentIndex] = React.useState(1);
    const [hasClicked, setHasClicked] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const [loadedVideos, setLoadedVideos] = React.useState(0);

    const totalVideos = 5;
    const nextVideoRef = React.useRef(null);

    const handleMiniVideoClick = () => {
        setHasClicked(true);
        setCurrentIndex(prevIndex => (prevIndex % totalVideos) + 1);
    }

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1)
    }

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    React.useEffect(() => {
        if (loadedVideos === totalVideos - 1) {
            setIsLoading(false);
        }
    }, [loadedVideos]);

    return (
        <div className='relative h-dvh w-screen overflow-x-hidden'>
            <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
                <video
                    src={getVideoSrc(currentIndex)}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='absolute left-0 top-0 size-full object-cover object-center'
                    onLoadedData={handleVideoLoad}
                />

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
                            id='current-video'
                            onLoadedData={handleVideoLoad}
                        />
                    </div>
                </div>
            </div>
            {/* 
            {isLoading && (
                <div className='flex-center absolute z-100 h-dvh w-screen overflow-hidden bg-violet-50'>
                    <div className='three-body'>
                        <div className='three-body__dot'></div>
                        <div className='three-body__dot'></div>
                        <div className='three-body__dot'></div>
                    </div>
                </div>
            )} */}
        </div>
    )
}

export default Hero;