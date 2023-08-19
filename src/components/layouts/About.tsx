"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import selfImg from "../../../public/programing.svg";
import SectionTitle from "../SectionTitle";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-5xl flex-col gap-7 py-10  xl:py-24"
    >
      <SectionTitle title="关于我" titleNum="01" />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.3 },
        }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-20 xl:flex-row xl:justify-end"
      >
        <div className="h-80  justify-center md:flex ">
          <Image
            src={selfImg}
            alt="self introduction"
            className="h-full rounded-lg object-cover"
          />
        </div>

        <div className=" flex  flex-col gap-4 text-base leading-7 tracking-wider text-dark xl:max-w-xl ">
          <p className=" font-medium">
            我是代运涛 安徽理工大学本科生 2024年6月毕业 来自安徽合肥
          </p>
          <p className="">
            我享受编程带给我的创造体验。当我一遍又一遍地编写代码，不断排查错误并寻找解决方案时，就像米开朗琪罗手持锤子与刻刀，全神贯注地雕刻他的作品一样。我努力让我的代码像艺术品一样展示给世人。
          </p>
          <p className="">
            我开始学习 web
            开发是在大二暑假，学校安排的实训课程教授了前端开发。那时我才发现编程并不枯燥无味，前端开发就像绘画，代码成为了五彩缤纷的颜料，我可以愉快地创造自己的作品。
          </p>
          <p className="">
            由于找到了自己的兴趣所在，大三下学期我放弃了考研，全力学习前端开发。别人在看书写题，而我带着电脑在图书馆里敲代码、查找资料。我每天尽可能地保持着至少6个小时的学习时间。曾经也折腾过静态博客，纠结过技术栈的选择，还担心过前端开发市场是否饱和以及自己能不能找到工作。
          </p>
          <p className="">
            然而，所有的噪音和焦虑都在我对开发的热爱中消失。即使面对最坏的情况，我也不会后悔。我学习编程的动力不仅仅是为了找工作和赚钱，而是为了实现梦想，成为一名出色的全栈开发工程师，用心雕刻出属于自己的“大卫像”。
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
