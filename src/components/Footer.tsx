'use client';
import localFont from 'next/font/local';
import { cn } from '@/utils/utils';
const goldenSignature = localFont({
  src: '../assets/GoldenSignature.otf',
  display: 'swap'
});

export default function Footer() {
  return (
    <>
      <div className="justify-centerpy-2 flex w-full select-none pt-6 font-light md:px-28 md:pb-2 ">
        <div className="container flex flex-col items-center justify-between md:flex-row">
          <div className={cn('text-5xl drop-shadow-2xl', goldenSignature.className)}></div>
          <div className="md:text-base">
            <p className="text-xs md:text-sm mb-2">DesignerBy @BurakSağlık</p>
          </div>
          <div className="nav-links flex gap-x-8 text-xs md:text-base"></div>
        </div>
      </div>
    </>
  );
}
