import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
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
                        Terms of Service
                    </h1>
                    <p className="text-brown-muted mb-10">Last updated: February 24, 2026</p>

                    <div className="prose prose-brown max-w-none space-y-8 text-brown-light leading-relaxed text-[15px]">
                        <section>
                            <h2 className="font-serif text-xl font-semibold text-brown mb-3">1. Overview</h2>
                            <p>
                                These Terms of Service ("Terms") govern your purchase and use of digital products
                                sold by Lumine Studio ("we", "us", "our"), including but not limited to the
                                "Mom's Second Brain" PDF digital planner. By purchasing or using our products, you
                                agree to be bound by these Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl font-semibold text-brown mb-3">2. Digital Products</h2>
                            <p>
                                Our products are digital planners designed for use as a PDF. Upon purchase,
                                you will receive a link to download the PDF to your personal device.
                                All sales are for personal, non-commercial use unless otherwise stated.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl font-semibold text-brown mb-3">3. Payment & Delivery</h2>
                            <p>
                                Payments are processed securely through Stripe. Upon successful payment, you will
                                receive instant access to your purchased digital product via email. No physical
                                goods will be shipped.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl font-semibold text-brown mb-3">4. Refund Policy</h2>
                            <p>
                                We offer a 30-day money-back guarantee. If you are not satisfied with your purchase,
                                contact us within 30 days of purchase for a full refund. Refunds will be processed
                                to the original payment method within 5–10 business days.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl font-semibold text-brown mb-3">5. Intellectual Property</h2>
                            <p>
                                All content, designs, and planners are the intellectual property of Lumine Studio.
                                You may not resell, redistribute, or share your purchased planners. You are
                                granted a personal, non-transferable license to use the planner for your own purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl font-semibold text-brown mb-3">6. Limitation of Liability</h2>
                            <p>
                                Our products are provided "as is." We make no warranties regarding the suitability
                                of our planners for your specific needs. Lumine Studio shall not be liable for any
                                indirect, incidental, or consequential damages arising from the use of our products.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl font-semibold text-brown mb-3">7. Changes to Terms</h2>
                            <p>
                                We reserve the right to update these Terms at any time. Changes will be posted on
                                this page with an updated revision date. Continued use of our products constitutes
                                acceptance of any modifications.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-xl font-semibold text-brown mb-3">8. Contact</h2>
                            <p>
                                If you have any questions about these Terms, please contact us at{' '}
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
