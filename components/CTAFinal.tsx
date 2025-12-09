'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'

export default function CTAFinal() {
  const t = useTranslations()
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-beige-800 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {t.ctaFinal.title}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t.ctaFinal.description}
          </p>

          <div className="pt-8">
            <button className="px-12 py-5 bg-[#BF7529] text-white rounded-lg font-bold text-lg hover:bg-[#BF7529]/90 transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto">
              <span>{t.ctaFinal.button}</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
