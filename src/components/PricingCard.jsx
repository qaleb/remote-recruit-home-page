import React from 'react'
import { ReactComponent as CheckIcon } from '../assets/checkmark-icon.svg'
import { ReactComponent as CrossIcon } from '../assets/cross-icon.svg'

export default function PricingCard({
  title,
  subtitle,
  price,
  period,
  features = [],
  variant = 'outline',
  ctaLabel = 'Get Started',
  href = '#',
}) {
  const isFilled = variant === 'filled'

  return (
    <div className={`rounded-[18px] p-8 shadow-[0_10px_30px_rgba(16,24,40,0.06)] bg-white ${isFilled ? 'ring-1 ring-inset ring-[#E6F4FA]' : ''}`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[20px] font-semibold text-[#11142D]">{title}</div>
          {subtitle && <div className="text-sm text-[#8B93A7]">{subtitle}</div>}
        </div>

        <div className="text-right">
          <div className="text-[28px] font-semibold text-[#11142D]">{price}</div>
          {period && <div className="text-sm text-[#8B93A7]">{period}</div>}
        </div>
      </div>

      <ul className="mt-6 space-y-4">
        {features.map((f, idx) => (
          <li key={idx} className="flex items-start gap-4">
            <span className="w-8 h-8 flex-shrink-0">
              {f.included ? <CheckIcon /> : <CrossIcon />}
            </span>
            <div className={`${f.included ? 'text-[#11142D]' : 'text-[#9FA3B2]' } text-[15px] leading-[22px]`}>{f.label}</div>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        {isFilled ? (
          <a href={href} className="block text-center py-4 rounded-[12px] bg-gradient-to-r from-[#336DA6] to-[#1E3E85] text-white font-semibold">
            {ctaLabel}
          </a>
        ) : (
          <a href={href} className="block text-center py-4 rounded-[12px] border-2 border-[#52B4DA] text-[#1E3E85] font-semibold">
            {ctaLabel}
          </a>
        )}
      </div>
    </div>
  )
}
