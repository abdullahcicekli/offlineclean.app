import type { Translation } from './types'

export const ptBR: Translation = {
  nav: {
    features: 'Recursos',
    howItWorks: 'Como Funciona',
    faq: 'Perguntas Frequentes',
    contact: 'Contato',
  },

  hero: {
    badge: 'Disponível para iPhone',
    title: 'Limpe suas Fotos com',
    titleHighlight: 'Deslizes Simples',
    subtitle:
      'OfflineClean ajuda você a organizar e liberar espaço de armazenamento no seu iPhone. Deslize para a direita para manter, para a esquerda para excluir. 100% privado - todo o processamento acontece no seu dispositivo.',
    cta: 'Baixar Grátis',
    statsItems: [
      { text: 'Deslize para Decidir' },
      { text: 'Libere Espaço' },
      { text: '100% Privado' },
      { text: 'Sem Upload na Nuvem' },
    ],
  },

  features: {
    title: 'Recursos',
    titleHighlight: 'Poderosos',
    items: [
      {
        title: 'Deslize para Decidir',
        description:
          'Interface simples e intuitiva. Deslize para a direita para manter, deslize para a esquerda para excluir. Tome decisões em segundos.',
      },
      {
        title: '100% Privado',
        description:
          'Suas fotos nunca saem do seu dispositivo. Sem uploads, sem servidores, sem rastreamento. Privacidade completa garantida.',
      },
      {
        title: 'Libere Armazenamento',
        description:
          'Identifique e remova facilmente fotos indesejadas para liberar espaço valioso de armazenamento no seu iPhone.',
      },
      {
        title: 'Organização de Álbuns',
        description:
          'Limpe álbuns específicos ou navegue por todas as suas fotos. Perfeito para organizar viagens ou eventos.',
      },
      {
        title: 'Desfazer a Qualquer Momento',
        description:
          'Cometeu um erro? Sem problemas. Desfaça sua última decisão ou redefina todo o progresso a qualquer momento.',
      },
      {
        title: 'Exclusão Segura',
        description:
          'Fotos excluídas vão para a pasta Apagados Recentemente. Você tem 30 dias para recuperá-las se necessário.',
      },
      {
        title: 'Opções de Ordenação',
        description:
          'Ordene fotos por data, tamanho ou álbum. Encontre o que importa para você mais rápido.',
      },
      {
        title: 'Suporte a Vídeos',
        description:
          'Não apenas fotos - limpe seus vídeos também com a mesma interface intuitiva de deslize.',
      },
      {
        title: 'Acompanhamento de Progresso',
        description:
          'Veja quantas fotos você revisou, manteve e marcou para exclusão em tempo real.',
      },
    ],
  },

  whyOfflineClean: {
    title: 'Por Que Escolher',
    titleHighlight: 'OfflineClean',
    reasons: [
      {
        title: 'Privacidade Completa',
        description:
          'Diferente de soluções baseadas em nuvem, suas fotos nunca saem do seu dispositivo. Levamos sua privacidade a sério.',
      },
      {
        title: 'Design Intuitivo',
        description:
          'Inspirado nas melhores experiências mobile. Decisões baseadas em deslize tornam a limpeza da sua biblioteca rápida e divertida.',
      },
      {
        title: 'Sem Conta Necessária',
        description:
          'Comece a usar imediatamente sem criar uma conta. Sem e-mail, sem senha, sem complicação.',
      },
      {
        title: 'Eficiente com a Bateria',
        description:
          'Otimizado para desempenho. Limpe suas fotos sem drenar sua bateria.',
      },
    ],
  },

  howItWorks: {
    title: 'Como',
    titleHighlight: 'Funciona',
    subtitle: 'Limpe sua biblioteca de fotos em quatro passos simples',
    steps: [
      {
        title: 'Conceda Acesso às Fotos',
        description:
          'Permita que o OfflineClean acesse sua biblioteca de fotos. Suas fotos permanecem no seu dispositivo.',
      },
      {
        title: 'Deslize pelas Fotos',
        description:
          'Deslize para a direita para manter fotos que você ama. Deslize para a esquerda para marcar fotos para exclusão.',
      },
      {
        title: 'Revise suas Decisões',
        description:
          'Confira suas fotos mantidas e marcadas. Mova itens entre listas se mudar de ideia.',
      },
      {
        title: 'Confirme e Libere Espaço',
        description:
          'Toque em finalizar para mover fotos marcadas para Apagados Recentemente. Aproveite seu armazenamento liberado!',
      },
    ],
  },

  appScreenshots: {
    title: 'Veja em',
    titleHighlight: 'Ação',
    subtitle: 'Design bonito encontra funcionalidade poderosa',
    screenshots: [
      { title: 'Interface de Deslize', description: 'Decisões intuitivas baseadas em deslize' },
      { title: 'Revisar Progresso', description: 'Acompanhe seu progresso de limpeza' },
      { title: 'Seleção de Álbum', description: 'Limpe álbuns específicos' },
    ],
  },

  pricing: {
    title: 'Preços',
    titleHighlight: 'Simples',
    freeTrial: '3 dias de teste grátis',
    freeTrialBadge: 'Teste Grátis',
    plans: {
      weekly: {
        name: 'Semanal',
        price: '$3.99',
        period: '/semana',
        description: 'Perfeito para limpeza ocasional',
        features: ['Deslizes ilimitados', 'Todos os recursos incluídos', 'Cancele quando quiser'],
      },
      yearly: {
        name: 'Anual',
        price: '$29.99',
        period: '/ano',
        description: 'Melhor valor para usuários regulares',
        badge: 'Economize 80%',
        perWeek: '~ $0.58/semana',
        features: [
          'Deslizes ilimitados',
          'Todos os recursos incluídos',
          'Cancele quando quiser',
          'Suporte prioritário',
        ],
      },
    },
    cta: 'Iniciar Teste Grátis',
    cancelAnytime: 'Cancele quando quiser. Sem perguntas.',
    disclaimer:
      'O pagamento será cobrado na sua conta do Apple ID. A assinatura renova automaticamente a menos que seja cancelada pelo menos 24 horas antes do final do período atual.',
  },

  cta: {
    title: 'Comece a Limpar sua Biblioteca de Fotos Hoje',
    subtitle:
      'Baixe o OfflineClean e libere espaço de armazenamento no seu iPhone. 100% privado, 100% no dispositivo.',
    button: 'Baixar Grátis',
    availableText: 'Disponível na App Store',
  },

  footer: {
    description:
      'Limpe sua biblioteca de fotos com deslizes simples. 100% privado, todo o processamento acontece no seu dispositivo.',
    product: 'Produto',
    quickLinks: 'Links Rápidos',
    legal: 'Legal',
    followUs: 'Siga-nos',
    copyright: '2025 OfflineClean. Todos os direitos reservados.',
    productLinks: [{ name: 'Recursos' }, { name: 'Como Funciona' }, { name: 'Download' }],
    legalLinks: [{ name: 'Política de Privacidade' }, { name: 'Termos de Serviço' }, { name: 'Contato' }],
  },

  faq: {
    title: 'Perguntas Frequentes',
    subtitle: 'Encontre respostas para perguntas comuns sobre o OfflineClean',
    items: [
      {
        question: 'Meus dados estão seguros com o OfflineClean?',
        answer:
          'Absolutamente! O OfflineClean processa tudo no seu dispositivo. Suas fotos nunca saem do seu iPhone, e não temos acesso aos seus dados. Sem uploads na nuvem, sem servidores, sem rastreamento.',
      },
      {
        question: 'O que acontece com as fotos excluídas?',
        answer:
          'Fotos marcadas para exclusão são movidas para o álbum Apagados Recentemente no seu app Fotos. Você tem 30 dias para recuperá-las antes de serem excluídas permanentemente.',
      },
      {
        question: 'Preciso de conexão com a internet?',
        answer:
          'Não! O OfflineClean funciona completamente offline. Todo o processamento acontece localmente no seu dispositivo. Nenhuma internet necessária.',
      },
      {
        question: 'Posso desfazer minhas decisões?',
        answer:
          'Sim! Você pode desfazer sua última decisão a qualquer momento usando o botão desfazer. Você também pode redefinir todo o progresso e recomeçar se necessário.',
      },
      {
        question: 'Existe um teste gratuito?',
        answer:
          'Sim! Oferecemos um teste gratuito de 3 dias para você experimentar todos os recursos antes de decidir assinar.',
      },
      {
        question: 'Como cancelo minha assinatura?',
        answer:
          'Você pode cancelar sua assinatura a qualquer momento através das configurações do seu Apple ID. Vá em Ajustes > Seu Nome > Assinaturas e encontre o OfflineClean.',
      },
      {
        question: 'Funciona com vídeos?',
        answer:
          'Sim! O OfflineClean suporta tanto fotos quanto vídeos. Você pode pré-visualizar vídeos e decidir com a mesma interface de deslize.',
      },
      {
        question: 'Posso limpar álbuns específicos?',
        answer:
          'Absolutamente! Você pode selecionar álbuns específicos para limpar, ou navegar por todas as suas fotos. Perfeito para organizar viagens ou eventos.',
      },
    ],
  },

  contact: {
    title: 'Entre em Contato',
    subtitle: 'Tem perguntas ou feedback? Adoraríamos ouvir você.',
  },

  privacy: {
    title: 'Política de Privacidade',
    lastUpdated: 'Última atualização: Dezembro 2024',
    intro:
      'O OfflineClean está comprometido em proteger sua privacidade. Esta Política de Privacidade explica como tratamos suas informações.',
    sections: [
      {
        title: 'Coleta de Dados',
        content:
          'O OfflineClean não coleta nenhum dado pessoal. Todo o processamento de fotos acontece localmente no seu dispositivo. Não temos acesso às suas fotos, e nada é enviado para nenhum servidor.',
      },
      {
        title: 'Acesso às Fotos',
        content:
          'O OfflineClean requer acesso à sua biblioteca de fotos para funcionar. Este acesso é usado exclusivamente para exibir suas fotos dentro do app e para excluir fotos que você escolher remover. Suas fotos nunca saem do seu dispositivo.',
      },
      {
        title: 'Analytics',
        content:
          'Podemos coletar análises de uso anônimas para melhorar a experiência do app. Esses dados não incluem nenhuma informação pessoal ou acesso às suas fotos.',
      },
      {
        title: 'Serviços de Terceiros',
        content:
          'O OfflineClean usa Compra In-App da Apple para gerenciamento de assinaturas. A Apple pode coletar dados conforme descrito em sua política de privacidade.',
      },
      {
        title: 'Contato',
        content: 'Se você tiver alguma pergunta sobre esta Política de Privacidade, entre em contato conosco.',
      },
    ],
    contactText: 'Para quaisquer perguntas sobre esta Política de Privacidade, entre em contato conosco em:',
    contactEmail: 'support@tinylapse.com',
  },

  terms: {
    title: 'Termos de Serviço',
    lastUpdated: 'Última atualização: Dezembro 2024',
    intro:
      'Ao usar o OfflineClean, você concorda com estes Termos de Serviço. Por favor, leia-os cuidadosamente.',
    sections: [
      {
        title: 'Uso do App',
        content:
          'O OfflineClean é fornecido como está para uso pessoal. Você é responsável por quaisquer fotos que escolher excluir usando o app.',
      },
      {
        title: 'Assinaturas',
        content:
          'O OfflineClean oferece planos de assinatura para recursos premium. As assinaturas são gerenciadas através de Compra In-App da Apple e estão sujeitas aos termos e condições da Apple.',
        items: [
          'O pagamento é cobrado na sua conta do Apple ID na confirmação da compra',
          'A assinatura renova automaticamente a menos que seja cancelada pelo menos 24 horas antes do final do período atual',
          'Você pode gerenciar e cancelar assinaturas nas configurações da sua conta do Apple ID',
        ],
      },
      {
        title: 'Limitação de Responsabilidade',
        content:
          'O OfflineClean não é responsável por qualquer perda de dados resultante do uso do app. Fotos excluídas são movidas para o álbum Apagados Recentemente e podem ser recuperadas dentro de 30 dias.',
      },
      {
        title: 'Alterações nos Termos',
        content:
          'Podemos atualizar estes Termos de Serviço de tempos em tempos. O uso continuado do app após alterações constitui aceitação dos novos termos.',
      },
    ],
    contactText: 'Para quaisquer perguntas sobre estes Termos de Serviço, entre em contato conosco em:',
    contactEmail: 'support@tinylapse.com',
  },
}
