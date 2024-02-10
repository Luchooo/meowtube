import { MenuItem } from "@szhsin/react-menu";

interface MenuItemBtnProps {
  handleClick: () => void;
  icon: React.ReactNode;
  text: string;
}

export const MenuItemBtn = ({ handleClick, icon, text }: MenuItemBtnProps) => {
  return (
    <MenuItem className="p-0 hover:bg-transparent">
      <button
        onClick={handleClick}
        className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
      >
        {icon} {text}
      </button>
    </MenuItem>
  );
};
