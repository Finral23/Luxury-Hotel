import Amenities from "../components/Amenities";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Information from "../components/Information";
import NavBar from "../components/NavBar";
import Rooms from "../components/Rooms";
import Testimonials from "../components/Testimonials";
import Welcome from "../components/Welcome";
import { useBackground } from "../context/BackgroundContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { bgImage } = useBackground();
  const { i18n } = useTranslation();
  const [prevImage, setPrevImage] = useState(bgImage);

  useEffect(() => {
    setPrevImage(bgImage); // ✅ Теперь фон плавно обновляется
  }, [bgImage]);

  return (
    <div
      key={i18n.language}
      className="relative  bg-zinc-900 text-slate-200 font-gotham overflow-hidden"
    >
      {/* Фоновые изображения */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.img
            key={prevImage} // ✅ Правильный ключ
            src={prevImage}
            className="absolute inset-0 w-full h-[80vh] lg:h-auto object-cover filter blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Контент */}
      <div className="relative z-20">
        <NavBar />
        <Hero />
        <div className="bg-zinc-900">
          <Booking />
          <Welcome />
          <Amenities />
          <Rooms />
          <Testimonials />
          <Information />
        </div>
        <div className="bg-green-dark ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
