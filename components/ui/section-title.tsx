'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'
import * as React from 'react'
import { cn } from '@/lib/utils'

const sectionTitleVariants = cva(
  'font-semibold text-black tracking-tight leading-tight',
  {
    variants: {
      size: {
        sm: 'text-2xl sm:text-3xl lg:text-4xl',
        md: 'text-3xl sm:text-4xl lg:text-5xl',
        lg: 'text-4xl sm:text-5xl lg:text-6xl',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
      weight: {
        normal: 'font-semibold',
        bold: 'font-bold',
      },
    },
    defaultVariants: {
      size: 'md',
      align: 'center',
      weight: 'normal',
    },
  }
)

const sectionSubtitleVariants = cva(
  'text-black/70 max-w-2xl leading-relaxed',
  {
    variants: {
      size: {
        sm: 'text-base sm:text-lg',
        md: 'text-lg sm:text-xl',
        lg: 'text-xl sm:text-2xl',
      },
      align: {
        left: 'text-left mx-0',
        center: 'text-center mx-auto',
        right: 'text-right ml-auto',
      },
    },
    defaultVariants: {
      size: 'md',
      align: 'center',
    },
  }
)

export interface SectionTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof sectionTitleVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  subtitle?: string
  subtitleClassName?: string
  animated?: boolean
  animationDelay?: number
  children: React.ReactNode
}

const SectionTitle = React.forwardRef<HTMLHeadingElement, SectionTitleProps>(
  (
    {
      className,
      size,
      align,
      weight,
      as: Component = 'h2',
      subtitle,
      subtitleClassName,
      animated = false,
      animationDelay = 0,
      children,
      ...props
    },
    ref
  ) => {
    const titleClasses = cn(sectionTitleVariants({ size, align, weight }), className)
    const subtitleClasses = cn(
      sectionSubtitleVariants({ size: size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : 'md', align }),
      subtitleClassName
    )

    const containerClasses = cn('mt-16 lg:mt-24 mb-12 lg:mb-16', {
      'text-center': align === 'center',
      'text-left': align === 'left',
      'text-right': align === 'right',
    })

    const titleContent = (
      <Component ref={ref} className={titleClasses} {...props}>
        {children}
      </Component>
    )

    const subtitleContent = subtitle && (
      <p className={subtitleClasses}>{subtitle}</p>
    )

    if (animated) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: animationDelay }}
          className={containerClasses}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: animationDelay + 0.1 }}
          >
            {titleContent}
            {subtitleContent && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: animationDelay + 0.2 }}
                className={cn('mt-4', {
                  'mx-auto': align === 'center',
                  'mx-0': align !== 'center',
                })}
              >
                {subtitleContent}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )
    }

    return (
      <div className={containerClasses}>
        {titleContent}
        {subtitleContent && <div className="mt-4">{subtitleContent}</div>}
      </div>
    )
  }
)

SectionTitle.displayName = 'SectionTitle'

export { SectionTitle, sectionTitleVariants }
