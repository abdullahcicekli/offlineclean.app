import { tr } from './tr'
import { en } from './en'
import type { Language, Translation } from './types'

export const translations: Record<Language, Translation> = {
  tr,
  en,
}

export const defaultLanguage: Language = 'en'

export const supportedLanguages: Language[] = ['en', 'tr']

export const languageNames: Record<Language, string> = {
  en: 'English',
  tr: 'Turkce',
}

// RTL languages list
export const rtlLanguages: Language[] = []

// Check if a language is RTL
export const isRTL = (language: Language): boolean => {
  return rtlLanguages.includes(language)
}

// Detect browser language and return supported language or default
export const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase()

  // Check exact match first (e.g., 'tr', 'en')
  if (supportedLanguages.includes(browserLang as Language)) {
    return browserLang as Language
  }

  // Check language code without region (e.g., 'en-US' -> 'en')
  const langCode = browserLang.split('-')[0] as Language
  if (supportedLanguages.includes(langCode)) {
    return langCode
  }

  // Return default language
  return defaultLanguage
}

export type { Language, Translation }
