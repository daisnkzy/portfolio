"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { TbBrandGithub, TbLink } from "react-icons/tb";

import { admin, atom, list, quiz } from "../../../public";
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
              利用第三方库在本地生成json
              api，fetch调用api输出问题和答案。点击选项后显示对错和相应的得分!
              因为api为本地生成，需要终端保持运行，故无法发送至服务云平台在线查看。
            </p>
            <ul className="flex gap-3 text-sm tracking-wider md:gap-7">
              <li>React</li>
              <li>useReducer</li>
              <li>Context API</li>
            </ul>
            <div className="flex gap-7">
              <a
                href="https://github.com/daisnkzy/react-quiz"
                target="_blank"
                className=" text-2xl hover:text-brand"
              >
                <TbBrandGithub />
              </a>
              <a className="text-2xl hover:text-brand">
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
          <a
            className="h-auto w-full xl:w-1/2"
            href="https://reactofadmin.netlify.app/"
            target="_blank"
          >
            <div className="overflow-hidden">
              <Image
                className="h-full w-full rounded-md object-contain duration-300 hover:scale-125 "
                src={admin}
                alt="project 2"
              />
            </div>
          </a>
          <div className="z-10 flex w-full flex-col items-start gap-5 text-left xl:-mr-16 xl:w-1/2 xl:justify-between">
            <div>
              <p className="text-sm tracking-wide text-brand">小而美的作品</p>
              <h3 className="text-2xl font-bold">React 管理UI</h3>
            </div>
            <p className="rounded-md bg-violet-100 p-2 text-sm md:p-6 md:text-base ">
              此项目主要展示自己的写静态页面的能力，使用sass写css，利用Rechart生成图表。且对不同的响应设备做了布局设计!
            </p>
            <ul className="flex gap-3 text-sm tracking-wider md:gap-7">
              <li>Sass</li>
              <li>Rechart</li>
              <li>Typescript</li>
            </ul>
            <div className="flex gap-7">
              <a
                href="https://github.com/daisnkzy/react-admin-ui"
                target="_blank"
                className=" text-2xl hover:text-brand"
              >
                <TbBrandGithub />
              </a>
              <a
                href="https://reactofadmin.netlify.app/"
                target="_blank"
                className=" text-2xl hover:text-brand"
              >
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
          <a
            className="h-auto w-full xl:w-1/2"
            href="https://tripoflist.netlify.app/"
            target="_blank"
          >
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
              经典todoList项目，常见的增删改功能，以及最下方可以显示完成的进度，自定义选择数量和物品名!
            </p>
            <ul className="flex gap-3 text-sm tracking-wider md:gap-7">
              <li>React</li>
              <li>Vite</li>
              <li>Netlify</li>
            </ul>
            <div className="flex gap-7">
              <a
                href="https://github.com/daisnkzy/trip-list"
                target="_blank"
                className=" text-2xl hover:text-brand"
              >
                <TbBrandGithub />
              </a>
              <a
                href="https://tripoflist.netlify.app/"
                target="_blank"
                className=" text-2xl hover:text-brand"
              >
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
