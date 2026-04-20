import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ContactButton from "@/components/ContactButton";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = await getDictionary(lang);

  return (
    <div style={{ background: "#020202", minHeight: "100vh", color: "white" }}>
      <Navbar lang={lang} d={d} />

      <main style={{ paddingTop: "8rem" }}>
        <div className="container">
          <header style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h1 style={{ color: "#00d0ff" }}>{d.contactPage.title}</h1>
            <p style={{ fontSize: "1.5rem", color: "#a0a0a0" }}>{d.contactPage.subtitle}</p>
          </header>
          
          <div className="glass-card" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>{d.contactPage.info}</p>
            <div style={{ marginBottom: "2rem", fontSize: "1.5rem" }}>
                <a href="mailto:info@focusai.gr" style={{ color: "#00d0ff" }}>info@focusai.gr</a>
            </div>
            <ContactButton
              formTexts={d.contact.form}
              className="btn btn-primary"
              style={{ padding: "1rem 3rem", fontSize: "1.2rem", background: "#00d0ff", color: "#000" }}
            >
              {d.contact.form.title}
            </ContactButton>
          </div>
        </div>
      </main>

      <Footer d={d} />
    </div>
  );
}

