export interface LectureFile {
  id: number;
  title: string;
  src: string;
  count?: number;
}

export interface LectureSection {
  label: string;
  type: 'single' | 'table';
  basePath: string;
  data: LectureFile[];
}

export const lectureSections: LectureSection[] = [
  {
    label: 'Fan dasturi',
    type: 'single',
    basePath: '/fan-hujjatlar/fan-dasturi',
    data: [
      {
        id: 1,
        title: 'Fan dasturi',
        src: '/resource/fan-hujjatlari/fan-dasturi.PDF',
      },
    ],
  },
  {
    label: 'Fan sillabusi',
    type: 'single',
    basePath: '/fan-hujjatlar/fan-sillabusi',
    data: [
      {
        id: 1,
        title: 'Fan sillabusi',
        src: '/resource/fan-hujjatlari/fan-sillabusi.PDF',
      },
    ],
  },
  {
    label: 'Glossariy',
    type: 'single',
    basePath: '/fan-hujjatlar/glossary',
    data: [
      {
        id: 1,
        title: 'Glossariy',
        src: '/resource/fan-hujjatlari/glossary.pdf',
      },
    ],
  },
  {
    label: "Ma'ruza mashg'ulotlari",
    type: 'table',
    basePath: '/fan-malumotlari/maruza',
    data: Array.from({ length: 11 }, (_, i) => ({
      id: i + 1,
      title: `${i + 1}-MA’RUZA MASHG‘ULOTI`,
      src: `/resource/fan-malumotlari/maruza/${i + 1}- MA’RUZA MASHG‘ULOTI.pdf`,
      count: 2,
    })),
  },
  {
    label: 'Amaliy mashg‘ulotlar',
    type: 'table',
    basePath: '/fan-malumotlari/amaliy',
    data: Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      title: `${i + 1}-AMALIY MASHG‘ULOTI`,
      src: `/resource/fan-malumotlari/amaliy/${i + 1}- AMALIY MASHG‘ULOTI.pdf`,
      count: 2,
    })),
  },
  {
    label: 'Laboratoriya ishlari',
    type: 'table',
    basePath: '/fan-malumotlari/labaratorya',
    data: Array.from({ length: 3 }, (_, i) => ({
      id: i + 1,
      title: `${i + 1}-Laboratoriya ishi`,
      src: `/resource/fan-malumotlari/labaratorya/${i + 1}-Laboratoriya ishi.pdf`,
      count: 2,
    })),
  },
  {
    label: 'Mustaqil ish',
    type: 'single',
    basePath: '/fan-malumotlari/mustaqil',
    data: [
      {
        id: 1,
        title: "Mustaqil ta'lim mavzulari",
        src: "/resource/fan-malumotlari/mustaqil/Mustaqil ta'lim mavzulari.pdf",
      },
    ],
  },
  {
    label: 'Adabiyotlar',
    type: 'table',
    basePath: '/darslik-adabiyot',
    data: [
      'Ahmadjon_Boydedayev_Tabiat_kuchlari_va_olam_evolutsiyasi_1996.pdf',
      'Amaliy_va_umumiy_astrofizika_R_Ziyaxanov,_S_Nuritdinov_2017.pdf',
      'Astrofizika. 1-qism (I.Sattorov) - 2009.pdf',
      'Astrofizika. 2-qism (I.Sattorov) - 2007.pdf',
      'Astronomiya (M.Mamadazimov) - Kollej.pdf',
      'Astronomiya. 11-sinf (2018, M.Mamadazimov).pdf',
      "Mamadmuso_Mamadazimov_Astronomiyadan_o'qish_kitobi_1992.pdf",
      "Mirzo Ulug'bek. Ilmi nujum - 1994.pdf",
      'Quyosh fizikasi (M.Zakirov, Yu.Muslimova) - 2003.pdf',
      "Salohitdin Nuritdinov. Somon yo'li - 1989.pdf",
      'Umumiy_astronomiya_Mamadmusa_Mamadazimov_2008_3_—_копия.pdf',
      'Ya.Perelman. Qiziqarli astronomiya - 2009.pdf',
    ].map((filename, index) => ({
      id: index + 1,
      title: filename.replace('.pdf', '').replace(/_/g, ' '),
      src: `/resource/darsliklar-adabiyotlar/adabiyotlar/${filename}`,
      count: 2,
    })),
  },
  {
    label: 'Metodik yordam',
    type: 'single',
    basePath: '/metodik-yordam',
    data: [
      {
        id: 1,
        title:
          'Talabalarga astronomiyaga oid rasmlar va videolarni quyidagi saytlardan',
        src: '/resource/metodik-yordam/Talabalarga_astronomiyaga_oid_rasmlarni_va_videolarni_quyidagi_saytlardan.pdf',
      },
    ],
  },
];
