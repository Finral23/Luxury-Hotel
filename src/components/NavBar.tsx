import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import { PiCallBellLight } from "react-icons/pi";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between  items-center gap-2 p-5 md:p-10">
      <div className="sm:flex-1 flex justify-start">
        <LanguageSwitcher />
      </div>
      <Logo />
      <div className="sm:flex-1 flex justify-end items-center md:gap-5">
        <a className="invisible w-0 md:visible md:w-auto">{t("login")}</a>
        <button className="flex items-center justify-between gap-2 py-2 px-3 rounded-full bg-gray-950">
          {t("bookNow")} <PiCallBellLight />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
