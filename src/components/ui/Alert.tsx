import React from "react";
import { ALERT_CONFIG } from "../../constants";

interface AlertProps {
  children: React.ReactNode;
  type: "error" | "success";
}

export const Alert = ({ children, type }: AlertProps) => {
  const { class: alertClass, title: alertTitle } =
    ALERT_CONFIG[type] || ALERT_CONFIG.default;

  return (
    <div
      className={`fixed top-0 right-0 m-4 p-4 ${alertClass} border-t-4 rounded-b px-4 py-3 shadow-md`}
      role="alert"
    >
      <div>
        <p className="font-bold">{alertTitle}</p>
        <p className="text-sm">{children}</p>
      </div>
    </div>
  );
};
