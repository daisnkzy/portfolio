import { TbLink, TbFolder } from "react-icons/tb";

interface Props {
  title: string;
  desc: string;
  listItem: string[];
  link: string;
}

const ArchiveCard = ({ title, desc, listItem, link }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      className="group flex h-80 w-full flex-col justify-around gap-7 rounded-lg bg-violet-100 p-7 transition-transform duration-300 hover:-translate-y-3"
    >
      <div className="flex justify-between">
        <TbFolder className="text-4xl text-brand" />
        <TbLink className="text-4xl hover:text-brand" />
      </div>

      <div className="flex flex-col justify-center  gap-5 ">
        <h2 className=" text-xl font-semibold tracking-wide group-hover:text-brand">
          {title}
        </h2>
        <p>{desc}</p>
      </div>

      <ul className=" flex flex-wrap items-center justify-between gap-3 text-sm">
        {listItem.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </a>
  );
};

export default ArchiveCard;
