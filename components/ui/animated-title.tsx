'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { motion, type MotionProps } from 'framer-motion'
import * as React from 'react'
import { cn } from '@/lib/utils'

const titleVariants = cva(
  'font-semibold text-black tracking-tight leading-tight',
  {
    variants: {
      size: {
        xs: 'text-xl sm:text-2xl',
        sm: 'text-2xl sm:text-3xl lg:text-4xl',
        md: 'text-3xl sm:text-4xl lg:text-5xl',
        lg: 'text-4xl sm:text-5xl lg:text-6xl',
        xl: 'text-5xl sm:text-6xl lg:text-7xl',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
      weight: {
        normal: 'font-semibold',
        medium: 'font-semibold',
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

const subtitleVariants = cva(
  'text-black/70 leading-relaxed',
  {
    variants: {
      size: {
        xs: 'text-sm sm:text-base',
        sm: 'text-base sm:text-lg',
        md: 'text-lg sm:text-xl',
        lg: 'text-xl sm:text-2xl',
      },
      align: {
        left: 'text-left',
        center: 'text-center mx-auto',
        right: 'text-right ml-auto',
      },
      maxWidth: {
        none: '',
        sm: 'max-w-lg',
        md: 'max-w-2xl',
        lg: 'max-w-3xl',
        xl: 'max-w-4xl',
      },
    },
    defaultVariants: {
      size: 'md',
      align: 'center',
      maxWidth: 'md',
    },
  }
)

export interface AnimatedTitleProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'children'>,
    VariantProps<typeof titleVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  subtitle?: React.ReactNode
  subtitleSize?: VariantProps<typeof subtitleVariants>['size']
  subtitleMaxWidth?: VariantProps<typeof subtitleVariants>['maxWidth']
  subtitleClassName?: string
  children: React.ReactNode
  animated?: boolean
  animationDelay?: number
  motionProps?: Partial<MotionProps>
  containerClassName?: string
}

const AnimatedTitle = React.forwardRef<HTMLHeadingElement, AnimatedTitleProps>(
  (
    {
      className,
      size,
      align,
      weight,
      as: Component = 'h2',
      subtitle,
      subtitleSize,
      subtitleMaxWidth,
      subtitleClassName,
      children,
      animated = true,
      animationDelay = 0,
      motionProps,
      containerClassName,
      ...props
    },
    ref
  ) => {
    const titleClasses = cn(titleVariants({ size, align, weight }), className)
    
    const subtitleClasses = cn(
      subtitleVariants({ 
        size: subtitleSize || (size === 'lg' || size === 'xl' ? 'lg' : size === 'sm' || size === 'xs' ? 'sm' : 'md'),
        align,
        maxWidth: subtitleMaxWidth,
      }),
      subtitleClassName
    )

    const containerClasses = cn('mt-16 lg:mt-24 mb-12 lg:mb-16', containerClassName, {
      'text-center': align === 'center',
      'text-left': align === 'left',
      'text-right': align === 'right',
    })

    const defaultMotionProps: MotionProps = {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: '-100px' },
      transition: { duration: 0.6, delay: animationDelay },
    }

    const titleMotionProps: MotionProps = {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: '-100px' },
      transition: { duration: 0.6, delay: animationDelay + 0.1 },
    }

    const subtitleMotionProps: MotionProps = {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: '-100px' },
      transition: { duration: 0.6, delay: animationDelay + 0.2 },
    }

    const mergedMotionProps = { ...defaultMotionProps, ...motionProps }

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
          {...mergedMotionProps}
          className={containerClasses}
        >
          <motion.div {...titleMotionProps}>
            {titleContent}
          </motion.div>
          {subtitleContent && (
            <motion.div
              {...subtitleMotionProps}
              className={cn('mt-4', {
                'mx-auto': align === 'center',
                'mx-0': align !== 'center',
              })}
            >
              {subtitleContent}
            </motion.div>
          )}
        </motion.div>
      )
    }

    return (
      <div className={containerClasses}>
        {titleContent}
        {subtitleContent && (
          <div className={cn('mt-4', {
            'mx-auto': align === 'center',
            'mx-0': align !== 'center',
          })}>
            {subtitleContent}
          </div>
        )}
      </div>
    )
  }
)

AnimatedTitle.displayName = 'AnimatedTitle'

export { AnimatedTitle, titleVariants, subtitleVariants }

