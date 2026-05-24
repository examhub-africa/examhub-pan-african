"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const router = useRouter();

  /* =========================
     LANGUAGE SYSTEM
  ========================== */

  const translations = {
    en: {
      title: "Student - Teacher Store",
      subtitle:
        "Buy and sell textbooks, past questions, lessons and study materials across all African countries.",
      search: "Search books, lessons, exams...",
      marketplace: "Marketplace",
      seeAll: "See All",
      upload: "Upload & Earn 60%",
      library: "Digital Library",
      preview: "Preview Free",
      trusted: "Trusted by Students, Parents & Teachers",
      countries: "55 African Countries",
      language: "Language",
      teacher: "Teacher Dashboard",
      parent: "Parents Corner",
      ai: "AI Study Assistant",
      read: "Read Online",
      unlock: "Unlock Full Book",
      home: "Home",
      store: "Store",
      lessons: "Lessons",
      account: "Account",
    },

    fr: {
      title: "Boutique Étudiant - Enseignant",
      subtitle:
        "Achetez et vendez des livres, anciens sujets, leçons et ressources éducatives dans tous les pays africains.",
      search: "Recher livres, leçons, examens...",
      marketplace: "Marché",
      seeAll: "Voir Tout",
      upload: "Téléverser & Gagner 60%",
      library: "Bibliothèque Numérique",
      preview: "Lire Gratuitement",
      trusted: "Approuvé par Élèves, Parents et Enseignants",
      countries: "55 Pays Africains",
      language: "Langue",
      teacher: "Tableau Enseignant",
      parent: "Espace Parents",
      ai: "Assistant IA",
      read: "Lire en Ligne",
      unlock: "Débloquer le Livre",
      home: "Accueil",
      store: "Boutique",
      lessons: "Cours",
      account: "Compte",
    },
  };

  const [language, setLanguage] = useState("en");
  const t = translations[language];

  /* =========================
     55 AFRICAN COUNTRIES
  ========================== */

  const africanCountries = [
    "Nigeria","Ghana","Cameroon","Benin","Togo","Senegal","Ivory Coast","South Africa",
    "Kenya","Uganda","Rwanda","Burkina Faso","Mali","Niger","Chad","Algeria","Morocco",
    "Tunisia","Egypt","Sudan","Ethiopia","Somalia","Angola","Zambia","Zimbabwe","Botswana",
    "Namibia","Mozambique","Liberia","Sierra Leone","Gabon","Congo","DR Congo","Malawi",
    "Madagascar","Mauritius","Cape Verde","Guinea","Guinea Bissau","Central African Republic",
    "Mauritania","Djibouti","Eritrea","Lesotho","Eswatini","Comoros","Seychelles","Burundi",
    "South Sudan","Tanzania","Libya","Equatorial Guinea","Gambia","Sao Tome","Western Sahara",
  ];

  /* =========================
     BOOKS
  ========================== */

  const books = [
    { title: "BAC Mathematics", exam: "BAC", country: "Cameroon", price: "$4.99", className: "bac" },
    { title: "BEPC Français", exam: "BEPC", country: "Benin", price: "$3.50", className: "bepc" },
    { title: "WAEC Physics", exam: "WAEC", country: "Nigeria", price: "$5.99", className: "waec" },
    { title: "JAMB English", exam: "JAMB", country: "Nigeria", price: "$2.99", className: "jamb" },
  ];

  return (
    <>
      <div className="container">
        <div className="topbar">
          <div className="logo" onClick={() => router.push("/")}>
            <div className="logo-box">S.T</div>
            <div>
              <h2>S.T-STORE</h2>
              <p>Student - Teacher Store</p>
            </div>
          </div>
          <div className="header-actions">
            <select className="language-select" value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="en">🇬🇧 English</option>
              <option value="fr">🇫🇷 Français</option>
            </select>
            <select className="country-select">
              {africanCountries.map((country, index) => <option key={index}>{country}</option>)}
            </select>
          </div>
        </div>

        <div className="hero">
          <div className="hero-badge">🌍 {t.countries}</div>
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
          <div className="search-box">
            <input type="text" placeholder={t.search} />
            <button className="search-btn" onClick={() => router.push("/search")}>🔍</button>
          </div>
          <div className="hero-features">
            <div className="mini-card">🤖 {t.ai}</div>
            <div className="mini-card">👨‍👩‍👧 {t.parent}</div>
            <div className="mini-card">👩🏾‍🏫 {t.teacher}</div>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card"><h3>120K+</h3><p>Books</p></div>
          <div className="stat-card"><h3>50K+</h3><p>Teachers</p></div>
          <div className="stat-card"><h3>55</h3><p>Countries</p></div>
          <div className="stat-card"><h3>4.9★</h3><p>Ratings</p></div>
        </div>

        <div className="section-title"><h2>{t.marketplace}</h2><span>{t.seeAll}</span></div>
        <div className="category-grid">
          <div className="category-card pdf" onClick={() => router.push("/pdf-books")}>
            <div className="icon">📘</div><h3>PDF Books</h3><p>eBooks, notes & textbooks</p><button>Explore</button>
          </div>
          <div className="category-card past" onClick={() => router.push("/past-questions")}>
            <div className="icon">📄</div><h3>Past Questions</h3><p>BAC, BEPC, WAEC & more</p><button>Explore</button>
          </div>
          <div className="category-card lesson" onClick={() => router.push("/lessons")}>
            <div className="icon">🎥</div><h3>Video Lessons</h3><p>Learn anywhere</p><button>Watch</button>
          </div>
          <div className="category-card upload" onClick={() => router.push("/teacher/dashboard")}>
            <div className="icon">💰</div><h3>{t.upload}</h3><p>Secure teacher dashboard</p><button>Start</button>
          </div>
        </div>

        <div className="library-box">
          <div className="library-header">
            <div>
              <h2>{t.library}</h2>
              <p>Read free preview pages online. Download is locked until purchase.</p>
            </div>
            <button>{t.preview}</button>
          </div>
          <div className="preview-pages">
            <div className="preview-card">📖 Preview Page 1</div>
            <div className="preview-card">📖 Preview Page 2</div>
            <div className="preview-card locked">🔒 Locked Page</div>
          </div>
        </div>

        <div className="section-title"><h2>Popular Books</h2><span>{t.seeAll}</span></div>
        <div className="book-scroll">
          {books.map((book, index) => (
            <div key={index} className="book-card" onClick={() => router.push("/books")}>
              <div className={`book-cover ${book.className}`}>
                <div className="country-tag">{book.country}</div>
                <div><h3>{book.exam}</h3><p>{book.title}</p></div>
              </div>
              <div className="book-info">
                <h4>{book.title}</h4>
                <div className="price">{book.price}</div>
                <button className="unlock-btn">{t.unlock}</button>
              </div>
            </div>
          ))}
        </div>

        <div className="trust-box">
          <h2>{t.trusted}</h2>
          <div className="trust-grid">
            <div className="trust-card">🔒 Teacher contacts hidden</div>
            <div className="trust-card">🛡 Secure payment protection</div>
            <div className="trust-card">📱 Mobile optimized learning</div>
            <div className="trust-card">🤝 Parent supervision tools</div>
            <div className="trust-card">📚 AI exam recommendations</div>
            <div className="trust-card">🎯 Personalized study plans</div>
          </div>
        </div>

        <div className="space"></div>
      </div>

      <div className="bottom-nav">
        <div className="nav-item active" onClick={() => router.push("/")}><span>🏠</span><span>{t.home}</span></div>
        <div className="nav-item" onClick={() => router.push("/store")}><span>📚</span><span>{t.store}</span></div>
        <div className="upload-center" onClick={() => router.push("/teacher/dashboard")}>+</div>
        <div className="nav-item" onClick={() => router.push("/lessons")}><span>🎓</span><span>{t.lessons}</span></div>
        <div className="nav-item" onClick={() => router.push("/account")}><span>👤</span><span>{t.account}</span></div>
      </div>

      <style jsx>{`
        *{ margin:0; padding:0; box-sizing:border-box; }
        body{ background:#f4f8ff; }
       .container{ max-width:430px; margin:auto; padding:18px; min-height:100vh; font-family:Poppins,sans-serif; background:#f4f8ff; padding-bottom:100px; }
       .topbar{ display:flex; flex-direction:column; gap:14px; margin-bottom:20px; }
       .logo{ display:flex; align-items:center; gap:12px; cursor:pointer; }
       .logo-box{ width:52px; height:52px; border-radius:16px; background:linear-gradient(135deg,#0057ff,#002f87); display:flex; align-items:center; justify-content:center; color:white; font-size:14px; line-height:14px; font-weight:800; }
       .logo h2{ font-size:24px; color:#0033a0; font-weight:800; }
       .logo p{ color:#667085; font-size:12px; }
       .header-actions{ display:flex; gap:10px; }
       .language-select,.country-select{ flex:1; border:none; background:white; padding:14px; border-radius:16px; font-weight:600; box-shadow:0 4px 10px rgba(0,0,0,0.06); }
       .hero{ background:linear-gradient(135deg,#0046ff,#001f70); border-radius:32px; padding:26px; color:white; }
       .hero-badge{ background:rgba(255,255,255,0.15); padding:10px 14px; border-radius:40px; width:max-content; margin-bottom:16px; font-size:12px; font-weight:700; }
       .hero h1{ font-size:36px; line-height:1.1; font-weight:800; margin-bottom:14px; }
       .hero p{ line-height:1.7; margin-bottom:20px; }
       .search-box{ display:flex; background:white; padding:8px; border-radius:18px; margin-bottom:20px; }
       .search-box input{ flex:1; border:none; outline:none; padding:12px; font-size:14px; }
       .search-btn{ width:52px; height:52px; border:none; border-radius:14px; background:#0057ff; color:white; cursor:pointer; }
       .hero-features{ display:flex; gap:10px; overflow:auto; }
       .mini-card{ min-width:max-content; background:rgba(255,255,255,0.15); padding:12px 16px; border-radius:16px; font-size:13px; font-weight:600; }
       .stats-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin:20px 0; }
       .stat-card{ background:white; border-radius:20px; padding:16px 10px; text-align:center; }
       .stat-card h3{ color:#0057ff; font-size:20px; font-weight:800; }
       .stat-card p{ font-size:11px; margin-top:4px; }
       .section-title{ display:flex; justify-content:space-between; align-items:center; margin:26px 0 18px; }
       .section-title h2{ font-size:24px; font-weight:800; }
       .section-title span{ color:#0057ff; font-weight:700; }
       .category-grid{ display:grid; grid-template-columns:repeat(2,1fr); gap:16px; }
       .category-card{ padding:20px; border-radius:26px; color:white; min-height:190px; cursor:pointer; }
       .icon{ font-size:34px; }
       .category-card h3{ margin-top:18px; font-size:22px; font-weight:800; }
       .category-card p{ margin-top:8px; font-size:13px; line-height:1.6; }
       .category-card button{ margin-top:16px; border:none; background:white; padding:10px 16px; border-radius:14px; font-weight:700; }
       .pdf{ background:linear-gradient(135deg,#0057ff,#0039b5); }
       .past{ background:linear-gradient(135deg,#00bf63,#008a47); }
       .lesson{ background:linear-gradient(135deg,#7b2fff,#5811d8); }
       .upload{ background:linear-gradient(135deg,#ff9800,#ff6600); }
       .library-box{ background:white; border-radius:28px; padding:22px; margin-top:28px; }
       .library-header{ display:flex; justify-content:space-between; gap:12px; }
       .library-header h2{ font-size:24px; font-weight:800; }
       .library-header p{ margin-top:8px; color:#667085; line-height:1.7; font-size:13px; }
       .library-header button{ border:none; background:#0057ff; color:white; padding:12px 18px; border-radius:14px; height:max-content; font-weight:700; }
       .preview-pages{ display:flex; gap:14px; overflow:auto; margin-top:20px; }
       .preview-card{ min-width:140px; height:180px; border-radius:20px; background:#edf3ff; display:flex; align-items:center; justify-content:center; font-weight:700; color:#0057ff; }
       .locked{ background:#111827; color:white; }
       .book-scroll{ display:flex; gap:16px; overflow:auto; padding-bottom:10px; }
       .book-card{ min-width:190px; background:white; border-radius:24px; padding:14px; }
       .book-cover{ height:220px; border-radius:20px; padding:16px; color:white; display:flex; flex-direction:column; justify-content:space-between; }
       .bac{ background:linear-gradient(135deg,#0057ff,#002f87); }
       .bepc{ background:linear-gradient(135deg,#00a651,#00753a); }
       .waec{ background:linear-gradient(135deg,#7b2fff,#5511cc); }
       .jamb{ background:linear-gradient(135deg,#ff9800,#ff6600); }
       .country-tag{ background:rgba(255,255,255,0.15); padding:8px 12px; border-radius:30px; width:max-content; font-size:12px; font-weight:700; }
       .book-cover h3{ font-size:30px; font-weight:800; }
       .book-cover p{ margin-top:6px; }
       .book-info{ margin-top:14px; }
       .book-info h4{ font-size:18px; line-height:1.4; }
       .price{ color:#0057ff; margin-top:10px; font-size:22px; font-weight:800; }
       .unlock-btn{ margin-top:12px; width:100%; height:48px; border:none; border-radius:14px; background:#0057ff; color:white; font-weight:700; }
       .trust-box{ margin-top:30px; background:#0f172a; border-radius:30px; padding:24px; color:white; }
       .trust-box h2{ font-size:28px; font-weight:800; margin-bottom:20px; }
       .trust-grid{ display:grid; grid-template-columns:repeat(2,1fr); gap:14px; }
       .trust-card{ background:rgba(255,255,255,0.08); padding:18px; border-radius:18px; font-size:13px; line-height:1.6; }
       .space{ height:120px; }
       .bottom-nav{ position:fixed; bottom:0; left:0; right:0; max-width:430px; margin:auto; height:82px; background:white; display:flex; justify-content:space-around; align-items:center; border-top:1px solid #e5e7eb; z-index:10; }
       .nav-item{ display:flex; flex-direction:column; align-items:center; gap:4px; font-size:12px; cursor:pointer; }
       .active{ color:#0057ff; }
       .upload-center{ width:64px; height:64px; background:#0057ff; color:white; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:34px; margin-top:-28px; cursor:pointer; box-shadow:0 10px 20px rgba(0,87,255,0.4); }
      `}</style>
    </>
  );
}
