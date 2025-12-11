import type { Translation } from './types'

export const tr: Translation = {
  nav: {
    features: 'Özellikler',
    howItWorks: 'Nasıl Çalışır',
    faq: 'SSS',
    contact: 'İletişim',
  },

  hero: {
    badge: 'iPhone için Mevcut',
    title: 'Fotoğraflarınızı Temizleyin',
    titleHighlight: 'Basit Kaydırmalarla',
    subtitle:
      'OfflineClean, iPhone depolama alanınızı düzenlemenize ve boş yer açmanıza yardımcı olur. Saklamak için sağa, silmek için sola kaydırın. %100 gizli - tüm işlemler cihazınızda gerçekleşir.',
    cta: 'Ücretsiz İndir',
    statsItems: [
      { text: 'Kaydırarak Karar Ver' },
      { text: 'Yer Aç' },
      { text: '%100 Gizli' },
      { text: 'Bulut Yüklemesi Yok' },
    ],
  },

  features: {
    title: 'Güçlü',
    titleHighlight: 'Özellikler',
    items: [
      {
        title: 'Kaydırarak Karar Ver',
        description:
          'Basit ve sezgisel arayüz. Saklamak için sağa, silmek için sola kaydırın. Saniyeler içinde karar verin.',
      },
      {
        title: '%100 Gizli',
        description:
          'Fotoğraflarınız asla cihazınızdan çıkmaz. Yükleme yok, sunucu yok, takip yok. Tam gizlilik garantisi.',
      },
      {
        title: 'Depolama Alanı Aç',
        description:
          'İstenmeyen fotoğrafları kolayca belirleyin ve kaldırın, iPhone depolama alanınızı boş bırakın.',
      },
      {
        title: 'Albüm Düzenleme',
        description:
          'Belirli albümleri temizleyin veya tüm fotoğraflarınıza göz atın. Gezileri veya etkinlikleri düzenlemek için mükemmel.',
      },
      {
        title: 'İstediğiniz Zaman Geri Al',
        description:
          'Hata mı yaptınız? Sorun değil. Son kararınızı geri alın veya tüm ilerlemeyi sıfırlayın.',
      },
      {
        title: 'Güvenli Silme',
        description:
          'Silinen fotoğraflar Son Silinenler klasörüne gider. Gerekirse 30 gün içinde kurtarabilirsiniz.',
      },
      {
        title: 'Sıralama Seçenekleri',
        description:
          'Fotoğrafları tarihe, boyuta veya albüme göre sıralayın. Sizin için önemli olanları daha hızlı bulun.',
      },
      {
        title: 'Video Desteği',
        description:
          'Sadece fotoğraflar değil - videolarınızı da aynı sezgisel kaydırma arayüzüyle temizleyin.',
      },
      {
        title: 'İlerleme Takibi',
        description:
          'Kaç fotoğraf incelediğinizi, sakladığınızı ve silmek için işaretlediğinizi gerçek zamanlı görün.',
      },
    ],
  },

  whyOfflineClean: {
    title: 'Neden',
    titleHighlight: 'OfflineClean',
    reasons: [
      {
        title: 'Tam Gizlilik',
        description:
          'Bulut tabanlı çözümlerin aksine, fotoğraflarınız asla cihazınızdan çıkmaz. Gizliliğinizi ciddiye alıyoruz.',
      },
      {
        title: 'Sezgisel Tasarım',
        description:
          'En iyi mobil deneyimlerden esinlenildi. Kaydırma tabanlı kararlar, kütüphanenizi temizlemeyi hızlı ve eğlenceli hale getirir.',
      },
      {
        title: 'Hesap Gerektirmez',
        description:
          'Hesap oluşturmadan hemen kullanmaya başlayın. E-posta yok, şifre yok, zorluk yok.',
      },
      {
        title: 'Pil Dostu',
        description:
          'Performans için optimize edildi. Pilinizi tüketmeden fotoğraflarınızı temizleyin.',
      },
    ],
  },

  howItWorks: {
    title: 'Nasıl',
    titleHighlight: 'Çalışır',
    subtitle: 'Dört basit adımda fotoğraf kütüphanenizi temizleyin',
    steps: [
      {
        title: 'Fotoğraf Erişimi Ver',
        description:
          "OfflineClean'in fotoğraf kütüphanenize erişmesine izin verin. Fotoğraflarınız cihazınızda kalır.",
      },
      {
        title: 'Fotoğrafları Kaydır',
        description:
          'Sevdiğiniz fotoğrafları saklamak için sağa kaydırın. Silmek için sola kaydırın.',
      },
      {
        title: 'Kararlarınızı İnceleyin',
        description:
          'Sakladığınız ve işaretlediğiniz fotoğrafları kontrol edin. Fikrinizi değiştirirseniz öğeler arasında taşıyın.',
      },
      {
        title: 'Onayla ve Yer Aç',
        description:
          "İşaretlenen fotoğrafları Son Silinenler'e taşımak için bitir'e dokunun. Boş alanınızın keyfini çıkarın!",
      },
    ],
  },

  appScreenshots: {
    title: 'Uygulamayı',
    titleHighlight: 'Keşfet',
    subtitle: 'Güzel tasarım güçlü işlevsellikle buluşuyor',
    screenshots: [
      { title: 'Kaydırma Arayüzü', description: 'Sezgisel kaydırma tabanlı kararlar' },
      { title: 'İlerleme Takibi', description: 'Temizlik ilerlemenizi takip edin' },
      { title: 'Albüm Seçimi', description: 'Belirli albümleri temizleyin' },
    ],
  },

  pricing: {
    title: 'Basit',
    titleHighlight: 'Fiyatlandırma',
    freeTrial: '3 gün ücretsiz deneme',
    freeTrialBadge: 'Ücretsiz Dene',
    plans: {
      weekly: {
        name: 'Haftalık',
        period: '/hafta',
        description: 'Ara sıra temizlik için ideal',
        features: ['Sınırsız kaydırma', 'Tüm özellikler dahil', 'İstediğiniz zaman iptal'],
      },
      yearly: {
        name: 'Yıllık',
        period: '/yıl',
        description: 'Düzenli kullananlar için en iyi değer',
        badge: '%80 Tasarruf',
        features: [
          'Sınırsız kaydırma',
          'Tüm özellikler dahil',
          'İstediğiniz zaman iptal',
          'Öncelikli destek',
        ],
      },
    },
    cta: 'Ücretsiz Denemeyi Başlat',
    cancelAnytime: 'İstediğiniz zaman iptal edin. Soru sorulmaz.',
    disclaimer:
      'Ödeme Apple ID hesabınızdan tahsil edilir. Abonelik, mevcut dönem sona ermeden en az 24 saat önce iptal edilmedikçe otomatik olarak yenilenir.',
  },

  cta: {
    title: 'Fotoğraf Kütüphanenizi Temizlemeye Bugün Başlayın',
    subtitle:
      "OfflineClean'i indirin ve iPhone depolama alanınızı boşaltın. %100 gizli, %100 cihaz üzerinde.",
    button: 'Ücretsiz İndir',
    availableText: "App Store'da Mevcut",
  },

  footer: {
    description:
      'Basit kaydırmalarla fotoğraf kütüphanenizi temizleyin. %100 gizli, tüm işlemler cihazınızda gerçekleşir.',
    product: 'Ürün',
    quickLinks: 'Hızlı Bağlantılar',
    legal: 'Yasal',
    followUs: 'Bizi Takip Edin',
    copyright: '2024 OfflineClean. Tüm hakları saklıdır.',
    productLinks: [{ name: 'Özellikler' }, { name: 'Nasıl Çalışır' }, { name: 'İndir' }],
    legalLinks: [{ name: 'Gizlilik Politikası' }, { name: 'Kullanım Şartları' }, { name: 'İletişim' }],
  },

  faq: {
    title: 'Sıkça Sorulan Sorular',
    subtitle: 'OfflineClean hakkında sıkça sorulan soruların yanıtları',
    items: [
      {
        question: 'Verilerim OfflineClean ile güvenli mi?',
        answer:
          "Kesinlikle! OfflineClean her şeyi cihazınızda işler. Fotoğraflarınız asla iPhone'unuzdan çıkmaz ve verilerinize erişimimiz yoktur. Bulut yüklemesi yok, sunucu yok, takip yok.",
      },
      {
        question: 'Silinen fotoğraflara ne olur?',
        answer:
          'Silinmek üzere işaretlenen fotoğraflar Fotoğraflar uygulamanızda Son Silinenler albümüne taşınır. Kalıcı olarak silinmeden önce 30 gün içinde kurtarabilirsiniz.',
      },
      {
        question: 'İnternet bağlantısı gerekli mi?',
        answer:
          'Hayır! OfflineClean tamamen çevrimdışı çalışır. Tüm işlemler cihazınızda yerel olarak gerçekleşir. İnternet gerekmez.',
      },
      {
        question: 'Kararlarımı geri alabilir miyim?',
        answer:
          'Evet! Geri al düğmesini kullanarak son kararınızı istediğiniz zaman geri alabilirsiniz. Gerekirse tüm ilerlemeyi sıfırlayabilir ve yeniden başlayabilirsiniz.',
      },
      {
        question: 'Ücretsiz deneme var mı?',
        answer:
          'Evet! Abone olmadan önce tüm özellikleri deneyebilmeniz için 3 günlük ücretsiz deneme sunuyoruz.',
      },
      {
        question: 'Aboneliğimi nasıl iptal ederim?',
        answer:
          "Aboneliğinizi Apple ID ayarlarınızdan istediğiniz zaman iptal edebilirsiniz. Ayarlar > Adınız > Abonelikler'e gidin ve OfflineClean'i bulun.",
      },
      {
        question: 'Videolarla çalışır mı?',
        answer:
          'Evet! OfflineClean hem fotoğrafları hem de videoları destekler. Aynı kaydırma arayüzüyle videoları önizleyebilir ve karar verebilirsiniz.',
      },
      {
        question: 'Belirli albümleri temizleyebilir miyim?',
        answer:
          'Kesinlikle! Temizlemek için belirli albümler seçebilir veya tüm fotoğraflarınıza göz atabilirsiniz. Gezileri veya etkinlikleri düzenlemek için mükemmel.',
      },
    ],
  },

  contact: {
    title: 'Bize Ulaşın',
    subtitle: 'Sorularınız veya geri bildirimleriniz mi var? Sizden haber almak isteriz.',
  },

  privacy: {
    title: 'Gizlilik Politikası',
    lastUpdated: 'Son güncelleme: Aralık 2024',
    intro:
      'OfflineClean gizliliğinizi korumaya kararlıdır. Bu Gizlilik Politikası bilgilerinizi nasıl işlediğimizi açıklar.',
    sections: [
      {
        title: 'Veri Toplama',
        content:
          'OfflineClean hiçbir kişisel veri toplamaz. Tüm fotoğraf işleme cihazınızda yerel olarak gerçekleşir. Fotoğraflarınıza erişimimiz yoktur ve hiçbir şey herhangi bir sunucuya yüklenmez.',
      },
      {
        title: 'Fotoğraf Erişimi',
        content:
          "OfflineClean'in çalışması için fotoğraf kütüphanenize erişmesi gerekir. Bu erişim yalnızca fotoğraflarınızı uygulama içinde görüntülemek ve kaldırmayı seçtiğiniz fotoğrafları silmek için kullanılır. Fotoğraflarınız asla cihazınızdan çıkmaz.",
      },
      {
        title: 'Analitik',
        content:
          'Uygulama deneyimini iyileştirmek için anonim kullanım analitiği toplayabiliriz. Bu veriler herhangi bir kişisel bilgi veya fotoğraflarınıza erişim içermez.',
      },
      {
        title: 'Üçüncü Taraf Hizmetleri',
        content:
          'OfflineClean abonelik yönetimi için Apple Uygulama İçi Satın Alım kullanır. Apple, gizlilik politikalarında açıklandığı şekilde veri toplayabilir.',
      },
      {
        title: 'İletişim',
        content: 'Bu Gizlilik Politikası hakkında sorularınız varsa lütfen bizimle iletişime geçin.',
      },
    ],
    contactEmail: 'support@tinylapse.com',
  },

  terms: {
    title: 'Kullanım Şartları',
    lastUpdated: 'Son güncelleme: Aralık 2024',
    intro:
      "OfflineClean'i kullanarak bu Kullanım Şartlarını kabul etmiş olursunuz. Lütfen bunları dikkatlice okuyun.",
    sections: [
      {
        title: 'Uygulama Kullanımı',
        content:
          'OfflineClean kişisel kullanım için olduğu gibi sunulmaktadır. Uygulama kullanılarak silmeyi seçtiğiniz fotoğraflardan siz sorumlusunuz.',
      },
      {
        title: 'Abonelikler',
        content:
          'OfflineClean premium özellikler için abonelik planları sunar. Abonelikler Apple Uygulama İçi Satın Alım aracılığıyla yönetilir ve Apple şartları ve koşullarına tabidir.',
        items: [
          'Ödeme, satın alma onayından sonra Apple ID hesabınızdan tahsil edilir',
          'Abonelik, mevcut dönem sona ermeden en az 24 saat önce iptal edilmedikçe otomatik olarak yenilenir',
          'Abonelikleri Apple ID hesap ayarlarınızda yönetebilir ve iptal edebilirsiniz',
        ],
      },
      {
        title: 'Sorumluluk Sınırlaması',
        content:
          'OfflineClean, uygulamanın kullanımından kaynaklanan veri kaybından sorumlu değildir. Silinen fotoğraflar Son Silinenler albümüne taşınır ve 30 gün içinde kurtarılabilir.',
      },
      {
        title: 'Şartlardaki Değişiklikler',
        content:
          'Bu Kullanım Şartlarını zaman zaman güncelleyebiliriz. Değişikliklerden sonra uygulamanın kullanılmaya devam edilmesi yeni şartların kabulü anlamına gelir.',
      },
    ],
    contactEmail: 'support@tinylapse.com',
  },
}
