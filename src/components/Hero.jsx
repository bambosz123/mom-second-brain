import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useRef } from 'react';

function FloatingShape({ className, delay = 0, duration = 8, shape = 'circle' }) {
    return (
        <motion.div
            animate={{
                y: [0, -25, 0],
                rotateX: [0, 15, 0],
                rotateY: [0, 20, 0],
                rotateZ: [0, 5, -5, 0],
            }}
            transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
            style={{ transformStyle: 'preserve-3d' }}
            className={className}
        >
            {shape === 'diamond' && (
                <div className="w-full h-full rotate-45 rounded-lg bg-inherit" />
            )}
        </motion.div>
    );
}

function MockupCard3D() {
    const cardRef = useRef(null);
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const rotateX = useSpring(useTransform(mouseY, [0, 1], [12, -12]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-12, 12]), { stiffness: 150, damping: 20 });
    const glareX = useTransform(mouseX, [0, 1], [0, 100]);
    const glareY = useTransform(mouseY, [0, 1], [0, 100]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
    };

    const handleMouseLeave = () => {
        mouseX.set(0.5);
        mouseY.set(0.5);
    };

    const dashboardTiles = [
        { label: 'Kids Hub', img: '/images/icon-kids.png', color: 'bg-pink-50' },
        { label: 'Meals', img: '/images/icon-meals.png', color: 'bg-green-50' },
        { label: 'Schedule', img: '/images/icon-schedule.png', color: 'bg-blue-50' },
        { label: 'Self-Care', img: '/images/icon-selfcare.png', color: 'bg-purple-50' },
    ];

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 40, rotateX: 5, rotateY: -5 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                perspective: 1000,
            }}
            className="relative cursor-default"
        >
            <div className="relative mx-auto max-w-md lg:max-w-none" style={{ transformStyle: 'preserve-3d' }}>
                {/* Glow behind the card */}
                <motion.div
                    className="absolute -inset-4 bg-gradient-to-br from-gold/15 via-taupe-light/10 to-transparent rounded-3xl blur-2xl"
                    style={{ transform: 'translateZ(-30px)' }}
                />

                {/* Floating Best Seller badge — properly in front */}
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-5 -right-4 z-30 flex items-center gap-1.5 bg-gradient-to-r from-gold to-gold-dark text-white text-xs font-semibold px-4 py-2 rounded-full shadow-xl"
                    style={{ transform: 'translateZ(60px)' }}
                >
                    <Sparkles size={12} />
                    Best Seller
                </motion.div>

                {/* Main Card */}
                <div
                    className="relative bg-white rounded-2xl shadow-xl border border-taupe-light/20 overflow-hidden"
                    style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}
                >
                    <div className="bg-gradient-to-r from-cream-dark to-cream-deeper px-6 py-3 flex items-center gap-2 border-b border-taupe-light/20">
                        <div className="w-3 h-3 rounded-full bg-red-300/60" />
                        <div className="w-3 h-3 rounded-full bg-yellow-300/60" />
                        <div className="w-3 h-3 rounded-full bg-green-300/60" />
                        <span className="ml-3 text-xs text-brown-muted/60 font-medium">Mom's Second Brain</span>
                    </div>
                    <div className="p-6 sm:p-8 space-y-4">
                        {/* Dashboard tiles with real images */}
                        <div className="grid grid-cols-2 gap-3">
                            {dashboardTiles.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ delay: 0.8 + i * 0.15, type: 'spring', stiffness: 200 }}
                                    whileHover={{
                                        scale: 1.06,
                                        rotateZ: i % 2 === 0 ? 2 : -2,
                                        transition: { duration: 0.2 },
                                    }}
                                    className={`${item.color} rounded-xl p-4 flex flex-col items-center justify-center cursor-default`}
                                    style={{ transform: `translateZ(${10 + i * 5}px)` }}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.label}
                                        className="w-10 h-10 object-contain mb-1.5 rounded-lg"
                                    />
                                    <p className="text-xs font-medium text-brown-light">{item.label}</p>
                                </motion.div>
                            ))}
                        </div>
                        {/* Progress bars */}
                        <div className="space-y-3 pt-2">
                            {['Weekly meal prep', 'School paperwork', 'Family budget'].map((label, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-xs text-brown-muted mb-1">
                                        <span>{label}</span>
                                        <span>{[85, 60, 92][i]}%</span>
                                    </div>
                                    <div className="h-2 bg-cream-deeper rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${[85, 60, 92][i]}%` }}
                                            transition={{ delay: 1.4 + i * 0.2, duration: 0.8, ease: 'easeOut' }}
                                            className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Glare overlay */}
                <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none z-10"
                    style={{
                        background: useTransform(
                            [glareX, glareY],
                            ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.12) 0%, transparent 50%)`
                        ),
                        transform: 'translateZ(30px)',
                    }}
                />
            </div>
        </motion.div>
    );
}

export default function Hero() {
    const avatars = [
        '/images/avatar1.png',
        '/images/avatar2.png',
        '/images/avatar3.png',
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-cream-dark to-cream pt-20">
            {/* 3D Floating decorative shapes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ perspective: '1200px' }}>
                <FloatingShape
                    delay={0}
                    duration={8}
                    className="absolute top-[12%] left-[6%] w-16 h-16 rounded-full bg-gold/8 blur-sm"
                />
                <FloatingShape
                    delay={1.5}
                    duration={10}
                    className="absolute top-[20%] right-[8%] w-24 h-24 rounded-2xl bg-taupe-light/10 blur-sm"
                />
                <FloatingShape
                    delay={0.8}
                    duration={7}
                    shape="diamond"
                    className="absolute top-[60%] left-[5%] w-12 h-12 bg-gold-light/8"
                />
                <FloatingShape
                    delay={2}
                    duration={9}
                    className="absolute bottom-[15%] right-[12%] w-20 h-20 rounded-full bg-taupe/8 blur-sm"
                />
                <FloatingShape
                    delay={3}
                    duration={11}
                    className="absolute top-[45%] right-[20%] w-8 h-8 rounded-lg bg-gold/6"
                />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left – Copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, rotateX: 5 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-center lg:text-left"
                        style={{ perspective: '1000px' }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6"
                        >
                            <motion.span
                                animate={{ rotate: [0, 15, -15, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <Sparkles size={14} className="text-gold" />
                            </motion.span>
                            <span className="text-xs font-medium text-brown-light tracking-wide uppercase">
                                Premium PDF Planner
                            </span>
                        </motion.div>

                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brown leading-[1.15] mb-6">
                            Stop drowning in{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10">mental load.</span>
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
                                    className="absolute bottom-1 left-0 right-0 h-3 bg-gold-light/30 -z-0 origin-left rounded-sm"
                                />
                            </span>
                            <br />
                            <motion.span
                                initial={{ opacity: 0, y: 20, rotateX: 30 }}
                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                transition={{ delay: 0.5, duration: 0.7 }}
                                className="text-brown-light inline-block"
                                style={{ transformOrigin: 'bottom center' }}
                            >
                                Run your home on autopilot.
                            </motion.span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="text-lg sm:text-xl text-brown-muted leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
                        >
                            The beautifully-designed planner system that replaces sticky notes,
                            20 apps, and the constant worry that you're forgetting something.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <motion.a
                                href="https://buy.stripe.com/6oUcN51y56kI3YhgEMeUU03"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -3, rotateX: -5 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brown text-cream font-medium rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 text-base"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                Get the Planner — $19
                                <motion.span
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                                >
                                    <ArrowRight size={18} />
                                </motion.span>
                            </motion.a>
                            <motion.a
                                href="#features"
                                whileHover={{ scale: 1.05, rotateY: 5 }}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cream border-2 border-taupe-light text-brown-light font-medium rounded-full hover:bg-cream-dark transition-colors duration-300 text-base"
                            >
                                See What's Inside
                            </motion.a>
                        </motion.div>

                        {/* Social proof with real woman avatars */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="mt-8 flex items-center gap-3 justify-center lg:justify-start"
                        >
                            <div className="flex -space-x-3">
                                {avatars.map((src, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scale: 0, rotateZ: -30 }}
                                        animate={{ scale: 1, rotateZ: 0 }}
                                        transition={{ delay: 1.2 + i * 0.12, type: 'spring', stiffness: 300 }}
                                        whileHover={{ scale: 1.2, rotateZ: 5, y: -4, zIndex: 10 }}
                                        className="relative w-9 h-9 rounded-full border-2 border-cream shadow-md overflow-hidden cursor-default"
                                    >
                                        <img
                                            src={src}
                                            alt={`Happy customer ${i + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                            <p className="text-sm text-brown-muted">
                                Loved by <span className="font-semibold text-brown">850+</span> moms
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right – 3D Mockup */}
                    <MockupCard3D />
                </div>
            </div>
        </section>
    );
}
