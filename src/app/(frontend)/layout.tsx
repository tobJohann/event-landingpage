import GoogleTagManager from '@/components/features/Consent/components/GoogleTagManager'
import React from 'react'
import './styles.css'
import { plusJakartaSansFont, gelasioFont } from '@/lib/fonts'
import Providers from '@/providers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileFAB from '@/components/features/MobileFAB'

// TODO add metadata
export const metadata = {
  description:
    'Der ORS|25 ist das neue Symposium für Orthopädie und Rehabilitation. Austausch, Impulse und' +
    ' Vernetzung – am 26.09.2025 in Eisenberg. Jetzt anmelden.',
  title: 'Future Hospital',
}

export const revalidate = 1

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <Providers>
      <html lang="de" className={gelasioFont.className}>
        <head>
          <GoogleTagManager />
          <title>{metadata.title}</title>
          <meta name="apple-mobile-web-app-title" content="ORS|25" />
        </head>

        <body className={plusJakartaSansFont.className}>
          <Header />
          {children}
          <Footer />
          <MobileFAB />
        </body>
      </html>
    </Providers>
  )
}
