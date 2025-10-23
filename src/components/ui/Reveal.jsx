import React, { useRef, useState, useEffect } from 'react';

const variantClassMap = {
    fade: {
        hidden: 'opacity-0 translate-y-2',
        visible: 'opacity-100 translate-y-0'
    },
    'slide-up': {
        hidden: 'opacity-0 translate-y-6',
        visible: 'opacity-100 translate-y-0'
    },
    'slide-left': {
        hidden: 'opacity-0 -translate-x-6',
        visible: 'opacity-100 translate-x-0'
    },
    'slide-right': {
        hidden: 'opacity-0 translate-x-6',
        visible: 'opacity-100 translate-x-0'
    },
    'scale-in': {
        hidden: 'opacity-0 scale-95',
        visible: 'opacity-100 scale-100'
    }
};

export default function Reveal({
    children,
    as: Component = 'div',
    className = '',
    variant = 'fade',
    delay = 0,
    duration = 600,
    threshold = 0.2,
    triggerOnce = true
}) {
    const ref = useRef(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setShown(true);
            return;
        }

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setShown(true);
                        if (triggerOnce) observer.unobserve(entry.target);
                    } else if (!triggerOnce) {
                        setShown(false);
                    }
                });
            },
            { threshold }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold, triggerOnce]);

    const variantClasses = variantClassMap[variant] || variantClassMap.fade;
    const stateClass = shown ? variantClasses.visible : variantClasses.hidden;

    const style = {
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        transitionDelay: `${shown ? delay : 0}ms`
    };

    return (
        <Component
            ref={ref}
            className={`${stateClass} will-change-transform ${className}`}
            style={style}
        >
            {children}
        </Component>
    );
}
