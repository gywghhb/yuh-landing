import Link from "next/link";
import React, { FC } from "react";
import SectionContainer from "./section-container.component";
import { ndot47 } from "@/utils/font-loader";

interface Props {
  // TODO - allow nav links customization
}

export interface NavLink {
  name: string;
  href: string;
}

const NavBar: FC<Props> = ({}) => {
  const links: NavLink[] = [
    {name: "About", href: "#about"},
    {name: "Events", href: "#events"},
    {name: "Sponsors", href: "#sponsors"},
    {name: "FAQ", href: "#faq"},
  ]

  return (
    <header
      id="navbar"
      className="bg-[#F6F6F6]"
    >
      <SectionContainer
        id="navbar-container"
        className="flex-row justify-between items-center my-4 md:my-6"
      >
        <div id="navbar-logo-container" className={ndot47.className}>
          {/* TODO - add logo */}
          yuHacks<span className="text-[#C3C3C3]">(<span className="text-[#C95656]">2023</span>)</span>
        </div>
        <div 
          id="navbar-links-container"
          className="hidden md:inline-flex gap-4"
        >
          {
            links.map((link) => (
              <Link 
                href={link.href} 
                key={link.name}
                className="text-[#767676] hover:text-[#C95656] transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))
          }
        </div>
        <div 
          id="navbar-menu-container" 
          className="inline-flex flex-row gap-4 justify-center align-middle"
        >
          <div 
            id="navbar-social-container"
            className="hidden flex-row gap-3 justify-center items-center md:inline-flex"
          >
            {/* TODO - replace emoji with icons */}
            <Link href="https://www.linkedin.com/company/yuhacks/">ℹ️</Link>
            <Link href="https://www.instagram.com/yuhacks/">📷</Link>
            <Link href="https://www.threads.net/@yuhacks">🐦</Link>
          </div>
          <div 
            id="navbar-button-container"
            className="inline-flex flex-row gap-4 justify-center items-center"
          >
            <div 
              id="navbar-cta-button"
              className="bg-[#C95656] text-[#FDFDFD] text-[14px] rounded-[32px] px-4 py-1"
              // TODO - add link to portal
            >
              <span>Portal -&gt;</span>
              {/* TODO - add portal icon */}
            </div>
            <div 
              id="navbar-collapse-button"
              className="md:hidden"
            >
              {/* TODO - replace emoji with custom icon */}
              <span>🍔</span>
            </div>
          </div>
        </div>
      </SectionContainer>
    </header>
  );
};

export default NavBar;
