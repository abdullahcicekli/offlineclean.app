import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

interface FAQAccordionProps {
  showAll?: boolean
}

export default function FAQAccordion({ showAll = false }: FAQAccordionProps) {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const items = showAll ? t.faq.items : t.faq.items.slice(0, 5)

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <span className="font-medium text-gray-900 dark:text-white pr-4">
              {item.question}
            </span>
            <ChevronDown
              size={20}
              className={`flex-shrink-0 text-gray-500 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-6 text-gray-600 dark:text-gray-400">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
