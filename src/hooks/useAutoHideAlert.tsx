import { useEffect, useState } from "react";

interface useAutoHideAlertProps {
  error: string | null;
}

export const useAutoHideAlert = ({ error }: useAutoHideAlertProps) => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  return showAlert;
};
