import { motion } from "framer-motion";

type HeadingProps = {
  text: string;
};

const Heading = ({ text }: HeadingProps) => {
  return (
    <motion.h1
      className="text-4xl mt-10  font-extrabold  text-gray-900 dark:text-gray-100 sm:text-6xl  md:mt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {text}
    </motion.h1>
  );
};

export { Heading };
export type { HeadingProps };
