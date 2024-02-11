import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

interface SidebarBtnFloatProps {
  showMenu: boolean;
  toggleMenu: () => void;
}

export const SidebarBtnFloat = ({
  toggleMenu,
  showMenu,
}: SidebarBtnFloatProps) => {
  return (
    <button
      onClick={toggleMenu}
      className="xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50"
    >
      {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
    </button>
  );
};
