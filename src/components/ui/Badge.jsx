import React from 'react';

export default function Badge({ children, className = '' }) {
    return (
        <span className={`inline-flex w-max items-center bg-[#C2EEFF] rounded-full px-3 py-1.5 text-xs sm:text-sm leading-none font-semibold tracking-[0.4px] text-[#11142D] opacity-80 ${className}`}>
            {children}
        </span>
    );
}