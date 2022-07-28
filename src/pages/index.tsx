import Card from "../components/Card";
import ChatWpp from "../components/ChatWpp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Heading from "../components/Heading";

export default function Home() {
  return (
    <div className="px-4 md:px-20">
      <Header />
      <div className="flex flex-col justify-center items-center md:flex-row  ">
        <Heading text="Agilidade e comprometimento nos serviços prestados." />
        <Card imgSrc={"/img/van-car.png"} layoutId={"van-example"} alt="" />
      </div>

      <div className="flex flex-col justify-center items-center  md:flex-row ">
        <Card imgSrc={"/img/viagem.png"} layoutId={"nextjs-logo"} alt="" />
        <Heading text="Somos referência em viagens, transporte escolar e freteamento." />
      </div>

      <div className="flex flex-col  justify-center items-center md:flex-row">
        <Heading text="Conheça nossa frota e faça um orçamento." />
        <Card
          imgSrc={"/img/van-car.png"}
          layoutId={"tailwind-logo"}
          alt="imagem ilustrativa de uma van"
        />
      </div>
      <ChatWpp />
      <Footer />
    </div>
  );
}
