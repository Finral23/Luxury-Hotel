import { useTranslation } from "react-i18next";
import HeroImage from "./HeroImage";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-12 max-w-7xl mx-auto">
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-6xl">{t("heroHeading")}</h1>
        <h2 className="text-3xl">{t("heroTitle")}</h2>
        <p className="text-2xl tracking-wide ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
          pariatur eius necessitatibus, laudantium accusantium ipsum sit! Minus
          mollitia placeat corrupti.
        </p>
        <button className="bg-gradient-to-b from-black to-230% px-10 py-2  text-2xl uppercase tracking-wider rounded-full border-2 border-slate-200 cursor-pointer hover:bg-slate-700">
          {t("heroButton")}
        </button>
      </div>
      <div className="md:w-1/2 flex justify-end ">
        <div className="flex flex-col gap-5">
          <HeroImage source="1" />
          <HeroImage source="1" />
          <HeroImage source="1" />
          <HeroImage source="1" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
