import { Constants, ISection } from "@/src/types";
import { FC } from "react";
import { BlackOutlineButton, Container, GreenButton } from "..";
import Image from "next/image";

type SectionProps = ISection;

export const Section: FC<SectionProps> = ({
  sectionId,
  sectionCode,
  sectionName,
  routs,
  icon,
}) => {
  return (
    <section>
      <Container>
        <header className="flex justify-between">
          <div>
            <h3>{sectionName}</h3>
            <img src={`${Constants.IMAGE_URL}${icon}`} alt="" />
          </div>
          <nav>
            <GreenButton href={`/section/${sectionCode}`}>
              Смотреть все
            </GreenButton>
            <BlackOutlineButton>Back</BlackOutlineButton>
            <BlackOutlineButton>Forward</BlackOutlineButton>
          </nav>
        </header>

        <div></div>
      </Container>
    </section>
  );
};
