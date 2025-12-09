'use client'

import Image from 'next/image'
import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroModern() {
  return (
    <section
      id="inicio"
      className="pt-32 pb-24 px-4 sm:px-6 lg:px-12 xl:px-16 bg-[#F5F5E8] border-x-2 border-black"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full"
            >
              <span className="text-sm font-medium text-black">
                ✨ Nova versão disponível
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black leading-tight tracking-tight"
            >
              Treine sua equipe com{' '}
              <span className="text-black/60 italic font-normal">inteligência</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-xl"
            >
              Uma plataforma que aprende com sua empresa e transforma conhecimento em treinamento inteligente, disponível 24 horas por dia para seus colaboradores.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-4 pt-2"
            >
              <a href="https://app.workdemy.com/signup" className="px-8 py-4 lg:px-10 lg:py-5 bg-[#BF7529] text-white rounded-lg font-semibold hover:bg-[#BF7529]/90 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg text-base lg:text-lg">
                <span>Começar agora</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <button className="px-8 py-4 lg:px-10 lg:py-5 bg-transparent border-2 border-[#BF7529] text-[#BF7529] rounded-lg font-semibold hover:bg-[#BF7529] hover:text-white transition-all flex items-center gap-2 text-base lg:text-lg">
                <Play className="w-5 h-5" />
                <span>Ver demonstração</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual with Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative w-full"
          >
            {/* Main App Screenshot - Estilo mais limpo */}
            <div className="relative mb-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-black/10 bg-white">
                <Image
                  src="/assets/IMG_01.png"
                  alt="Dashboard Workdemy - Interface principal da plataforma"
                  width={1400}
                  height={900}
                  className="w-full h-auto object-contain"
                  priority
                  quality={95}
                />
              </div>
            </div>

            {/* Stats Cards - Estilo mais limpo e espaçado */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-white border border-black/10 rounded-xl p-5 lg:p-6 text-center shadow-sm hover:shadow-lg hover:border-black/20 transition-all"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-2">
                  70%
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Menos tempo de onboarding
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="bg-white border border-black/10 rounded-xl p-5 lg:p-6 text-center shadow-sm hover:shadow-lg hover:border-black/20 transition-all"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Assistente disponível
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="bg-white border border-black/10 rounded-xl p-5 lg:p-6 text-center shadow-sm hover:shadow-lg hover:border-black/20 transition-all"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-2">
                  500+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Empresas ativas
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-20 pt-8 border-t border-black/20"
        >
          <p className="text-sm text-gray-600 text-center mb-6">
            Empresas que confiam na Workdemy
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap opacity-60">
            {['Empresa A', 'Empresa B', 'Empresa C', 'Empresa D', 'Empresa E'].map((empresa, index) => (
              <div key={index} className="text-lg font-semibold text-black">
                {empresa}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
