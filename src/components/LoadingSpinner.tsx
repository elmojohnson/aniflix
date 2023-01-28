import { CgSpinnerTwo } from "react-icons/cg";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-16 flex items-center justify-center"
    >
      <CgSpinnerTwo className="text-4xl text-primary animate-spin" />
    </motion.div>
  );
};

export default LoadingSpinner;
