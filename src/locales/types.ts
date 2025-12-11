export type Language = 'tr' | 'en'

export interface Translation {
  // Navigation
  nav: {
    features: string
    howItWorks: string
    faq: string
    contact: string
  }

  // Hero
  hero: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    cta: string
    statsItems: Array<{
      text: string
    }>
  }

  // Features
  features: {
    title: string
    titleHighlight: string
    items: Array<{
      title: string
      description: string
    }>
  }

  // Why OfflineClean
  whyOfflineClean: {
    title: string
    titleHighlight: string
    reasons: Array<{
      title: string
      description: string
    }>
  }

  // How It Works
  howItWorks: {
    title: string
    subtitle: string
    titleHighlight: string
    steps: Array<{
      title: string
      description: string
    }>
  }

  // App Screenshots
  appScreenshots: {
    title: string
    titleHighlight: string
    subtitle: string
    screenshots: Array<{
      title: string
      description: string
    }>
  }

  // Pricing
  pricing: {
    title: string
    titleHighlight: string
    freeTrial: string
    freeTrialBadge: string
    plans: {
      weekly: {
        name: string
        period: string
        description: string
        features: string[]
      }
      yearly: {
        name: string
        period: string
        description: string
        badge: string
        features: string[]
      }
    }
    cta: string
    cancelAnytime: string
    disclaimer: string
  }

  // CTA
  cta: {
    title: string
    subtitle: string
    button: string
    availableText: string
  }

  // Footer
  footer: {
    description: string
    product: string
    quickLinks: string
    legal: string
    followUs: string
    copyright: string
    productLinks: Array<{
      name: string
    }>
    legalLinks: Array<{
      name: string
    }>
  }

  // FAQ
  faq: {
    title: string
    subtitle: string
    items: Array<{
      question: string
      answer: string
    }>
  }

  // Contact Page
  contact: {
    title: string
    subtitle: string
  }

  // Privacy Page
  privacy: {
    title: string
    lastUpdated: string
    intro: string
    sections: Array<{
      title: string
      content: string
      items?: Array<{
        label: string
        text: string
      }>
    }>
    contactEmail: string
  }

  // Terms Page
  terms: {
    title: string
    lastUpdated: string
    intro: string
    sections: Array<{
      title: string
      content: string
      items?: string[]
    }>
    contactEmail: string
  }
}
