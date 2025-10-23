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
        <section className="relative w-full min-h-[520px] overflow-hidden -mt-[160px] md:-mt-[200px] pt-[160px] md:pt-[200px]">
            <div
                aria-hidden
                className="absolute inset-x-0 top-0 w-screen left-1/2 -translate-x-1/2 min-h-[520px] bg-top bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${background})` }}
            />
            {/* Content */}
            <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full flex flex-col justify-end">
                <div className="flex flex-1 items-between gap-10 px-4 md:px-12 pb-10">
                    <Reveal variant="fade" delay={50} className="inline-flex">
                        <img src={logo} alt="RemoteRecruit logo" className="w-40 md:w-48 h-auto" />
                    </Reveal>
                    <div className="flex items-center gap-3">
                        {socials.map((s, idx) => (
                            <Reveal key={s.alt} variant="scale-in" delay={idx * 80} className="inline-flex">
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
                        ))}
                    </div>
                </div>
            </div>
            {/* Bottom small icon */}
            <div className="absolute bottom-4 inset-x-0 flex justify-center">
                <Reveal variant="fade" delay={socials.length * 80 + 100} className="inline-flex">
                    <img src={logoIcon} alt="RemoteRecruit icon" className="w-10 h-auto opacity-90" />
                </Reveal>
            </div>
        </section>
    );
}
