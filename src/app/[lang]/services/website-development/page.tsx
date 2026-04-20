import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../../dictionaries";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const d = await getDictionary(lang);
  return { title: d.pages.web.metaTitle, description: d.pages.web.metaDesc };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = await getDictionary(lang);

  return (
    <>
      <Navbar lang={lang} d={d} />
      <ServicePageTemplate
        title={d.pages.web.title}
        problem={d.pages.web.problem}
        intro={d.pages.web.intro}
        forWho={d.pages.web.forWho}
        includes={d.pages.web.includes}
        benefits={d.pages.web.benefits}
        result={d.pages.web.result}
        faq={d.pages.web.faq}
        formTexts={d.contact.form}
        contactLabel={d.nav.contact}
      />
      <Footer d={d} />
    </>
  );
}
