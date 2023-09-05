import React, { FC } from "react";

import SectionContainer from "@/components/section-container.component";
import SectionBackground from "@/components/section-background.component";
import ExpandableCard from "@/components/expandable-card.component";

import { ndot47 } from "@/utils/font-loader";
import { pStyle, subtitleStyle, titleStyle } from "@/utils/font-styles";

interface EventCardProps {
  id?: string | undefined;
  title: string;
  titleIcon?: React.ReactNode | null;
  description: string;
  body?: React.ReactNode | null;
  className?: string | null;
}

const EventCard: FC<EventCardProps> = ({
  id,
  title,
  titleIcon,
  description,
  body,
  className,
}) => {
  return (
    <ExpandableCard className={`${className}`}>
      <div id={id} className="flex flex-col px-10 pt-10">
        <div className="flex flex-row">
          <div className="flex shrink-0">{titleIcon}</div>
          <h5 className={`${ndot47.className} text-xl`}>{title}</h5>
        </div>
        <p className="text-[#A7A7A7] mt-2 mb-6">{description}</p>
      </div>
      {body}
    </ExpandableCard>
  );
};

const EventSection: FC = () => {

  return (
    <SectionContainer id="events" className="mb-12">
      <SectionBackground className="flex-col">
        <div id="event-text-container" className="mx-6 mt-12 md:mx-14 md:mt-14">
          <span className={subtitleStyle}>&gt; EVENT DETAIL</span>
          <h1 className={`${titleStyle} max-w-[600px]`}>
            Protytype, Program, <span className="text-[#58A0D4]">Present</span>{" "}
            Your Next Grand Idea
          </h1>
          <p className={pStyle}>
            Brainstorming an idea, coding for a MVP, and presenting your final
            product, we at yuHacks aim to provide you with the best platform to
            make it happens.
          </p>
        </div>
        <div
          id="event-details-container"
          className="mx-6 mb-12 mt-8 md:mx-14 md:mb-14"
        >
          {/* TODO */}
          <div id="event-cards-container" className="flex flex-row gap-4 mb-4">
            <EventCard
              title="Schedule"
              description="This is a description on schedule."
              className={"grow"}
            />
            <EventCard
              title="Neworking"
              description="This is a description on networking events."
            />
          </div>
          <div id="event-cards-container" className="flex flex-row gap-4">
            <EventCard
              title="Schedule"
              description="This is a description on schedule."
            />
            <EventCard
              title="Neworking"
              description="This is a description on networking events."
              className={"grow"}
            />
          </div>
        </div>
      </SectionBackground>
    </SectionContainer>
  );
};

export default EventSection;
