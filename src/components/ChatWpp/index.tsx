import { useCallback } from "react";
import { WhatsappLogo } from "phosphor-react";

const ChatWpp = () => {
  const phoneWpp = `${process.env.NEXT_PUBLIC_PHONE_WPP}`;
  const messageWpp =
    "Olá, tudo bem? Estou entrando em contato para tirar dúvidas.";

  const handlerRedirect = useCallback(() => {
    window.open(
      `https://api.whatsapp.com/send?phone=${phoneWpp}&text=${messageWpp}`,
      "_blank"
    );
  }, [phoneWpp, messageWpp]);

  return (
    <div
      className="fixed mr-6 w-8 h-8 bottom-24 right-1 rounded items-center z-50"
      role="link"
    >
      <WhatsappLogo
        onClick={handlerRedirect}
        size={48}
        alt="Whatsapp"
        color="green"
        className=" cursor-pointer "
      />
    </div>
  );
};

export { ChatWpp };
