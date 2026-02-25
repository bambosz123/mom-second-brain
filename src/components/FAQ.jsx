import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'Do I need a special app to use this?',
        answer:
            "Nope! Mom's Second Brain is a premium PDF planner. You can print it out and put it in a binder, or use it digitally on your tablet with any PDF annotation app like GoodNotes or Notability.",
    },
    {
        question: 'I\'m not tech-savvy. Is this hard to set up?',
        answer:
            'Not at all! The template comes with a step-by-step video walkthrough (under 10 minutes) that guides you through everything. If you can drag and drop, you can use this. Plus, our priority email support is here if you ever get stuck.',
    },
    {
        question: 'Can I customize it for my family\'s needs?',
        answer:
            "Absolutely — that's the beauty of our printable planner! You can print only the pages you need, as many times as you want, and arrange them in your binder to create YOUR perfect system.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 sm:py-28 bg-cream-dark relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-taupe-light/30 to-transparent" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="text-sm font-medium text-gold uppercase tracking-widest mb-3">
                        FAQ
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown">
                        Got questions? We've got answers.
                    </h2>
                </motion.div>

                {/* Accordion */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-4"
                >
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl border border-taupe-light/15 shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 rounded-2xl"
                                aria-expanded={openIndex === i}
                                aria-controls={`faq-answer-${i}`}
                            >
                                <span className="font-serif text-lg font-semibold text-brown pr-4">
                                    {faq.question}
                                </span>
                                <motion.span
                                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0"
                                >
                                    <ChevronDown size={20} className="text-brown-muted" />
                                </motion.span>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        id={`faq-answer-${i}`}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-brown-muted leading-relaxed text-[15px]">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
