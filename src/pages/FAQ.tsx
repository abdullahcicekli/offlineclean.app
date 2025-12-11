import FAQAccordion from '../components/FAQAccordion'
import { useLanguage } from '../hooks/useLanguage'

export default function FAQ() {
  const { t } = useLanguage()

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.faq.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ List */}
        <FAQAccordion showAll />

        {/* Contact CTA */}
        <div className="mt-12 text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We're here to help. Contact us anytime.
          </p>
          <a
            href="mailto:support@tinylapse.com"
            className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-xl font-medium hover:bg-brand-blue/90 transition-colors duration-300"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}
