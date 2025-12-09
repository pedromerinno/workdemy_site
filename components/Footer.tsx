'use client'

import { Mail, MessageCircle, Linkedin, Instagram, Facebook } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'

export default function Footer() {
  const t = useTranslations()
  
  const navLinks = [
    { label: t.nav.inicio, href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: t.nav.comoFunciona, href: '#como-funciona' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: t.nav.planos, href: '#planos' },
    { label: 'FAQ', href: '#faq' },
  ]

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ]
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer
      id="contato"
      className="border-t border-beige-200/50 py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#F8F7F4' }}
    >
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-beige-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-semibold text-beige-900">Workdemy</span>
            </div>
            <p className="text-beige-800 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-beige-900 mb-4">{t.footer.linksRapidos}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="text-beige-800 hover:text-beige-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-beige-900 mb-4">{t.footer.contato}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contato@workdemy.com"
                  className="flex items-center space-x-2 text-beige-800 hover:text-beige-900 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>contato@workdemy.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-beige-800 hover:text-beige-900 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-semibold text-beige-900 mb-4">{t.footer.redesSociais}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-beige-100 rounded-lg flex items-center justify-center text-beige-800 hover:text-beige-900 hover:bg-beige-200 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-beige-200/50 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-sm text-beige-800">
              © {new Date().getFullYear()} Workdemy. {t.footer.direitosReservados}
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-beige-800 hover:text-beige-900 transition-colors"
              >
                {t.footer.termosUso}
              </a>
              <a
                href="#"
                className="text-beige-800 hover:text-beige-900 transition-colors"
              >
                {t.footer.politicaPrivacidade}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

