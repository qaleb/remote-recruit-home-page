import React from 'react';
import { checkIcon, xIcon } from '../../data/pricingPlans';
import Button from '../ui/Button';

// Adapts to new pricingPlans data shape:
// { plan: string, price: number, period: string, features: [{ name, available }] }
export default function PricingCard({ plan }) {
    const { plan: planName, price, period, features } = plan;
    // Use price to infer highlight (previously passed explicitly)
    const highlight = price > 0;

    return (
        <div
            className={`relative flex flex-col justify-between w-full max-w-[500px] bg-white rounded-[28px] shadow-[0_30px_100px_-15px_rgba(49,89,211,0.12)] p-8 md:p-10 transition-transform hover:-translate-y-2 hover:shadow-[0_40px_120px_-15px_rgba(49,89,211,0.15)] ${highlight ? 'ring-2 ring-[#52B4DA]/40' : ''
                }`}
        >
            {/* Top Info */}
            <div className="flex flex-col md:flex-row gap-8">
                {/* Icon box */}
                <div className="w-[160px] h-[180px] bg-[#ECF2FF] rounded-[16px] flex items-center justify-center">
                    <div className="text-center">
                        <p
                            className={`text-[32px] font-semibold leading-[45px] ${highlight
                                    ? 'bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] bg-clip-text text-transparent'
                                    : 'text-[#52B4DA]'
                                }`}
                        >
                            {planName}
                        </p>
                        {/* Secondary label: show pricing or period */}
                        <p className="text-[20px] leading-[35px] font-medium text-[#11142D]/60">
                            {price === 0 ? 'Free' : `$${price.toFixed(2)}/mo`}
                        </p>
                        {highlight && (
                            <div className="mt-4 inline-flex items-center px-4 h-[44px] bg-[#C2EEFF] rounded-[22px] text-[16px] font-semibold tracking-wide text-[#11142D] shadow">
                                Premium
                            </div>
                        )}
                        <p
                            className={`mt-2 text-[16px] ${highlight ? 'text-[#11142D]/70' : 'text-[#11142D]/50'}`}
                        >
                            {period}
                        </p>
                    </div>
                </div>

                {/* Features */}
                <ul className="flex-1 space-y-5">
                    {features.map((f, i) => (
                        <li
                            key={i}
                            className="flex items-start gap-3 text-[16px] leading-[24px] font-medium"
                        >
                            <span
                                className={`w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center ${f.available
                                        ? 'bg-gradient-to-r from-[#52B4DA] to-[#1E3E85]'
                                        : 'bg-gradient-to-r from-[#A2A3B8] to-[#808191]'
                                    }`}
                            >
                                <img
                                    src={f.available ? checkIcon : xIcon}
                                    alt={f.available ? 'Included' : 'Not included'}
                                    className="w-3 h-3"
                                />
                            </span>
                            <span
                                className={`${f.available ? 'text-[#323445]' : 'text-[#808191]'
                                    }`}
                            >
                                {f.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-1 justify-center">
                <Button
                    variant={highlight ? 'solid' : 'outline'}
                    aria-label="Get Started"
                    className={`min-w-[180px] flex-1 ${highlight ? 'bg-[linear-gradient(129.98deg,_#52B4DA_-106.35%,_#1E3E85_95.25%)] shadow-[10px_0px_50px_rgba(49,89,211,0.28)] rounded-[24px]' : ''}`}
                >
                    Get Started
                </Button>
            </div>
        </div>
    );
}
