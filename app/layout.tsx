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
  openGraph: {
    title: 'Workdemy | Cultura começa aqui.',
    description: 'Plataforma de Gestão Educacional - Workdemy.',
    url: 'https://workdemy.com',
    siteName: 'Workdemy',
    images: [
      {
        url: '/assets/ImageSocials.jpg',
        width: 1200,
        height: 630,
        alt: 'Workdemy - Dashboard',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workdemy | Cultura começa aqui.',
    description: 'Plataforma de Gestão Educacional - Workdemy.',
    images: ['/assets/ImageSocials.jpg'],
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

