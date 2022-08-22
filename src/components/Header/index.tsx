import { lazy } from 'react';
import Link from 'next/link';

const Navigation = lazy(() => import('./header-navigation'));

export default function Header() {
  return (
    <header className="fixed z-50 w-full bg-orange-500 dark:bg-black">
      <div className="flex items-center justify-between px-10 mx-auto max-w-[1920px] py-9">
        <Link href="/">
          <a className="text-2xl font-semibold text-white cursor-pointer dark:text-orange-500 hover:text-black dark:hover:text-white">
            DiogoDev
          </a>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
