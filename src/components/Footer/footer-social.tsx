import { FacebookLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';

function FooterSocial() {
  return (
    <div className="flex flex-row mt-1">
      <a
        rel="noreferrer"
        type="link"
        href="https://www.facebook.com/diogo.rocha.1042/"
        target="_blank"
        aria-label="facebook"
      >
        <FacebookLogo
          className="cursor-pointer hover:text-blue-600"
          size={50}
          alt="Facebook"
        />
      </a>
      <a
        rel="noreferrer"
        type="link"
        href="https://www.instagram.com/diogo_rochaaa"
        target="_blank"
        aria-label="instagram"
      >
        <InstagramLogo
          size={50}
          alt="Instagram"
          className="cursor-pointer hover:text-red-500"
        />
      </a>
      <a
        rel="noreferrer"
        type="link"
        href="https://www.linkedin.com/in/diogorochaa/"
        target="_blank"
        aria-label="instagram"
      >
        <LinkedinLogo
          size={50}
          alt="Linkedin"
          className="cursor-pointer hover:text-blue-800"
        />
      </a>
    </div>
  );
}
export default FooterSocial;
