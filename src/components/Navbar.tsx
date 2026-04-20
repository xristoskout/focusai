import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import ContactButton from './ContactButton';

interface NavbarProps {
  lang: string;
  d: any;
}

const Navbar: React.FC<NavbarProps> = ({ lang, d }) => {
  return (
    <nav style={{ backdropFilter: "blur(10px)", background: "rgba(0,0,0,0.5)", position: "fixed", width: "100%", zIndex: 100, top: 0 }}>
      <div className="container nav-content" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 0" }}>
        <a href={`/${lang}`} className="logo" style={{ color: "white", fontWeight: 800, textDecoration: "none" }}>
          FOCUS <span style={{ color: "#00d0ff" }}>AI</span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <div className="nav-links" style={{ display: "flex", gap: "1.5rem", fontSize: "0.9rem" }}>
            <a href={`/${lang}/about`} style={{ opacity: 0.8, color: "white" }}>{d.nav.about}</a>
            <a href={`/${lang}/services`} style={{ opacity: 0.8, color: "white" }}>{d.nav.services}</a>
            <a href={`/${lang}/case-studies`} style={{ opacity: 0.8, color: "white" }}>{d.nav.caseStudies}</a>
            <a href={`/${lang}/blog`} style={{ opacity: 0.8, color: "white" }}>{d.nav.blog}</a>
          </div>
          <LanguageSwitcher lang={lang} />
          <ContactButton
            formTexts={d.contact.form}
            className="btn btn-primary"
            style={{ padding: "0.6rem 1.5rem", fontSize: "0.9rem", background: "#00d0ff", color: "#000" }}
          >
            {d.nav.contact}
          </ContactButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
