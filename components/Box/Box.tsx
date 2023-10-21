import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  gradient?: boolean;
  children: ReactNode | ReactNode[];
  className?: string;
};

const Box = ({ gradient = false, children, className }: Props) => {
  return (
    <div
      className={clsx(
        gradient ? "bg-mainHorizontal p-2" : "bg-white px-9 py-7",
        "rounded-lg drop-shadow-lg",
        className
      )}
    >
      {gradient ? (
        <div className="bg-white px-9 py-7">
          <div>{children}</div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default Box;
