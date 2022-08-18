import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

import Logos from '../components/Logos';

export default function Home() {
  const [rotate, setRotate] = useState(false);

  return (
    <>
      <Head>
        <title>Home | DiogoDev </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Sobre mim" />
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
          className="flex flex-col items-start justify-start h-auto  gap-4  md:justify-center md:items-center "
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-3xl md:text-6xl">Olá, me chamo</span>
          <h1 className="text-5xl text-yellow-400 md:text-6xl dark:text-yellow-200">
            Diogo Rocha
          </h1>
          <span className="text-2xl text-gray-400 md:text-4xl">
            Desenvolvedor Web
          </span>
        </motion.div>
        <div className="flex items-start justify-start h-auto">
          <motion.img
            src=" https://media-exp1.licdn.com/dms/image/C5603AQEhkWCsOb-r-A/profile-displayphoto-shrink_800_800/0/1632840014019?e=1666224000&v=beta&t=hxWrm6AqLLjllZw-7jh-5hgOZS0nt0vcjNqza0r0Pk0"
            alt="Diogo Rocha"
            className="border-4 border-yellow-200 rounded-full cursor-pointer w-72 h-72 md:h-96 md:w-96"
            animate={{ rotate: rotate ? 360 : 0 }}
            transition={{ duration: 1 }}
            onClick={() => setRotate(!rotate)}
          />
        </div>
      </div>

      <div
        id="sobre"
        className="flex flex-col items-center justify-center p-12  gap-8"
      >
        <div className="flex flex-col items-center justify-center md:w-2/4">
          <h1 className="text-4xl text-yellow-400 dark:text-yellow-200">
            Sobre mim...
          </h1>
          <span className="text-2xl ">
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
