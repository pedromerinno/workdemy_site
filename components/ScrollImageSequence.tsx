'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

interface ImageItem {
  src: string
  alt: string
  title?: string
  description?: string
}

const images: ImageItem[] = [
  {
    src: '/assets/IMG_01.png',
    alt: 'Workdemy - Organize seu conhecimento',
    title: 'Organize',
    description: 'Transforme conhecimento fragmentado em uma base estruturada'
  },
  {
    src: '/assets/IMG_02.png',
    alt: 'Workdemy - Aprenda com seu conhecimento',
    title: 'Aprenda',
    description: 'A IA analisa e compreende o contexto do seu negócio'
  },
  {
    src: '/assets/IMG_03.png',
    alt: 'Workdemy - Treine sua equipe',
    title: 'Treine',
    description: 'Crie treinamentos personalizados que escalam com sua empresa'
  },
  {
    src: '/assets/IMG_04.png',
    alt: 'Workdemy - Plataforma inteligente',
    title: 'Escale',
    description: 'Uma plataforma que cresce junto com o seu time'
  },
  {
    src: '/assets/IMG_05.png',
    alt: 'Workdemy - Resultados mensuráveis',
    title: 'Mensure',
    description: 'Acompanhe o progresso e o impacto do treinamento'
  },
  {
    src: '/assets/IMG_06.png',
    alt: 'Workdemy - Integração completa',
    title: 'Integre',
    description: 'Conecte-se com as ferramentas que sua equipe já usa'
  }
]

interface ImageCardProps {
  image: ImageItem
  index: number
  scrollYProgress: MotionValue<number>
  activeIndex: number
  totalImages: number
}

function ImageCard({ image, index, scrollYProgress, activeIndex, totalImages }: ImageCardProps) {
  const start = index / totalImages
  const end = (index + 1) / totalImages
  
  const progress = useTransform(
    scrollYProgress,
    [start, end],
    [0, 1]
  )

  const opacity = useTransform(
    progress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  )

  const scale = useTransform(
    progress,
    [0, 0.5, 1],
    [0.85, 1, 0.95]
  )

  const y = useTransform(
    progress,
    [0, 0.5, 1],
    [50, 0, -30]
  )

  const overlayOpacity = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, 0]
  )

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        opacity,
        scale,
        y,
        zIndex: activeIndex === index ? 10 : 5 - Math.abs(activeIndex - index)
      }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
        quality={90}
        priority={index === 0}
        sizes="100vw"
      />
      
      {/* Overlay with title and description */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-8 lg:p-12"
        style={{ opacity: overlayOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: activeIndex === index ? 1 : 0,
            y: activeIndex === index ? 0 : 20
          }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl"
        >
          {image.title && (
            <h3 className="text-3xl lg:text-4xl font-semibold text-white mb-3">
              {image.title}
            </h3>
          )}
          {image.description && (
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              {image.description}
            </p>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function ScrollImageSequence() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Calculate which image should be active based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const index = Math.min(
        Math.floor(latest * images.length),
        images.length - 1
      )
      setActiveIndex(index)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  // Calculate total height needed: enough space for all images to appear
  // Each image needs time to fully appear, so we use images.length * 100vh
  const totalScrollHeight = images.length * 100 // 100vh per image to ensure all appear

  // Animate padding and border radius based on scroll progress
  // Start applying when scroll enters (0.1) and fully applied in the middle (0.5)
  const padding = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 0.9, 1],
    [0, 16, 24, 16, 0]
  )

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 0.9, 1],
    [0, 8, 24, 8, 0]
  )

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ backgroundColor: '#F9F8F5' }}
    >
      {/* Sticky container for images - Full Width */}
      <motion.div 
        className="sticky top-0 h-screen w-full flex items-center justify-center z-10"
        style={{
          padding: padding,
          borderRadius: borderRadius,
          overflow: 'hidden'
        }}
      >
        {/* Images container - Full Width */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <ImageCard
              key={index}
              image={image}
              index={index}
              scrollYProgress={scrollYProgress}
              activeIndex={activeIndex}
              totalImages={images.length}
            />
          ))}
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 rounded-full transition-all ${
                activeIndex === index
                  ? 'bg-[#BF7529] w-8'
                  : 'bg-white/40 w-2'
              }`}
              initial={false}
              animate={{
                width: activeIndex === index ? 32 : 8,
                opacity: activeIndex === index ? 1 : 0.4
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Spacer to create scroll space - ensures last card appears before sticky "unsticks" */}
      {/* This creates enough scroll space for all images to appear */}
      <div style={{ height: `${totalScrollHeight}vh` }} />
    </section>
  )
}

