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
    changeCountry: "🌍 Changer de pays",
    showing: "Affichage pour",
    allCountries: "Tous les pays",
    teacherBtn: "👨‍🏫 Je suis enseignant",
    studentBtn: "🎓 Je suis étudiant",
    secure: "🔒 Paiements sécurisés par Paystack",
    trusted: "✅ Approuvé par les enseignants en Afrique",
    earnings: "💰 Votre contenu, vos gains",
    monthlyEarnings: "Gains mensuels",
    totalStudents: "Total étudiants",
    contentPerf: "Performance du contenu",
    successRate: "Taux de réussite",
    forTeachers: "Pour les Enseignants",
    createEarn: "Créez une fois. Gagnez pour toujours.",
    earnMonthly: "Gagnez un partage des revenus mensuels",
    earnDesc: "Gardez 60% de chaque vente. Nous gérons les paiements et la livraison.",
    reachStudents: "Atteignez des étudiants dans 54 pays africains",
    reachDesc: "Vos leçons aident des milliers d'apprenants à travers le continent.",
    saveTime: "Gagnez du temps avec la correction auto et les analyses",
    saveDesc: "Des outils intelligents pour corriger plus vite et comprendre la performance.",
    forStudents: "Pour les Étudiants",
    choosePlan: "Choisissez le plan qui correspond à vos objectifs.",
    popularPapers: "Sujets populaires",
    noContent: "Aucun contenu disponible pour ce pays pour le moment.",
    free: "GRATUIT",
    freeAccess: "Accès Gratuit",
    freeDesc: "Anciens sujets de base de plusieurs enseignants",
    pastLib: "✓ Bibliothèque de sujets",
    multiSubj: "✓ Plusieurs matières",
    download: "✓ Télécharger et étudier",
    mobile: "✓ Mobile friendly",
    getStarted: "Commencer gratuitement",
    pro: "PRO",
    proAccess: "Accès Pro",
    proDesc: "Outils d'apprentissage intelligents pour réussir",
    smartQuiz: "✓ Quiz intelligents",
    autoMark: "✓ Correction automatique",
    timedMocks: "✓ Examens blancs chronométrés",
    analytics: "✓ Analyses de performance",
    exams: "✓ Examens: WAEC, NECO, KCSE, IELTS, DELF, TOEFL",
    goPro: "Passer Pro",
    buy: "Acheter",
    examsSupport: "Examens que nous prenons en charge",
    quickLinks: "Liens Rapides",
    forTeachersLink: "Pour Enseignants",
    forStudentsLink: "Pour Étudiants",
    howItWorks: "Comment ça marche",
    pricing: "Tarifs",
    faqs: "FAQs",
    contactUs: "Contactez-nous",
    footerDesc: "Marketplace alimenté par les enseignants pour l'Afrique",
    securePayments: "🔒 Paiements sécurisés par Paystack",
    rights: "© 2025 BacBepc. Tous droits réservés.",
    close: "Fermer"
  },
  en: {
    tagline: "Teacher powered marketplace",
    heroTitle1: "Turn Your Lessons",
    heroTitle2: "Into Income.",
    heroTitle3: "Help Students",
    heroTitle4: "Across Africa.",
    heroSubtitle: "Upload once. Earn monthly. Keep 60%.",
    selectCountry: "🌍 Select your country",
    changeCountry: "🌍 Change country",
    showing: "Showing for",
    allCountries: "All countries",
    teacherBtn: "👨‍🏫 I'm a Teacher",
    studentBtn: "🎓 I'm a Student",
    secure: "🔒 Secure Payments by Paystack",
    trusted: "✅ Trusted by Teachers Across Africa",
    earnings: "💰 Your Content, Your Earnings",
    monthlyEarnings: "Monthly Earnings",
    totalStudents: "Total Students",
    contentPerf: "Content Performance",
    successRate: "Success Rate",
    forTeachers: "For Teachers",
    createEarn: "Create once. Earn forever.",
    earnMonthly: "Earn monthly revenue share",
    earnDesc: "Keep 60% of every sale. We handle payments and delivery.",
    reachStudents: "Reach students in 54 African countries",
    reachDesc: "Your lessons help thousands of learners across the continent.",
    saveTime: "Save time with auto-grading and analytics",
    saveDesc: "Smart tools help you grade faster and understand student performance.",
    forStudents: "For Students",
    choosePlan: "Choose the plan that fits your goals.",
    popularPapers: "Popular Papers",
    noContent: "No content available for this country yet.",
    free: "FREE",
    freeAccess: "Free Access",
    freeDesc: "Basic past questions from multiple teachers",
    pastLib: "✓ Past questions library",
    multiSubj: "✓ Multiple subjects",
    download: "✓ Download and study",
    mobile: "✓ Mobile friendly",
    getStarted: "Get Started for Free",
    pro: "PRO",
    proAccess: "Pro Access",
    proDesc: "Smart learning tools for exam success",
    smartQuiz: "✓ Smart quizzes",
    autoMark: "✓ Auto-marking",
    timedMocks: "✓ Timed mocks",
    analytics: "✓ Performance analytics",
    exams: "✓ Exams: WAEC, NECO, KCSE, IELTS, DELF, TOEFL",
    goPro: "Go Pro",
    buy: "Buy",
    examsSupport: "Exams We Support",
    quickLinks: "Quick Links",
    forTeachersLink: "For Teachers",
    forStudentsLink: "For Students",
    howItWorks: "How it Works",
    pricing: "Pricing",
    faqs: "FAQs",
    contactUs: "Contact Us",
    footerDesc: "Teacher powered marketplace for Africa",
    securePayments: "🔒 Secure payments by Paystack",
    rights: "© 2025 BacBepc. All rights reserved.",
    close: "Close"
  }
}

