import { ErrorMessage, Field } from "formik";
import { RiUserLine } from "react-icons/ri";

interface FieldTextProps {
  id: string;
  placeholder: string;
}

export const FieldText = ({ id, placeholder }: FieldTextProps) => {
  return (
    <>
      <ErrorMessage name={id} component="p" className="text-red-500" />
      <div className="relative mt-2 mb-4">
        <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
        <Field
          type="text"
          id={id}
          name={id}
          className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};
