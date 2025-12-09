'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'

const COOKIE_CONSENT_KEY = 'workdemy-cookie-consent'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [focusedButton, setFocusedButton] = useState<string | null>(null)
  const t = useTranslations()

  useEffect(() => {
    // Verifica se o usuário já deu consentimento
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      // Aguarda um pouco para não sobrecarregar o carregamento inicial
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected')
    setIsVisible(false)
  }

  const handleMoreOptions = () => {
    // Por enquanto, apenas fecha o banner
    // Pode ser expandido para mostrar um modal com opções detalhadas
    localStorage.setItem(COOKIE_CONSENT_KEY, 'custom')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 sm:bottom-6">
        {/* Cookie Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ 
            type: 'spring', 
            damping: 25, 
            stiffness: 300,
            duration: 0.3 
          }}
          className="w-[calc(100vw-2rem)] max-w-4xl bg-white rounded-xl shadow-lg sm:w-full"
          role="dialog"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-description"
        >
          <div className="p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Left side - Icon and Content */}
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5 text-black" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 
                    id="cookie-title"
                    className="text-base font-bold text-black mb-1.5"
                  >
                    {t.cookieConsent.title}
                  </h2>
                  <p 
                    id="cookie-description"
                    className="text-sm text-black/90 leading-relaxed"
                  >
                    {t.cookieConsent.description}
                  </p>
                </div>
              </div>

              {/* Right side - Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 flex-shrink-0 w-full sm:w-auto">
                <button
                  onClick={handleAccept}
                  onFocus={() => setFocusedButton('accept')}
                  onBlur={() => setFocusedButton(null)}
                  className="px-4 py-2 rounded-lg font-medium text-sm text-black bg-white border border-gray-200 transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 whitespace-nowrap"
                  aria-label={t.cookieConsent.acceptAll}
                >
                  {t.cookieConsent.acceptAll}
                </button>

                <button
                  onClick={handleReject}
                  onFocus={() => setFocusedButton('reject')}
                  onBlur={() => setFocusedButton(null)}
                  className="px-4 py-2 rounded-lg font-medium text-sm text-black bg-white border-2 border-[#A0C4FF] transition-all duration-200 hover:bg-gray-50 hover:border-[#7BA3FF] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 whitespace-nowrap"
                  aria-label={t.cookieConsent.rejectAll}
                >
                  {t.cookieConsent.rejectAll}
                </button>

                <button
                  onClick={handleMoreOptions}
                  onFocus={() => setFocusedButton('more')}
                  onBlur={() => setFocusedButton(null)}
                  className="px-4 py-2 rounded-lg font-medium text-sm text-black bg-white border border-gray-200 transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 whitespace-nowrap"
                  aria-label={t.cookieConsent.moreOptions}
                >
                  {t.cookieConsent.moreOptions}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

