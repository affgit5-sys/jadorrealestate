import React from 'react';
import { Metadata } from 'next';
import HeroSection from '../../../view/list-property/HeroSection';
import WhyEvidProperties from '../../../view/list-property/WhyEvidProperties';
import HowItWorks from '../../../view/list-property/HowItWorks';
import ClientTestimonials from '../../../view/list-property/ClientTestimonials';
import ContactForm from '../../../view/list-property/ContactForm';
import BuyPreview from '../../../view/list-property/BuyPreview';

export const metadata: Metadata = {
  title: 'List Your Property in Dubai - Sell or Rent with Evid Properties | 0% Fees',
  description: 'List your luxury property in Dubai with Evid Properties - UAE\'s most awarded real estate agency. Zero fees, premium marketing, global reach. Sell or rent your property with Dubai\'s trusted real estate experts. Get free property valuation today.',
  keywords: 'list property Dubai, sell property Dubai, rent property Dubai, property listing Dubai, free property listing Dubai, property valuation Dubai',
  alternates: {
    canonical: '/list-your-property',
  },
  openGraph: {
    title: 'List Your Property in Dubai - Evid Properties | 0% Fees',
    description: 'List your luxury property in Dubai with Evid Properties. Zero fees, premium marketing, global reach.',
    url: 'https://evidproperties.com/list-your-property',
    siteName: 'Evid Properties',
    images: [
      {
        url: '/images/bgImage.webp',
        width: 1200,
        height: 630,
        alt: 'List Your Property in Dubai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'List Your Property in Dubai - Evid Properties | 0% Fees',
    description: 'List your luxury property in Dubai with Evid Properties. Zero fees, premium marketing.',
    images: ['/images/bgImage.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ListYourPropertyPage() {
  return (
    <div className="bg-white text-sm md:text-base">
      <HeroSection />
      <WhyEvidProperties />
      <BuyPreview />
      <HowItWorks />
      <ClientTestimonials />
      <ContactForm />
    </div>
  );
}
