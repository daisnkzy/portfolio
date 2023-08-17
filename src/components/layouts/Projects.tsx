"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { TbBrandGithub, TbLink } from "react-icons/tb";

import { atom, list, quiz } from "../../../public";
import SectionTitle from "../SectionTitle";

const Projects = () => {
  return (
    <section id="projects" className=" max-w-8xl mx-auto  py-24 xl:px-20">
      <SectionTitle title="我的作品" titleNum="03" />
      <div className="mt-10 flex w-full flex-col justify-center gap-28 ">
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          viewport={{ once: true }}
          className="flex flex-col gap-7 xl:flex-row"
        >
          <a className="h-auto w-full xl:w-1/2" href="" target="_blank">
            <div className="overflow-hidden">
              <Image
                className="h-full w-full rounded-md object-contain duration-300 hover:scale-125 "
                src={quiz}
                alt="project 1"
              />
            </div>
          </a>
          <div className="z-10 flex w-full flex-col items-end gap-5 text-right xl:-ml-16 xl:w-1/2 xl:justify-between">
            <div>
              <p className="text-sm tracking-wide text-brand">小而美的作品</p>
              <h3 className="text-2xl font-bold">React 小测验</h3>
            </div>
            <p className="rounded-md bg-violet-100 p-2 text-sm md:p-6 md:text-base ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              molestias autem reprehenderit recusandae, totam explicabo
              necessitatibus nam aliquam rerum deserunt fugit!
            </p>
            <ul className="flex gap-3 text-sm tracking-wider md:gap-7">
              <li>React</li>
              <li>useReducer</li>
              <li>Context API</li>
              <li>Netlify</li>
            </ul>
            <div className="flex gap-7">
              <a href="" target="_blank" className=" text-2xl hover:text-brand">
                <TbBrandGithub />
              </a>
              <a href="" target="_blank" className=" text-2xl hover:text-brand">
                <TbLink />
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          viewport={{ once: true }}
          className="flex flex-col gap-7 xl:flex-row-reverse"
        >
          <a className="h-auto w-full xl:w-1/2" href="" target="_blank">
            <div className="overflow-hidden">
              <Image
                className="h-full w-full rounded-md object-contain duration-300 hover:scale-125 "
                src={atom}
                alt="project 1"
              />
            </div>
          </a>
          <div className="z-10 flex w-full flex-col items-start gap-5 text-left xl:-mr-16 xl:w-1/2 xl:justify-between">
            <div>
              <p className="text-sm tracking-wide text-brand">小而美的作品</p>
              <h3 className="text-2xl font-bold">原子笔记本</h3>
            </div>
            <p className="rounded-md bg-violet-100 p-2 text-sm md:p-6 md:text-base ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              molestias autem reprehenderit recusandae, totam explicabo
              necessitatibus nam aliquam rerum deserunt fugit!
            </p>
            <ul className="flex gap-3 text-sm tracking-wider md:gap-7">
              <li>React</li>
              <li>vite</li>
              <li>Netlify</li>
            </ul>
            <div className="flex gap-7">
              <a href="" target="_blank" className=" text-2xl hover:text-brand">
                <TbBrandGithub />
              </a>
              <a href="" target="_blank" className=" text-2xl hover:text-brand">
                <TbLink />
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          viewport={{ once: true }}
          className="flex flex-col gap-7 xl:flex-row"
        >
          <a className="h-auto w-full xl:w-1/2" href="" target="_blank">
            <div className="overflow-hidden">
              <Image
                className="h-full w-full rounded-md object-contain duration-300 hover:scale-125 "
                src={list}
                alt="project 1"
              />
            </div>
          </a>
          <div className="z-10 flex w-full flex-col items-end gap-5 text-right xl:-ml-16 xl:w-1/2 xl:justify-between">
            <div>
              <p className="text-sm tracking-wide text-brand">小而美的作品</p>
              <h3 className="text-2xl font-bold">旅行清单</h3>
            </div>
            <p className="rounded-md bg-violet-100 p-2 text-sm md:p-6 md:text-base ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              molestias autem reprehenderit recusandae, totam explicabo
              necessitatibus nam aliquam rerum deserunt fugit!
            </p>
            <ul className="flex gap-3 text-sm tracking-wider md:gap-7">
              <li>React</li>
              <li>Vite</li>
              <li>Context API</li>
              <li>Netlify</li>
            </ul>
            <div className="flex gap-7">
              <a href="" target="_blank" className=" text-2xl hover:text-brand">
                <TbBrandGithub />
              </a>
              <a href="" target="_blank" className=" text-2xl hover:text-brand">
                <TbLink />
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default Projects;
