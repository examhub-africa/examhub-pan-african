export default function ExamHubAfricaHomepage() { const teacherFeatures = [ { title: 'EARN MONTHLY REVENUE SHARE', text: 'Keep 60% of every sale. We handle payments and delivery.', icon: '💼', }, { title: 'REACH STUDENTS IN 54 AFRICAN COUNTRIES', text: 'Your lessons can help thousands of learners across the continent.', icon: '🌍', }, { title: 'SAVE TIME WITH AUTO-GRADING AND ANALYTICS', text: 'Smart tools help you grade faster and understand student performance.', icon: '📊', }, ]

const freeFeatures = [ 'Past questions library', 'Multiple subjects', 'Download and study', 'Mobile friendly', ]

const proFeatures = [ 'Smart quizzes', 'Auto-marking', 'Timed mocks', 'Performance analytics', 'WAEC, NECO, KCSE, IELTS, DELF, TOEFL, BAC, BEPC', ]

const exams = [ 'WAEC', 'NECO', 'KCSE', 'BAC', 'BEPC', 'IELTS', 'DELF DALF', 'TOEFL', ]

return ( <div className="min-h-screen bg-[#f7f8fb] text-[#0B1B55] font-sans"> {/* Header */} <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50"> <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between"> <div className="flex items-center gap-3"> <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white text-2xl shadow-lg"> 🎓 </div>

<div>
          <h1 className="text-2xl md:text-3xl font-black leading-none">
            <span className="text-blue-600">examhub</span>
            <span className="text-orange-500">-africa</span>
          </h1>
          <p className="text-sm text-blue-900 font-semibold">
            Teach • Share • Earn
          </p>
        </div>
      </div>

      <button className="flex flex-col gap-1">
        <span className="w-8 h-1 rounded-full bg-[#0B1B55]"></span>
        <span className="w-8 h-1 rounded-full bg-[#0B1B55]"></span>
        <span className="w-8 h-1 rounded-full bg-[#0B1B55]"></span>
      </button>
    </div>
  </header>

  {/* Hero Section */}
  <section className="relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
      {/* Left */}
      <div>
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-sm flex items-center justify-between gap-10 w-full md:w-[260px]">
            <div>
              <p className="text-xs font-bold uppercase text-gray-500">
                Select Country
              </p>
              <p className="font-bold mt-1">Nigeria</p>
            </div>
            <span className="text-xl">🌍</span>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-sm flex items-center justify-between gap-10 w-full md:w-[260px]">
            <div>
              <p className="text-xs font-bold uppercase text-gray-500">
                Select Language
              </p>
              <p className="font-bold mt-1">English / Français</p>
            </div>
            <span className="text-xl">🌐</span>
          </div>
        </div>

        <h2 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-[#07245F]">
          TURN YOUR
          <br />
          LESSONS
          <br />
          INTO INCOME.
        </h2>

        <h3 className="text-4xl md:text-6xl font-black leading-tight text-orange-500 mt-5">
          HELP STUDENTS
          <br />
          ACROSS AFRICA.
        </h3>

        <p className="mt-6 text-lg md:text-2xl font-bold text-[#0B1B55]">
          Upload once. Earn monthly. Keep 60%.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-black text-lg px-8 py-5 rounded-2xl shadow-xl">
            👨‍🏫 I&apos;M A TEACHER
          </button>

          <button className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white font-black text-lg px-8 py-5 rounded-2xl shadow-xl">
            🎓 I&apos;M A STUDENT
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <p className="font-black text-sm">SECURE PAYMENTS</p>
            <p className="text-gray-500 text-sm mt-1">Powered by Paystack</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <p className="font-black text-sm">TRUSTED BY TEACHERS</p>
            <p className="text-gray-500 text-sm mt-1">Across Africa</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <p className="font-black text-sm">YOUR CONTENT</p>
            <p className="text-gray-500 text-sm mt-1">Your earnings protected</p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="relative flex justify-center lg:justify-end">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full blur-3xl opacity-60"></div>

        <div className="relative z-10 w-[340px] md:w-[420px] h-[540px] rounded-[40px] bg-gradient-to-b from-[#1f4fff] to-[#0B1B55] shadow-2xl overflow-hidden flex items-end justify-center">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
            alt="African teacher"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute left-0 top-10 bg-white rounded-3xl p-5 shadow-2xl w-52 border border-gray-100 z-20">
          <p className="text-sm font-bold text-gray-500">TOTAL STUDENTS</p>
          <h4 className="text-4xl font-black mt-2 text-blue-600">12,540</h4>
        </div>

        <div className="absolute right-0 bottom-16 bg-white rounded-3xl p-5 shadow-2xl w-56 border border-gray-100 z-20">
          <p className="text-sm font-bold text-gray-500">
            CONTENT PERFORMANCE
          </p>

          <div className="flex items-center gap-4 mt-4">
            <div className="w-20 h-20 rounded-full border-[8px] border-green-500 flex items-center justify-center font-black text-xl">
              85%
            </div>

            <div>
              <p className="font-black text-2xl text-blue-600">85%</p>
              <p className="text-sm text-gray-500">Engagement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Teachers Section */}
  <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
    <div className="bg-[#EEF3FF] rounded-[40px] p-8 md:p-14 shadow-sm">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-black text-[#07245F]">FOR TEACHERS</h2>
        <p className="mt-3 text-xl font-bold text-blue-900">
          Create once. Earn forever.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {teacherFeatures.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-[32px] p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-4xl text-white shadow-lg mb-8">
              {item.icon}
            </div>

            <h3 className="text-2xl font-black leading-tight text-[#07245F]">
              {item.title}
            </h3>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Student Plans */}
  <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
    <div className="bg-[#FFFDF9] rounded-[40px] p-8 md:p-14 shadow-sm border border-orange-100">
      <div className="text-center mb-14">
        <h2 className="text-5xl font-black text-[#07245F]">FOR STUDENTS</h2>
        <p className="mt-3 text-xl font-bold text-blue-900">
          Choose the plan that fits your goals.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Free Plan */}
        <div className="bg-white border-2 border-blue-500 rounded-[32px] p-8 shadow-xl">
          <span className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full font-black text-lg">
            FREE
          </span>

          <div className="flex items-center justify-between gap-4 mt-8">
            <div>
              <h3 className="text-4xl font-black text-blue-600">
                FREE ACCESS
              </h3>

              <p className="mt-4 text-lg text-gray-600">
                Basic past questions from multiple teachers.
              </p>
            </div>

            <div className="text-7xl">📘</div>
          </div>

          <ul className="mt-10 space-y-5">
            {freeFeatures.map((feature, index) => (
              <li key={index} className="flex items-center gap-4 text-lg">
                <span className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-black">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <button className="w-full mt-12 bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white text-xl font-black py-5 rounded-2xl shadow-lg">
            GET STARTED FOR FREE
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white border-2 border-orange-500 rounded-[32px] p-8 shadow-xl">
          <span className="inline-block bg-orange-500 text-white px-5 py-2 rounded-full font-black text-lg">
            PRO
          </span>

          <div className="flex items-center justify-between gap-4 mt-8">
            <div>
              <h3 className="text-4xl font-black text-orange-500">
                PRO ACCESS
              </h3>

              <p className="mt-4 text-lg text-gray-600">
                Smart learning tools for exam success.
              </p>
            </div>

            <div className="text-7xl">🎓</div>
          </div>

          <ul className="mt-10 space-y-5">
            {proFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-4 text-lg">
                <span className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-black mt-1">
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button className="w-full mt-12 bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white text-xl font-black py-5 rounded-2xl shadow-lg">
            GO PRO
          </button>
        </div>
      </div>

      {/* Exams */}
      <div className="mt-20 text-center">
        <h3 className="text-3xl font-black text-[#07245F] mb-10">
          EXAMS WE SUPPORT
        </h3>

        <div className="flex flex-wrap justify-center gap-5">
          {exams.map((exam, index) => (
            <div
              key={index}
              className="bg-white px-8 py-5 rounded-2xl shadow-md border border-gray-100 text-xl font-black"
            >
              {exam}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-[#071B4D] text-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid md:grid-cols-3 gap-12">
      <div>
        <h2 className="text-4xl font-black">
          <span className="text-blue-400">examhub</span>
          <span className="text-orange-500">-africa</span>
        </h2>

        <p className="mt-5 text-gray-300 text-lg leading-relaxed">
          Teacher-powered marketplace for African education.
        </p>

        <div className="flex gap-4 mt-8 text-2xl">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            f
          </div>
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            x
          </div>
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            in
          </div>
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            ▶
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-black mb-6">QUICK LINKS</h3>

        <ul className="space-y-4 text-gray-300 text-lg">
          <li>For Teachers</li>
          <li>For Students</li>
          <li>How It Works</li>
          <li>Pricing</li>
          <li>FAQs</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-black mb-6">CONTACT US</h3>

        <div className="space-y-5 text-gray-300 text-lg">
          <p>✉️ hello@examhub-africa.com</p>
          <a
            href="https://wa.me/2347035092983"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-green-400 transition-colors duration-300"
          >
            📞 WhatsApp: 07035092983
          </a>
          <p>📍 Lagos, Nigeria</p>
          <p>🌐 www.examhub-africa.com</p>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10 py-6 text-center text-gray-400 text-sm px-4">
      © 2026 ExamHub Africa. All rights reserved.
    </div>
  </footer>
</div>

) }
