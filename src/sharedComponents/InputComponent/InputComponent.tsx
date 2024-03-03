import { ChangeEventHandler } from "react";

type inputType = {
  className?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name?: string;
  checked?: boolean;
};

const InputComponent = ({
  className,
  type,
  placeholder,
  value,
  onChange,
  name,
  checked,
}: inputType) => {
  return (
    <>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        checked={checked}
      />
    </>
  );
};

export default InputComponent;
