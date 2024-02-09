import { useAuth } from "../../hooks/useAuth";
import { LinkButton } from "../ui/LinkButton";
import { Account } from "./Account";

export const Header = () => {
  const { user } = useAuth();
  return (
    <header className="h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end">
      <nav className="flex items-center gap-2">
        {user ? <Account /> : <LinkButton to="/login">Login</LinkButton>}
      </nav>
    </header>
  );
};
