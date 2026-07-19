import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | jador Properties Dubai | Get in Touch',
  description: 'Contact jador Properties for all your real estate needs in Dubai. Get expert advice, property inquiries, and personalized service. Located in Business Bay, Dubai.',
  keywords: 'contact jador Properties, Dubai real estate contact, property inquiry Dubai, real estate agent Dubai, jador Properties contact',
  alternates: {
    canonical: '/contactUs',
  },
  openGraph: {
    title: 'Contact Us | jador Properties Dubai',
    description: 'Contact jador Properties for all your real estate needs in Dubai. Get expert advice and personalized service.',
    url: 'https://jadorproperties.com/contactUs',
    siteName: 'jador Properties',
    images: [
      {
        url: '/images/bgImage.webp',
        width: 1200,
        height: 630,
        alt: 'Contact jador Properties',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | jador Properties Dubai',
    description: 'Contact jador Properties for all your real estate needs in Dubai.',
    images: ['/images/bgImage.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

