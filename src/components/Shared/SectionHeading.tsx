type THeadingProps = {
  align: string;
  title: string;
  normalSubTitleWord: string;
  boldSubTitleWord: string;
  colorboldmrsub: string;
  colornormrsub: string;
  colortitle: string;
};

const SectionHeading = ({
  align,
  title,
  normalSubTitleWord,
  boldSubTitleWord,
  colortitle,
  colornormrsub,
  colorboldmrsub,
}: THeadingProps) => {
  return (
    <div className={`${align ? align : "text-center"} space-y-3 md:mb-14 mb-8`}>
      <h2
        className={`text-xl md:text-2xl md:tracking-[0.3rem] tracking-[0.2rem] uppercase ${colortitle}`}
      >
        {title}
      </h2>
      <h3
        className={`capitalize md:text-5xl  text-2xl
       md:tracking-[0.2rem] tracking-[0.1rem] ${colornormrsub}`}
      >
        {normalSubTitleWord}{" "}
        <span className={`font-bold ${colorboldmrsub}`}>
          {boldSubTitleWord}
        </span>
      </h3>
    </div>
  );
};

export default SectionHeading;
