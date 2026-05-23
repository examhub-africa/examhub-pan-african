"use client";

import { useRouter } from "next/navigation";
import Head from "next/head";

export default function MarketplacePage() {
  const router = useRouter();

  const books = [
    {
      title: "BAC Mathematics Complete Guide",
      price: "$4.99",
      tag: "Cameroon • BAC",
      short: "BAC",
      desc: "Advanced Mathematics",
      className: "bac",
      link: "/books/bac-mathematics",
    },
    {
      title: "BEPC Physics Revision Pack",
      price: "$3.50",
      tag: "Benin • BEPC",
      short: "BEPC",
      desc: "Science & Physics",
      className: "bepc",
      link: "/books/bepc-physics",
    },
    {
      title: "WAEC Full Subjects Past Questions",
      price: "$5.99",
      tag: "Nigeria • WAEC",
      short: "WAEC",
      desc: "Past Questions 2026",
      className: "waec",
      link: "/books/waec-past-questions",
    },
    {
      title: "African English Exam Mastery",
      price: "$4.00",
      tag: "Ghana • WASSCE",
      short: "WASSCE",
      desc: "English Language",
      className: "neco",
      link: "/books/wassce-english",
    },
  ];

  return (
    <>
      <Head>
        <title>ExamHub Africa Marketplace</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
      </Head>

      <div className="container">

        {/* HEADER */}
        <div className="topbar">
          <div className="logo" onClick={() => router.push("/")}>
            <div className="logo-box">E</div>
            <div className="logo-text">
              <h2>ExamHub Africa</h2>
              <p>BAC • BEPC • WAEC • NECO</p>
            </div>
          </div>
          <div className="icon-group">
            <div className="icon-btn" onClick={() => router.push("/search")}>🔍</div>
            <div className="icon-btn" onClick={() => router.push("/notifications")}>🔔</div>
          </div>
        </div>

        {/* HERO */}
        <div className="hero">
          <h1>Marketplace</h1>
          <p>Buy and sell BAC, BEPC, WAEC, NECO textbooks, past questions, lessons and study materials from verified teachers across Africa.</p>
          <div className="search-box">
            <input type="text" placeholder="Search BAC, BEPC, WAEC books..."/>
            <button className="search-btn" onClick={() => router.push("/search")}>→</button>
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="section-title">
          <h2>Categories</h2>
        </div>

        <div className="category-grid">
          <div className="category-card pdf" onClick={() => router.push("/pdf-books")}>
            <div className="emoji">📘</div>
            <h3>PDF Books</h3>
            <p>Textbooks & eBooks</p>
            <button>Explore</button>
          </div>
          <div className="category-card past" onClick={() => router.push("/past-questions")}>
            <div className="emoji">📄</div>
            <h3>Past Questions</h3>
            <p>BAC, BEPC, WAEC</p>
            <button>Explore</button>
          </div>
          <div className="category-card lesson" onClick={() => router.push("/lessons")}>
            <div className="emoji">🎥</div>
            <h3>Lessons</h3>
            <p>Video & Tutorials</p>
            <button>Explore</button>
          </div>
          <div className="category-card upload" onClick={() => router.push("/teacher/upload")}>
            <div className="emoji">⬆</div>
            <h3>Sell PDFs</h3>
            <p>Upload & Earn</p>
            <button>Start</button>
          </div>
        </div>

        {/* SELL SECTION */}
        <div className="sell-box">
          <h2>Teachers Can Upload & Earn</h2>
          <p>Upload your textbooks, lessons, handwritten notes, BAC & BEPC past questions and earn revenue remotely from students across Africa.</p>
          <button className="sell-btn" onClick={() => router.push("/teacher/upload")}>Upload PDF Textbook</button>
        </div>

        {/* BOOKS */}
        <div className="section-title">
          <h2>Top Study Materials</h2>
          <span className="link" onClick={() => router.push("/books")}>View All</span>
        </div>

        <div className="book-scroll">
          {books.map((book, index) => (
            <div key={index} className="book-card" onClick={() => router.push(book.link)}>
              <div className={`book-cover ${book.className}`}>
                <div className="country-tag">{book.tag}</div>
                <div>
                  <h3>{book.short}</h3>
                  <p>{book.desc}</p>
                </div>
              </div>
              <div className="book-info">
                <h4>{book.title}</h4>
                <div className="price">{book.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* FEATURES */}
        <div className="features">
          <div className="feature-box">✅<h4>Verified Teachers</h4><p>Trusted African educators</p></div>
          <div className="feature-box">💳<h4>Secure Payments</h4><p>Fast mobile transactions</p></div>
          <div className="feature-box">🌍<h4>Multi Country</h4><p>Nigeria, Cameroon, Benin & more</p></div>
          <div className="feature-box">📚<h4>Digital Library</h4><p>Access books anytime</p></div>
        </div>

        <div className="space"></div>
      </div>

      {/* BOTTOM NAV */}
      <div className="bottom-nav">
        <div className="nav-item" onClick={() => router.push("/")}>🏠<span>Home</span></div>
        <div className="nav-item active" onClick={() => router.push("/marketplace")}>📚<span>Store</span></div>
        <div className="upload-center" onClick={() => router.push("/upload")}>+</div>
        <div className="nav-item" onClick={() => router.push("/lessons")}>🎓<span>Lessons</span></div>
        <div className="nav-item" onClick={() => router.push("/account")}>👤<span>Account</span></div>
      </div>

      <style jsx>{`
        *{margin:0;padding:0;box-sizing:border-box;}
        .container{background:#f5f8ff;min-height:100vh;max-width:430px;margin:auto;padding:18px;font-family:Poppins,sans-serif;color:#111827;padding-bottom:100px;}
        .topbar{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;}
        .logo{display:flex;align-items:center;gap:10px;cursor:pointer;}
        .logo-box{width:48px;height:48px;border-radius:14px;background:linear-gradient(135deg,#0057ff,#002d88);display:flex;align-items:center;justify-content:center;color:white;font-size:22px;font-weight:800;}
        .logo-text h2{font-size:24px;font-weight:800;color:#0033a0;}
        .logo-text p{font-size:11px;color:#6b7280;font-weight:600;}
        .icon-group{display:flex;gap:12px;}
        .icon-btn{width:42px;height:42px;border-radius:14px;background:white;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 3px 10px rgba(0,0,0,0.08);}
        .hero{background:linear-gradient(135deg,#0039b5,#0057ff);border-radius:28px;padding:25px;color:white;margin-bottom:20px;}
        .hero h1{font-size:34px;line-height:1.1;font-weight:800;margin-bottom:14px;}
        .hero p{font-size:14px;line-height:1.6;margin-bottom:20px;}
        .search-box{background:white;border-radius:18px;padding:8px;display:flex;align-items:center;}
        .search-box input{flex:1;border:none;outline:none;padding:12px;font-size:14px;}
        .search-btn{width:50px;height:50px;border:none;border-radius:14px;background:#0057ff;color:white;font-size:18px;cursor:pointer;}
        .section-title{display:flex;justify-content:space-between;align-items:center;margin:22px 0 16px;}
        .section-title h2{font-size:22px;font-weight:800;}
        .link{color:#0057ff;font-weight:700;cursor:pointer;}
        .category-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:15px;}
        .category-card{border-radius:24px;padding:18px;color:white;min-height:170px;cursor:pointer;transition:0.3s;}
        .category-card:hover{transform:scale(1.03);}
        .emoji{font-size:28px;}
        .category-card h3{font-size:20px;font-weight:800;margin-top:20px;}
        .category-card p{font-size:13px;margin-top:6px;}
        .category-card button{margin-top:14px;border:none;background:white;color:#111827;padding:10px 18px;border-radius:14px;font-weight:700;cursor:pointer;}
        .pdf{background:linear-gradient(135deg,#0057ff,#0039b5);}
        .past{background:linear-gradient(135deg,#00b85c,#00863f);}
        .lesson{background:linear-gradient(135deg,#7b2fff,#5511cc);}
        .upload{background:linear-gradient(135deg,#ff9800,#ff6b00);}
        .sell-box{background:white;border-radius:24px;padding:20px;margin-top:24px;}
        .sell-box h2{font-size:24px;font-weight:800;margin-bottom:10px;}
        .sell-box p{font-size:14px;line-height:1.7;color:#4b5563;margin-bottom:18px;}
        .sell-btn{width:100%;height:56px;border:none;border-radius:18px;background:#0057ff;color:white;font-size:16px;font-weight:700;cursor:pointer;}
        .book-scroll{display:flex;gap:16px;overflow-x:auto;padding-bottom:10px;}
        .book-scroll::-webkit-scrollbar{display:none;}
        .book-card{min-width:180px;background:white;border-radius:22px;padding:14px;cursor:pointer;transition:0.3s;}
        .book-card:hover{transform:translateY(-4px);}
        .book-cover{height:220px;border-radius:18px;padding:14px;color:white;display:flex;flex-direction:column;justify-content:space-between;}
        .bac{background:linear-gradient(135deg,#002f87,#0057ff);}
        .bepc{background:linear-gradient(135deg,#007a3d,#00c16a);}
        .waec{background:linear-gradient(135deg,#5511cc,#7b2fff);}
        .neco{background:linear-gradient(135deg,#ff7300,#ff9800);}
        .country-tag{background:rgba(255,255,255,0.2);width:max-content;padding:6px 12px;border-radius:30px;font-size:11px;font-weight:700;}
        .book-cover h3{font-size:26px;font-weight:800;}
        .book-cover p{font-size:13px;margin-top:8px;}
        .book-info{margin-top:14px;}
        .book-info h4{font-size:16px;line-height:1.4;}
        .price{margin-top:8px;color:#0057ff;font-size:18px;font-weight:800;}
        .features{margin-top:26px;display:grid;grid-template-columns:repeat(2,1fr);gap:15px;}
        .feature-box{background:white;border-radius:22px;padding:18px;text-align:center;}
        .feature-box h4{margin-top:10px;font-size:15px;font-weight:700;}
        .feature-box p{margin-top:6px;font-size:12px;color:#6b7280;}
        .space{height:120px;}
        .bottom-nav{position:fixed;bottom:0;left:0;right:0;max-width:430px;margin:0 auto;background:white;height:78px;display:flex;justify-content:space-around;align-items:center;border-top:1px solid #e5e7eb;}
        .nav-item{display:flex;flex-direction:column;align-items:center;gap:4px;font-size:12px;color:#6b7280;cursor:pointer;}
        .active{color:#0057ff;}
        .upload-center{width:60px;height:60px;border-radius:50%;background:#0057ff;color:white;display:flex;align-items:center;justify-content:center;font-size:30px;margin-top:-25px;cursor:pointer;}
      `}</style>
    </>
  );
}
