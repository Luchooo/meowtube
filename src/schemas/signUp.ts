import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  username: Yup.string().required("El username es requerido"),
  email: Yup.string()
    .email("Ingrese un correo electrónico válido")
    .required("El correo electrónico es requerido"),
  password: Yup.string()
    .min(8, "Debe tener al menos 8 caracteres")
    .required("La contraseña es requerida"),
  passwordConfirmation: Yup.string()
    .required("Por favor vuelva a escribir tu contraseña")
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
});
