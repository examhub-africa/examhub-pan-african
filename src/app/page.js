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
    buy: "Acheter",
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
    buy: "Buy",
    cta1: "Work today, succeed tomorrow!",
    cta2: "BacBepc.com guides you to success.",
    nav: ["Home", "BEPC", "BAC", "Search", "Account"]
  }
}

export default function Home() {
  const [lang, setLang] = useState("fr")
  const t = translations

  const countries = [
    {flag: "🇨🇲", name: lang === "fr"? "Cameroun" : "Cameroon"},
    {flag: "🇨🇮", name: lang === "fr"? "Côte d'Ivoire" : "Ivory Coast"},
    {flag: "🇸🇳", name: "Sénégal"},
    {flag: "🇹🇬", name: "Togo"},
    {flag: "🇲🇱", name: "Mali"},
    {flag: "🇧🇫", name: lang === "fr"? "Burkina Faso" : "Burkina Faso"},
    {flag: "🇧🇯", name: lang === "fr"? "Bénin" : "Benin"}
  ]

  const sujets = [
    {year: "BEPC 2024", subject: lang === "fr"? "Mathématiques" : "Mathematics", country: lang === "fr"? "Cameroun" : "Cameroon"},
    {year: "BAC 2024", subject: lang === "fr"? "Philosophie" : "Philosophy", country: lang === "fr"? "Côte d'Ivoire" : "Ivory Coast"},
    {year: "BEPC 2023", subject: lang === "fr"? "Français" : "French", country: "Sénégal"}
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
    <div style={{fontFamily: "system-ui, -apple-system, sans-serif", backgroundColor: "#f5f7fa", minHeight: "100vh", paddingBottom: "70px"}}>

      {/* Header */}
      <header style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", backgroundColor: "white"}}>
        <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
          <img src="/logo.png" alt="BacBepc" style={{width: "26px", height: "26px", borderRadius: "6px"}} onError={(e)=>e.target.style.display='none'} />
          <div>
            <span style={{fontWeight: "700", fontSize: "17px", color: "#1e40af"}}>BacBepc</span>
            <span style={{fontSize: "14px", color: "#64748b", fontWeight: "400"}}>.com</span>
          </div>
        </div>
        <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
          <button
            onClick={toggleLang}
            style={{
              backgroundColor: "#f1f5f9",
              border: "none",
              padding: "5px 10px",
              borderRadius: "16px",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "12px",
              color: "#1e293b"
            }}
          >
            {lang === "fr"? "🇬🇧 EN" : "🇫🇷 FR"}
          </button>
          <div style={{fontSize: "20px", cursor: "pointer", color: "#475569"}}>☰</div>
        </div>
      </header>

      {/* Hero Banner with Student Photo */}
      <section style={{
        background: "linear-gradient(135deg, #1e40af 0%, #2563eb 100%)",
        color: "white",
        margin: "12px",
        borderRadius: "20px",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
        minHeight: "260px"
      }}>
        <div style={{position: "relative", zIndex: 2, maxWidth: "60%"}}>
          <span style={{backgroundColor: "#10b981", padding: "5px 10px", borderRadius: "16px", fontSize: "11px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "4px"}}>
            🛡️ {t.badge}
          </span>

          <h1 style={{fontSize: "24px", fontWeight: "700", margin: "14px 0 8px 0", lineHeight: "1.3"}}>
            {t.title1}<br/>
            <span style={{color: "#4ade80", fontWeight: "700"}}>{t.price}</span>
          </h1>

          <p style={{fontSize: "13px", opacity: 0.95, marginBottom: "16px", lineHeight: "1.5", fontWeight: "400"}}>{t.desc}</p>

          <div style={{display: "flex", gap: "16px", marginBottom: "14px", fontSize: "12px", fontWeight: "500"}}>
            <div style={{display: "flex", alignItems: "center", gap: "6px"}}>
              <span style={{backgroundColor: "rgba(255,255,255,0.2)", padding: "5px", borderRadius: "6px", fontSize: "12px"}}>⬇️</span>
              <span>{t.instant}</span>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "6px"}}>
              <span style={{backgroundColor: "rgba(255,255,255,0.2)", padding: "5px", borderRadius: "6px", fontSize: "12px"}}>✓</span>
              <span>{t.corrections}</span>
            </div>
          </div>

          <div style={{display: "flex", alignItems: "center", gap: "10px", backgroundColor: "rgba(255,255,255,0.15)", padding: "10px 12px", borderRadius: "10px", fontSize: "11px", fontWeight: "500"}}>
            <span style={{backgroundColor: "white", color: "#1e40af", padding: "3px 5px", borderRadius: "5px", fontSize: "12px"}}>🔒</span>
            <span style={{flex: 1}}>{t.payment}</span>
            <div style={{display: "flex", gap: "4px", fontSize: "9px", fontWeight: "700"}}>
              <span style={{backgroundColor: "white", color: "#1e40af", padding: "2px 4px", borderRadius: "3px"}}>Paystack</span>
              <span style={{backgroundColor: "yellow", color: "#000", padding: "2px 4px", borderRadius: "3px"}}>MTN</span>
              <span style={{backgroundColor: "orange", color: "white", padding: "2px 4px", borderRadius: "3px"}}>Orange</span>
            </div>
          </div>
        </div>

        {/* Student Photo - Right side like your design */}
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400"
          alt="Student"
          style={{
            position: "absolute",
            right: "0",
            bottom: "0",
            width: "45%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "right",
            zIndex: 1
          }}
        />
      </section>

      {/* Choose Country */}
      <section style={{padding: "0 16px", marginTop: "20px"}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px"}}>
          <h2 style={{fontSize: "16px", fontWeight: "700"}}>{t.chooseCountry}</h2>
          <span style={{color: "#2563eb", fontSize: "13px", fontWeight: "600"}}>{t.seeAll}</span>
        </div>

        <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px"}}>
          {countries.map((c, i) => (
            <div key={i} style={{
              backgroundColor: "white",
              padding: "12px 8px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              fontWeight: "500",
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              cursor: "pointer"
            }}>
              <span style={{fontSize: "20px"}}>{c.flag}</span>
              <span>{c.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Subjects */}
      <section style={{padding: "0 16px", marginTop: "22px"}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px"}}>
          <h2 style={{fontSize: "16px", fontWeight: "700", display: "flex", alignItems: "center", gap: "6px"}}>
            🔥 {t.popular}
          </h2>
          <span style={{color: "#2563eb", fontSize: "13px", fontWeight: "600"}}>{t.seeAll}</span>
        </div>

        {sujets.map((s, i) => (
          <div key={i} style={{
            backgroundColor: "white",
            padding: "14px",
            borderRadius: "14px",
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)"
          }}>
            <div style={{backgroundColor: "#dbeafe", padding: "8px 6px", borderRadius: "8px", fontSize: "10px", fontWeight: "700", color: "#1e40af", minWidth: "36px", textAlign: "center"}}>
              PDF
            </div>
            <div style={{flex: 1}}>
              <p style={{fontSize: "11px", color: "#64748b", margin: 0, fontWeight: "500"}}>{s.year}</p>
              <p style={{fontWeight: "700", margin: "3px 0", fontSize: "15px"}}>{s.subject}</p>
              <div style={{display: "flex", gap: "12px", fontSize: "11px", color: "#64748b", alignItems: "center"}}>
                <span style={{display: "flex", alignItems: "center", gap: "3px"}}>📍 {s.country}</span>
                <span style={{display: "flex", alignItems: "center", gap: "3px", color: "#10b981", fontWeight: "600"}}>✓ {t.correction}</span>
              </div>
            </div>
            <div style={{textAlign: "right"}}>
              <p style={{fontWeight: "700", margin: "0 0 6px 0", fontSize: "14px"}}>200 CFA</p>
              <button style={{
                backgroundColor: "#10b981",
                color: "white",
                border: "none",
                padding: "8px 14px",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px"
              }}>
                {t.buy} 🛒
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Banner */}
      <section style={{margin: "22px 16px", backgroundColor: "white", padding: "16px", borderRadius: "16px", display: "flex", alignItems: "center", gap: "12px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)"}}>
        <img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png" style={{width: "40px", height: "40px"}} alt="books"/>
        <div style={{flex: 1}}>
          <p style={{fontWeight: "700", margin: 0, fontSize: "14px"}}>{t.cta1}</p>
          <p style={{fontSize: "12px", color: "#64748b", margin: "3px 0 0 0", fontWeight: "400"}}>{t.cta2}</p>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png" style={{width: "32px", height: "32px"}} alt="target"/>
      </section>

      {/* Bottom Nav - 5 items exact like your design */}
      <nav style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
        borderTop: "1px solid #e2e8f0",
        display: "flex",
        justifyContent: "space-around",
        padding: "6px 0",
        boxShadow: "0 -2px 8px rgba(0,0,0,0.06)"
      }}>
        {t.nav.map((label, i) => (
          <div key={i} style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2px",
            color: i === 0? "#10b981" : "#94a3b8",
            fontSize: "10px",
            fontWeight: i === 0? "600" : "500",
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