import React, { FC } from "react";

import SectionContainer from "@/components/SectionContainer.component";

// import { ndot47 } from "@/utils/font-loader";

interface Props {}

const Footer: FC<Props> = () => {

  return (
    <SectionContainer>
      <div
        id="footer-background"
        className="flex flex-col md:flex-row bg-[#303030] w-full mx-4 px-6 pt-8 pb-6 text-[#767676] rounded-t-3xl"
      >
        <div id="footer-title" className="text-[12px]">yuHacks brought to you with pride by: </div>
        <div 
          id="footer carousel"
          className=""
        >
          Something
        </div>
      </div>
    </SectionContainer>
  )
}

export default Footer;