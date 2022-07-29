import { motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const VanPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frota | ClaudiosTur </title>
        <link role="link" rel="icon" href="/images/favicon.png" />
        <meta name="description" content="Veículos da empresa" />
        <meta
          name="keywords"
          content="Aluguel de Van, Micro-Onibus, Viagem, Frota, Veículos"
        />
      </Head>

      <div className="flex flex-col items-center">
        <motion.img
          src="/img/van-car.png"
          layoutId="nextjs-logo"
          transition={{ duration: 0.5 }}
        />
        <div>
          <h1 className="font-bold text-2xl">Especificações </h1>
          <p>Modelo: Renault Master Executiva</p>
          <p>Capacidade: 15 lugares</p>
          <p>Cor: Cinza Acier </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 space-x-4"
        >
          <Link href="/">
            <a className="bg-gray-900  text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 transition">
              Voltar para a Home
            </a>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default VanPage;
