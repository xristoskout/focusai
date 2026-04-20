import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import InteractiveHero from "@/components/InteractiveHero";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ContactButton from "@/components/ContactButton";
import ScrollingTicker from "@/components/ScrollingTicker";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const d = await getDictionary(lang);
  const isEl = lang === "el";
  const tickerItems = isEl 
    ? ["Κατασκευη Ιστοσελιδων", "Digital Marketing", "AI Assistants", "SEO Optimization"]
    : ["Website Development", "Digital Marketing", "AI Assistants", "SEO Optimization"];

  return (
    <main style={{ background: "#020202" }}>
      <Navbar lang={lang} d={d} />

      {/* Hero Section */}
      <header className="hero" style={{ paddingTop: "12rem", paddingBottom: "6rem" }}>
        <div className="container">
          <div
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              position: "relative",
              zIndex: 10,
              opacity: 0,
              animation: "fadeInUp 1s forwards",
            }}
          >
            <div style={{ color: "#00d0ff", fontWeight: 600, letterSpacing: "2px", fontSize: "0.9rem", marginBottom: "1rem", textTransform: "uppercase" }}>
              {d.hero.eyebrow}
            </div>
            <h1 style={{ marginBottom: "1.5rem", WebkitTextFillColor: "unset", background: "unset", color: "white", fontSize: "3.5rem" }}>
              {d.hero.title}
            </h1>
            <p
              style={{
                maxWidth: "800px",
                margin: "0 auto 3rem auto",
                fontSize: "1.25rem",
                color: "#a0a0a0",
                lineHeight: "1.6"
              }}
            >
              {d.hero.subtitle}
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
               <a href="#services" className="btn" style={{ background: "#00d0ff", color: "#000" }}>{d.hero.cta1}</a>
               <ContactButton 
                  formTexts={d.contact.form}
                  className="btn" 
                  style={{ background: "transparent", border: "1px solid #00d0ff", color: "#00d0ff" }}
               >
                 {d.hero.cta2}
               </ContactButton>
            </div>
          </div>

          <div style={{ opacity: 0, animation: "fadeInUp 1s 0.3s forwards" }}>
            <InteractiveHero />
          </div>
        </div>
      </header>

      <ScrollingTicker items={tickerItems} />

      {/* Intro Section */}
      <section style={{ background: "#050505", padding: "8rem 0" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "900px" }}>
            <h2 style={{ marginBottom: "2rem", color: "white" }}>{d.intro.title}</h2>
            <p style={{ fontSize: "1.25rem", color: "#a0a0a0", lineHeight: "1.8" }}>{d.intro.content}</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container" style={{ padding: "8rem 0" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ color: "#00d0ff" }}>{d.services.title}</h2>
          <p style={{ maxWidth: "700px", margin: "0 auto", color: "#a0a0a0" }}>{d.services.subtitle}</p>
        </div>

        <div className="grid">
          <a href={`/${lang}/services/website-development`} className="glass-card" style={{ borderColor: "rgba(0, 208, 255, 0.1)", display: "block", textDecoration: "none", color: "inherit" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem", filter: "drop-shadow(0 0 10px #00d0ff)" }}>🌐</div>
            <h3>{d.services.web.title}</h3>
            <p>{d.services.web.desc}</p>
          </a>

          <a href={`/${lang}/services/ai-assistants`} className="glass-card" style={{ borderColor: "rgba(0, 208, 255, 0.1)", display: "block", textDecoration: "none", color: "inherit" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem", filter: "drop-shadow(0 0 10px #00d0ff)" }}>🤖</div>
            <h3>{d.services.ai.title}</h3>
            <p>{d.services.ai.desc}</p>
          </a>

          <a href={`/${lang}/services/digital-marketing`} className="glass-card" style={{ borderColor: "rgba(0, 208, 255, 0.1)", display: "block", textDecoration: "none", color: "inherit" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem", filter: "drop-shadow(0 0 10px #00d0ff)" }}>📈</div>
            <h3>{d.services.marketing.title}</h3>
            <p>{d.services.marketing.desc}</p>
          </a>
        </div>
      </section>

      {/* Why Us Section */}
      <section style={{ background: "#050505", padding: "8rem 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ color: "#00d0ff" }}>{d.whyUs.title}</h2>
            <p style={{ maxWidth: "700px", margin: "0 auto", color: "#a0a0a0" }}>{d.whyUs.subtitle}</p>
          </div>
          <div className="grid">
            {d.whyUs.items.map((item: string, i: number) => (
              <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1rem", background: "rgba(255,255,255,0.03)", borderRadius: "12px" }}>
                <div style={{ color: "#00d0ff", fontSize: "1.2rem" }}>✓</div>
                <p style={{ margin: 0, color: "white", fontSize: "1rem" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-separator" />

      {/* Industries Section */}
      <section id="industries" style={{ padding: "8rem 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ color: "#00d0ff" }}>{d.industries.title}</h2>
            <p style={{ maxWidth: "700px", margin: "0 auto", color: "#a0a0a0" }}>{d.industries.subtitle}</p>
          </div>
          <div className="grid">
            {d.industries.items.map((item: string, i: number) => (
              <div key={i} className="glass-card" style={{ textAlign: "center", padding: "1.5rem" }}>
                <h4 style={{ margin: 0, fontSize: "1.05rem" }}>{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ background: "#050505", padding: "8rem 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ color: "#00d0ff" }}>{d.process.title}</h2>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            {[d.process.step1, d.process.step2, d.process.step3, d.process.step4].map((step, i) => (
              <div key={i} style={{ position: "relative", textAlign: "center" }}>
                <div style={{ 
                  width: "50px", height: "50px", borderRadius: "50%", background: "#00d0ff", color: "#000", 
                  display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem auto", fontWeight: 800, fontSize: "1.2rem" 
                }}>
                  {i + 1}
                </div>
                <h3>{step.title}</h3>
                <p style={{ color: "#a0a0a0", fontSize: "0.95rem" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="glow-separator" />

      {/* Case Studies Intro */}
      <section style={{ padding: "8rem 0" }}>
        <div className="container">
          <div className="glass-card" style={{ textAlign: "center", padding: "4rem" }}>
            <h2 style={{ marginBottom: "1.5rem" }}>{d.caseStudiesSection.title}</h2>
            <p style={{ maxWidth: "800px", margin: "0 auto 2.5rem auto", color: "#a0a0a0", fontSize: "1.1rem" }}>{d.caseStudiesSection.content}</p>
            <a href={`/${lang}/case-studies`} className="btn" style={{ background: "transparent", border: "1px solid #00d0ff", color: "#00d0ff" }}>
              {d.caseStudiesSection.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Blog Intro */}
      <section style={{ background: "#050505", padding: "8rem 0" }}>
        <div className="container">
          <div className="glass-card" style={{ textAlign: "center", padding: "4rem" }}>
            <h2 style={{ marginBottom: "1.5rem" }}>{d.blogSection.title}</h2>
            <p style={{ maxWidth: "800px", margin: "0 auto 2.5rem auto", color: "#a0a0a0", fontSize: "1.1rem" }}>{d.blogSection.content}</p>
            <a href={`/${lang}/blog`} className="btn" style={{ background: "transparent", border: "1px solid #00d0ff", color: "#00d0ff" }}>
              {d.blogSection.cta}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container" style={{ padding: "8rem 0" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ color: "#00d0ff" }}>{d.faq.title}</h2>
        </div>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {[
            { q: d.faq.q1, a: d.faq.a1 },
            { q: d.faq.q2, a: d.faq.a2 }
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: "2rem", padding: "1.5rem", borderLeft: "4px solid #00d0ff", background: "rgba(0, 208, 255, 0.05)" }}>
              <h4 style={{ marginBottom: "0.5rem", color: "white" }}>{item.q}</h4>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container" style={{ padding: "8rem 0" }}>
        <div className="glass-card" style={{ textAlign: "center", padding: "5rem 2rem", background: "linear-gradient(135deg, rgba(0, 208, 255, 0.1) 0%, rgba(0,0,0,0) 100%)" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>{d.contact.title}</h2>
          <p style={{ fontSize: "1.25rem", color: "#a0a0a0", maxWidth: "700px", margin: "0 auto 3rem auto" }}>
            {d.contact.desc}
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <ContactButton 
                  formTexts={d.contact.form}
                  className="btn" 
                  style={{ background: "#00d0ff", color: "#000", padding: "1rem 2.5rem" }}
               >
                 {d.nav.contact}
            </ContactButton>
            <ContactButton 
                  formTexts={d.contact.form}
                  className="btn" 
                  style={{ background: "transparent", border: "1px solid #00d0ff", color: "#00d0ff", padding: "1rem 2.5rem" }}
               >
                 {d.hero.cta2}
            </ContactButton>
          </div>
        </div>
      </section>

      <Footer d={d} />
    </main>

  );
}
