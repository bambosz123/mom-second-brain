import { motion } from 'framer-motion';
import { ArrowLeft, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div className="min-h-screen bg-cream">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm text-brown-muted hover:text-brown transition-colors mb-10"
                >
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brown mb-3">
                        Contact Us
                    </h1>
                    <p className="text-brown-muted text-lg mb-12">
                        Have a question or need help? We'd love to hear from you.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {/* Email Card */}
                        <motion.a
                            href="mailto:contact@luminestudio.com"
                            whileHover={{ scale: 1.03, y: -4 }}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-taupe-light/15 hover:shadow-lg transition-shadow duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-cream-dark flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors duration-300">
                                <Mail size={24} className="text-brown-light group-hover:text-gold-dark transition-colors" strokeWidth={1.5} />
                            </div>
                            <h2 className="font-serif text-xl font-semibold text-brown mb-2">
                                Email Us
                            </h2>
                            <p className="text-brown-muted text-sm leading-relaxed mb-4">
                                For general inquiries, support, or refund requests. We typically respond within 24 hours.
                            </p>
                            <span className="text-gold font-medium text-sm">
                                contact@luminestudio.com
                            </span>
                        </motion.a>

                        {/* FAQ Card */}
                        <motion.div
                            whileHover={{ scale: 1.03, y: -4 }}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-taupe-light/15 hover:shadow-lg transition-shadow duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-cream-dark flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors duration-300">
                                <MessageCircle size={24} className="text-brown-light group-hover:text-gold-dark transition-colors" strokeWidth={1.5} />
                            </div>
                            <h2 className="font-serif text-xl font-semibold text-brown mb-2">
                                Check FAQ
                            </h2>
                            <p className="text-brown-muted text-sm leading-relaxed mb-4">
                                Many common questions are answered in our FAQ section. Find instant answers there.
                            </p>
                            <Link
                                to="/#faq"
                                className="text-gold font-medium text-sm hover:text-gold-dark transition-colors"
                            >
                                Go to FAQ →
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
