'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Brain, Network, GraduationCap, TrendingUp } from 'lucide-react'
import { SectionTitle } from './ui/section-title'

const diferencas = [
  {
    icon: Brain,
    title: 'Aprende',
    description: 'A IA absorve documentos, fluxos, vídeos, políticas internas, playbooks, normas operacionais.',
  },
  {
    icon: Network,
    title: 'Estrutura',
    description: 'Transforma tudo em trilhas de aprendizado coerentes por área, cargo e senioridade.',
  },
  {
    icon: GraduationCap,
    title: 'Ensina',
    description: 'Explica processos aos colaboradores como se fosse um instrutor interno experiente.',
  },
  {
    icon: TrendingUp,
    title: 'Evolui',
    description: 'Quanto mais conteúdos você envia, mais a IA se especializa na realidade da empresa.',
  },
]

export default function AGrandeDiferenca() {
  return (
    <section
      id="diferenca"
      className="py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#F7F6F3' }}
    >
      <div className="container mx-auto">
        <SectionTitle
          as="h2"
          size="md"
          align="center"
          weight="bold"
          animated
          subtitle="IA treinada com o DNA da sua empresa"
          className="text-beige-900"
          subtitleClassName="text-beige-800"
        >
          Uma IA que entende os seus processos melhor do que qualquer manual.
        </SectionTitle>

        {/* App Screenshot Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-beige-200/50 bg-white">
            <Image
              src="/assets/IMG_04.png"
              alt="Interface Workdemy - IA que aprende com seus processos"
              width={1600}
              height={1000}
              className="w-full h-auto object-contain"
              quality={95}
            />
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {diferencas.map((diferenca, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-xl p-8 lg:p-10 border border-beige-200/50 hover:border-beige-400/50 hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-beige rounded-lg flex items-center justify-center mb-6">
                <diferenca.icon className="w-8 h-8 text-beige-800" />
              </div>
              <h3 className="text-2xl font-bold text-beige-900 mb-4">
                {diferenca.title}
              </h3>
              <p className="text-beige-800 leading-relaxed text-base">
                {diferenca.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

