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
    id: 'doordash',
    companyName: 'DoorDash',
    companyLogo: 'DOORDASH',
    quote: 'A Workdemy transformou minha carreira. Em 3 meses consegui uma promoção e aumento de 40%. Os cursos são práticos e realmente preparam para o mercado.',
    author: 'Maria Silva',
    role: 'Vice President of Finance',
    company: 'DoorDash',
    image: '/assets/features/features_01.jpg',
    caseStudyUrl: '#',
  },
  {
    id: 'seatgeek',
    companyName: 'SeatGeek',
    companyLogo: 'SEATGEEK',
    quote: 'Melhor investimento que fiz na minha educação. Conteúdo atualizado, professores que realmente entendem do mercado e suporte excepcional.',
    author: 'João Santos',
    role: 'Product Manager',
    company: 'SeatGeek',
    image: '/assets/features/features_02.jpg',
    caseStudyUrl: '#',
  },
  {
    id: 'lemonade',
    companyName: 'Lemonade',
    companyLogo: 'LEMONADE',
    quote: 'A flexibilidade de estudar no meu ritmo foi essencial. Consegui equilibrar trabalho, estudos e vida pessoal sem abrir mão da qualidade.',
    author: 'Ana Costa',
    role: 'UX Designer',
    company: 'Lemonade',
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
      className="py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#F7F6F3' }}
    >
      <div className="container mx-auto max-w-[1600px]">
        {/* Section Title */}
        <SectionTitle
          as="h2"
          size="md"
          align="center"
          weight="bold"
          subtitle={t.depoimentos.subtitle}
          subtitleClassName="text-gray-600"
        >
          {t.depoimentos.title}
        </SectionTitle>

        {/* Company Navigation */}
        <div className="flex items-center justify-center gap-10 sm:gap-14 md:gap-20 lg:gap-24 xl:gap-28 mb-12 mt-16 overflow-x-auto scrollbar-hide pb-2">
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
              <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] rounded-2xl overflow-hidden">
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
              <div className="flex flex-col justify-between p-6 sm:p-8 md:p-12 lg:p-16">
                <div>
                  {/* Company Logo */}
                  <div className="mb-10">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                        style={{ backgroundColor: '#E60012' }}
                      >
                        {currentTestimonial.companyLogo.charAt(0)}
                      </div>
                      <span
                        className="text-2xl md:text-3xl font-bold tracking-tight"
                        style={{ color: '#E60012' }}
                      >
                        {currentTestimonial.companyLogo}
                      </span>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 leading-[1.2] mb-8 md:mb-10">
                    "{currentTestimonial.quote}"
                  </blockquote>

                  {/* Attribution */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-8 md:mb-10">
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
        <div className="mt-20 flex items-center">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <div className="w-[40%] h-[1px] bg-[#FF6B35]"></div>
        </div>
      </div>
    </section>
  )
}
