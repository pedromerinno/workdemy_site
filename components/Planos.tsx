'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionTitle } from './ui/section-title'
import { useTranslations } from '@/hooks/useTranslations'

export default function Planos() {
  const t = useTranslations()
  
  const planos = [
    {
      nome: t.planos.starter.name,
      descricao: t.planos.starter.description,
      features: t.planos.starter.features,
      cta: t.planos.starter.cta,
      popular: false,
    },
    {
      nome: t.planos.growth.name,
      descricao: t.planos.growth.description,
      features: t.planos.growth.features,
      cta: t.planos.growth.cta,
      popular: true,
    },
    {
      nome: t.planos.enterprise.name,
      descricao: t.planos.enterprise.description,
      features: t.planos.enterprise.features,
      cta: t.planos.enterprise.cta,
      popular: false,
    },
  ]
  return (
    <section
      id="planos"
      className="py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#FAF9F6' }}
    >
      <div className="container mx-auto">
        <SectionTitle
          as="h2"
          size="md"
          align="center"
          weight="bold"
          subtitle={t.planos.subtitle}
          subtitleClassName="text-gray-600"
        >
          {t.planos.title}
        </SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {planos.map((plano, index) => (
            <motion.div
              key={plano.nome}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all ${
                plano.popular
                  ? 'border-[#BF7529] scale-105 shadow-xl'
                  : 'border-beige-200/50 hover:border-[#BF7529]/50'
              }`}
            >
              {plano.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#BF7529] text-white px-4 py-1 rounded-full text-sm font-medium">
                  {t.planos.growth.popular}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-3xl font-bold text-beige-900 mb-2">
                  {plano.nome}
                </h3>
                <p className="text-beige-800 mb-6">{plano.descricao}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plano.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-beige rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-beige-800 rounded-full" />
                    </div>
                    <span className="text-beige-800">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  plano.popular
                    ? 'bg-[#BF7529] text-white hover:bg-[#BF7529]/90'
                    : 'bg-white border-2 border-[#BF7529] text-[#BF7529] hover:bg-[#BF7529] hover:text-white'
                }`}
              >
                <span>{plano.cta}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
