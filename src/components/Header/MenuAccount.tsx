import { Menu, MenuButton } from "@szhsin/react-menu";
import { RiArrowDownSLine } from "react-icons/ri";

interface MenuAccountProps {
  children: React.ReactNode;
}

export const MenuAccount = ({ children }: MenuAccountProps) => {
  return (
    <Menu
      menuButton={
        <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors">
          <img
            src="https://iili.io/J1uGb8G.png"
            className="size-10 object-cover rounded-full"
          />
          <span>@luchooo</span>
          <RiArrowDownSLine />
        </MenuButton>
      }
      align="end"
      arrow
      arrowClassName="bg-secondary-100"
      transition
      menuClassName="bg-secondary-100 p-4"
    >
      {children}
    </Menu>
  );
};
