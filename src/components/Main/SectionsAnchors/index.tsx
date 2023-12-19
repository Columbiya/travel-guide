import { useMemo } from "react";
import { BlackOutlineHoverBlackButton, Container } from "@/src/components";
import { Swiper, SwiperSlide } from "swiper/react";

export type SectionAnchor = {
  name: string;
  anchor: string;
};
export const SectionsAnchors = () => {
  const anchors = useMemo<SectionAnchor[]>(
    () => [
      {
        name: "Что посмотреть",
        anchor: "#what-to-see",
      },
      {
        name: "Куда пойти",
        anchor: "#where-to-go",
      },
      {
        name: "Чем заняться",
        anchor: "#what-to-do",
      },
      {
        name: "Что поесть",
        anchor: "#what-to-eat",
      },
      {
        name: "Что купить",
        anchor: "#what-to-buy",
      },
      {
        name: "Где остановиться",
        anchor: "#where-to-stay",
      },
    ],
    []
  );
  return (
    <Container>
      <nav className="flex justify-center">
        {anchors.map((a, i) => (
          <BlackOutlineHoverBlackButton
            href={a.anchor}
            key={a.anchor}
            active={i === 0}
            style={
              i !== 0
                ? { position: "relative", right: i * 15, zIndex: i + 1 }
                : undefined
            }
          >
            {a.name}
          </BlackOutlineHoverBlackButton>
        ))}
      </nav>
    </Container>
  );
};
