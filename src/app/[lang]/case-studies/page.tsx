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
    title: isEl ? "Case Studies | Focus AI" : "Case Studies | Focus AI",
    description: isEl
      ? "Δείτε πώς η Focus AI βοήθησε επιχειρήσεις να αναπτυχθούν ψηφιακά με ιστοσελίδες, AI assistants και digital marketing."
      : "See how Focus AI has helped businesses grow digitally with websites, AI assistants and digital marketing.",
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = await getDictionary(lang);
  const isEl = lang === "el";

  const cases = isEl
    ? [
        {
          tag: "Ξενοδοχείο · Κατασκευή Ιστοσελίδας",
          title: "Boutique Hotel — Αύξηση Απευθείας Κρατήσεων κατά 40%",
          desc: "Boutique hotel 4 αστέρων ήθελε να μειώσει την εξάρτηση από Booking.com και να αυξήσει τις απευθείας κρατήσεις. Σχεδιάσαμε νέα ιστοσελίδα με inline booking engine, virtual tour δωματίων και πλήρη SEO βελτιστοποίηση για αναζητήσεις στα Ελληνικά και Αγγλικά.",
          results: ["40% αύξηση απευθείας κρατήσεων", "Μείωση προμηθειών κατά 18%", "Page speed score 95+/100"],
          services: ["Κατασκευή Ιστοσελίδας", "Booking Engine", "SEO"],
          icon: "🏨",
        },
        {
          tag: "Δικηγορικό Γραφείο · AI Assistant",
          title: "Δικηγορικό Γραφείο — 24/7 Εξυπηρέτηση & Αυτόματη Συλλογή Leads",
          desc: "Δικηγορικό γραφείο με υψηλή ροή ερωτημάτων ήθελε να μειώσει τον χρόνο που αφιέρωνε σε αρχικές ερωτήσεις πελατών. Υλοποιήσαμε AI assistant που απαντά σε συχνές ερωτήσεις, συλλέγει στοιχεία υπόθεσης και κανονίζει ραντεβού — αυτόματα, 24/7.",
          results: ["70% μείωση χρόνου για αρχικές ερωτήσεις", "200+ νέα leads/μήνα αυτόματα", "0 χαμένες ερωτήσεις εκτός ωραρίου"],
          services: ["AI Assistant", "WhatsApp Integration", "Lead Automation"],
          icon: "⚖️",
        },
        {
          tag: "Εστιατόριο · Digital Marketing",
          title: "Εστιατόριο Αθήνας — Κυριαρχία στο Google Maps & +55% Online Κρατήσεις",
          desc: "Εστιατόριο στην Αθήνα δεν εμφανιζόταν στις τοπικές αναζητήσεις. Αναλάβαμε Local SEO, βελτιστοποιήσαμε το Google Business Profile και δημιουργήσαμε νέα ιστοσελίδα με online κράτηση. Μέσα σε 4 μήνες, κυριαρχούσε στις κορυφαίες θέσεις για τις βασικές αναζητήσεις.",
          results: ["+55% online κρατήσεις", "Top-3 εμφάνιση στο Google Maps", "+130% organic traffic"],
          services: ["Local SEO", "Κατασκευή Ιστοσελίδας", "Google My Business"],
          icon: "🍽️",
        },
        {
          tag: "Τουριστικό Γραφείο · Πολυγλωσσική Ιστοσελίδα",
          title: "Tour Operator — Πολυγλωσσική Ιστοσελίδα & Διεθνής Αγορά",
          desc: "Tour operator με εξειδίκευση σε εμπειρίες στην Κρήτη ήθελε να απευθυνθεί σε Γερμανούς και Βρετανούς ταξιδιώτες. Δημιουργήσαμε τριγλωσσική ιστοσελίδα (ΕΛ/ΑΝ/GE) με online inquiry forms ανά εμπειρία και SEO βελτιστοποίηση για κάθε αγορά.",
          results: ["+85% ξενόγλωσσοι επισκέπτες", "30+ inquiry/μήνα από ξένους", "Διπλασιασμός εσόδων σε 6 μήνες"],
          services: ["Πολυγλωσσική Ιστοσελίδα", "SEO", "Online Booking"],
          icon: "🌍",
        },
      ]
    : [
        {
          tag: "Hotel · Website Development",
          title: "Boutique Hotel — 40% Increase in Direct Bookings",
          desc: "A 4-star boutique hotel wanted to reduce dependence on Booking.com and increase direct bookings. We designed a new website with an inline booking engine, virtual room tours and full SEO optimization for Greek and English searches.",
          results: ["40% increase in direct bookings", "18% reduction in commissions", "Page speed score 95+/100"],
          services: ["Website Development", "Booking Engine", "SEO"],
          icon: "🏨",
        },
        {
          tag: "Law Firm · AI Assistant",
          title: "Law Firm — 24/7 Service & Automatic Lead Collection",
          desc: "A law firm with high query volume wanted to reduce the time spent on initial client inquiries. We implemented an AI assistant that answers frequent questions, collects case details and schedules appointments — automatically, 24/7.",
          results: ["70% reduction in time for initial inquiries", "200+ new leads/month automatically", "0 missed inquiries outside office hours"],
          services: ["AI Assistant", "WhatsApp Integration", "Lead Automation"],
          icon: "⚖️",
        },
        {
          tag: "Restaurant · Digital Marketing",
          title: "Athens Restaurant — Google Maps Dominance & +55% Online Reservations",
          desc: "An Athens restaurant wasn't appearing in local searches. We took over Local SEO, optimized the Google Business Profile and created a new website with online reservations. Within 4 months, it dominated the top positions for key searches.",
          results: ["+55% online reservations", "Top-3 ranking on Google Maps", "+130% organic traffic"],
          services: ["Local SEO", "Website Development", "Google My Business"],
          icon: "🍽️",
        },
        {
          tag: "Travel Agency · Multilingual Website",
          title: "Tour Operator — Multilingual Website & International Market",
          desc: "A tour operator specializing in Crete experiences wanted to reach German and British travelers. We created a trilingual website (GR/EN/DE) with online inquiry forms per experience and SEO optimization for each market.",
          results: ["+85% international visitors", "30+ international inquiries/month", "Revenue doubled in 6 months"],
          services: ["Multilingual Website", "SEO", "Online Booking"],
          icon: "🌍",
        },
      ];

  return (
    <div style={{ background: "#020202", minHeight: "100vh", color: "white" }}>
      <Navbar lang={lang} d={d} />

      {/* Header */}
      <header style={{ paddingTop: "10rem", paddingBottom: "5rem", textAlign: "center", borderBottom: "1px solid rgba(0,208,255,0.1)" }}>
        <div className="container">
          <div style={{ color: "#00d0ff", fontWeight: 600, letterSpacing: "2px", fontSize: "0.85rem", marginBottom: "1rem", textTransform: "uppercase" }}>
            {isEl ? "Πραγματικά αποτελέσματα" : "Real results"}
          </div>
          <h1 style={{ marginBottom: "1.5rem", fontSize: "3rem" }}>{d.nav.caseStudies}</h1>
          <p style={{ fontSize: "1.3rem", maxWidth: "700px", margin: "0 auto", color: "#a0a0a0", lineHeight: "1.7" }}>
            {isEl
              ? "Κάθε project ξεκινά με μια επιχείρηση που θέλει να βελτιωθεί. Δείτε πώς το κάναμε πραγματικότητα."
              : "Every project starts with a business that wants to improve. See how we made it happen."}
          </p>
        </div>
      </header>

      {/* Case Studies */}
      <main style={{ padding: "6rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {cases.map((c, i) => (
              <div key={i} className="glass-card" style={{ padding: "3rem", borderColor: "rgba(0,208,255,0.15)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                      <div style={{ fontSize: "2.5rem" }}>{c.icon}</div>
                      <span style={{ color: "#00d0ff", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>{c.tag}</span>
                    </div>
                    <h2 style={{ fontSize: "1.6rem", marginBottom: "1.25rem", color: "white", lineHeight: "1.4" }}>{c.title}</h2>
                    <p style={{ color: "#a0a0a0", lineHeight: "1.8", fontSize: "1rem" }}>{c.desc}</p>
                    <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {c.services.map((s, j) => (
                        <span key={j} style={{ padding: "0.35rem 0.9rem", background: "rgba(0,208,255,0.1)", borderRadius: "50px", fontSize: "0.82rem", color: "#00d0ff", border: "1px solid rgba(0,208,255,0.2)" }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: "#00d0ff", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "2px", marginBottom: "1.5rem", textTransform: "uppercase" }}>
                      {isEl ? "Αποτελέσματα" : "Results"}
                    </div>
                    {c.results.map((r, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "1rem", padding: "1rem", background: "rgba(0,208,255,0.04)", borderRadius: "8px", borderLeft: "3px solid #00d0ff" }}>
                        <span style={{ color: "#00d0ff", fontWeight: 700, flexShrink: 0 }}>→</span>
                        <span style={{ color: "white", fontWeight: 600 }}>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* CTA */}
      <section style={{ padding: "6rem 0", background: "#050505" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="glass-card" style={{ maxWidth: "700px", margin: "0 auto", padding: "4rem", border: "1px solid rgba(0,208,255,0.2)" }}>
            <h2 style={{ marginBottom: "1rem", fontSize: "2rem" }}>
              {isEl ? "Θέλετε παρόμοια αποτελέσματα;" : "Want similar results?"}
            </h2>
            <p style={{ color: "#a0a0a0", marginBottom: "2.5rem", fontSize: "1.1rem" }}>
              {isEl
                ? "Επικοινωνήστε μαζί μας για να συζητήσουμε πώς μπορούμε να βοηθήσουμε την επιχείρησή σας."
                : "Contact us to discuss how we can help your business achieve measurable digital growth."}
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
