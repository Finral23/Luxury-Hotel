import SearchButton from "./SearchButton";
import GuestPicker from "./GuestPicker";
import CutBlock from "./CutBlock";
import DatePickerWrapper from "./DatePickerWrapper";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const Booking = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  return (
    <div
      ref={ref}
      className="relative flex justify-center font-sf px-4 mx-4 scroll-mt-24"
    >
      <div className="absolute -translate-y-1/2 bg-green-dark text-slate-200 rounded-2xl flex flex-wrap md:flex-nowrap items-center justify-between py-2 max-w-7xl w-full shadow-lg px-4 gap-y-2">
        <DatePickerWrapper />
        <CutBlock />
        <GuestPicker />
        <CutBlock className="hidden sm:block" />
        {/* Промокод + разделитель на мобильных */}
        <div className="flex sm:items-center items-start justify-between w-full sm:w-auto gap-3">
          <div className="flex items-center gap-2 w-full flex-1 ">
            <input
              type="text"
              placeholder={t("booking.promocode")}
              className="bg-transparent placeholder-slate-200 text-center outline-none w-full"
            />
          </div>
          <CutBlock className="block sm:hidden" />
          <div className=" flex-1 sm:flex-none">
            <SearchButton />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Booking;
