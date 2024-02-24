import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import Footer from '@/components/footer'
import NavBar from '@/components/nav-bar'

import './globals.css'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'

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
        <ModalProvider />
        <ToastProvider />

        <div className='h-full flex flex-col justify-between'>
          <div>
            <NavBar />
            {children}
          </div>
          
          <Footer />
        </div>
       
      </body>
    </html>
  )
}
