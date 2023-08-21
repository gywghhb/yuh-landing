import React, { FC } from "react";

import SectionContainer from "@/components/SectionContainer.component";
import SectionBackground from "@/components/SectionBackground.component";
import { ndot47 } from "@/utils/font-loader";

interface Props {}

const AboutSection: FC<Props> = () => {
  const titleStyle = ndot47.className + " text-4xl mb-10"
  const subtitleStyle = ndot47.className + " text-[14px] text-[#C3C3C3] mb-1"
  const pStyle = "text-[#A7A7A7] mb-4"

  return (
    <section id="about">
      <SectionContainer className="my-12">
        <SectionBackground className="flex-col-reverse md:flex-row">
          <div id="about-text" className="mx-6 my-12 md:ml-14 md:my-14">
            <span className={subtitleStyle}>&gt; ABOUT</span>
            <h1 className={titleStyle}>Create, Connect, <span className="text-[#C95656]">Code</span> in a 24-Hour Hackathon</h1>
            <p className={pStyle}>We are bringing hundreds of developers, designers, and ideators to explore what&apos;s possible by working together in a 2-day, 24-hour hackathon.</p>
            <p className={pStyle}>Whether you&apos;re an experienced hacker or someone who&apos;s learning the rope, we have a place for your and we&apos;re eager see what inspiring project you&apos;ll bring to the presentation booth.</p>
          </div>
          <div id="about-media" className="mx-6 my-12 md:mr-14 md:my-14">
            MEDIA
          </div>
        </SectionBackground>
      </SectionContainer>
    </section>
  )
}

export default AboutSection