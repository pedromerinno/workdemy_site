'use client'

import { useRef, useEffect, useState, useMemo } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, MotionValue, AnimatePresence } from 'framer-motion'
import { useTranslations } from '@/hooks/useTranslations'

// Gera array com todas as imagens da sequência (00000 até 00121 = 122 imagens)
const TOTAL_IMAGES = 122

const generateImageSequence = () => {
  const images: string[] = []
  for (let i = 0; i < TOTAL_IMAGES; i++) {
    const paddedNumber = i.toString().padStart(5, '0')
    images.push(`/assets/Sequencia/Sequencia_${paddedNumber}.jpg`)
  }
  return images
}

// Pré-carrega todas as imagens da sequência em cache
// Carrega em batches para não sobrecarregar o navegador
const preloadImages = (imageUrls: string[], batchSize = 10): Promise<void> => {
  return new Promise((resolve) => {
    let loaded = 0
    const total = imageUrls.length
    let currentBatch = 0

    if (total === 0) {
      resolve()
      return
    }

    const loadBatch = () => {
      const start = currentBatch * batchSize
      const end = Math.min(start + batchSize, total)
      
      if (start >= total) {
        resolve()
        return
      }

      const batch = imageUrls.slice(start, end)
      let batchLoaded = 0

      batch.forEach((url) => {
        const img = new window.Image()
        img.onload = () => {
          loaded++
          batchLoaded++
          if (loaded === total) {
            resolve()
          } else if (batchLoaded === batch.length) {
            // Próximo batch após um pequeno delay
            setTimeout(() => {
              currentBatch++
              loadBatch()
            }, 50)
          }
        }
        img.onerror = () => {
          loaded++
          batchLoaded++
          if (loaded === total) {
            resolve()
          } else if (batchLoaded === batch.length) {
            setTimeout(() => {
              currentBatch++
              loadBatch()
            }, 50)
          }
        }
        img.src = url
      })
    }

    loadBatch()
  })
}

interface SequenceImageProps {
  src: string
  index: number
  activeIndex: number
  totalImages: number
  isPreloaded?: boolean
}

function SequenceImage({ src, index, activeIndex, totalImages, isPreloaded = false }: SequenceImageProps) {
  // Transição seca: opacidade binária (1 ou 0) sem fade
  const isActive = activeIndex === index

  // Renderiza imagens próximas ao índice ativo OU se já foram pré-carregadas
  // Isso garante que todas as imagens estejam no DOM e em cache quando necessário
  const shouldRender = Math.abs(activeIndex - index) <= 3 || isPreloaded

  if (!shouldRender) {
    return null
  }

  return (
    <div
      className="absolute inset-0"
      style={{
        opacity: isActive ? 1 : 0,
        zIndex: isActive ? 10 : 0,
        transition: 'none', // Sem transição para corte seco
        visibility: isActive ? 'visible' : 'hidden', // Evita renderização desnecessária
        pointerEvents: isActive ? 'auto' : 'none' // Otimização de performance
      }}
    >
      <Image
        src={src}
        alt={`Sequência ${index + 1} de ${totalImages}`}
        fill
        className="object-cover"
        quality={85}
        priority={index <= 2}
        sizes="100vw"
        {...(index > 2 && !isPreloaded && { loading: 'lazy' })} // Só usa lazy se não for priority e não estiver pré-carregada
      />
    </div>
  )
}

