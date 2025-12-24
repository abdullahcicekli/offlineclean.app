import type { Translation } from './types'

export const pl: Translation = {
  nav: {
    features: 'Funkcje',
    howItWorks: 'Jak to działa',
    faq: 'FAQ',
    contact: 'Kontakt',
  },

  hero: {
    badge: 'Dostępne na iPhone',
    title: 'Uporządkuj swoje zdjęcia',
    titleHighlight: 'Prostymi przesunięciami',
    subtitle:
      'OfflineClean pomaga uporządkować i zwolnić miejsce na iPhone. Przesuń w prawo, aby zachować, w lewo, aby usunąć. 100% prywatności - całe przetwarzanie odbywa się na Twoim urządzeniu.',
    cta: 'Pobierz za darmo',
    statsItems: [
      { text: 'Przesuń, aby zdecydować' },
      { text: 'Zwolnij miejsce' },
      { text: '100% Prywatności' },
      { text: 'Bez uploadu do chmury' },
    ],
  },

  features: {
    title: 'Potężne',
    titleHighlight: 'Funkcje',
    items: [
      {
        title: 'Przesuń, aby zdecydować',
        description:
          'Prosty i intuicyjny interfejs. Przesuń w prawo, aby zachować, przesuń w lewo, aby usunąć. Podejmuj decyzje w sekundy.',
      },
      {
        title: '100% Prywatności',
        description:
          'Twoje zdjęcia nigdy nie opuszczają urządzenia. Żadnych uploadów, żadnych serwerów, żadnego śledzenia. Pełna prywatność gwarantowana.',
      },
      {
        title: 'Zwolnij pamięć',
        description:
          'Łatwo identyfikuj i usuwaj niechciane zdjęcia, aby zwolnić cenną przestrzeń dyskową na iPhone.',
      },
      {
        title: 'Organizacja albumów',
        description:
          'Uporządkuj konkretne albumy lub przeglądaj wszystkie zdjęcia. Idealne do organizowania podróży lub wydarzeń.',
      },
      {
        title: 'Cofnij w każdej chwili',
        description:
          'Pomyłka? Nie ma problemu. Cofnij ostatnią decyzję lub zresetuj cały postęp w dowolnym momencie.',
      },
      {
        title: 'Bezpieczne usuwanie',
        description:
          'Usunięte zdjęcia trafiają do folderu Ostatnio usunięte. Masz 30 dni na ich odzyskanie, jeśli zajdzie potrzeba.',
      },
      {
        title: 'Opcje sortowania',
        description:
          'Sortuj zdjęcia według daty, rozmiaru lub albumu. Szybciej znajdź to, co dla Ciebie ważne.',
      },
      {
        title: 'Obsługa wideo',
        description:
          'Nie tylko zdjęcia - uporządkuj też swoje filmy z tym samym intuicyjnym interfejsem przesuwania.',
      },
      {
        title: 'Śledzenie postępu',
        description:
          'Zobacz w czasie rzeczywistym, ile zdjęć przejrzałeś, zachowałeś i oznaczyłeś do usunięcia.',
      },
    ],
  },

  whyOfflineClean: {
    title: 'Dlaczego wybrać',
    titleHighlight: 'OfflineClean',
    reasons: [
      {
        title: 'Pełna prywatność',
        description:
          'W przeciwieństwie do rozwiązań chmurowych, Twoje zdjęcia nigdy nie opuszczają urządzenia. Traktujemy Twoją prywatność poważnie.',
      },
      {
        title: 'Intuicyjny design',
        description:
          'Inspirowany najlepszymi doświadczeniami mobilnymi. Decyzje oparte na przesunięciach sprawiają, że porządkowanie biblioteki jest szybkie i przyjemne.',
      },
      {
        title: 'Bez konta',
        description:
          'Zacznij korzystać natychmiast bez tworzenia konta. Bez e-maila, bez hasła, bez kłopotów.',
      },
      {
        title: 'Oszczędność baterii',
        description:
          'Zoptymalizowany pod kątem wydajności. Uporządkuj zdjęcia bez rozładowywania baterii.',
      },
    ],
  },

  howItWorks: {
    title: 'Jak to',
    titleHighlight: 'działa',
    subtitle: 'Uporządkuj bibliotekę zdjęć w czterech prostych krokach',
    steps: [
      {
        title: 'Udziel dostępu do zdjęć',
        description:
          'Pozwól OfflineClean na dostęp do biblioteki zdjęć. Twoje zdjęcia pozostają na urządzeniu.',
      },
      {
        title: 'Przesuwaj zdjęcia',
        description:
          'Przesuń w prawo, aby zachować zdjęcia, które lubisz. Przesuń w lewo, aby oznaczyć zdjęcia do usunięcia.',
      },
      {
        title: 'Przejrzyj swoje decyzje',
        description:
          'Sprawdź zachowane i oznaczone zdjęcia. Przenoś elementy między listami, jeśli zmienisz zdanie.',
      },
      {
        title: 'Potwierdź i zwolnij miejsce',
        description:
          'Dotknij zakończ, aby przenieść oznaczone zdjęcia do Ostatnio usuniętych. Ciesz się zwolnioną pamięcią!',
      },
    ],
  },

  appScreenshots: {
    title: 'Zobacz to w',
    titleHighlight: 'akcji',
    subtitle: 'Piękny design spotyka się z potężną funkcjonalnością',
    screenshots: [
      { title: 'Interfejs przesuwania', description: 'Intuicyjne decyzje oparte na przesunięciach' },
      { title: 'Przegląd postępu', description: 'Śledź postęp porządkowania' },
      { title: 'Wybór albumu', description: 'Uporządkuj konkretne albumy' },
    ],
  },

  pricing: {
    title: 'Proste',
    titleHighlight: 'Ceny',
    freeTrial: '3 dni bezpłatnego okresu próbnego',
    freeTrialBadge: 'Wypróbuj za darmo',
    plans: {
      weekly: {
        name: 'Tygodniowo',
        price: '$3.99',
        period: '/tydzień',
        description: 'Idealne do okazjonalnego porządkowania',
        features: ['Nieograniczone przesunięcia', 'Wszystkie funkcje w cenie', 'Anuluj kiedy chcesz'],
      },
      yearly: {
        name: 'Rocznie',
        price: '$29.99',
        period: '/rok',
        description: 'Najlepsza wartość dla regularnych użytkowników',
        badge: 'Oszczędź 80%',
        perWeek: '~ $0.58/tydzień',
        features: [
          'Nieograniczone przesunięcia',
          'Wszystkie funkcje w cenie',
          'Anuluj kiedy chcesz',
          'Priorytetowe wsparcie',
        ],
      },
    },
    cta: 'Rozpocznij bezpłatny okres próbny',
    cancelAnytime: 'Anuluj kiedy chcesz. Bez pytań.',
    disclaimer:
      'Płatność zostanie pobrana z Twojego konta Apple ID. Subskrypcja odnawia się automatycznie, chyba że zostanie anulowana co najmniej 24 godziny przed końcem bieżącego okresu.',
  },

  cta: {
    title: 'Zacznij dziś porządkować swoją bibliotekę zdjęć',
    subtitle:
      'Pobierz OfflineClean i zwolnij miejsce na iPhone. 100% prywatności, 100% na urządzeniu.',
    button: 'Pobierz za darmo',
    availableText: 'Dostępne w App Store',
  },

  footer: {
    description:
      'Uporządkuj bibliotekę zdjęć prostymi przesunięciami. 100% prywatności, całe przetwarzanie odbywa się na Twoim urządzeniu.',
    product: 'Produkt',
    quickLinks: 'Szybkie linki',
    legal: 'Prawne',
    followUs: 'Obserwuj nas',
    copyright: '2025 OfflineClean. Wszelkie prawa zastrzeżone.',
    productLinks: [{ name: 'Funkcje' }, { name: 'Jak to działa' }, { name: 'Pobierz' }],
    legalLinks: [{ name: 'Polityka prywatności' }, { name: 'Warunki usługi' }, { name: 'Kontakt' }],
  },

  faq: {
    title: 'Często zadawane pytania',
    subtitle: 'Znajdź odpowiedzi na częste pytania dotyczące OfflineClean',
    items: [
      {
        question: 'Czy moje dane są bezpieczne z OfflineClean?',
        answer:
          'Absolutnie! OfflineClean przetwarza wszystko na Twoim urządzeniu. Twoje zdjęcia nigdy nie opuszczają iPhone\'a, a my nie mamy dostępu do Twoich danych. Żadnych uploadów do chmury, żadnych serwerów, żadnego śledzenia.',
      },
      {
        question: 'Co się dzieje z usuniętymi zdjęciami?',
        answer:
          'Zdjęcia oznaczone do usunięcia są przenoszone do albumu Ostatnio usunięte w aplikacji Zdjęcia. Masz 30 dni na ich odzyskanie, zanim zostaną trwale usunięte.',
      },
      {
        question: 'Czy potrzebuję połączenia z internetem?',
        answer:
          'Nie! OfflineClean działa całkowicie offline. Całe przetwarzanie odbywa się lokalnie na Twoim urządzeniu. Internet nie jest wymagany.',
      },
      {
        question: 'Czy mogę cofnąć swoje decyzje?',
        answer:
          'Tak! Możesz cofnąć ostatnią decyzję w dowolnym momencie za pomocą przycisku cofnij. Możesz też zresetować cały postęp i zacząć od nowa, jeśli zajdzie potrzeba.',
      },
      {
        question: 'Czy jest bezpłatny okres próbny?',
        answer:
          'Tak! Oferujemy 3-dniowy bezpłatny okres próbny, abyś mógł wypróbować wszystkie funkcje przed podjęciem decyzji o subskrypcji.',
      },
      {
        question: 'Jak anulować subskrypcję?',
        answer:
          'Możesz anulować subskrypcję w dowolnym momencie w ustawieniach Apple ID. Przejdź do Ustawienia > Twoje imię > Subskrypcje i znajdź OfflineClean.',
      },
      {
        question: 'Czy działa z filmami?',
        answer:
          'Tak! OfflineClean obsługuje zarówno zdjęcia, jak i filmy. Możesz podglądać filmy i decydować z tym samym interfejsem przesuwania.',
      },
      {
        question: 'Czy mogę uporządkować konkretne albumy?',
        answer:
          'Absolutnie! Możesz wybrać konkretne albumy do uporządkowania lub przeglądać wszystkie zdjęcia. Idealne do organizowania podróży lub wydarzeń.',
      },
    ],
  },

  contact: {
    title: 'Skontaktuj się z nami',
    subtitle: 'Masz pytania lub opinię? Chętnie Cię wysłuchamy.',
  },

  privacy: {
    title: 'Polityka prywatności',
    lastUpdated: 'Ostatnia aktualizacja: Grudzień 2024',
    intro:
      'OfflineClean zobowiązuje się do ochrony Twojej prywatności. Ta Polityka prywatności wyjaśnia, jak postępujemy z Twoimi informacjami.',
    sections: [
      {
        title: 'Zbieranie danych',
        content:
          'OfflineClean nie zbiera żadnych danych osobowych. Całe przetwarzanie zdjęć odbywa się lokalnie na Twoim urządzeniu. Nie mamy dostępu do Twoich zdjęć i nic nie jest wysyłane na żaden serwer.',
      },
      {
        title: 'Dostęp do zdjęć',
        content:
          'OfflineClean wymaga dostępu do biblioteki zdjęć, aby działać. Ten dostęp jest używany wyłącznie do wyświetlania zdjęć w aplikacji i usuwania zdjęć, które zdecydujesz się usunąć. Twoje zdjęcia nigdy nie opuszczają urządzenia.',
      },
      {
        title: 'Analityka i pomiary',
        content:
          'Używamy Meta SDK do zbierania anonimowych statystyk użytkowania w celu poprawy doświadczenia z aplikacją i skalowania naszych usług. Te dane nie zawierają Twoich informacji osobowych ani zdjęć. Rejestrujemy tylko zdarzenia użytkowania aplikacji.',
        items: [
          { label: 'Rejestracja zakończona', text: 'Po zakończeniu procesu wdrożenia' },
          { label: 'Start próby', text: 'Gdy rozpoczyna się bezpłatny okres próbny' },
          { label: 'Zakup', text: 'Zdarzenia zakupu subskrypcji' },
          { label: 'Wyświetlenie treści', text: 'Gdy wyświetlany jest ekran paywall' },
          { label: 'Rozpoczęcie płatności', text: 'Po naciśnięciu przycisku zakupu' },
          { label: 'Usunięcie zdjęć', text: 'Liczba usuniętych zdjęć (nie zawartość)' },
          { label: 'Sprzątanie zakończone', text: 'Po zakończeniu sesji sprzątania' },
          { label: 'Arena zakończona', text: 'Po ukończeniu wyzwania arena' },
          { label: 'Analiza zakończona', text: 'Analiza podobnych, rozmazanych zdjęć lub zrzutów ekranu' },
        ],
      },
      {
        title: 'Usługi zewnętrzne',
        content:
          'OfflineClean używa Apple In-App Purchase do zarządzania subskrypcjami. Apple może zbierać dane zgodnie z opisem w swojej polityce prywatności.',
      },
      {
        title: 'Kontakt',
        content: 'Jeśli masz pytania dotyczące tej Polityki prywatności, skontaktuj się z nami.',
      },
    ],
    contactText: 'W przypadku pytań dotyczących tej Polityki prywatności prosimy o kontakt pod adresem:',
    contactEmail: 'support@tinylapse.com',
  },

  terms: {
    title: 'Warunki usługi',
    lastUpdated: 'Ostatnia aktualizacja: Grudzień 2024',
    intro:
      'Korzystając z OfflineClean, zgadzasz się na niniejsze Warunki usługi. Przeczytaj je uważnie.',
    sections: [
      {
        title: 'Korzystanie z aplikacji',
        content:
          'OfflineClean jest dostarczany w stanie, w jakim jest, do użytku osobistego. Ponosisz odpowiedzialność za wszystkie zdjęcia, które zdecydujesz się usunąć za pomocą aplikacji.',
      },
      {
        title: 'Subskrypcje',
        content:
          'OfflineClean oferuje plany subskrypcji dla funkcji premium. Subskrypcje są zarządzane przez Apple In-App Purchase i podlegają warunkom Apple.',
        items: [
          'Płatność jest pobierana z konta Apple ID po potwierdzeniu zakupu',
          'Subskrypcja odnawia się automatycznie, chyba że zostanie anulowana co najmniej 24 godziny przed końcem bieżącego okresu',
          'Możesz zarządzać subskrypcjami i je anulować w ustawieniach konta Apple ID',
        ],
      },
      {
        title: 'Ograniczenie odpowiedzialności',
        content:
          'OfflineClean nie ponosi odpowiedzialności za utratę danych wynikającą z korzystania z aplikacji. Usunięte zdjęcia są przenoszone do albumu Ostatnio usunięte i można je odzyskać w ciągu 30 dni.',
      },
      {
        title: 'Zmiany warunków',
        content:
          'Możemy od czasu do czasu aktualizować niniejsze Warunki usługi. Dalsze korzystanie z aplikacji po zmianach oznacza akceptację nowych warunków.',
      },
    ],
    contactText: 'W przypadku pytań dotyczących niniejszych Warunków usługi prosimy o kontakt pod adresem:',
    contactEmail: 'support@tinylapse.com',
  },
}
