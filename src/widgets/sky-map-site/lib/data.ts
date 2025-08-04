export interface SkyMapSite {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

export const skyMapSites: SkyMapSite[] = [
  {
    id: 1,
    title: 'Stellarium',
    description:
      'Stellarium — bu kompyuter va mobil qurilmalarda ishlaydigan interaktiv planetariy dasturi. Siz yulduzlar, sayyoralar va turli osmon jismlarini haqiqiy vaqt rejimida kuzatishingiz mumkin.',
    image: '/sky-map/sky-map-1.jpg',
    url: 'https://stellarium-web.org',
  },
  {
    id: 2,
    title: 'Sky & Telescope - Interactive Sky Chart',
    description:
      'Sky & Telescope jurnalining interaktiv osmon xaritasi orqali har kuni osmon holatini ko‘rib chiqish, yulduzlarni aniqlash va kuzatuv rejalari tuzish mumkin.',
    image: '/sky-map/sky-map-2.jpg',
    url: 'https://skyandtelescope.org/interactive-sky-chart/',
  },
];

export const researchPlatforms: SkyMapSite[] = [
  {
    id: 1,
    title: 'Zooniverse — Galaxy Zoo',
    description:
      'Talabalar Zooniverse platformasida Galaxy Zoo loyihasiga qo‘shilib, Evklid teleskopi tomonidan olingan galaktika tasvirlarini tahlil qilish orqali xalqaro ilmiy tadqiqotlarga hissa qo‘shishlari mumkin.',
    image: '/sky-map/ilimiy-1.jpg',
    url: 'https://www.zooniverse.org',
  },
  {
    id: 2,
    title: 'CREDO — Cosmic Ray Observatory',
    description:
      'CREDO orqali talabalar o‘z telefonlari yoki kompyuterlari yordamida kosmik nurlarni aniqlashda ishtirok etishlari, simulyatsiyalar, tahlillar va kashfiyotlar orqali ilmiy jamoaga yordam berishlari mumkin.',
    image: '/sky-map/ilimiy-2.jpg',
    url: 'https://www.astro.credo.space/',
  },
  {
    id: 3,
    title: 'NASA’s Eyes',
    description:
      'NASA’s Eyes — talabalar koinotni 3D modelda o‘rganish, NASA missiyalarini real vaqtda kuzatish, sayyoralar, asteroidlar va ekzosayyoralarga oid ilmiy ma’lumotlarga ega bo‘lishlari mumkin bo‘lgan interaktiv platforma.',
    image: '/sky-map/ilimiy-3.jpg',

    url: 'https://eyes.nasa.gov/',
  },
];

export const onlineView: SkyMapSite[] = [
  {
    id: 4,
    title: 'Slooh — Jonli Teleskop Observatoriyasi',
    description:
      'Slooh — bu kollaborativ observatoriya bo‘lib, talabalar birgalikda real vaqt rejimida astronomik kuzatuvlar olib borishlari va koinot bo‘yicha ilmiy izlanishlar amalga oshirishlari mumkin. Ushbu platforma orqali ular Quyosh tizimidagi sayyoralar, galaktikalar, kometalar va boshqa osmon jismlarini o‘rganish imkoniyatiga ega bo‘ladilar. Talabalar bu obyektlarning harakati va o‘zgarishlarini onlayn tarzda bevosita kuzatishlari mumkin. Slooh global miqyosdagi zamonaviy teleskoplar tarmog‘iga ulanadi va foydalanuvchilarga keng ko‘lamli kosmik hududlarni tahlil qilish imkonini beradi. Bu platforma, ayniqsa, talabalarga koinotni amaliy tarzda o‘rganish va ilmiy loyihalarda faol ishtirok etish uchun qulay sharoit yaratadi.',
    image: '/sky-map/online-1.jpg',
    url: 'https://www.slooh.com',
  },
];

export const virtualLabs: SkyMapSite[] = [
  {
    id: 1,
    title: 'CLEA Astronomy Labs',
    description:
      'CLEA — talabalar va o‘qituvchilar uchun interaktiv astronomiya laboratoriyalari bo‘lib, virtual muhitda yulduzlar, sayyoralar, galaktikalar ustida amaliy tajribalar o‘tkazish imkonini beradi. Talabalar yoritish intensivligini o‘lchash, spektrlarni tahlil qilish, galaktikalar harakatini kuzatish va teleskoplar yordamida hodisalarni simulyatsiya qilishlari mumkin.',
    image: '/sky-map/clea-1.jpg',
    url: 'http://public.gettysburg.edu/~marschal/clea/CLEAhome.html',
  },
  {
    id: 2,
    title: 'PhET Astronomy Simulations',
    description:
      'PhET — Kolorado universiteti tomonidan yaratilgan onlayn platforma bo‘lib, unda sayyoralar harakati, Kepler qonunlari, yulduzlarning spektri va orbitalar haqidagi interaktiv astronomik simulyatsiyalar mavjud. Talabalar vizual interfeys orqali amaliy tarzda o‘rganishlari, real vaqt rejimida hodisalarni simulyatsiya qilishlari mumkin.',
    image: '/sky-map/phet-1.jpg',
    url: 'https://phet.colorado.edu/sims/html/my-solar-system/latest/my-solar-system_all.html',
  },
];
