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

        <div className=" font-base  flex flex-col gap-4 leading-7 tracking-wider text-dark xl:max-w-xl ">
          <p className="">我是一名计算机学院的学生。我是疯了啊税率v刚拿到</p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            ipsa odio aspernatur! Accusantium enim saepe eligendi adipisci
            aspernatur a rem. Omnis, rerum enim dolorum explicabo excepturi
            eius. Amet, maxime sed!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quis
            quibusdam explicabo ad veritatis unde pariatur? Animi libero
            nesciunt magnam placeat soluta tempore ducimus nulla ex, atque omnis
            nisi quae!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quis
            quibusdam explicabo ad veritatis unde pariatur? Animi libero
            nesciunt magnam placeat soluta tempore ducimus nulla ex, atque omnis
            nisi quae!
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
