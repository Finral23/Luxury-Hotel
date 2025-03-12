import { useBackground } from "../context/BackgroundContext";

interface Props {
  source: string;
}

const HeroImage = ({ source }: Props) => {
  const { setBgImage, pauseRotation, resumeRotation } = useBackground();
  return (
    <div
      onMouseEnter={() => {
        pauseRotation(); // Остановить смену фона
        setBgImage(source); // Поменять фон при наведении
      }}
      onMouseLeave={() => resumeRotation()} // Возобновить смену фона после ухода курсора
      className="cursor-pointer"
    >
      <img
        className="border-4 border-slate-200 w-60 transition-transform duration-300 ease-in-out hover:scale-115 group-hover:shadow-xl"
        src={source}
        alt=""
      />
    </div>
  );
};

export default HeroImage;
