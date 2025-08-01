export interface ExternalResource {
  id: number;
  title: string;
  description: string;
  url: string;
}

export const galleryResources: ExternalResource[] = [
  {
    id: 1,
    title: 'NASA Image and Video Library',
    description: 'NASA tomonidan taqdim etilgan rasm va video arxivi',
    url: 'https://images.nasa.gov/',
  },
  {
    id: 2,
    title: 'ESA (European Space Agency) Images',
    description: 'ESA rasm va multimedia kutubxonasi',
    url: 'https://www.esa.int/ESA_Multimedia/Images',
  },
  {
    id: 3,
    title: 'Hubble Space Telescope Gallery',
    description: 'Hubble teleskopi tomonidan olingan suratlar',
    url: 'https://hubblesite.org/images/gallery',
  },
  {
    id: 4,
    title: 'APOD (Astronomy Picture of the Day)',
    description: 'Har kuni yangilanadigan astronomik surat',
    url: 'https://apod.nasa.gov/apod/astropix.html',
  },
  {
    id: 5,
    title: 'Solar System Scope',
    description: 'Quyosh tizimining jonli simulyatsiyasi',
    url: 'https://www.solarsystemscope.com/',
  },
  {
    id: 6,
    title: 'Worldwide Telescope',
    description: 'Interaktiv koinot kuzatuvi platformasi',
    url: 'https://worldwidetelescope.org/webclient/',
  },
  {
    id: 7,
    title: 'Yulduzning hayot aylanishi (NASA)',
    description: 'NASA animatsiyasi — yulduz evolyutsiyasi',
    url: 'https://svs.gsfc.nasa.gov/12910',
  },
  {
    id: 8,
    title: 'Qorong‘u materiya va galaktikalar shakllanishi',
    description: 'NASA animatsiyasi',
    url: 'https://svs.gsfc.nasa.gov/12609',
  },
  {
    id: 9,
    title: 'Oyning fazalari va libratsiyasi',
    description: 'NASA animatsiyasi',
    url: 'https://svs.gsfc.nasa.gov/5048',
  },
  {
    id: 10,
    title: 'Kepler missiyasi animatsiyasi (YouTube)',
    description: 'Ekzoplanetlar kashfiyoti',
    url: 'https://www.youtube.com/watch?v=t2cwq74m3JU',
  },
];
