import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'

// Playfair Display: serifada de display com personalidade retrô — suporte total de override no Next.js
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Garagem 57 — Onde o motor parou, o sabor começou.',
  description:
    'Restaurante temático de carros clássicos em São Paulo. Culinária brasileira premium em ambiente vintage sofisticado.',
  openGraph: {
    title: 'Garagem 57',
    description: 'Onde o motor parou, o sabor começou.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  )
}
