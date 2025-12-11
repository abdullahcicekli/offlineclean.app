import Hero from '../components/Hero'
import Features from '../components/Features'
import WhyOfflineClean from '../components/WhyOfflineClean'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import FAQAccordion from '../components/FAQAccordion'
import CTA from '../components/CTA'
import { useLanguage } from '../hooks/useLanguage'
import { Link } from 'react-router-dom'

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      <Hero />
      <Features />
      <WhyOfflineClean />
      <HowItWorks />
      <Pricing />

      {/* FAQ Preview Section */}
      <section id="faq" className="bg-gray-50 dark:bg-gray-950">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t.faq.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t.faq.subtitle}
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion />
            <div className="text-center mt-8">
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue/80 font-medium transition-colors duration-300"
              >
                View all questions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
