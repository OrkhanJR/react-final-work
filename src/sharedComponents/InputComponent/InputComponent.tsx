type inputType = {
  className: string;
  type: string;
  placeholder?: string;
};

const InputComponent = ({ className, type, placeholder }: inputType) => {
  return (
    <>
      <input className={className} type={type} placeholder={placeholder} />
    </>
  );
};

export default InputComponent;
