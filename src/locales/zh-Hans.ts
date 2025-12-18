import type { Translation } from './types'

export const zhHans: Translation = {
  nav: {
    features: '功能',
    howItWorks: '工作原理',
    faq: '常见问题',
    contact: '联系我们',
  },

  hero: {
    badge: '适用于 iPhone',
    title: '简单滑动',
    titleHighlight: '清理照片',
    subtitle:
      'OfflineClean 帮助您整理并释放 iPhone 存储空间。向右滑动保留，向左滑动删除。100% 隐私 - 所有处理都在您的设备上进行。',
    cta: '免费下载',
    statsItems: [
      { text: '滑动决定' },
      { text: '释放空间' },
      { text: '100% 隐私' },
      { text: '无云上传' },
    ],
  },

  features: {
    title: '强大的',
    titleHighlight: '功能',
    items: [
      {
        title: '滑动决定',
        description:
          '简洁直观的界面。向右滑动保留，向左滑动删除。几秒钟内做出决定。',
      },
      {
        title: '100% 隐私',
        description:
          '您的照片永远不会离开设备。无上传、无服务器、无追踪。完全保障隐私。',
      },
      {
        title: '释放存储',
        description:
          '轻松识别和删除不需要的照片，释放 iPhone 宝贵的存储空间。',
      },
      {
        title: '相册整理',
        description:
          '清理特定相册或浏览所有照片。非常适合整理旅行或活动照片。',
      },
      {
        title: '随时撤销',
        description:
          '操作失误？没问题。随时撤销上一个决定或重置所有进度。',
      },
      {
        title: '安全删除',
        description:
          '已删除的照片会进入"最近删除"文件夹。如需恢复，您有30天时间。',
      },
      {
        title: '排序选项',
        description:
          '按日期、大小或相册排序照片。更快找到重要内容。',
      },
      {
        title: '视频支持',
        description:
          '不仅是照片 - 用同样直观的滑动界面清理视频。',
      },
      {
        title: '进度追踪',
        description:
          '实时查看已查看、保留和标记删除的照片数量。',
      },
    ],
  },

  whyOfflineClean: {
    title: '为什么选择',
    titleHighlight: 'OfflineClean',
    reasons: [
      {
        title: '完全隐私',
        description:
          '与云端解决方案不同，您的照片永远不会离开设备。我们认真对待您的隐私。',
      },
      {
        title: '直观设计',
        description:
          '灵感来自最佳移动体验。滑动决策让清理照片库变得快速有趣。',
      },
      {
        title: '无需账户',
        description:
          '无需创建账户即可立即使用。无需邮箱、密码，毫无麻烦。',
      },
      {
        title: '省电高效',
        description:
          '性能优化。清理照片不会耗尽电池。',
      },
    ],
  },

  howItWorks: {
    title: '工作',
    titleHighlight: '原理',
    subtitle: '四个简单步骤清理照片库',
    steps: [
      {
        title: '授权照片访问',
        description:
          '允许 OfflineClean 访问您的照片库。您的照片始终保存在设备上。',
      },
      {
        title: '滑动浏览照片',
        description:
          '向右滑动保留喜欢的照片。向左滑动标记要删除的照片。',
      },
      {
        title: '查看决定',
        description:
          '检查已保留和标记的照片。如果改变主意，可以在列表之间移动项目。',
      },
      {
        title: '确认并释放空间',
        description:
          '点击完成将标记的照片移至"最近删除"。享受释放的存储空间！',
      },
    ],
  },

  appScreenshots: {
    title: '实际',
    titleHighlight: '演示',
    subtitle: '精美设计与强大功能的结合',
    screenshots: [
      { title: '滑动界面', description: '直观的滑动决策' },
      { title: '查看进度', description: '追踪清理进度' },
      { title: '相册选择', description: '清理特定相册' },
    ],
  },

  pricing: {
    title: '简单',
    titleHighlight: '定价',
    freeTrial: '3天免费试用',
    freeTrialBadge: '免费试用',
    plans: {
      weekly: {
        name: '周付',
        period: '/周',
        description: '适合偶尔清理',
        features: ['无限滑动', '包含所有功能', '随时取消'],
      },
      yearly: {
        name: '年付',
        period: '/年',
        description: '常规用户的最佳选择',
        badge: '节省80%',
        features: [
          '无限滑动',
          '包含所有功能',
          '随时取消',
          '优先支持',
        ],
      },
    },
    cta: '开始免费试用',
    cancelAnytime: '随时取消，无需理由。',
    disclaimer:
      '付款将从您的 Apple ID 账户扣除。订阅将自动续订，除非在当前周期结束前至少24小时取消。',
  },

  cta: {
    title: '今天就开始清理照片库',
    subtitle:
      '下载 OfflineClean，释放 iPhone 存储空间。100% 隐私，100% 本地处理。',
    button: '免费下载',
    availableText: '在 App Store 下载',
  },

  footer: {
    description:
      '简单滑动清理照片库。100% 隐私，所有处理都在您的设备上进行。',
    product: '产品',
    quickLinks: '快速链接',
    legal: '法律信息',
    followUs: '关注我们',
    copyright: '2024 OfflineClean. 保留所有权利。',
    productLinks: [{ name: '功能' }, { name: '工作原理' }, { name: '下载' }],
    legalLinks: [{ name: '隐私政策' }, { name: '服务条款' }, { name: '联系我们' }],
  },

  faq: {
    title: '常见问题',
    subtitle: '查找有关 OfflineClean 常见问题的答案',
    items: [
      {
        question: '我的数据在 OfflineClean 中安全吗？',
        answer:
          '绝对安全！OfflineClean 在您的设备上处理所有内容。您的照片永远不会离开 iPhone，我们无法访问您的数据。无云上传、无服务器、无追踪。',
      },
      {
        question: '删除的照片会怎样？',
        answer:
          '标记删除的照片会移至照片应用中的"最近删除"相册。在永久删除前，您有30天时间恢复它们。',
      },
      {
        question: '需要网络连接吗？',
        answer:
          '不需要！OfflineClean 完全离线工作。所有处理都在您的设备上本地进行。无需网络。',
      },
      {
        question: '可以撤销决定吗？',
        answer:
          '可以！您可以随时使用撤销按钮撤销上一个决定。如需要，也可以重置所有进度重新开始。',
      },
      {
        question: '有免费试用吗？',
        answer:
          '有！我们提供3天免费试用，让您在订阅前试用所有功能。',
      },
      {
        question: '如何取消订阅？',
        answer:
          '您可以随时通过 Apple ID 设置取消订阅。前往"设置">"您的姓名">"订阅"，找到 OfflineClean。',
      },
      {
        question: '支持视频吗？',
        answer:
          '支持！OfflineClean 同时支持照片和视频。您可以预览视频并用同样的滑动界面做决定。',
      },
      {
        question: '可以清理特定相册吗？',
        answer:
          '当然！您可以选择特定相册进行清理，或浏览所有照片。非常适合整理旅行或活动照片。',
      },
    ],
  },

  contact: {
    title: '联系我们',
    subtitle: '有问题或反馈？我们很乐意听取您的意见。',
  },

  privacy: {
    title: '隐私政策',
    lastUpdated: '最后更新：2024年12月',
    intro:
      'OfflineClean 致力于保护您的隐私。本隐私政策说明我们如何处理您的信息。',
    sections: [
      {
        title: '数据收集',
        content:
          'OfflineClean 不收集任何个人数据。所有照片处理都在您的设备上本地进行。我们无法访问您的照片，也不会上传任何内容到服务器。',
      },
      {
        title: '照片访问',
        content:
          'OfflineClean 需要访问您的照片库才能运行。此访问权限仅用于在应用内显示照片和删除您选择移除的照片。您的照片永远不会离开设备。',
      },
      {
        title: '分析',
        content:
          '我们可能收集匿名使用分析以改善应用体验。这些数据不包含任何个人信息或对您照片的访问。',
      },
      {
        title: '第三方服务',
        content:
          'OfflineClean 使用 Apple 应用内购买管理订阅。Apple 可能按其隐私政策所述收集数据。',
      },
      {
        title: '联系方式',
        content: '如果您对本隐私政策有任何问题，请联系我们。',
      },
    ],
    contactEmail: 'support@tinylapse.com',
  },

  terms: {
    title: '服务条款',
    lastUpdated: '最后更新：2024年12月',
    intro:
      '使用 OfflineClean 即表示您同意这些服务条款。请仔细阅读。',
    sections: [
      {
        title: '应用使用',
        content:
          'OfflineClean 按原样提供，供个人使用。您对使用应用删除的任何照片负责。',
      },
      {
        title: '订阅',
        content:
          'OfflineClean 为高级功能提供订阅计划。订阅通过 Apple 应用内购买管理，受 Apple 条款和条件约束。',
        items: [
          '购买确认时从您的 Apple ID 账户扣款',
          '除非在当前周期结束前至少24小时取消，否则订阅将自动续订',
          '您可以在 Apple ID 账户设置中管理和取消订阅',
        ],
      },
      {
        title: '责任限制',
        content:
          'OfflineClean 对因使用应用造成的任何数据丢失不承担责任。删除的照片会移至"最近删除"相册，可在30天内恢复。',
      },
      {
        title: '条款变更',
        content:
          '我们可能不时更新这些服务条款。变更后继续使用应用即表示接受新条款。',
      },
    ],
    contactEmail: 'support@tinylapse.com',
  },
}
