import { ReactNode } from "react";

type buttonType = {
  className: string;
  children: ReactNode | ReactNode[];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
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