export default function ScrollImageSequenceSequencia() {
  const t = useTranslations()
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [textIndex, setTextIndex] = useState(0)
  const [imagesPreloaded, setImagesPreloaded] = useState(false)
  const imageSequence = useMemo(() => generateImageSequence(), [])

  const textOptions = t.sequenciaImagens.textOptions

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Pré-carrega todas as imagens quando o componente monta
  useEffect(() => {
    let isMounted = true

    const loadImages = async () => {
      try {
        await preloadImages(imageSequence)
        if (isMounted) {
          setImagesPreloaded(true)
        }
      } catch (error) {
        console.warn('Erro ao pré-carregar imagens:', error)
        // Mesmo com erro, permite continuar
        if (isMounted) {
          setImagesPreloaded(true)
        }
      }
    }

    loadImages()

    return () => {
      isMounted = false
    }
  }, [imageSequence])

  // Notifica quando entra/sai da seção para esconder o header
  useEffect(() => {
    const section = containerRef.current
    if (!section) return

    let isCurrentlyVisible = false

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Considera visível quando pelo menos 20% da seção está na viewport
          const isVisible = entry.isIntersecting && entry.intersectionRatio > 0.2
          
          // Só dispara evento se o estado mudou
          if (isVisible !== isCurrentlyVisible) {
            isCurrentlyVisible = isVisible
            // Dispara evento customizado para o header escutar
            window.dispatchEvent(
              new CustomEvent('sequenceSectionVisibility', {
                detail: { isVisible }
              })
            )
          }
        })
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1],
        rootMargin: '0px' // Observa a seção completa
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
      // Garante que o header volte a aparecer ao desmontar
      if (isCurrentlyVisible) {
        window.dispatchEvent(
          new CustomEvent('sequenceSectionVisibility', {
            detail: { isVisible: false }
          })
        )
      }
    }
  }, [])

  // Calcula qual imagem deve estar ativa baseado no progresso do scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const index = Math.min(
        Math.floor(latest * TOTAL_IMAGES),
        TOTAL_IMAGES - 1
      )
      setActiveIndex(index)
      
      // Controla qual texto aparece baseado no scroll
      // Divide o scroll em 3 partes, dando mais tempo à última frase
      const textProgress = latest
      if (textProgress < 0.25) {
        setTextIndex(0)
      } else if (textProgress < 0.50) {
        setTextIndex(1)
      } else {
        setTextIndex(2)
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  // Controla a opacidade do texto baseado no scroll
  // Texto aparece no início e permanece visível até o final
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.95, 1],
    [0, 1, 1, 0]
  )

  const textY = useTransform(
    scrollYProgress,
    [0, 0.1, 0.95, 1],
    [30, 0, 0, -20]
  )

  // Altura total necessária para o scroll
  // Ajustado para dar tempo suficiente para todas as imagens aparecerem
  const totalScrollHeight = TOTAL_IMAGES * 1.2 // 1.2vh por imagem para transição suave

  return (
    <section
      ref={containerRef}
      id="sequencia-imagens"
      className="relative w-full"
      style={{ backgroundColor: '#F9F8F5' }}
    >
      {/* Container sticky para imagens - Full Width */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center z-10">
        {/* Container de imagens - Full Width */}
        <div className="relative w-full h-full">
          {imageSequence.map((src, index) => (
            <SequenceImage
              key={index}
              src={src}
              index={index}
              activeIndex={activeIndex}
              totalImages={TOTAL_IMAGES}
              isPreloaded={imagesPreloaded}
            />
          ))}
          {/* Overlay escuro sobre as imagens */}
          <div className="absolute inset-0 bg-black/40 z-20" />
        </div>

        {/* Texto animado sobre as imagens */}
        <motion.div
          className="absolute inset-0 z-30 flex items-center justify-center px-4 sm:px-6 lg:px-8"
          style={{
            opacity: textOpacity,
            y: textY,
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight text-center">
            {t.sequenciaImagens.prefix}{' '}
            <span className="inline-block relative min-w-[200px] sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={textIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="inline-block text-white font-bold"
                >
                  {textOptions[textIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            .
          </h2>
        </motion.div>

        {/* Indicador de progresso */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-white text-sm font-medium">
              {activeIndex + 1} / {TOTAL_IMAGES}
            </span>
            <div className="h-1 w-32 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#BF7529] rounded-full"
                initial={false}
                animate={{
                  width: `${((activeIndex + 1) / TOTAL_IMAGES) * 100}%`
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Spacer para criar espaço de scroll */}
      <div style={{ height: `${totalScrollHeight}vh` }} />
    </section>
  )
}
