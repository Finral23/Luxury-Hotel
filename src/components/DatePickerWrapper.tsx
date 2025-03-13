import { useState, useEffect } from "react";
import { BiCalendar } from "react-icons/bi";
import { format } from "date-fns";
import DatePicker from "./DatePicker";

const DatePickerWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dateRange, setDateRange] = useState({
    start: new Date(),
    end: new Date(),
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="relative flex-1">
      {/* Кнопка выбора дат */}
      <button
        className={`flex items-center gap-2 px-4 py-2 text-slate-200 ${
          isMobile ? "w-full justify-center" : "md:w-auto"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <BiCalendar className="text-xl" />
        <span>
          {format(dateRange.start, "MMM d")} → {format(dateRange.end, "MMM d")}
        </span>
      </button>

      {/* Календарь */}
      {isOpen && (
        <DatePicker
          onClose={() => setIsOpen(false)}
          onChange={(range) => setDateRange(range)}
        />
      )}
    </div>
  );
};

export default DatePickerWrapper;
