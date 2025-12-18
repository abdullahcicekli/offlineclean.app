import { useLanguage } from '../hooks/useLanguage'

export default function Terms() {
  const { t } = useLanguage()

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.terms.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">{t.terms.lastUpdated}</p>
        </div>

        {/* Intro */}
        <div className="prose dark:prose-invert max-w-none mb-8">
          <p className="text-gray-600 dark:text-gray-300">{t.terms.intro}</p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {t.terms.sections.map((section, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">{section.content}</p>
              {section.items && (
                <ul className="mt-4 space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="text-brand-blue mt-1.5">*</span>
                      <span className="text-gray-600 dark:text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400">
            {t.terms.contactText}{' '}
            <a
              href={`mailto:${t.terms.contactEmail}`}
              className="text-brand-blue hover:underline"
            >
              {t.terms.contactEmail}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
