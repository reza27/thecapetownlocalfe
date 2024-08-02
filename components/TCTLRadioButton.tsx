"use client";
import { Radio } from "@material-tailwind/react";
import { useEffect, useRef } from "react";

export const TCTLRadioButton = ({ ...props }) => {
  const TCTLRadioButtonRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    (TCTLRadioButtonRef.current as HTMLInputElement).onchange = props.onChange;
  }, []);
  return (
    <>
      <Radio inputRef={TCTLRadioButtonRef} {...props} />
    </>
  );
};
