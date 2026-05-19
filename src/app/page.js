import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto">
      <header className="bg-white px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">🎓</div>
          <span className="text-xl font-bold">
            <span className="text-blue-600">Bac</span>
            <span className="text-green-600">Bepc</span>
            <span className="text-gray-600 text-sm">.com</span>
          </span>
        </div>
        <button className="p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <div className="mx-4 mt-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1 bg-green-500 text-xs px-3 py-1 rounded-full mb-3">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Réussir, c&apos;est possible !
          </div>
          <h1 className="text-3xl font-bold mb-2">
            Sujets BEPC & BAC<br/>
            <span className="text-green-400">200 CFA / PDF</span>
          </h1>
          <p className="text-sm text-blue-100 mb-4">
            Télécharge instantanément les anciens sujets corrigés et prépare-toi pour l'examen.
          </p>
          <div className="flex gap-4 mb-4">
            <div className="flex items-center gap-1 text-xs">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
              </svg>
              Téléchargement instantané
            </div>
            <div className="flex items-center gap-1 text-xs">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 0">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Corrections incluses
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-32 h-32 bg-blue-500/30 rounded-tl-full"></div>
      </div>

      <div className="mx-4 mt-4 bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm">
        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold">Paiement 100% sécurisé</p>
          <p className="text-xs text-gray-500">avec Paystack</p>
        </div>
        <div className="flex gap-2 text-xs font-bold">
          <span className="text-blue-600">Paystack</span>
          <span className="text-yellow-600">MTN</span>
          <span className="text-orange-600">Orange</span>
        </div>
      </div>

      <div className="mx-4 mt-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold text-gray-800">Choisis ton pays</h2>
          <Link href="#" className="text-blue-600 text-sm">Voir tout →</Link>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { name: 'Cameroun', flag: '🇨🇲' },
            { name: "Côte d'Ivoire", flag: '🇨🇮' },
            { name: 'Sénégal', flag: '🇸🇳' },
            { name: 'Togo', flag: '🇹🇬' },
            { name: 'Mali', flag: '🇲🇱' },
            { name: 'Bénin', flag: '🇧🇯' },
          ].map((country) => (
            <button key={country.name} className="bg-white p-3 rounded-xl shadow-sm flex-col items-center gap-1 hover:bg-blue-50">
              <span className="text-2xl">{country.flag}</span>
              <span className="text-xs font-medium">{country.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mx-4 mt-6 mb-24">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-1">
            <span className="text-orange-500">🔥</span> Sujets populaires
          </h2>
          <Link href="#" className="text-blue-600 text-sm">Voir tout →</Link>
        </div>
        <div className="space-y-3">
          {[
            { exam: 'BEPC 2024', subject: 'Mathématiques', country: 'Cameroun', price: '200 CFA' },
            { exam: 'BAC 2024', subject: 'Philosophie', country: "Côte d'Ivoire", price: '200 CFA' },
            { exam: 'BEPC 2023', subject: 'Français', country: 'Sénégal', price: '200 CFA' },
          ].map