import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Header from '@/components/Header';
import Background from '@/components/Background';
import Footer from '@/components/Footer';
import Script from 'next/script';
import localFont from 'next/font/local';

const goldenSignature = localFont({
  src: '/fonts/GoldenSignature.otf',
  weight: '400', // Özel fontlarda genelde tek bir weight olur
  style: 'normal',
  variable: '--font-golden-signature',
  display: 'swap'
});

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Burak Sağlık | Web Developer & Photographer',
    template: '%s | Burak Sağlık'
  },
  metadataBase: new URL('https://www.buraksaglik.com'),
  alternates: {
    canonical: '/'
  },
  authors: [{ name: 'Burak Sağlık', url: 'https://github.com/sglkbrk' }],
  creator: 'Burak Sağlık',
  publisher: 'Burak Sağlık',
  description:
    "Explore Burak Sağlık's personal portfolio showcasing creative web development projects, modern UI/UX designs, and dynamic applications built with React, TypeScript, and Tailwind CSS. Let's collaborate!",
  keywords: [
    'Burak Sağlık',
    'Web Developer',
    'Frontend Developer',
    'React Developer',
    'TypeScript',
    'Next.js',
    'Photographer',
    'Portfolio',
    'SAP Fiori',
    'Vue.js',
    'JavaScript',
    'Tailwind CSS',
    'UI/UX Designer',
    'Turkey Developer'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.buraksaglik.com',
    siteName: 'Burak Sağlık Portfolio',
    title: 'Burak Sağlık | Web Developer & Photographer',
    description:
      "Explore Burak Sağlık's personal portfolio showcasing creative web development projects, modern UI/UX designs, and dynamic applications built with React, TypeScript, and Tailwind CSS. Let's collaborate!",
    images: [
      {
        url: 'https://www.buraksaglik.com/user.jpeg',
        alt: "Burak Sağlık's Portrait",
        width: 640,
        height: 800,
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Burak Sağlık | Web Developer & Photographer',
    description:
      "Explore Burak Sağlık's personal portfolio showcasing creative web development projects, modern UI/UX designs, and dynamic applications built with React, TypeScript, and Tailwind CSS. Let's collaborate!",
    images: ['https://www.buraksaglik.com/user.jpeg'],
    creator: '@brksglk'
  },
  verification: {
    google: 'google80648bdde75cfa94'
  },
  category: 'Portfolio',
  classification: 'Personal Website',
  other: {
    'theme-color': '#000000'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Burak Sağlık',
    jobTitle: 'Web Developer & Photographer',
    url: 'https://www.buraksaglik.com',
    image: 'https://www.buraksaglik.com/user.jpeg',
    sameAs: ['https://github.com/sglkbrk', 'https://www.instagram.com/brksglk', 'https://www.linkedin.com/in/burak-saglik/'],
    knowsAbout: [
      'Web Development',
      'Frontend Development',
      'React',
      'TypeScript',
      'Next.js',
      'Vue.js',
      'SAP Fiori',
      'JavaScript',
      'Photography'
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Sivas Cumhuriyet University'
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Detaysoft'
    }
  };

  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Burak Sağlık Portfolio',
    url: 'https://www.buraksaglik.com',
    author: {
      '@type': 'Person',
      name: 'Burak Sağlık'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.buraksaglik.com/?s={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }} />
      </head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-11GN8Y8ER7" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-11GN8Y8ER7');
          `}
      </Script>
      <Script
        strategy="afterInteractive"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7285329314913241"
      ></Script>
      <body className={`${montserrat.className} ${goldenSignature.variable}`}>
        <Header />
        <Background />
        <main className="container lg:px-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
