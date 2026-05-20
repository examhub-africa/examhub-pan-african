"use client"
import { useState, useEffect } from "react"

const translations = {
  fr: {
    badge: "Réussir, c'est possible!",
    title1: "Sujets BEPC & BAC",
    price: "200 CFA / PDF",
    desc: "Télécharge instantanément les anciens sujets corrigés et prépare-toi pour l'examen.",
    instant: "Téléchargement instantané",
    corrections: "Corrections incluses",
    payment: "Paiement 100% sécurisé avec Paystack",
    chooseCountry: "Choisis ton pays",
    seeAll: "Voir tout >",
    popular: "Sujets populaires",
    correction: "Avec correction",
    buy: "Acheter 🛒",
    cta1: "Travaille aujourd'hui, réussis demain!",
    cta2: "BacBepc.com t'accompagne vers la réussite.",
    nav: ["Accueil", "BEPC", "BAC", "Recherche", "Compte"]
  },
  en: {
    badge: "Success is possible!",
    title1: "BEPC & BAC Past Papers",
    price: "200 CFA / PDF",
    desc: "Instantly download corrected past exam papers and prepare for your exams.",
    instant: "Instant download",
    corrections: "Corrections included",
    payment: "100% secure payment with Paystack",
    chooseCountry: "Choose your country",
    seeAll: "See all >",
    popular: "Popular subjects",
    correction: "With correction",
    buy: "Buy 🛒",
    cta1: "Work today, succeed tomorrow!",
    cta2: "BacBepc.com guides you to success.",
    nav: ["Home", "BEPC", "BAC", "Search", "Account"]
  }
}

