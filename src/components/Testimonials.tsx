import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import BackgroundBlur from "./BackgroundBlur";
import GreenBlock from "./GreenBlock";
import Heading2 from "./Heading2";

// Данные отзывов
const reviews = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida metus nec.",
    name: "Dmitriy Manov",
    role: "Palestinian refugee",
    img: "/avatars/Dima.png",
  },
  {
    id: 2,
    text: "Amazing experience, highly recommend!",
    name: "Sarah Williams",
    role: "Freelancer",
    img: "/avatars/Valeri.png",
  },
  {
    id: 3,
    text: "The best jungle retreat I have ever visited. Fantastic service!",
    name: "Carlos Rivera",
    role: "Travel Blogger",
    img: "/avatars/Roman.jpg",
  },
];

const Testimonials = () => {
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
                      "{review.text}"
                    </p>
                    <div className="flex items-center justify-start mt-6">
                      <img
                        src={review.img}
                        alt={review.name}
                        width={100}
                        height={100}
                        className="rounded-full shadow-lg"
                      />
                      <div className="text-start ml-4 text-white">
                        <p className="font-gotham-narrow text-xl">
                          {review.name}
                        </p>
                        <p className="font-gotham-narrow text-xl">
                          {review.role}
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
