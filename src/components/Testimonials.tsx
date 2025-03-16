import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import BackgroundBlur from "./BackgroundBlur";
import GreenBlock from "./GreenBlock";
import Heading2 from "./Heading2";
import { useTranslation } from "react-i18next";

// Данные отзывов
const reviews = [
  {
    id: 1,
    text: "reviews.1.text",
    name: "reviews.1.name",
    role: "reviews.1.role",
    img: "/avatars/Dima.webp",
  },
  {
    id: 2,
    text: "reviews.2.text",
    name: "reviews.2.name",
    role: "reviews.2.role",
    img: "/avatars/Valeri.webp",
  },
  {
    id: 3,
    text: "reviews.3.text",
    name: "reviews.3.name",
    role: "reviews.3.role",
    img: "/avatars/Roman.webp",
  },
];

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <div>
      <BackgroundBlur src="/hero3.png" justify="end">
        <GreenBlock>
          <div className="text-center md:text-end">
            <Heading2>Reviews</Heading2>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="relative"
            >
              {reviews.map((review) => (
                <SwiperSlide
                  key={review.id}
                  className="flex justify-end items-center px-4 pt-10 pb-20 md:pt-20 md:pb-40"
                >
                  <div className="flex flex-col max-w-xs ml-auto text-right">
                    <p className="font-gotham-italic text-start md:text-2xl text-slate-200">
                      "{t(review.text)}"
                    </p>
                    <div className="flex items-center justify-start mt-6">
                      <img
                        src={review.img}
                        alt={t(review.name)}
                        width={100}
                        height={100}
                        className="rounded-full shadow-lg"
                      />
                      <div className="text-start ml-4 text-white">
                        <p className="font-gotham-narrow text-xl">
                          {t(review.name)}
                        </p>
                        <p className="font-gotham-narrow text-xl">
                          {t(review.role)}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Стили для точек */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
        </GreenBlock>
      </BackgroundBlur>
    </div>
  );
};

export default Testimonials;
