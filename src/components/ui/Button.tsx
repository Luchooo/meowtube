import { PropsWithChildren } from "react";
import { LoadingIcon } from "../../assets/LoadingIcon";

type ButtonProps = PropsWithChildren & {
  type?: "submit" | "button";
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
};

export const Button = ({
  type = "submit",
  disabled = false,
  isLoading = false,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`flex flex-row justify-center items-center bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg`}
    >
      {isLoading ? "Enviando" : children}
      {isLoading && <LoadingIcon />}
    </button>
  );
};
