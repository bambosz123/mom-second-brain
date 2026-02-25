import { motion } from 'framer-motion';
import { Download, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Success() {
    // 💡 TUTAJ WKLEJ SWÓJ LINK DO GOOGLE DRIVE LUB BEZPOŚREDNI DO PDF:
    const pdfDownloadLink = "https://drive.google.com/your-pdf-download-link";

    return (
        <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 text-center">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8 mx-auto"
            >
                <CheckCircle className="w-10 h-10 text-green-500" />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-serif text-4xl sm:text-5xl font-bold text-brown mb-4"
            >
                Płatność zakończona sukcesem!
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-brown-muted text-lg max-w-lg mb-10"
            >
                Dziękujemy za zakup Mom's Second Brain PDF Planner. Twój produkt jest gotowy do pobrania poniżej.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-taupe-light/20 w-full max-w-md"
            >
                <h3 className="text-xl font-semibold text-brown mb-2">Twój Planner (PDF)</h3>
                <p className="text-sm text-brown-light mb-6">Pobierz plik, a następnie zaimportuj go do GoodNotes lub wydrukuj.</p>

                <a
                    href={pdfDownloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-brown text-cream py-4 rounded-xl hover:bg-brown-dark transition-colors font-medium mb-4"
                >
                    <Download size={20} />
                    Pobierz teraz
                </a>

                <p className="text-xs text-brown-muted text-left flex items-start gap-2 bg-cream-deeper p-3 rounded-lg">
                    <span className="text-gold text-lg leading-none">💡</span>
                    <span>Link do pobrania PDF został także wysłany prosto na Twój adres e-mail przez system Stripe.</span>
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12"
            >
                <Link to="/" className="text-sm font-medium text-brown-light hover:text-brown flex items-center gap-1 transition-colors">
                    Wróć na stronę główną <ArrowRight size={14} />
                </Link>
            </motion.div>
        </div>
    );
}
