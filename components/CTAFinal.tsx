'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTAFinal() {
  return (
    <section 
      className="px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[800px] m-4 sm:m-6 lg:m-8 rounded-3xl"
      style={{
        backgroundImage: 'url(/assets/IMG_001.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto max-w-3xl absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-full pb-8 lg:pb-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 sm:p-10 lg:p-12"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-6">
            {/* Informação à esquerda */}
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 tracking-tight leading-tight">
                Transforme seus processos em aprendizado vivo com a IA da Workdemy.
              </h2>
            </div>

            {/* Botão à direita */}
            <div className="flex-shrink-0">
              <button className="px-6 py-3 bg-[#BF7529] text-white rounded-full font-semibold text-sm hover:bg-[#BF7529]/90 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 whitespace-nowrap">
                <span>Agendar uma demonstração</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
