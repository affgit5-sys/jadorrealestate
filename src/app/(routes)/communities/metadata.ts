import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luxury Communities in Dubai | Explore Dubai Neighborhoods | jador Properties',
  description: 'Explore Dubai\'s most prestigious communities and neighborhoods. Discover luxury communities offering unique lifestyles, world-class amenities, and prime locations.',
  keywords: 'Dubai communities, luxury neighborhoods Dubai, Dubai Marina, Palm Jumeirah, Downtown Dubai, communities Dubai, Dubai areas',
  alternates: {
    canonical: '/communities',
  },
  openGraph: {
    title: 'Luxury Communities in Dubai | jador Properties',
    description: 'Explore Dubai\'s most prestigious communities and neighborhoods with unique lifestyles and world-class amenities.',
    url: 'https://jadorproperties.com/communities',
    siteName: 'jador Properties',
    images: [
      {
        url: '/images/bgImage.webp',
        width: 1200,
        height: 630,
        alt: 'Luxury Communities in Dubai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Communities in Dubai | jador Properties',
    description: 'Explore Dubai\'s most prestigious communities and neighborhoods.',
    images: ['/images/bgImage.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

