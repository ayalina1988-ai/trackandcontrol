import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Montserrat, Lora } from 'next/font/google'
import Script from 'next/script'
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
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1133328009676287');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="font-serif antialiased">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1133328009676287&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
