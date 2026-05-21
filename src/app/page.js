import { translations } from './translations'

export default function Home() {
  const t = translations.en // using English. Change to .fr for French

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600">
            {t.subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">{t.welcome}</h2>
          <p className="text-gray-700 leading-relaxed">
            {t.description}
          </p>
          
          <div className="mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>

      </div>
    </main>
  )
}