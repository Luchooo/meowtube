import { Menu, MenuButton } from "@szhsin/react-menu";
import { RiArrowDownSLine } from "react-icons/ri";
import { useAuth } from "../../hooks/useAuth";

interface MenuAccountProps {
  children: React.ReactNode;
}

export const MenuAccount = ({ children }: MenuAccountProps) => {
  const { user } = useAuth();

  return (
    <Menu
      menuButton={
        <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors">
          <img
            src={user?.avatarUrl}
            className="size-10 object-cover rounded-full"
          />
          <span>@{user?.username}</span>
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
