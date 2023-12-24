import type { Metadata } from 'next'
import { Inter, DM_Mono } from 'next/font/google'
import './globals.css'
import Favicon from './favicon.ico';
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })
const mono = DM_Mono({ subsets: ['latin'], weight: ["300", "400", "500"] })

export const metadata: Metadata = {
  title: 'no-419 | Call out scammers online',
  description: 'Chasing scammers off the internet all 2024',
  icons: [{ rel: 'icon', url: Favicon.src }]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${mono.className} bg-[#1e1e24] text-white`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
