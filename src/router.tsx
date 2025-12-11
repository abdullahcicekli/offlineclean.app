import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'
import LanguageWrapper from './components/LanguageWrapper'
import { supportedLanguages, defaultLanguage } from './locales'

export default function Router() {
  return (
    <Routes>
      {/* Redirect root to default language */}
      <Route path="/" element={<Navigate to={`/${defaultLanguage}`} replace />} />

      {/* Language-specific routes */}
      {supportedLanguages.map((lang) => (
        <Route key={lang} path={`/${lang}`} element={<LanguageWrapper lang={lang} />}>
          <Route index element={<Home />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      ))}

      {/* 404 for unknown routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
