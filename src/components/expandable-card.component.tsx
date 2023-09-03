import { FC } from "react";

interface Props {
  id?: string | null,
  children?: React.ReactNode | null,
  className?: string | null,
}

const ExpandableCard: FC<Props> = ({id, children}) => {

  return (
    <div>
      {children}
    </div>
  )
}

export default ExpandableCard;