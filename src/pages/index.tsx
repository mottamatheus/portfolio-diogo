import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Card from "../components/Card";
import Heading from "../components/Heading";

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.7,
    },
  },
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | ClaudiosTur </title>
        <link role="link" rel="icon" href="/images/favicon.png" />
        <meta name="description" content="Sobre a empresa" />
        <meta name="keywords" content="Aluguel de Van, Micro-Onibus, Viagem" />
      </Head>
      <div className="px-4 md:px-20">
        <div className="flex flex-col justify-center items-center md:flex-row  ">
          <Heading text="Empresa especializada em viagens, transporte escolar e freteamento." />
          <Card
            href="/van"
            imgSrc={"/img/viagem.png"}
            layoutId={"van-example"}
            alt="imagem ilustrando viagens"
          />
        </div>

        <div className="flex flex-col  justify-center items-center md:flex-row">
          <Card
            href="/micro"
            imgSrc={"/img/micro.png"}
            layoutId={"micro-example"}
            alt="imagem ilustrativa de um micro-onibus"
          />
          <Heading text="Agilidade e comprometimento nos serviços prestados." />
        </div>
        <div className="flex flex-col  justify-center items-center md:flex-row">
          <Heading text="Conheça nossa frota e faça um orçamento." />

          <Card
            href="/van"
            imgSrc={"/img/van-car.png"}
            layoutId={"van-example"}
            alt="imagem ilustrativa de uma van"
          />
        </div>
      </div>
    </>
  );
};
export default Home;
