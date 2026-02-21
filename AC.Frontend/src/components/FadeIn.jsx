import React, { useState, useEffect, useRef } from 'react';

const FadeIn = ({ children, delay = 0, direction = 'up', fullWidth = false }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);

    const getDirectionClass = () => {
        switch (direction) {
            case 'up': return 'translate-y-20';
            case 'down': return '-translate-y-20';
            case 'left': return 'translate-x-20';
            case 'right': return '-translate-x-20';
            default: return '';
        }
    };

    return (
        <div
            ref={domRef}
            className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${fullWidth ? 'w-100' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default FadeIn;
