import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Security from '@/components/Security'
import HowItWorks from '@/components/HowItWorks'
import Screenshots from '@/components/Screenshots'
import TechStack from '@/components/TechStack'
import Download from '@/components/Download'
import FAQ from '@/components/FAQ'
import OpenSource from '@/components/OpenSource'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <Security />
      <HowItWorks />
      <Screenshots />
      <TechStack />
      <Download />
      <FAQ />
      <OpenSource />
      <Footer />
    </main>
  )
}
