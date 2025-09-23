import { type PropsWithChildren } from "react";

interface ButtonProps {
  clickFn: () => void;
}

function Button({ children, clickFn }: PropsWithChildren<ButtonProps>) {
  return (
    <button
      onClick={clickFn}
      className="bg-custom-red w-full rounded-full px-300 py-200 font-bold text-white hover:cursor-pointer"
    >
      {children}
    </button>
  );
}

export default Button;
