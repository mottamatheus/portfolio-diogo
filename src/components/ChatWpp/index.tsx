import { useCallback } from 'react';
import { WhatsappLogo } from 'phosphor-react';

function ChatWpp() {
  const phoneWpp = `${process.env.NEXT_PUBLIC_PHONE_WPP}`;
  const messageWpp = 'Olá, vim do portfólio!';

  const handlerRedirect = useCallback(() => {
    window.open(
      `https://api.whatsapp.com/send?phone=${phoneWpp}&text=${messageWpp}`,
      '_blank',
    );
  }, [phoneWpp, messageWpp]);

  return (
    <div className="fixed z-50 items-center w-8 h-8 mr-6 rounded bottom-24 right-1">
      <WhatsappLogo
        onClick={handlerRedirect}
        size={48}
        alt="Whatsapp"
        color="green"
        className=" cursor-pointer "
      />
    </div>
  );
}

export { ChatWpp };
