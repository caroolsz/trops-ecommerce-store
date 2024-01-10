import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import Footer from '@/components/footer'
import NavBar from '@/components/nav-bar'

import './globals.css'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trops',
  description: 'Loja de artigos de desporto!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
