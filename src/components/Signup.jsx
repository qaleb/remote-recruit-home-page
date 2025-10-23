import React from 'react'

export default function Signup({ labelName = "Sign Up", onClick }) {
    return (
        <button
            onClick={onClick}
            type="button"
            aria-label={labelName}
            className="bg-[#4da8cc] bg-opacity-90 rounded-[16px] px-4 py-1.5 h-9 flex items-center justify-center cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#4da8cc]/40"
        >
            <span className="font-poppins font-semibold text-[14px] leading-[18px] tracking-[0.4px] text-[#F5F7FE]">
                {labelName}
            </span>
        </button>
    )
}
