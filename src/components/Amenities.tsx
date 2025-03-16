import { useTranslation } from "react-i18next";
import BackgroundBlur from "./BackgroundBlur";
import GreenBlock from "./GreenBlock";
import Heading2 from "./Heading2";

const Amenities = () => {
  const { t } = useTranslation();
  return (
    <div>
      <BackgroundBlur src="/hero4.png" justify="start">
        <GreenBlock>
          <Heading2>{t("amenities.h")}</Heading2>
          <p className="py-10 text-xl">{t("amenities.p")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:pb-20">
            <ul className="custom-list space-y-2">
              <li>{t("amenities.1")}</li>
              <li>{t("amenities.2")}</li>
              <li>{t("amenities.3")}</li>
              <li>{t("amenities.4")}</li>
              <li>{t("amenities.5")}</li>
            </ul>
            <ul className="hidden sm:block custom-list space-y-2">
              <li>{t("amenities.6")}</li>
              <li>{t("amenities.7")}</li>
              <li>{t("amenities.8")}</li>
              <li>{t("amenities.9")}</li>
              <li>{t("amenities.10")}</li>
            </ul>
          </div>
        </GreenBlock>
      </BackgroundBlur>
    </div>
  );
};

export default Amenities;
