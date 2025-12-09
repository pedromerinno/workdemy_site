'use client'

import { motion } from 'framer-motion'
import { Brain, Sparkles, MessageCircle, FileQuestion, BarChart, Zap, Check, TrendingUp } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'
import { cn } from '@/lib/utils'
import { SectionTitle } from './ui/section-title'
import { HorizontalScrollCarousel } from './ui/horizontal-scroll-carousel'

export default function RecursosPrincipais() {
  const t = useTranslations()
  
  const recursos = [
    {
      titulo: t.recursos.iaCorporativa.title,
      descricao: t.recursos.iaCorporativa.description,
      visual: 'brain',
      icon: Brain,
      color: '#CB6F01',
    },
    {
      titulo: t.recursos.assistente24h.title,
      descricao: t.recursos.assistente24h.description,
      visual: 'assistant',
      icon: MessageCircle,
      color: '#CB6F01',
    },
    {
      titulo: t.recursos.quizzes.title,
      descricao: t.recursos.quizzes.description,
      visual: 'quiz',
      icon: FileQuestion,
      color: '#CB6F01',
    },
    {
      titulo: t.recursos.dashboards.title,
      descricao: t.recursos.dashboards.description,
      visual: 'dashboard',
      icon: BarChart,
      color: '#CB6F01',
    },
    {
      titulo: t.recursos.onboardingAcelerado.title,
      descricao: t.recursos.onboardingAcelerado.description,
      visual: 'onboarding',
      icon: Zap,
      color: '#CB6F01',
    },
  ]

  const renderVisual = (type: string, color: string) => {
    switch (type) {
      case 'brain':
        return (
          <div className="relative w-full h-64 xl:h-72 flex items-center justify-center">
            <div className="relative w-full max-w-[320px]">
              <div className="relative mx-auto w-32 h-32 xl:w-40 xl:h-40 bg-white rounded-2xl border border-[#E8E8E8] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Brain className="w-16 h-16 xl:w-20 xl:h-20" style={{ color }} />
              </div>
              <div className="absolute -left-5 top-5 w-24 h-24 xl:w-28 xl:h-28 bg-white rounded-xl border border-[#E8E8E8] transform rotate-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}></div>
              </div>
              <div className="absolute -right-5 top-5 w-24 h-24 xl:w-28 xl:h-28 bg-white rounded-xl border border-[#E8E8E8] transform -rotate-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}></div>
              </div>
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                <line x1="20%" y1="30%" x2="50%" y2="50%" stroke={color} strokeWidth="2" strokeOpacity="0.2" />
                <line x1="80%" y1="30%" x2="50%" y2="50%" stroke={color} strokeWidth="2" strokeOpacity="0.2" />
              </svg>
            </div>
          </div>
        )
      
      case 'creation':
        return (
          <div className="relative w-full h-64 xl:h-72">
            <div className="relative h-full flex items-center justify-center gap-5">
              <div className="bg-white rounded-xl p-5 xl:p-6 border border-[#E8E8E8] transform rotate-2 z-10 group-hover:scale-105 transition-transform duration-300">
                <div className="h-3 bg-[#4F4F4F]/20 rounded w-32 mb-3"></div>
                <div className="h-3 bg-[#4F4F4F]/10 rounded w-26"></div>
              </div>
              <div className="flex flex-col items-center gap-2.5">
                <Sparkles className="w-9 h-9 xl:w-10 xl:h-10" style={{ color }} />
                <div className="w-16 h-1.5 rounded-full" style={{ backgroundColor: `${color}30` }}></div>
              </div>
              <div className="bg-white rounded-xl p-5 xl:p-6 border border-[#E8E8E8] transform -rotate-1 z-10 group-hover:scale-105 transition-transform duration-300">
                <div className="h-3 rounded w-36 mb-3" style={{ backgroundColor: `${color}30` }}></div>
                <div className="h-3 rounded w-32 mb-2.5" style={{ backgroundColor: `${color}25` }}></div>
                <div className="h-2.5 rounded w-28" style={{ backgroundColor: `${color}20` }}></div>
              </div>
            </div>
          </div>
        )
      
      case 'assistant':
        return (
          <div className="relative w-full h-64 xl:h-72 space-y-4">
            <div className="bg-white rounded-xl p-6 xl:p-7 border border-[#E8E8E8]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: color }}>
                  <MessageCircle className="w-6 h-6 xl:w-7 xl:h-7 text-white" />
                </div>
                <div className="flex-1 space-y-2.5">
                  <div className="h-3.5 bg-[#4F4F4F]/20 rounded w-full"></div>
                  <div className="h-3.5 bg-[#4F4F4F]/10 rounded w-3/4"></div>
                </div>
              </div>
            </div>
            <div className="rounded-xl p-6 xl:p-7 ml-14" style={{ backgroundColor: `${color}10` }}>
              <div className="h-3.5 rounded w-5/6 mb-2.5" style={{ backgroundColor: `${color}40` }}></div>
              <div className="h-3.5 rounded w-4/5" style={{ backgroundColor: `${color}30` }}></div>
            </div>
          </div>
        )
      
      case 'quiz':
        return (
          <div className="relative w-full h-64 xl:h-72 space-y-4">
            <div className="bg-white rounded-xl p-6 xl:p-7 border border-[#E8E8E8]">
              <div className="flex items-center justify-between mb-4">
                <div className="h-3.5 bg-[#4F4F4F]/30 rounded w-1/2"></div>
                <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: `${color}10` }}>
                  <Check className="w-5 h-5 xl:w-6 xl:h-6" style={{ color }} />
                  <span className="text-sm xl:text-base font-semibold" style={{ color }}>100%</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-3 rounded w-full" style={{ backgroundColor: `${color}20` }}></div>
                <div className="h-3 rounded w-3/4" style={{ backgroundColor: `${color}30` }}></div>
                <div className="h-3 bg-[#4F4F4F]/10 rounded w-5/6"></div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 xl:p-5 border border-[#E8E8E8] flex items-center gap-3.5">
              <div className="w-7 h-7 xl:w-8 xl:h-8 rounded border-2 flex items-center justify-center" style={{ borderColor: color }}>
                <Check className="w-5 h-5 xl:w-6 xl:h-6" style={{ color }} />
              </div>
              <div className="h-3 bg-[#4F4F4F]/20 rounded flex-1"></div>
            </div>
          </div>
        )
      
      case 'dashboard':
        return (
          <div className="relative w-full h-64 xl:h-72">
            <div className="bg-white rounded-xl p-6 xl:p-7 border border-[#E8E8E8] h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="h-3.5 bg-[#4F4F4F]/30 rounded w-1/3"></div>
                <div className="flex items-center gap-2.5 text-sm xl:text-base font-semibold" style={{ color }}>
                  <TrendingUp className="w-5 h-5 xl:w-6 xl:h-6" />
                  +85%
                </div>
              </div>
              <div className="relative h-40 xl:h-44">
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-2.5 h-full">
                  {[35, 55, 75, 100, 60].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t transition-all duration-300 group-hover:opacity-90"
                      style={{
                        height: `${height}%`,
                        background: `linear-gradient(to top, ${color}, ${color}40)`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'onboarding':
        return (
          <div className="relative w-full h-64 xl:h-72">
            <div className="bg-white rounded-xl p-6 xl:p-7 border border-[#E8E8E8] h-full">
              <div className="flex items-center justify-between mb-5">
                <div className="h-3.5 bg-[#4F4F4F]/30 rounded w-1/2"></div>
                <div className="rounded-full px-4 py-2" style={{ backgroundColor: `${color}10` }}>
                  <span className="text-sm xl:text-base font-semibold" style={{ color }}>70% mais rápido</span>
                </div>
              </div>
              <div className="space-y-4">
                {[true, true, false].map((completed, i) => (
                  <div key={i} className="flex items-center gap-3.5">
                    <div
                      className="w-7 h-7 xl:w-8 xl:h-8 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: completed ? color : 'transparent',
                        border: `2px solid ${color}${completed ? '' : '30'}`,
                      }}
                    >
                      {completed && <Check className="w-5 h-5 xl:w-6 xl:h-6 text-white" />}
                    </div>
                    <div
                      className="h-3 rounded flex-1 transition-all duration-300"
                      style={{
                        backgroundColor: completed ? `${color}20` : '#4F4F4F10',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <section
      id="recursos"
      className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#FAFAF9' }}
    >
      <div className="w-full">
        {/* Header Section */}
        <div className="container mx-auto max-w-7xl">
          <div className="[&>div]:!mb-16 [&>div]:lg:!mb-24 [&>div]:!mt-12 [&>div]:lg:!mt-16">
            <SectionTitle
              as="h2"
              size="sm"
              align="center"
              weight="bold"
              subtitle={t.recursos.subtitle}
              subtitleClassName="text-[#4F4F4F] mt-6"
              animated
            >
              {t.recursos.title}
            </SectionTitle>
          </div>
        </div>

        {/* Horizontal Scroll Carousel with Animation */}
        <div className="mt-8 lg:mt-12 -mx-4 sm:-mx-6 lg:-mx-8">
          <HorizontalScrollCarousel height="250vh">
            {/* Espaçador inicial menor para começar com o primeiro card visível */}
            <div className="w-[50vw] sm:w-[40vw] lg:w-[30vw] flex-shrink-0" />
            {recursos.map((recurso, index) => {
              const Icon = recurso.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className={cn(
                    "group relative rounded-2xl p-6 xl:p-8 shadow-sm",
                    "border border-[#E0E0E0]/50",
                    "hover:shadow-xl hover:-translate-y-1 hover:border-[#D0D0D0]",
                    "transition-all duration-500 ease-out",
                    "flex flex-col",
                    "bg-white",
                    "w-[90vw] sm:w-[85vw] lg:w-[80vw] xl:w-[75vw] max-w-[600px] flex-shrink-0",
                    "h-[480px] sm:h-[520px] lg:h-[560px]"
                  )}
                >
                  {/* Icon Badge */}
                  <div className="mb-4 xl:mb-5">
                    <div
                      className="w-12 h-12 xl:w-14 xl:h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${recurso.color}10` }}
                    >
                      <Icon className="w-6 h-6 xl:w-7 xl:h-7" style={{ color: recurso.color }} />
                    </div>
                  </div>

                  {/* Visual Preview */}
                  <div className="mb-auto min-h-[240px] xl:min-h-[280px]">
                    {renderVisual(recurso.visual, recurso.color)}
                  </div>

                  {/* Content */}
                  <div className="mt-auto pt-4 xl:pt-6">
                    <h3 className="text-base xl:text-lg font-semibold text-[#1A1A1A] mb-2 xl:mb-3 leading-tight tracking-tight">
                      {recurso.titulo}
                    </h3>
                    <p className="text-sm xl:text-[15px] text-[#4F4F4F] leading-relaxed">
                      {recurso.descricao}
                    </p>
                  </div>
                </motion.div>
              )
            })}
            {/* Espaçador final menor para terminar com o último card visível */}
            <div className="w-[50vw] sm:w-[40vw] lg:w-[30vw] flex-shrink-0" />
          </HorizontalScrollCarousel>
        </div>
      </div>
    </section>
  )
}

