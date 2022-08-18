import Link from 'next/link';

import FooterSocial from './footer-social';

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 bg-gray-200 dark:bg-black">
      <FooterSocial />
      <footer className="flex flex-col items-center justify-center p-6">
        <hr className="w-full my-4 border-black dark:border-white " />
        <span className="p-3 text-gray-900 text-md bold dark:text-gray-100">
          <Link href="https://www.linkedin.com/in/diogorochaa/">
            <a className="hover:underline">Desenvolvido por Diogo Rocha</a>
          </Link>
          <br /> . All Rights Reserved. © 2022
        </span>
      </footer>
    </div>
  );
}
export { Footer };
