"use client";
import { motion } from "framer-motion";
const RightSide = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="fixed bottom-0 right-0 hidden h-full w-28 xl:inline-flex"
    >
      <div className="flex h-full w-full flex-col items-center justify-end gap-4">
        <a href="mailto:taosir02@163.com">
          <p className=" w-72 rotate-90 text-sm tracking-wide text-brand duration-300 hover:-translate-y-2">
            taosir02@163.com
          </p>
        </a>
        <div className=" h-32 w-[2px] bg-dark"></div>
      </div>
    </motion.section>
  );
};

export default RightSide;