const countries = [
  {code: "CM", flag: "🇨🇲", name: {fr: "Cameroun", en: "Cameroon"}},
  {code: "NG", flag: "🇳🇬", name: {fr: "Nigéria", en: "Nigeria"}},
  {code: "CI", flag: "🇨🇮", name: {fr: "Côte d'Ivoire", en: "Ivory Coast"}},
  {code: "SN", flag: "🇸🇳", name: {fr: "Sénégal", en: "Senegal"}},
  {code: "GH", flag: "🇬🇭", name: {fr: "Ghana", en: "Ghana"}},
  {code: "KE", flag: "🇰🇪", name: {fr: "Kenya", en: "Kenya"}},
  {code: "ZA", flag: "🇿🇦", name: {fr: "Afrique du Sud", en: "South Africa"}},
  {code: "TG", flag: "🇹🇬", name: {fr: "Togo", en: "Togo"}},
  {code: "ML", flag: "🇲🇱", name: {fr: "Mali", en: "Mali"}},
  {code: "BF", flag: "🇧🇫", name: {fr: "Burkina Faso", en: "Burkina Faso"}},
  {code: "BJ", flag: "🇧🇯", name: {fr: "Bénin", en: "Benin"}},
  {code: "ALL", flag: "🌍", name: {fr: "Toute l'Afrique", en: "All Africa"}}
]

const papers = [
  {id: 1, country: "CM", year: "BEPC 2024", subject: {fr: "Mathématiques", en: "Mathematics"}, price: "200 CFA"},
  {id: 2, country: "CM", year: "BAC 2023", subject: {fr: "Physique", en: "Physics"}, price: "200 CFA"},
  {id: 3, country: "NG", year: "WAEC 2024", subject: {fr: "Anglais", en: "English"}, price: "200 CFA"},
  {id: 4, country: "NG", year: "NECO 2023", subject: {fr: "Biologie", en: "Biology"}, price: "200 CFA"},
  {id: 5, country: "CI", year: "BAC 2024", subject: {fr: "Philosophie", en: "Philosophy"}, price: "200 CFA"},
  {id: 6, country: "SN", year: "BEPC 2023", subject: {fr: "Français", en: "French"}, price: "200 CFA"},
  {id: 7, country: "GH", year: "WASSCE 2024", subject: {fr: "Chimie", en: "Chemistry"}, price: "200 CFA"},
  {id: 8, country: "KE", year: "KCSE 2023", subject: {fr: "Histoire", en: "History"}, price: "200 CFA"}
]

