import './globals.css'
import dynamic from 'next/dynamic'

const SWRegister = dynamic(() => import('./sw-register'), { ssr: false })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SWRegister />
        {children}
      </body>
    </html>
  )
}