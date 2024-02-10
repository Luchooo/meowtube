import { ALERT_CONFIG } from "../../constants";

export interface AlertProps {
  msg: string;
  type: "error" | "success" | "default";
}

export const Alert = ({ msg, type }: AlertProps) => {
  const { class: alertClass, title: alertTitle } =
    ALERT_CONFIG[type] || ALERT_CONFIG.default;

  return (
    <div
      className={`fixed top-0 right-0 m-4 p-4 ${alertClass} border-t-4 rounded-b px-4 py-3 shadow-md`}
      role="alert"
    >
      <div>
        <p className="font-bold">{alertTitle}</p>
        <p className="text-sm">{msg}</p>
      </div>
    </div>
  );
};
