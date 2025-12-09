'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionTitle } from './ui/section-title'
import { useTranslations } from '@/hooks/useTranslations'

export default function FAQ() {
  const t = useTranslations()
  const faqs = t.faq.items
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#F6F5F2' }}
    >
      <div className="container mx-auto max-w-3xl">
        <SectionTitle
          as="h2"
          size="sm"
          align="center"
          weight="bold"
          animated
        >
          {t.faq.title}
        </SectionTitle>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="bg-white rounded-xl border border-beige-200/50 hover:border-beige-400/50 overflow-hidden transition-all"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-beige transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-beige-900 pr-4">
                  {faq.pergunta}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-beige-800 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-beige-800 leading-relaxed">
                      {faq.resposta}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
