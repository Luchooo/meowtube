import { ErrorMessage, Field } from "formik";
import { RiMailLine } from "react-icons/ri";

interface FieldEmailProps {
  id: string;
}

export const FieldEmail = ({ id }: FieldEmailProps) => {
  return (
    <>
      <ErrorMessage name={id} component="p" className="text-red-500" />
      <div className="relative mt-2 mb-4">
        <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
        <Field
          placeholder="Correo electrónico"
          type="email"
          id={id}
          name={id}
          className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
        />
      </div>
    </>
  );
};
