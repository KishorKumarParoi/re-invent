import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { socials } from '../Constants'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useGSAP(() => {
        // Floating quote animation
        gsap.fromTo('.about-quote',
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.about-quote',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                }
            }
        )

        gsap.to('.about-quote', {
            y: -10,
            duration: 3,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
        })

        // Quote marks floating
        gsap.to('.quote-mark', {
            y: -8,
            x: 4,
            rotation: 3,
            duration: 4,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
            stagger: 0.3,
        })

        // Smooth scroll refresh
        ScrollTrigger.refresh()
    }, [])

    const skills = [
        'TypeScript', 'Python', 'C/C++', 'Rust', 'Java',
        'React', 'Next.js', 'Node.js', 'Express.js',
        'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS',
        'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'
    ]

    return (
        <div id='about' className='min-h-screen w-screen bg-slate-800 py-2'>
            <div className='relative mx-auto mb-8 mt-36 flex max-w-6xl flex-col items-center gap-12 px-5'>

                {/* Header */}
                <div className='text-center'>
                    <h2 className='about-subtitle font-general text-sm uppercase tracking-[0.3em] text-blue-400/70'>
                        Welcome to KKP&apos;s Portfolio
                    </h2>

                    <h1 className='about-heading special-font mt-6 text-5xl uppercase leading-[0.85] text-blue-100 md:text-[6rem]'>
                        Enj<b className='text-blue-600'>o</b>y the jou<b className='text-emerald-500 font-bold'>r</b>ney of{' '}
                        <i className='text-yellow-400 font-bold'>K</i>KP&apos;s adventure<b className='text-red-600 italic'>S</b>
                    </h1>
                </div>

                <div className='about-intro max-w-3xl space-y-4 text-center text-lg leading-relaxed text-blue-200/90'>
                    <p className='text-xl font-lg text-blue-100'>
                        The Game of Thrones begins in everyone&apos;s life at an early age, so did mine —
                        now an Epic.
                    </p>
                    <p>
                        I am an aspiring Software/Data Engineer with <span className='font-bold text-cyan-400'>4+ years</span> of
                        industry experience (both remote and hybrid) from Bangladesh. A CS Enthusiast aiming for being the top 1% among AI/ML Engineers.
                    </p>
                    <p>Currently I am doing remote job in <b className='font-bold text-blue-600'>Y-Combinator</b> Startup and founder of <b className='text-cyan-500'>Koom-AI</b>,
                        which is an integrated solution for Freelancers, Remote job holders. Another one is
                        <b className=' text-red-600'> Kepi.AI</b> - B2B Microservice Application, for accelerating <b className='text-purple-400'>AI/ML adoption</b> in Enterprises
                        & Testing ground of AI Automation and AI Agent.
                    </p>
                </div>

                <div className='journey-section grid w-full max-w-5xl gap-6 md:grid-cols-3'>
                    <div className='journey-card group relative overflow-hidden rounded-2xl border border-violet-500/20 bg-linear-to-br from-violet-900/30 to-purple-900/20 p-6 transition-all duration-300 hover:scale-105 hover:border-violet-400/40 hover:shadow-2xl hover:shadow-violet-500/20'>
                        <div className='absolute inset-0 bg-linear-to-br from-violet-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                        <h3 className='relative mb-3 text-xl font-bold text-violet-300'>🚀 Entrepreneurial Spirit</h3>
                        <p className='relative text-sm leading-relaxed text-blue-200/80'>
                            Two failed startup projects—one in Fashion, another in Fintech. Each failure taught me resilience and innovation.
                        </p>
                    </div>

                    <div className='journey-card group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-linear-to-br from-cyan-900/30 to-blue-900/20 p-6 transition-all duration-300 hover:scale-105 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20'>
                        <div className='absolute inset-0 bg-linear-to-br from-cyan-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                        <h3 className='relative mb-3 text-xl font-bold text-cyan-300'>⚙️ Full-Stack Mastery</h3>
                        <p className='relative text-sm leading-relaxed text-blue-200/80'>
                            System Design to Scaling, Frontend to Backend, Design to Deployment—efficiently addressing system bottlenecks.
                        </p>
                    </div>

                    <div className='journey-card group relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-linear-to-br from-yellow-900/30 to-orange-900/20 p-6 transition-all duration-300 hover:scale-105 hover:border-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-500/20'>
                        <div className='absolute inset-0 bg-linear-to-br from-yellow-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                        <h3 className='relative mb-3 text-xl font-bold text-yellow-300'>🏊 Swimming Against the Tide</h3>
                        <p className='relative text-sm leading-relaxed text-blue-200/80'>
                            Self-taught in System Design, 3D Animation, Blockchain, AI/ML, Geopolitics, Financial Prediction, History & Data Science.
                        </p>
                    </div>
                </div>

                <div className='skills-section w-full max-w-5xl mt-20'>
                    <h3 className='mb-6 text-center font-general text-2xl font-bold uppercase tracking-wider text-blue-300'>
                        Technical Arsenal
                    </h3>
                    <div className='flex flex-wrap justify-center gap-3'>
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className='skill-badge rounded-full border border-blue-400/30 bg-blue-900/30 px-4 py-2 text-sm font-medium text-blue-200 transition-all duration-300 hover:scale-110 hover:border-blue-400/60 hover:bg-blue-800/40 hover:text-blue-100 hover:shadow-lg hover:shadow-blue-500/30'
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className='connect-section w-full max-w-3xl rounded-2xl border border-emerald-500/20 bg-linear-to-r from-emerald-900/20 to-teal-900/20 p-8 text-center'>
                    <h3 className='mb-4 text-2xl font-bold text-emerald-300'>Let&apos;s Connect ☕</h3>
                    <p className='mb-6 text-blue-200/80'>
                        Allow me to invite you over a cup of coffe in discussion from tech to history, geopolitics to Silicon Valley, business to innovation over a cup of coffee.
                    </p>
                    <div className='flex flex-wrap justify-center gap-4'>
                        <a
                            href='mailto:Kishor.ruet.cse@gmail.com'
                            className='rounded-full bg-blue-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/50'
                        >
                            📧 Email Me
                        </a>
                        <a
                            href='https://api.whatsapp.com/send/?phone=8801724714156&text=Hi+Kishor%2C+I+saw+your+portfolio.&type=phone_number&app_absent=0'
                            className='rounded-full bg-green-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/50'
                        >
                            💬 WhatsApp
                        </a>
                    </div>
                </div>

                <div className='relative max-w-3xl'>
                    <span className='quote-mark pointer-events-none absolute -left-8 -top-8 select-none text-[5rem] leading-none text-violet-400/20'>
                        "
                    </span>
                    <span className='quote-mark pointer-events-none absolute -right-8 -bottom-10 select-none text-[5rem] leading-none text-violet-400/20'>
                        "
                    </span>
                    <div className='about-quote relative rounded-3xl border border-violet-500/30 bg-linear-to-br from-violet-950/40 to-purple-950/20 p-8 shadow-2xl'>
                        <p className='text-center italic leading-relaxed text-blue-100'>
                            <span className='font-bold text-violet-300'>&quot;Orks is never defeated in battle&quot;</span> comes from
                            Warhammer 40,000 lore. Orks consider any fight a success—winning is great, dying fighting is also a victory,
                            and retreating means another round. They can&apos;t technically &quot;lose&quot; because their goal is
                            the thrill of the fight itself.
                        </p>
                        <p className='mt-4 text-center text-sm font-medium text-cyan-400'>
                            — A Motto I Live By
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About