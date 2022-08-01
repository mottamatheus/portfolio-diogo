import Link from "next/link";
import { InstagramLogo, FacebookLogo } from "phosphor-react";

const Footer = () => {
  return (
    <div className="flex flex-col mt-12 justify-center items-center">
      <h1 className="text-gray-900 text-2xl font-bold dark:text-gray-100">
        Contatos
      </h1>
      <p className="text-gray-900 text-xl dark:text-gray-100">54 991061300</p>
      <p className="text-gray-900 text-xl dark:text-gray-100">
        Passo Fundo - RS
      </p>
      {/* <div className="flex flex-row">
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          aria-label="facebook"
        >
          <FacebookLogo
            className="cursor-pointer"
            size={32}
            color="#0000ff"
            href="https://www.google.com"
            alt="Facebook"
          />
        </Link>
        <Link
          href="https://www.instagram.com"
          target="_blank"
          aria-label="instagram"
        >
          <InstagramLogo
            size={32}
            color="#ff0000"
            alt="Instagram"
            className="cursor-pointer"
          />
        </Link>
      </div> */}
      <footer className="flex justify-center items-center p-6">
        <span className="text-md text-gray-900 bold  dark:text-gray-100">
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
