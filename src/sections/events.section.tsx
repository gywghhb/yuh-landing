import React, { FC } from "react";

import SectionContainer from "@/components/SectionContainer.component";
import SectionBackground from "@/components/SectionBackground.component";
import { ndot47 } from "@/utils/font-loader";
import ExpandableCard from "@/components/expandable-card.component";

interface Props {}

const EventSection: FC<Props> = () => {
  const titleStyle = ndot47.className + " text-4xl mb-10 max-w-[560px]";
  const subtitleStyle = ndot47.className + " text-[14px] text-[#C3C3C3] mb-1";
  const pStyle = "text-[#A7A7A7] mb-4 max-w-[800px]";

  return (
    <section id="about">
      <SectionContainer className="mb-12">
        <SectionBackground className="flex-col">
          <div
            id="event-text-container"
            className="mx-6 my-12 md:ml-14 md:my-14"
          >
            <span className={subtitleStyle}>&gt; EVENT</span>
            <h1 className={titleStyle}>
              Protytype, Program,{" "}
              <span className="text-[#58A0D4]">Present</span> Your Next Grand
              Idea
            </h1>
            <p className={pStyle}>
              Brainstorming an idea, coding for a MVP, and presenting your final
              product, we at yuHacks aim to provide you with the best platform
              to make it happens.
            </p>
          </div>
          <div id="event-details-container">
            {/* TODO */}
            <div>
              <ExpandableCard></ExpandableCard>
            </div>
          </div>
        </SectionBackground>
      </SectionContainer>
    </section>
  );
};

export default EventSection;
