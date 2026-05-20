"use client"
import { useState, useEffect } from "react"

const translations = {
  fr: {
    tagline: "Marketplace alimenté par les enseignants",
    heroTitle1: "Transformez vos cours",
    heroTitle2: "en revenus.",
    heroTitle3: "Aidez les étudiants",
    heroTitle4: "à travers l'Afrique.",
    heroSubtitle: "Téléchargez une fois. Gagnez chaque mois. Gardez 60%.",
    selectCountry: "🌍 Choisir votre pays",
    teacherBtn: "👨‍🏫 Je suis enseignant",
    studentBtn: "🎓 Je suis étudiant",
    secure: "🔒 Paiements sécurisés par Paystack",
    trusted: "✅ Approuvé par les enseignants en Afrique",
    earnings: "💰 Votre contenu, vos gains"
  },
  en: {
    tagline: "Teacher powered marketplace",
    heroTitle1: "Turn Your Lessons",
    heroTitle2: "Into Income.",
    heroTitle3: "Help Students",
    heroTitle4: "Across Africa.",
    heroSubtitle: "Upload once. Earn monthly. Keep 60%.",
    selectCountry: "🌍 Select your country",
    teacherBtn: "👨‍🏫 I'm a Teacher",
    studentBtn: "🎓 I'm a Student",
    secure: "🔒 Secure Payments by Paystack",
    trusted: "✅ Trusted by Teachers Across Africa",
    earnings: "💰 Your Content, Your Earnings"
  }
}

const countries = [
  {code: "CM", flag: "🇨🇲", name: {fr: "Cameroun", en: "Cameroon"}},
  {code: "NG", flag: "🇳🇬", name: {fr: "Nigéria", en: "Nigeria"}},
  {code: "CI", flag: "🇨🇮", name: {fr: "Côte d'Ivoire", en: "Ivory Coast"}},
  {code: "ALL", flag: "🌍", name: {fr: "Toute l'Afrique", en: "All Africa"}}
]

export default function Home() {
  const [lang, setLang] = useState("fr")
  const [country, setCountry] = useState(null)
  const t = translations[lang]

  useEffect(() => {
    const savedLang = localStorage.getItem("bacbepc-lang")
    if (savedLang) setLang(savedLang)
  }, [])

  const toggleLang = () => {
    const newLang = lang === "fr"? "en" : "fr"
    setLang(newLang)
    localStorage.setItem("bacbepc-lang", newLang)
  }

  return (
    <div style={{fontFamily: "system-ui, -apple-system, sans-serif", backgroundColor: "#f8fafc", color: "#0f172a"}}>

      <header style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", backgroundColor: "white", borderBottom: "1px solid #e2e8f0"}}>
        <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
          <span style={{fontSize: "24px", color: "#1e40af"}}>📘</span>
          <div>
            <span style={{fontWeight: "800", fontSize: "18px", color: "#1e40af"}}>BacBepc</span>
            <span style={{fontSize: "18px", fontWeight: "400", color: "#64748b"}}>.com</span>
            <div style={{fontSize: "10px", color: "#64748b"}}>{t.tagline}</div>
          </div>
        </div>
        <div style={{display: "flex", gap: "12px", alignItems: "center"}}>
          <button
            onClick={toggleLang}
            style={{
              backgroundColor: "#f1f5f9",
              border: "none",
              padding: "6px 12px",
              borderRadius: "16px",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: "12px",
              color: "#1e40af"
            }}
          >
            {lang === "fr"? "🇬🇧 EN" : "🇫🇷 FR"}
          </button>
          <div style={{fontSize: "24px", cursor: "pointer"}}>☰</div>
        </div>
      </header>

      <section style={{padding: "40px 20px", backgroundColor: "white"}}>
        <div style={{maxWidth: "1200px", margin: "0 auto", textAlign: "center"}}>

          <button
            style={{
              backgroundColor: "#dbeafe",
              color: "#1e40af",
              border: "none",
              padding: "10px 16px",
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: "700",
              cursor: "pointer",
              marginBottom: "16px",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            {country? `${country.flag} ${country.name[lang]}` : t.selectCountry}
          </button>

          <h1 style={{fontSize: "42px", fontWeight: "800", lineHeight: "1.2", margin: "0 0 16px 0"}}>
            {t.heroTitle1}<br/>
            <span style={{color: "#f97316"}}>{t.heroTitle2}</span><br/>
            {t.heroTitle3}<br/>{t.heroTitle4}
          </h1>
          <p style={{fontSize: "16px", color: "#64748b", marginBottom: "24px"}}>
            {t.heroSubtitle}
          </p>
          <div style={{display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center"}}>
            <button style={{
              backgroundColor: "#1e40af",
              color: "white",
              border: "none",
              padding: "14px 28px",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: "700",
              cursor: "pointer"
            }}>
              {t.teacherBtn}
            </button>
            <button style={{
              backgroundColor: "#f97316",
              color: "white",
              border: "none",
              padding: "14px 28px",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: "700",
              cursor: "pointer"
            }}>
              {t.studentBtn}
            </button>
          </div>
          <div style={{display: "flex", gap: "24px", marginTop: "24px", fontSize: "13px", color: "#64748b", flexWrap: "wrap", justifyContent: "center"}}>
            <div>{t.secure}</div>
            <div>{t.trusted}</div>
            <div>{t.earnings}</div>
          </div>
        </div>
      </section>

    </div>
  )
}