import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Header from '@/components/Header';
import Background from '@/components/Background';
import Footer from '@/components/Footer';

const montserrat = Montserrat({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Burak Sağlık | Personal',
  metadataBase: new URL('https://www.buraksaglik.com'),
  alternates: {
    canonical: '/'
  },
  authors: [{ name: 'Burak Sağlık', url: 'https://github.com/sglkbrk' }],
  description: "Burak Sağlık's personal portfolio website",
  openGraph: {
    title: 'Burak Sağlık | Personal',
    description: "Burak Sağlık's personal portfolio website",
    images: [
      {
        url: '/IMG_0419.jpeg',
        alt: "Burak Sağlık's Portrait",
        width: 640,
        height: 800
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <Background />
        <main className="container lg:px-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
