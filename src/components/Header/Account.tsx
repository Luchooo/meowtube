import { RiSettings3Line, RiLogoutCircleRLine } from "react-icons/ri";
import { MenuItemLink } from "./MenuItemLink";
import { UserProfileLink } from "./UserProfileLink";
import { MenuAccount } from "./MenuAccount";
import { MenuItemBtn } from "./MenuItemBtn";
import { useLogout } from "../../hooks/useLogout";
import { PiFilmSlate } from "react-icons/pi";

export const Account = () => {
  const { handleLogout } = useLogout();

  return (
    <MenuAccount>
      <UserProfileLink />
      <hr className="my-4 border-gray-500" />
      <MenuItemLink
        icon={<PiFilmSlate />}
        path="/my-videos"
        text="Mis videos"
      />
      <MenuItemLink
        icon={<RiSettings3Line />}
        path="/settings"
        text="Configuración"
      />
      <MenuItemBtn
        icon={<RiLogoutCircleRLine />}
        handleClick={handleLogout}
        text="Cerrar sesión"
      />
    </MenuAccount>
  );
};
