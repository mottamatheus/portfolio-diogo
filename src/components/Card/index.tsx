import { motion, Variants } from "framer-motion";

interface CardProps {
  imgSrc: string;
  layoutId: string;
  alt: string;
}

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

const Card = ({ imgSrc, layoutId, alt }: CardProps) => {
  return (
    <motion.div
      transition={{
        delay: 2,
      }}
      variants={variants}
      initial="hidden"
      animate="visible"
      className="relative h-auto w-full mt-24   rounded-xl hover:bg-gray-300 transition"
    >
      <motion.img
        src={imgSrc}
        className="w-full h-full"
        layoutId={layoutId}
        alt={alt}
      />
    </motion.div>
  );
};

export default Card;
