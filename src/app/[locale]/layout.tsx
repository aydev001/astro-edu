import type { Metadata } from 'next';
import '../globals.css';
import { rubikText } from '@/shared/config/fonts';
import { ThemeProvider } from '@/shared/config/theme-provider';
import { PRODUCT_INFO } from '@/shared/constants/data';
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/shared/config/i18n/routing';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { setRequestLocale } from 'next-intl/server';
import QueryProvider from '@/shared/config/react-query/QueryProvider';
import Script from 'next/script';
import MainLayout from '@/widgets/layout/ui';

export const metadata: Metadata = {
  title: PRODUCT_INFO.name,
  description: PRODUCT_INFO.description,
  icons: PRODUCT_INFO.favicon,
};

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${rubikText.className} antialiased`}>
        <NextIntlClientProvider locale={locale}>
          <ThemeProvider
            attribute={'class'}
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <QueryProvider>
              <MainLayout>{children}</MainLayout>
            </QueryProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
      <Script
        src="https://buttons.github.io/buttons.js"
        strategy="lazyOnload"
        async
        defer
      />
    </html>
  );
}
