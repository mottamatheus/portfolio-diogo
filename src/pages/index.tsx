import { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';

import Logos from '../components/Logos';

const Home: NextPage = () => {
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
      <motion.div
        className="flex flex-col p-12 items-center justify-center h-screen   "
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.5,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          },
        }}
      >
        <h1>Olá, me chamo</h1>
        <span>Diogo Rocha</span>
        <span>Sou Desenvolvedor Web</span>
      </motion.div>
      <div
        id="sobre"
        className="flex flex-col md:flex-row p-12 items-center justify-center gap-8 "
      >
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 1,
              },
            },
          }}
        >
          <h1>Sobre mim...</h1>
          <span>
            Sou um desenvolvedor web, cursando ciência da computação e <br />
            aprendendo muito sobre tecnologia. Me especializando em sistemas
            <br />
            acessíveis e de boa performance, atualmente estou na empresa Agi,
            <br />
            usando algumas stacks como: React Js, Next Js, Typescript.
          </span>
        </motion.div>
        <div className="flex flex-col">
          <h1>Eu tenho experiencia em</h1>
          <Logos />
        </div>
      </div>
    </>
  );
};
export default Home;
