import {
  Hand,
  Shield,
  HardDrive,
  FolderOpen,
  Undo2,
  Trash2,
  ArrowUpDown,
  Video,
  BarChart3,
} from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

export default function Features() {
  const { t } = useLanguage()

  const featureIcons = [
    Hand,
    Shield,
    HardDrive,
    FolderOpen,
    Undo2,
    Trash2,
    ArrowUpDown,
    Video,
    BarChart3,
  ]

  const featureColors = [
    'bg-blue-500/10 text-blue-500 dark:bg-blue-500/20',
    'bg-green-500/10 text-green-500 dark:bg-green-500/20',
    'bg-purple-500/10 text-purple-500 dark:bg-purple-500/20',
    'bg-orange-500/10 text-orange-500 dark:bg-orange-500/20',
    'bg-pink-500/10 text-pink-500 dark:bg-pink-500/20',
    'bg-red-500/10 text-red-500 dark:bg-red-500/20',
    'bg-yellow-500/10 text-yellow-500 dark:bg-yellow-500/20',
    'bg-cyan-500/10 text-cyan-500 dark:bg-cyan-500/20',
    'bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20',
  ]

  return (
    <section id="features" className="bg-gray-50 dark:bg-gray-950">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {t.features.title}{' '}
            <span className="gradient-text">{t.features.titleHighlight}</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((feature, index) => {
            const Icon = featureIcons[index]
            const colorClass = featureColors[index]

            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-brand-blue/50 dark:hover:border-brand-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/10"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${colorClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
