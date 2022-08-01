import { NextPage } from "next";
import Head from "next/head";
import { Button } from "../../components/Button";

import { DataSlider } from "../../components/Slider/dataSlider";
import { dataSlider } from "../../data/dataSlider";

const FrotaPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frota | ClaudiosTur </title>
        <link role="link" rel="icon" href="/favicon.ico" />
        <meta name="description" content="Veículos da empresa" />
        <meta
          name="keywords"
          content="Aluguel de Van, Micro-Onibus, Viagem, Frota, Veículos"
        />
      </Head>
      <div className="flex flex-col items-center ">
        <DataSlider data={dataSlider} />
        <Button href="/" title="Voltar para o ínicio" aria-label="Voltar" />
      </div>
    </>
  );
};

export default FrotaPage;
