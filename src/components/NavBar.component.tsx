import Link from "next/link";
import React, { FC } from "react";
import SectionContainer from "./SectionContainer.component";

interface Props {
  // TODO - allow nav links customization
}

const NavBar: FC<Props> = () => {
  const links = [
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
        <div id="navbar-logo-container">
          {/* TODO */}
          yuHacks(<span className="text-[#C95656]">2023</span>)
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
            <Link href="#">ℹ️</Link>
            <Link href="#">📷</Link>
            <Link href="#">🐦</Link>
          </div>
          <div 
            id="navbar-button-container"
            className="inline-flex flex-row gap-4 justify-center items-center"
          >
            <div 
              id="navbar-cta-button"
              className="bg-[#C95656] text-[#FDFDFD] text-[14px] rounded-[32px] px-4 py-1"
            >
              {/* TODO */}
              <div>Portal</div>
            </div>
            <div 
              id="navbar-collapse-button"
              className="md:hidden"
            >
              {/* TODO */}
              <span>🍔</span>
            </div>
          </div>
        </div>
      </SectionContainer>
    </header>
  );
};

export default NavBar;
