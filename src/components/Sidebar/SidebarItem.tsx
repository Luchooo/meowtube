import { Link } from "react-router-dom";

interface SidebarItemProps {
  icon: React.ReactNode;
  url: string;
  text: string;
  closeMenu: () => void;
}

export const SidebarItem = ({
  icon,
  url,
  text,
  closeMenu,
}: SidebarItemProps) => {
  return (
    <Link
      onClick={closeMenu}
      to={url}
      className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
    >
      <div className="flex text-primary gap-4 items-center text-2xl">
        {icon}
        <span className="text-white text-xl">{text}</span>
      </div>
    </Link>
  );
};
