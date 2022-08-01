import { motion } from "framer-motion";

type FleetProps = {
  img: string;
  description: string;
  id: string;
  alt: string;
};

const Fleet = ({ id, img, description, alt }: FleetProps) => {
  return (
    <>
      <motion.img src={img} transition={{ duration: 0.5 }} key={id} alt={alt} />
      <div>
        <h1 className="font-bold text-2xl">Especificações </h1>
        {description}
      </div>
    </>
  );
};

export default Fleet;
