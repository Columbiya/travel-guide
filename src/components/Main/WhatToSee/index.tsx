import { GetCompilationsListCultureResponse } from "@/src/types";
import { FC } from "react";
import { Container } from "@/src/components";

type WhatToSeeProps = {
  items: GetCompilationsListCultureResponse;
};

export const WhatToSee: FC<WhatToSeeProps> = ({ items }) => {
  return (
    <section>
      <Container>
        <div className="flex gap-5">
          {items.map((item) => (
            <div className="rounded-3xl overflow-hidden hover:scale-125 transition-all">
              {item.name}
              {item.sectionCode}

              <img src={item.picture} alt="" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
