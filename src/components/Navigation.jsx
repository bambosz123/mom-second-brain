import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-cream/90 backdrop-blur-md shadow-sm border-b border-taupe-light/30'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Brand */}
                    <a
                        href="#"
                        className="font-serif text-xl sm:text-2xl font-semibold text-brown tracking-wide"
                    >
                        Lumine Studio
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden sm:flex items-center gap-8">
                        <a
                            href="#features"
                            className="text-sm text-brown-muted hover:text-brown transition-colors duration-300"
                        >
                            Features
                        </a>
                        <a
                            href="#testimonials"
                            className="text-sm text-brown-muted hover:text-brown transition-colors duration-300"
                        >
                            Reviews
                        </a>
                        <a
                            href="#faq"
                            className="text-sm text-brown-muted hover:text-brown transition-colors duration-300"
                        >
                            FAQ
                        </a>
                        <a
                            href="https://buy.stripe.com/6oUcN51y56kI3YhgEMeUU03"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-2.5 bg-brown text-cream text-sm font-medium rounded-full hover:bg-brown-light transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Buy Now — $19
                        </a>
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="sm:hidden p-2 text-brown-light"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="sm:hidden overflow-hidden bg-cream/95 backdrop-blur-md border-t border-taupe-light/30"
                    >
                        <div className="px-6 py-5 flex flex-col gap-4">
                            <a href="#features" onClick={() => setMobileOpen(false)} className="text-sm text-brown-muted hover:text-brown">Features</a>
                            <a href="#testimonials" onClick={() => setMobileOpen(false)} className="text-sm text-brown-muted hover:text-brown">Reviews</a>
                            <a href="#faq" onClick={() => setMobileOpen(false)} className="text-sm text-brown-muted hover:text-brown">FAQ</a>
                            <a
                                href="https://buy.stripe.com/6oUcN51y56kI3YhgEMeUU03"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileOpen(false)}
                                className="inline-flex items-center justify-center px-6 py-3 bg-brown text-cream text-sm font-medium rounded-full"
                            >
                                Buy Now — $19
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
