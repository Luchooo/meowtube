import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ingrese un correo electrónico válido")
    .required("El correo electrónico es requerido"),
  password: Yup.string()
    .min(8, "Debe tener al menos 8 caracteres")
    .required("La contraseña es requerida"),
});
