import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import './globals.css'
import Favicon from './favicon.ico';
import '@radix-ui/themes/styles.css';

const inter = Inter({ subsets: ['latin'] })
const mono = Space_Mono({ subsets: ['latin'], weight: ["400", "700"] })

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
    <html lang="en">
      <body className={`${mono.className} bg-[#1e1e24] text-white`}>
        {children}
      </body>
    </html>
  )
}
