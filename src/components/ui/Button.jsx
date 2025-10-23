import React from 'react';

export default function Button({
    children,
    variant = 'outline',
    className = '',
    type = 'button',
    ...rest
}) {
    const base =
        'inline-flex items-center justify-center font-semibold transition rounded-[24px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#52B4DA]';

    const variants = {
        outline:
            'border-2 border-[#1E3E85] text-[#1E3E85] hover:bg-[#1E3E85] hover:text-white px-8 h-[72px] text-[20px] leading-[26px]',
        solid:
            'bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] text-white shadow-lg px-8 h-[72px] text-[20px] leading-[26px] hover:brightness-105',
    };

    return (
        <button
            type={type}
            className={`${base} ${variants[variant]} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
}
