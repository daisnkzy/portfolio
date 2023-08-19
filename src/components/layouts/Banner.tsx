import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className=" mx-auto mb-12 flex  max-w-5xl flex-col gap-4 py-10 lg:px-10 lg:py-32 xl:gap-8 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg tracking-wide text-brand"
      >
        Hi👋, my name is
      </motion.h3>

      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col text-4xl font-semibold tracking-wider md:text-6xl"
      >
        代运涛，是一名前端工程师。
        <span className="  mt-3 text-xl font-normal md:text-4xl ">
          <span className="text-brand">我热衷于</span>设计并开发
          <a href="#projects">
            <span className=" group relative inline-flex h-9 cursor-pointer overflow-x-hidden bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-2xl font-normal tracking-wider text-transparent md:h-14 md:text-5xl ">
              小而美
              <span className="absolute bottom-0 left-0 h-[3px]  w-full -translate-x-[110%] bg-brand  duration-500 ease-in-out group-hover:translate-x-0"></span>
            </span>
          </a>
          的web应用。
        </span>
      </motion.h1>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="font-base leading-7 tracking-wider md:max-w-[700px]"
      >
        我是一名即将毕业的计算机学院本科生，正在努力转变身份成为一名web开发工程师。尽管我目前的水平还不能完全熟练地进行独立开发，但我正在不断地练习
        React
        项目，希望能在真实的生产环境中展现我的能力。我对前端开发充满热情，并且渴望在实践中不断成长和进步。
      </motion.p>

      <motion.a
        href="#about"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <button className="text-md group relative inline-flex  items-center overflow-hidden rounded-full border-2 border-brand px-12 py-3 font-medium text-brand hover:bg-gray-50 hover:text-white">
          <span className="ease absolute left-0 top-1/2 block h-0 w-full bg-brand opacity-100 transition-all duration-300 group-hover:top-0 group-hover:h-full"></span>
          <span className="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-0">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative ">快速了解我 🥰</span>
        </button>
      </motion.a>
    </section>
  );
};

export default Banner;
