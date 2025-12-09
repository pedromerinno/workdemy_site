'use client'

import { motion } from 'framer-motion'

const features = [
  {
    bgColor: 'bg-[#e3f2fd]',
    illustrationOnly: true,
  },
  {
    bgColor: 'bg-[#F5F5E8]',
    title: 'Design de Cursos',
    description: 'Design de cursos geralmente se refere aos aspectos de experiência do usuário do desenvolvimento de plataformas educacionais, focando na usabilidade e engajamento.',
  },
  {
    bgColor: 'bg-[#F5F5E8]',
    title: 'Transformação Digital',
    description: 'Transformação digital é a incorporação de tecnologias baseadas em computador nos produtos, processos e estratégias de uma organização educacional.',
  },
]

export default function FeatureCards() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F5E8] border-x-2 border-black">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`${feature.bgColor} rounded-2xl p-8`}
            >
              {feature.illustrationOnly ? (
                // 3D Illustration for first card
                <div className="relative w-full h-64 flex items-center justify-center">
                  <div className="relative" style={{ perspective: '1000px' }}>
                    {/* Frame structure - incomplete rectangular frame */}
                    <div className="relative w-48 h-48">
                      {/* Top horizontal bar */}
                      <div className="absolute top-0 left-0 w-32 h-3 bg-[#D4A574] rounded-full" style={{ transform: 'rotateX(15deg) rotateY(-5deg)' }} />
                      {/* Right vertical bar */}
                      <div className="absolute top-0 right-0 w-3 h-32 bg-beige-400 rounded-full" style={{ transform: 'rotateY(15deg) rotateX(5deg)' }} />
                      {/* Bottom horizontal bar (partial) */}
                      <div className="absolute bottom-0 left-0 w-24 h-3 bg-yellow-400 rounded-full" style={{ transform: 'rotateX(-15deg) rotateY(5deg)' }} />
                      {/* Left vertical bar (partial) */}
                      <div className="absolute top-0 left-0 w-3 h-24 bg-[#BF7529] rounded-full" style={{ transform: 'rotateY(-15deg) rotateX(-5deg)' }} />
                      
                      {/* Spheres at frame points */}
                      <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#BF7529] rounded-full shadow-lg" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-beige-500 rounded-full shadow-lg" />
                      <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-6 h-6 bg-beige-400 rounded-full shadow-lg" />
                      <div className="absolute -bottom-2 left-8 w-6 h-6 bg-yellow-500 rounded-full shadow-lg" />
                      <div className="absolute top-8 -left-2 w-6 h-6 bg-[#D4A574] rounded-full shadow-lg" />
                      
                      {/* Center floating sphere */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-beige-400 rounded-full shadow-xl" />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

