import { useState, useEffect, useRef } from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "../index.css";

interface DatePickerProps {
  onClose: () => void;
  onChange: (range: { start: Date; end: Date }) => void;
}

const DatePicker = ({ onClose, onChange }: DatePickerProps) => {
  const [range, setRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [isMobile, setIsMobile] = useState(false);
  const pickerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Закрытие при клике вне блока
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleSelect = (ranges: RangeKeyDict) => {
    const newRange = ranges.selection;
    setRange(newRange);
    onChange({
      start: newRange.startDate ?? new Date(),
      end: newRange.endDate ?? new Date(),
    });
  };

  return (
    <div className={`fixed inset-0 flex items-end justify-start z-50`}>
      <div
        ref={pickerRef}
        className={`bg-zinc-900 text-slate-200 p-4 rounded-lg shadow-lg md:w-full max-w-2xl ${
          isMobile
            ? "w-full max-w-md translate-y-[-20px] mb-10"
            : "w-auto translate-y-[-50px]"
        }`}
      >
        <DateRange
          ranges={[range]}
          onChange={handleSelect}
          months={isMobile ? 1 : 2}
          direction="horizontal"
          rangeColors={["#214001"]}
          showDateDisplay={false}
        />
        <button
          className="bg-[#5c902e] hover:bg-lime-700 px-4 py-2 mt-2 rounded-md w-full"
          onClick={onClose}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default DatePicker;
