'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { SectionTitle } from './ui/section-title'
import { useTranslations } from '@/hooks/useTranslations'
import { cn } from '@/lib/utils'

interface Testimonial {
  id: string
  companyName: string
  companyLogo: string
  quote: string
  author: string
  role: string
  company: string
  image: string
  caseStudyUrl?: string
}

const testimonials: Testimonial[] = [
  {
    id: 'merinno',
    companyName: 'MERINNO',
    companyLogo: 'MERINNO',
    quote: 'A Workdemy transformou minha carreira. Em 3 meses consegui uma promoção e aumento de 40%. Os cursos são práticos e realmente preparam para o mercado.',
    author: 'Maria Silva',
    role: 'Vice President of Finance',
    company: 'MERINNO',
    image: '/assets/features/features_01.jpg',
    caseStudyUrl: '#',
  },
  {
    id: 'izz-group',
    companyName: 'IZZ GROUP',
    companyLogo: 'IZZ GROUP',
    quote: 'Melhor investimento que fiz na minha educação. Conteúdo atualizado, professores que realmente entendem do mercado e suporte excepcional.',
    author: 'João Santos',
    role: 'Product Manager',
    company: 'IZZ GROUP',
    image: '/assets/features/features_02.jpg',
    caseStudyUrl: '#',
  },
  {
    id: '2btrust',
    companyName: '2BTRUST',
    companyLogo: '2BTRUST',
    quote: 'A flexibilidade de estudar no meu ritmo foi essencial. Consegui equilibrar trabalho, estudos e vida pessoal sem abrir mão da qualidade.',
    author: 'Ana Costa',
    role: 'UX Designer',
    company: '2BTRUST',
    image: '/assets/features/features_03.jpg',
    caseStudyUrl: '#',
  },
]

export default function Depoimentos() {
  const t = useTranslations()
  const [activeTestimonial, setActiveTestimonial] = useState<string>(testimonials[0].id)

  const currentTestimonial = testimonials.find((t) => t.id === activeTestimonial) || testimonials[0]

  return (
    <section
      id="depoimentos"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#F7F6F3' }}
    >
      <div className="container mx-auto max-w-[1600px]">
        {/* Section Title */}
        <SectionTitle
          as="h2"
          size="sm"
          align="center"
          weight="bold"
          subtitle={t.depoimentos.subtitle}
          subtitleClassName="text-gray-600"
          animated
        >
          {t.depoimentos.title}
        </SectionTitle>

        {/* Company Navigation */}
        <div className="flex items-center justify-center gap-20 sm:gap-28 md:gap-36 lg:gap-44 xl:gap-52 mb-12 mt-16 overflow-x-auto scrollbar-hide pb-2">
          {testimonials.map((testimonial) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveTestimonial(testimonial.id)}
              className={cn(
                'text-sm sm:text-base md:text-lg font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0',
                activeTestimonial === testimonial.id
                  ? 'text-black font-semibold'
                  : 'text-gray-500 hover:text-gray-700'
              )}
              aria-label={`Ver depoimento de ${testimonial.companyName}`}
              aria-pressed={activeTestimonial === testimonial.id}
            >
              {testimonial.companyName}
            </button>
          ))}
        </div>

        {/* Main Testimonial Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="bg-transparent rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-100/50"
          >
            <div className="grid md:grid-cols-[45%_55%] lg:grid-cols-[42%_58%] gap-4 md:gap-6">
              {/* Left Column - Image */}
              <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-full min-h-[350px] md:min-h-[420px] lg:min-h-[480px] rounded-2xl overflow-hidden">
                <Image
                  src={currentTestimonial.image}
                  alt={`${currentTestimonial.author} da ${currentTestimonial.company}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  priority={activeTestimonial === testimonials[0].id}
                />
              </div>

              {/* Right Column - Content */}
              <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12">
                <div>
                  {/* Quote */}
                  <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 leading-[1.2] mb-6 md:mb-8">
                    "{currentTestimonial.quote}"
                  </blockquote>

                  {/* Attribution */}
                  <p className="text-sm sm:text-base text-gray-500 mb-6 md:mb-8">
                    — {currentTestimonial.author}, {currentTestimonial.role},{' '}
                    {currentTestimonial.company}
                  </p>
                </div>

                {/* CTA Link */}
                {currentTestimonial.caseStudyUrl && (
                  <a
                    href={currentTestimonial.caseStudyUrl}
                    className="inline-flex items-center gap-2 text-base font-medium text-[#6366F1] hover:text-[#4F46E5] transition-colors duration-200 group w-fit mt-auto"
                    aria-label={`Ler o case completo de ${currentTestimonial.company}`}
                  >
                    Ler o case completo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Divider */}
        <div className="mt-12 flex items-center">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <div className="w-[40%] h-[1px] bg-[#FF6B35]"></div>
        </div>
      </div>
    </section>
  )
}
