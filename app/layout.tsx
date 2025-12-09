import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import CookieConsent from '@/components/CookieConsent'
import ChatDialog from '@/components/ChatDialog'

export const metadata: Metadata = {
  title: 'Workdemy - Transforme sua carreira com educação de qualidade',
  description: 'Plataforma de educação online que transforma profissionais em especialistas através de cursos práticos e atualizados.',
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

