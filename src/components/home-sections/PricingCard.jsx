import React from 'react';
import { checkIcon, xIcon } from '../../data/pricingPlans';
import premiumIcon from '../../assets/premium-icon.svg';
import Button from '../ui/Button';

// Small utility for a feature line
function FeatureLine({ feature }) {
    const { name, available } = feature;
    return (
        <li className="flex items-start gap-3" aria-label={name}>
            <span
                className={`flex h-5 w-5 items-center justify-center rounded-full shadow-sm ${available
                    ? 'bg-gradient-to-br from-[#52B4DA] to-[#1E3E85]'
                    : 'bg-[#C5C6D0]'
                    }`}
            >
                <img
                    src={available ? checkIcon : xIcon}
                    alt={available ? 'Available' : 'Not available'}
                    className={available ? 'h-3.5 w-3.5' : 'h-3 w-3'}
                />
            </span>
            <span
                className={`text-[16px] leading-6 font-medium ${available ? 'text-[#323445]' : 'text-[#808191]'
                    }`}
            >
                {name}
            </span>
        </li>
    );
}

export default function PricingCard({ plan }) {
    const { plan: planName, price, period, features } = plan;
    const isPremium = price > 0;

    return (
        <article
            className={`relative mx-auto w-full max-w-[500px] rounded-[28px] bg-white shadow-lg px-8 pt-8 pb-10 flex flex-col gap-6 transition-transform hover:-translate-y-2 hover:shadow-[0_40px_120px_-15px_rgba(49,89,211,0.15)]`}
            aria-labelledby={`plan-${planName.toLowerCase()}-title`}
        >
            <div className="grid grid-cols-[160px_1fr] gap-8">
                <div className="relative h-[180px] w-[160px] rounded-[16px] bg-[#ECF2FF] flex flex-col items-center justify-center">
                    {isPremium && (
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center gap-2 h-11 px-4 bg-[#C2EEFF] rounded-full shadow-[0px_4px_4px_rgba(67,145,193,0.21)]">
                            <span className="relative flex h-9 w-9 items-center justify-center">
                                <span className="absolute inset-0 rounded-full bg-white" />
                                <img
                                    src={premiumIcon}
                                    alt="Premium plan icon"
                                    className="relative h-7 w-5"
                                />
                            </span>
                            <span className="font-semibold text-[16px] leading-5 tracking-[0.4px] text-[#11142D]">
                                Premium
                            </span>
                        </div>
                    )}
                    {/* Price or Plan Name */}
                    {isPremium ? (
                        <>
                            <p
                                id={`plan-${planName.toLowerCase()}-title`}
                                className="mt-4 bg-clip-text text-[32px] font-semibold leading-[45px] text-transparent bg-gradient-to-br from-[#52B4DA] to-[#1E3E85]"
                            >
                                ${price.toFixed(2)}
                            </p>
                            <p className="text-[20px] font-medium leading-[35px] text-[#808191]">
                                {period}
                            </p>
                        </>
                    ) : (
                        <>
                            <p
                                id={`plan-${planName.toLowerCase()}-title`}
                                className="bg-clip-text text-[32px] font-semibold leading-[45px] text-[#52B4DA]"
                            >
                                {planName}
                            </p>
                            <p className="text-[20px] font-medium leading-[35px] text-[#11142D]/40">{period}</p>
                        </>
                    )}
                </div>

                {/* Feature list */}
                <ul className="flex flex-col gap-5 pt-2" aria-label="Plan features">
                    {features.map((f) => (
                        <FeatureLine key={f.name} feature={f} />
                    ))}
                </ul>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-1 justify-center">
                <Button
                    variant={isPremium ? 'solid' : 'outline'}
                    aria-label="Get Started"
                    className={`min-w-[180px] flex-1 ${isPremium ? 'bg-[linear-gradient(129.98deg,_#52B4DA_-106.35%,_#1E3E85_95.25%)] shadow-[10px_0px_50px_rgba(49,89,211,0.28)] rounded-[24px]' : ''}`}
                >
                    Get Started
                </Button>
            </div>
        </article>
    );
}
