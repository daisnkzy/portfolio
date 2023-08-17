"use client";
import { motion } from "framer-motion";
import {
  TbBrandGithub,
  TbBrandBilibili,
  TbBrandLeetcode,
  TbBrandQq,
} from "react-icons/tb";

const LeftSide = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="fixed bottom-0 left-0 hidden h-full w-28 xl:inline-flex"
    >
      <div className="flex h-full w-full flex-col items-center justify-end gap-4">
        <div className="flex flex-col gap-4">
          <a href="https://github.com/daisnkzy" target="_blank">
            <Icon>
              <TbBrandGithub />
            </Icon>
          </a>
          <a href="#">
            <Icon>
              <TbBrandLeetcode />
            </Icon>
          </a>
          <a href="#">
            <Icon>
              <TbBrandBilibili />
            </Icon>
          </a>
          <a href="#">
            <Icon>
              <TbBrandQq />
            </Icon>
          </a>
        </div>
        <div className=" h-32 w-[2px] bg-dark "></div>
      </div>
    </motion.section>
  );
};

const Icon = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-violet-50   text-xl transition-all duration-300 hover:-translate-y-2 hover:text-brand ">
      {children}
    </span>
  );
};

export default LeftSide;
