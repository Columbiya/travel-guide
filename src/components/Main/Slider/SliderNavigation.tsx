import { useSwiper } from "swiper/react";
import { WhiteButton } from "@/src/components";

export const SliderNavigation = () => {
  const swiper = useSwiper();

  return (
    <nav>
      <WhiteButton>{"<"}</WhiteButton>
      <WhiteButton>{">"}</WhiteButton>
    </nav>
  );
};
