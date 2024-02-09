import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type LinkButtonProps = PropsWithChildren & {
  to: string;
};

export const LinkButton = ({ to, children }: LinkButtonProps) => {
  return (
    <Link
      to={to}
      className="flex flex-row justify-center items-center bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg"
    >
      {children}
    </Link>
  );
};
