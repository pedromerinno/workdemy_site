"use client"

import * as React from "react"
import { motion, useTransform, useScroll } from "framer-motion"
import Image from "next/image"

interface HorizontalScrollCarouselProps {
  images?: string[]
  children?: React.ReactNode
  className?: string
  height?: string
}

const HorizontalScrollCarousel: React.FC<HorizontalScrollCarouselProps> = ({ 
  images = [], 
  children,
  className,
  height = "300vh"
}) => {
  const targetRef = React.useRef<HTMLDivElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // Ajustado para começar quando a seção entra na viewport e terminar quando todos os cards foram mostrados
    offset: ["start start", "end end"]
  })

  // Calcula dinamicamente baseado no container
  const x = useTransform(scrollYProgress, (progress) => {
    if (!containerRef.current) return "0px"
    
    const container = containerRef.current
    const scrollWidth = container.scrollWidth
    const clientWidth = container.clientWidth || window.innerWidth
    
    // Calcula quanto precisa scrollar para mostrar todos os cards
    const maxScroll = scrollWidth - clientWidth
    
    // Se não há scroll necessário, retorna 0
    if (maxScroll <= 0) return "0px"
    
    // Calcula o offset baseado no progresso (0 a 1)
    // Começa em 0 e vai até o máximo necessário
    const offset = -maxScroll * progress
    
    return `${offset}px`
  })

  return (
    <section
      ref={targetRef}
      className={`relative w-full ${className || ""}`}
      style={{ height }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Container que ocupa toda a largura da viewport, sem margens */}
        <div className="w-full">
          <motion.div
            ref={containerRef}
            style={{ x }}
            className="flex gap-6 will-change-transform"
          >
            {children || images.map((src) => (
              <Card
                src={src}
                key={src}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Card: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div className="group relative h-[450px] w-[450px] overflow-hidden rounded-lg">
      <Image
        src={src}
        fill
        style={{ objectFit: "cover" }}
        alt="carousel image"
      />
    </div>
  )
}

export { HorizontalScrollCarousel }

