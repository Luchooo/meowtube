import { PropsWithChildren, createContext, useState } from "react";
import { Alert, AlertProps } from "../components/ui/Alert";

interface AlertContextType {
  showAlert: ({ msg, type }: AlertProps) => void;
}

export const AlertContext = createContext<AlertContextType>({
  showAlert: () => {},
});

export const AlertProvider = ({ children }: PropsWithChildren) => {
  const [alert, setAlert] = useState<AlertProps | null>(null);

  const showAlert = ({ msg, type }: AlertProps): void => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert && <Alert msg={alert.msg} type={alert.type} />}
    </AlertContext.Provider>
  );
};
