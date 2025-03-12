import { useTranslation } from "react-i18next";
import { HiChevronDown } from "react-icons/hi";
import { useState, useEffect, memo } from "react";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(i18n.language);
    };

    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setIsOpen(false); // Закрываем меню после выбора
  };

  return (
    <div className="relative">
      {/* Кнопка переключения */}
      <div
        className=" flex items-end text-3xl cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiChevronDown className="pt-2" />
        {language.toUpperCase()}
      </div>

      {/* Выпадающий список */}
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-2 pl-6 rounded-md  text-2xl">
          <li
            className="px-3 py-2 text-slate-200 cursor-pointer"
            onClick={() => changeLanguage("en")}
          >
            EN
          </li>
          <li
            className="px-3 py-2 text-slate-200 cursor-pointer"
            onClick={() => changeLanguage("ru")}
          >
            RU
          </li>
        </ul>
      )}
    </div>
  );
}

export default memo(LanguageSwitcher);
