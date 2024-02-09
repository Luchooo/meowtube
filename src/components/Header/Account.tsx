import { RiSettings3Line, RiLogoutCircleRLine } from "react-icons/ri";
import { MenuItemLink } from "./MenuItemLink";
import { UserProfileLink } from "./UserProfileLink";
import { MenuAccount } from "./MenuAccount";

export const Account = () => {
  return (
    <MenuAccount>
      <UserProfileLink />
      <hr className="my-4 border-gray-500" />
      <MenuItemLink
        icon={<RiSettings3Line />}
        path="/settings"
        text="Configuración"
      />
      <MenuItemLink
        icon={<RiLogoutCircleRLine />}
        path="/logout"
        text="Cerrar sesión"
      />
    </MenuAccount>
  );
};
