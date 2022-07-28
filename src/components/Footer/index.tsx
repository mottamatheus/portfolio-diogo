import Link from "next/link";

const Footer = () => {
  return (
    <>
      <hr className="border-gray-700  dark:border-gray-200 " />

      <footer className="flex justify-center items-center p-6">
        <span className="text-md text-gray-900 bold  dark:text-gray-100">
          <Link href="https://www.linkedin.com/in/diogorochaa/">
            <a className="hover:underline">Desenvolvido por Diogo Rocha</a>
          </Link>
          . All Rights Reserved. © 2022
        </span>
      </footer>
    </>
  );
};
export default Footer;
