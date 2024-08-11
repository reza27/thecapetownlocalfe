import { useFormikContext } from "formik";
import { MutableRefObject, useEffect } from "react";

interface ErrorElement {
  ref: MutableRefObject<HTMLElement> | null;
  id: string;
}

export const ScrollToErrors = ({ refs }: { refs: Array<ErrorElement> }) => {
  const { errors, isSubmitting } = useFormikContext();

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      refs
        .find((ref) => ref.id === Object.keys(errors)[0])
        ?.ref?.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }
  }, [isSubmitting]);
  return null;
};
