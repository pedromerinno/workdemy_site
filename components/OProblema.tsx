'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, Users, Clock, AlertCircle, TrendingUp, CheckCircle2, Sparkles } from 'lucide-react'
import { SectionTitle } from './ui/section-title'
import ScrollImageSequenceSequencia from './ScrollImageSequenceSequencia'
import { useTranslations } from '@/hooks/useTranslations'

export default function OProblema() {
  const t = useTranslations()
  
  const problemas = [
    {
      icon: FileText,
      texto: t.problema.problemas.processosGuardados,
      status: t.problema.status.critico,
    },
    {
      icon: Users,
      texto: t.problema.problemas.lideresRepetindo,
      status: t.problema.status.ineficiente,
    },
    {
      icon: Clock,
      texto: t.problema.problemas.onboardingLento,
      status: t.problema.status.lento,
    },
    {
      icon: AlertCircle,
      texto: t.problema.problemas.falhasOperacionais,
      status: t.problema.status.risco,
    },
    {
      icon: TrendingUp,
      texto: t.problema.problemas.dificuldadeEscalar,
      status: t.problema.status.escalabilidade,
    },
  ]
  return (
    <>
    <section
      id="problema"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#F9F8F5' }}
    >
      <div className="container mx-auto max-w-[1200px]">
        {/* Header Section */}
        <SectionTitle
          as="h2"
          size="sm"
          align="center"
          animated
          subtitle={t.problema.subtitle}
          subtitleClassName="text-gray-600 max-w-3xl"
          containerClassName="!mt-0 mb-20 lg:mb-28"
        >
          {t.problema.title}
        </SectionTitle>

        {/* Feature Blocks - Alternating Layout */}
        <div className="space-y-24 lg:space-y-32">
          {/* Block 1: Text Left, Visual Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Text Content */}
            <div className="space-y-5">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black leading-tight tracking-tight">
                {t.problema.conhecimentoFragmentado.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {t.problema.conhecimentoFragmentado.description}
              </p>
              <a 
                href="#solucao" 
                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-base transition-colors group"
              >
                {t.problema.conhecimentoFragmentado.link}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Visual Component */}
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                <div className="bg-white rounded-xl p-6 space-y-4 shadow-sm">
                  {/* Status Chips */}
                  <div className="flex gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-100 text-red-700 text-sm font-medium">
                      <AlertCircle className="w-4 h-4" />
                      {t.problema.status.fragmentado}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                      <FileText className="w-4 h-4" />
                      {t.problema.status.multiplasFontes}
                    </span>
                  </div>

                  {/* Problem Items */}
                  <div className="space-y-3 pt-2">
                    {problemas.slice(0, 3).map((problema, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center">
                          <problema.icon className="w-5 h-5 text-gray-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            {problema.texto}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Block 2: Visual Left, Text Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Visual Component */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                <div className="bg-white rounded-xl p-6 space-y-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-black">{t.problema.lideresDesperdicam.tempoGasto}</h4>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Editar">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between">
                      <span className="text-3xl font-bold text-black">40h</span>
                      <span className="text-lg text-gray-600">{t.problema.lideresDesperdicam.horasSemanais}</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#BF7529] rounded-full" style={{ width: '50%' }} />
                    </div>
                  </div>

                  {/* Status Chip */}
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4" />
                      {t.problema.status.ineficiente}
                    </span>
                  </div>

                  {/* Team Members */}
                  <div className="flex items-center gap-2 pt-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4A574] to-[#BF7529] border-2 border-white flex items-center justify-center text-white text-xs font-medium">
                          {i}
                        </div>
                      ))}
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="text-sm text-gray-600 ml-2">{t.problema.lideresDesperdicam.maisLideres}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-5 order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black leading-tight tracking-tight">
                {t.problema.lideresDesperdicam.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {t.problema.lideresDesperdicam.description}
              </p>
              <a 
                href="#solucao" 
                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-base transition-colors group"
              >
                {t.problema.lideresDesperdicam.link}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Block 3: Text Left, Visual Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Text Content */}
            <div className="space-y-5">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black leading-tight tracking-tight">
                {t.problema.onboardingLento.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {t.problema.onboardingLento.description}
              </p>
              <a 
                href="#solucao" 
                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-base transition-colors group"
              >
                {t.problema.onboardingLento.link}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Visual Component */}
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                <div className="bg-white rounded-xl p-6 space-y-4 shadow-sm">
                  {/* Status Chips */}
                  <div className="flex gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4" />
                      {t.problema.status.emProcesso}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                      <Sparkles className="w-4 h-4" />
                      {t.problema.status.onboarding}
                    </span>
                  </div>

                  {/* Expense/Item Example */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-black">{t.problema.onboardingLento.novoColaborador}</p>
                        <p className="text-sm text-gray-600">{t.problema.onboardingLento.semanasProdutividade}</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-black">6-8</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Solution CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-24 lg:mt-32 text-center"
        >
          <div className="bg-beige-50 rounded-3xl p-16 lg:p-24 border border-beige-200">
            <p className="text-2xl sm:text-3xl font-semibold text-black mb-4 max-w-4xl mx-auto">
              {t.problema.cta}
            </p>
          </div>
        </motion.div>
      </div>

    </section>

    {/* Image Sequence Section - Full Width - Outside container */}
    <ScrollImageSequenceSequencia />
    </>
  )
}

