import { FC, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderNavigation } from "./SliderNavigation";

type MainSliderProps = {
  items: ReactNode[];
};

export const Slider: FC<MainSliderProps> = ({ items }) => {
  return (
    <Swiper>
      {items.map((item, i) => (
        <SwiperSlide key={i} className="text-black">
          {item}
        </SwiperSlide>
      ))}

      <SliderNavigation />
    </Swiper>
  );
};

export default Slider;
