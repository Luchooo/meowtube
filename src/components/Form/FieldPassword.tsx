import { ErrorMessage, Field } from "formik";
import { RiEyeLine, RiEyeOffLine, RiLockLine } from "react-icons/ri";

interface FieldPasswordProps {
  id: string;
  placeholder: string;
  showPassword: boolean;
  handleShowPassword: () => void;
}

export const FieldPassword = ({
  id,
  placeholder,
  showPassword,
  handleShowPassword,
}: FieldPasswordProps) => {
  return (
    <>
      <ErrorMessage name={id} component="p" className="text-red-500" />
      <div className="relative mt-2 mb-4">
        <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
        <Field
          type={showPassword ? "text" : "password"}
          id={id}
          name={id}
          className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg"
          placeholder={placeholder}
        />

        {showPassword ? (
          <RiEyeOffLine
            onClick={handleShowPassword}
            className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
          />
        ) : (
          <RiEyeLine
            onClick={handleShowPassword}
            className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
          />
        )}
      </div>
    </>
  );
};
