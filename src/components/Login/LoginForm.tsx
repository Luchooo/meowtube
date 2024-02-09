import { Form, Field, ErrorMessage, FormikProps } from "formik";

export interface LoginFormProps {
  isSubmitting: boolean;
}

interface CombinedProps
  extends FormikProps<{ email: string; password: string }>,
    LoginFormProps {}

export const LoginForm = ({ isSubmitting }: CombinedProps) => (
  <div className="max-w-md mx-auto">
    <h1 className="text-2xl font-semibold mb-4">Iniciar sesión</h1>
    <Form className="space-y-4">
      <div>
        <label htmlFor="email" className="block mb-1">
          Correo Electrónico:
        </label>
        <Field
          type="email"
          id="email"
          name="email"
          className="w-full border rounded px-3 py-2"
        />
        <ErrorMessage name="email" component="p" className="text-red-500" />
      </div>
      <div>
        <label htmlFor="password" className="block mb-1">
          Contraseña:
        </label>
        <Field
          type="password"
          id="password"
          name="password"
          className="w-full border rounded px-3 py-2"
        />
        <ErrorMessage name="password" component="p" className="text-red-500" />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600"
      >
        {isSubmitting ? "Enviando..." : "Iniciar Sesión"}
      </button>
    </Form>
  </div>
);
