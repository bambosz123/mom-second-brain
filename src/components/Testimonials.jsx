import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TiltCard } from '../hooks/useTilt3D';

const testimonials = [
    {
        name: 'Sarah M.',
        role: 'Mom of 3',
        text: "I used to spend Sunday nights panicking about the week ahead. Now I open my Notion dashboard, and everything is right there. I've saved at least 5 hours a week — and my sanity.",
        stars: 5,
        gradient: 'from-pink-50 to-rose-50',
    },
    {
        name: 'Jessica T.',
        role: 'Working Mom',
        text: "I tried every app out there — nothing stuck. This template just works because it thinks like a mom. The meal planner alone is worth 10x the price. My husband is honestly impressed.",
        stars: 5,
        gradient: 'from-amber-50 to-yellow-50',
    },
    {
        name: 'Priya K.',
        role: 'Mom of Twins',
        text: "The Mom's Corner feature made me cry (happy tears!). Having a space that reminds me to take care of MYSELF? Revolutionary. I finally feel like I have my life together.",
        stars: 5,
        gradient: 'from-violet-50 to-purple-50',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.18 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, rotateY: -8, rotateX: 10 },
    visible: {
        opacity: 1,
        y: 0,
        rotateY: 0,
        rotateX: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 sm:py-28 bg-cream relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-taupe-light/30 to-transparent" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <p className="text-sm font-medium text-gold uppercase tracking-widest mb-3">
                        Real Results
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brown mb-5">
                        Moms are{' '}
                        <span className="italic text-brown-light">loving</span> it
                    </h2>
                    <p className="text-brown-muted text-lg leading-relaxed">
                        Don't take our word for it — hear from moms who got their lives back.
                    </p>
                </motion.div>

                {/* 3D Testimonial cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="grid sm:grid-cols-3 gap-6 lg:gap-8"
                    style={{ perspective: '1200px' }}
                >
                    {testimonials.map((item, i) => (
                        <motion.div key={i} variants={cardVariants}>
                            <TiltCard
                                maxTilt={12}
                                scale={1.03}
                                glare={true}
                                className="h-full bg-white rounded-2xl p-7 sm:p-8 shadow-sm border border-taupe-light/15 hover:shadow-xl transition-shadow duration-400 cursor-default"
                            >
                                {/* Subtle gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 rounded-2xl`} />

                                <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
                                    {/* Quote icon - floats above */}
                                    <motion.div
                                        className="absolute top-0 right-0"
                                        style={{ transform: 'translateZ(35px)' }}
                                        animate={{ rotateY: [0, 10, 0], y: [0, -3, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                    >
                                        <Quote size={28} className="text-cream-deeper" strokeWidth={1.5} />
                                    </motion.div>

                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4" style={{ transform: 'translateZ(20px)' }}>
                                        {Array.from({ length: item.stars }).map((_, j) => (
                                            <motion.div
                                                key={j}
                                                initial={{ opacity: 0, scale: 0, rotateZ: -30 }}
                                                whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + j * 0.08, type: 'spring', stiffness: 300 }}
                                            >
                                                <Star size={16} className="text-gold fill-gold" />
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Quote text */}
                                    <p
                                        className="text-brown-light leading-relaxed text-[15px] mb-6 italic"
                                        style={{ transform: 'translateZ(12px)' }}
                                    >
                                        "{item.text}"
                                    </p>

                                    {/* Author */}
                                    <div
                                        className="flex items-center gap-3 pt-4 border-t border-cream-deeper"
                                        style={{ transform: 'translateZ(18px)' }}
                                    >
                                        <motion.div
                                            className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-light to-taupe-light flex items-center justify-center shadow-md"
                                            whileHover={{ scale: 1.15, rotateZ: 10 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <span className="text-sm font-semibold text-white">
                                                {item.name.charAt(0)}
                                            </span>
                                        </motion.div>
                                        <div>
                                            <p className="text-sm font-semibold text-brown">{item.name}</p>
                                            <p className="text-xs text-brown-muted">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
