import { createContext, useContext, useState, useEffect, useRef } from "react";

// Список изображений
const images = ["/hero1.png", "/hero2.png", "/hero3.png", "/hero4.png"];

interface BackgroundContextProps {
  bgImage: string;
  setBgImage: (image: string) => void;
  pauseRotation: () => void;
  resumeRotation: () => void;
}

const BackgroundContext = createContext<BackgroundContextProps | undefined>(
  undefined
);

export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error("useBackground must be used within a BackgroundProvider");
  }
  return context;
};

export const BackgroundProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bgImage, setBgImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Функция смены фона с задержкой (чтобы анимация не мигала)
  const changeBackground = (index: number) => {
    setTimeout(() => {
      setBgImage(images[index]);
    }, 200); // 🔥 Добавляем задержку в 200 мс
  };

  // Функция запуска смены фона
  const startRotation = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  // Приостанавливаем смену фона
  const pauseRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Возобновляем смену фона
  const resumeRotation = () => {
    if (!intervalRef.current) {
      startRotation();
    }
  };

  // Запускаем авто-смену фона
  useEffect(() => {
    startRotation();
    return () => pauseRotation();
  }, []);

  // Меняем фон с задержкой
  useEffect(() => {
    changeBackground(currentIndex);
  }, [currentIndex]);

  return (
    <BackgroundContext.Provider
      value={{ bgImage, setBgImage, pauseRotation, resumeRotation }}
    >
      {children}
    </BackgroundContext.Provider>
  );
};
