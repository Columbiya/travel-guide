import {
  GetCompilationsListCultureResponse,
  MainSliderResponse,
} from "@/src/types";
import { SectionsAnchors } from ".";
import { FC, useMemo } from "react";
import dynamic from "next/dynamic";
import { SliderItem } from "./Slider/SliderItem";

type MainPageProps = {
  sliderItems: MainSliderResponse["data"];
  whatToSee: GetCompilationsListCultureResponse;
};

const Slider = dynamic(() => import("./Slider"), { ssr: false });

const MainPage: FC<MainPageProps> = ({ sliderItems, whatToSee }) => {
  const items = useMemo(
    () => sliderItems.map((s) => <SliderItem {...s} key={s.id} />),
    [sliderItems]
  );

  return (
    <main>
      <SectionsAnchors />
      <Slider items={items} />
    </main>
  );
};

export default MainPage;

export { SectionsAnchors } from "./SectionsAnchors";
export { Slider } from "./Slider";
