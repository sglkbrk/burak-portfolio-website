'use client';
import Link from 'next/link';
import { cn } from '@/utils/utils';

export default function Header() {
  const links = ['about', 'skills', 'Projects', 'contact'];
  return (
    <>
      <nav className="justify-centerpy-2 flex w-full select-none pt-6 font-light md:px-28 md:pb-2 ">
        <div className="container flex flex-col items-center justify-between md:flex-row">
          <div className={cn('text-5xl drop-shadow-2xl font-golden')}>
            <Link href="/">Burak Saglık</Link>
          </div>
          <div className="nav-links flex gap-x-8 text-xs md:text-base">
            {links.map((link) => (
              <span
                key={link}
                className="cursor-pointer"
                onClick={() => {
                  document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </span>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
