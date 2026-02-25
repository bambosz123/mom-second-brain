import { motion } from 'framer-motion';
import {
    Baby,
    Salad,
    PiggyBank,
    Heart,
    CheckCircle2,
} from 'lucide-react';
import { TiltCard } from '../hooks/useTilt3D';

const features = [
    {
        icon: Baby,
        title: 'Kids Hub',
        description:
            'School schedules, pediatrician info, clothing sizes, milestones — all in one beautiful dashboard. Never scramble for info again.',
        highlights: ['School calendar sync', 'Growth tracker', 'Activity log'],
        span: 'lg:col-span-2',
        color: 'from-pink-50 to-cream',
        iconBg: 'from-pink-100 to-rose-50',
    },
    {
        icon: Salad,
        title: 'Meal Planner',
        description:
            'Weekly menus, grocery lists, and family-favorite recipes — auto-organized. Sunday prep? Done in 10 minutes.',
        highlights: ['Weekly planner', 'Grocery list generator', 'Recipe bank'],
        span: 'lg:col-span-1',
        color: 'from-green-50 to-cream',
        iconBg: 'from-green-100 to-emerald-50',
    },
    {
        icon: PiggyBank,
        title: 'Finance Tracker',
        description:
            'Household budget, subscriptions, bills — tracked in a simple, visual way. No spreadsheet nightmares.',
        highlights: ['Monthly budget', 'Bill reminders', 'Savings goals'],
        span: 'lg:col-span-1',
        color: 'from-blue-50 to-cream',
        iconBg: 'from-blue-100 to-sky-50',
    },
    {
        icon: Heart,
        title: "Mom's Corner",
        description:
            'Your personal space for self-care routines, goals, journal prompts, and habit tracking. Because you matter too.',
        highlights: ['Self-care planner', 'Habit tracker', 'Journal prompts'],
        span: 'lg:col-span-2',
        color: 'from-purple-50 to-cream',
        iconBg: 'from-purple-100 to-violet-50',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 35, rotateX: 12 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.7, ease: 'easeOut' },
    },
};

export default function Features() {
    return (
        <section id="features" className="py-20 sm:py-28 bg-cream-dark relative">
            {/* Subtle top divider */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-taupe-light/30 to-transparent" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20, rotateX: 8 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                    style={{ perspective: '1000px', transformOrigin: 'bottom center' }}
                >
                    <p className="text-sm font-medium text-gold uppercase tracking-widest mb-3">
                        What's inside
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brown mb-5">
                        Everything you need,{' '}
                        <span className="italic text-brown-light">beautifully organized</span>
                    </h2>
                    <p className="text-brown-muted text-lg leading-relaxed">
                        Four powerful hubs designed specifically for how moms actually think and plan.
                    </p>
                </motion.div>

                {/* Bento Grid with 3D effects */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-5"
                    style={{ perspective: '1200px' }}
                >
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div key={i} variants={cardVariants} className={feature.span}>
                                <TiltCard
                                    maxTilt={10}
                                    scale={1.02}
                                    glare={true}
                                    className="h-full bg-white rounded-2xl p-7 sm:p-8 shadow-sm border border-taupe-light/15 hover:shadow-xl transition-shadow duration-400 overflow-hidden cursor-default"
                                >
                                    {/* Subtle gradient bg */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-40 transition-opacity duration-400`} />

                                    <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
                                        <motion.div
                                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.iconBg} border border-white/50 flex items-center justify-center mb-5 shadow-sm`}
                                            style={{ transform: 'translateZ(30px)' }}
                                            whileHover={{ rotateY: 180, scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Icon
                                                size={22}
                                                className="text-brown-light"
                                                strokeWidth={1.5}
                                            />
                                        </motion.div>

                                        <h3
                                            className="font-serif text-xl sm:text-2xl font-semibold text-brown mb-3"
                                            style={{ transform: 'translateZ(20px)' }}
                                        >
                                            {feature.title}
                                        </h3>

                                        <p
                                            className="text-brown-muted leading-relaxed text-[15px] mb-5"
                                            style={{ transform: 'translateZ(12px)' }}
                                        >
                                            {feature.description}
                                        </p>

                                        <ul className="space-y-2" style={{ transform: 'translateZ(8px)' }}>
                                            {feature.highlights.map((item, j) => (
                                                <li key={j} className="flex items-center gap-2 text-sm text-brown-light">
                                                    <CheckCircle2 size={16} className="text-gold flex-shrink-0" strokeWidth={2} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
