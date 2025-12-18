import { tr } from './tr'
import { en } from './en'
import { arSA } from './ar-SA'
import { deDE } from './de-DE'
import { enGB } from './en-GB'
import { enUS } from './en-US'
import { esES } from './es-ES'
import { esMX } from './es-MX'
import { frFR } from './fr-FR'
import { hi } from './hi'
import { it } from './it'
import { ja } from './ja'
import { ko } from './ko'
import { nlNL } from './nl-NL'
import { pl } from './pl'
import { ptBR } from './pt-BR'
import { ru } from './ru'
import { vi } from './vi'
import { zhHans } from './zh-Hans'
import type { Language, Translation } from './types'

export const translations: Record<Language, Translation> = {
  en,
  tr,
  'ar-SA': arSA,
  'de-DE': deDE,
  'en-GB': enGB,
  'en-US': enUS,
  'es-ES': esES,
  'es-MX': esMX,
  'fr-FR': frFR,
  hi,
  it,
  ja,
  ko,
  'nl-NL': nlNL,
  pl,
  'pt-BR': ptBR,
  ru,
  vi,
  'zh-Hans': zhHans,
}

export const defaultLanguage: Language = 'en'

export const supportedLanguages: Language[] = [
  'en',
  'tr',
  'ar-SA',
  'de-DE',
  'en-GB',
  'en-US',
  'es-ES',
  'es-MX',
  'fr-FR',
  'hi',
  'it',
  'ja',
  'ko',
  'nl-NL',
  'pl',
  'pt-BR',
  'ru',
  'vi',
  'zh-Hans',
]

export const languageNames: Record<Language, string> = {
  en: 'English',
  tr: 'Türkçe',
  'ar-SA': 'العربية',
  'de-DE': 'Deutsch',
  'en-GB': 'English (UK)',
  'en-US': 'English (US)',
  'es-ES': 'Español (España)',
  'es-MX': 'Español (México)',
  'fr-FR': 'Français',
  hi: 'हिन्दी',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  'nl-NL': 'Nederlands',
  pl: 'Polski',
  'pt-BR': 'Português (Brasil)',
  ru: 'Русский',
  vi: 'Tiếng Việt',
  'zh-Hans': '简体中文',
}

// RTL languages list
export const rtlLanguages: Language[] = ['ar-SA']

// Check if a language is RTL
export const isRTL = (language: Language): boolean => {
  return rtlLanguages.includes(language)
}

// Detect browser language and return supported language or default
export const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase()

  // Check exact match first (e.g., 'tr', 'en', 'ar-sa', 'de-de')
  if (supportedLanguages.includes(browserLang as Language)) {
    return browserLang as Language
  }

  // Check with different case variations for regional codes
  const normalizedLang = browserLang.replace('_', '-')
  const matchedLang = supportedLanguages.find(
    (lang) => lang.toLowerCase() === normalizedLang
  )
  if (matchedLang) {
    return matchedLang
  }

  // Check language code without region (e.g., 'en-US' -> 'en')
  const langCode = browserLang.split('-')[0]

  // First try to find a regional variant
  const regionalMatch = supportedLanguages.find(
    (lang) => lang.toLowerCase().startsWith(langCode + '-')
  )
  if (regionalMatch) {
    return regionalMatch
  }

  // Then check if base language is supported
  if (supportedLanguages.includes(langCode as Language)) {
    return langCode as Language
  }

  // Return default language
  return defaultLanguage
}

export type { Language, Translation }
