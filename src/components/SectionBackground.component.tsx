import React, { FC } from "react";

interface Props {
  children?: React.ReactNode;
  id?: string;
  className?: string;
}

/**
 * SectionBackground
 * ====================
 * This component will render a div with a white background and rounded corners.
 * Usuaully used to wrap around section content, right after a <SectionContainer>.
 * By default, it is _flex_ and _flex-row_. Pass in a className to change this.
 *
 * @param children HTML elements to render inside the div.
 * @param id the id of the background div (usually not needed).
 * @param className class and additional Tailwind style of the background div.
 */
const SectionBackground: FC<Props> = ({ children, id, className }) => {
  const style =
    "flex bg-[#FDFDFD] rounded-[32px] md:rounded-[42px] w-[100%] " + className;

  return (
    <div id={id} className={style}>
      {children ? children : null}
    </div>
  );
};

export default SectionBackground;
