"use client";

import React, { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import ContactButton from './ContactButton';

interface NavbarProps {
  lang: string;
  d: any;
}

const Navbar: React.FC<NavbarProps> = ({ lang, d }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ backdropFilter: "blur(10px)", background: "rgba(0,0,0,0.5)", position: "fixed", width: "100%", zIndex: 100, top: 0 }}>
      <div className="container nav-content" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 0" }}>
        <a href={`/${lang}`} className="logo" style={{ color: "white", fontWeight: 800, textDecoration: "none" }}>
          FOCUS <span style={{ color: "#00d0ff" }}>AI</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
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

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: "transparent", border: "none", color: "white", fontSize: "1.8rem", cursor: "pointer", display: "none" }}
          aria-label="Toggle Menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="mobile-menu" style={{ 
          display: "flex", 
          flexDirection: "column", 
          background: "var(--bg-secondary)", 
          padding: "1.5rem", 
          gap: "1.5rem", 
          borderTop: "1px solid var(--glass-border)",
          position: "absolute",
          top: "100%",
          left: 0,
          width: "100%",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
        }}>
          <a href={`/${lang}/about`} style={{ color: "white", textDecoration: "none", fontSize: "1.1rem" }}>{d.nav.about}</a>
          <a href={`/${lang}/services`} style={{ color: "white", textDecoration: "none", fontSize: "1.1rem" }}>{d.nav.services}</a>
          <a href={`/${lang}/case-studies`} style={{ color: "white", textDecoration: "none", fontSize: "1.1rem" }}>{d.nav.caseStudies}</a>
          <a href={`/${lang}/blog`} style={{ color: "white", textDecoration: "none", fontSize: "1.1rem" }}>{d.nav.blog}</a>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem" }}>
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
      )}
    </nav>
  );
};

export default Navbar;
