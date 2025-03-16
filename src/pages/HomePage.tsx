import { lazy, Suspense, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../SEO";
import { useBackground } from "../context/BackgroundContext";

// Мгновенно загружаемые компоненты
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

// Динамическая загрузка остальных компонентов
const Booking = lazy(() => import("../components/Booking"));
const Welcome = lazy(() => import("../components/Welcome"));
const Amenities = lazy(() => import("../components/Amenities"));
const Rooms = lazy(() => import("../components/Rooms"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const Information = lazy(() => import("../components/Information"));

const HomePage = () => {
  const { bgImage } = useBackground();
  const { i18n } = useTranslation();
  const [prevImage, setPrevImage] = useState(bgImage);
  const bookingRef = useRef<HTMLDivElement>(null);
  const roomsRef = useRef<HTMLDivElement>(null);

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToRooms = () => {
    roomsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setPrevImage(bgImage);
  }, [bgImage]);

  return (
    <div
      key={i18n.language}
      className="relative  bg-zinc-900 text-slate-200 font-gotham overflow-hidden"
    >
      <SEO
        title="Luxury Jungle Hotel - Paradise Escape"
        description="Experience the perfect blend of luxury and nature at our jungle resort."
      />
      {/* Фоновые изображения */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.img
            key={prevImage}
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
        <NavBar onClick={scrollToBooking} />
        <Hero onClick={scrollToRooms} />
        <Suspense
          fallback={<div className="text-center py-10">Loading...</div>}
        >
          <div className="bg-zinc-900">
            <Booking ref={bookingRef} />
            <Welcome />
            <Amenities />
            <Rooms ref={roomsRef} />
            <Testimonials />
            <Information />
          </div>
        </Suspense>
        <div className="bg-green-dark ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
