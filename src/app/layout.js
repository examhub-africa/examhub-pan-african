import './globals.css'
import dynamic from 'next/dynamic'

const SWRegister = dynamic(() => import('./sw-register'), { ssr: false })

export const metadata = {
  title: 'BacBepc - Sujets BEPC & BAC',
  description: 'Téléchargez les sujets BEPC & BAC Cameroun 200 CFA',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'BacBepc',
  },
  icons: {
    icon: '/icon-192.png',
    apple: '/icon-512.png',
  }
}

export const viewport = {
  themeColor: '#16a34a'
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <SWRegister />
        <main className="pb-16 min-h-screen">
          {children}
        </main>
        <nav className="fixed bottom-0 left-0 right-0 bg-green-600 text-white shadow-lg z-50">
          <div className="flex justify-around items-center h-14">
            <a href="/" className="flex flex-col items-center text-xs">
              <span>🏠</span>
              <span>Accueil</span>
            </a>
            <a href="/sujets" className="flex flex-col items-center text-xs">
              <span>📄</span>
              <span>Sujets</span>
            </a>
            <a href="/contact" className="flex flex-col items-center text-xs">
              <span>💬</span>
              <span>Contact</span>
            </a>
          </div>
        </nav>
      </body>
    </html>
  )
}