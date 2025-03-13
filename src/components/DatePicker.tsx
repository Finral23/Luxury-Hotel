import { useState, useEffect } from "react";
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

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleSelect = (ranges: RangeKeyDict) => {
    const newRange = ranges.selection;
    setRange(newRange);
    onChange({
      start: newRange.startDate ?? new Date(),
      end: newRange.endDate ?? new Date(),
    });
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center  z-50`}>
      <div
        className={`bg-zinc-900 text-slate-200 p-4 rounded-lg shadow-lg w-full max-w-2xl ${
          isMobile ? "w-full max-w-md" : ""
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
