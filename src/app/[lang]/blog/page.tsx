import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEl = lang === "el";
  return {
    title: isEl ? "Blog | Focus AI — Ιδέες & Συμβουλές για Ψηφιακή Ανάπτυξη" : "Blog | Focus AI — Ideas & Tips for Digital Growth",
    description: isEl
      ? "Πρακτικές συμβουλές για ιστοσελίδες, AI assistants, SEO και digital marketing. Μάθετε πώς να αναπτύξετε την επιχείρησή σας online."
      : "Practical tips for websites, AI assistants, SEO and digital marketing. Learn how to grow your business online.",
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = await getDictionary(lang);
  const isEl = lang === "el";

  const posts = isEl
    ? [
        {
          slug: "kataskevi-istoselidon-timi",
          tag: "Κατασκευή Ιστοσελίδων",
          title: "Πόσο κοστίζει μια επαγγελματική ιστοσελίδα;",
          desc: "Μια από τις πιο συχνές ερωτήσεις που δεχόμαστε. Η αλήθεια είναι ότι δεν υπάρχει μία «τιμή» — αλλά υπάρχουν παράγοντες που καθορίζουν το κόστος και μπορείτε να τους καταλάβετε εύκολα.",
          readTime: "5 λεπτά ανάγνωση",
          icon: "💰",
        },
        {
          slug: "ai-assistant-epixeiriseis",
          tag: "AI Assistants",
          title: "Πώς ένας AI assistant μπορεί να αλλάξει τον τρόπο που δουλεύει η επιχείρησή σας",
          desc: "Αυτοματισμός εξυπηρέτησης, συλλογή leads, 24/7 παρουσία — και όλα αυτά χωρίς επιπλέον προσωπικό. Δείτε πώς οι AI assistants φέρνουν πραγματικά αποτελέσματα.",
          readTime: "7 λεπτά ανάγνωση",
          icon: "🤖",
        },
        {
          slug: "xenodoxeio-istoselidon-ti-perilamvanei",
          tag: "Ξενοδοχεία & Τουρισμός",
          title: "Ιστοσελίδα για ξενοδοχείο: τι πρέπει να περιλαμβάνει για να φέρνει απευθείας κρατήσεις",
          desc: "Τα 8 στοιχεία που κάνουν τη διαφορά μεταξύ μιας ιστοσελίδας που «υπάρχει» και μιας που δουλεύει ενεργά για να αυξήσει τα έσοδά σας.",
          readTime: "6 λεπτά ανάγνωση",
          icon: "🏨",
        },
        {
          slug: "local-seo-topikes-epixeiriseis",
          tag: "SEO & Marketing",
          title: "Local SEO: Πώς να κυριαρχείτε στις τοπικές αναζητήσεις Google",
          desc: "Αν έχετε τοπική επιχείρηση, το Local SEO είναι το πιο αποτελεσματικό εργαλείο marketing που υπάρχει. Δείτε τι χρειάζεται για να εμφανίζεστε στην κορυφή.",
          readTime: "8 λεπτά ανάγνωση",
          icon: "📍",
        },
        {
          slug: "mobile-first-sxediasmos",
          tag: "Web Design",
          title: "Mobile-First Design: Γιατί η ιστοσελίδα σας πρέπει να σχεδιαστεί για κινητά πρώτα",
          desc: "Πάνω από το 70% των επισκεπτών έρχονται από κινητό. Αν η ιστοσελίδα σας δεν είναι βελτιστοποιημένη για κινητά, χάνετε πελάτες — και κατάταξη στη Google.",
          readTime: "5 λεπτά ανάγνωση",
          icon: "📱",
        },
        {
          slug: "digital-marketing-stratigi",
          tag: "Digital Marketing",
          title: "Digital Marketing Strategy: Πού να επενδύσετε πρώτα το budget σας",
          desc: "Google Ads, SEO, Social Media, Email — υπάρχουν πολλά κανάλια και μικρό budget. Δείτε πώς να αποφασίσετε πού να επενδύσετε πρώτα για μέγιστη απόδοση.",
          readTime: "9 λεπτά ανάγνωση",
          icon: "📊",
        },
      ]
    : [
        {
          slug: "cost-of-website",
          tag: "Website Development",
          title: "How much does a professional website cost?",
          desc: "One of the most frequent questions we receive. The truth is there's no single 'price' — but there are factors that determine the cost and you can understand them easily.",
          readTime: "5 min read",
          icon: "💰",
        },
        {
          slug: "ai-assistant-benefits",
          tag: "AI Assistants",
          title: "How an AI assistant can change the way your business works",
          desc: "Service automation, lead collection, 24/7 presence — all without extra staff. See how AI assistants deliver real results.",
          readTime: "7 min read",
          icon: "🤖",
        },
        {
          slug: "hotel-website-features",
          tag: "Hotels & Tourism",
          title: "Hotel website: what it must include to bring direct bookings",
          desc: "The 8 elements that make the difference between a website that 'exists' and one that actively works to increase your revenue.",
          readTime: "6 min read",
          icon: "🏨",
        },
        {
          slug: "local-seo-guide",
          tag: "SEO & Marketing",
          title: "Local SEO: How to dominate local Google searches",
          desc: "If you have a local business, Local SEO is the most effective marketing tool available. See what's needed to appear at the top.",
          readTime: "8 min read",
          icon: "📍",
        },
        {
          slug: "mobile-first-design",
          tag: "Web Design",
          title: "Mobile-First Design: Why your website must be designed for mobile first",
          desc: "Over 70% of visitors come from mobile. If your website isn't optimized for mobile, you're losing customers — and Google rankings.",
          readTime: "5 min read",
          icon: "📱",
        },
        {
          slug: "digital-marketing-strategy",
          tag: "Digital Marketing",
          title: "Digital Marketing Strategy: Where to invest your budget first",
          desc: "Google Ads, SEO, Social Media, Email — many channels and a small budget. See how to decide where to invest first for maximum return.",
          readTime: "9 min read",
          icon: "📊",
        },
      ];

  return (
    <div style={{ background: "#020202", minHeight: "100vh", color: "white" }}>
      <Navbar lang={lang} d={d} />

      {/* Header */}
      <header style={{ paddingTop: "10rem", paddingBottom: "5rem", textAlign: "center", borderBottom: "1px solid rgba(0,208,255,0.1)" }}>
        <div className="container">
          <div style={{ color: "#00d0ff", fontWeight: 600, letterSpacing: "2px", fontSize: "0.85rem", marginBottom: "1rem", textTransform: "uppercase" }}>
            {isEl ? "Γνώση & Εμπειρία" : "Knowledge & Expertise"}
          </div>
          <h1 style={{ marginBottom: "1.5rem", fontSize: "3rem" }}>{d.blog.title}</h1>
          <p style={{ fontSize: "1.3rem", maxWidth: "700px", margin: "0 auto", color: "#a0a0a0", lineHeight: "1.7" }}>
            {d.blog.subtitle}
          </p>
        </div>
      </header>

      {/* Posts Grid */}
      <main style={{ padding: "6rem 0" }}>
        <div className="container">
          <div className="grid">
            {posts.map((post, i) => (
              <a
                key={i}
                href={`/${lang}/blog/${post.slug}`}
                className="glass-card"
                style={{ display: "flex", flexDirection: "column", gap: "1rem", borderColor: "rgba(0,208,255,0.08)", textDecoration: "none", color: "inherit", transition: "border-color 0.3s, transform 0.2s" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ padding: "0.3rem 0.8rem", background: "rgba(0,208,255,0.1)", borderRadius: "50px", fontSize: "0.78rem", color: "#00d0ff", border: "1px solid rgba(0,208,255,0.2)", whiteSpace: "nowrap" }}>
                    {post.tag}
                  </span>
                  <span style={{ fontSize: "1.8rem" }}>{post.icon}</span>
                </div>
                <h2 style={{ fontSize: "1.1rem", color: "white", lineHeight: "1.5", margin: 0 }}>{post.title}</h2>
                <p style={{ color: "#a0a0a0", fontSize: "0.92rem", lineHeight: "1.7", flex: 1, margin: 0 }}>{post.desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ fontSize: "0.8rem", color: "#666" }}>{post.readTime}</span>
                  <span style={{ color: "#00d0ff", fontSize: "0.85rem", fontWeight: 600 }}>
                    {isEl ? "Διαβάστε →" : "Read more →"}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Newsletter CTA */}
      <section style={{ padding: "6rem 0", background: "#050505" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="glass-card" style={{ maxWidth: "700px", margin: "0 auto", padding: "4rem", border: "1px solid rgba(0,208,255,0.2)" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>💡</div>
            <h2 style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>
              {isEl ? "Θέλετε να μάθετε περισσότερα;" : "Want to learn more?"}
            </h2>
            <p style={{ color: "#a0a0a0", marginBottom: "2.5rem", fontSize: "1.05rem", lineHeight: "1.7" }}>
              {isEl
                ? "Επικοινωνήστε μαζί μας και ρωτήστε ό,τι θέλετε για ιστοσελίδες, AI assistants ή digital marketing. Απαντάμε πάντα."
                : "Contact us and ask anything you want about websites, AI assistants or digital marketing. We always respond."}
            </p>
            <a
              href={`/${lang}/contact`}
              className="btn"
              style={{ background: "transparent", border: "1px solid #00d0ff", color: "#00d0ff", padding: "1rem 2.5rem" }}
            >
              {d.nav.contact}
            </a>
          </div>
        </div>
      </section>

      <Footer d={d} />
    </div>
  );
}
