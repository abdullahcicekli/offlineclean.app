import type { Translation } from './types'

export const frFR: Translation = {
  nav: {
    features: 'Fonctionnalités',
    howItWorks: 'Comment ça marche',
    faq: 'FAQ',
    contact: 'Contact',
  },

  hero: {
    badge: 'Disponible sur iPhone',
    title: 'Nettoyez vos Photos avec de',
    titleHighlight: 'Simples Balayages',
    subtitle:
      'OfflineClean vous aide à organiser et libérer de l\'espace de stockage sur votre iPhone. Balayez à droite pour garder, à gauche pour supprimer. 100% privé - tout le traitement se fait sur votre appareil.',
    cta: 'Télécharger Gratuitement',
    statsItems: [
      { text: 'Balayez pour Décider' },
      { text: 'Libérez de l\'Espace' },
      { text: '100% Privé' },
      { text: 'Pas de Cloud' },
    ],
  },

  features: {
    title: 'Fonctionnalités',
    titleHighlight: 'Puissantes',
    items: [
      {
        title: 'Balayez pour Décider',
        description:
          'Interface simple et intuitive. Balayez à droite pour garder, balayez à gauche pour supprimer. Prenez des décisions en quelques secondes.',
      },
      {
        title: '100% Privé',
        description:
          'Vos photos ne quittent jamais votre appareil. Pas de téléchargement, pas de serveurs, pas de suivi. Confidentialité totale garantie.',
      },
      {
        title: 'Libérez du Stockage',
        description:
          'Identifiez et supprimez facilement les photos indésirables pour libérer un précieux espace de stockage sur votre iPhone.',
      },
      {
        title: 'Organisation des Albums',
        description:
          'Nettoyez des albums spécifiques ou parcourez toutes vos photos. Parfait pour organiser vos voyages ou événements.',
      },
      {
        title: 'Annulez à Tout Moment',
        description:
          'Vous avez fait une erreur ? Pas de problème. Annulez votre dernière décision ou réinitialisez toute la progression à tout moment.',
      },
      {
        title: 'Suppression Sécurisée',
        description:
          'Les photos supprimées vont dans le dossier Supprimés Récemment. Vous avez 30 jours pour les récupérer si nécessaire.',
      },
      {
        title: 'Options de Tri',
        description:
          'Triez les photos par date, taille ou album. Trouvez ce qui compte pour vous plus rapidement.',
      },
      {
        title: 'Support Vidéo',
        description:
          'Pas seulement les photos - nettoyez aussi vos vidéos avec la même interface intuitive de balayage.',
      },
      {
        title: 'Suivi de Progression',
        description:
          'Voyez combien de photos vous avez examinées, gardées et marquées pour suppression en temps réel.',
      },
    ],
  },

  whyOfflineClean: {
    title: 'Pourquoi Choisir',
    titleHighlight: 'OfflineClean',
    reasons: [
      {
        title: 'Confidentialité Totale',
        description:
          'Contrairement aux solutions cloud, vos photos ne quittent jamais votre appareil. Nous prenons votre vie privée au sérieux.',
      },
      {
        title: 'Design Intuitif',
        description:
          'Inspiré des meilleures expériences mobiles. Les décisions par balayage rendent le nettoyage de votre bibliothèque rapide et amusant.',
      },
      {
        title: 'Pas de Compte Requis',
        description:
          'Commencez à utiliser immédiatement sans créer de compte. Pas d\'email, pas de mot de passe, pas de tracas.',
      },
      {
        title: 'Économe en Batterie',
        description:
          'Optimisé pour la performance. Nettoyez vos photos sans vider votre batterie.',
      },
    ],
  },

  howItWorks: {
    title: 'Comment ça',
    titleHighlight: 'Fonctionne',
    subtitle: 'Nettoyez votre bibliothèque photo en quatre étapes simples',
    steps: [
      {
        title: 'Accordez l\'Accès aux Photos',
        description:
          'Autorisez OfflineClean à accéder à votre bibliothèque photo. Vos photos restent sur votre appareil.',
      },
      {
        title: 'Balayez les Photos',
        description:
          'Balayez à droite pour garder les photos que vous aimez. Balayez à gauche pour marquer les photos à supprimer.',
      },
      {
        title: 'Révisez vos Décisions',
        description:
          'Vérifiez vos photos gardées et marquées. Déplacez des éléments entre les listes si vous changez d\'avis.',
      },
      {
        title: 'Confirmez et Libérez de l\'Espace',
        description:
          'Appuyez sur terminer pour déplacer les photos marquées vers Supprimés Récemment. Profitez de votre stockage libéré !',
      },
    ],
  },

  appScreenshots: {
    title: 'Voyez-le en',
    titleHighlight: 'Action',
    subtitle: 'Un beau design rencontre une fonctionnalité puissante',
    screenshots: [
      { title: 'Interface de Balayage', description: 'Décisions intuitives par balayage' },
      { title: 'Réviser la Progression', description: 'Suivez votre progression de nettoyage' },
      { title: 'Sélection d\'Album', description: 'Nettoyez des albums spécifiques' },
    ],
  },

  pricing: {
    title: 'Tarifs',
    titleHighlight: 'Simples',
    freeTrial: '3 jours d\'essai gratuit',
    freeTrialBadge: 'Essai Gratuit',
    plans: {
      weekly: {
        name: 'Hebdomadaire',
        price: '$3.99',
        period: '/semaine',
        description: 'Parfait pour un nettoyage occasionnel',
        features: ['Balayages illimités', 'Toutes les fonctionnalités incluses', 'Annulez à tout moment'],
      },
      yearly: {
        name: 'Annuel',
        price: '$29.99',
        period: '/an',
        description: 'Meilleure valeur pour les utilisateurs réguliers',
        badge: 'Économisez 80%',
        perWeek: '~ $0.58/semaine',
        features: [
          'Balayages illimités',
          'Toutes les fonctionnalités incluses',
          'Annulez à tout moment',
          'Support prioritaire',
        ],
      },
    },
    cta: 'Commencer l\'Essai Gratuit',
    cancelAnytime: 'Annulez à tout moment. Sans questions.',
    disclaimer:
      'Le paiement sera débité de votre compte Apple ID. L\'abonnement se renouvelle automatiquement sauf annulation au moins 24 heures avant la fin de la période en cours.',
  },

  cta: {
    title: 'Commencez à Nettoyer votre Bibliothèque Photo Aujourd\'hui',
    subtitle:
      'Téléchargez OfflineClean et libérez de l\'espace de stockage sur votre iPhone. 100% privé, 100% sur l\'appareil.',
    button: 'Télécharger Gratuitement',
    availableText: 'Disponible sur l\'App Store',
  },

  footer: {
    description:
      'Nettoyez votre bibliothèque photo avec de simples balayages. 100% privé, tout le traitement se fait sur votre appareil.',
    product: 'Produit',
    quickLinks: 'Liens Rapides',
    legal: 'Mentions Légales',
    followUs: 'Suivez-nous',
    copyright: '2025 OfflineClean. Tous droits réservés.',
    productLinks: [{ name: 'Fonctionnalités' }, { name: 'Comment ça marche' }, { name: 'Télécharger' }],
    legalLinks: [{ name: 'Politique de Confidentialité' }, { name: 'Conditions d\'Utilisation' }, { name: 'Contact' }],
  },

  faq: {
    title: 'Questions Fréquentes',
    subtitle: 'Trouvez des réponses aux questions courantes sur OfflineClean',
    items: [
      {
        question: 'Mes données sont-elles en sécurité avec OfflineClean ?',
        answer:
          'Absolument ! OfflineClean traite tout sur votre appareil. Vos photos ne quittent jamais votre iPhone, et nous n\'avons pas accès à vos données. Pas de téléchargement cloud, pas de serveurs, pas de suivi.',
      },
      {
        question: 'Que deviennent les photos supprimées ?',
        answer:
          'Les photos marquées pour suppression sont déplacées vers l\'album Supprimés Récemment dans votre app Photos. Vous avez 30 jours pour les récupérer avant qu\'elles ne soient définitivement supprimées.',
      },
      {
        question: 'Ai-je besoin d\'une connexion internet ?',
        answer:
          'Non ! OfflineClean fonctionne complètement hors ligne. Tout le traitement se fait localement sur votre appareil. Pas d\'internet requis.',
      },
      {
        question: 'Puis-je annuler mes décisions ?',
        answer:
          'Oui ! Vous pouvez annuler votre dernière décision à tout moment en utilisant le bouton annuler. Vous pouvez aussi réinitialiser toute la progression et recommencer si nécessaire.',
      },
      {
        question: 'Y a-t-il un essai gratuit ?',
        answer:
          'Oui ! Nous offrons un essai gratuit de 3 jours pour que vous puissiez essayer toutes les fonctionnalités avant de décider de vous abonner.',
      },
      {
        question: 'Comment annuler mon abonnement ?',
        answer:
          'Vous pouvez annuler votre abonnement à tout moment via les paramètres de votre Apple ID. Allez dans Réglages > Votre Nom > Abonnements et trouvez OfflineClean.',
      },
      {
        question: 'Est-ce que ça fonctionne avec les vidéos ?',
        answer:
          'Oui ! OfflineClean supporte à la fois les photos et les vidéos. Vous pouvez prévisualiser les vidéos et décider avec la même interface de balayage.',
      },
      {
        question: 'Puis-je nettoyer des albums spécifiques ?',
        answer:
          'Absolument ! Vous pouvez sélectionner des albums spécifiques à nettoyer, ou parcourir toutes vos photos. Parfait pour organiser des voyages ou des événements.',
      },
    ],
  },

  contact: {
    title: 'Contactez-nous',
    subtitle: 'Vous avez des questions ou des commentaires ? Nous serions ravis de vous entendre.',
  },

  privacy: {
    title: 'Politique de Confidentialité',
    lastUpdated: 'Dernière mise à jour : Décembre 2024',
    intro:
      'OfflineClean s\'engage à protéger votre vie privée. Cette Politique de Confidentialité explique comment nous gérons vos informations.',
    sections: [
      {
        title: 'Collecte de Données',
        content:
          'OfflineClean ne collecte aucune donnée personnelle. Tout le traitement des photos se fait localement sur votre appareil. Nous n\'avons pas accès à vos photos, et rien n\'est téléchargé sur aucun serveur.',
      },
      {
        title: 'Accès aux Photos',
        content:
          'OfflineClean nécessite l\'accès à votre bibliothèque photo pour fonctionner. Cet accès est utilisé uniquement pour afficher vos photos dans l\'app et pour supprimer les photos que vous choisissez de retirer. Vos photos ne quittent jamais votre appareil.',
      },
      {
        title: 'Analytique et Mesure',
        content:
          'Nous utilisons Meta SDK pour collecter des analyses d\'utilisation anonymes afin d\'améliorer l\'expérience de l\'app et dimensionner nos services. Ces données n\'incluent pas vos informations personnelles ni vos photos. Nous enregistrons uniquement les événements d\'utilisation de l\'app.',
        items: [
          { label: 'Inscription terminée', text: 'Lorsque le processus d\'onboarding est terminé' },
          { label: 'Début d\'essai', text: 'Lorsque la période d\'essai gratuit commence' },
          { label: 'Achat', text: 'Événements d\'achat d\'abonnement' },
          { label: 'Vue du contenu', text: 'Lorsque l\'écran paywall est affiché' },
          { label: 'Début de paiement', text: 'Lorsque le bouton d\'achat est appuyé' },
          { label: 'Suppression de photos', text: 'Nombre de photos supprimées (pas le contenu)' },
          { label: 'Nettoyage terminé', text: 'Lorsque la session de nettoyage est terminée' },
          { label: 'Arène terminée', text: 'Lorsque le défi arène est terminé' },
          { label: 'Analyse terminée', text: 'Analyse de photos similaires, floues ou captures d\'écran' },
        ],
      },
      {
        title: 'Services Tiers',
        content:
          'OfflineClean utilise les Achats In-App d\'Apple pour la gestion des abonnements. Apple peut collecter des données comme décrit dans leur politique de confidentialité.',
      },
      {
        title: 'Contact',
        content: 'Si vous avez des questions concernant cette Politique de Confidentialité, veuillez nous contacter.',
      },
    ],
    contactText: 'Pour toute question concernant cette Politique de Confidentialité, veuillez nous contacter à :',
    contactEmail: 'support@tinylapse.com',
  },

  terms: {
    title: 'Conditions d\'Utilisation',
    lastUpdated: 'Dernière mise à jour : Décembre 2024',
    intro:
      'En utilisant OfflineClean, vous acceptez ces Conditions d\'Utilisation. Veuillez les lire attentivement.',
    sections: [
      {
        title: 'Utilisation de l\'App',
        content:
          'OfflineClean est fourni tel quel pour un usage personnel. Vous êtes responsable de toutes les photos que vous choisissez de supprimer en utilisant l\'app.',
      },
      {
        title: 'Abonnements',
        content:
          'OfflineClean propose des plans d\'abonnement pour les fonctionnalités premium. Les abonnements sont gérés via les Achats In-App d\'Apple et sont soumis aux termes et conditions d\'Apple.',
        items: [
          'Le paiement est débité de votre compte Apple ID lors de la confirmation d\'achat',
          'L\'abonnement se renouvelle automatiquement sauf annulation au moins 24 heures avant la fin de la période en cours',
          'Vous pouvez gérer et annuler les abonnements dans les paramètres de votre compte Apple ID',
        ],
      },
      {
        title: 'Limitation de Responsabilité',
        content:
          'OfflineClean n\'est pas responsable de toute perte de données résultant de l\'utilisation de l\'app. Les photos supprimées sont déplacées vers l\'album Supprimés Récemment et peuvent être récupérées dans les 30 jours.',
      },
      {
        title: 'Modifications des Conditions',
        content:
          'Nous pouvons mettre à jour ces Conditions d\'Utilisation de temps en temps. L\'utilisation continue de l\'app après les modifications constitue l\'acceptation des nouvelles conditions.',
      },
    ],
    contactText: 'Pour toute question concernant ces Conditions d\'Utilisation, veuillez nous contacter à :',
    contactEmail: 'support@tinylapse.com',
  },
}
