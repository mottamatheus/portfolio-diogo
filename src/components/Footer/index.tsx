import Link from 'next/link';
import FooterSocial from './footer-social';

const Footer = () => {
  return (
    <div className="flex flex-col mt-10 justify-center items-center bg-gray-200 dark:bg-black">
      <FooterSocial />

      <footer className="flex justify-center items-center p-6">
        <span className="text-md text-gray-900 bold  dark:text-gray-100 p-3">
          <Link href="https://www.linkedin.com/in/diogorochaa/">
            <a className="hover:underline">Desenvolvido por Diogo Rocha</a>
          </Link>
          <br /> . All Rights Reserved. © 2022
        </span>
      </footer>
    </div>
  );
};
export { Footer };
