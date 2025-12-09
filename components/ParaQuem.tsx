'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'
import { AnimatedTitle } from './ui/animated-title'

export default function ParaQuem() {
  const t = useTranslations()
  
  const perfis = [
    {
      titulo: t.paraQuem.rh.title,
      descricao: t.paraQuem.rh.description,
      imagem: '/assets/Profissionais/profissionais_01.jpg',
    },
    {
      titulo: t.paraQuem.lideres.title,
      descricao: t.paraQuem.lideres.description,
      imagem: '/assets/Profissionais/profissionais_02.jpg',
    },
    {
      titulo: t.paraQuem.operacoes.title,
      descricao: t.paraQuem.operacoes.description,
      imagem: '/assets/Profissionais/profissionais_03.jpg',
    },
  ]

  return (
    <section
      id="para-quem"
      className="py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-[1400px]">
        {/* Título Principal */}
        <AnimatedTitle
          as="h2"
          size="md"
          align="left"
          weight="bold"
          subtitle={t.paraQuem.subtitle}
          subtitleClassName="text-[#4F4F4F] mt-6"
          animated
          className="max-w-4xl"
        >
          {t.paraQuem.title}
        </AnimatedTitle>

        {/* Grid de 3 Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {perfis.map((perfil, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Imagem Landscape */}
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={perfil.imagem}
                  alt={perfil.titulo}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 lg:p-8 flex flex-col flex-grow">
                <h3 className="text-xl lg:text-2xl font-bold text-black mb-3">
                  {perfil.titulo}
                </h3>
                <p className="text-base text-black/60 leading-relaxed mb-6 flex-grow">
                  {perfil.descricao}
                </p>
                
                {/* Link "Saiba mais" */}
                <a
                  href="#recursos"
                  className="inline-flex items-center gap-2 text-[#CB6F01] font-medium hover:gap-3 transition-all group self-start text-base"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

