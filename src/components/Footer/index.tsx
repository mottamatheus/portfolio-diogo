import FooterSocial from './footer-social';

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 bg-orange-500 dark:bg-black">
      <FooterSocial />
      <footer className="flex flex-col items-center justify-center p-6">
        <hr className="w-full my-4  " />
        <a
          href="https://www.linkedin.com/in/diogorochaa/"
          className="text-white dark:text-orange-500 hover:underline"
          target="_blank"
          rel="noreferrer"
          aria-label="Linkedin"
          type="link"
        >
          Desenvolvido por Diogo Rocha
        </a>
        <span className="text-white dark:text-orange-500">
          . All Rights Reserved. © 2022
        </span>
      </footer>
    </div>
  );
}
export { Footer };
