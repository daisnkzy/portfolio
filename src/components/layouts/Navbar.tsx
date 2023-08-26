import Link from "next/link";
import { motion } from "framer-motion";
import { RiShareBoxLine } from "react-icons/ri";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 h-20 w-full bg-background px-4 drop-shadow-md ">
      <div className=" mx-7 flex h-full max-w-full items-center justify-between py-1 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#">
            <span className="text-3xl font-semibold text-brand">TaoSir.</span>
          </a>
        </motion.div>

        <nav className="hidden items-center gap-7 md:flex">
          <ul className="flex gap-7 text-sm">
            <a
              href="#home"
              className="flex cursor-pointer items-center gap-1 text-dark  duration-300 hover:text-brand"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                主页
              </motion.li>
            </a>

            <a
              href="#about"
              className="flex cursor-pointer items-center gap-1 text-dark  duration-300 hover:text-brand"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                <span className=" font-medium text-brand">01.</span>
                关于我
              </motion.li>
            </a>

            <a
              href="#techStack"
              className="flex cursor-pointer items-center gap-1 text-dark  duration-300 hover:text-brand"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                <span className=" font-medium text-brand">02.</span>
                技术栈
              </motion.li>
            </a>

            <a
              href="#projects"
              className="flex cursor-pointer items-center gap-1 text-dark  duration-300 hover:text-brand"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.4 }}
              >
                <span className=" font-medium text-brand">03.</span>
                作品
              </motion.li>
            </a>

            <a
              href="#contact"
              className="flex cursor-pointer items-center gap-1 text-dark  duration-300 hover:text-brand"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.5 }}
              >
                <span className=" font-medium text-brand ">04.</span>
                联系
              </motion.li>
            </a>
          </ul>

          <a href="resumev3.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -3 }}
              className=" flex cursor-pointer items-center gap-1 rounded-md bg-brand px-4 py-2 text-sm  text-white "
            >
              简 历
              <RiShareBoxLine />
            </motion.button>
          </a>
        </nav>

        <SideMenu />
      </div>
    </div>
  );
};

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="md:hidden">
      <div
        onClick={() => setIsOpen(true)}
        className=" group flex h-5 w-6 cursor-pointer flex-col items-center  justify-between overflow-hidden text-4xl"
      >
        <span className="inline-flex h-[2px] w-full transform bg-dark transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:bg-brand"></span>
        <span className="inline-flex h-[2px] w-full transform bg-dark transition-all  duration-300 ease-in-out group-hover:translate-x-0 group-hover:bg-brand"></span>
        <span className="inline-flex h-[2px] w-full transform bg-dark transition-all duration-300 ease-in-out group-hover:translate-x-3 group-hover:bg-brand"></span>
      </div>

      {isOpen && (
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="absolute right-0 top-0 z-10 flex h-[100vh] w-[70%] flex-col items-center justify-center bg-white"
        >
          <div
            className="absolute right-0 top-0 px-10 py-6"
            onClick={() => setIsOpen(false)}
          >
            <AiOutlineClose className="cursor-pointer text-3xl hover:text-brand" />
          </div>

          <section className="flex flex-col items-center gap-7">
            <ul className="flex flex-col gap-7 text-base">
              <a
                href="#home"
                className="flex cursor-pointer items-center gap-1 text-dark  duration-300 hover:text-brand"
              >
                <motion.li
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  主页
                </motion.li>
              </a>

              <a
                href="#about"
                className="flex cursor-pointer items-center gap-1 text-dark  duration-300 hover:text-brand"
              >
                <motion.li
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <span className=" font-medium text-brand">01.</span>
                  关于我
                </motion.li>
              </a>

              <a
                href="#techStack"
                className="flex cursor-pointer items-center gap-1 text-dark  duration-300 hover:text-brand"
              >
                <motion.li
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  <span className=" font-medium text-brand">02.</span>
                  技术栈
                </motion.li>
              </a>

              <a
                href="#projects"
                className="flex cursor-pointer items-center gap-1 text-dark  duration-300 hover:text-brand"
              >
                <motion.li
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  <span className=" font-medium text-brand">03.</span>
                  作品
                </motion.li>
              </a>

              <a
                href="#contact"
                className="flex cursor-pointer items-center gap-1 text-dark  duration-300 hover:text-brand"
              >
                <motion.li
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.5 }}
                >
                  <span className=" font-medium text-brand ">04.</span>
                  联系
                </motion.li>
              </a>
            </ul>

            <a href="resumev3.pdf" target="_blank">
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className=" flex cursor-pointer items-center gap-1 rounded-md bg-brand px-12 py-2 text-sm  text-white "
              >
                简 历
                <RiShareBoxLine />
              </motion.button>
            </a>

            <a href="mailto:taosir02@163.com" className="text-sm text-brand">
              taosir02@163.com
            </a>
          </section>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
