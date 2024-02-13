import * as Yup from "yup";
import { VideoVisible } from "../enum";

export const videoFormSchema = Yup.object().shape({
  title: Yup.string().required("El titulo es requerido"),
  description: Yup.string()
    .max(30, "Debe tener al máximo 30 caracteres")
    .required("La descripción es requerida"),
  url: Yup.string()
    .matches(
      /https:\/\/www.youtube.com\/shorts\/[a-zA-Z0-9_-]+/,
      "Ingresa una URL válida de YouTube Shorts"
    )
    .required("La url es requerida"),
  isPublic: Yup.mixed().oneOf(Object.values(VideoVisible)).required(),
});
