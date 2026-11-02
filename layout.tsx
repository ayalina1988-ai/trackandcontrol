import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Montserrat, Lora } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' })
const lora = Lora({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-lora', display: 'swap' })

export const metadata: Metadata = {
  title: 'Track & Control — Le tableur budget qui clarifie vos finances',
  description:
    'Tableur Google Sheets de budget pré-rempli. Graphiques automatiques, vision complète sur 1 page. 6,99€ paiement unique, sans abonnement.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0F172A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${lora.variable} bg-[#0F172A]`}>
      <body className="font-serif antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
