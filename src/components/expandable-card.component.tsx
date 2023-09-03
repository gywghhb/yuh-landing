import { FC } from "react";

interface Props {
  id?: string | undefined,
  children?: React.ReactNode | null,
  className?: string | null,
}
/**
 * Expandable Card
 * ====================
 * 
 * 
 * @param id the id of the background div (usually not needed).
 * @param children HTML elements to render inside the div.
 * @param className class and additional Tailwind style of the background div.
 */
const ExpandableCard: FC<Props> = ({id, children, className}) => {

  return (
    <div
      id={id}
      className={`shadow-lg bg-[#FDFDFD] rounded-2xl ${className}`}
    >
      {children}
    </div>
  )
}

export default ExpandableCard;