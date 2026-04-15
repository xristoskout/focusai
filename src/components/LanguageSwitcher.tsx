"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({ lang }: { lang: string }) {
  const pathname = usePathname();

  const getOtherLang = () => (lang === "en" ? "el" : "en");
  const getOtherPath = () => {
    const other = getOtherLang();
    // Replace /en/... with /el/... or vice versa
    return pathname.replace(/^\/(en|el)/, `/${other}`);
  };

  return (
    <Link
      href={getOtherPath()}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.4rem",
        padding: "0.4rem 0.9rem",
        borderRadius: "100px",
        border: "1px solid rgba(0,208,255,0.3)",
        fontSize: "0.85rem",
        fontWeight: 600,
        color: "#00d0ff",
        background: "rgba(0,208,255,0.05)",
        transition: "all 0.2s ease",
        letterSpacing: "0.05em",
        textDecoration: "none",
      }}
    >
      {lang === "en" ? "GR" : "EN"}
    </Link>
  );
}
