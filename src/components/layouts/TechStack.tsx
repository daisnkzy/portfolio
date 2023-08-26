import { motion } from "framer-motion";

import React, { useReducer } from "react";
import Css from "../Css";
import REACT from "../REACT";
import Language from "../Language";
import Tools from "../Tools";
import SectionTitle from "../SectionTitle";

// 定义状态类型
interface State {
  activeTab: string;
  tabs: Tab[];
}

// 定义标签类型
interface Tab {
  id: string;
  label: string;
  content: string;
}

const initState: State = {
  activeTab: "tab1",
  tabs: [
    { id: "tab1", label: "CSS", content: "css" },
    { id: "tab2", label: "React", content: "react" },
    { id: "tab3", label: "Language", content: "language" },
    { id: "tab4", label: "Tools", content: "tools" },
  ],
};

function reducer(
  state: State,
  action: { type: string; payload: string },
): State {
  switch (action.type) {
    case "SELECT_TAB":
      return { ...state, activeTab: action.payload };
    default:
      return state;
  }
}

const TechStack = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { activeTab, tabs } = state;

  const handleTabClick = (tabId: string) => {
    dispatch({ type: "SELECT_TAB", payload: tabId });
  };

  return (
    <section id="techStack" className="mx-auto  max-w-2xl py-10 xl:py-28">
      <SectionTitle title="我的技术栈" titleNum="02" />
      <div className="mt-10 flex w-full flex-col gap-16 md:flex-row ">
        <motion.ul
          initial={{ opacity: 0, x: -300 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          viewport={{ once: true }}
          className="flex flex-row justify-center gap-1  md:w-32 md:flex-col md:justify-normal  "
        >
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`${
                activeTab === tab.id
                  ? " border-b-brand bg-violet-100 md:border-l-brand"
                  : ""
              } cursor-pointer border-b-2 bg-transparent px-4  py-3 text-sm font-medium text-dark duration-300 hover:bg-violet-50 md:border-b-0 md:border-l-2`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          viewport={{ once: true }}
          className=" h-52"
        >
          {tabs.map((tab) => (
            <div key={tab.id} className={activeTab === tab.id ? "" : "hidden"}>
              {tab.content === "css" && <Css />}
              {tab.content === "react" && <REACT />}
              {tab.content === "language" && <Language />}
              {tab.content === "tools" && <Tools />}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
