import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEl = lang === "el";
  return {
    title: isEl ? "Οι Υπηρεσίες Μας | Focus AI" : "Our Services | Focus AI",
    description: isEl
      ? "Κατασκευή ιστοσελίδων, ανάπτυξη AI assistants και στρατηγικές digital marketing για σύγχρονες επιχειρήσεις."
      : "Website development, AI assistants, and digital marketing strategies for modern businesses.",
  };
}

export default async function ServicesIndex({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = await getDictionary(lang);
  const isEl = lang === "el";

  const services = [
    {
      href: `/${lang}/services/website-development`,
      title: d.pages.web.title,
      icon: "🌐",
      desc: isEl 
        ? "Γρήγορες, SEO-optimized ιστοσελίδες σχεδιασμένες για μετατροπές (Next.js & React)." 
        : "Fast, SEO-optimized websites designed for conversions (Next.js & React)."
    },
    {
      href: `/${lang}/services/ai-assistants`,
      title: d.pages.ai.title,
      icon: "🤖",
      desc: isEl 
        ? "Αυτόματη εξυπηρέτηση πελατών, συλλογή leads και κρατήσεις μέσω AI, 24/7." 
        : "Automated customer service, lead collection, and bookings via AI, 24/7."
    },
    {
      href: `/${lang}/services/digital-marketing`,
      title: d.pages.marketing.title,
      icon: "📈",
      desc: isEl 
        ? "Διαφημίσεις Google & Meta, Local SEO και στρατηγική περιεχομένου." 
        : "Google & Meta ads, Local SEO, and content strategy."
    }
  ];

  return (
    <div style={{ background: "#020202", minHeight: "100vh", color: "white" }}>
      <Navbar lang={lang} d={d} />

      <header style={{ paddingTop: "10rem", paddingBottom: "5rem", textAlign: "center", borderBottom: "1px solid rgba(0,208,255,0.1)" }}>
        <div className="container">
          <div style={{ color: "#00d0ff", fontWeight: 600, letterSpacing: "2px", fontSize: "0.85rem", marginBottom: "1rem", textTransform: "uppercase" }}>
            {isEl ? "Τι προσφερουμε" : "What we offer"}
          </div>
          <h1 style={{ marginBottom: "1.5rem", fontSize: "3rem" }}>{d.nav.services}</h1>
          <p style={{ fontSize: "1.3rem", maxWidth: "700px", margin: "0 auto", color: "#a0a0a0", lineHeight: "1.7" }}>
            {isEl
              ? "Ψηφιακές λύσεις υψηλού επιπέδου που αυξάνουν τα έσοδα και τον επαγγελματισμό της επιχείρησής σας."
              : "High-level digital solutions that increase the revenue and professionalism of your business."}
          </p>
        </div>
      </header>

      <main style={{ padding: "6rem 0" }}>
        <div className="container">
          <div className="grid">
            {services.map((s, i) => (
              <a key={i} href={s.href} className="glass-card" style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: "1rem", transition: "transform 0.2s, border-color 0.3s" }}>
                <div style={{ fontSize: "2.5rem" }}>{s.icon}</div>
                <h2 style={{ fontSize: "1.6rem", color: "white", marginBottom: "0.5rem" }}>{s.title}</h2>
                <p style={{ color: "#a0a0a0", lineHeight: "1.6", fontSize: "1rem", flex: 1 }}>{s.desc}</p>
                <div style={{ marginTop: "1rem", color: "#00d0ff", fontWeight: 600, fontSize: "0.95rem" }}>
                  {isEl ? "Περισσότερα →" : "Learn more →"}
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <section style={{ padding: "6rem 0", background: "#050505" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="glass-card" style={{ maxWidth: "700px", margin: "0 auto", padding: "4rem", border: "1px solid rgba(0,208,255,0.2)" }}>
            <h2 style={{ marginBottom: "1rem", fontSize: "2rem" }}>
              {isEl ? "Ποια λύση ταιριάζει σε εσάς;" : "Which solution fits you?"}
            </h2>
            <p style={{ color: "#a0a0a0", marginBottom: "2.5rem", fontSize: "1.1rem" }}>
              {isEl
                ? "Κάθε επιχείρηση είναι διαφορετική. Επικοινωνήστε μαζί μας για να βρούμε τι χρειάζεστε πραγματικά."
                : "Every business is different. Contact us to find out what you really need."}
            </p>
            <ContactButton
              formTexts={d.contact.form}
              className="btn"
              style={{ background: "#00d0ff", color: "#000", padding: "1rem 3rem", fontSize: "1.1rem" }}
            >
              {d.nav.contact}
            </ContactButton>
          </div>
        </div>
      </section>

      <Footer d={d} />
    </div>
  );
}
