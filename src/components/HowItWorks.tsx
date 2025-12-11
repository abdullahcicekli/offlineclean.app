import { Camera, Hand, Eye, CheckCircle } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export default function HowItWorks() {
  const { t } = useLanguage()

  const stepIcons = [Camera, Hand, Eye, CheckCircle]

  return (
    <section id="how-it-works" className="bg-gray-50 dark:bg-gray-950">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.howItWorks.title}{' '}
            <span className="gradient-text">{t.howItWorks.titleHighlight}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.howItWorks.steps.map((step, index) => {
            const Icon = stepIcons[index]

            return (
              <div key={index} className="relative">
                {/* Connector Line (hidden on mobile and last item) */}
                {index < t.howItWorks.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-brand-blue to-brand-green"></div>
                )}

                <div className="relative flex flex-col items-center text-center">
                  {/* Step Number */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center mb-6 shadow-lg shadow-brand-blue/20">
                    <Icon size={32} className="text-white" />
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute top-0 right-1/2 translate-x-10 -translate-y-2 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-2 border-brand-blue flex items-center justify-center text-xs font-bold text-brand-blue">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
