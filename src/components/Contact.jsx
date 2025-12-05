import React, { useRef, useEffect } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
        <img src={src} />
    </div>
);

const Contact = () => {
    const contactRef = useRef(null);
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const buttonRef = useRef(null);
    const emailRef = useRef(null);

    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useEffect(() => {
        gsap.to(containerRef.current, {
            scrollTrigger: {
                trigger: contactRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1,
                markers: false,
            },
            rotationX: 1.5,
            rotationY: 2.5,
            rotationZ: 0.5,
            transformPerspective: 1000,
            ease: "power2.inOut",
        });

        gsap.to(titleRef.current, {
            scrollTrigger: {
                trigger: contactRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1.5,
            },
            y: -15,
            opacity: 0.9,
            ease: "power2.inOut",
        });

        gsap.to(buttonRef.current, {
            scrollTrigger: {
                trigger: contactRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1,
            },
            scale: 1.05,
            boxShadow: "0 0 30px rgba(34, 211, 238, 0.6)",
            ease: "power2.inOut",
        });

        gsap.to(emailRef.current, {
            scrollTrigger: {
                trigger: contactRef.current,
                start: "top 80%",
                end: "center center",
                scrub: 1,
            },
            opacity: 1,
            y: 0,
            ease: "power2.inOut",
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 2;
        const rotateY = ((x - centerX) / centerX) * -2;

        gsap.to(containerRef.current, {
            duration: 0.3,
            rotateX,
            rotateY,
            transformPerspective: 1000,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(containerRef.current, {
            duration: 0.5,
            rotateX: 0,
            rotateY: 0,
            ease: "power2.out",
        });
    };

    return (
        <div
            ref={contactRef}
            id="contact"
            className="my-20 min-h-96 w-screen px-10 perspective"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={containerRef}
                className="relative rounded-lg bg-linear-to-br from-black via-purple-900/20 to-black py-24 text-blue-50 sm:overflow-hidden border border-cyan-500/20 backdrop-blur-md shadow-2xl shadow-cyan-500/20"
                style={{ transformStyle: "preserve-3d" }}
            >
                <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 via-emerald-500/10 to-blue-500/10 rounded-lg animate-pulse opacity-50"></div>

                <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400/20 rounded-full filter blur-3xl animate-blob"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-400/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 right-20 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>

                <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
                    <ImageClipBox
                        src="/img/contact-1.webp"
                        clipClass="contact-clip-path-1"
                    />
                    <ImageClipBox
                        src="/img/contact-2.webp"
                        clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
                    />
                </div>

                <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
                    <ImageClipBox
                        src="/img/swordman-partial.webp"
                        clipClass="absolute md:scale-125"
                    />
                    <ImageClipBox
                        src="/img/swordman.webp"
                        clipClass="sword-man-clip-path md:scale-125"
                    />
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    <p className="mb-10 font-general text-[10px] uppercase tracking-widest text-cyan-300 animate-pulse">
                        ✨ Join me over a coffee in the metaverse ✨
                    </p>

                    <div ref={titleRef}>
                        <AnimatedTitle
                            title="let&#39;s b<b>u</b>ild t<b>o</b>gether and make your d<b>r</b>eam realit<b>y</b>"
                            className="special-font !md:text-[6.2rem] w-full font-zentry text-5xl! font-black! leading-[.9]!"
                        />
                    </div>

                    {/* <div className="flex justify-center items-center gap-4 my-8">
                        <div className="h-1 w-12 bg-linear-to-r from-transparent to-cyan-400"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                        <div className="h-1 w-12 bg-linear-to-l from-transparent to-cyan-400"></div>
                    </div> */}

                    <button
                        ref={buttonRef}
                        onClick={handleContactClick}
                        className="mt-6 cursor-pointer px-8 py-3 bg-linear-to-r from-cyan-400 to-emerald-400 text-black font-black uppercase rounded-lg hover:shadow-lg hover:shadow-cyan-400/80 transition-all duration-300 transform hover:scale-110 relative group"
                    >
                        <span className="relative z-10">Contact Us</span>
                        <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-emerald-500 rounded-lg opacity-0 group-hover:opacity-30 transition-all duration-300 blur-lg"></div>
                    </button>

                    <div ref={emailRef} className="mt-8 flex flex-col items-center gap-2">
                        <p className="text-sm text-cyan-200/60 tracking-wide">
                            or reach me directly at
                        </p>
                        <a
                            href="mailto:kishor.ruet.cse@gmail.com"
                            className="group relative inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-linear-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-400/40 hover:border-cyan-300/80 transition-all duration-300"
                        >
                            <span className="text-lg">✉️</span>
                            <span className="font-semibold text-emerald-300 group-hover:text-cyan-300 transition-colors duration-300">
                                kishor.ruet.cse@gmail.com
                            </span>
                            <div className="absolute inset-0 bg-linear-to-r from-cyan-400/0 to-emerald-400/0 group-hover:from-cyan-400/10 group-hover:to-emerald-400/10 rounded-lg transition-all duration-300"></div>
                        </a>

                        <div className="mt-4 flex gap-6 justify-center">
                            <a
                                href="https://www.linkedin.com/in/kishor-paroi-b06344166/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 text-sm font-semibold"
                            >
                                LinkedIn
                            </a>
                            <a
                                href='https://api.whatsapp.com/send/?phone=8801724714156&text=Hi+Kishor%2C+I+saw+your+portfolio.&type=phone_number&app_absent=0'
                                target='_blank'
                                rel='noopener noreferrer'
                                className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 text-sm font-semibold"
                            >
                                WhatsApp
                            </a>
                            <a
                                href="https://twitter.com/paroi_kishor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-300 hover:text-blue-100 transition-colors duration-300 text-sm font-semibold"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                .animation-delay-4000 {
                    animation-delay: 4s;
                }

                .perspective {
                    perspective: 1000px;
                }
            `}</style>
        </div>
    );
};

export default Contact;