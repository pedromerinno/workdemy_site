'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'pt' | 'en' | 'es'

interface LanguageContextType {
  currentLanguage: Language
  setCurrentLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguageState] = useState<Language>('pt')
  const [isHydrated, setIsHydrated] = useState(false)

  // Carrega o idioma salvo do localStorage na inicialização (após hidratação)
  useEffect(() => {
    setIsHydrated(true)
    const savedLanguage = localStorage.getItem('workdemy-language') as Language | null
    if (savedLanguage && ['pt', 'en', 'es'].includes(savedLanguage)) {
      setCurrentLanguageState(savedLanguage)
      // Atualiza o atributo lang do HTML
      document.documentElement.lang = savedLanguage === 'pt' ? 'pt-BR' : savedLanguage === 'es' ? 'es-ES' : 'en-US'
    }
  }, [])

  // Salva o idioma no localStorage e atualiza o atributo lang do HTML
  const setCurrentLanguage = (lang: Language) => {
    setCurrentLanguageState(lang)
    localStorage.setItem('workdemy-language', lang)
    
    // Atualiza o atributo lang do HTML para acessibilidade
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es-ES' : 'en-US'
    }
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
