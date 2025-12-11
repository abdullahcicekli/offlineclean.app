import { useLanguage } from '../hooks/useLanguage'

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section className="bg-gradient-to-br from-brand-blue/10 to-brand-green/10 dark:from-brand-blue/20 dark:to-brand-green/20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/app/id6756331340"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/download_badge.png"
                alt="Download on the App Store"
                className="h-12 sm:h-14 w-auto"
              />
            </a>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            {t.cta.availableText}
          </p>
        </div>
      </div>
    </section>
  )
}
