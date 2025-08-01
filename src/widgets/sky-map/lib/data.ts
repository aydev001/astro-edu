export interface SkyMapApp {
  id: number;
  title: string;
  description: string;
  images: string[];
  androidLink: string;
  iosLink: string;
}

export const skyMapApps: SkyMapApp[] = [
  {
    id: 1,
    title: 'Star Rover',
    description:
      'Talabalar o‘zlari uchun planetariy yaratib oladilar. Yulduzlar, sayyoralar, XKS, Hubble va boshqa osmon jismlarini real vaqtda telefonni ko‘tarish orqali ko‘rish mumkin. Katalogda 120 mingdan ortiq yulduzlar va 88 yulduz turkumlari mavjud.',
    images: [
      '/mobile-app/star-rover-1.jpg',
      '/mobile-app/star-rover-2.jpg',
      '/mobile-app/star-rover-3.jpg',
    ],
    androidLink:
      'https://play.google.com/store/apps/details?id=net.eefan.star&hl=en',
    iosLink:
      'https://apps.apple.com/us/app/star-rover-stargazing-guide/id386628906',
  },
  {
    id: 2,
    title: 'SkySafari',
    description:
      'Mobil qurilmani ko‘tarish orqali osmon jismlari kuzatiladi. 120 ming yulduz, 200+ yulduz klasterlari, sayyoralar, yo‘ldoshlar, kometalar, XKS va boshqa astronomik hodisalarni jonlantirish imkonini beradi.',
    images: [
      '/mobile-app/sky-safari-1.jpg',
      '/mobile-app/sky-safari-2.jpg',
      '/mobile-app/sky-safari-3.jpg',
    ],
    androidLink:
      'https://play.google.com/store/apps/details?id=com.simulationcurriculum.skysafari7&hl=en',
    iosLink: 'https://apps.apple.com/us/app/skysafari/id1257281849',
  },
  {
    id: 3,
    title: 'SkyView Lite',
    description:
      'AR texnologiyasi orqali kameradan foydalangan holda osmon jismlari real vaqtda aniqlanadi. GPS va internet talab qilmaydi. Sayyoralar, yulduzlar, sun’iy yo‘ldoshlar va XKS kuzatiladi.',
    images: [
      '/mobile-app/sky-view-1.jpg',
      '/mobile-app/sky-view-2.jpg',
      '/mobile-app/sky-view-3.jpg',
    ],
    androidLink:
      'https://play.google.com/store/apps/details?id=com.t11.skyviewfree&hl=en',
    iosLink: 'https://apps.apple.com/us/app/skyview-lite/id413936865',
  },
  {
    id: 4,
    title: 'Cosmic Watch 2',
    description:
      '3D interaktiv astronomik soat. Real vaqt yoki istalgan vaqtda osmon jismlarini simulyatsiya qiladi. AR rejimi mavjud. Quyosh va Oy tutilishlarini ko‘rsatadi.',
    images: [
      '/mobile-app/cosmic-watch-1.jpg',
      '/mobile-app/cosmic-watch-2.jpg',
      '/mobile-app/cosmic-watch-3.jpg',
    ],
    androidLink:
      'https://play.google.com/store/apps/details?id=com.cosmic_watch.cosmicwatch&hl=en',
    iosLink: 'https://apps.apple.com/us/app/cosmic-watch/id971231853',
  },
  {
    id: 5,
    title: 'Solar Walk 2',
    description:
      'Quyosh tizimining 3D modelli entsiklopediyasi. Sayyoralar, sun’iy yo‘ldoshlar, kometalar va kosmik missiyalar haqidagi ma’lumotlar. Real vaqt va tezlashtirilgan rejim mavjud.',
    images: [
      '/mobile-app/solar-wark-1.jpg',
      '/mobile-app/solar-wark-2.jpg',
      '/mobile-app/solar-wark-3.jpg',
    ],
    androidLink:
      'https://play.google.com/store/apps/details?id=com.vitotechnology.SolarWalk2Free&hl=en',
    iosLink:
      'https://apps.apple.com/us/app/solar-walk-2-view-planets-3d/id1031155880',
  },
  {
    id: 6,
    title: 'Stellarium Mobile',
    description:
      'Minimal interfeysli osmon xaritasi ilovasi. 600000+ yulduzlar, sayyoralar, sun’iy yo‘ldoshlar va meteor yomg‘irlari haqida ma’lumot. VR rejim va o‘quvchilar uchun maxsus rejimlar mavjud.',
    images: [
      '/mobile-app/stilarium-1.jpg',
      '/mobile-app/stilarium-2.jpg',
      '/mobile-app/stilarium-3.jpg',
    ],
    androidLink:
      'https://play.google.com/store/apps/details?id=com.noctuasoftware.stellarium_free&hl=en',
    iosLink:
      'https://apps.apple.com/us/app/stellarium-mobile-star-map/id1458716890',
  },
  {
    id: 7,
    title: 'Star Walk 2',
    description:
      "Interaktiv yulduz xaritasi va astronomiya qo‘llanmasi. Real vaqt rejimida ob'ektlar haqida ma’lumot, 3D modellar, kamera orqali jonli osmon xaritasi. Darslar uchun mos.",
    images: [
      '/mobile-app/star-walk-1.jpg',
      '/mobile-app/star-walk-2.jpg',
      '/mobile-app/star-walk-3.jpg',
    ],
    androidLink:
      'https://play.google.com/store/apps/details?id=com.vitotechnology.StarWalk2Free&hl=en',
    iosLink:
      'https://apps.apple.com/us/app/star-walk-2-plus-all-sky-map/id1112481571',
  },
  {
    id: 8,
    title: 'Star Tracker',
    description:
      'Yulduzlar va boshqa uzoq osmon ob’ektlarini ko‘rsatadi. 88 yulduz turkumi, 8000+ yulduz, 3D kompas va tungi rejim mavjud. O‘tmish va kelajak osmon manzaralarini ko‘rsatadi.',
    images: [
      '/mobile-app/star-tracker-1.jpg',
      '/mobile-app/star-tracker-2.jpg',
      '/mobile-app/star-tracker-3.jpg',
    ],
    androidLink:
      'https://play.google.com/store/apps/details?id=com.PYOPYO.StarTracker&hl=en',
    iosLink:
      'https://apps.apple.com/us/app/star-tracker-lite-live-sky-map/id780172278',
  },
  {
    id: 9,
    title: 'ISS Detector',
    description:
      'XKS, Tiangong, Hubble va boshqa sun’iy yo‘ldoshlar va kometalarni Yerdan ko‘rish imkonini beradi. Kamera orqali Yer kuzatiladi.',
    images: [
      '/mobile-app/iss-1.jpg',
      '/mobile-app/iss-2.jpg',
      '/mobile-app/iss-3.jpg',
    ],
    androidLink:
      'https://play.google.com/store/apps/details?id=com.runar.issdetector&hl=en',
    iosLink: 'https://apps.apple.com/us/app/iss-detector/id1198597805',
  },
];
