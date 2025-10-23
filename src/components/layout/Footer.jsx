import React from 'react';
import logo from "../../assets/logo.svg";
import logoIcon from "../../assets/logo-icon.svg";
import background from "../../assets/background-footer.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import snapchat from "../../assets/snapchat.svg";
import x from "../../assets/x.svg";
import Reveal from "../ui/Reveal";

const socials = [
    { src: facebook, alt: 'Facebook', href: 'https://facebook.com/yourpage' },
    { src: instagram, alt: 'Instagram', href: 'https://instagram.com/yourpage' },
    { src: x, alt: 'X', href: 'https://x.com/yourpage' },
    { src: twitter, alt: 'Twitter', href: 'https://twitter.com/yourpage' },
    { src: linkedin, alt: 'LinkedIn', href: 'https://linkedin.com/company/yourpage' },
    { src: snapchat, alt: 'Snapchat', href: 'https://snapchat.com/add/yourpage' },
];

export default function Footer() {
    return (
        <footer className="relative w-full min-h-[520px] overflow-hidden -mt-[160px] md:-mt-[200px] pt-[160px] md:pt-[200px]" aria-labelledby="footer-brand">
            <div
                aria-hidden
                className="absolute inset-x-0 top-0 w-screen left-1/2 -translate-x-1/2 min-h-[520px] bg-top bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${background})` }}
            />
            {/* Full Logo + Social Media Links */}
            <div className="absolute bottom-24 md:bottom-36 inset-x-0">
                <div className="relative z-10 w-full max-w-[1140px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4 md:px-12">
                    <Reveal variant="fade" delay={50} className="inline-flex">
                        <img id="footer-brand" src={logo} alt="RemoteRecruit logo" className="w-40 md:w-48 h-auto" />
                    </Reveal>
                    <ul className="flex items-center" aria-label="Social media links">
                        {socials.map((s, idx) => (
                            <li key={s.alt}>
                                <Reveal variant="scale-in" delay={idx * 80} className="inline-flex">
                                    <a
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visit us on ${s.alt}`}
                                        className="p-2 rounded-full hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition"
                                    >
                                        <img src={s.src} alt={s.alt} className="w-7 h-auto opacity-75 hover:opacity-100 transition" />
                                    </a>
                                </Reveal>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Full-width divider */}
            <div className="absolute bottom-16 inset-x-0" aria-hidden>
                <div className="mx-auto w-full">
                    <div className="h-px w-full bg-[#8BA3CC]/50" />
                </div>
            </div>
            {/* Bottom small icon */}
            <div className="absolute bottom-4 inset-x-0 flex justify-center">
                <Reveal variant="fade" delay={socials.length * 80 + 100} className="inline-flex">
                    <img src={logoIcon} alt="RemoteRecruit icon" className="w-10 h-auto opacity-90" />
                </Reveal>
            </div>
        </footer>
    );
}
