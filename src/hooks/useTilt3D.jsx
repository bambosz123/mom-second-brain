import { useRef, useState, useCallback } from 'react';

/**
 * Custom hook that adds interactive 3D tilt effect to elements.
 * Returns a ref to attach to the element and style/handler props to spread.
 *
 * @param {Object} options
 * @param {number} options.maxTilt - Max rotation in degrees (default: 15)
 * @param {number} options.scale - Scale on hover (default: 1.02)
 * @param {number} options.perspective - CSS perspective value (default: 800)
 * @param {boolean} options.glare - Enable glare effect (default: false)
 */
export function useTilt3D({
    maxTilt = 15,
    scale = 1.02,
    perspective = 800,
    glare = false,
} = {}) {
    const ref = useRef(null);
    const [tiltStyle, setTiltStyle] = useState({
        transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`,
        transition: 'transform 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)',
    });
    const [glareStyle, setGlareStyle] = useState({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: 'inherit',
        background: 'transparent',
        pointerEvents: 'none',
        zIndex: 10,
        transition: 'background 0.4s ease',
    });

    const handleMouseMove = useCallback(
        (e) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -maxTilt;
            const rotateY = ((x - centerX) / centerX) * maxTilt;

            setTiltStyle({
                transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale},${scale},${scale})`,
                transition: 'transform 0.1s ease',
            });

            if (glare) {
                const glareX = (x / rect.width) * 100;
                const glareY = (y / rect.height) * 100;
                setGlareStyle((prev) => ({
                    ...prev,
                    background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
                    transition: 'background 0.1s ease',
                }));
            }
        },
        [maxTilt, scale, perspective, glare]
    );

    const handleMouseLeave = useCallback(() => {
        setTiltStyle({
            transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`,
            transition: 'transform 0.6s cubic-bezier(0.03, 0.98, 0.52, 0.99)',
        });
        if (glare) {
            setGlareStyle((prev) => ({
                ...prev,
                background: 'transparent',
                transition: 'background 0.6s ease',
            }));
        }
    }, [perspective, glare]);

    return {
        ref,
        tiltStyle,
        glareStyle,
        handlers: {
            onMouseMove: handleMouseMove,
            onMouseLeave: handleMouseLeave,
        },
    };
}

/**
 * Wrapper component that provides a 3D tilt effect.
 * Wrap any card/element to give it interactive 3D perspective.
 */
export function TiltCard({
    children,
    className = '',
    maxTilt = 12,
    scale = 1.03,
    perspective = 800,
    glare = true,
    ...props
}) {
    const { ref, tiltStyle, glareStyle, handlers } = useTilt3D({
        maxTilt,
        scale,
        perspective,
        glare,
    });

    return (
        <div
            ref={ref}
            className={`relative ${className}`}
            style={{ ...tiltStyle, transformStyle: 'preserve-3d' }}
            {...handlers}
            {...props}
        >
            {children}
            {glare && <div style={glareStyle} aria-hidden="true" />}
        </div>
    );
}
