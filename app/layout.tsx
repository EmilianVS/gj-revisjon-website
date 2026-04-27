import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gyllstrøm & Johansen AS | Statsautoriserte Revisorer i Drammen',
  description: 'Erfarne statsautoriserte revisorer i Drammen. Revisjon, årsregnskap, skattemelding og økonomisk rådgivning. Personlig kontakt og høy integritet.',
  keywords: 'revisor, statsautorisert revisor, Drammen, revisjon, årsregnskap, skattemelding, økonomisk rådgivning, skatterådgivning, regnskap',
  authors: [{ name: 'Gyllstrøm & Johansen AS' }],
  creator: 'Gyllstrøm & Johansen AS',
  publisher: 'Gyllstrøm & Johansen AS',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://gj-revisjon.vercel.app',
    siteName: 'Gyllstrøm & Johansen AS',
    title: 'Gyllstrøm & Johansen AS | Statsautoriserte Revisorer',
    description: 'Erfarne statsautoriserte revisorer i Drammen. Revisjon, årsregnskap, skattemelding og økonomisk rådgivning.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gyllstrøm & Johansen AS | Statsautoriserte Revisorer',
    description: 'Erfarne statsautoriserte revisorer i Drammen.',
  },
  alternates: {
    canonical: 'https://gj-revisjon.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nb">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#102a43" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Gyllstrøm & Johansen AS',
              description: 'Statsautoriserte revisorer i Drammen',
              url: 'https://gj-revisjon.vercel.app',
              logo: 'https://gj-revisjon.vercel.app/logo.png',
              telephone: ['+4791542409', '+4790821756'],
              email: 'rune@gjrevisjon.no',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Muusøya 1',
                addressLocality: 'Drammen',
                postalCode: '3023',
                addressCountry: 'NO',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '59.7439',
                longitude: '10.2045',
              },
              openingHours: 'Mo-Fr 08:00-16:00',
              priceRange: '$$',
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}