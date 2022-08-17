import Link from 'next/link';
import { FacebookLogo, InstagramLogo } from 'phosphor-react';

const FooterSocial = () => {
  return (
    <div className="flex flex-row">
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
    </div>
  );
};
export default FooterSocial;
