import { ErrorMessage, Field } from "formik";
import { RiUserLine } from "react-icons/ri";

interface FieldTextProps {
  id: string;
  placeholder: string;
  showIcon?: boolean;
}

export const FieldText = ({
  id,
  placeholder,
  showIcon = true,
}: FieldTextProps) => {
  return (
    <>
      <ErrorMessage name={id} component="p" className="text-red-500" />
      <div className="relative mt-2 mb-4">
        {showIcon && (
          <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
        )}
        <Field
          type="text"
          id={id}
          name={id}
          className={`bg-secondary-900 w-full py-3 outline-none rounded-lg ${
            showIcon ? "pl-8 pr-4" : "px-4"
          }`}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};
