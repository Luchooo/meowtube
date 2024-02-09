import { MenuItem } from "@szhsin/react-menu";
import { Link } from "react-router-dom";

interface MenuItemLinkProps {
  path: string;
  icon: React.ReactNode;
  text: string;
}

export const MenuItemLink = ({ path, icon, text }: MenuItemLinkProps) => {
  return (
    <MenuItem className="p-0 hover:bg-transparent">
      <Link
        to={path}
        className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
      >
        {icon} {text}
      </Link>
    </MenuItem>
  );
};
