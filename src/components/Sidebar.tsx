import { useState } from "react";
import { RiLogoutCircleRLine, RiHome2Line, RiFireLine } from "react-icons/ri";
import { SidebarItem } from "./SidebarItem";
import { SidebarBtnFloat } from "./SidebarBtnFloat";

export const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
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
              <SidebarItem url={"/"} text={"Inicio"} icon={<RiHome2Line />} />
            </li>
            <li>
              <SidebarItem
                url={"/trending"}
                text={"Tendencias"}
                icon={<RiFireLine />}
              />
            </li>
          </ul>
        </div>
        <div>
          <SidebarItem
            url={"/sign-out"}
            text={"Cerrar sesión"}
            icon={<RiLogoutCircleRLine />}
          />
        </div>
      </nav>
      <SidebarBtnFloat toggleMenu={toggleMenu} showMenu={showMenu} />
    </>
  );
};
