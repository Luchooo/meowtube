import { Field, Form, FormikProps } from "formik";
import { FieldText } from "../Form/FieldText";
import { Button } from "../ui/Button";
import { VideoVisible } from "../../enum";
import { VideoFormHeader } from "./VideoFormHeader";

const textFields = ["title", "description", "url"];

export interface VideoFormProps {
  isSubmitting: boolean;
}

type CombinedProps = FormikProps<{
  title: string;
  description: string;
  url: string;
  isPublic: VideoVisible;
}> &
  VideoFormProps;

export const VideoForm = ({ isSubmitting }: CombinedProps) => {
  return (
    <article className="flex flex-col justify-center items-center">
      <section className="bg-secondary-100 p-8 rounded-xl mb-8 max-w-screen-md w-full">
        <VideoFormHeader />
        <hr className="my-8 border-gray-500/30" />
        <Form>
          {textFields.map((field) => (
            <div key={field} className="flex-1">
              <FieldText
                id={field}
                placeholder={`Video ${field}`}
                showIcon={false}
              />
            </div>
          ))}
          <Field
            as="select"
            name="isPublic"
            className="bg-secondary-900 w-full py-3 outline-none rounded-lg px-4"
          >
            <option value="public">Video público 🥳</option>
            <option value="private">Video privado 😐</option>
          </Field>
          <hr className="my-8 border-gray-500/30" />
          <Button
            disabled={isSubmitting}
            isLoading={isSubmitting}
            className="bg-primary/80 hover:bg-primary transition-colors md:w-36 ml-auto"
          >
            {isSubmitting ? "Enviando" : "Subir video"}
          </Button>
        </Form>
      </section>
    </article>
  );
};
