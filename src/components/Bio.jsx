import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Bio = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: '0%',
            ease: 'power2.out',
            duration: 1.5,
        })
    })

    return (
        <div id='about' className='min-h-screen w-screen'>
            <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
                <h2 className='font-general text-sm uppercase md:text-[10px] bg-linear-to-r from-purple-400 via-cyan-300 to-fuchsia-300 bg-clip-text text-transparent font-black tracking-widest animate-pulse'>
                    Welcome to KKP&apos;s World
                </h2>
                <div className='mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]'>
                    Enj<b className='text-blue-600'>o</b>y the jou<b className='text-emerald-500 font-bold'>r</b>ney of{' '}
                    <i className='text-red-600 font-bold'>K</i>KP&apos;s adventure<b className='text-cyan-600 italic'>S</b>
                </div>

                <div className='about-subtext'>
                    <p>
                        The Game of Thrones begins in everyone&apos;s life at an early age,
                    </p>
                    <p>so did mine - now an Epic.</p>
                </div>
            </div>

            <div className='h-dvh w-screen' id='clip'>
                <div className='mask-clip-path about-image'>
                    <img
                        src='img/15.jpg'
                        alt='Background'
                        className='absolute left-0 top-0 size-full object-cover'
                    />
                    kkp
                </div>
            </div>
        </div>
    )
}

export default Bio