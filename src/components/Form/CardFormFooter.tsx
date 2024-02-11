import { Link } from "react-router-dom";

interface CardFormFooter {
  footerTitle: string;
  coloredFooterTitle: string;
  url: string;
}

export const CardFormFooter = ({
  footerTitle,
  coloredFooterTitle,
  url,
}: CardFormFooter) => {
  return (
    <footer className="flex flex-col items-center gap-4">
      <span className="flex items-center gap-2">
        {footerTitle}{" "}
        <Link
          to={url}
          className="text-primary hover:text-gray-100 transition-colors"
        >
          {coloredFooterTitle}
        </Link>
      </span>
    </footer>
  );
};
