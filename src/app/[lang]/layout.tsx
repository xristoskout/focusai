import type { Metadata } from "next";
import { getDictionary, hasLocale, Locale } from "./dictionaries";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'el' }]
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === 'el' ? 'Focus AI | Ψηφιακή Αριστεία' : 'Focus AI | Digital Excellence',
    description: lang === 'el'
      ? 'Σύγχρονες ιστοσελίδες, ψηφιακό marketing και υποστήριξη AI για την επιχείρησή σας.'
      : 'Modern websites, targeted digital marketing, and AI assistance solutions for your business with Focus AI.',
    icons: { icon: "/favicon.ico" },
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
  // No html/body here — handled by root layout
  return <>{children}</>;
}
