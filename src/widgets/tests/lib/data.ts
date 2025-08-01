export interface QuestionType {
  id: number;
  question: string;
  correctAnswer: string;
  options: string[];
  allAnswers?: string[];
}

export const questionData: QuestionType[] = [
  {
    id: 1,
    question: 'Kosmonavtika so’zining ma’nosini ayting?',
    correctAnswer: 'kosmosda kema boshqarish',
    options: [
      'kosmosda kema boshqarish',
      'fazoda uchish',
      'kosmik fazoni aylanish',
      'kosmik fazoda sayr etish',
    ],
  },
  {
    id: 2,
    question: 'Raketaning tortish kuchi qanday ifodadan topiladi?',
    correctAnswer:
      'ifodadan, bu yerda q-vaqt birligi (sek) ichidagi massa sarfi, ω – gaz mahsulotining raketadan  chiqish tezligi',
    options: [
      'ifodadan, bu yerda q-vaqt birligi (sek) ichidagi massa sarfi, ω – gaz mahsulotining raketadan  chiqish tezligi',
      'ifodadan topiladi, m-raketaning massasi, α-tezlanishi.',
      'ifodadan topiladi,  g- erkin tushuv tezlanishi, ω-burchak tezlik',
      'F=MS',
    ],
  },
  {
    id: 3,
    question: 'Raketa harakati paytida uning tezligi ............',
    correctAnswer: 'Siolkovskiy formulasidan topiladi',
    options: [
      'Siolkovskiy formulasidan topiladi',
      'Gomon formulasidan topiladi',
      'Kepler formulasidan topiladi',
      'Nyutonning butun olam tortishish qonuni formulasidan topiladi',
    ],
  },
  {
    id: 4,
    question:
      'Uchish vaqtida kosmik apparatga ta`sir etivchi eng zarur tabiyat kuchi …',
    correctAnswer: 'Butun olam tortishish kuchi',
    options: [
      'Butun olam tortishish kuchi',
      'Yadro kuchlari',
      'elastik kuchi',
      'og`irlik kuchi',
    ],
  },
  {
    id: 5,
    question:
      'Orbitada erkin harakatlanayotgan raketaga qanday asosiy kuchlar ta’sir qiladi?',
    correctAnswer:
      'Butun olam tortish kuchi, aerodinamik kuch, Quyosh nurlarining bosim kuchi',
    options: [
      'Butun olam tortish kuchi, aerodinamik kuch, Quyosh nurlarining bosim kuchi',
      'Yer atmoferasining qarshilik va ko‘taruvchi kuchlari',
      'Quyoshning tortish kuchi',
      'Oy va planetalarning tortish kuchi',
    ],
  },
  {
    id: 6,
    question: 'Quyoshning gravitatsion ta’sir sferasi radiusi qancha?',
    correctAnswer: '1-2 yy',
    options: ['1-2 yy', '1000 yy', '925000 yy', '66000 km'],
  },
  {
    id: 7,
    question: 'Oyning gravitatsion parametri nechaga teng?',
    correctAnswer: '4,9×103 km3/sek2',
    options: [
      '4,9×103 km3/sek2',
      '5,4287×108 km3/sek2',
      '1,327×1011 km3/sek2',
      '3,986×105 km3/sek2',
    ],
  },
  {
    id: 8,
    question:
      'Planetalarga uchishdagi butun passiv traektoriyasini nechta bo`lakka bo`lamiz:',
    correctAnswer: '3',
    options: ['3', '5', '4', '8'],
  },
  {
    id: 9,
    question:
      'Agar tortuvchi jism Quyosh bo`lsa, eng kichik va eng katta masofadagi ellips nuqtalari qanday ataladi?',
    correctAnswer: 'perigeliy, afeliy',
    options: [
      'perigeliy, afeliy',
      'perigeliy, apogey',
      'peritsentr, apotsentr',
      'perigey, afeliy',
    ],
  },
  {
    id: 10,
    question:
      'Raketaning erkin harakati paytida uning ichida vaznsizlik holati qanday ro‘y beradi?',
    correctAnswer:
      'Raketa birgina tortish kuchi ta’sirida erkin va ilgarilama harakatlanayotgan bo‘lsa, u holda vaznsizlik ro‘y beradi',
    options: [
      'Raketa birgina tortish kuchi ta’sirida erkin va ilgarilama harakatlanayotgan bo‘lsa, u holda vaznsizlik ro‘y beradi',
      'Erkin va ilgarilama harakatlanayotgan raketada vakuum sharoitida vaznsizlik ro‘y beradi',
      'Havosiz joyda erkin harakatlanayotgan raketa ichida vaznsizlik kuzatiladi',
      'Raketa kosmosga chiqib, Yerning tortish kuchidan xoli bo‘lganligi tufayli unda vaznsizlik kuzatiladi',
    ],
  },
  {
    id: 11,
    question: 'Osmon jismining Yerga eng yaqin nuqtasi qanday nomlanadi?',
    correctAnswer: 'Perigey',
    options: ['Perigey', 'perisentr', 'aposentr', 'apogey'],
  },
  {
    id: 12,
    question: 'Osmon jismining Yerdan eng uzoq nuqtasi qanday nomlanadi?',
    correctAnswer: 'Apogey',
    options: ['Apogey', 'perisentr', 'aposentr', 'perigey'],
  },
  {
    id: 13,
    question: 'Yerning birinchi sun’iy yo‘ldoshi qachon uchirilgan?',
    correctAnswer: '1957 yil 4 oktyabrda, Baykanur (Qozog‘iston) Kosmodromidan',
    options: [
      '1957 yil 4 oktyabrda, Baykanur (Qozog‘iston) Kosmodromidan',
      '1956 yil 10 noyabrda Miss Kennedi  (AQSH) kosmodromidan',
      '1961 yili sobiq Ittifoqning Kapustin-Yar kosmodromidan',
      '1959 yili AQSHning Virjiniya  shtatiga qarashli Wallops kosmodromidan',
    ],
  },
  {
    id: 14,
    question: 'Yulduz spektri qanday fizik kattalik haqida ma’lumot beradi?',
    correctAnswer: 'Yuzasining harorati',
    options: [
      'Yuzasining harorati',
      'Planetalar soni',
      'Yulduz yoshi',
      'Yulduzning massasi',
    ],
  },
  {
    id: 15,
    question: 'Quyosh qanday turdagi yulduz hisoblanadi?',
    correctAnswer: 'G sinfdagi sariq mitti',
    options: [
      'G sinfdagi sariq mitti',
      'M sinfdagi yulduz',
      'Oq mitti',
      'Qizil gigant',
    ],
  },
  {
    id: 16,
    question: 'Qora o‘ralarni qanday aniqlash mumkin?',
    correctAnswer: 'Ular atrofidagi jismlarning harakatiga qarab',
    options: [
      'Ular atrofidagi jismlarning harakatiga qarab',
      'Bevosita ko‘rish orqali',
      'Ularning tovush chiqishi bilan',
      'Ularning massasi bilan',
    ],
  },
  {
    id: 17,
    question: 'Supernova portlashi natijasida nima hosil bo‘lishi mumkin?',
    correctAnswer: 'Neytron yulduz yoki qora tuynuk',
    options: [
      'Neytron yulduz yoki qora tuynuk',
      'Yangi galaktika',
      'Faqat oq mitti',
      'Yorug‘lik nuri',
    ],
  },
  {
    id: 18,
    question: 'Yulduzlar energiyani qanday jarayon orqali hosil qiladi?',
    correctAnswer: 'Yadro sintezi',
    options: [
      'Yadro sintezi',
      'Kimyoviy reaktsiyalar',
      'Issiqlik tarqalishi',
      'Magnit induksiya',
    ],
  },
  {
    id: 19,
    question: 'Ekzosayyoralar asosan qanday usul bilan aniqlanadi?',
    correctAnswer: 'Tranzit usuli',
    options: [
      'Tranzit usuli',
      'Spektral dispersiya',
      'Parallaks usuli',
      'Radioto‘lqinlar bilan',
    ],
  },
  {
    id: 20,
    question: 'Yillik parallaks yulduzning nimasini aniqlashga yordam beradi?',
    correctAnswer: 'Masofasini',
    options: ['Masofasini', 'Spektral turini', 'Yorqinligini', 'Haroratini'],
  },
  {
    id: 21,
    question: 'Yulduzlar energiyani qanday jarayon orqali hosil qiladi?',
    correctAnswer: 'Yadro sintezi',
    options: [
      'Yadro sintezi',
      'Kimyoviy reaktsiyalar',
      'Issiqlik tarqalishi',
      'Magnit induksiya',
    ],
  },
  {
    id: 22,
    question: 'Yulduz spektri qanday fizik kattalik haqida ma’lumot beradi?',
    correctAnswer: 'Yuzasining harorati',
    options: [
      'Yuzasining harorati',
      'Yulduz zichligi',
      'Yulduz yoshi',
      'Massasi',
    ],
  },
  {
    id: 23,
    question:
      'Kichik massa yulduzlar hayotining yakuniy bosqichi nima bilan tugaydi?',
    correctAnswer: 'Oq mitti',
    options: ['Oq mitti', 'Neytron yulduz', 'Qora tuynuk', 'Supernova'],
  },
  {
    id: 24,
    question: 'Quyosh tizimining eng katta yo‘ldoshi qaysi?',
    correctAnswer: 'Ganimed',
    options: ['Ganimed', 'Io', 'Titan', 'Kallisto'],
  },
  {
    id: 25,
    question: 'Ekliptika nima?',
    correctAnswer: 'Quyosh yil davomida osmonda harakat qiladigan yo‘li',
    options: [
      'Quyosh yil davomida osmonda harakat qiladigan yo‘li',
      'Yerning magnit maydoni',
      'Quyosh atmosferasi',
      'Oy orbitasi',
    ],
  },
  {
    id: 26,
    question: 'Yulduzlar tizimi nima deb ataladi?',
    correctAnswer: 'Galaktika',
    options: ['Galaktika', 'Kometalar guruhi', 'Plazma buluti', 'Zodiak'],
  },
  {
    id: 27,
    question: 'Zodiak yulduz turkumlari nima?',
    correctAnswer: 'Ekliptika bo‘ylab joylashgan yulduz turkumlari',
    options: [
      'Ekliptika bo‘ylab joylashgan yulduz turkumlari',
      'Qutb yulduzlari',
      'Faqat qishda ko‘rinadigan yulduzlar',
      'Eng yorqin yulduzlar',
    ],
  },
  {
    id: 28,
    question: 'Quyoshning gravitatsion parametri qanday formuladan topiladi?',
    correctAnswer:
      'μ = G·M, bu yerda G–gravitatsion doimiylik, M–Quyoshning massasi',
    options: [
      'μ = G·M, bu yerda G–gravitatsion doimiylik, M–Quyoshning massasi',
      'μ = G/R',
      'K = E·V',
      'K = G·R',
    ],
  },
  {
    id: 29,
    question: 'Quyoshning massasi Yerning massasidan necha marta katta?',
    correctAnswer: '333000',
    options: ['333000', '33300', '3330', '333'],
  },
  {
    id: 30,
    question: 'Bir parsek necha yorug’lik yiliga teng?',
    correctAnswer: '3,26',
    options: ['3,26', '2,16', '3,16', '2,26'],
  },
  {
    id: 31,
    question: 'Oy sirtida 1-kosmik tezlikning kattaligi qanchaga teng?',
    correctAnswer: '1,67 km/sga',
    options: ['1,67 km/sga', '1,8 km/s ga', '2,0 km/s ga', '2,3 km/s ga'],
  },
  {
    id: 32,
    question:
      'Yerdan uchgan sun’iy yo‘ldosh orbitasining Yerdan eng yaqin nuqtasi nima deb ataladi?',
    correctAnswer: 'Perigey',
    options: ['Perigey', 'Apogey', 'Peritsentr', 'Aposentr'],
  },
  {
    id: 33,
    question:
      'Yerdan uchgan sun’iy yo‘ldosh orbitasining Yerdan eng uzoq nuqtasi nima deb ataladi?',
    correctAnswer: 'Apogey',
    options: ['Apogey', 'Perigey', 'Apotsentr', 'Peritsentr'],
  },
  {
    id: 34,
    question: 'Yerdagi birinchi kosmik tezlik necha km/s ga teng?',
    correctAnswer: '7,9 km/s',
    options: ['7,9 km/s', '11,2 km/s', '1,68 km/s', '2,375 km/s'],
  },
  {
    id: 35,
    question: 'Yerdagi ikkinchi kosmik tezlik necha km/s ga teng?',
    correctAnswer: '11,2 km/s',
    options: ['11,2 km/s', '7,9 km/s', '2,375 km/s', '1,68 km/s'],
  },
  {
    id: 36,
    question: 'Uchinchi kosmik tezlik son jihatdan qanchaga teng (km/s)?',
    correctAnswer: '16,659',
    options: ['16,659', '16,001', '16,2', '17,5'],
  },
  {
    id: 37,
    question: 'To‘rtinchi kosmik tezlik son jihatdan qanchaga teng (km/s)?',
    correctAnswer: '31,816',
    options: ['31,816', '31', '30,4', '31,2'],
  },
  {
    id: 38,
    question: 'Quyosh qanday turdagi yulduz hisoblanadi?',
    correctAnswer: 'G sinfdagi sariq mitti',
    options: [
      'G sinfdagi sariq mitti',
      'M sinfdagi yulduz',
      'Oq mitti',
      'Qizil gigant',
    ],
  },
  {
    id: 39,
    question: 'Bir parsek necha astronomik birligiga teng?',
    correctAnswer: '206265',
    options: ['206265', '206205', '265206', '206285'],
  },
  {
    id: 40,
    question: 'Marsning tabiiy yo‘ldoshlari soni nechta?',
    correctAnswer: '2',
    options: ['2', '1', '17', '55'],
  },
  {
    id: 41,
    question:
      'Yulduzlar energiyasini hosil qilishda qanday asosiy reaksiya ishtirok etadi?',
    correctAnswer: 'Vodorodning geliyga aylanishi',
    options: [
      'Vodorodning geliyga aylanishi',
      'Kislorodning vodorodga aylanishi',
      'Uglerod sikli',
      'Yadro parchalanishi',
    ],
  },
  {
    id: 42,
    question: 'Qora tuynukning voqealar gorizonti nimani anglatadi?',
    correctAnswer: 'Chiqib bo‘lmaydigan chegara',
    options: [
      'Chiqib bo‘lmaydigan chegara',
      'Tashqi atmosfera',
      'Magnetosfera chegarasi',
      'Yulduzlararo modda',
    ],
  },
  {
    id: 43,
    question:
      '1934 yilda 1 kvadrat gradusli maydonga 131 galaktika to‘g‘ri kelishini kim aniqladi?',
    correctAnswer: 'Xabbl',
    options: ['Xabbl', 'Nyuton', 'Fraungofer', 'Dopler'],
  },
  {
    id: 44,
    question: 'Yulduzlarning balandligi nimalarga bog‘liq?',
    correctAnswer: 'Kuzatuvchining kengligi va vaqtga',
    options: [
      'Kuzatuvchining kengligi va vaqtga',
      'Yulduzning massasi',
      'Yulduzning yoshi',
      'Oy fazasiga',
    ],
  },
  {
    id: 45,
    question: 'Quyosh tizimiga eng yaqin yulduz qaysi?',
    correctAnswer: 'Proksima Centauri',
    options: ['Proksima Centauri', 'Betelgeuse', 'Sirius', 'Alpha Centauri A'],
  },
  {
    id: 46,
    question: 'Yerdan keyingi sayyora qaysi?',
    correctAnswer: 'Mars',
    options: ['Mars', 'Yupiter', 'Venera', 'Saturn'],
  },
  {
    id: 47,
    question:
      'Oyga birinchi bo‘lib qanday kosmik apparatda borib, unga birinchi qadamini kim qo‘ygan?',
    correctAnswer: 'N.Armstrong, AQShni “Apollon” kosmik apparatida',
    options: [
      'N.Armstrong, AQShni “Apollon” kosmik apparatida',
      'Oldrin, AQSHning “Apollon” kosmik apparatida',
      'Kollinz, AQSHning “Apollon” kosmik apparatida',
      'V.Komarov, sobiq Ittifoqning “Vostok” kosmik apparatida',
    ],
  },
  {
    id: 48,
    question: 'Dunyodagi birinchi kosmonavt ayol kim?',
    correctAnswer: 'V. Tereshkova',
    options: ['V. Tereshkova', 'V. Titova', 'A. Leonova', 'S. Nikolaeva'],
  },
  {
    id: 49,
    question: 'Ochiq fazoga chiqqan ilk kosmonavt kim?',
    correctAnswer: 'A.A. Leonov',
    options: ['A.A. Leonov', 'V. Tereshkova', 'G. Titov', 'Yu. Gagarin'],
  },
  {
    id: 50,
    question: 'Yerning o‘rtacha radiusi necha kilometr?',
    correctAnswer: '6371',
    options: ['6371', '6378', '6357', '6400'],
  },
];
