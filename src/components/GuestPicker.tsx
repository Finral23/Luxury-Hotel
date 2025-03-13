import { useState, useRef, useEffect } from "react";
import { IoPersonSharp } from "react-icons/io5";
import GuestRow from "./GuestRow";

const GuestPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Функция закрытия при клике вне блока
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex-1" ref={dropdownRef}>
      {/* Кнопка выбора гостей */}
      <button
        className="flex items-center gap-2 px-4 py-2 bg-green-dark text-slate-200 rounded-full w-full md:w-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoPersonSharp className="text-xl" />
        <span>
          {adults} adults, {children} children
        </span>
      </button>

      {/* Всплывающее окно */}
      {isOpen && (
        <div className="absolute bottom-full mb-2 right-0 sm:left-0 bg-zinc-900 text-slate-300 rounded-lg shadow-lg p-4 z-50 w-48">
          <GuestRow
            label="Adults"
            count={adults}
            onChange={setAdults}
            min={1}
            max={10}
          />
          <GuestRow
            label="Children"
            count={children}
            onChange={setChildren}
            min={0}
            max={5}
          />
        </div>
      )}
    </div>
  );
};

export default GuestPicker;
