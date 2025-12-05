import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedTitle from './AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useGSAP(() => {
        // Mantra entrance animation
        gsap.from('.mantra-container', {
            opacity: 0,
            y: 60,
            duration: 1.5,
            ease: 'power2.out'
        })

        gsap.from('.mantra-om', {
            opacity: 0,
            scale: 0.5,
            duration: 1,
            ease: 'back.out(1.5)',
            delay: 0.2
        })

        gsap.from('.mantra-sanskrit', {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.4
        })

        gsap.from('.mantra-english', {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power2.out',
            delay: 1
        })

        gsap.from('.mantra-meaning-item', {
            scrollTrigger: {
                trigger: '.mantra-meanings',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -40,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power2.out'
        })

        // Floating animation for Om symbol
        gsap.to('.mantra-om', {
            y: -15,
            duration: 4,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
        })

        // "Hello Orks" dramatic entrance with scroll trigger
        gsap.from('.orks-greeting', {
            scrollTrigger: {
                trigger: '.orks-greeting',
                start: 'top 80%',
                end: 'top 30%',
                toggleActions: 'play none none reverse',
                scrub: 1,
            },
            scale: 0.5,
            rotationX: -90,
            rotationY: 45,
            transformOrigin: 'center center',
            duration: .5,
            ease: 'power3.inOut'
        })

        // About intro paragraphs with word-by-word stagger
        gsap.from('.about-intro p span', {
            scrollTrigger: {
                trigger: '.about-intro',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 20,
            stagger: 0.08,
            duration: 0.6,
            delay: 1.5,
            ease: 'power2.out'
        })

        // Journey cards with scroll trigger
        gsap.from('.journey-card', {
            scrollTrigger: {
                trigger: '.journey-section',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
            y: 80,
            stagger: 0.2,
            duration: 1,
            ease: 'power2.out'
        })

        gsap.from('.skill-badge', {
            scrollTrigger: {
                trigger: '.skills-section',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
            rotation: 360,
            y: 100,
            stagger: {
                each: 0.08,
                from: 'random', // Random order for flashy effect
            },
            duration: 0.8,
            ease: 'back.out(2)',
        })

        // Add glowing pulse effect on each badge
        gsap.to('.skill-badge', {
            scrollTrigger: {
                trigger: '.skills-section',
                start: 'top 80%',
            },
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)',
            stagger: {
                each: 0.08,
                repeat: 1,
                yoyo: true,
            },
            duration: 0.4,
            ease: 'power2.inOut',
        })

        ScrollTrigger.refresh()

        // Connect section animation
        gsap.from('.connect-section', {
            scrollTrigger: {
                trigger: '.connect-section',
                start: 'top 85%',
                toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power2.out'
        })

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

        // Floating coffee animation
        gsap.to('.floating-coffee', {
            y: 5,
            rotation: 10,
            duration: 2,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
        })

        // Steam effect (optional)
        gsap.to('.coffee-steam', {
            opacity: 0.3,
            y: -20,
            duration: 1.5,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: -1,
            stagger: 0.3,
        })

        ScrollTrigger.refresh()
    }, [])

    // Helper function to split text into words with spans
    const splitIntoWords = (text) => {
        return text.split(' ').map((word, idx) => (
            <span key={idx} className='inline-block mr-1'>
                {word}
            </span>
        ))
    }

    const skills = [
        'TypeScript', 'Python', 'C/C++', 'Rust', 'Java', 'React', 'Next.js', 'Node.js', 'Express.js',
        'Linux', 'Git', 'Spring Boot', 'ElasticSearch', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker',
        'Kubernetes', 'CI/CD', 'AWS', 'GCP', 'Azure', 'Grafana', 'Prometheus', 'Jenkins', 'Kafka',
        'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Pinecone', 'Web3', 'Blockchain',
        'Solidity', 'Three.js', 'Blender', 'Figma', 'Data Science', 'Machine Learning', 'AI/ML', 'OS',
        'System Design', 'Microservices', 'Agile Methodologies', 'RESTful APIs', 'GraphQL', 'Drizzle',
        'Django', 'Flask', 'FastAPI', 'Data Structures', 'Algorithms', 'Design Patterns', 'Networking',
        'WebRTC', 'Socket.io', 'gRPC', 'OpenAI API', 'LangChain', 'AutoGPT', 'AI Agents', 'WebVR', 'trpc', 'Nx'
    ]

    console.log('Total skills:', skills.length) // Should log 60

    const meanings = [
        {
            number: '1',
            text: 'Om, (O Lord) From the Phenomenal World of Unreality, Lead me towards the Reality of Eternal Self'
        },
        {
            number: '2',
            text: 'From the Darkness of Ignorance, Lead me towards the Light of Spiritual Knowledge'
        },
        {
            number: '3',
            text: 'From the World of Mortality and Material Attachment, Lead me towards Immortality of Self-Realization'
        },
        {
            number: '4',
            text: 'Om, Peace, Peace, Peace'
        }
    ]

    return (
        <div id='about' className='min-h-screen w-screen bg-slate-900'>
            <div className='relative mx-auto flex max-w-6xl flex-col items-center gap-16 px-5 py-20'>

                {/* Mantra Section */}
                <div id='mantra' className='mantra-container w-full max-w-4xl rounded-3xl border border-violet-500/30 bg-linear-to-br from-violet-950/40 to-purple-950/20 p-12 text-center shadow-2xl backdrop-blur-sm'>

                    {/* Om Symbol */}
                    <div className='mantra-om mb-8 inline-block'>
                        <span className='text-8xl font-bold text-violet-300 drop-shadow-lg'>ॐ</span>
                    </div>

                    {/* Sanskrit Text */}
                    <div className='space-y-6 mb-8'>
                        <div className='mantra-sanskrit text-3xl md:text-4xl leading-relaxed text-blue-100 font-semibold'>
                            असतो मा सद्गमय ।<br />
                            तमसो मा ज्योतिर्गमय ।<br />
                            मृत्योर्मा अमृतं गमय ।<br />
                            ॐ शान्तिः शान्तिः शान्तिः ॥
                        </div>
                    </div>

                    {/* English Transliteration */}
                    <div className='space-y-3 mb-10 border-t border-violet-500/20 pt-8'>
                        <div className='mantra-english text-lg text-blue-200/90 italic'>
                            Om Asato Maa Sad-Gamaya |
                        </div>
                        <div className='mantra-english text-lg text-blue-200/90 italic'>
                            Tamaso Maa Jyotir-Gamaya |
                        </div>
                        <div className='mantra-english text-lg text-blue-200/90 italic'>
                            Mrtyor-Maa Amrtam Gamaya |
                        </div>
                        <div className='mantra-english text-lg text-blue-200/90 italic'>
                            Om Shaantih Shaantih Shaantih ||
                        </div>
                    </div>

                    {/* Meanings */}
                    <div className='mantra-meanings space-y-4 border-t border-violet-500/20 pt-8'>
                        {meanings.map((meaning, idx) => (
                            <div key={idx} className='mantra-meaning-item flex gap-4 text-left'>
                                <span className='shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-violet-500 to-purple-600 font-bold text-white text-sm'>
                                    {meaning.number}
                                </span>
                                <p className='text-blue-100/80 leading-relaxed pt-1'>
                                    {meaning.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* About Intro */}
                <div className='about-intro max-w-3xl space-y-6 text-center text-lg leading-relaxed text-blue-200/90'>
                    <div className='orks-greeting'>
                        <span className='text-5xl font-bold text-red-500 italic'>
                            Hello, Orks! (bug fighter 😂)  <br />
                            I am Kishor Kumar Paroi aka KKP
                        </span>
                    </div>

                    <p>
                        {splitIntoWords('an aspiring Software/Data Engineer with')} <span className='inline-block mr-1'><span className='font-bold text-cyan-400'>4+ years</span></span> {splitIntoWords('of industry experience (both remote and hybrid) from Bangladesh. A CS Enthusiast aiming for becoming the top 1% among AI/ML Engineers.')}
                    </p>

                    <p>
                        {splitIntoWords('Currently I am doing remote job in a')} <span className='inline-block mr-1'><b className='font-bold text-blue-600'>Y-Combinator</b></span> {splitIntoWords('Startup and founder of')} <span className='inline-block mr-1'><b className='text-cyan-500'>Koom-AI</b></span> {splitIntoWords(', which is an integrated solution for Freelancers, Remote job holders. Another one is')} <span className='inline-block mr-1'><b className=' text-green-600'> Kepi.AI</b></span> {splitIntoWords('- B2B Microservice Application, for accelerating')} <span className='inline-block mr-1'><b className='text-orange-600'>AI/ML adoption</b></span> {splitIntoWords('in Enterprises & Testing ground of AI Automation and AI Agent.')}
                    </p>
                </div>

                {/* Journey Cards */}
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

                {/* Skills Section - ENHANCED */}
                <div className='skills-section w-full max-w-5xl mt-20'>
                    <h3 className='mb-6 text-center font-general text-2xl font-bold uppercase tracking-wider text-blue-300'>
                        Technical Arsenal
                    </h3>
                    <div className='flex flex-wrap justify-center gap-3'>
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className='skill-badge relative rounded-full border border-blue-400/30 bg-blue-900/30 px-4 py-2 text-sm font-medium text-blue-200 transition-all duration-300 hover:scale-110 hover:border-blue-400/60 hover:bg-blue-800/40 hover:text-blue-100 hover:shadow-lg hover:shadow-blue-500/50 cursor-pointer overflow-hidden'
                                style={{
                                    transformOrigin: 'center center',
                                }}
                            >
                                {skill}
                                {/* Shimmer effect overlay */}
                                <span className='absolute inset-0 rounded-full bg-linear-to-r from-transparent via-white/20 to-transparent shimmer-animation pointer-events-none'></span>
                            </span>
                        ))}
                    </div>
                </div>

                {/* Connect Section */}
                <div id='contact' className='connect-section w-full max-w-3xl rounded-2xl border border-emerald-500/20 bg-linear-to-r from-emerald-900/20 to-teal-900/20 p-8 mt-40 text-center'>
                    <h3 className='mb-4 text-2xl font-bold text-emerald-300 relative'>
                        Let&apos;s Connect over a cup of{' '}
                        <span className='inline-block relative' style={{ display: 'inline-block' }}>
                            {/* Steam lines */}
                            <span className='coffee-steam absolute -top-4 left-1/2 -translate-x-1/2 text-gray-400 text-2xl opacity-50'>~</span>
                            <span className='coffee-steam absolute -top-6 left-1/2 -translate-x-1/2 text-gray-400 text-xl opacity-40'>~</span>
                            <span className='coffee-steam absolute -top-8 left-1/2 -translate-x-1/2 text-gray-400 text-lg opacity-30'>~</span>

                            {/* Coffee emoji */}
                            <span className='floating-coffee inline-block text-5xl' style={{ transformOrigin: 'center center' }}>
                                ☕
                            </span>
                        </span>
                    </h3>
                    <p className='mb-6 text-blue-200/80'>
                        Allow me to invite you over discussion on tech to history, geopolitics to Silicon Valley, business to innovation. Feel free to reach out through any of the platforms below!
                    </p>
                    <div className='flex flex-wrap justify-center gap-4'>
                        <a
                            href='mailto:Kishor.ruet.cse@gmail.com'
                            className='rounded-full bg-blue-700 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-500/50'
                        >
                            📧 Email
                        </a>
                        <a
                            href='https://api.whatsapp.com/send/?phone=8801724714156&text=Hi+Kishor%2C+I+saw+your+portfolio.&type=phone_number&app_absent=0'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='rounded-full bg-green-800 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-green-900 hover:shadow-lg hover:shadow-green-500/50'
                        >
                            💬 WhatsApp
                        </a>
                        <a
                            href='https://www.linkedin.com/in/kishor-paroi-b06344166/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='rounded-full bg-purple-800 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-purple-900 hover:shadow-lg hover:shadow-blue-600/50'
                        >
                            💼 LinkedIn
                        </a>
                        <a
                            href='https://github.com/KishorKumarParoi'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='rounded-full bg-red-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-lg hover:shadow-blue-600/50'
                        >
                            🐙 GitHub
                        </a>
                        <a
                            href='https://twitter.com/paroi_kishor'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='rounded-full bg-cyan-700 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-900 hover:shadow-lg hover:shadow-blue-600/50'
                        >
                            𝕏 Twitter
                        </a>
                    </div>
                </div>

                {/* Quote Section */}
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