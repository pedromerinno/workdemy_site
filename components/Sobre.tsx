'use client'

import { motion } from 'framer-motion'
import { Award, Users, Target } from 'lucide-react'

const stats = [
  { icon: Users, value: '500+', label: 'Alunos ativos' },
  { icon: Award, value: '5 anos', label: 'De experiência' },
  { icon: Target, value: '95%', label: 'Taxa de satisfação' },
]

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-[#F5F5E8] border-x-2 border-black"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-black tracking-tight">
              Sobre a Workdemy
            </h2>

            <div className="space-y-5 text-lg text-black/60 leading-relaxed">
              <p>
                Identificamos que profissionais talentosos enfrentam dificuldades
                para encontrar educação de qualidade que realmente prepare para o
                mercado de trabalho atual. Cursos desatualizados, conteúdo teórico
                demais e falta de prática real são problemas comuns.
              </p>
              <p>
                Criamos a Workdemy para resolver isso: uma plataforma focada em
                cursos práticos, com conteúdo sempre atualizado e professores que
                são profissionais atuantes no mercado. Aqui, você aprende fazendo,
                não apenas assistindo.
              </p>
              <p>
                Nosso diferencial está na combinação de metodologia prática,
                suporte personalizado e uma comunidade ativa de alunos e
                profissionais. Não vendemos apenas cursos, construímos carreiras.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-black">
                    {stat.value}
                  </div>
                  <div className="text-sm text-black/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-black rounded-full mx-auto flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-black/60">Equipe Workdemy</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

