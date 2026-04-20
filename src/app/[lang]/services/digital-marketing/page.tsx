import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../../dictionaries";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const d = await getDictionary(lang);
  return { title: d.pages.marketing.metaTitle, description: d.pages.marketing.metaDesc };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = await getDictionary(lang);

  return (
    <>
      <Navbar lang={lang} d={d} />
      <ServicePageTemplate
        title={d.pages.marketing.title}
        problem={d.pages.marketing.problem}
        intro={d.pages.marketing.intro}
        forWho={d.pages.marketing.forWho}
        includes={d.pages.marketing.includes}
        benefits={d.pages.marketing.benefits}
        result={d.pages.marketing.result}
        faq={d.pages.marketing.faq}
        formTexts={d.contact.form}
        contactLabel={d.nav.contact}
      />
      <Footer d={d} />
    </>
  );
}
