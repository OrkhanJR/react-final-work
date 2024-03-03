import { ChangeEventHandler } from "react";

type inputType = {
  className?: string;
  type?: string;
  placeholder?: string;
  value?:string;
  onChange?: ChangeEventHandler<HTMLInputElement>
  name?: string
};

const InputComponent = ({ className, type, placeholder, value, onChange, name }: inputType) => {
  return (
    <>
      <input className={className} type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} />
    </>
  );
};

export default InputComponent;
