export interface VideoLesson {
  id: number;
  title: string;
  youtubeUrl: string;
}

export const videoLessons: VideoLesson[] = [
  {
    id: 1,
    title: '1-dars: Astronomiyaga kirish',
    youtubeUrl: 'https://www.youtube.com/embed/U9WOMerccoM',
  },
  {
    id: 2,
    title: '2-dars: Quyosh tizimi tuzilishi',
    youtubeUrl: 'https://www.youtube.com/embed/libKVRa01L8',
  },
  {
    id: 3,
    title: '3-dars: Yulduzlar hayot aylanishi',
    youtubeUrl: 'https://www.youtube.com/embed/PM9CQDlQI0A',
  },
  {
    id: 4,
    title: '4-dars: Quyosh tizimidagi sayyoralar',
    youtubeUrl: 'https://www.youtube.com/embed/zkCKx3fpk4Q',
  },
];
