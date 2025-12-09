'use client'

import { motion } from 'framer-motion'
import { TrendingDown, Shield, Users, Brain, Zap, Heart } from 'lucide-react'
import { SectionTitle } from './ui/section-title'
import { useTranslations } from '@/hooks/useTranslations'
import { cn } from '@/lib/utils'

export default function ResultadosEsperados() {
  const t = useTranslations()
  
  const resultados = [
    {
      icon: TrendingDown,
      texto: t.resultadosEsperados.items[0],
      color: '#BF7529',
      gradient: 'from-orange-50 to-amber-50',
    },
    {
      icon: Shield,
      texto: t.resultadosEsperados.items[1],
      color: '#10B981',
      gradient: 'from-emerald-50 to-teal-50',
    },
    {
      icon: Users,
      texto: t.resultadosEsperados.items[2],
      color: '#3B82F6',
      gradient: 'from-blue-50 to-cyan-50',
    },
    {
      icon: Brain,
      texto: t.resultadosEsperados.items[3],
      color: '#8B5CF6',
      gradient: 'from-purple-50 to-violet-50',
    },
    {
      icon: Zap,
      texto: t.resultadosEsperados.items[4],
      color: '#F59E0B',
      gradient: 'from-yellow-50 to-orange-50',
    },
    {
      icon: Heart,
      texto: t.resultadosEsperados.items[5],
      color: '#EC4899',
      gradient: 'from-pink-50 to-rose-50',
    },
  ]

  return (
    <section
      id="resultados"
      className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: '#F9F8F5' }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[length:32px_32px]" />
      
      <div className="relative container mx-auto max-w-6xl">
        <SectionTitle
          as="h2"
          size="md"
          align="center"
          weight="bold"
          animated
          subtitle={t.resultadosEsperados.subtitle}
          subtitleClassName="text-black/60 max-w-2xl"
        >
          {t.resultadosEsperados.title}
        </SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 mt-16 lg:mt-20">
          {resultados.map((resultado, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                delay: index * 0.08, 
                duration: 0.5,
                ease: [0.2, 0, 0.2, 1]
              }}
              whileHover={{ 
                y: -6,
                transition: { duration: 0.2 }
              }}
              className={cn(
                "group relative flex flex-col gap-5 sm:gap-6 p-8 sm:p-9 lg:p-10",
                "bg-white rounded-3xl border border-black/5",
                "shadow-sm hover:shadow-xl transition-all duration-300",
                "hover:border-black/10"
              )}
            >
              {/* Icon container with gradient background */}
              <div 
                className={cn(
                  "relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl",
                  "flex items-center justify-center",
                  "bg-gradient-to-br", resultado.gradient,
                  "shadow-sm group-hover:shadow-md transition-shadow duration-300",
                  "group-hover:scale-105 transition-transform duration-300"
                )}
              >
                <resultado.icon 
                  className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 relative z-10" 
                  style={{ color: resultado.color }}
                  strokeWidth={2}
                />
                
                {/* Subtle glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"
                  style={{ backgroundColor: resultado.color }}
                />
              </div>

              {/* Text content */}
              <p className="text-lg sm:text-xl lg:text-2xl text-black/80 font-semibold leading-relaxed tracking-tight">
                {resultado.texto}
              </p>

              {/* Decorative accent line */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  background: `linear-gradient(90deg, ${resultado.color}00, ${resultado.color}80, ${resultado.color}00)`
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

