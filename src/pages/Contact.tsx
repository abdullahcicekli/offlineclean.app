import { Mail, MessageCircle, Instagram } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export default function Contact() {
  const { t } = useLanguage()

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us an email and we will respond within 24 hours.',
      action: 'support@tinylapse.com',
      href: 'mailto:support@tinylapse.com',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Follow us and send a DM for quick questions.',
      action: '@tinylapse',
      href: 'https://instagram.com/tinylapse',
    },
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.contact.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-brand-blue/50 dark:hover:border-brand-blue/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-brand-blue" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {method.description}
                </p>
                <span className="text-brand-blue font-medium">{method.action}</span>
              </a>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-green/10 dark:bg-brand-green/20 flex items-center justify-center flex-shrink-0">
              <MessageCircle size={24} className="text-brand-green" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Response Time
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We typically respond to all inquiries within 24 hours during business days.
                For urgent matters, please mention "URGENT" in your subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
