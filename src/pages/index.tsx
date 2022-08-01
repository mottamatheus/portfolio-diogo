import { NextPage } from "next";
import Head from "next/head";

import { Card } from "../components/Card";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";

import Viagem from "../../public/img/viagem.png";
import Micro from "../../public/img/micro.png";
import Van from "../../public/img/van-car.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | ClaudiosTur </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Sobre a empresa" />
        <meta name="keywords" content="Aluguel de Van, Micro-Onibus, Viagem" />
      </Head>
      <div className="px-4 md:px-20 ">
        <div className="flex flex-col justify-center items-center md:flex-row  ">
          <Heading text="Empresa especializada em viagens, transporte escolar e freteamento." />
          <Card
            href="/frota"
            imgSrc={Viagem}
            layoutId={"viagem-example"}
            alt="imagem ilustrando viagens"
            height={420}
            width={594}
          />
        </div>

        <div className="flex flex-col  justify-center items-center md:flex-row">
          <Card
            href="/frota"
            imgSrc={Micro}
            layoutId={"micro-example"}
            alt="imagem ilustrativa de um micro-onibus"
            height={339}
            width={735}
          />
          <Heading text="Agilidade e comprometimento nos serviços prestados." />
        </div>
        <div className="flex flex-col  justify-center items-center md:flex-row">
          <Card
            href="/frota"
            imgSrc={Van}
            layoutId={"van-example"}
            alt="imagem ilustrativa de uma van"
            height={433}
            width={577}
          />
          <Heading text="Conheça nossa frota e faça um orçamento." />
        </div>
        <div className="flex flex-col  justify-center items-center md:flex-row">
          <Button href="/frota" title="Ver a Frota" />
        </div>
      </div>
    </>
  );
};
export default Home;
