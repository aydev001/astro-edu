import { Rubik } from 'next/font/google';

const rubikText = Rubik({
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-rubik-text',
  subsets: ['latin', 'cyrillic'],
});

export { rubikText };
