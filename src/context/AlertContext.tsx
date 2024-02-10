import { PropsWithChildren, createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AlertProps } from "../types";

interface AlertContextType {
  showAlert: ({ msg, type }: AlertProps) => void;
}

export const AlertContext = createContext<AlertContextType>({
  showAlert: () => {},
});

export const AlertProvider = ({ children }: PropsWithChildren) => {
  const showAlert = ({ msg, type }: AlertProps): void => {
    toast[type](msg);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <ToastContainer theme="dark" autoClose={3000} />
    </AlertContext.Provider>
  );
};
