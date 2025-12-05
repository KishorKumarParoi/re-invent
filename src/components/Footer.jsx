import React from 'react'
import VisitorCount from './VisitorCount'
import {
    FaDiscord,
    FaLinkedin,
    FaMedium,
    FaTwitter,
    FaYoutube,
    FaGithub,
    FaFacebook,
    FaInstagram,
    FaWhatsapp
} from 'react-icons/fa';

const socialLinks = [
    {
        href: "https://www.linkedin.com/in/kishor-paroi-b06344166/",
        icon: <FaLinkedin />,
        label: "LinkedIn"
    },
    {
        href: "https://github.com/KishorKumarParoi",
        icon: <FaGithub />,
        label: "GitHub"
    },
    {
        href: "https://twitter.com/paroi_kishor",
        icon: <FaTwitter />,
        label: "Twitter"
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
        href: "https://api.whatsapp.com/send/?phone=8801724714156&text=Hi+Kishor%2C+I+saw+your+portfolio.&type=phone_number&app_absent=0",
        icon: <FaWhatsapp />,
        label: "WhatsApp"
    }
];

const Footer = () => {
    return (
        // <footer className='w-full bg-linear-to-b from-purple-600 to-purple-800 py-12'>
        <div className='max-w-6xl mx-auto px-5 md:px-10'>
            <VisitorCount />

            <section className="py-4 mt-2 rounded-xl text-white">
                <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
                    <p className="text-center text-sm md:text-left font-semibold">
                        © 2025 All rights reserved
                    </p>

                    {/* Social Links Grid */}
                    <div className="flex justify-center gap-5 flex-wrap md:justify-center">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative text-white transition-all duration-300 ease-in-out hover:text-cyan-300"
                                title={link.label}
                            >
                                {/* Icon wrapper with hover effect */}
                                <div className="relative p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                                    <span className="text-lg md:text-xl group-hover:scale-125 transition-transform duration-300 inline-block">
                                        {link.icon}
                                    </span>

                                    {/* Tooltip */}
                                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-cyan-400 text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-semibold">
                                        {link.label}
                                    </span>

                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 rounded-lg bg-cyan-400/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                                </div>
                            </a>
                        ))}
                    </div>

                    <a
                        href="#privacy-policy"
                        className="text-center text-sm hover:text-cyan-300 transition-colors duration-300 md:text-right font-semibold"
                    >
                        Privacy Policy
                    </a>
                </div>

                {/* Decorative divider */}
                <div className="mt-4 pt-4 border-t border-white/10">
                    <div className='font-circular-web mt-2 text-center text-sm text-blue-300'>
                        <p> Made with 💚 by Kishor Kumar Paroi (kkp_007) </p>
                    </div>
                </div>
            </section>
        </div>
        // </footer>
    )
}

export default Footer