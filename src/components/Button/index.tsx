import { motion } from "framer-motion";

const Button = () => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="bg-green-200 p-12 rounded-xl text-green-500 hover:bg-green-300 transition"
  />
);

export default Button;
