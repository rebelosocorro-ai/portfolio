import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata = {
  title: 'Socorro Rebelo | Data Scientist, GenAI & IT Specialist',
  description: 'Personal portfolio of Socorro Bonifacio Rebelo — Data Scientist, Generative AI Specialist, and Microsoft IT Support Specialist based in Lisbon, Portugal.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} font-sans`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  )
}
