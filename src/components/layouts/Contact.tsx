import React from "react";
import { TbMail } from "react-icons/tb";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 py-10 xl:py-32"
    >
      <p className="flex items-center text-lg font-semibold tracking-wide text-brand">
        04.感谢你浏览我的网站
      </p>
      <h2 className="text-3xl font-semibold tracking-wide">联系我</h2>
      <p className="max-w-[600px] text-center">
        此网站使用 <span className="text-brand">Next.js</span>和
        <span className="text-brand">Tailwind CSS</span>打造, 部署于
        <span className="text-brand">Netlify</span>平台。
        作为本人的求职展示网站，如果你觉得不错的话，可以右上方点击按钮查看我的简历。也可以通过下面的按钮联系我。谢谢！
      </p>
      <a href="mailto:taosir02@163.com">
        <button className=" flex cursor-pointer items-center gap-1 rounded-md bg-brand px-4 py-2 text-sm text-white duration-300  hover:scale-110">
          发送邮件
          <TbMail />
        </button>
      </a>
    </section>
  );
};

export default Contact;
