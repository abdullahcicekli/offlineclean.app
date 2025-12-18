import type { Translation } from './types'

export const deDE: Translation = {
  nav: {
    features: 'Funktionen',
    howItWorks: 'So funktioniert es',
    faq: 'FAQ',
    contact: 'Kontakt',
  },

  hero: {
    badge: 'Verfügbar für iPhone',
    title: 'Räume deine Fotos auf mit',
    titleHighlight: 'Einfachen Wischgesten',
    subtitle:
      'OfflineClean hilft dir, Speicherplatz auf deinem iPhone zu organisieren und freizugeben. Wische nach rechts zum Behalten, nach links zum Löschen. 100% privat - alle Verarbeitung erfolgt auf deinem Gerät.',
    cta: 'Kostenlos herunterladen',
    statsItems: [
      { text: 'Wischen zum Entscheiden' },
      { text: 'Speicher freigeben' },
      { text: '100% Privat' },
      { text: 'Kein Cloud-Upload' },
    ],
  },

  features: {
    title: 'Leistungsstarke',
    titleHighlight: 'Funktionen',
    items: [
      {
        title: 'Wischen zum Entscheiden',
        description:
          'Einfache und intuitive Benutzeroberfläche. Wische nach rechts zum Behalten, wische nach links zum Löschen. Triff Entscheidungen in Sekunden.',
      },
      {
        title: '100% Privat',
        description:
          'Deine Fotos verlassen niemals dein Gerät. Keine Uploads, keine Server, kein Tracking. Vollständige Privatsphäre garantiert.',
      },
      {
        title: 'Speicher freigeben',
        description:
          'Identifiziere und entferne unerwünschte Fotos einfach, um wertvollen Speicherplatz auf deinem iPhone freizugeben.',
      },
      {
        title: 'Album-Organisation',
        description:
          'Räume bestimmte Alben auf oder durchsuche alle deine Fotos. Perfekt zum Organisieren von Reisen oder Veranstaltungen.',
      },
      {
        title: 'Jederzeit rückgängig',
        description:
          'Einen Fehler gemacht? Kein Problem. Mache deine letzte Entscheidung rückgängig oder setze den gesamten Fortschritt jederzeit zurück.',
      },
      {
        title: 'Sicheres Löschen',
        description:
          'Gelöschte Fotos landen im Ordner "Zuletzt gelöscht". Du hast 30 Tage Zeit, sie bei Bedarf wiederherzustellen.',
      },
      {
        title: 'Sortieroptionen',
        description:
          'Sortiere Fotos nach Datum, Größe oder Album. Finde schneller, was dir wichtig ist.',
      },
      {
        title: 'Video-Unterstützung',
        description:
          'Nicht nur Fotos - räume auch deine Videos mit der gleichen intuitiven Wisch-Oberfläche auf.',
      },
      {
        title: 'Fortschrittsverfolgung',
        description:
          'Sieh in Echtzeit, wie viele Fotos du überprüft, behalten und zum Löschen markiert hast.',
      },
    ],
  },

  whyOfflineClean: {
    title: 'Warum',
    titleHighlight: 'OfflineClean',
    reasons: [
      {
        title: 'Vollständige Privatsphäre',
        description:
          'Anders als Cloud-basierte Lösungen verlassen deine Fotos niemals dein Gerät. Wir nehmen deine Privatsphäre ernst.',
      },
      {
        title: 'Intuitives Design',
        description:
          'Inspiriert von den besten mobilen Erlebnissen. Wisch-basierte Entscheidungen machen das Aufräumen deiner Bibliothek schnell und unterhaltsam.',
      },
      {
        title: 'Kein Konto erforderlich',
        description:
          'Sofort loslegen ohne Kontoerstellung. Keine E-Mail, kein Passwort, kein Aufwand.',
      },
      {
        title: 'Batterieschonend',
        description:
          'Optimiert für Leistung. Räume deine Fotos auf, ohne deinen Akku zu belasten.',
      },
    ],
  },

  howItWorks: {
    title: 'So',
    titleHighlight: 'funktioniert es',
    subtitle: 'Räume deine Fotobibliothek in vier einfachen Schritten auf',
    steps: [
      {
        title: 'Fotozugriff gewähren',
        description:
          'Erlaube OfflineClean den Zugriff auf deine Fotobibliothek. Deine Fotos bleiben auf deinem Gerät.',
      },
      {
        title: 'Durch Fotos wischen',
        description:
          'Wische nach rechts, um Fotos zu behalten, die du liebst. Wische nach links, um Fotos zum Löschen zu markieren.',
      },
      {
        title: 'Entscheidungen überprüfen',
        description:
          'Überprüfe deine behaltenen und markierten Fotos. Verschiebe Elemente zwischen Listen, wenn du deine Meinung änderst.',
      },
      {
        title: 'Bestätigen und Speicher freigeben',
        description:
          'Tippe auf Fertig, um markierte Fotos zu "Zuletzt gelöscht" zu verschieben. Genieße deinen freigegebenen Speicher!',
      },
    ],
  },

  appScreenshots: {
    title: 'Sieh es in',
    titleHighlight: 'Aktion',
    subtitle: 'Schönes Design trifft auf leistungsstarke Funktionalität',
    screenshots: [
      { title: 'Wisch-Oberfläche', description: 'Intuitive wischbasierte Entscheidungen' },
      { title: 'Fortschritt überprüfen', description: 'Verfolge deinen Aufräum-Fortschritt' },
      { title: 'Album-Auswahl', description: 'Räume bestimmte Alben auf' },
    ],
  },

  pricing: {
    title: 'Einfache',
    titleHighlight: 'Preise',
    freeTrial: '3 Tage kostenlos testen',
    freeTrialBadge: 'Kostenlos testen',
    plans: {
      weekly: {
        name: 'Wöchentlich',
        period: '/Woche',
        description: 'Perfekt für gelegentliches Aufräumen',
        features: ['Unbegrenzte Wischgesten', 'Alle Funktionen inklusive', 'Jederzeit kündbar'],
      },
      yearly: {
        name: 'Jährlich',
        period: '/Jahr',
        description: 'Bestes Preis-Leistungs-Verhältnis für regelmäßige Nutzer',
        badge: '80% sparen',
        features: [
          'Unbegrenzte Wischgesten',
          'Alle Funktionen inklusive',
          'Jederzeit kündbar',
          'Prioritäts-Support',
        ],
      },
    },
    cta: 'Kostenlos testen',
    cancelAnytime: 'Jederzeit kündbar. Keine Fragen gestellt.',
    disclaimer:
      'Die Zahlung wird deinem Apple-ID-Konto belastet. Das Abonnement verlängert sich automatisch, es sei denn, es wird mindestens 24 Stunden vor Ende des aktuellen Zeitraums gekündigt.',
  },

  cta: {
    title: 'Beginne heute mit dem Aufräumen deiner Fotobibliothek',
    subtitle:
      'Lade OfflineClean herunter und gib Speicherplatz auf deinem iPhone frei. 100% privat, 100% auf dem Gerät.',
    button: 'Kostenlos herunterladen',
    availableText: 'Im App Store erhältlich',
  },

  footer: {
    description:
      'Räume deine Fotobibliothek mit einfachen Wischgesten auf. 100% privat, alle Verarbeitung erfolgt auf deinem Gerät.',
    product: 'Produkt',
    quickLinks: 'Schnelllinks',
    legal: 'Rechtliches',
    followUs: 'Folge uns',
    copyright: '2024 OfflineClean. Alle Rechte vorbehalten.',
    productLinks: [{ name: 'Funktionen' }, { name: 'So funktioniert es' }, { name: 'Download' }],
    legalLinks: [{ name: 'Datenschutz' }, { name: 'Nutzungsbedingungen' }, { name: 'Kontakt' }],
  },

  faq: {
    title: 'Häufig gestellte Fragen',
    subtitle: 'Finde Antworten auf häufige Fragen zu OfflineClean',
    items: [
      {
        question: 'Sind meine Daten bei OfflineClean sicher?',
        answer:
          'Absolut! OfflineClean verarbeitet alles auf deinem Gerät. Deine Fotos verlassen niemals dein iPhone, und wir haben keinen Zugriff auf deine Daten. Keine Cloud-Uploads, keine Server, kein Tracking.',
      },
      {
        question: 'Was passiert mit gelöschten Fotos?',
        answer:
          'Zum Löschen markierte Fotos werden in das Album "Zuletzt gelöscht" in deiner Fotos-App verschoben. Du hast 30 Tage Zeit, sie wiederherzustellen, bevor sie endgültig gelöscht werden.',
      },
      {
        question: 'Brauche ich eine Internetverbindung?',
        answer:
          'Nein! OfflineClean funktioniert vollständig offline. Alle Verarbeitung erfolgt lokal auf deinem Gerät. Kein Internet erforderlich.',
      },
      {
        question: 'Kann ich meine Entscheidungen rückgängig machen?',
        answer:
          'Ja! Du kannst deine letzte Entscheidung jederzeit mit der Rückgängig-Taste rückgängig machen. Du kannst auch den gesamten Fortschritt zurücksetzen und bei Bedarf neu beginnen.',
      },
      {
        question: 'Gibt es eine kostenlose Testversion?',
        answer:
          'Ja! Wir bieten eine 3-tägige kostenlose Testversion an, damit du alle Funktionen ausprobieren kannst, bevor du dich für ein Abonnement entscheidest.',
      },
      {
        question: 'Wie kündige ich mein Abonnement?',
        answer:
          'Du kannst dein Abonnement jederzeit über deine Apple-ID-Einstellungen kündigen. Gehe zu Einstellungen > Dein Name > Abonnements und finde OfflineClean.',
      },
      {
        question: 'Funktioniert es mit Videos?',
        answer:
          'Ja! OfflineClean unterstützt sowohl Fotos als auch Videos. Du kannst Videos in der Vorschau ansehen und mit der gleichen Wisch-Oberfläche entscheiden.',
      },
      {
        question: 'Kann ich bestimmte Alben aufräumen?',
        answer:
          'Absolut! Du kannst bestimmte Alben zum Aufräumen auswählen oder alle deine Fotos durchsuchen. Perfekt zum Organisieren von Reisen oder Veranstaltungen.',
      },
    ],
  },

  contact: {
    title: 'Kontakt',
    subtitle: 'Hast du Fragen oder Feedback? Wir freuen uns, von dir zu hören.',
  },

  privacy: {
    title: 'Datenschutzrichtlinie',
    lastUpdated: 'Zuletzt aktualisiert: Dezember 2024',
    intro:
      'OfflineClean verpflichtet sich zum Schutz deiner Privatsphäre. Diese Datenschutzrichtlinie erklärt, wie wir mit deinen Informationen umgehen.',
    sections: [
      {
        title: 'Datenerfassung',
        content:
          'OfflineClean sammelt keine persönlichen Daten. Alle Fotoverarbeitung erfolgt lokal auf deinem Gerät. Wir haben keinen Zugriff auf deine Fotos, und nichts wird auf einen Server hochgeladen.',
      },
      {
        title: 'Fotozugriff',
        content:
          'OfflineClean benötigt Zugriff auf deine Fotobibliothek, um zu funktionieren. Dieser Zugriff wird ausschließlich verwendet, um deine Fotos in der App anzuzeigen und Fotos zu löschen, die du entfernen möchtest. Deine Fotos verlassen niemals dein Gerät.',
      },
      {
        title: 'Analysen',
        content:
          'Wir können anonyme Nutzungsanalysen sammeln, um die App-Erfahrung zu verbessern. Diese Daten enthalten keine persönlichen Informationen oder Zugriff auf deine Fotos.',
      },
      {
        title: 'Drittanbieter-Dienste',
        content:
          'OfflineClean verwendet Apple In-App-Käufe für die Abonnementverwaltung. Apple kann Daten wie in ihrer Datenschutzrichtlinie beschrieben sammeln.',
      },
      {
        title: 'Kontakt',
        content: 'Wenn du Fragen zu dieser Datenschutzrichtlinie hast, kontaktiere uns bitte.',
      },
    ],
    contactEmail: 'support@tinylapse.com',
  },

  terms: {
    title: 'Nutzungsbedingungen',
    lastUpdated: 'Zuletzt aktualisiert: Dezember 2024',
    intro:
      'Durch die Nutzung von OfflineClean stimmst du diesen Nutzungsbedingungen zu. Bitte lies sie sorgfältig durch.',
    sections: [
      {
        title: 'Nutzung der App',
        content:
          'OfflineClean wird wie besehen für den persönlichen Gebrauch bereitgestellt. Du bist für alle Fotos verantwortlich, die du mit der App löschen möchtest.',
      },
      {
        title: 'Abonnements',
        content:
          'OfflineClean bietet Abonnementpläne für Premium-Funktionen. Abonnements werden über Apple In-App-Käufe verwaltet und unterliegen den Bedingungen von Apple.',
        items: [
          'Die Zahlung wird bei Kaufbestätigung deinem Apple-ID-Konto belastet',
          'Das Abonnement verlängert sich automatisch, es sei denn, es wird mindestens 24 Stunden vor Ende des aktuellen Zeitraums gekündigt',
          'Du kannst Abonnements in deinen Apple-ID-Kontoeinstellungen verwalten und kündigen',
        ],
      },
      {
        title: 'Haftungsbeschränkung',
        content:
          'OfflineClean ist nicht verantwortlich für Datenverlust, der durch die Nutzung der App entsteht. Gelöschte Fotos werden in das Album "Zuletzt gelöscht" verschoben und können innerhalb von 30 Tagen wiederhergestellt werden.',
      },
      {
        title: 'Änderungen der Bedingungen',
        content:
          'Wir können diese Nutzungsbedingungen von Zeit zu Zeit aktualisieren. Die fortgesetzte Nutzung der App nach Änderungen gilt als Akzeptanz der neuen Bedingungen.',
      },
    ],
    contactEmail: 'support@tinylapse.com',
  },
}
