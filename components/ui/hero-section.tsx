'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown, ArrowRight, Play, Globe, Check } from 'lucide-react';
import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from '@/components/ui/typewriter-text';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslations } from '@/hooks/useTranslations';

// Tipo para o evento customizado de visibilidade da seção
interface SequenceVisibilityEvent extends CustomEvent {
  detail: { isVisible: boolean }
}

const languages = [
  { code: 'pt', label: 'Português' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isInSequenceSection, setIsInSequenceSection] = React.useState(false);
  const { currentLanguage, setCurrentLanguage } = useLanguage();
  const t = useTranslations();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = React.useState(false);
  const [showLanguageFeedback, setShowLanguageFeedback] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement | null>(null);
  const languageMenuRef = React.useRef<HTMLDivElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Update breakpoint flag on resize
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Detect scroll for fixed header
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      setIsScrolled(window.scrollY > scrollThreshold);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escuta eventos de visibilidade da seção de sequência de imagens
  useEffect(() => {
    const handleSequenceVisibility = (event: Event) => {
      const customEvent = event as SequenceVisibilityEvent;
      setIsInSequenceSection(customEvent.detail.isVisible);
    };

    window.addEventListener('sequenceSectionVisibility', handleSequenceVisibility);
    return () => {
      window.removeEventListener('sequenceSectionVisibility', handleSequenceVisibility);
    };
  }, []);

  // Scroll-based animations for image
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ['start end', 'center center'],
  });

  const scaleRange = isMobile ? [0.7, 0.9] : [1.05, 1];
  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);

  const handleNavClick = (href: string, e?: React.MouseEvent<HTMLElement>) => {
    e?.preventDefault();
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode as 'pt' | 'en' | 'es');
    setIsLanguageMenuOpen(false);
    
    // Feedback visual
    setShowLanguageFeedback(true);
    setTimeout(() => setShowLanguageFeedback(false), 2000);
  };

  // Close on ESC & click outside (mobile overlay)
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    function onClickOutside(e: MouseEvent) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener('keydown', onKey);
      document.addEventListener('click', onClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClickOutside);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Fecha o menu de idioma ao clicar fora
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    };

    if (isLanguageMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageMenuOpen]);

  return (
    <section className="w-full text-sm pb-44 relative overflow-hidden" style={{ backgroundColor: '#F8F7F4' }}>
      {/* Subtle pattern overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[length:24px_24px]" />
      
      <motion.nav
        ref={navRef}
        initial={false}
        animate={{
          opacity: isInSequenceSection ? 0 : 1,
          y: isInSequenceSection ? -100 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
        }}
        className={`${isScrolled ? 'fixed top-0 left-0 right-0 w-full' : 'relative'} z-50 ${isInSequenceSection ? 'pointer-events-none' : ''}`}
        style={{
          paddingTop: isScrolled ? '1rem' : '1rem',
          paddingLeft: isScrolled ? '1rem' : '0',
          paddingRight: isScrolled ? '1rem' : '0',
        }}
      >
        <div
          className={`
            flex items-center justify-between max-w-7xl mx-auto
            ${isScrolled ? 'h-16' : 'h-20'}
            rounded-2xl border border-[#EAEAEA] backdrop-blur-md transition-all duration-300
            px-6 lg:px-8 py-3
          `}
          style={{
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 1)',
          }}
        >
        {/* Logo - Left Section */}
        <motion.a
          href="#inicio"
          onClick={(e) => handleNavClick('#inicio', e)}
          aria-label="Workdemy - Início"
          className="flex items-center hover:opacity-80 transition-opacity"
          animate={{
            scale: isScrolled ? 0.9 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <img
            src="/assets/workdemy.svg"
            alt="Workdemy"
            className="h-6 lg:h-7 w-auto"
          />
        </motion.a>

        {/* Desktop Navigation - Center Section */}
        <motion.div
          className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 transition-all duration-300"
          style={{
            gap: isScrolled ? '2rem' : '2.5rem',
          }}
        >
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick('#inicio', e)}
            className="text-sm font-semibold text-[#4F4F4F] hover:text-[#1A1A1A] transition-colors duration-200 relative group"
          >
            {t.nav.inicio}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BF7529] group-hover:w-full transition-all duration-200"></span>
          </a>

          <a 
            href="#como-funciona" 
            onClick={(e) => handleNavClick('#como-funciona', e)}
            className="text-sm font-semibold text-[#4F4F4F] hover:text-[#1A1A1A] transition-colors duration-200 relative group"
          >
            {t.nav.comoFunciona}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BF7529] group-hover:w-full transition-all duration-200"></span>
          </a>

          <a 
            href="#recursos" 
            onClick={(e) => handleNavClick('#recursos', e)}
            className="text-sm font-semibold text-[#4F4F4F] hover:text-[#1A1A1A] transition-colors duration-200 relative group"
          >
            {t.nav.recursos}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BF7529] group-hover:w-full transition-all duration-200"></span>
          </a>

          <a 
            href="#planos" 
            onClick={(e) => handleNavClick('#planos', e)}
            className="text-sm font-semibold text-[#4F4F4F] hover:text-[#1A1A1A] transition-colors duration-200 relative group"
          >
            {t.nav.planos}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BF7529] group-hover:w-full transition-all duration-200"></span>
          </a>
        </motion.div>

        {/* Action Items - Right Section */}
        <motion.div
          className="hidden lg:flex items-center"
          animate={{
            gap: isScrolled ? '1rem' : '1.5rem',
          }}
          transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          {/* Language Selector */}
          <div className="relative" ref={languageMenuRef}>
            <button
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="p-2 text-[#4F4F4F] hover:text-[#1A1A1A] hover:bg-[#F9F9F9] rounded-lg transition-all duration-200"
              aria-label={t.nav.selecionarIdioma}
              aria-expanded={isLanguageMenuOpen}
            >
              <Globe className="w-4 h-4" />
            </button>
            
            <AnimatePresence>
              {isLanguageMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl border border-[#EAEAEA] shadow-lg overflow-hidden z-50"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
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
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            {!isScrolled && (
              <motion.a
                key="entrar-link"
                href="https://app.workdemy.com/login"
                className="text-sm font-semibold text-[#4F4F4F] hover:text-[#1A1A1A] transition-colors duration-200"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{
                  duration: 0.2,
                  ease: [0.4, 0, 0.2, 1],
                }}
                style={{
                  overflow: 'hidden',
                  marginRight: 'auto',
                }}
              >
                {t.nav.entrar}
              </motion.a>
            )}
          </AnimatePresence>
          <motion.a
            href="https://app.workdemy.com/signup"
            className="bg-[#BF7529] hover:bg-[#A6631F] text-white font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] whitespace-nowrap"
            animate={{
              paddingLeft: isScrolled ? '1rem' : '1.25rem',
              paddingRight: isScrolled ? '1rem' : '1.25rem',
              paddingTop: isScrolled ? '0.5rem' : '0.625rem',
              paddingBottom: isScrolled ? '0.5rem' : '0.625rem',
              fontSize: isScrolled ? '0.8125rem' : '0.875rem',
            }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={isScrolled ? 'comecar' : 'comecar-agora'}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.2 }}
              >
                {isScrolled ? t.nav.comecar : t.nav.comecarAgora}
              </motion.span>
            </AnimatePresence>
          </motion.a>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          id="open-menu"
          onClick={() => setMenuOpen(true)}
          className="lg:hidden p-2 text-[#1A1A1A] hover:bg-[#F5F5F5] rounded-lg transition-colors"
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <Menu className="w-5 h-5" aria-hidden="true" />
        </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          id="menu"
          ref={menuRef}
          className={[
            'lg:hidden fixed inset-0 top-0 left-0 transition-all duration-300 overflow-hidden backdrop-blur-md z-50',
            'flex flex-col justify-center items-center',
            menuOpen ? 'w-full opacity-100' : 'w-0 opacity-0 pointer-events-none',
          ].join(' ')}
          style={{ backgroundColor: menuOpen ? 'rgba(255, 255, 255, 0.95)' : 'transparent' }}
          aria-hidden={!menuOpen}
        >
          <div className="flex flex-col items-center gap-6 w-full px-6">
            <a 
              href="#inicio" 
              onClick={(e) => handleNavClick('#inicio', e)}
              className="text-base font-semibold text-[#4F4F4F] hover:text-[#1A1A1A] transition-colors duration-200"
            >
              {t.nav.inicio}
            </a>

            <a 
              href="#como-funciona" 
              onClick={(e) => handleNavClick('#como-funciona', e)}
              className="text-base font-semibold text-[#4F4F4F] hover:text-[#1A1A1A] transition-colors duration-200"
            >
              {t.nav.comoFunciona}
            </a>

            <a 
              href="#recursos" 
              onClick={(e) => handleNavClick('#recursos', e)}
              className="text-base font-semibold text-[#4F4F4F] hover:text-[#1A1A1A] transition-colors duration-200"
            >
              {t.nav.recursos}
            </a>

            <a 
              href="#planos" 
              onClick={(e) => handleNavClick('#planos', e)}
              className="text-base font-semibold text-[#4F4F4F] hover:text-[#1A1A1A] transition-colors duration-200"
            >
              {t.nav.planos}
            </a>

            <div className="pt-6 mt-6 border-t border-[#EAEAEA] w-full max-w-xs space-y-3">
              {/* Language Selector Mobile */}
              <div className="px-3 py-2.5">
                <div className="flex items-center gap-2 text-sm font-medium text-[#4F4F4F] mb-2">
                  <Globe className="w-4 h-4" />
                  <span>{t.nav.idioma}</span>
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
                className="block text-center text-base font-semibold text-[#4F4F4F] hover:text-[#1A1A1A] transition-colors duration-200"
              >
                {t.nav.entrar}
              </a>
              <a
                href="https://app.workdemy.com/signup"
                className="w-full text-center px-5 py-3 bg-[#BF7529] hover:bg-[#A6631F] text-white text-base font-medium rounded-lg transition-all duration-200 shadow-sm active:scale-[0.98]"
              >
                {t.nav.comecarAgora}
              </a>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-[#1A1A1A] hover:bg-[#F5F5F5] rounded-lg transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </motion.nav>

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
              {t.nav.idiomaAlterado} {languages.find(l => l.code === currentLanguage)?.label}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div 
        className="relative z-10 flex items-center gap-2 border rounded-full w-max mx-auto px-4 py-2 mt-40 md:mt-32 shadow-sm hover:shadow-md transition-all"
        style={{
          backgroundColor: 'rgb(255, 246, 230)',
          borderColor: 'rgb(255, 246, 230)',
        }}
      >
        <span className="text-beige-800 text-sm">
          <Typewriter
            text={t.hero.typewriter}
            speed={80}
            cursor="|"
            loop={true}
            deleteSpeed={50}
            delay={2000}
            className="text-beige-800"
          />
        </span>
      </div>

      <h1 className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-medium max-w-6xl text-center mx-auto mt-8 md:mt-12 text-beige-900 leading-relaxed tracking-tight">
        {t.hero.title}
      </h1>

      <p className="relative z-10 text-sm md:text-base mx-auto max-w-2xl text-center mt-6 md:mt-8 max-md:px-2 text-beige-800/80 leading-loose font-semibold">
        {t.hero.description}
      </p>

      <div className="relative z-10 mx-auto w-full flex items-center justify-center gap-3 mt-8">
        <a href="https://app.workdemy.com/signup" className="bg-[#BF7529] hover:bg-[#BF7529]/90 text-white px-8 py-4 rounded-full font-medium transition-all shadow-sm hover:shadow-lg hover:scale-105 active:scale-100">
          {t.hero.comecarAgora}
        </a>
        <button className="flex items-center gap-2 border border-[#BF7529]/30 hover:border-[#BF7529]/50 hover:bg-[#BF7529]/10 rounded-full px-8 py-4 transition-all shadow-sm hover:shadow-md group">
          <span className="text-[#BF7529] font-medium">{t.hero.saibaMais}</span>
          <ArrowRight 
            className="w-4 h-4 text-[#BF7529] group-hover:translate-x-1 transition-all duration-200" 
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Plataforma Image */}
      <div 
        ref={imageContainerRef}
        className="relative z-10 mt-16 md:mt-24 w-full flex justify-center px-0"
        style={{ perspective: '1000px' }}
      >
        <motion.div
          style={{
            rotateX,
            scale,
            transformStyle: 'preserve-3d',
          }}
          className="w-[80vw] rounded-2xl overflow-hidden shadow-2xl border border-beige-200/50"
        >
          <Image
            src="/assets/IMG_07.png"
            alt="Dashboard Workdemy - Interface principal da plataforma"
            width={1400}
            height={900}
            className="w-full h-auto block"
            priority
            quality={95}
            sizes="80vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
