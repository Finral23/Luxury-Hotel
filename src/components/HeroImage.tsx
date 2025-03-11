interface Props {
  source: string;
}

const HeroImage = ({ source }: Props) => {
  return (
    <div>
      <img
        className="border-4 border-slate-200 w-60 transition-transform duration-300 ease-in-out hover:scale-115 group-hover:shadow-xl"
        src={"hero" + source + ".png"}
        alt=""
      />
    </div>
  );
};

export default HeroImage;
