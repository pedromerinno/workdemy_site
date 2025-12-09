'use client'

import { motion } from 'framer-motion'
import {
  Zap,
  Shield,
  Headphones,
  Clock,
  Users,
  Award,
  Smartphone,
  Globe,
} from 'lucide-react'
import { SectionTitle } from './ui/section-title'

const beneficiosUsuario = [
  {
    icon: Zap,
    title: 'Aprendizado rápido',
    description:
      'Metodologia focada em resultados práticos. Aprenda o que realmente importa para o mercado.',
  },
  {
    icon: Clock,
    title: 'Flexibilidade total',
    description:
      'Estude no seu ritmo, quando e onde quiser. Acesso 24/7 de qualquer dispositivo.',
  },
  {
    icon: Award,
    title: 'Certificados reconhecidos',
    description:
      'Receba certificados válidos que agregam valor real ao seu currículo.',
  },
  {
    icon: Smartphone,
    title: 'Aplicativo mobile',
    description:
      'Acesse todos os cursos pelo celular. Aprenda no transporte, na fila, em qualquer lugar.',
  },
]

const beneficiosNegocio = [
  {
    icon: Users,
    title: 'Treinamento de equipes',
    description:
      'Plataforma corporativa para capacitar sua equipe com cursos personalizados.',
  },
  {
    icon: Globe,
    title: 'Escalabilidade',
    description:
      'Treine dezenas ou milhares de colaboradores com a mesma qualidade e suporte.',
  },
  {
    icon: Shield,
    title: 'Segurança e privacidade',
    description:
      'Seus dados protegidos com criptografia de ponta e conformidade com LGPD.',
  },
  {
    icon: Headphones,
    title: 'Suporte dedicado',
    description:
      'Equipe especializada para ajudar você e sua equipe em cada etapa do aprendizado.',
  },
]

export default function Beneficios() {
  return (
    <section
      id="beneficios"
      className="py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#F9F8F5' }}
    >
      <div className="container mx-auto">
        <SectionTitle
          as="h2"
          size="md"
          align="center"
          animated
          subtitle="Tudo que você precisa para transformar sua carreira ou capacitar sua equipe"
          className="text-beige-900"
          subtitleClassName="text-beige-800"
        >
          Benefícios
        </SectionTitle>

        {/* Para Você */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-black mb-8 tracking-tight"
          >
            Para você
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficiosUsuario.map((beneficio, index) => (
              <motion.div
                key={beneficio.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl p-6 border border-black/5 hover:border-black/10 hover:shadow-md transition-all"
              >
                <beneficio.icon className="w-8 h-8 text-black mb-4" />
                <h4 className="text-xl font-semibold text-black mb-2">
                  {beneficio.title}
                </h4>
                <p className="text-black/60 leading-relaxed">
                  {beneficio.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Para seu negócio */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-black mb-8 tracking-tight"
          >
            Para o seu negócio
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficiosNegocio.map((beneficio, index) => (
              <motion.div
                key={beneficio.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl p-6 border border-black/5 hover:border-black/10 hover:shadow-md transition-all"
              >
                <beneficio.icon className="w-8 h-8 text-black mb-4" />
                <h4 className="text-xl font-semibold text-black mb-2">
                  {beneficio.title}
                </h4>
                <p className="text-black/60 leading-relaxed">
                  {beneficio.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

