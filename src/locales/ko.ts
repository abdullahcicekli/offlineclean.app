import type { Translation } from './types'

export const ko: Translation = {
  nav: {
    features: '기능',
    howItWorks: '사용 방법',
    faq: 'FAQ',
    contact: '문의하기',
  },

  hero: {
    badge: 'iPhone에서 사용 가능',
    title: '사진을 정리하세요',
    titleHighlight: '간단한 스와이프로',
    subtitle:
      'OfflineClean은 iPhone의 저장 공간을 정리하고 확보하는 데 도움을 줍니다. 오른쪽으로 스와이프하여 보관, 왼쪽으로 스와이프하여 삭제. 100% 프라이빗 - 모든 처리는 기기에서 이루어집니다.',
    cta: '무료 다운로드',
    statsItems: [
      { text: '스와이프로 결정' },
      { text: '공간 확보' },
      { text: '100% 프라이빗' },
      { text: '클라우드 업로드 없음' },
    ],
  },

  features: {
    title: '강력한',
    titleHighlight: '기능',
    items: [
      {
        title: '스와이프로 결정',
        description:
          '간단하고 직관적인 인터페이스. 오른쪽으로 스와이프하여 보관, 왼쪽으로 스와이프하여 삭제. 몇 초 만에 결정하세요.',
      },
      {
        title: '100% 프라이빗',
        description:
          '사진이 기기를 떠나지 않습니다. 업로드 없음, 서버 없음, 추적 없음. 완벽한 프라이버시 보장.',
      },
      {
        title: '저장 공간 확보',
        description:
          '원하지 않는 사진을 쉽게 식별하고 제거하여 iPhone의 소중한 저장 공간을 확보하세요.',
      },
      {
        title: '앨범 정리',
        description:
          '특정 앨범을 정리하거나 모든 사진을 탐색하세요. 여행이나 이벤트 정리에 완벽합니다.',
      },
      {
        title: '언제든 실행 취소',
        description:
          '실수했나요? 문제없습니다. 마지막 결정을 취소하거나 언제든지 모든 진행 상황을 초기화하세요.',
      },
      {
        title: '안전한 삭제',
        description:
          '삭제된 사진은 최근 삭제된 항목 폴더로 이동합니다. 필요한 경우 30일 이내에 복구할 수 있습니다.',
      },
      {
        title: '정렬 옵션',
        description:
          '날짜, 크기 또는 앨범별로 사진을 정렬하세요. 중요한 것을 더 빠르게 찾으세요.',
      },
      {
        title: '동영상 지원',
        description:
          '사진뿐만 아니라 동일한 직관적인 스와이프 인터페이스로 동영상도 정리하세요.',
      },
      {
        title: '진행 상황 추적',
        description:
          '검토한 사진, 보관한 사진, 삭제 표시한 사진 수를 실시간으로 확인하세요.',
      },
    ],
  },

  whyOfflineClean: {
    title: '왜 선택해야 할까요?',
    titleHighlight: 'OfflineClean',
    reasons: [
      {
        title: '완벽한 프라이버시',
        description:
          '클라우드 기반 솔루션과 달리 사진이 기기를 떠나지 않습니다. 프라이버시를 진지하게 생각합니다.',
      },
      {
        title: '직관적인 디자인',
        description:
          '최고의 모바일 경험에서 영감을 받았습니다. 스와이프 기반 결정으로 라이브러리 정리가 빠르고 재미있어집니다.',
      },
      {
        title: '계정 불필요',
        description:
          '계정을 만들지 않고 즉시 사용을 시작하세요. 이메일 없음, 비밀번호 없음, 번거로움 없음.',
      },
      {
        title: '배터리 효율적',
        description:
          '성능에 최적화되어 있습니다. 배터리를 소모하지 않고 사진을 정리하세요.',
      },
    ],
  },

  howItWorks: {
    title: '사용',
    titleHighlight: '방법',
    subtitle: '4가지 간단한 단계로 사진 라이브러리 정리',
    steps: [
      {
        title: '사진 접근 권한 부여',
        description:
          'OfflineClean이 사진 라이브러리에 접근하도록 허용하세요. 사진은 기기에 남아 있습니다.',
      },
      {
        title: '사진 스와이프',
        description:
          '좋아하는 사진을 보관하려면 오른쪽으로 스와이프. 삭제 표시하려면 왼쪽으로 스와이프.',
      },
      {
        title: '결정 검토',
        description:
          '보관한 사진과 표시한 사진을 확인하세요. 마음이 바뀌면 목록 간에 항목을 이동하세요.',
      },
      {
        title: '확인 및 공간 확보',
        description:
          '완료를 탭하여 표시된 사진을 최근 삭제된 항목으로 이동하세요. 확보된 저장 공간을 즐기세요!',
      },
    ],
  },

  appScreenshots: {
    title: '실제로',
    titleHighlight: '확인하기',
    subtitle: '아름다운 디자인과 강력한 기능의 만남',
    screenshots: [
      { title: '스와이프 인터페이스', description: '직관적인 스와이프 기반 결정' },
      { title: '진행 상황 검토', description: '정리 진행 상황 추적' },
      { title: '앨범 선택', description: '특정 앨범 정리' },
    ],
  },

  pricing: {
    title: '간단한',
    titleHighlight: '가격',
    freeTrial: '3일 무료 체험',
    freeTrialBadge: '무료 체험',
    plans: {
      weekly: {
        name: '주간',
        period: '/주',
        description: '가끔 정리에 완벽',
        features: ['무제한 스와이프', '모든 기능 포함', '언제든 취소'],
      },
      yearly: {
        name: '연간',
        period: '/년',
        description: '정기 사용자에게 최고의 가치',
        badge: '80% 절약',
        features: [
          '무제한 스와이프',
          '모든 기능 포함',
          '언제든 취소',
          '우선 지원',
        ],
      },
    },
    cta: '무료 체험 시작',
    cancelAnytime: '언제든 취소 가능. 질문 없음.',
    disclaimer:
      '결제는 Apple ID 계정에 청구됩니다. 현재 기간 종료 최소 24시간 전에 취소하지 않으면 구독이 자동 갱신됩니다.',
  },

  cta: {
    title: '오늘부터 사진 라이브러리 정리를 시작하세요',
    subtitle:
      'OfflineClean을 다운로드하여 iPhone의 저장 공간을 확보하세요. 100% 프라이빗, 100% 온디바이스.',
    button: '무료 다운로드',
    availableText: 'App Store에서 다운로드',
  },

  footer: {
    description:
      '간단한 스와이프로 사진 라이브러리를 정리하세요. 100% 프라이빗, 모든 처리는 기기에서 이루어집니다.',
    product: '제품',
    quickLinks: '빠른 링크',
    legal: '법적 정보',
    followUs: '팔로우',
    copyright: '2024 OfflineClean. All rights reserved.',
    productLinks: [{ name: '기능' }, { name: '사용 방법' }, { name: '다운로드' }],
    legalLinks: [{ name: '개인정보 보호정책' }, { name: '이용약관' }, { name: '문의하기' }],
  },

  faq: {
    title: '자주 묻는 질문',
    subtitle: 'OfflineClean에 대한 일반적인 질문에 대한 답변 찾기',
    items: [
      {
        question: 'OfflineClean에서 내 데이터가 안전한가요?',
        answer:
          '물론입니다! OfflineClean은 모든 것을 기기에서 처리합니다. 사진이 iPhone을 떠나지 않으며, 우리는 귀하의 데이터에 접근할 수 없습니다. 클라우드 업로드 없음, 서버 없음, 추적 없음.',
      },
      {
        question: '삭제된 사진은 어떻게 되나요?',
        answer:
          '삭제 표시된 사진은 사진 앱의 최근 삭제된 항목 앨범으로 이동됩니다. 영구 삭제 전 30일 동안 복구할 수 있습니다.',
      },
      {
        question: '인터넷 연결이 필요한가요?',
        answer:
          '아니요! OfflineClean은 완전히 오프라인으로 작동합니다. 모든 처리는 기기에서 로컬로 이루어집니다. 인터넷 필요 없음.',
      },
      {
        question: '결정을 취소할 수 있나요?',
        answer:
          '네! 실행 취소 버튼을 사용하여 언제든지 마지막 결정을 취소할 수 있습니다. 필요한 경우 모든 진행 상황을 초기화하고 다시 시작할 수도 있습니다.',
      },
      {
        question: '무료 체험이 있나요?',
        answer:
          '네! 구독을 결정하기 전에 모든 기능을 사용해 볼 수 있는 3일 무료 체험을 제공합니다.',
      },
      {
        question: '구독을 취소하려면 어떻게 하나요?',
        answer:
          'Apple ID 설정을 통해 언제든지 구독을 취소할 수 있습니다. 설정 > 이름 > 구독으로 이동하여 OfflineClean을 찾으세요.',
      },
      {
        question: '동영상도 작동하나요?',
        answer:
          '네! OfflineClean은 사진과 동영상 모두 지원합니다. 동일한 스와이프 인터페이스로 동영상을 미리 보고 결정할 수 있습니다.',
      },
      {
        question: '특정 앨범을 정리할 수 있나요?',
        answer:
          '물론입니다! 정리할 특정 앨범을 선택하거나 모든 사진을 탐색할 수 있습니다. 여행이나 이벤트 정리에 완벽합니다.',
      },
    ],
  },

  contact: {
    title: '문의하기',
    subtitle: '질문이나 피드백이 있으신가요? 연락 주시면 감사하겠습니다.',
  },

  privacy: {
    title: '개인정보 보호정책',
    lastUpdated: '마지막 업데이트: 2024년 12월',
    intro:
      'OfflineClean은 귀하의 개인정보를 보호하기 위해 최선을 다하고 있습니다. 이 개인정보 보호정책은 귀하의 정보를 어떻게 처리하는지 설명합니다.',
    sections: [
      {
        title: '데이터 수집',
        content:
          'OfflineClean은 개인 데이터를 수집하지 않습니다. 모든 사진 처리는 기기에서 로컬로 이루어집니다. 우리는 귀하의 사진에 접근할 수 없으며, 어떤 서버에도 업로드되지 않습니다.',
      },
      {
        title: '사진 접근',
        content:
          'OfflineClean이 작동하려면 사진 라이브러리에 대한 접근 권한이 필요합니다. 이 접근 권한은 앱 내에서 사진을 표시하고 제거하기로 선택한 사진을 삭제하는 데만 사용됩니다. 사진이 기기를 떠나지 않습니다.',
      },
      {
        title: '분석',
        content:
          '앱 경험을 개선하기 위해 익명의 사용 분석을 수집할 수 있습니다. 이 데이터에는 개인 정보나 사진에 대한 접근이 포함되지 않습니다.',
      },
      {
        title: '타사 서비스',
        content:
          'OfflineClean은 구독 관리를 위해 Apple 인앱 구매를 사용합니다. Apple은 개인정보 보호정책에 설명된 대로 데이터를 수집할 수 있습니다.',
      },
      {
        title: '연락처',
        content: '이 개인정보 보호정책에 대해 질문이 있으시면 문의해 주세요.',
      },
    ],
    contactEmail: 'support@tinylapse.com',
  },

  terms: {
    title: '이용약관',
    lastUpdated: '마지막 업데이트: 2024년 12월',
    intro:
      'OfflineClean을 사용함으로써 이 이용약관에 동의하는 것입니다. 주의 깊게 읽어주세요.',
    sections: [
      {
        title: '앱 사용',
        content:
          'OfflineClean은 개인 사용을 위해 있는 그대로 제공됩니다. 앱을 사용하여 삭제하기로 선택한 모든 사진에 대한 책임은 귀하에게 있습니다.',
      },
      {
        title: '구독',
        content:
          'OfflineClean은 프리미엄 기능을 위한 구독 플랜을 제공합니다. 구독은 Apple 인앱 구매를 통해 관리되며 Apple 이용약관의 적용을 받습니다.',
        items: [
          '구매 확인 시 Apple ID 계정에 결제가 청구됩니다',
          '현재 기간 종료 최소 24시간 전에 취소하지 않으면 구독이 자동 갱신됩니다',
          'Apple ID 계정 설정에서 구독을 관리하고 취소할 수 있습니다',
        ],
      },
      {
        title: '책임 제한',
        content:
          'OfflineClean은 앱 사용으로 인한 데이터 손실에 대해 책임지지 않습니다. 삭제된 사진은 최근 삭제된 항목 앨범으로 이동되며 30일 이내에 복구할 수 있습니다.',
      },
      {
        title: '약관 변경',
        content:
          '이 이용약관은 수시로 업데이트될 수 있습니다. 변경 후 앱을 계속 사용하면 새 약관에 동의한 것으로 간주됩니다.',
      },
    ],
    contactEmail: 'support@tinylapse.com',
  },
}
