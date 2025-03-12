import { BiCalendar } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import SearchButton from "./SearchButton";

const Booking = () => {
  return (
    <div className="h-300 relative flex justify-center font-sf px-4">
      {/* Форма поиска */}
      <div className="absolute -translate-y-1/2 bg-green-dark text-slate-200 rounded-2xl flex flex-wrap md:flex-nowrap items-start md:items-center justify-between py-2 max-w-7xl w-full shadow-lg px-4 gap-y-2">
        {/* Дата заезда и выезда */}
        <div className="flex items-center gap-2 flex-1 w-full md:w-auto">
          <span className="text-xl">
            <BiCalendar />
          </span>
          <span>Check in → Check out</span>
        </div>

        {/* Разделитель */}
        <div className="border-l border-white/30 h-6 mx-3"></div>

        {/* Количество гостей */}
        <div className="flex items-center gap-2 flex-1 w-full md:w-auto">
          <span className="text-xl">
            <IoPersonSharp />
          </span>
          <span>2 adults, 0 children</span>
        </div>

        {/* Разделитель (убираем на мобильных) */}
        <div className="hidden sm:block border-l border-white/30 h-6 mx-3"></div>

        {/* Промокод + разделитель на мобильных */}
        <div className="flex sm:items-center items-start justify-between w-full sm:w-auto gap-3">
          <div className="flex items-center gap-2 w-full flex-1 ">
            <input
              type="text"
              placeholder="Promocode"
              className="bg-transparent placeholder-slate-200 text-center outline-none w-full"
            />
          </div>
          {/* Разделитель на мобильных (вынесен из `input`) */}
          <div className="block sm:hidden border-l border-white/30 h-6"></div>
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
