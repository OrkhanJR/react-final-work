import { MouseEventHandler, ReactNode } from "react";

type buttonType = {
  className?: string;
  children: ReactNode | ReactNode[];
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

const ButtonComponent = ({ className, children, onClick }: buttonType) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default ButtonComponent;
