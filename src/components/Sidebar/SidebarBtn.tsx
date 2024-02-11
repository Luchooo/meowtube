import { RiLogoutCircleRLine } from "react-icons/ri";

interface SidebarBtnProps {
  handleLogout: () => void;
}

export const SidebarBtn = ({ handleLogout }: SidebarBtnProps) => {
  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
    >
      <div className="flex text-primary gap-4 items-center text-2xl">
        <RiLogoutCircleRLine />
        <span className="text-white text-xl">Cerrar sesión</span>
      </div>
    </button>
  );
};
