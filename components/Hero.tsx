'use client'

import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToPlanos = () => {
    const element = document.querySelector('#planos')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
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
              className="flex items-center space-x-2 text-sm text-black/70"
            >
              <div className="h-px w-8 bg-black"></div>
              <ArrowRight className="w-4 h-4" />
              <span>Explore 14 dias grátis</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black leading-tight"
            >
              Transforme profissionais em especialistas com educação de{' '}
              <span className="text-accent">qualidade</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-black/70 leading-relaxed max-w-xl"
            >
              Plataforma de educação online com cursos práticos, atualizados e
              focados em resultados reais para sua carreira.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a
                href="https://app.workdemy.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#CB6F01] text-white rounded-lg font-medium hover:bg-[#CB6F01]/90 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <span>Começar agora</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <button className="flex items-center space-x-2 text-black hover:text-accent transition-colors group">
                <div className="w-12 h-12 rounded-full bg-black/10 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                <span className="font-medium underline underline-offset-4">
                  Ver demonstração
                </span>
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center space-x-6 pt-4"
            >
              <div className="text-sm text-black/60">
                <span className="text-2xl font-bold text-black">+500</span>
                <br />
                <span>Alunos ativos</span>
              </div>
              <div className="h-12 w-px bg-black/20"></div>
              <div className="text-sm text-black/60">
                <span className="text-2xl font-bold text-black">4.9/5</span>
                <br />
                <span>Avaliação média</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              {/* Placeholder for main image */}
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-black rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">W</span>
                  </div>
                  <p className="text-black/60 text-sm">Plataforma Workdemy</p>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-4 -left-4 bg-black text-white rounded-xl p-4 shadow-xl max-w-[200px]"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Controle seu progresso
                    </p>
                    <p className="text-xs text-white/80">
                      Acompanhe em tempo real
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-xl"
              >
                <ArrowRight className="w-8 h-8 text-white rotate-[-45deg]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -right-8 top-1/2 -translate-y-1/2 text-right"
              >
                <div className="text-4xl font-bold text-black">70k+</div>
                <div className="text-sm text-black/60">Downloads</div>
                <div className="mt-2 text-2xl">📈</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

