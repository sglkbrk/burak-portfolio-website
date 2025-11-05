'use client';
import Link from 'next/link';
import { cn } from '@/utils/utils';

export default function Header() {
  const links = ['about', 'skills', 'Projects', 'contact'];
  return (
    <>
      <nav className="justify-centerpy-2 flex w-full select-none pt-6 font-light md:px-28 md:pb-2 " aria-label="Main navigation">
        <div className="container flex flex-col items-center justify-between md:flex-row">
          <div className={cn('text-5xl drop-shadow-2xl font-golden')}>
            <Link href="/" aria-label="Burak Sağlık - Home">Burak Saglık</Link>
          </div>
          <div className="nav-links flex gap-x-8 text-xs md:text-base" role="list">
            {links.map((link) => (
              <button
                key={link}
                className="cursor-pointer hover:underline focus:outline-none focus:underline"
                onClick={() => {
                  document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                }}
                aria-label={`Navigate to ${link} section`}
                role="listitem"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
