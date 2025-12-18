import type { Translation } from './types'

export const esMX: Translation = {
  nav: {
    features: 'Características',
    howItWorks: 'Cómo Funciona',
    faq: 'Preguntas Frecuentes',
    contact: 'Contacto',
  },

  hero: {
    badge: 'Disponible para iPhone',
    title: 'Limpia tus Fotos con',
    titleHighlight: 'Deslizamientos Simples',
    subtitle:
      'OfflineClean te ayuda a organizar y liberar espacio de almacenamiento en tu iPhone. Desliza a la derecha para guardar, a la izquierda para borrar. 100% privado - todo el procesamiento ocurre en tu dispositivo.',
    cta: 'Descargar Gratis',
    statsItems: [
      { text: 'Desliza para Decidir' },
      { text: 'Libera Espacio' },
      { text: '100% Privado' },
      { text: 'Sin Subir a la Nube' },
    ],
  },

  features: {
    title: 'Potentes',
    titleHighlight: 'Características',
    items: [
      {
        title: 'Desliza para Decidir',
        description:
          'Interfaz simple e intuitiva. Desliza a la derecha para guardar, desliza a la izquierda para borrar. Toma decisiones en segundos.',
      },
      {
        title: '100% Privado',
        description:
          'Tus fotos nunca salen de tu dispositivo. Sin subidas, sin servidores, sin rastreo. Privacidad completa garantizada.',
      },
      {
        title: 'Libera Almacenamiento',
        description:
          'Identifica y elimina fácilmente fotos no deseadas para liberar valioso espacio de almacenamiento en tu iPhone.',
      },
      {
        title: 'Organización de Álbumes',
        description:
          'Limpia álbumes específicos o navega por todas tus fotos. Perfecto para organizar viajes o eventos.',
      },
      {
        title: 'Deshacer en Cualquier Momento',
        description:
          '¿Te equivocaste? No hay problema. Deshaz tu última decisión o reinicia todo el progreso cuando quieras.',
      },
      {
        title: 'Eliminación Segura',
        description:
          'Las fotos borradas van a la carpeta Eliminados Recientemente. Tienes 30 días para recuperarlas si lo necesitas.',
      },
      {
        title: 'Opciones de Ordenamiento',
        description:
          'Ordena fotos por fecha, tamaño o álbum. Encuentra lo que te importa más rápido.',
      },
      {
        title: 'Soporte de Video',
        description:
          'No solo fotos - limpia también tus videos con la misma interfaz intuitiva de deslizamiento.',
      },
      {
        title: 'Seguimiento de Progreso',
        description:
          'Ve cuántas fotos has revisado, guardado y marcado para borrar en tiempo real.',
      },
    ],
  },

  whyOfflineClean: {
    title: 'Por Qué Elegir',
    titleHighlight: 'OfflineClean',
    reasons: [
      {
        title: 'Privacidad Completa',
        description:
          'A diferencia de las soluciones en la nube, tus fotos nunca salen de tu dispositivo. Nos tomamos tu privacidad en serio.',
      },
      {
        title: 'Diseño Intuitivo',
        description:
          'Inspirado en las mejores experiencias móviles. Las decisiones por deslizamiento hacen que limpiar tu biblioteca sea rápido y divertido.',
      },
      {
        title: 'Sin Cuenta Requerida',
        description:
          'Empieza a usar de inmediato sin crear una cuenta. Sin correo, sin contraseña, sin complicaciones.',
      },
      {
        title: 'Eficiente con la Batería',
        description:
          'Optimizado para el rendimiento. Limpia tus fotos sin agotar tu batería.',
      },
    ],
  },

  howItWorks: {
    title: 'Cómo',
    titleHighlight: 'Funciona',
    subtitle: 'Limpia tu biblioteca de fotos en cuatro simples pasos',
    steps: [
      {
        title: 'Da Acceso a Fotos',
        description:
          'Permite que OfflineClean acceda a tu biblioteca de fotos. Tus fotos permanecen en tu dispositivo.',
      },
      {
        title: 'Desliza por las Fotos',
        description:
          'Desliza a la derecha para guardar las fotos que amas. Desliza a la izquierda para marcar fotos para borrar.',
      },
      {
        title: 'Revisa tus Decisiones',
        description:
          'Checa tus fotos guardadas y marcadas. Mueve elementos entre listas si cambias de opinión.',
      },
      {
        title: 'Confirma y Libera Espacio',
        description:
          'Toca finalizar para mover las fotos marcadas a Eliminados Recientemente. ¡Disfruta tu almacenamiento liberado!',
      },
    ],
  },

  appScreenshots: {
    title: 'Míralo en',
    titleHighlight: 'Acción',
    subtitle: 'Diseño hermoso combinado con funcionalidad potente',
    screenshots: [
      { title: 'Interfaz de Deslizamiento', description: 'Decisiones intuitivas por deslizamiento' },
      { title: 'Revisar Progreso', description: 'Rastrea tu progreso de limpieza' },
      { title: 'Selección de Álbum', description: 'Limpia álbumes específicos' },
    ],
  },

  pricing: {
    title: 'Precios',
    titleHighlight: 'Simples',
    freeTrial: '3 días de prueba gratis',
    freeTrialBadge: 'Prueba Gratis',
    plans: {
      weekly: {
        name: 'Semanal',
        period: '/semana',
        description: 'Perfecto para limpieza ocasional',
        features: ['Deslizamientos ilimitados', 'Todas las características incluidas', 'Cancela cuando quieras'],
      },
      yearly: {
        name: 'Anual',
        period: '/año',
        description: 'Mejor valor para usuarios frecuentes',
        badge: 'Ahorra 80%',
        features: [
          'Deslizamientos ilimitados',
          'Todas las características incluidas',
          'Cancela cuando quieras',
          'Soporte prioritario',
        ],
      },
    },
    cta: 'Comenzar Prueba Gratis',
    cancelAnytime: 'Cancela cuando quieras. Sin preguntas.',
    disclaimer:
      'El pago se cargará a tu cuenta de Apple ID. La suscripción se renueva automáticamente a menos que se cancele al menos 24 horas antes del final del período actual.',
  },

  cta: {
    title: 'Empieza a Limpiar tu Biblioteca de Fotos Hoy',
    subtitle:
      'Descarga OfflineClean y libera espacio de almacenamiento en tu iPhone. 100% privado, 100% en el dispositivo.',
    button: 'Descargar Gratis',
    availableText: 'Disponible en App Store',
  },

  footer: {
    description:
      'Limpia tu biblioteca de fotos con deslizamientos simples. 100% privado, todo el procesamiento ocurre en tu dispositivo.',
    product: 'Producto',
    quickLinks: 'Enlaces Rápidos',
    legal: 'Legal',
    followUs: 'Síguenos',
    copyright: '2024 OfflineClean. Todos los derechos reservados.',
    productLinks: [{ name: 'Características' }, { name: 'Cómo Funciona' }, { name: 'Descargar' }],
    legalLinks: [{ name: 'Política de Privacidad' }, { name: 'Términos de Servicio' }, { name: 'Contacto' }],
  },

  faq: {
    title: 'Preguntas Frecuentes',
    subtitle: 'Encuentra respuestas a preguntas comunes sobre OfflineClean',
    items: [
      {
        question: '¿Mis datos están seguros con OfflineClean?',
        answer:
          '¡Absolutamente! OfflineClean procesa todo en tu dispositivo. Tus fotos nunca salen de tu iPhone, y no tenemos acceso a tus datos. Sin subidas a la nube, sin servidores, sin rastreo.',
      },
      {
        question: '¿Qué pasa con las fotos borradas?',
        answer:
          'Las fotos marcadas para borrar se mueven al álbum Eliminados Recientemente en tu app de Fotos. Tienes 30 días para recuperarlas antes de que se borren permanentemente.',
      },
      {
        question: '¿Necesito conexión a internet?',
        answer:
          '¡No! OfflineClean funciona completamente sin conexión. Todo el procesamiento ocurre localmente en tu dispositivo. No se requiere internet.',
      },
      {
        question: '¿Puedo deshacer mis decisiones?',
        answer:
          '¡Sí! Puedes deshacer tu última decisión en cualquier momento usando el botón deshacer. También puedes reiniciar todo el progreso y empezar de nuevo si lo necesitas.',
      },
      {
        question: '¿Hay una prueba gratuita?',
        answer:
          '¡Sí! Ofrecemos una prueba gratuita de 3 días para que puedas probar todas las características antes de decidir suscribirte.',
      },
      {
        question: '¿Cómo cancelo mi suscripción?',
        answer:
          'Puedes cancelar tu suscripción en cualquier momento a través de la configuración de tu Apple ID. Ve a Configuración > Tu Nombre > Suscripciones y encuentra OfflineClean.',
      },
      {
        question: '¿Funciona con videos?',
        answer:
          '¡Sí! OfflineClean soporta tanto fotos como videos. Puedes previsualizar videos y decidir con la misma interfaz de deslizamiento.',
      },
      {
        question: '¿Puedo limpiar álbumes específicos?',
        answer:
          '¡Absolutamente! Puedes seleccionar álbumes específicos para limpiar, o navegar por todas tus fotos. Perfecto para organizar viajes o eventos.',
      },
    ],
  },

  contact: {
    title: 'Contáctanos',
    subtitle: '¿Tienes preguntas o comentarios? Nos encantaría saber de ti.',
  },

  privacy: {
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización: Diciembre 2024',
    intro:
      'OfflineClean está comprometido a proteger tu privacidad. Esta Política de Privacidad explica cómo manejamos tu información.',
    sections: [
      {
        title: 'Recopilación de Datos',
        content:
          'OfflineClean no recopila ningún dato personal. Todo el procesamiento de fotos ocurre localmente en tu dispositivo. No tenemos acceso a tus fotos, y nada se sube a ningún servidor.',
      },
      {
        title: 'Acceso a Fotos',
        content:
          'OfflineClean requiere acceso a tu biblioteca de fotos para funcionar. Este acceso se usa únicamente para mostrar tus fotos dentro de la app y para borrar las fotos que elijas quitar. Tus fotos nunca salen de tu dispositivo.',
      },
      {
        title: 'Analíticas',
        content:
          'Podemos recopilar analíticas de uso anónimas para mejorar la experiencia de la app. Estos datos no incluyen ninguna información personal ni acceso a tus fotos.',
      },
      {
        title: 'Servicios de Terceros',
        content:
          'OfflineClean usa Compras In-App de Apple para la gestión de suscripciones. Apple puede recopilar datos como se describe en su política de privacidad.',
      },
      {
        title: 'Contacto',
        content: 'Si tienes alguna pregunta sobre esta Política de Privacidad, por favor contáctanos.',
      },
    ],
    contactEmail: 'support@tinylapse.com',
  },

  terms: {
    title: 'Términos de Servicio',
    lastUpdated: 'Última actualización: Diciembre 2024',
    intro:
      'Al usar OfflineClean, aceptas estos Términos de Servicio. Por favor léelos cuidadosamente.',
    sections: [
      {
        title: 'Uso de la App',
        content:
          'OfflineClean se proporciona tal cual para uso personal. Eres responsable de cualquier foto que elijas borrar usando la app.',
      },
      {
        title: 'Suscripciones',
        content:
          'OfflineClean ofrece planes de suscripción para características premium. Las suscripciones se gestionan a través de Compras In-App de Apple y están sujetas a los términos y condiciones de Apple.',
        items: [
          'El pago se carga a tu cuenta de Apple ID tras la confirmación de compra',
          'La suscripción se renueva automáticamente a menos que se cancele al menos 24 horas antes del final del período actual',
          'Puedes gestionar y cancelar suscripciones en la configuración de tu cuenta de Apple ID',
        ],
      },
      {
        title: 'Limitación de Responsabilidad',
        content:
          'OfflineClean no es responsable de ninguna pérdida de datos resultante del uso de la app. Las fotos borradas se mueven al álbum Eliminados Recientemente y pueden recuperarse dentro de 30 días.',
      },
      {
        title: 'Cambios en los Términos',
        content:
          'Podemos actualizar estos Términos de Servicio de vez en cuando. El uso continuado de la app después de los cambios constituye la aceptación de los nuevos términos.',
      },
    ],
    contactEmail: 'support@tinylapse.com',
  },
}
