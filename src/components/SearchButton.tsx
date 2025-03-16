import { useTranslation } from "react-i18next";
import { IoIosSearch } from "react-icons/io";

const SearchButton = () => {
  const { t } = useTranslation();
  return (
    <button className="bg-green rounded-full w-full sm:w-40 px-4 py-1 flex items-center justify-between ">
      <span className="text-xl">
        <IoIosSearch />
      </span>
      <span>{t("booking.search")}</span>
    </button>
  );
};

export default SearchButton;
