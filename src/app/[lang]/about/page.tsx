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
    title: isEl ? "Ποιοι Είμαστε | Focus AI" : "About Us | Focus AI",
    description: isEl
      ? "Μάθετε περισσότερα για τη Focus AI — την αποστολή μας, τις αξίες μας και γιατί επιλέγουμε να χτίζουμε premium ψηφιακές λύσεις για ελληνικές επιχειρήσεις."
      : "Learn more about Focus AI — our mission, our values and why we build premium digital solutions for businesses.",
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = await getDictionary(lang);
  const isEl = lang === "el";

  const values = isEl
    ? [
        { icon: "🎯", title: "Αποτέλεσμα πάνω από εμφάνιση", desc: "Κάθε απόφαση — σχεδιαστική, τεχνολογική ή στρατηγική — αξιολογείται με βάση τι φέρνει για την επιχείρησή σας, όχι τι φαίνεται καλύτερο σε ένα portfolio." },
        { icon: "🔍", title: "Ειλικρίνεια & Διαφάνεια", desc: "Λέμε αυτό που σκεφτόμαστε, εξηγούμε κάθε επιλογή και δεν κρύβουμε τίποτα πίσω από τεχνικό vocabulary." },
        { icon: "⚡", title: "Ταχύτητα χωρίς συμβιβασμό", desc: "Παραδίδουμε γρήγορα, χωρίς να θυσιάζουμε ποιότητα. Εκτιμούμε τον χρόνο σας — και to δείχνουμε." },
        { icon: "🤝", title: "Μακροχρόνια σχέση", desc: "Δεν παραδίδουμε και χανόμαστε. Είμαστε εδώ για να υποστηρίξουμε, να βελτιώσουμε και να εξελίξουμε τη λύση μαζί σας." },
        { icon: "🌍", title: "Τοπική γνώση, διεθνής σκέψη", desc: "Ξέρουμε την ελληνική αγορά και τις ανάγκες των ελληνικών επιχειρήσεων — αλλά σχεδιάζουμε με διεθνείς προδιαγραφές." },
        { icon: "🧠", title: "AI-first νοοτροπία", desc: "Πιστεύουμε ότι η τεχνητή νοημοσύνη αλλάζει τον τρόπο που δουλεύουν οι επιχειρήσεις. Και είμαστε εδώ για να σας βοηθήσουμε να την αξιοποιήσετε." },
      ]
    : [
        { icon: "🎯", title: "Results over appearance", desc: "Every decision — design, technology or strategy — is evaluated based on what it brings your business, not what looks best in a portfolio." },
        { icon: "🔍", title: "Honesty & Transparency", desc: "We say what we think, explain every choice and hide nothing behind technical vocabulary." },
        { icon: "⚡", title: "Speed without compromise", desc: "We deliver quickly, without sacrificing quality. We value your time — and we show it." },
        { icon: "🤝", title: "Long-term partnership", desc: "We don't deliver and disappear. We're here to support, improve and evolve the solution together with you." },
        { icon: "🌍", title: "Local knowledge, international thinking", desc: "We know the Greek market and the needs of Greek businesses — but we design to international standards." },
        { icon: "🧠", title: "AI-first mindset", desc: "We believe artificial intelligence is changing the way businesses operate. And we're here to help you leverage it." },
      ];

  const stats = [
    { value: "50+", label: isEl ? "Έργα ολοκληρωμένα" : "Projects completed" },
    { value: "24/7", label: isEl ? "Υποστήριξη & Monitoring" : "Support & Monitoring" },
    { value: "3x", label: isEl ? "Μέσος όρος αύξησης traffic" : "Average traffic increase" },
    { value: "100%", label: isEl ? "Custom λύσεις, χωρίς templates" : "Custom solutions, no templates" },
  ];

  return (
    <div style={{ background: "#020202", minHeight: "100vh", color: "white" }}>
      <Navbar lang={lang} d={d} />

      {/* Hero */}
      <header style={{ paddingTop: "10rem", paddingBottom: "5rem", textAlign: "center", borderBottom: "1px solid rgba(0,208,255,0.1)" }}>
        <div className="container">
          <div style={{ color: "#00d0ff", fontWeight: 600, letterSpacing: "2px", fontSize: "0.85rem", marginBottom: "1rem", textTransform: "uppercase" }}>
            {isEl ? "Ποιοι είμαστε" : "Who we are"}
          </div>
          <h1 style={{ marginBottom: "1.5rem", fontSize: "3rem" }}>{d.aboutPage.title}</h1>
          <p style={{ fontSize: "1.4rem", maxWidth: "750px", margin: "0 auto", color: "#a0a0a0", lineHeight: "1.7" }}>
            {d.aboutPage.subtitle}
          </p>
        </div>
      </header>

      {/* Mission */}
      <section style={{ padding: "6rem 0", background: "#050505" }}>
        <div className="container" style={{ maxWidth: "900px", textAlign: "center" }}>
          <p style={{ fontSize: "1.2rem", color: "#c0c0c0", lineHeight: "1.9" }}>{d.aboutPage.content}</p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem" }}>
            {stats.map((s, i) => (
              <div key={i} className="glass-card" style={{ textAlign: "center", padding: "2.5rem 1rem" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "#00d0ff", marginBottom: "0.5rem" }}>{s.value}</div>
                <div style={{ color: "#a0a0a0", fontSize: "0.95rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "6rem 0", background: "#050505" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ color: "#00d0ff" }}>{isEl ? "Οι αξίες μας" : "Our values"}</h2>
            <p style={{ color: "#a0a0a0", maxWidth: "600px", margin: "0 auto" }}>
              {isEl
                ? "Αυτές οι αρχές καθοδηγούν κάθε project και κάθε απόφαση που παίρνουμε."
                : "These principles guide every project and every decision we make."}
            </p>
          </div>
          <div className="grid">
            {values.map((v, i) => (
              <div key={i} className="glass-card">
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{v.icon}</div>
                <h3 style={{ fontSize: "1.1rem", color: "white", marginBottom: "0.75rem" }}>{v.title}</h3>
                <p style={{ fontSize: "0.95rem", color: "#a0a0a0", lineHeight: "1.6", margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "8rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="glass-card" style={{ maxWidth: "700px", margin: "0 auto", padding: "4rem", border: "1px solid rgba(0,208,255,0.2)" }}>
            <h2 style={{ marginBottom: "1rem", fontSize: "2rem" }}>
              {isEl ? "Ας συνεργαστούμε" : "Let's work together"}
            </h2>
            <p style={{ color: "#a0a0a0", marginBottom: "2.5rem", fontSize: "1.1rem" }}>
              {isEl
                ? "Πείτε μας για την επιχείρησή σας και ας δούμε πώς μπορούμε να σας βοηθήσουμε."
                : "Tell us about your business and let's see how we can help you."}
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
