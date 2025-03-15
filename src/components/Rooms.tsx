import { useEffect, useState } from "react";
import Button from "./Button";
import Heading2 from "./Heading2";
import RoomImage from "./RoomImage";

const images = ["1", "2", "3", "4", "5", "6"]; // Массив изображений

const Rooms = () => {
  const [isVisible, setVisible] = useState(false);
  const [initialCount, setInitialCount] = useState(3); // Количество картинок по умолчанию

  // Обновление количества отображаемых элементов в зависимости от ширины экрана
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setInitialCount(2); // iPad (md)
      } else {
        setInitialCount(3); // Десктоп (lg)
      }
    };

    updateColumns(); // Запускаем при монтировании
    window.addEventListener("resize", updateColumns); // Отслеживаем ресайз
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-2">
      {/* Заголовок и кнопка */}
      <div className="flex justify-center sm:justify-between my-5">
        <span className="hidden sm:block px-5 md:px-0">
          <Button onClick={() => setVisible(!isVisible)}>
            {isVisible ? "HIDE" : "VIEW ALL"}
          </Button>
        </span>
        <Heading2>Rooms & Suites</Heading2>
      </div>

      {/* Галерея */}
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-0">
        {images
          .slice(0, isVisible ? images.length : initialCount)
          .map((src) => (
            <RoomImage key={src} src={src} />
          ))}
      </div>

      {/* Кнопка для мобильных */}
      <span className="block sm:hidden mt-4 px-5">
        <Button onClick={() => setVisible(!isVisible)}>
          {isVisible ? "HIDE" : "VIEW ALL"}
        </Button>
      </span>
    </div>
  );
};

export default Rooms;
