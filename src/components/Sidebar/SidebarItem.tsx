import { Link } from "react-router-dom";

interface SidebarItemProps {
  icon: React.ReactNode;
  url: string;
  text: string;
  toggleMenu: () => void;
}

export const SidebarItem = ({
  icon,
  url,
  text,
  toggleMenu,
}: SidebarItemProps) => {
  return (
    <Link
      onClick={toggleMenu}
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
