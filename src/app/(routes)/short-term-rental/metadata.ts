import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Short-Term Rental Services in Dubai | Vacation Rentals | Evid Properties',
  description: 'Premium short-term rental services in Dubai. Manage your vacation rental property or find the perfect short-term accommodation. Expert property management for owners and guests.',
  keywords: 'short-term rental Dubai, vacation rentals Dubai, Airbnb management Dubai, holiday rentals Dubai, short-term accommodation Dubai, property management Dubai',
  alternates: {
    canonical: '/short-term-rental',
  },
  openGraph: {
    title: 'Short-Term Rental Services in Dubai | Evid Properties',
    description: 'Premium short-term rental services in Dubai. Manage your vacation rental property or find the perfect accommodation.',
    url: 'https://evidproperties.com/short-term-rental',
    siteName: 'Evid Properties',
    images: [
      {
        url: '/images/bgImage.webp',
        width: 1200,
        height: 630,
        alt: 'Short-Term Rental Services in Dubai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Short-Term Rental Services in Dubai | Evid Properties',
    description: 'Premium short-term rental services in Dubai.',
    images: ['/images/bgImage.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

