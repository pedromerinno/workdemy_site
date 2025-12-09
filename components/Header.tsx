'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, Globe, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/contexts/LanguageContext'

// Tipo para o evento customizado de visibilidade da seção
interface SequenceVisibilityEvent extends CustomEvent {
  detail: { isVisible: boolean }
}

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Recursos', href: '#recursos' },
]

const languages = [
  { code: 'pt', label: 'Português' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isInSequenceSection, setIsInSequenceSection] = useState(false)
  const { currentLanguage, setCurrentLanguage } = useLanguage()
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [showLanguageFeedback, setShowLanguageFeedback] = useState(false)
  const languageMenuRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  // Otimização: usar throttling para scroll
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Escuta eventos de visibilidade da seção de sequência de imagens
  useEffect(() => {
    const handleSequenceVisibility = (event: Event) => {
      const customEvent = event as SequenceVisibilityEvent
      setIsInSequenceSection(customEvent.detail.isVisible)
    }

    window.addEventListener('sequenceSectionVisibility', handleSequenceVisibility)
    return () => {
      window.removeEventListener('sequenceSectionVisibility', handleSequenceVisibility)
    }
  }, [])

  // Fecha o menu de idioma ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false)
      }
    }

    if (isLanguageMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLanguageMenuOpen])

  // Previne scroll do body quando menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode as 'pt' | 'en' | 'es')
    setIsLanguageMenuOpen(false)
    
    // Feedback visual
    setShowLanguageFeedback(true)
    setTimeout(() => setShowLanguageFeedback(false), 2000)
  }

  return (
    <motion.header
      ref={headerRef}
      initial={false}
      animate={{
        opacity: isInSequenceSection ? 0 : 1,
        y: isInSequenceSection ? -100 : 0,
        pointerEvents: isInSequenceSection ? 'none' : 'auto',
      }}
      transition={{
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ willChange: 'transform, opacity' }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 mt-4">
        <motion.div
          initial={false}
          animate={{
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 1)',
            backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
          }}
          transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
          className={cn(
            "flex items-center justify-between h-16 lg:h-20 px-6 lg:px-8 rounded-2xl border border-[#EAEAEA]",
          )}
          style={{ willChange: 'background-color, backdrop-filter' }}
        >
          {/* Logo - Left Section */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#inicio')
            }}
            className="flex items-center hover:opacity-80 transition-opacity"
            aria-label="Workdemy - Início"
          >
            <img
              src="/assets/workdemy.svg"
              alt="Workdemy"
              className="h-10 lg:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation - Center Section */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className="text-sm font-semibold text-[#4F4F4F] hover:text-[#1A1A1A] transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BF7529] group-hover:w-full transition-all duration-200"></span>
              </a>
            ))}
          </div>

          {/* Action Items - Right Section */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language Selector */}
            <div className="relative" ref={languageMenuRef}>
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="p-2 text-[#4F4F4F] hover:text-[#1A1A1A] hover:bg-[#F9F9F9] rounded-lg transition-all duration-200"
                aria-label="Selecionar idioma"
                aria-expanded={isLanguageMenuOpen}
              >
                <Globe className="w-4 h-4" />
              </button>
              
              <AnimatePresence mode="wait">
                {isLanguageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{
                      duration: 0.2,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl border border-[#EAEAEA] shadow-lg overflow-hidden z-50"
                    style={{ willChange: 'transform, opacity' }}
                  >
                    {languages.map((lang, index) => (
                      <motion.button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.03, duration: 0.15 }}
                        className={cn(
                          "w-full text-left px-4 py-2.5 text-sm font-medium transition-colors duration-150 flex items-center justify-between gap-2",
                          currentLanguage === lang.code
                            ? "bg-[#FFF6E6] text-[#BF7529]"
                            : "text-[#4F4F4F] hover:bg-[#F9F9F9] hover:text-[#1A1A1A]"
                        )}
                      >
                        <span>{lang.label}</span>
                        {currentLanguage === lang.code && (
                          <Check className="w-4 h-4" />
                        )}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="https://app.workdemy.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#4F4F4F] hover:text-[#1A1A1A] transition-colors duration-200"
            >
              Entrar
            </a>
            <a
              href="https://app.workdemy.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#BF7529] hover:bg-[#A6631F] text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              Começar agora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#1A1A1A] hover:bg-[#F5F5F5] rounded-lg transition-colors relative"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.25,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="lg:hidden bg-white border-t border-[#EAEAEA] overflow-hidden"
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="max-w-7xl mx-auto px-6 py-6 space-y-1"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.2 }}
                  className="block text-base font-semibold text-[#4F4F4F] hover:text-[#1A1A1A] hover:bg-[#F9F9F9] transition-colors duration-200 rounded-lg px-3 py-2.5"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-4 mt-4 border-t border-[#EAEAEA] space-y-2">
                {/* Language Selector Mobile */}
                <div className="px-3 py-2.5">
                  <div className="flex items-center gap-2 text-sm font-medium text-[#4F4F4F] mb-2">
                    <Globe className="w-4 h-4" />
                    <span>Idioma</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={cn(
                          "text-left px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 flex items-center justify-between gap-2",
                          currentLanguage === lang.code
                            ? "bg-[#FFF6E6] text-[#BF7529]"
                            : "text-[#4F4F4F] hover:bg-[#F9F9F9] hover:text-[#1A1A1A]"
                        )}
                      >
                        <span>{lang.label}</span>
                        {currentLanguage === lang.code && (
                          <Check className="w-4 h-4" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                
                <a
                  href="https://app.workdemy.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base font-semibold text-[#4F4F4F] hover:text-[#1A1A1A] hover:bg-[#F9F9F9] transition-colors duration-200 rounded-lg px-3 py-2.5"
                >
                  Entrar
                </a>
                <a
                  href="https://app.workdemy.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-5 py-3 bg-[#BF7529] hover:bg-[#A6631F] text-white text-base font-medium rounded-lg transition-all duration-200 shadow-sm active:scale-[0.98]"
                >
                  Começar agora
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Language Change Feedback */}
      <AnimatePresence>
        {showLanguageFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1A1A1A] text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
          >
            <Check className="w-4 h-4" />
            <span className="text-sm font-medium">
              Idioma alterado para {languages.find(l => l.code === currentLanguage)?.label}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
