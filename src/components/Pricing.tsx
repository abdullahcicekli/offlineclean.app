import { Check } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export default function Pricing() {
  const { t } = useLanguage()

  return (
    <section className="bg-white dark:bg-black">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.pricing.title}{' '}
            <span className="gradient-text">{t.pricing.titleHighlight}</span>
          </h2>
          <div className="inline-flex items-center space-x-2 bg-brand-green/10 dark:bg-brand-green/20 rounded-full px-4 py-2">
            <span className="text-sm font-medium text-brand-green">{t.pricing.freeTrial}</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Weekly Plan */}
          <div className="relative bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {t.pricing.plans.weekly.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
              {t.pricing.plans.weekly.description}
            </p>

            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">$3.99</span>
              <span className="text-gray-600 dark:text-gray-400">{t.pricing.plans.weekly.period}</span>
            </div>

            <ul className="space-y-3 mb-8">
              {t.pricing.plans.weekly.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check size={18} className="text-brand-green flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://apps.apple.com/app/id6756331340"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 px-6 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {t.pricing.cta}
            </a>
          </div>

          {/* Yearly Plan */}
          <div className="relative bg-gradient-to-br from-brand-blue/5 to-brand-green/5 dark:from-brand-blue/10 dark:to-brand-green/10 rounded-2xl p-8 border-2 border-brand-blue">
            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-brand-blue to-brand-green text-white text-xs font-bold px-3 py-1 rounded-full">
                {t.pricing.plans.yearly.badge}
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {t.pricing.plans.yearly.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
              {t.pricing.plans.yearly.description}
            </p>

            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">$39.99</span>
              <span className="text-gray-600 dark:text-gray-400">{t.pricing.plans.yearly.period}</span>
              <div className="text-sm text-brand-green mt-1">~ $0.77/week</div>
            </div>

            <ul className="space-y-3 mb-8">
              {t.pricing.plans.yearly.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check size={18} className="text-brand-green flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://apps.apple.com/app/id6756331340"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 px-6 rounded-xl bg-gradient-to-r from-brand-blue to-brand-green text-white font-medium hover:opacity-90 transition-opacity duration-300"
            >
              {t.pricing.cta}
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 dark:text-gray-500 text-sm max-w-2xl mx-auto">
            {t.pricing.cancelAnytime}
          </p>
        </div>
      </div>
    </section>
  )
}
