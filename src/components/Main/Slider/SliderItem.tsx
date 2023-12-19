import { Constants, MainSliderItem } from "@/src/types";
import { FC } from "react";

type SliderItem = MainSliderItem;

export const SliderItem: FC<SliderItem> = ({
  id,
  pictureDesktop,
  pictureMob,
  description,
  btnLink,
  name,
  btnText,
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>

      <img src={`${Constants.IMAGE_URL}${pictureDesktop}`} alt="" />
      <img src={`${Constants.IMAGE_URL}${pictureMob}`} alt="" />
    </div>
  );
};