const teachers = [
  {id: 1, country: "CM", name: "Mr. Njoya", students: "2,340", earnings: "₦45,200"},
  {id: 2, country: "NG", name: "Mrs. Adebayo", students: "5,120", earnings: "₦98,400"},
  {id: 3, country: "CI", name: "Prof. Kouassi", students: "1,890", earnings: "₦32,100"},
  {id: 4, country: "SN", name: "M. Diop", students: "3,450", earnings: "₦67,800"}
]

export default function Home() {
  const [lang, setLang] = useState("fr")
  const [country, setCountry] = useState(null)
  const [showCountryModal, setShowCountryModal] = useState(false)
  const t = translations

  useEffect(() => {
    const savedLang = localStorage.getItem("bacbepc-lang")
    const savedCountry = localStorage.getItem("bacbepc-country")
    if (savedLang) setLang(savedLang)
    if (savedCountry) setCountry(JSON.parse(savedCountry))
  }, [])

  const toggleLang = () => {
    const newLang = lang === "fr"? "en" : "fr"
    setLang(newLang)
    localStorage.setItem("bacbepc-lang", newLang)
  }

  const selectCountry = (c) => {
    setCountry(c)
    localStorage.setItem("bacbepc-country", JSON.stringify(c))
    setShowCountryModal(false)
  }

  const filteredPapers = country?.code === "ALL" || !country 
    ? papers 
    : papers.filter(p => p.country === country.code)
  
  const filteredTeachers = country?.code === "ALL" || !country 
    ? teachers 
    : teachers.filter(t => t.country === country.code)

  return (
    <div style={{fontFamily: "system-ui, -apple-system, sans-serif", backgroundColor: "#f8fafc", color: "#0f172a"}}>

      {/* Header */}
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

      {/* Hero Section */}
      <section style={{padding: "40px 20px", backgroundColor: "white"}}>
        <div style={{maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px"}}>

          <div style={{flex: "1 1 500px", minWidth: "300px"}}>
            <button
              onClick={() => setShowCountryModal(true)}
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
              {country? `${country.flag} ${country.name}` : t.selectCountry}
            </button>

            {country && (
              <div style={{fontSize: "12px", color: "#64748b", marginBottom: "8px"}}>
                {t.showing}: <strong>{country.name}</strong>
              </div>
            )}

            <h1 style={{fontSize: "42px", fontWeight: "800", lineHeight: "1.2", margin: "0 0 16px 0"}}>
              {t.heroTitle1}<br/>
              <span style={{color: "#f97316"}}>{t.heroTitle2}</span><br/>
              {t.heroTitle3}<br/>{t.heroTitle4}
            </h1>
            <p style={{fontSize: "16px", color: "#64748b", marginBottom: "24px"}}>
              {t.heroSubtitle}
            </p>
            <div style={{display: "flex", gap: "12px", flexWrap: "wrap"}}>
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
            <div style={{display: "flex", gap: "24px", marginTop: "24px", fontSize: "13px", color: "#64748b", flexWrap: "wrap"}}>
              <div style={{display: "flex", alignItems: "center", gap: "6px"}}>{t.secure}</div>
              <div style={{display: "flex", alignItems: "center", gap: "6px"}}>{t.trusted}</div>
              <div style={{display: "flex", alignItems: "center", gap: "6px"}}>{t.earnings}</div>
            </div>
          </div>

          <div style={{flex: "1 1 400px", minWidth: "300px", position: "relative", height: "400px"}}>
            <div style={{fontSize: "200px", textAlign: "center"}}>👨‍🏫</div>
            <div style={{position: "absolute", top: "20px", right: "20px", backgroundColor: "white", padding: "12px 16px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", fontSize: "12px"}}>
              <div style={{color: "#64748b", marginBottom: "4px"}}>{t.monthlyEarnings}</div>
              <div style={{fontWeight: "800", fontSize: "18px"}}>₦256,800</div>
              <div style={{color: "#10b981", fontSize: "11px"}}>↑ 15% {lang === "fr"? "le mois dernier" : "last month"}</div>
            </div>
            <div style={{position: "absolute", top: "120px", right: "40px", backgroundColor: "white", padding: "10px 14px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", fontSize: "12px"}}>
              <div style={{color: "#64748b"}}>{t.totalStudents}</div>
              <div style={{fontWeight: "800", fontSize: "16px"}}>12,540</div>
            </div>
            <div style={{position: "absolute", bottom: "40px", right: "60px", backgroundColor: "white", padding: "12px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", fontSize: "12px", textAlign: "center"}}>
              <div style={{color: "#64748b", marginBottom: "4px"}}>{t.contentPerf}</div>
              <div style={{fontSize: "28px", fontWeight: "800", color: "#10b981"}}>86%</div>
              <div style={{fontSize: "10px"}}>{t.successRate}</div>
            </div>
          </div>

        </div>
      </section>

      {/* Country Selector Modal */}
      {showCountryModal && (
        <div
          onClick={() => setShowCountryModal(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px"
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "24px",
              maxWidth: "500px",
              width: "100%",
              maxHeight: "80vh",
              overflowY: "auto"
            }}
          >
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px"}}>
              <h3 style={{fontSize: "20px", fontWeight: "800", margin: 0}}>{t.selectCountry}</h3>
              <button
                onClick={() => setShowCountryModal(false)}
                style={{background: "none", border: "none", fontSize: "24px", cursor: "pointer"}}
              >×</button>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px"}}>
              {countries.map((c) => (
                <button
                  key={c.code}
                  onClick={() => selectCountry(c)}
                  style={{
                    backgroundColor: country?.code === c.code? "#dbeafe" : "#f8fafc",
                    border: country?.code === c.code? "2px solid #1e40af" : "2px solid #e2e8f0",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "15px",
                    fontWeight: "600",
                    cursor: "pointer",
                    textAlign: "left"
                  }}
                >
                  <span style={{fontSize: "24px"}}>{c.flag}</span>
                  <span>{c.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* For Teachers - Now Filtered */}
      <section style={{padding: "60px 20px", backgroundColor: "#f8fafc"}}>
        <div style={{maxWidth: "1200px", margin: "0 auto"}}>
          <div style={{textAlign: "center", marginBottom: "40px"}}>
            <h2 style={{fontSize: "32px", fontWeight: "800", margin: "0 0 8px 0"}}>{t.forTeachers}</h2>
            <p style={{color: "#64748b"}}>{t.createEarn}</p>
          </div>

          {filteredTeachers.length > 0 ? (
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "40px"}}>
              {filteredTeachers.map(teacher => (
                <div key={teacher.id} style={{backgroundColor: "white", padding: "24px", borderRadius: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)"}}>
                  <div style={{display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px"}}>
                    <div style={{fontSize: "40px"}}>👨‍🏫</div>
                    <div>
                      <h3 style={{fontSize: "18px", fontWeight: "700", margin: 0}}>{teacher.name}</h3>
                      <div style={{fontSize: "13px", color: "#64748b"}}>{teacher.students} {lang === "fr"? "étudiants" : "students"}</div>
                    </div>
                  </div>
                  <div style={{backgroundColor: "#dcfce7", padding: "10px", borderRadius: "8px", textAlign: "center"}}>
                    <div style={{fontSize: "12px", color: "#059669"}}>{t.monthlyEarnings}</div>
                    <div style={{fontSize: "20px", fontWeight: "800", color: "#059669"}}>{teacher.earnings}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p style={{textAlign: "center", color: "#64748b", padding: "40px"}}>{t.noContent}</p>
          )}

          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px"}}>
            <div style={{backgroundColor: "white", padding: "32px 24px", borderRadius: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)"}}>
              <div style={{backgroundColor: "#dbeafe", width: "56px", height: "56px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: "28px"}}>💰</div>
              <h3 style={{fontSize: "18px", fontWeight: "700", margin: "0 0 8px 0"}}>{t.earnMonthly}</h3>
              <p style={{fontSize: "14px", color: "#64748b", lineHeight: "1.6"}}>{t.earnDesc}</p>
            </div>
            <div style={{backgroundColor: "white", padding: "32px 24px", borderRadius: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)"}}>
              <div style={{backgroundColor: "#dcfce7", width: "56px", height: "56px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: "28px"}}>🌍</div>
              <h3 style={{fontSize: "18px", fontWeight: "700", margin: "0 0 8px 0"}}>{t.reachStudents}</h3>
              <p style={{fontSize: "14px", color: "#64748b", lineHeight: "1.6"}}>{t.reachDesc}</p>
            </div>
            <div style={{backgroundColor: "white", padding: "32px 24px", borderRadius: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)"}}>
              <div style={{backgroundColor: "#fef3c7", width: "56px", height: "56px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: "28px"}}>📊</div>
              <h3 style={{fontSize: "18px", fontWeight: "700", margin: "0 0 8px 0"}}>{t.saveTime}</h3>
              <p style={{fontSize: "14px", color: "#64748b", lineHeight: "1.6"}}>{t.saveDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Students - Now Filtered Papers */}
      <section style={{padding: "60px 20px", backgroundColor: "white"}}>
        <div style={{maxWidth: "1200px", margin: "0 auto"}}>
          <div style={{textAlign: "center", marginBottom: "40px"}}>
            <h2 style={{fontSize: "32px", fontWeight: "800", margin: "0 0 8px 0"}}>{t.forStudents}</h2>
            <p style={{color: "#64748b", marginBottom: "20px"}}>{t.choosePlan}</p>
            
            {filteredPapers.length > 0 && (
              <>
                <h3 style={{fontSize: "24px", fontWeight: "700", margin: "30px 0 20px 0"}}>{t.popularPapers}</h3>
                <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px", marginBottom: "40px"}}>
                  {filteredPapers.map(paper => (
                    <div key={paper.id} style={{
                      backgroundColor: "#f8fafc",
                      padding: "20px",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      border: "1px solid #e2e8f0"
                    }}>
                      <div style={{backgroundColor: "#dbeafe", padding: "10px 8px", borderRadius: "8px", fontSize: "11px", fontWeight: "700", color: "#1e40af", minWidth: "40px", textAlign: "center"}}>
                        PDF
                      </div>
                      <div style={{flex: 1, textAlign: "left"}}>
                        <p style={{fontSize: "12px", color: "#64748b", margin: 0, fontWeight: "500"}}>{paper.year}</p>
                        <p style={{fontWeight: "700", margin: "4px 0", fontSize: "16px"}}>{paper.subject}</p>
                      </div>
                      <div style={{textAlign: "right"}}>
                        <p style={{fontWeight: "700", margin: "0 0 8px 0", fontSize: "15px"}}>{paper.price}</p>
                        <button style={{
                          backgroundColor: "#10b981",
                          color: "white",
                          border: "none",
                          padding: "8px 16px",
                          borderRadius: "8px",
                          fontSize: "13px",
                          fontWeight: "600",
                          cursor: "pointer"
                        }}>
                          {t.buy} 🛒
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", maxWidth: "900px", margin: "0 auto"}}>

            <div style={{backgroundColor: "#f8fafc", padding: "32px 24px", borderRadius: "16px", border: "2px solid #e2e8f0", textAlign: "left"}}>
              <div style={{backgroundColor: "#10b981", color: "white", display: "inline-block", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700", marginBottom: "12px"}}>{t.free}</div>
              <h3 style={{fontSize: "24px", fontWeight: "800", margin: "0 0 8px 0"}}>{t.freeAccess}</h3>
              <p style={{color: "#64748b", fontSize: "14px", marginBottom: "20px"}}>{t.freeDesc}</p>
              <ul style={{listStyle: "none", padding: 0, margin: "0 0 24px 0", fontSize: "14px"}}>
                <li style={{marginBottom: "10px"}}>{t.pastLib}</li>
                <li style={{marginBottom: "10px"}}>{t.multiSubj}</li>
                <li style={{marginBottom: "10px"}}>{t.download}</li>
                <li>{t.mobile}</li>
              </ul>
              <button style={{width: "100%", backgroundColor: "white", color: "#1e40af", border: "2px solid #1e40af", padding: "12px", borderRadius: "8px", fontWeight: "700", cursor: "pointer"}}>
                {t.getStarted}
              </button>
            </div>

            <div style={{backgroundColor: "white", padding: "32px 24px", borderRadius: "16px", border: "2px solid #f97316", boxShadow: "0 8px 24px rgba(249,115,22,0.15)", textAlign: "left", position: "relative"}}>
              <div style={{position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", backgroundColor: "#f97316", color: "white", padding: "4px 16px", borderRadius: "20px", fontSize: "12px", fontWeight: "700"}}>{t.pro}</div>
              <h3 style={{fontSize: "24px", fontWeight: "800", margin: "0 0 8px 0", marginTop: "8px"}}>{t.proAccess}</h3>
              <p style={{color: "#64748b", fontSize: "14px", marginBottom: "20px"}}>{t.proDesc}</p>
              <ul style={{listStyle: "none", padding: 0, margin: "0 0 24px 0", fontSize: "14px"}}>
                <li style={{marginBottom: "10px"}}>{t.smartQuiz}</li>
                <li style={{marginBottom: "10px"}}>{t.autoMark}</li>
                <li style={{marginBottom: "10px"}}>{t.timedMocks}</li>
                <li style={{marginBottom: "10px"}}>{t.analytics}</li>
                <li>{t.exams}</li>
              </ul>
              <button style={{width: "100%", backgroundColor: "#f97316", color: "white", border: "none", padding: "12px", borderRadius: "8px", fontWeight: "700", cursor: "pointer"}}>
                {t.goPro}
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Exams We Support */}
      <section style={{padding: "40px 20px", backgroundColor: "#f8fafc", textAlign: "center"}}>
        <h3 style={{fontSize: "20px", fontWeight: "700", marginBottom: "24px"}}>{t.examsSupport}</h3>
        <div style={{display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", fontSize: "24px", fontWeight: "800"}}>
          <span style={{color: "#1e40af"}}>WAEC</span>
          <span style={{color: "#dc2626"}}>NECO</span>
          <span style={{color: "#059669"}}>KCSE</span>
          <span style={{color: "#dc2626"}}>IELTS</span>
          <span style={{color: "#1e40af"}}>DELF DALF</span>
          <span style={{color: "#059669"}}>TOEFL</span>
        </div>
      </section>

      {/* Footer */}
      <footer style={{backgroundColor: "#0f172a", color: "white", padding: "40px 20px"}}>
        <div style={{maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "32px"}}>
          <div>
            <div style={{display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px"}}>
              <span style={{fontSize: "24px"}}>📘</span>
              <span style={{fontWeight: "800", fontSize: "18px"}}>BacBepc</span>
              <span style={{fontSize: "18px", fontWeight: "400", color: "#94a3b8"}}>.com</span>
            </div>
            <p style={{fontSize: "13px", color: "#94a3b8"}}>{t.footerDesc}</p>
            <div style={{display: "flex", gap: "12px", marginTop: "16px", fontSize: "20px"}}>
              <span>f</span> <span>𝕏</span> <span>in</span> <span>📺</span> <span>in</span>
            </div>
          </div>
          <div>
            <h4 style={{fontSize: "14px", fontWeight: "700", marginBottom: "12px"}}>{t.quickLinks}</h4>