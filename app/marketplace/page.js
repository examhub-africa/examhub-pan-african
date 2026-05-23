<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>ExamHub Africa Marketplace</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

  <style>

    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
      font-family:'Poppins',sans-serif;
    }

    body{
      background:#f5f8ff;
      color:#111827;
      max-width:430px;
      margin:auto;
      min-height:100vh;
      overflow-x:hidden;
    }

    a{
      text-decoration:none;
    }

    .container{
      padding:18px;
    }

    /* HEADER */

    .topbar{
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-bottom:20px;
    }

    .logo{
      display:flex;
      align-items:center;
      gap:10px;
    }

    .logo-box{
      width:48px;
      height:48px;
      border-radius:14px;
      background:linear-gradient(135deg,#0057ff,#002d88);
      display:flex;
      align-items:center;
      justify-content:center;
      color:white;
      font-size:22px;
      font-weight:800;
    }

    .logo-text h2{
      font-size:24px;
      line-height:1;
      font-weight:800;
      color:#0033a0;
    }

    .logo-text p{
      font-size:11px;
      color:#6b7280;
      font-weight:600;
    }

    .icon-group{
      display:flex;
      gap:12px;
    }

    .icon-btn{
      width:42px;
      height:42px;
      border-radius:14px;
      background:white;
      display:flex;
      align-items:center;
      justify-content:center;
      box-shadow:0 3px 10px rgba(0,0,0,0.06);
      font-size:18px;
      cursor:pointer;
    }

    /* HERO */

    .hero{
      background:linear-gradient(135deg,#0039b5,#0057ff);
      border-radius:28px;
      padding:25px;
      color:white;
      position:relative;
      overflow:hidden;
      margin-bottom:20px;
    }

    .hero h1{
      font-size:34px;
      line-height:1.15;
      font-weight:800;
      margin-bottom:14px;
    }

    .hero p{
      font-size:14px;
      line-height:1.6;
      opacity:0.95;
      margin-bottom:20px;
    }

    .search-box{
      background:white;
      border-radius:18px;
      padding:8px;
      display:flex;
      align-items:center;
      margin-top:10px;
    }

    .search-box input{
      flex:1;
      border:none;
      outline:none;
      padding:12px;
      font-size:14px;
      font-weight:500;
    }

    .search-btn{
      width:50px;
      height:50px;
      border-radius:14px;
      background:#0057ff;
      color:white;
      border:none;
      font-size:18px;
      font-weight:bold;
      cursor:pointer;
    }

    /* CATEGORY */

    .section-title{
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin:22px 0 16px;
    }

    .section-title h2{
      font-size:22px;
      font-weight:800;
    }

    .section-title a{
      color:#0057ff;
      font-size:14px;
      font-weight:700;
    }

    .category-grid{
      display:grid;
      grid-template-columns:repeat(2,1fr);
      gap:15px;
    }

    .category-card{
      border-radius:24px;
      padding:18px;
      color:white;
      min-height:160px;
      position:relative;
      overflow:hidden;
    }

    .category-card h3{
      font-size:20px;
      font-weight:800;
      margin-top:35px;
    }

    .category-card p{
      font-size:13px;
      margin-top:6px;
      opacity:0.95;
    }

    .category-card button{
      margin-top:14px;
      border:none;
      background:white;
      color:#111827;
      padding:10px 18px;
      border-radius:14px;
      font-weight:700;
      cursor:pointer;
    }

    .pdf{
      background:linear-gradient(135deg,#0057ff,#0039b5);
    }

    .past{
      background:linear-gradient(135deg,#00b85c,#00863f);
    }

    .lesson{
      background:linear-gradient(135deg,#7b2fff,#5511cc);
    }

    .upload{
      background:linear-gradient(135deg,#ff9800,#ff6b00);
    }

    /* SELL SECTION */

    .sell-box{
      background:white;
      border-radius:24px;
      padding:20px;
      margin-top:24px;
      box-shadow:0 6px 18px rgba(0,0,0,0.05);
    }

    .sell-box h2{
      font-size:24px;
      font-weight:800;
      margin-bottom:10px;
    }

    .sell-box p{
      font-size:14px;
      color:#4b5563;
      line-height:1.7;
      margin-bottom:18px;
    }

    .sell-btn{
      width:100%;
      height:56px;
      border:none;
      border-radius:18px;
      background:#0057ff;
      color:white;
      font-size:16px;
      font-weight:700;
      cursor:pointer;
    }

    /* BOOKS */

    .book-scroll{
      display:flex;
      gap:16px;
      overflow-x:auto;
      padding-bottom:10px;
    }

    .book-scroll::-webkit-scrollbar{
      display:none;
    }

    .book-card{
      min-width:180px;
      background:white;
      border-radius:22px;
      padding:14px;
      box-shadow:0 4px 14px rgba(0,0,0,0.06);
    }

    .book-cover{
      height:220px;
      border-radius:18px;
      padding:14px;
      color:white;
      position:relative;
      overflow:hidden;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
    }

    .bac{
      background:linear-gradient(135deg,#002f87,#0057ff);
    }

    .bepc{
      background:linear-gradient(135deg,#007a3d,#00c16a);
    }

    .waec{
      background:linear-gradient(135deg,#5511cc,#7b2fff);
    }

    .neco{
      background:linear-gradient(135deg,#ff7300,#ff9800);
    }

    .country-tag{
      background:rgba(255,255,255,0.2);
      width:max-content;
      padding:6px 12px;
      border-radius:30px;
      font-size:11px;
      font-weight:700;
      backdrop-filter:blur(5px);
    }

    .book-cover h3{
      font-size:26px;
      line-height:1.1;
      font-weight:800;
    }

    .book-cover p{
      font-size:13px;
      opacity:0.95;
      margin-top:8px;
    }

    .book-info{
      margin-top:14px;
    }

    .book-info h4{
      font-size:16px;
      font-weight:700;
      line-height:1.4;
    }

    .price{
      margin-top:8px;
      color:#0057ff;
      font-weight:800;
      font-size:18px;
    }

    /* FEATURES */

    .features{
      margin-top:26px;
      display:grid;
      grid-template-columns:repeat(2,1fr);
      gap:15px;
    }

    .feature-box{
      background:white;
      border-radius:22px;
      padding:18px;
      text-align:center;
      box-shadow:0 4px 12px rgba(0,0,0,0.05);
    }

    .feature-box h4{
      margin-top:10px;
      font-size:15px;
      font-weight:700;
    }

    .feature-box p{
      margin-top:6px;
      font-size:12px;
      color:#6b7280;
      line-height:1.6;
    }

    /* NAVBAR */

    .bottom-nav{
      position:fixed;
      bottom:0;
      width:100%;
      max-width:430px;
      background:white;
      height:78px;
      display:flex;
      justify-content:space-around;
      align-items:center;
      border-top:1px solid #e5e7eb;
      z-index:999;
    }

    .nav-item{
      display:flex;
      flex-direction:column;
      align-items:center;
      font-size:12px;
      color:#6b7280;
      font-weight:600;
    }

    .nav-item.active{
      color:#0057ff;
    }

    .upload-center{
      width:60px;
      height:60px;
      border-radius:50%;
      background:#0057ff;
      color:white;
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:30px;
      margin-top:-25px;
      box-shadow:0 8px 20px rgba(0,87,255,0.4);
    }

    .space{
      height:100px;
    }

  </style>
</head>

<body>

  <div class="container">

    <!-- HEADER -->

    <div class="topbar">

      <div class="logo">

        <div class="logo-box">
          E
        </div>

        <div class="logo-text">
          <h2>ExamHub Africa</h2>
          <p>BAC • BEPC • WAEC • NECO</p>
        </div>

      </div>

      <div class="icon-group">

        <div class="icon-btn">🔍</div>
        <div class="icon-btn">🔔</div>

      </div>

    </div>

    <!-- HERO -->

    <div class="hero">

      <h1>
        Africa's Biggest Educational Marketplace
      </h1>

      <p>
        Buy and sell BAC, BEPC, WAEC, NECO textbooks, past questions,
        lessons and study materials from verified teachers across Africa.
      </p>

      <div class="search-box">

        <input type="text"
        placeholder="Search BAC, BEPC, WAEC books..." />

        <button class="search-btn">
          →
        </button>

      </div>

    </div>

    <!-- CATEGORY -->

    <div class="section-title">
      <h2>Marketplace</h2>
      <a href="#">See All</a>
    </div>

    <div class="category-grid">

      <div class="category-card pdf">
        📘
        <h3>PDF Books</h3>
        <p>Textbooks & eBooks</p>
        <button>Explore</button>
      </div>

      <div class="category-card past">
        📄
        <h3>Past Questions</h3>
        <p>BAC, BEPC, WAEC</p>
        <button>Explore</button>
      </div>

      <div class="category-card lesson">
        🎥
        <h3>Lessons</h3>
        <p>Video & Tutorials</p>
        <button>Explore</button>
      </div>

      <div class="category-card upload">
        ⬆
        <h3>Sell PDFs</h3>
        <p>Upload & Earn</p>
        <button>Start</button>
      </div>

    </div>

    <!-- SELL SECTION -->

    <div class="sell-box">

      <h2>
        Teachers Can Upload & Earn
      </h2>

      <p>
        Upload your textbooks, lessons, handwritten notes,
        BAC & BEPC past questions and earn revenue remotely
        from students across Africa.
      </p>

      <button class="sell-btn">
        Upload PDF Textbook
      </button>

    </div>

    <!-- BOOKS -->

    <div class="section-title">
      <h2>Top Study Materials</h2>
      <a href="#">View All</a>
    </div>

    <div class="book-scroll">

      <!-- BAC -->

      <div class="book-card">

        <div class="book-cover bac">

          <div class="country-tag">
            Cameroon • BAC
          </div>

          <div>
            <h3>BAC</h3>
            <p>Advanced Mathematics</p>
          </div>

        </div>

        <div class="book-info">

          <h4>
            BAC Mathematics Complete Guide
          </h4>

          <div class="price">$4.99</div>

        </div>

      </div>

      <!-- BEPC -->

      <div class="book-card">

        <div class="book-cover bepc">

          <div class="country-tag">
            Benin • BEPC
          </div>

          <div>
            <h3>BEPC</h3>
            <p>Science & Physics</p>
          </div>

        </div>

        <div class="book-info">

          <h4>
            BEPC Physics Revision Pack
          </h4>

          <div class="price">$3.50</div>

        </div>

      </div>

      <!-- WAEC -->

      <div class="book-card">

        <div class="book-cover waec">

          <div class="country-tag">
            Nigeria • WAEC
          </div>

          <div>
            <h3>WAEC</h3>
            <p>Past Questions 2026</p>
          </div>

        </div>

        <div class="book-info">

          <h4>
            WAEC Full Subjects Past Questions
          </h4>

          <div class="price">$5.99</div>

        </div>

      </div>

      <!-- NECO -->

      <div class="book-card">

        <div class="book-cover neco">

          <div class="country-tag">
            Ghana • WASSCE
          </div>

          <div>
            <h3>WASSCE</h3>
            <p>English Language</p>
          </div>

        </div>

        <div class="book-info">

          <h4>
            African English Exam Mastery
          </h4>

          <div class="price">$4.00</div>

        </div>

      </div>

    </div>

    <!-- FEATURES -->

    <div class="features">

      <div class="feature-box">
        ✅
        <h4>Verified Teachers</h4>
        <p>Trusted African educators</p>
      </div>

      <div class="feature-box">
        💳
        <h4>Secure Payments</h4>
        <p>Fast mobile transactions</p>
      </div>

      <div class="feature-box">
        🌍
        <h4>Multi Country</h4>
        <p>Nigeria, Cameroon, Benin & more</p>
      </div>

      <div class="feature-box">
        📚
        <h4>Digital Library</h4>
        <p>Access books anytime</p>
      </div>

    </div>

    <div class="space"></div>

  </div>

  <!-- NAVIGATION -->

  <div class="bottom-nav">

    <div class="nav-item active">
      🏠
      Home
    </div>

    <div class="nav-item">
      📚
      Store
    </div>

    <div class="upload-center">
      +
    </div>

    <div class="nav-item">
      🎓
      Lessons
    </div>

    <div class="nav-item">
      👤
      Account
    </div>

  </div>

</body>
</html>
