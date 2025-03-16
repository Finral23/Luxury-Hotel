import { forwardRef, useEffect, useState } from "react";
import Button from "./Button";
import Heading2 from "./Heading2";
import RoomImage from "./RoomImage";
import { useTranslation } from "react-i18next";

const images = ["1", "2", "3", "4", "5", "6"]; // Массив изображений

const Rooms = forwardRef<HTMLDivElement>((_, ref) => {
  const [isVisible, setVisible] = useState(false);
  const [initialCount, setInitialCount] = useState(3); // Количество картинок по умолчанию
  const { t } = useTranslation();

  // Обновление количества отображаемых элементов в зависимости от ширины экрана
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 640 && window.innerWidth < 1024) {
        setInitialCount(2); // iPad (md)
      } else {
        setInitialCount(3); // Десктоп (lg)
      }
    };

    updateColumns(); // Запускаем при монтировании
    window.addEventListener("resize", updateColumns); // Отслеживаем ресайз
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Функция переключения галереи
  const toggleGallery = () => {
    setVisible((prev) => {
      if (prev) {
        // Если "Показать меньше" → прокрутка к началу блока
        (ref as React.RefObject<HTMLDivElement>)?.current?.scrollIntoView({
          behavior: "smooth",
        });
      }
      return !prev;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-2 scroll-mt-18" ref={ref}>
      {/* Заголовок и кнопка */}
      <div className="flex justify-center sm:justify-between my-5">
        <span className="hidden sm:block px-5 md:px-0">
          <Button onClick={() => setVisible(!isVisible)}>
            {isVisible
              ? t("rooms.b.less").toUpperCase()
              : t("rooms.b.more").toUpperCase()}
          </Button>
        </span>
        <Heading2>{t("rooms.h")}</Heading2>
      </div>

      {/* Галерея */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-0">
        {images
          .slice(0, isVisible ? images.length : initialCount)
          .map((src) => (
            <RoomImage key={src} src={src} />
          ))}
      </div>

      {/* Кнопка для мобильных */}
      <span className="block sm:hidden mt-4 px-5">
        <Button onClick={toggleGallery}>
          {isVisible
            ? t("rooms.b.less").toUpperCase()
            : t("rooms.b.more").toUpperCase()}
        </Button>
      </span>
    </div>
  );
});

export default Rooms;
