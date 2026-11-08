'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const translations = {
  en: {
    login: 'Login',
    join: 'Join Now',
    tagline: 'ONE EUROPE. ONE COMMUNITY.',
    heading: 'Connect with Your European Community',
    description: 'Find jobs, housing, services and friends. Everything you need, in one place.',
    start: 'Get Started',
    explore: 'Explore EURO CONNECT',
    categories: [
      { icon: '💼', title: 'Find Jobs', description: 'Discover jobs across Europe.', href: '/jobs' },
      { icon: '🏠', title: 'Find Housing', description: 'Search rooms and apartments.', href: '/housing' },
      { icon: '🛍️', title: 'Marketplace', description: 'Buy and sell within your community.', href: '/marketplace' },
      { icon: '👥', title: 'Community', description: 'Meet people and make connections.', href: '/community' },
      { icon: '🤝', title: 'Local Services', description: 'Find helpful services nearby.', href: '/services' },
      { icon: '💬', title: 'Messaging', description: 'Stay connected with others.', href: '/messages' },
    ],
  },
  it: {
    login: 'Accedi',
    join: 'Iscriviti',
    tagline: 'UN EUROPA. UNA COMUNITÀ.',
    heading: 'Connettiti con la tua comunità europea',
    description: 'Trova lavoro, alloggio, servizi e amici. Tutto ciò di cui hai bisogno, in un unico posto.',
    start: 'Inizia ora',
    explore: 'Esplora EURO CONNECT',
    categories: [
      { icon: '💼', title: 'Trova lavoro', description: 'Scopri offerte di lavoro in Europa.', href: '/jobs' },
      { icon: '🏠', title: 'Trova alloggio', description: 'Cerca camere e appartamenti.', href: '/housing' },
      { icon: '🛍️', title: 'Mercatino', description: 'Compra e vendi nella tua comunità.', href: '/marketplace' },
      { icon: '👥', title: 'Comunità', description: 'Conosci persone e crea connessioni.', href: '/community' },
      { icon: '🤝', title: 'Servizi locali', description: 'Trova servizi utili nelle vicinanze.', href: '/services' },
      { icon: '💬', title: 'Messaggi', description: 'Resta in contatto con gli altri.', href: '/messages' },
    ],
  },
  bn: {
    login: 'লগইন',
    join: 'যোগ দিন',
    tagline: 'এক ইউরোপ। এক কমিউনিটি।',
    heading: 'ইউরোপের কমিউনিটির সঙ্গে যুক্ত হোন',
    description: 'চাকরি, বাসস্থান, সার্ভিস এবং বন্ধু খুঁজুন। আপনার প্রয়োজনীয় সবকিছু এক জায়গায়।',
    start: 'শুরু করুন',
    explore: 'EURO CONNECT ঘুরে দেখুন',
    categories: [
      { icon: '💼', title: 'চাকরি খুঁজুন', description: 'ইউরোপজুড়ে চাকরি খুঁজুন।', href: '/jobs' },
      { icon: '🏠', title: 'বাসস্থান খুঁজুন', description: 'রুম ও অ্যাপার্টমেন্ট খুঁজুন।', href: '/housing' },
      { icon: '🛍️', title: 'মার্কেটপ্লেস', description: 'কেনাবেচা করুন।', href: '/marketplace' },
      { icon: '👥', title: 'কমিউনিটি', description: 'নতুন মানুষের সঙ্গে পরিচিত হোন।', href: '/community' },
      { icon: '🤝', title: 'স্থানীয় সার্ভিস', description: 'কাছাকাছি প্রয়োজনীয় সার্ভিস খুঁজুন।', href: '/services' },
      { icon: '💬', title: 'মেসেজিং', description: 'অন্যদের সঙ্গে যোগাযোগ রাখুন।', href: '/messages' },
    ],
  },
}

export default function HomePage() {
  const [language, setLanguage] = useState<'en' | 'it' | 'bn'>('en')
  const t = translations[language]

  useEffect(() => {
    const savedLanguage = localStorage.getItem('euro-connect-language')
    if (savedLanguage === 'en' || savedLanguage === 'it' || savedLanguage === 'bn') {
      setLanguage(savedLanguage)
    }
  }, [])

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap justify-between items-center gap-4">
          <h1 className="text-2xl font-bold text-blue-700">
            EURO CONNECT
          </h1>

          <div className="flex items-center gap-4">
            <select
              value={language}
              onChange={(e) => {
                const selectedLanguage = e.target.value as 'en' | 'it' | 'bn'
                setLanguage(selectedLanguage)
                localStorage.setItem('euro-connect-language', selectedLanguage)
              }}
              className="border rounded-lg px-3 py-2 text-gray-800"
              aria-label="Select language"
            >
              <option value="en">🇬🇧 English</option>
              <option value="it">🇮🇹 Italiano</option>
              <option value="bn">🇧🇩 বাংলা</option>
            </select>

            <Link href="/login" className="text-gray-700">
              {t.login}
            </Link>

            <Link
              href="/register"
              className="bg-blue-700 text-white px-5 py-2 rounded-lg"
            >
              {t.join}
            </Link>
          </div>
        </div>
      </header>

      <section className="max-w-5xl mx-auto text-center px-6 py-24">
        <p className="text-blue-700 font-semibold mb-4">
          {t.tagline}
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          {t.heading}
        </h2>

        <p className="text-lg text-gray-600 mb-10">
          {t.description}
        </p>

        <Link
          href="/register"
          className="inline-block bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold"
        >
          {t.start}
        </Link>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          {t.explore}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.categories.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="bg-white p-7 rounded-2xl shadow-sm border hover:shadow-md transition block"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-white text-center py-8">
        EURO CONNECT © 2026 — {t.tagline}
      </footer>
    </main>
  )
}