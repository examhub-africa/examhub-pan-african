"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Poppins } from 'next/font/google';
import { Moon, Sun, Globe, Search, BookOpen, FileText, Users, Award } from 'lucide-react';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

const countries = [
  { name: 'Benin Republic', code: 'BJ', flag: '🇧🇯', exam: 'Bac/BEPC' },
  { name: 'Nigeria', code: 'NG', flag: '🇳🇬', exam: 'WAEC/NECO/JAMB' },
  { name: 'Ghana', code: 'GH', flag: '🇬🇭', exam: 'WASSCE/BECE' },
  { name: 'Senegal', code: 'SN', flag: '🇸🇳', exam: 'Bac/BFEM' },
  { name: 'Ivory Coast', code: 'CI', flag: '🇨🇮', exam: 'Bac/BEPC' },
  { name: 'Cameroon', code: 'CM', flag: '🇨🇲', exam: 'GCE/Bac' },
  { name: 'Kenya', code: 'KE', flag: '🇰🇪', exam: 'KCSE/KCPE' },
  { name: 'South Africa', code: 'ZA', flag: '🇿🇦', exam: 'NSC' },
];

const subjects = [
  { name: 'Mathematics', icon: BookOpen, color: 'bg-blue-500' },
  { name: 'Physics', icon: Award, color: 'bg-purple-500' },
  { name: 'Chemistry', icon: FileText, color: 'bg-green-500' },
  { name: 'Biology', icon: Users, color: 'bg-orange-500' },
  { name: 'English', icon: BookOpen, color: 'bg-red-500' },
  { name: 'French', icon: Globe, color: 'bg-indigo-500' },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [lang, setLang] = useState('EN');

  const theme = {
    bg: darkMode ? 'bg-gray-900' : 'bg-gray-50',
    card: darkMode ? 'bg-gray-800' : 'bg-white',
    text: darkMode ? 'text-gray-100' : 'text-gray-900',
    textMuted: darkMode ? 'text-gray-400' : 'text-gray-600',
    border: darkMode ? 'border-gray-700' : 'border-gray-200',
  };

  return (
    <main className={`${poppins.className} min-h-screen ${theme.bg} ${theme.text}`}>
      {/* Navbar */}
      <nav className={`${theme.card} border-b ${theme.border} sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold">BacBepc</span>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setLang(lang === 'EN' ? 'FR' : 'EN')}
                className={`px-3 py-1 rounded-lg border ${theme.border} ${theme.textMuted} hover:bg-gray-100 dark:hover:bg-gray-700`}
              >
                {lang}
              </button>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg border ${theme.border} ${theme.textMuted} hover:bg-gray-100 dark:hover:bg-gray-700`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Link href="/teacher/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Teacher Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero + Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Pan-African Exam Hub
          </h1>
          <p className={`text-lg ${theme.textMuted} mb-6`}>
            Past questions, class notes, and assessments for Bac, BEPC, WAEC & more
          </p>
          
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search your school or teacher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 ${theme.border} ${theme.card} focus:border-blue-500 outline-none`}
            />
          </div>
        </div>

        {/* Country Selector */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Select Your Country</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {countries.map((country) => (
              <button
                key={country.code}
                onClick={() => setSelectedCountry(country)}
                className={`p-6 rounded-xl border-2 transition-all hover:scale-105 ${
                  selectedCountry?.code === country.code 
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' 
                    : `${theme.border} ${theme.card} hover:border-blue-400`
                }`}
              >
                <div className="text-4xl mb-2">{country.flag}</div>
                <div className="font-semibold">{country.name}</div>
                <div className={`text-sm ${theme.textMuted}`}>{country.exam}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Subjects */}
        {selectedCountry && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              {selectedCountry.name} Subjects
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {subjects.map((subject) => (
                <Link
                  key={subject.name}
                  href={`/subject/${subject.name.toLowerCase()}`}
                  className={`${theme.card} p-6 rounded-xl border ${theme.border} hover:shadow-lg transition-all text-center`}
                >
                  <div className={`${subject.color} w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <subject.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-medium">{subject.name}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <footer className={`${theme.card} border-t ${theme.border} mt-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className={theme.textMuted}>© 2026 BacBepc. Empowering African Students.</p>
        </div>
      </footer>
    </main>
  );
}