interface Props {
  title: string;
  titleNum: string;
}

const SectionTitle = ({ titleNum, title }: Props) => {
  return (
    <h2 className="flex items-center text-2xl font-medium">
      <span className="mr-3 text-brand md:text-lg">{titleNum}.</span>
      {title}
      <span className="ml-7 hidden h-[1px] bg-brand md:inline-flex md:w-60 xl:w-72"></span>
    </h2>
  );
};

export default SectionTitle;
