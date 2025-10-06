import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <div className="w-full pt-6 pb-6 bg-[#1d1e25] flex flex-col md:flex-row justify-center md:space-x-10 space-y-4 md:space-y-0 items-center transform-gpu">
      <motion.div
        initial={{ y: -140 }}
        animate={{ y: hasAnimated ? 0 : -10 }}
        transition={{ type: "spring", duration: 1.3, bounce: 0.3, delay: 1 }}
        style={{ willChange: "transform" }}
      >
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95, rotate: -2 }}
            className="bg-[#ffd846] w-24 font-cool h-8 rounded-md text-neutral-900 text-xl cursor-pointer"
          >
            Home
          </motion.button>
        </Link>
      </motion.div>
      <motion.div
        initial={{ y: -140 }}
        animate={{ y: hasAnimated ? 0 : -10 }}
        transition={{ type: "spring", duration: 1.3, bounce: 0.3, delay: 1.2 }}
        style={{ willChange: "transform" }}
      >
        <Link to="/Work">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95, rotate: -2 }}
            className="bg-[#ffd846] w-24 font-cool h-8 rounded-md text-neutral-900 text-xl cursor-pointer"
          >
            Work
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
