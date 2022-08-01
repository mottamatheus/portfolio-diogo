import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Lightbulb, WhatsappLogo } from "phosphor-react";
import { useCallback } from "react";
import { Heading } from "../Heading";

const Header = () => {
  const phoneWpp = `${process.env.NEXT_PUBLIC_PHONE_WPP}`;
  const messageWpp =
    "Olá, tudo bem? Estou entrando em contato para tirar dúvidas.";

  const handlerRedirect = useCallback(() => {
    window.open(
      `https://api.whatsapp.com/send?phone=${phoneWpp}&text=${messageWpp}`,
      "_blank"
    );
  }, [phoneWpp, messageWpp]);

  const { theme, setTheme } = useTheme();
  const handlerTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  return (
    <>
      <header className="flex justify-center items-center py-4 space-x-10 ">
        <h1 className="text-3xl animate-bounce font-bold"> CláudiosTur</h1>
        <div className="flex flex-row items-center space-x-8 ">
          <a
            onClick={handlerRedirect}
            className="md:flex flex-row items-center hidden md:visible cursor-pointer bg-gray-900  text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 transition0"
          >
            Fale conosco
            <WhatsappLogo alt="Whatsapp" size={32} color="green" />
          </a>
          <Link href="/frota">
            <a className="md:flex hidden md:visible bg-gray-900   text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 transition">
              Frota
            </a>
          </Link>
        </div>
        <Lightbulb
          className="cursor-pointer "
          size={32}
          onClick={handlerTheme}
        />
      </header>
      <hr className="my-2 border-gray-700 s dark:border-gray-200 " />
    </>
  );
};

export { Header };
