import React, { useState } from "react";
import ArchiveCard from "../ArchiveCard";
import { card1, card2, card3 } from "@/data/archiveCard";
const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <div className="flex w-full flex-col items-center ">
        <h2 className="text-3xl font-bold">其他作品集</h2>
        <p className="text-sm text-brand">小而美的练习作品</p>
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
          listItem={card1.listItem}
          link={card3.link}
        />

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
          listItem={card1.listItem}
          link={card3.link}
        />

        {showMore && (
          <>
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
              listItem={card1.listItem}
              link={card3.link}
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
