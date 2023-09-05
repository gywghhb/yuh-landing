import React, { FC } from "react";

import SectionContainer from "@/components/section-container.component";
import SectionBackground from "@/components/section-background.component";
import { ndot47 } from "@/utils/font-loader";


const AboutSection: FC = () => {
  const titleStyle = ndot47.className + " text-4xl mb-10 max-w-[460px] mt-4";
  const subtitleStyle = ndot47.className + " text-xs text-[#CCCCCC]";
  const pStyle = "text-[#A7A7A7] mb-4";

  return (
    <SectionContainer id="about" className="my-12">
      <SectionBackground className="flex-col-reverse md:flex-row">
        <div id="about-text" className="mx-6 my-12 md:ml-14 md:my-14">
          <span className={subtitleStyle}>&gt; ABOUT YUHACKS</span>
          <h1 className={titleStyle}>
            Create, Connect, <span className="text-[#C95656]">Code</span> in a
            24-Hour Hackathon
          </h1>
          <p className={pStyle}>
            We are bringing hundreds of developers, designers, and ideators to
            explore what&apos;s possible by working together in a 2-day, 24-hour
            hackathon.
          </p>
          <p className={pStyle}>
            Whether you&apos;re an experienced hacker or someone who&apos;s
            learning the rope, we have a place for your and we&apos;re eager see
            what inspiring project you&apos;ll bring to the presentation booth.
          </p>
        </div>
        <div
          id="about-media"
          className="flex shrink-0 mx-6 my-12 md:mr-14 md:my-14"
        >
          MEDIA
        </div>
      </SectionBackground>
    </SectionContainer>
  );
};

export default AboutSection;
