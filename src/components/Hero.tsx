import { useTranslation } from "react-i18next";
import HeroImage from "./HeroImage";
import { memo } from "react";

const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      key={i18n.language}
      className="flex flex-col md:flex-row items-center justify-between pb-10 mb-10 px-4 xl:px-0 max-w-7xl mx-auto"
    >
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl">{t("heroHeading")}</h1>
        <h2 className="text-2xl md:text-3xl">{t("heroTitle")}</h2>
        <p className="text-mono md:text-2xl tracking-wide">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
          pariatur eius necessitatibus, laudantium accusantium ipsum sit! Minus
          mollitia placeat corrupti.
        </p>
        <button className="bg-gradient-to-b from-black to-230% px-10 py-2  text-2xl uppercase tracking-wider rounded-full border-2 border-slate-200 cursor-pointer hover:bg-slate-700">
          {t("heroButton")}
        </button>
      </div>
      <div className="hidden  md:w-1/2 md:flex md:justify-end ">
        <div className="flex flex-col gap-5">
          <HeroImage source="hero1.png" />
          <HeroImage source="hero2.png" />
          <HeroImage source="hero3.png" />
          <HeroImage source="hero4.png" />
        </div>
      </div>
    </div>
  );
};

export default memo(Hero); // 🔥 Теперь `Hero` не ререндерится без причины
