import { motion } from "framer-motion";
import Link from "next/link";

type ButtonProps = {
  title: string;
  href: string;
};

const Button = ({ href, title }: ButtonProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 1 }}
    className="mt-8 space-x-4"
  >
    <Link href={href} role="link">
      <a className="bg-gray-900  text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 transition">
        {title}
      </a>
    </Link>
  </motion.div>
);

export { Button };
export type { ButtonProps };
