import React, { FC } from "react";

interface Props {
  children?: React.ReactNode,
  className?: string,
  id?: string,
}

const SectionContainer: FC<Props> = ({children, className, id}) => {
  const style = "flex mx-2 sm:mx-4 md:mx-12 " + className;

  return (
    <section 
      id={id}
      className={style}
    >
      {children}
    </section>
  )
}

export default SectionContainer;