import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import Heading2 from "./Heading2";

const info = [
  {
    id: 1,
    title: "destination.title",
    paragraph: "destination.p",
    image: "/info1.png",
  },
  {
    id: 2,
    title: "when.title",
    paragraph: "when.p",
    image: "/room1.png",
  },
  {
    id: 3,
    title: "how.title",
    paragraph: "how.p",
    image: "/info3.png",
  },
  {
    id: 4,
    title: "what.title",
    paragraph: "what.p",
    image: "/info4.png",
  },
];

const Information = () => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(1);

  // Получаем активный объект из массива
  const activeInfo = info.find((item) => item.id === activeId);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {activeInfo && (
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Анимация контента */}
          <motion.div className="flex flex-col justify-between h-full py-5 max-w-xl">
            <motion.div
              key={activeId} // Обновление при смене
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Heading2>{t(activeInfo.title)}</Heading2>
              <p className="my-8 text-lg">{t(activeInfo.paragraph)}</p>
            </motion.div>

            {/* Анимация списка заголовков */}
            <div className="flex flex-col justify-center mb-6 border-b-2 border-gray-400">
              {info
                .filter((item) => item.id !== activeId) // Убираем активный элемент
                .map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className="flex justify-between py-2 font-sf text-lg font-semibold text-lime-700 border-t-2 transition-all duration-300 border-gray-400 cursor-pointer hover:text-lime-800"
                  >
                    <span>{t(item.title).toUpperCase()}</span>
                    <span>→</span>
                  </div>
                ))}
            </div>
          </motion.div>

          {/* Анимация изображения */}
          <motion.div
            key={`image-${activeId}`} // Уникальный ключ
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <img
              src={activeInfo.image}
              alt={t(activeInfo.title)}
              className="w-full h-full object-cover max-w-lg shadow-lg"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Information;
