import { useState } from "react";
import Button from "./Button";
import Heading2 from "./Heading2";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="max-w-7xl mx-auto px-6 lg:my-30 flex flex-col md:flex-row items-start mt-20">
      {/* Левая часть с изображениями */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <div className="relative ">
          <img
            src="/welcome.webp"
            alt="Luxury Jungle Hotel"
            className="w-3xl h-3xl"
          />
        </div>
      </div>

      {/* Правая часть с текстом */}
      <div className="w-full lg:w-1/2 text-center md:text-left space-y-10 my-10">
        <Heading2>{t("welcome.h")}</Heading2>
        <div className="md:pl-15 space-y-15">
          <p className="text-lg text-gray-300 leading-10 tracking-wider">
            {t("welcome.p")}
            {isOpen && t("welcome.p.more")}
          </p>
          <Button onClick={() => setOpen(!isOpen)}>
            {isOpen
              ? t("welcome.b.less").toUpperCase()
              : t("welcome.b.more").toUpperCase()}
          </Button>
        </div>
        <div className="flex flex-col text-end text-xl">
          <p className="font-sf-thin">{t("welcome.contact")}</p>
          <p className="font-sf-thin">+380 954 14 88</p>
          <p className="font-sf-thin">{t("welcome.location")}</p>
          <p className="font-sf-thin">
            <a href="mailto:anomalyx.agency@gmail.com">
              anomalyx.agency@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
