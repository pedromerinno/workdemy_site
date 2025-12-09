'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'

// Tipo para o evento customizado de visibilidade da seção
interface SequenceVisibilityEvent extends CustomEvent {
  detail: { isVisible: boolean }
}

export default function ChatDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [isInSequenceSection, setIsInSequenceSection] = useState(false)
  const t = useTranslations()

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

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

  // Fechar com ESC
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    // Prevenir scroll do body quando o dialog está aberto
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleAction = (action: string) => {
    // Aqui você pode implementar a lógica de cada ação
    console.log('Action:', action)
    // Por exemplo, redirecionar para uma página ou abrir um formulário
    handleClose()
  }

  return (
    <>
      {/* Floating Action Button - Aparece em todo o site, exceto na seção de sequência */}
      <AnimatePresence>
        {!isOpen && !isInSequenceSection && (
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
            onClick={handleOpen}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A6631F] active:scale-95"
            style={{
              backgroundColor: 'rgb(166 99 31)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(166, 99, 31, 0.9)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgb(166 99 31)'
            }}
            aria-label={t.chatDialog.openChat}
            aria-expanded={isOpen}
          >
            <MessageCircle className="w-6 h-6" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Dialog */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/20 z-40"
              aria-hidden="true"
            />

            {/* Dialog Content */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 300,
              }}
              className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[calc(100vw-3rem)] max-w-sm bg-white rounded-xl shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-labelledby="chat-dialog-title"
              aria-describedby="chat-dialog-description"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                aria-label={t.chatDialog.close}
              >
                <X className="w-4 h-4 text-black" aria-hidden="true" />
              </button>

              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <h2
                    id="chat-dialog-title"
                    className="text-lg font-bold text-black mb-2"
                  >
                    {t.chatDialog.welcome} 👋
                  </h2>
                  <p
                    id="chat-dialog-description"
                    className="text-sm text-black/70 leading-relaxed"
                  >
                    {t.chatDialog.question}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2.5">
                  <button
                    onClick={() => handleAction('ai-sales')}
                    className="w-full px-4 py-3 rounded-full font-medium text-sm text-black bg-white border border-gray-200 transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 text-left"
                  >
                    {t.chatDialog.talkToAI}
                  </button>

                  <button
                    onClick={() => handleAction('signup')}
                    className="w-full px-4 py-3 rounded-full font-medium text-sm text-black bg-white border border-gray-200 transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 text-left"
                  >
                    {t.chatDialog.signUp}
                  </button>

                  <button
                    onClick={() => handleAction('demo')}
                    className="w-full px-4 py-3 rounded-full font-medium text-sm text-black bg-white border border-gray-200 transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 text-left"
                  >
                    {t.chatDialog.scheduleDemo}
                  </button>

                  <button
                    onClick={() => handleAction('support')}
                    className="w-full px-4 py-3 rounded-full font-medium text-sm text-black bg-white border border-gray-200 transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 text-left"
                  >
                    {t.chatDialog.needSupport}
                  </button>
                </div>

                {/* Footer */}
                <p className="mt-4 text-xs text-black/50 leading-relaxed">
                  {t.chatDialog.privacyNotice}{' '}
                  <a
                    href="/politica-privacidade"
                    className="underline hover:text-black/70 transition-colors"
                  >
                    {t.chatDialog.privacyPolicy}
                  </a>
                  .
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
