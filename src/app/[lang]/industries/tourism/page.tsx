import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../../dictionaries";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const d = await getDictionary(lang);
  return { title: d.pages.tourism.metaTitle, description: d.pages.tourism.metaDesc };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = await getDictionary(lang);

  return (
    <>
      <Navbar lang={lang} d={d} />
      <ServicePageTemplate
        title={d.pages.tourism.title}
        problem={d.pages.tourism.problem}
        intro={d.pages.tourism.intro}
        forWho={d.pages.tourism.forWho}
        includes={d.pages.tourism.includes}
        benefits={d.pages.tourism.benefits}
        result={d.pages.tourism.result}
        faq={d.pages.tourism.faq}
        formTexts={d.contact.form}
        contactLabel={d.nav.contact}
      />
      <Footer d={d} />
    </>
  );
}
