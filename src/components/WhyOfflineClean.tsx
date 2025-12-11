import { Shield, Sparkles, UserX, BatteryCharging } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export default function WhyOfflineClean() {
  const { t } = useLanguage()

  const reasonIcons = [Shield, Sparkles, UserX, BatteryCharging]

  return (
    <section className="bg-white dark:bg-black">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {t.whyOfflineClean.title}{' '}
            <span className="gradient-text">{t.whyOfflineClean.titleHighlight}</span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.whyOfflineClean.reasons.map((reason, index) => {
            const Icon = reasonIcons[index]

            return (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center">
                    <Icon size={24} className="text-brand-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {reason.description}
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
