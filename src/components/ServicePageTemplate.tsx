import React from 'react';
import ContactButton from './ContactButton';

interface Benefit {
  icon: string;
  title: string;
  desc: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface ServicePageTemplateProps {
  title: string;
  problem: string;
  intro?: string;
  forWho: string;
  includes: string[];
  benefits?: Benefit[];
  result: string;
  faq?: FaqItem[];
  formTexts: any;
  contactLabel: string;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  problem,
  intro,
  forWho,
  includes,
  benefits,
  result,
  faq,
  formTexts,
  contactLabel
}) => {
  return (
    <div style={{ background: "#020202", minHeight: "100vh", color: "white" }}>
      {/* Hero */}
      <header style={{ paddingTop: "10rem", paddingBottom: "5rem", textAlign: "center", borderBottom: "1px solid rgba(0,208,255,0.1)" }}>
        <div className="container">
          <h1 style={{ color: "#00d0ff", marginBottom: "1.5rem", fontSize: "3rem" }}>{title}</h1>
          <p style={{ fontSize: "1.4rem", maxWidth: "800px", margin: "0 auto", color: "#a0a0a0", lineHeight: "1.6" }}>{problem}</p>
        </div>
      </header>

      <div className="glow-separator" style={{ marginTop: 0 }} />

      {/* Intro paragraph */}
      {intro && (
        <section style={{ padding: "6rem 0", background: "#050505" }}>
          <div className="container" style={{ maxWidth: "900px", textAlign: "center" }}>
            <p style={{ fontSize: "1.2rem", color: "#c0c0c0", lineHeight: "1.9" }}>{intro}</p>
          </div>
        </section>
      )}

      {/* For who + Includes */}
      <section style={{ padding: "6rem 0" }}>
        <div className="container">
          <div className="grid" style={{ alignItems: "start" }}>
            <div className="glass-card">
              <h2 style={{ fontSize: "1.6rem", color: "#00d0ff", marginBottom: "1.5rem" }}>Για ποιον είναι</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>{forWho}</p>
            </div>
            <div className="glass-card">
              <h2 style={{ fontSize: "1.6rem", color: "#00d0ff", marginBottom: "1.5rem" }}>Τι περιλαμβάνει</h2>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {includes.map((item, i) => (
                  <li key={i} style={{ marginBottom: "0.75rem", display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ color: "#00d0ff", fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: "1.05rem" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      {benefits && benefits.length > 0 && (
        <section style={{ padding: "6rem 0", background: "#050505" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ color: "#00d0ff" }}>Γιατί να μας επιλέξετε</h2>
            </div>
            <div className="grid">
              {benefits.map((b, i) => (
                <div key={i} className="glass-card">
                  <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{b.icon}</div>
                  <h3 style={{ fontSize: "1.1rem", color: "white", marginBottom: "0.75rem" }}>{b.title}</h3>
                  <p style={{ fontSize: "0.95rem", color: "#a0a0a0", lineHeight: "1.6" }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Result */}
      <section style={{ padding: "6rem 0", background: "linear-gradient(135deg, rgba(0,208,255,0.08) 0%, rgba(0,0,0,0) 100%)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#00d0ff", marginBottom: "2rem" }}>Το αποτέλεσμα</h2>
          <p style={{ fontSize: "1.8rem", fontWeight: 600, maxWidth: "700px", margin: "0 auto", lineHeight: "1.5" }}>{result}</p>
        </div>
      </section>

      {/* FAQ */}
      {faq && faq.length > 0 && (
        <section style={{ padding: "6rem 0", background: "#050505" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ color: "#00d0ff" }}>Συχνές Ερωτήσεις</h2>
            </div>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              {faq.map((item, i) => (
                <div key={i} style={{ marginBottom: "1.5rem", padding: "1.75rem", borderLeft: "4px solid #00d0ff", background: "rgba(0,208,255,0.04)", borderRadius: "0 12px 12px 0" }}>
                  <h4 style={{ marginBottom: "0.75rem", color: "white", fontSize: "1.1rem" }}>{item.q}</h4>
                  <p style={{ color: "#a0a0a0", lineHeight: "1.7", margin: 0 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ padding: "8rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="glass-card" style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem", border: "1px solid rgba(0,208,255,0.2)" }}>
            <h2 style={{ marginBottom: "1rem", fontSize: "2rem" }}>Έτοιμοι να ξεκινήσουμε;</h2>
            <p style={{ color: "#a0a0a0", marginBottom: "2.5rem", fontSize: "1.1rem" }}>Επικοινωνήστε μαζί μας για μια δωρεάν συζήτηση και προσφορά χωρίς δέσμευση.</p>
            <ContactButton
              formTexts={formTexts}
              className="btn btn-primary"
              style={{ background: "#00d0ff", color: "#000", padding: "1rem 3rem", fontSize: "1.1rem" }}
            >
              {contactLabel}
            </ContactButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;
