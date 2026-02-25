import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
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
                        Privacy Policy
                    </h1>
                    <p className="text-brown-muted mb-10">Last updated: February 24, 2026</p>

                    <div className="prose prose-brown max-w-none space-y-8 text-brown-light leading-relaxed text-[15px]">
                        <section>
                            <h2 className="font-serif text-xl font-semibold text-brown mb-3">1. Information We Collect</h2>
                            <p>
                                When you make a purchase, we collect the information necessary to process your
                                transaction, including your name, email address, and payment details. Payment
                                information is processed securely by Stripe and is never stored on our servers.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl font-semibold text-brown mb-3">2. How We Use Your Information</h2>
                            <p>We use the information we collect to:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Process and deliver your digital product purchase</li>
                                <li>Send you order confirmations and product access links</li>
                                <li>Provide customer support when requested</li>
                                <li>Send occasional product updates (you can opt out at any time)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl font-semibold text-brown mb-3">3. Data Sharing</h2>
                            <p>
                                We do not sell, rent, or share your personal information with third parties for
                                marketing purposes. We may share your data with trusted service providers (such
                                as Stripe for payment processing) solely to fulfill your order.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl font-semibold text-brown mb-3">4. Cookies</h2>
                            <p>
                                Our website may use essential cookies to ensure proper functionality. We do not
                                use tracking cookies or third-party advertising cookies. You can disable cookies
                                in your browser settings at any time.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl font-semibold text-brown mb-3">5. Data Security</h2>
                            <p>
                                We take reasonable measures to protect your personal information using
                                industry-standard security practices. All payment transactions are encrypted
                                and processed through Stripe's secure infrastructure.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl font-semibold text-brown mb-3">6. Your Rights</h2>
                            <p>You have the right to:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Request access to the personal data we hold about you</li>
                                <li>Request correction or deletion of your personal data</li>
                                <li>Opt out of marketing communications at any time</li>
                                <li>Request a copy of your data in a portable format</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl font-semibold text-brown mb-3">7. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. Any changes will be posted
                                on this page with an updated revision date. We encourage you to review this
                                policy periodically.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl font-semibold text-brown mb-3">8. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy or wish to exercise your
                                rights, please contact us at{' '}
                                <a href="mailto:contact@luminestudio.com" className="text-gold hover:text-gold-dark underline">
                                    contact@luminestudio.com
                                </a>.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
