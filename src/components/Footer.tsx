'use client';
import { cn } from '@/utils/utils';

export default function Footer() {
  return (
    <>
      <div className="justify-centerpy-2 flex w-full select-none pt-6 font-light md:px-28 md:pb-2 ">
        <div className="container flex flex-col items-center justify-between md:flex-row">
          <div className={cn('text-5xl drop-shadow-2xl')}></div>
          <div className="md:text-base">
            <p className="text-xs md:text-sm mb-2">DesignerBy @BurakSağlık</p>
          </div>
          <div className="nav-links flex gap-x-8 text-xs md:text-base"></div>
        </div>
      </div>
    </>
  );
}
