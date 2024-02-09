import { Form, Field, ErrorMessage, FormikProps } from "formik";
import { useState } from "react";
import {
  RiEyeLine,
  RiEyeOffLine,
  RiLockLine,
  RiMailLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export interface LoginFormProps {
  isSubmitting: boolean;
}

type CombinedProps = FormikProps<{ email: string; password: string }> &
  LoginFormProps;

export const LoginForm = ({ isSubmitting }: CombinedProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
          Iniciar <span className="text-primary">sesión</span>
        </h1>
        <Form className="mb-8">
          <div>
            <ErrorMessage name="email" component="p" className="text-red-500" />
            <div className="relative mt-2 mb-4">
              <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
              <Field
                placeholder="Correo electrónico"
                type="email"
                id="email"
                name="email"
                className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
              />
            </div>
          </div>
          <div>
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500"
            />
            <div className="relative mt-2 mb-8">
              <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
              <Field
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg"
                placeholder="Contraseña"
              />

              {showPassword ? (
                <RiEyeOffLine
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
                />
              ) : (
                <RiEyeLine
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
                />
              )}
            </div>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          >
            {isSubmitting ? "Enviando" : "Iniciar Sesión"}
          </Button>
        </Form>
        <div className="flex flex-col items-center gap-4">
          <span className="flex items-center gap-2">
            ¿No tienes cuenta?{" "}
            <Link
              to="/signup"
              className="text-primary hover:text-gray-100 transition-colors"
            >
              Registrate
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
