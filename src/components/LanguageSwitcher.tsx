import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

function LanguageSwitcher() {
  const [language, setLanguage] = useState("EN");
  return (
    <>
      <Menu>
        <MenuButton className="h-6 flex items-end">
          <HiChevronDown className="pb-[1px]" />
          {language}
        </MenuButton>
        <MenuItems anchor="bottom" className="pl-4">
          <MenuItem>
            <Button
              className="block text-slate-200"
              onClick={() => setLanguage("EN")}
            >
              EN
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              className="block text-slate-200"
              onClick={() => setLanguage("RU")}
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
