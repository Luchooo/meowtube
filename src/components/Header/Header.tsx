import { Account } from "./Account";

export const Header = () => {
  return (
    <header className="h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end">
      <nav className="flex items-center gap-2">
        <Account />
      </nav>
    </header>
  );
};
