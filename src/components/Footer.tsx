import { useTranslation } from "react-i18next";
import FooterLink from "./FooterLink";
import Logo from "./Logo";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="max-w-7xl mx-auto py-10 px-5 text-lg/6">
      {/* Контейнер для мобильного и десктопа */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Логотип */}
        <div className="flex justify-center md:justify-start">
          <Logo />
        </div>

        {/* Навигация (скрывается на мобильных, раскрывается на md) */}
        <div className="hidden md:block">
          <ul className="font-sf">
            <li>
              <FooterLink>{t("footer.links.news")}</FooterLink>
            </li>
            <li>
              <FooterLink>{t("footer.links.offers")}</FooterLink>
            </li>
            <li>
              <FooterLink>{t("footer.links.gallery")}</FooterLink>
            </li>
            <li>
              <FooterLink>{t("footer.links.rooms")}</FooterLink>
            </li>
            <li>
              <FooterLink>{t("footer.links.about")}</FooterLink>
            </li>
            <li>
              <FooterLink>{t("footer.links.contact")}</FooterLink>
            </li>
            <li>
              <FooterLink>{t("footer.links.faq")}</FooterLink>
            </li>
            <li>
              <FooterLink>{t("footer.links.terms")}</FooterLink>
            </li>
          </ul>
        </div>

        {/* Контактная информация */}
        <div className="text-center md:text-left md:flex md:flex-col md:justify-between">
          <div>
            <p className="font-sf">{t("footer.contact.title")}</p>
            <p className="font-sf">{t("footer.contact.address")}</p>
          </div>
          <div>
            <p className="mt-4 font-sf">+380 954 14 88</p>
            <FooterLink href="mailto:anomalyx.agency@gmail.com">
              anomalyx.agency@gmail.com
            </FooterLink>
          </div>
        </div>

        {/* Соцсети */}
        <div className="flex flex-col items-center space-y-3">
          <p className="font-sf">{t("footer.social.title")}</p>
          <div className="flex md:flex-col gap-4">
            <FaTwitter
              size={30}
              className="transition-all duration-300 hover:text-blue-500 cursor-pointer"
            />
            <FaFacebook
              size={30}
              className="transition-all duration-300 hover:text-blue-600 cursor-pointer"
            />
            <FaInstagram
              size={30}
              className="transition-all duration-300 hover:text-pink-500 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Разделитель */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-gray-500 font-sf">
        {t("footer.copyright")}
      </div>
    </footer>
  );
};

export default Footer;
