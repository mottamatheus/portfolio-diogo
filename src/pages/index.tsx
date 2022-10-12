import { useState } from 'react';
import Logos from '@components/Logos';
import Perfil from '@images/perfil.jpeg';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const [rotate, setRotate] = useState(false);

  return (
    <>
      <Head>
        <title>Home | DiogoDev </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://portfolio-diogo.vercel.app/" />
        <meta name="description" content="Sobre mim" key="title" />
        <meta
          name="keywords"
          content="Desenvolvimento, Front-End, ReactJs, NextJs"
        />
      </Head>
      <div
        id="home"
        className="flex flex-col items-center justify-center w-full h-screen md:flex-row gap-11 md:gap-6"
      >
        <motion.div
          className="flex flex-col items-start justify-start h-auto mt-24 md:mt-0 gap-4 md:justify-center md:items-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="mt-24 text-4xl text-orange-500 md:mt-0 dark:text-white md:text-6xl">
            Olá, <br /> me chamo
            <br /> Diogo Rocha
            <br /> Desenvolvedor Web
          </h1>
        </motion.div>
        <div className="flex items-start justify-start h-auto">
          <motion.div
            animate={{ rotate: rotate ? 360 : 0 }}
            transition={{ duration: 1 }}
            onClick={() => setRotate(!rotate)}
            className="flex items-center justify-center border-4 border-orange-500 rounded-full dark:border-white"
          >
            <Image
              className=" rounded-full cursor-pointer "
              src={Perfil}
              alt="Imagem de identificação"
              width={384}
              height={384}
            />
          </motion.div>
        </div>
      </div>

      <div
        id="sobre"
        className="flex flex-col items-center justify-center p-12 mt-10 md:mt-0 gap-8"
      >
        <div className="flex flex-col items-center justify-center gap-3 md:w-2/4">
          <span className="text-4xl text-orange-500">Sobre mim...</span>
          <span className="text-2xl">
            Sou um desenvolvedor web, cursando ciência da computação e
            aprendendo muito sobre tecnologia. Me especializando em sistemas
            acessíveis e de boa performance, atualmente estou usando algumas
            stacks como: React Js, Next Js, Typescript.
          </span>
          <Logos />
        </div>
      </div>
    </>
  );
}
