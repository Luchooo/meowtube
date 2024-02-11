import { useState } from "react";
import { Form, FormikProps } from "formik";
import { CardFormHeader } from "../CardFormHeader";
import { CardFormFooter } from "../CardFormFooter";
import { Button } from "../../ui/Button";
import { FieldText } from "../FieldText";
import { FieldEmail } from "../FieldEmail";
import { FieldPassword } from "../FieldPassword";

export interface LoginFormProps {
  isSubmitting: boolean;
}

type CombinedProps = FormikProps<{
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  avatarUrl: string;
}> &
  LoginFormProps;

export const SignupForm = ({ isSubmitting }: CombinedProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
        <CardFormHeader headerTitle="Crear" coloredHeaderTitle="cuenta" />
        <Form className="mb-8">
          <FieldText id="username" placeholder="Username" />
          <FieldEmail id="email" />
          <FieldPassword
            id="password"
            placeholder="Contraseña"
            showPassword={showPassword}
            handleShowPassword={handleShowPassword}
          />
          <FieldPassword
            id="passwordConfirmation"
            placeholder="Repite contraseña"
            showPassword={showPassword}
            handleShowPassword={handleShowPassword}
          />
          <Button
            className="mt-8"
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          >
            {isSubmitting ? "Enviando" : "Registrarme"}
          </Button>
        </Form>
        <CardFormFooter
          footerTitle="¿Ya tienes cuenta?"
          coloredFooterTitle="Ingresa"
          url="/login"
        />
      </div>
    </div>
  );
};
