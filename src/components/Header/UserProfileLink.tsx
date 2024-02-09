import { MenuItem } from "@szhsin/react-menu";
import { Link } from "react-router-dom";

export const UserProfileLink = () => {
  return (
    <MenuItem className="p-0 hover:bg-transparent">
      <Link
        to="/perfil"
        className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
      >
        <img
          src="https://iili.io/J1uGb8G.png"
          className="size-10 object-cover rounded-full"
        />
        <div className="flex flex-col text-sm">
          <span className="text-sm">Luchooo</span>
          <span className="text-xs text-gray-500">
            luis.udec.sanchez@gmail.com
          </span>
        </div>
      </Link>
    </MenuItem>
  );
};
