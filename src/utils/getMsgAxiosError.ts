import { AxiosError } from "axios";

export const getMsgAxiosError = (error: AxiosError | unknown): string => {
  if (error instanceof AxiosError) {
    return error.response?.data.error;
  } else {
    return "Hubo un error con la solicitud.";
  }
};
