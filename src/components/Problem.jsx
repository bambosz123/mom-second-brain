import { motion } from 'framer-motion';
import { CalendarX, UtensilsCrossed, HeartOff } from 'lucide-react';
import { TiltCard } from '../hooks/useTilt3D';

const painPoints = [
    {
        icon: CalendarX,
        title: 'Forgotten Appointments',
        description:
            "Dentist, school play, soccer practice — you're juggling 47 things and still feel like you've dropped the ball.",
        iconBg: 'from-red-50 to-pink-50',
    },
    {
        icon: UtensilsCrossed,
        title: 'Meal-Prep Overwhelm',
        description:
            '"What\'s for dinner?" shouldn\'t be the most stressful question of your day. But here we are.',
        iconBg: 'from-orange-50 to-amber-50',
    },
    {
        icon: HeartOff,
        title: 'Zero Time for You',
        description:
            "Everyone's needs are met — except yours. You can't even remember the last time you had a moment to breathe.",
        iconBg: 'from-purple-50 to-violet-50',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, rotateX: 15 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.7, ease: 'easeOut' },
    },
};

export default function Problem() {
    return (
        <section className="py-20 sm:py-28 bg-cream relative" style={{ perspective: '1200px' }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20, rotateX: 10 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                    style={{ transformOrigin: 'bottom center' }}
                >
                    <p className="text-sm font-medium text-gold uppercase tracking-widest mb-3">
                        Sound familiar?
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brown mb-5">
                        Being a mom shouldn't feel like a{' '}
                        <span className="italic text-brown-light">full-time crisis</span>
                    </h2>
                    <p className="text-brown-muted text-lg leading-relaxed">
                        You love your family. But the invisible workload? It's crushing you.
                    </p>
                </motion.div>

                {/* 3D Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="grid sm:grid-cols-3 gap-6 lg:gap-8"
                    style={{ perspective: '1000px' }}
                >
                    {painPoints.map((point, i) => {
                        const Icon = point.icon;
                        return (
                            <motion.div key={i} variants={cardVariants}>
                                <TiltCard
                                    maxTilt={14}
                                    scale={1.04}
                                    glare={true}
                                    className="bg-white rounded-2xl p-8 shadow-sm border border-taupe-light/15 hover:shadow-xl transition-shadow duration-400 cursor-default"
                                >
                                    <div
                                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${point.iconBg} flex items-center justify-center mb-5`}
                                        style={{ transform: 'translateZ(25px)' }}
                                    >
                                        <motion.div
                                            whileHover={{ rotateY: 180 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <Icon
                                                size={24}
                                                className="text-brown-light"
                                                strokeWidth={1.5}
                                            />
                                        </motion.div>
                                    </div>
                                    <h3
                                        className="font-serif text-xl font-semibold text-brown mb-3"
                                        style={{ transform: 'translateZ(15px)' }}
                                    >
                                        {point.title}
                                    </h3>
                                    <p
                                        className="text-brown-muted leading-relaxed text-[15px]"
                                        style={{ transform: 'translateZ(10px)' }}
                                    >
                                        {point.description}
                                    </p>
                                </TiltCard>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
