import { lazy } from 'react';

const Navigation = lazy(() => import('./header-navigation'));

export default function Header() {
  return (
    <header className="bg-gray-200 dark:bg-black">
      <div className="flex items-center justify-between px-10 mx-auto max-w-[1920px] py-9">
        <a
          href="/"
          className="text-black dark:text-white hover:text-blue-300 dark:hover:text-blue-300"
        >
          <h1 className="text-2xl font-semibold">DiogoDev</h1>
        </a>
        <Navigation />
      </div>
    </header>
  );
}
