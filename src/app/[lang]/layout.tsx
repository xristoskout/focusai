import type { Metadata } from "next";
import { getDictionary, hasLocale, Locale } from "./dictionaries";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'el' }]
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === 'el' 
      ? 'Focus AI | Ψηφιακή Υπεροχή με Ιστοσελίδες, AI Assistants & Digital Marketing' 
      : 'Focus AI | Digital Excellence with Websites, AI Assistants & Digital Marketing',
    description: lang === 'el'
      ? 'Η Focus AI δημιουργεί επαγγελματικές ιστοσελίδες, AI assistants και digital marketing λύσεις για σύγχρονες επιχειρήσεις που θέλουν καλύτερη online παρουσία και περισσότερα αποτελέσματα.'
      : 'Focus AI creates professional websites, AI assistants, and digital marketing solutions for modern businesses wanting better online presence and more results.',
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
