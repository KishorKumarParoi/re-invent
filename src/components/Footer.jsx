import React from 'react'
import VisitorCount from './VisitorCount'
import CyberFooterAnimation from './CyberFooterAnimation'
import {
    FaDiscord,
    FaLinkedin,
    FaMedium,
    FaTwitter,
    FaYoutube,
    FaGithub,
    FaFacebook,
    FaInstagram,
    FaWhatsapp,
    FaApple,
    FaGlobe
} from 'react-icons/fa';
import { Sparkles, Terminal, Shield, ArrowUp, Coffee } from 'lucide-react'

const socialLinks = [
    {
        href: "https://kishor.tech",
        icon: <FaGlobe />,
        label: "kishor.tech (Main Portfolio)"
    },
    {
        href: "https://macos.kishor.tech",
        icon: <FaApple />,
        label: "macos.kishor.tech (macOS Portfolio)"
    },
    {
        href: "https://hacker.kishor.tech",
        icon: <Terminal className="size-4" />,
        label: "hacker.kishor.tech (3D Hacker Cockpit)"
    },
    {
        href: "https://linkedin.com/in/kishor-kumar-paroi-b06344166",
        icon: <FaLinkedin />,
        label: "LinkedIn"
    },
    {
        href: "https://github.com/KishorKumarParoi",
        icon: <FaGithub />,
        label: "GitHub"
    },
    {
        href: "https://x.com/Mr_paroi",
        icon: <FaTwitter />,
        label: "Twitter / X"
    },
    {
        href: "https://www.facebook.com/codewithparoi/",
        icon: <FaFacebook />,
        label: "Facebook"
    },
    {
        href: "https://www.instagram.com/codewithparoi/",
        icon: <FaInstagram />,
        label: "Instagram"
    },
    {
        href: "https://discord.com/users/en_deavour#5769",
        icon: <FaDiscord />,
        label: "Discord"
    },
    {
        href: "https://www.youtube.com/@KishorKumarParoi",
        icon: <FaYoutube />,
        label: "YouTube"
    },
    {
        href: "https://medium.com/@Kishor_Paroi",
        icon: <FaMedium />,
        label: "Medium"
    },
    {
        href: "https://wa.me/8801724714156",
        icon: <FaWhatsapp />,
        label: "WhatsApp"
    }
];

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className='relative w-full bg-linear-to-b from-black via-slate-950 to-black pt-10 pb-16 text-white overflow-hidden border-t border-white/10'>
            <div className='max-w-6xl mx-auto px-5 md:px-10'>
                {/* Cyber Cityscape: Digital Neon Waterfall, Flying Tesla Cyber-Car & Robotics Hub */}
                <CyberFooterAnimation />

                {/* Real-time Visitor & Analytics Telemetry */}
                <div className='my-6'>
                    <VisitorCount />
                </div>

                <div className="py-6 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-md px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Left: Architect Attribution */}
                        <div className="text-center md:text-left space-y-1">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-400 font-mono text-xs font-bold">
                                <Sparkles className="size-3.5 text-emerald-400" />
                                <span>KISHOR KUMAR PAROI (kkp_007)</span>
                            </div>
                            <p className="text-xs text-gray-400 font-sans">
                                Principal AI Systems Architect • Founder @ <a href="https://koom.kishor.tech/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline font-semibold">KoomAI</a> • Creator @ <a href="https://kishor.tech" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:underline font-semibold">kishor.tech (macOS OS)</a> • B.Sc. CSE @ RUET (Rank 483rd)
                            </p>
                        </div>

                        {/* Middle: Social Network Grid */}
                        <div className="flex justify-center gap-2 flex-wrap">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-300 border border-white/5 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
                                    title={link.label}
                                >
                                    <span className="text-base md:text-lg block">
                                        {link.icon}
                                    </span>
                                </a>
                            ))}
                        </div>

                        {/* Right: macOS Portfolio Direct Link & Back to Top */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://kishor.tech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-linear-to-r from-gray-900 via-gray-950 to-black hover:from-black hover:to-gray-900 border border-white/20 hover:border-cyan-400 text-xs font-mono text-gray-200 hover:text-white transition-all hover:scale-105 shadow-md shadow-cyan-500/10 cursor-pointer"
                                title="Open interactive macOS Desktop Portfolio in browser"
                            >
                                <FaApple className="text-sm text-white" />
                                <span>kishor.tech (macOS) ↗</span>
                            </a>

                            <button
                                onClick={scrollToTop}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-gray-300 hover:text-white transition cursor-pointer"
                                title="Scroll to top of platform"
                            >
                                <ArrowUp className="size-3.5 text-cyan-400" />
                                <span>Back to Top</span>
                            </button>
                        </div>
                    </div>

                    {/* Bottom Status & Verified Metadata Bar */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400 font-mono">
                        <div>
                            <span>© 2026 Kishor Kumar Paroi. All rights reserved. Zero-Trust IaC.</span>
                        </div>
                        <div className='flex items-center gap-2 text-[11px] bg-white/5 border border-white/10 px-3 py-1 rounded-full flex-wrap justify-center'>
                            <a href="https://kishor.tech" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline flex items-center gap-1 font-bold">
                                <FaApple className="text-xs" />
                                <span>kishor.tech Live</span>
                            </a>
                            <span>•</span>
                            <span className='inline-flex items-center gap-1.5 text-emerald-400 font-bold'>
                                <span className='size-2 rounded-full bg-emerald-400 animate-ping' />
                                99.9% Uptime SLA
                            </span>
                            <span>•</span>
                            <span>Living Resume v5.4-prod</span>
                            <span>•</span>
                            <span className="text-cyan-300">Dhaka / Global Remote</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer