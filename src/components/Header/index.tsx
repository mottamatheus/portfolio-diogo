import { lazy } from 'react';
import Link from 'next/link';

const Navigation = lazy(() => import('./header-navigation'));

export default function Header() {
  return (
    <header className="fixed z-50 w-full bg-gray-200 dark:bg-black">
      <div className="flex items-center justify-between px-10 mx-auto max-w-[1920px] py-9">
        <Link
          href="/"
          className="text-black cursor-pointer dark:text-white hover:text-blue-300 dark:hover:text-blue-300"
        >
          <h1 className="text-2xl font-semibold cursor-pointer">DiogoDev</h1>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