export default function Home() {
  const [lang, setLang] = useState("fr")
  const t = translations[lang]

  const countries = [
    {flag: "🇨🇲", name: lang === "fr"? "Cameroun" : "Cameroon"},
    {flag: "🇨🇮", name: lang === "fr"? "Côte d'Ivoire" : "Ivory Coast"},
    {flag: "🇸🇳", name: "Sénégal"},
    {flag: "🇹🇬", name: lang === "fr"? "Togo" : "Togo"},
    {flag: "🇲🇱", name: "Mali"},
    {flag: "🇧🇫", name: lang === "fr"? "Burkina Faso" : "Burkina Faso"},
    {flag: "🇧🇯", name: lang === "fr"? "Bénin" : "Benin"}
  ]

  const sujets = [
    {year: lang === "fr"? "BEPC 2024" : "BEPC 2024", subject: lang === "fr"? "Mathématiques" : "Mathematics", country: lang === "fr"? "Cameroun" : "Cameroon", price: "200 CFA", correction: true},
    {year: "BAC 2024", subject: lang === "fr"? "Philosophie" : "Philosophy", country: lang === "fr"? "Côte d'Ivoire" : "Ivory Coast", price: "200 CFA", correction: true},
    {year: lang === "fr"? "BEPC 2023" : "BEPC 2023", subject: lang === "fr"? "Français" : "French", country: "Sénégal", price: "200 CFA", correction: true}
  ]

  useEffect(() => {
    const saved = localStorage.getItem("bacbepc-lang")
    if (saved) setLang(saved)
  }, [])

  const toggleLang = () => {
    const newLang = lang === "fr"? "en" : "fr"
    setLang(newLang)
    localStorage.setItem("bacbepc-lang", newLang)
  }

  return (
    <div style={{fontFamily: "system-ui, sans-serif", backgroundColor: "#f5f7fa", minHeight: "100vh", paddingBottom: "70px"}}>

      {/* Header with Lang Toggle */}
      <header style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px", backgroundColor: "white"}}>
        <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
          <img src="/logo.png" alt="BacBepc" style={{width: "28px", height: "28px"}} />
          <div>
            <span style={{fontWeight: "700", fontSize: "18px", color: "#1e40af"}}>BacBepc</span>
            <span style={{fontSize: "14px", color: "#64748b"}}>.com</span>
          </div>
        </div>
        <div style={{display: "flex", gap: "12px", alignItems: "center"}}>
          <button
            onClick={toggleLang}
            style={{
              backgroundColor: "#f1f5f9",
              border: "none",
              padding: "6px 12px",
              borderRadius: "20px",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "14px"
            }}
          >
            {lang === "fr"? "🇬🇧 EN" : "🇫🇷 FR"}
          </button>
          <div style={{fontSize: "24px", cursor: "pointer"}}>☰</div>
        </div>
      </header>

      {/* Hero Banner */}
      <section style={{
        background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
        color: "white",
        margin: "12px",
        borderRadius: "20px",
        padding: "20px",
        position: "relative",
        overflow: "hidden"
      }}>
        <span style={{backgroundColor: "#10b981", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600"}}>
          🛡️ {t.badge}
        </span>

        <h1 style={{fontSize: "28px", fontWeight: "800", margin: "16px 0 8px 0", lineHeight: "1.2"}}>
          {t.title1}<br/>
          <span style={{color: "#4ade80"}}>{t.price}</span>
        </h1>

        <p style={{fontSize: "14px", opacity: 0.9, marginBottom: "20px"}}>{t.desc}</p>

        <div style={{display: "flex", gap: "16px", marginBottom: "20px", fontSize: "12px", flexWrap: "wrap"}}>
          <div style={{display: "flex", alignItems: "center", gap: "6px"}}>
            <span style={{backgroundColor: "rgba(255,255,255,0.2)", padding: "6px", borderRadius: "8px"}}>⬇️</span>
            <span>{t.instant}</span>
          </div>
          <div style={{display: "flex", alignItems: "center", gap: "6px"}}>
            <span style={{backgroundColor: "rgba(255,255,255,0.2)", padding: "6px", borderRadius: "8px"}}>✓</span>
            <span>{t.corrections}</span>
          </div>
        </div>

        <div style={{display: "flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(255,255,255,0.15)", padding: "12px", borderRadius: "12px", fontSize: "12px"}}>
          <span style={{backgroundColor: "white", color: "#1e40af", padding: "4px 6px", borderRadius: "6px"}}>🔒</span>
          <span>{t.payment}</span>
        </div>
      </section>

      {/* Choose Country */}
      <section style={{padding: "0 16px", marginTop: "24px"}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px"}}>
          <h2 style={{fontSize: "16px", fontWeight: "700"}}>{t.chooseCountry}</h2>
          <span style={{color: "#3b82f6", fontSize: "14px", fontWeight: "600"}}>{t.seeAll}</span>
        </div>

        <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px"}}>
          {countries.map((c, i) => (
            <div key={i} style={{
              backgroundColor: "white",
              padding: "12px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
            }}>
              <span style={{fontSize: "20px"}}>{c.flag}</span>
              <span style={{fontWeight: "500"}}>{c.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Subjects */}
      <section style={{padding: "0 16px", marginTop: "24px"}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px"}}>
          <h2 style={{fontSize: "16px", fontWeight: "700", display: "flex", alignItems: "center", gap: "6px"}}>
            🔥 {t.popular}
          </h2>
          <span style={{color: "#3b82f6", fontSize: "14px", fontWeight: "600"}}>{t.seeAll}</span>
        </div>

        {sujets.map((s, i) => (
          <div key={i} style={{
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "12px",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
          }}>
            <div style={{backgroundColor: "#dbeafe", padding: "12px", borderRadius: "8px", fontSize: "10px", fontWeight: "700", color: "#1e40af"}}>
              PDF
            </div>
            <div style={{flex: 1}}>
              <p style={{fontSize: "11px", color: "#64748b", margin: 0}}>{s.year}</p>
              <p style={{fontWeight: "700", margin: "4px 0"}}>{s.subject}</p>
              <div style={{display: "flex", gap: "12px", fontSize: "12px", color: "#64748b"}}>
                <span>📍 {s.country}</span>
                {s.correction && <span>✓ {t.correction}</span>}
              </div>
            </div>
            <div style={{textAlign: "right"}}>
              <p style={{fontWeight: "700", margin: 0, fontSize: "14px"}}>{s.price}</p>
              <button style={{
                backgroundColor: "#10b981",
                color: "white",
                border: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: "600",
                marginTop: "8px",
                cursor: "pointer"
              }}>
                {t.buy}
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Banner */}
      <section style={{margin: "24px 16px", backgroundColor: "white", padding: "20px", borderRadius: "16px", display: "flex", alignItems: "center", gap: "16px"}}>
        <div style={{fontSize: "40px"}}>📚🎓</div>
        <div style={{flex: 1}}>
          <p style={{fontWeight: "700", margin: 0}}>{t.cta1}</p>
          <p style={{fontSize: "13px", color: "#64748b", margin: "4px 0 0 0"}}>{t.cta2}</p>
        </div>
        <div style={{fontSize: "32px"}}>🎯</div>
      </section>

      {/* Bottom Nav */}
      <nav style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
        borderTop: "1px solid #e2e8f0",
        display: "flex",
        justifyContent: "space-around",
        padding: "8px 0"
      }}>
        {t.nav.map((label, i) => (
          <div key={i} style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            color: i === 0? "#10b981" : "#94a3b8",
            fontSize: "11px",
            fontWeight: i === 0? "600" : "400",
            cursor: "pointer"
          }}>
            <span style={{fontSize: "20px"}}>{["🏠","📄","🎓","🔍","👤"][i]}</span>
            <span>{label}</span>
          </div>
        ))}
      </nav>

    </div>
  )
}