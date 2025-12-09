import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import CookieConsent from '@/components/CookieConsent'
import ChatDialog from '@/components/ChatDialog'

export const metadata: Metadata = {
  title: 'Workdemy | Cultura começa aqui.',
  description: 'Plataforma de Gestão Educacional - Workdemy.',
  icons: {
    icon: '/assets/favicon.svg',
    shortcut: '/assets/favicon.svg',
    apple: '/assets/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <body>
        <LanguageProvider>
          {children}
          <CookieConsent />
          <ChatDialog />
        </LanguageProvider>
      </body>
    </html>
  )
}

