import { useState } from "react";
import { RiHome2Line, RiFireLine, RiUserLine } from "react-icons/ri";
import { SidebarItem } from "./SidebarItem";
import { SidebarBtnFloat } from "./SidebarBtnFloat";
import { useLogout } from "../../hooks/useLogout";
import { useAuth } from "../../hooks/useAuth";
import { SidebarBtn } from "./SidebarBtn";
import { PiFilmSlate } from "react-icons/pi";

export const Sidebar = () => {
  const { user } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const { handleLogout } = useLogout();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <nav
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <h1 className="text-center text-2xl font-bold text-white mb-10">
            MeowTube<span className="text-primary text-4xl">.</span>
          </h1>
          <ul>
            <li>
              <SidebarItem
                closeMenu={closeMenu}
                url={"/"}
                text={"Inicio"}
                icon={<RiHome2Line />}
              />
            </li>
            <li>
              <SidebarItem
                closeMenu={closeMenu}
                url={"/trending"}
                text={"Tendencias"}
                icon={<RiFireLine />}
              />
            </li>
            {user && (
              <li>
                <SidebarItem
                  closeMenu={closeMenu}
                  url={"/my-videos"}
                  text={"Mis videos"}
                  icon={<PiFilmSlate />}
                />
              </li>
            )}
          </ul>
        </div>
        {user && <SidebarBtn handleLogout={handleLogout} />}
        {!user && (
          <SidebarItem
            closeMenu={closeMenu}
            url={"/signup"}
            text={"Registrarse"}
            icon={<RiUserLine />}
          />
        )}
      </nav>
      <SidebarBtnFloat toggleMenu={toggleMenu} showMenu={showMenu} />
    </>
  );
};
