import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { HiChevronDown } from "react-icons/hi";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang); // Запоминаем язык
  };
  return (
    <>
      <Menu>
        <MenuButton className="h-6 flex items-end">
          <HiChevronDown className="pb-[1px]" />
          {i18n.language.toUpperCase()}
        </MenuButton>
        <MenuItems anchor="bottom" className="pl-4">
          <MenuItem>
            <Button
              className="block text-slate-200"
              onClick={() => changeLanguage("en")}
            >
              EN
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              className="block text-slate-200"
              onClick={() => changeLanguage("ru")}
            >
              RU
            </Button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </>
  );
}

export default LanguageSwitcher;
