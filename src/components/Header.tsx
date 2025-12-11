import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Globe, Sun, Moon } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { useTheme } from '../hooks/useTheme'
import { supportedLanguages, languageNames, type Language } from '../locales'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { language, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  const isActive = (path: string) => {
    return location.pathname === path || location.hash === path
  }

  const navLinks = [
    { name: t.nav.features, path: `/${language}#features` },
    { name: t.nav.howItWorks, path: `/${language}#how-it-works` },
    { name: t.nav.faq, path: `/${language}/faq` },
    { name: t.nav.contact, path: `/${language}/contact` },
  ]

  const switchLanguage = (newLang: Language) => {
    // Get current path without language prefix
    const pathParts = location.pathname.split('/')
    pathParts[1] = newLang // Replace language code
    const newPath = pathParts.join('/') || `/${newLang}`
    navigate(newPath)
    setIsLangMenuOpen(false)
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={`/${language}`} className="flex items-center space-x-3 group">
            <img
              src="/apple-touch-icon.png"
              alt="OfflineClean Logo"
              className="w-10 h-10 app-icon transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-gray-900 dark:text-white font-semibold text-lg">OfflineClean</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-brand-blue dark:text-brand-blue'
                    : 'text-gray-600 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-blue transition-colors duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-blue transition-colors duration-300"
                aria-label="Change language"
              >
                <Globe size={18} />
                <span>{language.toUpperCase()}</span>
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl overflow-hidden">
                  {supportedLanguages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => switchLanguage(lang)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                        language === lang
                          ? 'bg-brand-blue/20 text-brand-blue dark:text-brand-blue'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-brand-blue dark:hover:text-brand-blue'
                      }`}
                    >
                      {languageNames[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="https://apps.apple.com/app/id6756331340"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/download_badge.png"
                alt="Download on the App Store"
                className="h-8 w-auto"
              />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-900 dark:text-white hover:text-brand-blue dark:hover:text-brand-blue transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-brand-blue dark:text-brand-blue'
                      : 'text-gray-600 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-blue'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Theme Toggle */}
              <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                  <span>Theme</span>
                </div>
                <button
                  onClick={toggleTheme}
                  className="w-full px-3 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
              </div>

              {/* Mobile Language Switcher */}
              <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  <Globe size={16} />
                  <span>Language</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {supportedLanguages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => switchLanguage(lang)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        language === lang
                          ? 'bg-brand-blue/20 text-brand-blue dark:text-brand-blue border border-brand-blue/30'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-brand-blue dark:hover:text-brand-blue'
                      }`}
                    >
                      {languageNames[lang]}
                    </button>
                  ))}
                </div>
              </div>

              <a
                href="https://apps.apple.com/app/id6756331340"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center transition-transform duration-300 hover:scale-105"
              >
                <img
                  src="/download_badge.png"
                  alt="Download on the App Store"
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
