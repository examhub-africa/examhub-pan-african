"use client"
import { useState, useEffect } from "react"
import { translations } from "../translations"

export default function Home() {
  const [lang, setLang] = useState("fr")
  const t = translations

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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📘</span>
              <div>
                <span className="font-bold text-xl text-blue-700">BacBepc</span>
                <span className="font-normal text-xl text-slate-500">.com</span>
                <div className="text-xs text-slate-500 -mt-1">{t.tagline}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-blue-200 transition">
                {t.selectCountry}
              </button>
              <button
                onClick={toggleLang}
                className="bg-slate-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold hover:bg-slate-200 transition"
              >
                {lang === "fr"? "🇬🇧 EN" : "🇫🇷 FR"}
              </button>
              <button className="text-2xl">☰</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                {t.heroTitle1}<br/>
                <span className="text-orange-500">{t.heroTitle2}</span><br/>
                {t.heroTitle3}<br/>{t.heroTitle4}
              </h1>
              <p className="text-slate-600 text-lg mb-8">{t.heroSubtitle}</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                  {t.teacherBtn}
                </button>
                <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
                  {t.studentBtn}
                </button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">🔒 {t.secure}</div>
                <div className="flex items-center gap-2">✅ {t.trusted}</div>
                <div className="flex items-center gap-2">💰 {t.earnings}</div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-slate-50 rounded-2xl p-6 shadow-lg">
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow">
                  <div className="text-sm text-slate-500 mb-1">{t.monthlyRevenue}</div>
                  <div className="text-2xl font-bold">₦256,800</div>
                  <div className="text-green-600 text-xs">+18% last month</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow">
                  <div className="text-sm text-slate-500 mb-1">{t.totalStudents}</div>
                  <div className="text-2xl font-bold">12,540</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow">
                  <div className="text-sm text-slate-500 mb-1">{t.conversionRate}</div>
                  <div className="text-2xl font-bold text-green-600">86%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Teachers */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">{t.forTeachers}</h2>
            <p className="text-slate-600">{t.teachersSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{t.earnMonthly}</h3>
              <p className="text-slate-600 text-sm">{t.earnMonthlyDesc}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{t.reachStudents}</h3>
              <p className="text-slate-600 text-sm">{t.reachStudentsDesc}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{t.saveTime}</h3>
              <p className="text-slate-600 text-sm">{t.saveTimeDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Students */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">{t.forStudents}</h2>
            <p className="text-slate-600">{t.studentsSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free */}
            <div className="border-2 border-slate-200 rounded-2xl p-8">
              <div className="text-xs font-bold text-slate-500 mb-2">FREE</div>
              <h3 className="text-2xl font-bold mb-2">{t.freeAccess}</h3>
              <p className="text-slate-600 text-sm mb-6">{t.freeDesc}</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm">✓ {t.pastQuestions}</li>
                <li className="flex items-center gap-2 text-sm">✓ {t.multipleSubjects}</li>
                <li className="flex items-center gap-2 text-sm">✓ {t.downloadStudy}</li>
                <li className="flex items-center gap-2 text-sm">✓ {t.mobileFriendly}</li>
              </ul>
              <button className="w-full bg-slate-100 text-slate-700 py-3 rounded-lg font-semibold hover:bg-slate-200 transition">
                {t.getStarted}
              </button>
            </div>
            {/* Pro */}
            <div className="border-2 border-orange-500 rounded-2xl p-8 bg-orange-50 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">PRO</div>
              <h3 className="text-2xl font-bold mb-2 text-orange-600">{t.proAccess}</h3>
              <p className="text-slate-600 text-sm mb-6">{t.proDesc}</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm">✓ {t.smartAnswers}</li>
                <li className="flex items-center gap-2 text-sm">✓ {t.autoMarking}</li>
                <li className="flex items-center gap-2 text-sm">✓ {t.timedPractice}</li>
                <li className="flex items-center gap-2 text-sm">✓ {t.performanceAnalytics}</li>
                <li className="flex items-center gap-2 text-sm">✓ Exams: WAEC, NECO, KCSE, IELTS, DELF, TOEFL</li>
              </ul>
              <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
                {t.goPro}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Exams */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-2xl font-bold mb-8">{t.examsWeSupport}</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-center"><div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow mb-2">📘</div><div className="text-sm font-semibold">WAEC</div></div>
            <div className="text-center"><div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow mb-2">📗</div><div className="text-sm font-semibold">NECO</div></div>
            <div className="text-center"><div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow mb-2">📙</div><div className="text-sm font-semibold">KCSE</div></div>
            <div className="text-center"><div className="text-red-600 text-2xl font-bold">IELTS</div></div>
            <div className="text-center"><div className="text-blue-600 text-2xl font-bold">DELF</div></div>
            <div className="text-center"><div className="text-purple-600 text-2xl font-bold">TOEFL</div></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📘</span>
                <span className="font-bold text-xl text-white">BacBepc.com</span>
              </div>
              <p className="text-sm">{t.footerTagline}</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">{t.quickLinks}</h4>
              <ul className="space-y-8 text-sm">
                <li><a href="#" className="hover:text-white">{t.forTeachersLink}</a></li>
                <li><a href="#" className="hover:text-white">{t.forStudentsLink}</a></li>
                <li><a href="#" className="hover:text-white">{t.howItWorks}</a></li>
                <li><a href="#" className="hover:text-white">{t.pricing}</a></li>
                <li><a href="#" className="hover:text-white">{t.faqs}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">{t.contactUs}</h4>
              <ul className="space-y-2 text-sm">
                <li>info@bacbepc.com</li>
                <li>+234 903 123 4567</li>
                <li>Lagos, Nigeria</li>
                <li>www.bacbepc.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Follow</h4>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700">f</a>
                <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700">X</a>
                <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700">in</a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-2">
            <div>🔒 {t.securePayments}</div>
            <div>© 2025 BacBepc. {t.allRights}</div>
          </div>
        </div>
      </footer>
    </div>
  )
}