import { motion, Variants } from "framer-motion";
import Link from "next/link";

type CardProps = {
  imgSrc: string;
  layoutId: string;
  alt: string;
  href: string;
};

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

const Card = ({ imgSrc, layoutId, alt, href, ...props }: CardProps) => {
  return (
    <Link href={href}>
      <motion.div
        transition={{
          delay: 2,
        }}
        initial="hidden"
        animate="visible"
        className="relative h-full w-full mt-24 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        variants={variants}
      >
        <motion.img
          src={imgSrc}
          className="w-full h-full cursor-pointer"
          layoutId={layoutId}
          alt={alt}
          {...props}
        />
      </motion.div>
    </Link>
  );
};

export { Card };
export type { CardProps };
