import { motion } from 'framer-motion'
import { BookOpen, Shield, ArrowRight } from 'lucide-react'

export default function Home() {
    return (
        <div className="min-h-screen bg-brand-navy flex flex-col">
            {/* Header */}
            <header className="border-b border-gray-700 px-6 py-4 flex items-center gap-4">
                <Shield className="text-brand-yellow" size={28} />
                <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-brand-body">
                        Gerencia de Educación y Convivencia Vial
                    </p>
                    <h1 className="text-lg text-white leading-tight not-italic tracking-normal normal-case font-brand-heading">
                        Plataforma Educativa
                    </h1>
                </div>
            </header>

            {/* Hero */}
            <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                >
                    <div className="inline-block bg-brand-yellow text-brand-navy px-4 py-1 text-xs font-bold uppercase tracking-widest mb-6 font-brand-body">
                        Educación Vial
                    </div>
                    <h2 className="text-5xl md:text-7xl text-white mb-6 leading-none">
                        Gerencia de<br />
                        <span className="text-brand-yellow">Educación</span><br />
                        y Convivencia Vial
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 font-brand-body max-w-xl mx-auto">
                        Formación vial de calidad para una ciudad más segura y una convivencia responsable en el tránsito.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="btn-primary flex items-center gap-2 justify-center">
                            <BookOpen size={18} />
                            Ingresar a la plataforma
                        </button>
                        <button className="border border-gray-600 text-white py-3 px-8 uppercase font-bold tracking-wider hover:border-brand-yellow hover:text-brand-yellow transition-all font-brand-body flex items-center gap-2 justify-center">
                            Más información
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-700 px-6 py-4 text-center">
                <p className="text-gray-500 text-xs font-brand-body uppercase tracking-widest">
                    Gerencia de Educación y Convivencia Vial &mdash; Plataforma Educativa
                </p>
            </footer>
        </div>
    )
}
