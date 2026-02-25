import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            {/* Final CTA Section */}
            <section id="cta" className="py-20 sm:py-28 bg-cream relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-taupe-light/30 to-transparent" />

                {/* 3D Decorative elements */}
                <div className="absolute inset-0 pointer-events-none" style={{ perspective: '1200px' }}>
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl"
                        animate={{ scale: [1, 1.1, 1], rotateZ: [0, 5, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                        className="absolute top-[20%] left-[10%] w-16 h-16 rounded-2xl bg-gold/8"
                        animate={{
                            y: [0, -20, 0],
                            rotateX: [0, 25, 0],
                            rotateY: [0, 15, 0],
                            rotateZ: [0, 10, 0],
                        }}
                        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ transformStyle: 'preserve-3d' }}
                    />
                    <motion.div
                        className="absolute bottom-[25%] right-[8%] w-12 h-12 rounded-full bg-taupe-light/10"
                        animate={{
                            y: [0, 15, 0],
                            rotateX: [0, -20, 0],
                            rotateY: [0, 20, 0],
                        }}
                        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        style={{ transformStyle: 'preserve-3d' }}
                    />
                    <motion.div
                        className="absolute top-[30%] right-[15%] w-8 h-8 rotate-45 rounded-lg bg-gold-light/8"
                        animate={{
                            y: [0, -12, 0],
                            rotateZ: [45, 75, 45],
                            rotateX: [0, 15, 0],
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                        style={{ transformStyle: 'preserve-3d' }}
                    />
                </div>

                <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40, rotateX: 10 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8 }}
                        style={{ perspective: '1000px', transformOrigin: 'bottom center' }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6"
                            whileHover={{ scale: 1.08, rotateY: 5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <Heart size={14} className="text-gold fill-gold" />
                            </motion.span>
                            <span className="text-xs font-medium text-brown-light tracking-wide uppercase">
                                You deserve this
                            </span>
                        </motion.div>

                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brown mb-5 leading-tight">
                            Your future organized self is{' '}
                            <motion.span
                                className="italic text-brown-light inline-block"
                                initial={{ rotateX: 30, opacity: 0 }}
                                whileInView={{ rotateX: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.7 }}
                                style={{ transformOrigin: 'bottom center' }}
                            >
                                one click away
                            </motion.span>
                        </h2>

                        <p className="text-brown-muted text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                            Stop spending hours each week managing chaos. Start spending that time on what matters — your family, your passions, yourself.
                        </p>

                        {/* 3D CTA Button */}
                        <motion.a
                            href="https://buy.stripe.com/6oUcN51y56kI3YhgEMeUU03"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                                scale: 1.06,
                                y: -4,
                                rotateX: -5,
                                boxShadow: '0 20px 40px rgba(44, 42, 41, 0.25)',
                            }}
                            whileTap={{ scale: 0.97, rotateX: 2 }}
                            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-brown text-cream font-medium rounded-full shadow-lg transition-colors duration-300 text-lg mb-6"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <motion.span
                                animate={{ rotate: [0, 15, -15, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <Sparkles size={18} />
                            </motion.span>
                            Get Mom's Second Brain — $19
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <ArrowRight size={20} />
                            </motion.span>
                        </motion.a>

                        {/* Trust badges */}
                        <motion.div
                            className="flex items-center justify-center gap-5 text-sm text-brown-muted"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <motion.span
                                className="flex items-center gap-1.5"
                                whileHover={{ scale: 1.05, y: -2 }}
                            >
                                <ShieldCheck size={16} className="text-gold" />
                                Instant digital download
                            </motion.span>
                            <span className="w-1 h-1 rounded-full bg-taupe-light" />
                            <motion.span
                                className="flex items-center gap-1.5"
                                whileHover={{ scale: 1.05, y: -2 }}
                            >
                                <ShieldCheck size={16} className="text-gold" />
                                30-day guarantee
                            </motion.span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-brown py-10 relative overflow-hidden">
                {/* Subtle floating particle */}
                <motion.div
                    className="absolute top-3 right-[20%] w-2 h-2 rounded-full bg-gold/20"
                    animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <motion.a
                            href="#"
                            className="font-serif text-xl font-semibold text-cream/90 tracking-wide"
                            whileHover={{ scale: 1.05, rotateY: 5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            Lumine Studio
                        </motion.a>
                        <div className="flex items-center gap-6">
                            <Link to="/terms" className="text-cream/50 text-sm hover:text-cream/80 transition-colors duration-300">Terms</Link>
                            <Link to="/privacy" className="text-cream/50 text-sm hover:text-cream/80 transition-colors duration-300">Privacy</Link>
                            <Link to="/contact" className="text-cream/50 text-sm hover:text-cream/80 transition-colors duration-300">Contact</Link>
                        </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-cream/10 text-center">
                        <p className="text-cream/40 text-sm">
                            © {new Date().getFullYear()} Lumine Studio. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
