// Structured data (JSON-LD) helpers for SEO

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Evid Properties',
  url: 'https://evidproperties.com',
  logo: 'https://evidproperties.com/images/new_logo.png',
  description: 'Premium real estate solutions in Dubai. Expert agents, comprehensive market insights, and exceptional customer service.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2107, Al Manara Tower, Business Bay',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
    postalCode: '00000',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+971-54-252-4242',
      email: 'info@evidproperties.com',
      areaServed: 'AE',
      availableLanguage: ['English', 'Arabic', 'Hindi', 'Urdu'],
    },
  ],
  telephone: '+971-54-252-4242',
  email: 'info@evidproperties.com',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '25.1868',
    longitude: '55.2630',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '19:00',
  },
  sameAs: [
    'https://www.instagram.com/evidproperties/',
  ],
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150',
  },
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://evidproperties.com/#organization',
  name: 'Evid Properties',
  image: 'https://evidproperties.com/images/new_logo.png',
  url: 'https://evidproperties.com',
  telephone: '+971-54-252-4242',
  email: 'info@evidproperties.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2107, Al Manara Tower, Business Bay',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '25.1868',
    longitude: '55.2630',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '19:00',
  },
  priceRange: '$$',
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Evid Properties',
  url: 'https://evidproperties.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://evidproperties.com/buy?title={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const propertySchema = (property: {
  name: string
  description?: string
  image?: string
  price?: string
  currency?: string
  address?: string
  bedrooms?: number
  bathrooms?: number
  propertyType?: string
  url: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: property.name,
  description: property.description || property.name,
  image: property.image || 'https://evidproperties.com/images/placeholder.jpg',
  offers: property.price
    ? {
        '@type': 'Offer',
        price: property.price,
        priceCurrency: property.currency || 'AED',
        availability: 'https://schema.org/InStock',
        url: property.url,
      }
    : undefined,
  ...(property.address && {
    address: {
      '@type': 'PostalAddress',
      addressLocality: property.address,
      addressCountry: 'AE',
    },
  }),
  ...(property.bedrooms && { numberOfBedrooms: property.bedrooms }),
  ...(property.bathrooms && { numberOfBathroomsTotal: property.bathrooms }),
  ...(property.propertyType && { category: property.propertyType }),
})

export const articleSchema = (article: {
  headline: string
  description: string
  image?: string
  datePublished?: string
  dateModified?: string
  author?: string
  url: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.headline,
  description: article.description,
  image: article.image || 'https://evidproperties.com/images/placeholder.jpg',
  datePublished: article.datePublished || new Date().toISOString(),
  dateModified: article.dateModified || new Date().toISOString(),
  author: {
    '@type': 'Organization',
    name: article.author || 'Evid Properties',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Evid Properties',
    logo: {
      '@type': 'ImageObject',
      url: 'https://evidproperties.com/images/new_logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': article.url,
  },
})

