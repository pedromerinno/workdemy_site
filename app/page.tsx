import HeroSection from '@/components/ui/hero-section'
import OProblema from '@/components/OProblema'
import IAProcessos from '@/components/IAProcessos'
import ComoFunciona from '@/components/ComoFunciona'
import RecursosPrincipais from '@/components/RecursosPrincipais'
import ParaQuem from '@/components/ParaQuem'
import ResultadosEsperados from '@/components/ResultadosEsperados'
import Depoimentos from '@/components/Depoimentos'
import FAQ from '@/components/FAQ'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#F8F7F4' }}>
      <div id="inicio">
        <HeroSection />
      </div>
      <OProblema />
      <IAProcessos />
      <ComoFunciona />
      <RecursosPrincipais />
      <ParaQuem />
      <ResultadosEsperados />
      <Depoimentos />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  )
}

