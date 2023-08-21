import React, { FC } from "react";

import SectionContainer from "@/components/SectionContainer.component";
import { ndot47 } from "@/utils/font-loader";

interface Props {}

const HeroSection: FC<Props> = () => {
  const titleStyle = "text-[#FDFDFD] text-[40px] md:text-[64px] mb-4 md:leading-tight " + ndot47.className 

  return (
    <section id="hero">
      <SectionContainer id="hero-container" className="py-2">
        <div
          id="hero-background"
          className="flex bg-[#2C2C2C] rounded-[32px] md:rounded-[42px] h-[100vh] md:h-[85vh] w-[100%]"
        >
          <div id="hero-text-container" className="mx-4 mt-12 md:ml-14 md:mt-14">
            <h1 className={titleStyle}>
              <span className="text-[#C95656]">&gt;</span> York <br />
              University&apos;s <br />
              Largest <br />
              Hackathon
            </h1>
            <h4 className="text-[#888888] text-[16px] md:text-[20px] mb-2">
              In-person Event • Coming this Fall
            </h4>
            <p className="text-[#737373]">
              <span className="text-[#C95656]">Hacker</span> and{" "}
              <span className="text-[#58A0D4]">Volunteer</span> Applications
              Coming Soon...
            </p>
          </div>
          <div 
            id="hero-media-container"
            className=""
          >
            {/* TODO - add media */}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default HeroSection;
