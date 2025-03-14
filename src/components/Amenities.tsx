import BackgroundBlur from "./BackgroundBlur";
import GreenBlock from "./GreenBlock";
import Heading2 from "./Heading2";

const Amenities = () => {
  return (
    <div>
      <BackgroundBlur src="/hero4.png">
        <GreenBlock>
          <Heading2>Our Amenities</Heading2>
          <p className="py-10 text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, perferendis omnis numquam voluptatem ea a obcaecati
            reiciendis corrupti. Dolore minima possimus doloremque temporibus,
            voluptas veritatis minus! Nihil ipsa eos minima?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:pb-20">
            <ul className="custom-list space-y-2">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
            <ul className="hidden sm:block custom-list space-y-2">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
        </GreenBlock>
      </BackgroundBlur>
    </div>
  );
};

export default Amenities;
