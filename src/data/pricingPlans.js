import checkIcon from '../assets/checkmark-icon.svg';
import xIcon from '../assets/cross-icon.svg';

const pricingPlans = [
    {
        id: 'free',
        plan: 'Free',
        price: 0,
        period: 'Basic', // label shown under plan name
        features: [
            { name: '1 Active Job', available: true },
            { name: 'Basic List Placement', available: true },
            { name: 'Unlimited Job Applicants', available: false },
            { name: 'Invite Anyone to Apply to Your Jobs', available: false },
        ],
    },
    {
        id: 'premium',
        plan: 'Premium',
        price: 79.99,
        period: 'Per Month',
        features: [
            { name: 'Unlimited Job Posts', available: true },
            { name: 'Instant Job Post Approval', available: true },
            { name: 'Premium List Placement', available: true },
            { name: 'Unlimited Job Applicants', available: true },
        ],
    },
];

export default pricingPlans;
export { checkIcon, xIcon };