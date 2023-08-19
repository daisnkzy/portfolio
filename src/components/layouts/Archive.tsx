import React, { useState } from "react";
import ArchiveCard from "../ArchiveCard";
import {
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
} from "@/data/archiveCard";
const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <div className="flex w-full flex-col items-center ">
        <h2 className="text-3xl font-bold">其他作品集</h2>
        <p className="text-sm text-brand">
          小而美的练习作品，点击卡片跳转显示实现效果
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1  gap-7 md:grid-cols-2 xl:grid-cols-3 xl:px-10 ">
        <ArchiveCard
          title={card1.title}
          desc={card1.desc}
          listItem={card1.listItem}
          link={card1.link}
        />
        <ArchiveCard
          title={card2.title}
          desc={card2.desc}
          listItem={card2.listItem}
          link={card2.link}
        />
        <ArchiveCard
          title={card3.title}
          desc={card3.desc}
          listItem={card3.listItem}
          link={card3.link}
        />

        <ArchiveCard
          title={card4.title}
          desc={card4.desc}
          listItem={card4.listItem}
          link={card4.link}
        />
        <ArchiveCard
          title={card5.title}
          desc={card5.desc}
          listItem={card5.listItem}
          link={card5.link}
        />
        <ArchiveCard
          title={card6.title}
          desc={card6.desc}
          listItem={card6.listItem}
          link={card6.link}
        />

        {showMore && (
          <>
            <ArchiveCard
              title={card7.title}
              desc={card7.desc}
              listItem={card7.listItem}
              link={card7.link}
            />
            <ArchiveCard
              title={card8.title}
              desc={card8.desc}
              listItem={card8.listItem}
              link={card8.link}
            />
            <ArchiveCard
              title={card9.title}
              desc={card9.desc}
              listItem={card9.listItem}
              link={card9.link}
            />
          </>
        )}
      </div>

      <div className="mt-10 flex items-center justify-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="rounded-lg bg-violet-50 px-12 py-3 text-center text-sm font-medium text-dark duration-300 hover:bg-violet-100"
        >
          {showMore ? "收起卡片" : "展示更多"}
        </button>
      </div>
    </section>
  );
};

export default Archive;
