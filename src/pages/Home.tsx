import { motion } from 'framer-motion'
import {
    BookOpen,
    Shield,
    ArrowRight,
    Users,
    AlertCircle,
    CheckCircle2,
    Sparkles,
    GraduationCap
} from 'lucide-react'

export default function Home() {
    return (
        <div className="min-h-screen bg-brand-navy flex flex-col font-archivo text-white">
            {/* Barra superior de navegación institucional */}
            <header className="border-b border-brand-border/60 bg-brand-navy/90 backdrop-blur sticky top-0 z-50 px-6 py-4">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-brand-surface border border-brand-border">
                            <Shield className="text-brand-yellow" size={26} />
                        </div>
                        <div>
                            <span className="text-xs text-brand-turquoise font-semibold uppercase tracking-wider block">
                                Gerencia de Educación y Convivencia Vial
                            </span>
                            <span className="text-base font-bold text-white tracking-tight">
                                Plataforma Educativa Institucional
                            </span>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-6 text-sm">
                        <a href="#recursos" className="text-white hover:text-brand-turquoise transition-colors font-medium">
                            Recursos
                        </a>
                        <a href="#convivencia" className="text-white hover:text-brand-turquoise transition-colors font-medium">
                            Convivencia Vial
                        </a>
                        <button className="btn-primary py-2 px-5 text-xs">
                            Acceso Directo
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex-1">
                <section className="relative px-6 py-20 md:py-28 overflow-hidden">
                    {/* Acento decorativo sutil en turquesa menta */}
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-turquoise/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        {/* Subtítulo / Elemento de guía con Turquesa Menta */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-surface border border-brand-turquoise/40 mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-brand-turquoise animate-pulse" />
                            <span className="text-xs font-semibold text-brand-turquoise uppercase tracking-widest">
                                Programa Oficial de Capacitación y Convivencia
                            </span>
                        </motion.div>

                        {/* Título principal sobre fondo oscuro: Archivo Bold en Blanco (#FFFFFF) */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
                        >
                            Gerencia de Educación y{' '}
                            <span className="text-brand-yellow inline-block">Convivencia Vial</span>
                        </motion.h1>

                        {/* Subtítulo jerárquico en Turquesa Menta (#8DE2D6) */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl sm:text-2xl font-semibold text-brand-turquoise mb-6"
                        >
                            Formación integral para una movilidad segura y responsable
                        </motion.h2>

                        {/* Párrafo / Cuerpo de texto: Archivo Regular en Blanco (#FFFFFF) */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-normal leading-relaxed"
                        >
                            Accedé a herramientas pedagógicas, guías normativas, material interactivo y cursos diseñados
                            para promover la seguridad, la empatía y la convivencia en el espacio público.
                        </motion.p>

                        {/* Botones de acción respetando criterios de contraste */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            {/* Botón Principal (Amarillo cálido con texto Azul profundo) */}
                            <button className="btn-primary w-full sm:w-auto">
                                <BookOpen size={18} />
                                Ingresar a los Recursos
                            </button>

                            {/* Botón Secundario (Borde y acento Turquesa menta) */}
                            <button className="btn-secondary w-full sm:w-auto">
                                Ver Normativa y Guías
                                <ArrowRight size={18} />
                            </button>
                        </motion.div>
                    </div>
                </section>

                {/* Línea divisoria en Turquesa menta (#8DE2D6) */}
                <div className="max-w-5xl mx-auto px-6">
                    <div className="divider-mint" />
                </div>

                {/* Sección de Recursos y Tarjetas Clave */}
                <section id="recursos" className="px-6 py-20 max-w-6xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <span className="text-xs font-semibold text-brand-turquoise uppercase tracking-widest block mb-2">
                            Módulos Institucionales
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Recursos y Ejes de Formación
                        </h2>
                        <p className="text-white/85 text-base font-normal">
                            Contenidos estructurados para docentes, inspectores, conductores y peatones.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* 1. TARJETA CLAVE / ALERTA (Fondo Amarillo cálido #FFC600 - Título Archivo Black Azul profundo #153244) */}
                        <div className="card-highlight flex flex-col justify-between">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#153244]/10 text-brand-navy text-xs font-bold uppercase tracking-wider mb-4">
                                    <Sparkles size={14} className="text-brand-navy" />
                                    Módulo Destacado
                                </div>
                                <h3 className="font-archivo font-black text-brand-navy text-2xl mb-3">
                                    Nuevos Protocolos de Convivencia Vial
                                </h3>
                                <p className="font-archivo font-normal text-brand-navy text-sm leading-relaxed mb-6">
                                    Actualización prioritaria sobre normas de prioridad peatonal, zonas 30 y convivencia
                                    armónica entre ciclistas y vehículos motorizados.
                                </p>
                            </div>
                            <button className="w-full bg-brand-navy text-white font-archivo font-bold py-3 px-6 rounded-lg uppercase tracking-wider text-xs hover:bg-[#1C3E54] transition-colors flex items-center justify-center gap-2">
                                Descargar Guía Prioritaria
                                <ArrowRight size={16} />
                            </button>
                        </div>

                        {/* 2. TARJETA BASE (Fondo Azul Superficie #1B3E54 - Subtítulo Turquesa Menta - Título Blanco) */}
                        <div className="card-base flex flex-col justify-between">
                            <div>
                                <div className="p-3 w-fit rounded-lg bg-brand-navy/60 border border-brand-border mb-4 text-brand-turquoise">
                                    <GraduationCap size={24} />
                                </div>
                                <h4 className="text-xs font-semibold text-brand-turquoise uppercase tracking-wider mb-1">
                                    Programa Pedagógico
                                </h4>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    Educación Vial para Escuelas
                                </h3>
                                <p className="text-white/85 text-sm font-normal leading-relaxed mb-6">
                                    Planes curriculares, secuencias didácticas y dinámicas lúdicas para los niveles inicial,
                                    primario y secundario.
                                </p>
                                <ul className="space-y-2 mb-6 text-sm">
                                    <li className="flex items-center">
                                        <span className="bullet-mint" />
                                        <span>Guías docentes por grado</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bullet-mint" />
                                        <span>Fichas de actividades interactivas</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bullet-mint" />
                                        <span>Talleres de seguridad vial</span>
                                    </li>
                                </ul>
                            </div>
                            <button className="btn-secondary w-full text-xs">
                                Explorar Material
                            </button>
                        </div>

                        {/* 3. TARJETA BASE (Fondo Azul Superficie #1B3E54 - Subtítulo Turquesa Menta - Título Blanco) */}
                        <div className="card-base flex flex-col justify-between">
                            <div>
                                <div className="p-3 w-fit rounded-lg bg-brand-navy/60 border border-brand-border mb-4 text-brand-turquoise">
                                    <Users size={24} />
                                </div>
                                <h4 className="text-xs font-semibold text-brand-turquoise uppercase tracking-wider mb-1">
                                    Convivencia Urbana
                                </h4>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    Movilidad Ciudadana
                                </h3>
                                <p className="text-white/85 text-sm font-normal leading-relaxed mb-6">
                                    Campañas de concientización, recomendaciones para conductores de transporte y
                                    fomento del respeto mutuo.
                                </p>
                                <ul className="space-y-2 mb-6 text-sm">
                                    <li className="flex items-center">
                                        <span className="bullet-mint" />
                                        <span>Protocolos para ciclistas</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bullet-mint" />
                                        <span>Derechos del peatón</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bullet-mint" />
                                        <span>Manual de señales viales</span>
                                    </li>
                                </ul>
                            </div>
                            <button className="btn-secondary w-full text-xs">
                                Ver Recursos
                            </button>
                        </div>
                    </div>
                </section>

                {/* Sección de Principios y Guía de Convivencia */}
                <section id="convivencia" className="px-6 py-16 bg-brand-surface/40 border-y border-brand-border/50">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-xs font-semibold text-brand-turquoise uppercase tracking-widest block mb-2">
                                    Criterios Fundamentales
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                                    Compromiso Institucional con la Seguridad Vial
                                </h2>
                                <p className="text-white/90 text-base font-normal leading-relaxed mb-6">
                                    Promovemos una visión humana e inclusiva de la vía pública, donde cada participante del
                                    tránsito asume la responsabilidad de cuidar la vida propia y ajena.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1">
                                            <CheckCircle2 className="text-brand-turquoise" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-base font-semibold text-brand-turquoise">
                                                Jerarquía de Movilidad
                                            </h4>
                                            <p className="text-white/80 text-sm font-normal">
                                                Prioridad incondicional al peatón y usuarios de movilidad activa.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="mt-1">
                                            <CheckCircle2 className="text-brand-turquoise" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-base font-semibold text-brand-turquoise">
                                                Educación Temprana y Continua
                                            </h4>
                                            <p className="text-white/80 text-sm font-normal">
                                                Formación desde el aula con impacto multiplicador en la familia.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="mt-1">
                                            <CheckCircle2 className="text-brand-turquoise" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-base font-semibold text-brand-turquoise">
                                                Cultura del Cuidado Colectivo
                                            </h4>
                                            <p className="text-white/80 text-sm font-normal">
                                                La convivencia vial se construye desde el respeto y la empatía mutua.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tarjeta de Aviso / Llamado a la Acción Institucional */}
                            <div className="card-base border-brand-turquoise/40 relative">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-turquoise/10 text-brand-turquoise text-xs font-semibold uppercase tracking-wider mb-4">
                                    <AlertCircle size={15} />
                                    Canal de Atención Institucional
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    ¿Necesitás coordinar capacitaciones para tu institución?
                                </h3>
                                <p className="text-white/85 text-sm font-normal leading-relaxed mb-6">
                                    Coordinamos jornadas presenciales y virtuales de concientización, talleres interactivos y
                                    distribución de material pedagógico para escuelas, organizaciones y empresas.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button className="btn-primary flex-1">
                                        Solicitar Capacitación
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer Institucional */}
            <footer className="border-t border-brand-border px-6 py-10 bg-brand-navy">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <Shield className="text-brand-yellow" size={24} />
                        <div>
                            <p className="text-xs font-semibold text-brand-turquoise uppercase tracking-wider">
                                Gerencia de Educación y Convivencia Vial
                            </p>
                            <p className="text-sm font-bold text-white">
                                Plataforma de Recursos Institucionales
                            </p>
                        </div>
                    </div>

                    <p className="text-white/60 text-xs font-normal text-center md:text-right">
                        &copy; {new Date().getFullYear()} Todos los derechos reservados. Diseñado bajo las normas y manual de estilo institucional.
                    </p>
                </div>
            </footer>
        </div>
    )
}
