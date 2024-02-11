import { Form, FormikProps } from "formik";
import { useState } from "react";
import { Button } from "../../ui/Button";
import { CardFormHeader } from "../CardFormHeader";
import { FieldEmail } from "../FieldEmail";
import { FieldPassword } from "../FieldPassword";
import { CardFormFooter } from "../CardFormFooter";

export interface LoginFormProps {
  isSubmitting: boolean;
}

type CombinedProps = FormikProps<{ email: string; password: string }> &
  LoginFormProps;

export const LoginForm = ({ isSubmitting }: CombinedProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
        <CardFormHeader headerTitle="Iniciar" coloredHeaderTitle="sesión" />
        <Form className="mb-8">
          <FieldEmail id="email" />
          <FieldPassword
            id="password"
            placeholder="Contraseña"
            showPassword={showPassword}
            handleShowPassword={handleShowPassword}
          />
          <Button
            className="mt-8"
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          >
            {isSubmitting ? "Enviando" : "Iniciar Sesión"}
          </Button>
        </Form>
        <CardFormFooter
          footerTitle="¿No tienes cuenta?"
          coloredFooterTitle="Registrate"
          url="/signup"
        />
      </div>
    </div>
  );
};
