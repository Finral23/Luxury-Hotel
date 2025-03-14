import { useState } from "react";
import Button from "./Button";

const Welcome = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 my-20 lg:my-30 flex flex-col md:flex-row items-start ">
      {/* Левая часть с изображениями */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <div className="relative ">
          <img
            src="/welcome.png"
            alt="Luxury Jungle Hotel"
            className="w-3xl h-3xl"
          />
        </div>
      </div>

      {/* Правая часть с текстом */}
      <div className="w-full lg:w-1/2 text-center md:text-left space-y-10 my-10">
        <h2 className="text-4xl text-white tracking-wider">
          Welcome to Luxury Jungle Hotel
        </h2>
        <div className="md:pl-15 space-y-15">
          <p className="text-lg text-gray-300 leading-10 tracking-wider">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            iure illum deleniti magnam earum sunt aliquid perferendis illo
            atque, voluptate nisi natus dolores culpa quas, aut quasi amet,
            maiores distinctio. Quae minus deleniti, sequi distinctio dolorum
            repellendus dolores quam nisi provident explicabo neque impedit,
            fuga perspiciatis voluptatem cumque sit laborum?
            {isOpen &&
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, rem! Suscipit aliquid quia corporis ea quaerat commodi quam nostrum architecto praesentium, sed nulla facere laborum accusantium quibusdam error assumenda similique tenetur, excepturi consequatur quidem expedita facilis rerum autem!"}
          </p>
          <Button onClick={() => setOpen(!isOpen)}>READ MORE</Button>
        </div>
        <div className="flex flex-col text-end">
          <p className="font-sf-thin">Contact</p>
          <p className="font-sf-thin">+380 954 14 88</p>
          <p className="font-sf-thin">
            Ukraine, Donetsk, Fedora Zaitseva str.13
          </p>
          <p className="font-sf-thin">maktraher2004@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
