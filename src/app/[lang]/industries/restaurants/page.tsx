import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../../dictionaries";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const d = await getDictionary(lang);
  return { title: d.pages.restaurants.metaTitle, description: d.pages.restaurants.metaDesc };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = await getDictionary(lang);

  return (
    <>
      <Navbar lang={lang} d={d} />
      <ServicePageTemplate
        title={d.pages.restaurants.title}
        problem={d.pages.restaurants.problem}
        intro={d.pages.restaurants.intro}
        forWho={d.pages.restaurants.forWho}
        includes={d.pages.restaurants.includes}
        benefits={d.pages.restaurants.benefits}
        result={d.pages.restaurants.result}
        faq={d.pages.restaurants.faq}
        formTexts={d.contact.form}
        contactLabel={d.nav.contact}
      />
      <Footer d={d} />
    </>
  );
}
