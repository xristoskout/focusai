import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../../dictionaries";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const d = await getDictionary(lang);
  return { title: d.pages.hotels.metaTitle, description: d.pages.hotels.metaDesc };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = await getDictionary(lang);

  return (
    <>
      <Navbar lang={lang} d={d} />
      <ServicePageTemplate
        title={d.pages.hotels.title}
        problem={d.pages.hotels.problem}
        intro={d.pages.hotels.intro}
        forWho={d.pages.hotels.forWho}
        includes={d.pages.hotels.includes}
        benefits={d.pages.hotels.benefits}
        result={d.pages.hotels.result}
        faq={d.pages.hotels.faq}
        formTexts={d.contact.form}
        contactLabel={d.nav.contact}
      />
      <Footer d={d} />
    </>
  );
}
