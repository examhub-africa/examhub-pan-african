"use client";

import { useState } from "react";
import {
  Search, Globe, BookOpen, GraduationCap, Download, 
  Moon, Sun, Bell, Trophy, Check, ChevronDown, Menu,
} from "lucide-react";

const translations = {
  EN: {
    tagline: "Past Questions for BEPC & Baccalaureate",
    teacherLogin: "Teacher Login",
    studentLogin: "Student Login",
    selectCountry: "Select Your Country",
    searchSubjects: "Search subjects...",
    premium: "Premium Access",
    subscribe: "Subscribe Now",
    pastQuestions: "Past Questions",
    howItWorks: "How it Works",
    updates: "Latest Updates",
    topStudents: "Top Students",
    offline: "Download for Offline",
    free: "Free",
    monthly: "Monthly",
    yearly: "Yearly",
    about: "About",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms",
    support: "Support",
  },
  FR: {
    tagline: "Épreuves du BEPC & Baccalauréat",
    teacherLogin: "Connexion Enseignant",
    studentLogin: "Connexion Élève",
    selectCountry: "Sélectionnez votre pays",
    searchSubjects: "Rechercher une matière...",
    premium: "Accès Premium",
    subscribe: "S'abonner",
    pastQuestions: "Épreuves Antérieures",
    howItWorks: "Comment ça marche",
    updates: "Nouvelles",
    topStudents: "Meilleurs Élèves",
    offline: "Télécharger hors ligne",
    free: "Gratuit",
    monthly: "Mensuel",
    yearly: "Annuel",
    about: "À propos",
    contact: "Contact",
    privacy: "Confidentialité",
    terms: "Conditions",
    support: "Support",
  },
};

const countries = [
  { name: "Benin Republic", flag: "🇧🇯" },
  { name: "Cameroon", flag: "🇨🇲" },
  { name: "Ghana", flag: "🇬🇭" },
  { name: "Gabon", flag: "🇬🇦" },
  { name: "Ivory Coast", flag: "🇨🇮" },
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "Senegal", flag: "🇸🇳" },
  { name: "Togo", flag: "🇹🇬" },
];

const subjects = [
  { icon: "📘", en: "Mathematics", fr: "Mathématiques", exam: "BEPC" },
  { icon: "⚛️", en: "Physics", fr: "Physique", exam: "Baccalaureate C" },
  { icon: "🧪", en: "Chemistry", fr: "Chimie", exam: "Baccalaureate D" },
  { icon: "🧬", en: "Biology", fr: "Biologie", exam: "Baccalaureate D" },
  { icon: "📖", en: "English", fr: "Anglais", exam: "BEPC" },
  { icon: "📝", en: "French", fr: "Français", exam: "BEPC" },
  { icon: "🏛️", en: "History", fr: "Histoire", exam: "Baccalaureate A" },
  { icon: "🌍", en: "Geography", fr: "Géographie", exam: "Baccalaureate A" },
];

const plans = [
  { name: "Free", price: "$0", features: ["Limited Questions", "Basic Access", "Ads Supported"] },
  { name: "Monthly", price: "$4.99", features: ["Unlimited Questions", "Offline Downloads", "Leaderboard Access"] },
  { name: "Yearly", price: "$39.99", features: ["Everything Included", "Priority Support", "Premium Mock Exams"] },
];

export default function BacBepcHomePage() {
  const [lang, setLang] = useState("EN");
  const [darkMode, setDarkMode] = useState(false);
  const t = translations[lang];

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? "bg-slate-950 text-white" : "bg-gradient-to-b from-blue-50 to-white text-slate-900"}`}>
      
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-white/70 dark:bg-slate-900/70">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="BacBepc Logo" className="w-12 h-12 object-contain" />
            <div>
              <h1 className="font-bold text-xl text-blue-900 dark:text-white">BacBepc</h1>
              <p className="text-xs text-slate-500">{t.tagline}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === "EN" ? "FR" : "EN")} className="px-3 py-2 rounded-xl bg-white/20 backdrop-blur-lg border border-white/20 flex items-center gap-2">
              <Globe size={16} /> {lang}
            </button>
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-xl bg-white/20 backdrop-blur-lg border border-white/20">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="md:hidden p-2 rounded-xl bg-blue-600 text-white"><Menu size={18} /></button>
          </div>
        </div>
      </header>

      {/* COUNTRY SELECTOR */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">{t.selectCountry}</h3>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border">
            All Countries <ChevronDown size={16} />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {countries.map((country) => (
            <button key={country.name} className="group p-5 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border-white/20 hover:scale-105 transition-all shadow-lg">
              <div className="text-4xl mb-3">{country.flag}</div>
              <p className="font-semibold text-sm">{country.name}</p>
            </button>
          ))}
        </div>
      </section>

      {/* SUBJECTS */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-3xl font-bold mb-2">BEPC & Baccalaureate</h3>
            <p className="text-slate-500">Practice with verified exam archives</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-4 text-slate-400" size={18} />
            <input type="text" placeholder={t.searchSubjects} className="w-full pl-12 pr-4 py-4 rounded-2xl border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl outline-none" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <div key={index} className="group bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-3xl border-white/20 p-6 hover:-translate-y-1 transition-all shadow-lg">
              <div className="text-5xl mb-5">{subject.icon}</div>
              <div className="mb-3"><span className="text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700">{subject.exam}</span></div>
              <h4 className="font-bold text-xl mb-2">{lang === "EN" ? subject.en : subject.fr}</h4>
              <p className="text-slate-500 mb-6">{t.pastQuestions}</p>
              <button className="w-full py-3 rounded-2xl bg-blue-700 text-white font-medium hover:bg-blue-800 transition">Open</button>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center text-slate-500">
          © 2026 BacBepc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}