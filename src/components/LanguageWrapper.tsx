import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import type { Language } from '../locales'

interface LanguageWrapperProps {
  lang: Language
}

export default function LanguageWrapper({ lang }: LanguageWrapperProps) {
  const { setLanguage } = useLanguage()

  useEffect(() => {
    setLanguage(lang)
  }, [lang, setLanguage])

  return <Outlet />
}
