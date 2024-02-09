import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ingrese un correo electrónico válido")
    .required("El correo electrónico es requerido"),
  password: Yup.string().required("La contraseña es requerida"),
});
