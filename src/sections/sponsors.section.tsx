import React, { FC } from "react";

import SectionBackground from "@/components/section-background.component";
import SectionContainer from "@/components/section-container.component";
import { ndot47 } from "@/utils/font-loader";


const SponsorsSection: FC = () => {
  const titleStyle = ndot47.className + " text-4xl mb-10 max-w-[600px] mt-4";
  const subtitleStyle = ndot47.className + " text-xs text-[#CCCCCC]";
  const pStyle = "text-[#A7A7A7] mb-4 max-w-[800px]";

  return (
    <SectionContainer id="sponsors" className="mb-12">
    <SectionBackground className="flex-col">
      <div id="sponsors-text-container" className="mx-6 mt-12 md:mx-14 md:mt-14">
        <span className={subtitleStyle}>&gt; SPONSORSHIP</span>
        <h1 className={titleStyle}>
          Sponsor, Support, <span className="text-[#58A0D4]">Supercharge</span>{" "}
          the Next Gen Hackers
        </h1>
        <p className={pStyle}>
          (Sponsor text)
        </p>
      </div>
      <div
        id="sponsors-details-container"
        className="mx-6 mb-12 mt-8 md:mx-14 md:mb-14"
      >
        {/* TODO */}
      </div>
    </SectionBackground>
  </SectionContainer>
  )
}

export default SponsorsSection;

