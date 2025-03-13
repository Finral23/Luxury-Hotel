import { BiCalendar } from "react-icons/bi";
import SearchButton from "./SearchButton";
import GuestPicker from "./GuestPicker";
import CutBlock from "./CutBlock";

const Booking = () => {
  return (
    <div className="h-300 relative flex justify-center font-sf px-4 mx-4">
      {/* Форма поиска */}
      <div className="absolute -translate-y-1/2 bg-green-dark text-slate-200 rounded-2xl flex flex-wrap md:flex-nowrap  items-center justify-between py-2 max-w-7xl w-full shadow-lg px-4 gap-y-2">
        {/* Дата заезда и выезда */}
        <div className="flex items-center gap-2 flex-1 w-full md:w-auto">
          <span className="text-xl">
            <BiCalendar />
          </span>
          <span>Check in → Check out</span>
        </div>

        {/* Разделитель */}
        <CutBlock />
        {/* Количество гостей */}
        <GuestPicker />

        {/* Разделитель (убираем на мобильных) */}
        <CutBlock className="hidden sm:block" />

        {/* Промокод + разделитель на мобильных */}
        <div className="flex sm:items-center items-start justify-between w-full sm:w-auto gap-3">
          <div className="flex items-center gap-2 w-full flex-1 ">
            <input
              type="text"
              placeholder="Promocode"
              className="bg-transparent placeholder-slate-200 sm:text-center outline-none w-full"
            />
          </div>
          {/* Разделитель на мобильных (вынесен из `input`) */}
          <CutBlock className="block sm:hidden" />
          {/* Кнопка поиска */}
          <div className=" flex-1 sm:flex-none">
            <SearchButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
