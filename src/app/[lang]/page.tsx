import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import InteractiveHero from "@/components/InteractiveHero";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const d = await getDictionary(lang);

  return (
    <main style={{ background: "#020202" }}>
      {/* Navbar */}
      <nav>
        <div className="container nav-content">
          <div className="logo">
            FOCUS <span style={{ color: "#00d0ff" }}>AI</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <LanguageSwitcher lang={lang} />
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ padding: "0.6rem 1.5rem", fontSize: "0.9rem", background: "#00d0ff" }}
            >
              {d.nav.contact}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>
        <div className="container">
          <div
            style={{
              textAlign: "center",
              marginBottom: "-4rem",
              position: "relative",
              zIndex: 10,
              opacity: 0,
              animation: "fadeInUp 1s forwards",
            }}
          >
            <h1>
              {d.hero.title} <br /> {d.hero.titleWith}{" "}
              <span style={{ color: "#00d0ff" }}>{d.hero.titleHighlight}</span>
            </h1>
            <p
              style={{
                maxWidth: "800px",
                margin: "0 auto",
                fontSize: "1.25rem",
                color: "#a0a0a0",
                textShadow: "0 0 20px rgba(0,0,0,0.8)",
              }}
            >
              {d.hero.subtitle}
            </p>
          </div>

          <div style={{ opacity: 0, animation: "fadeInUp 1s 0.3s forwards" }}>
            <InteractiveHero />
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ color: "#00d0ff" }}>{d.services.title}</h2>
          <p>{d.services.subtitle}</p>
        </div>

        <div className="grid">
          <div className="glass-card" style={{ borderColor: "rgba(0, 208, 255, 0.1)" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem", filter: "drop-shadow(0 0 10px #00d0ff)" }}>🌐</div>
            <h3>{d.services.web.title}</h3>
            <p>{d.services.web.desc}</p>
          </div>

          <div className="glass-card" style={{ borderColor: "rgba(0, 208, 255, 0.1)" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem", filter: "drop-shadow(0 0 10px #00d0ff)" }}>📈</div>
            <h3>{d.services.marketing.title}</h3>
            <p>{d.services.marketing.desc}</p>
          </div>

          <div className="glass-card" style={{ borderColor: "rgba(0, 208, 255, 0.1)" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem", filter: "drop-shadow(0 0 10px #00d0ff)" }}>🤖</div>
            <h3>{d.services.ai.title}</h3>
            <p>{d.services.ai.desc}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div
            className="glass-card"
            style={{ maxWidth: "800px", margin: "0 auto", border: "1px solid rgba(0, 208, 255, 0.2)" }}
          >
            <h2>{d.contact.title}</h2>
            <p style={{ marginBottom: "2.5rem" }}>{d.contact.desc}</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a
                href={`mailto:${d.contact.email}`}
                className="btn btn-primary"
                style={{
                  fontSize: "1.1rem",
                  background: "#00d0ff",
                  wordBreak: "break-all",
                  textAlign: "center",
                  maxWidth: "100%",
                }}
              >
                ✉️ {d.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>{d.footer.rights}</p>
        </div>
      </footer>
    </main>
  );
}
