import React from 'react';

interface FooterProps {
  d: any;
}

const Footer: React.FC<FooterProps> = ({ d }) => {
  return (
    <footer style={{ padding: "4rem 0", marginTop: "4rem", borderTop: "1px solid rgba(255,255,255,0.1)", textAlign: "center", color: "#a0a0a0" }}>
      <div className="container">
        <p style={{ maxWidth: "600px", margin: "0 auto 2rem auto", lineHeight: "1.6" }}>{d.footer.summary}</p>
        <p style={{ marginBottom: "1rem" }}>{d.footer.rights}</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", fontSize: "0.8rem" }}>
            <a href="/el" style={{ color: "#00d0ff" }}>Ελληνικά</a>
            <a href="/en" style={{ color: "#00d0ff" }}>English</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
