import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ui/ScrollToTop'
import Hero from './components/sections/Hero'
import GlobalReach from './components/sections/GlobalReach'
import FeeFree from './components/sections/FeeFree'
import ShowcaseTalents from './components/sections/ShowcaseTalents'
import HelpCTA from './components/sections/HelpCTA'
import CommonQuestions from './components/sections/CommonQuestions'
import Pricing from './components/sections/Pricing'

export default function App() {
  return (
    <>
      <a
        href="#global-reach"
        className="focus-ring sr-only z-[60] rounded-lg bg-white px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <GlobalReach />
        <FeeFree />
        <ShowcaseTalents />
        <HelpCTA />
        <CommonQuestions />
        <Pricing />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  )
}
