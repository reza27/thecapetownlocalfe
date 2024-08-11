"use client";
import { Button, Checkbox, Input } from "@material-tailwind/react";
import { Formik } from "formik";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { postIndemnityForm } from "../../lib/features/indemnity/indemnitySlice";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import indemnitySchema from "../../lib/schemas/indemnity.schema";
import { useRef, useState } from "react";
import { ScrollToErrors } from "../../components/forms/ScrollToErrors";
import { TCTLCountryCodeMobileNumberInput } from "../../components/forms/TCTLCountryCodeMobileNumberInput";
import { IIndemnityForm } from "../../types/IIndemnityForm";
import SignatureCanvas from "react-signature-canvas";

export default function IndemnityPage({ data }) {
  const indemnityFormSubmitted = useAppSelector(
    (state) => state.indemnity.indemnityFormSubmitted
  );
  const indemnityFormIsSubmitting = useAppSelector(
    (state) => state.indemnity.indemnityFormIsSubmitting
  );

  const [countryCallingCode, setCountryCallingCode] = useState(null);

  const firstName = useRef<HTMLDivElement | null>(null);
  const lastName = useRef<HTMLDivElement | null>(null);
  const email = useRef<HTMLDivElement | null>(null);
  const mobile = useRef<HTMLDivElement | null>(null);
  const passportId = useRef<HTMLDivElement | null>(null);
  const signatureCanvas = useRef(null);

  const errorRefs = [
    { ref: firstName, id: "firstName" },
    { ref: lastName, id: "lastName" },
    { ref: email, id: "email" },
    { ref: mobile, id: "mobile" },
    { ref: passportId, id: "passportId" },
  ];

  const onCountryCodeChange = (value) => {
    setCountryCallingCode(value);
  };

  const dispatch = useAppDispatch();

  return (
    <div className="pt-48 flex flex-col w-full min-h-60 bg-white justify-center  items-center p-6">
      <h1 className="text-gray-900 text-center">Indemnity Form</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          passportId: "",
          // acceptIndemnity: false,
          hasSigned: false,
        }}
        validationSchema={indemnitySchema}
        onSubmit={(values) => {
          let formattedValues: IIndemnityForm = Object.assign({}, values, {
            mobile: countryCallingCode + values.mobile,
            signature: (signatureCanvas.current as SignatureCanvas)
              .getTrimmedCanvas()
              .toDataURL("image/png"),
          });

          dispatch(postIndemnityForm(formattedValues));
        }}
      >
        {(formik) => (
          <form
            className="relative flex flex-col justify-center mb-28 mt-20 w-full"
            onSubmit={formik.handleSubmit}
          >
            <ScrollToErrors refs={errorRefs} />
            <div className="w-full sm:px-12 px-3">
              <div className="w-full mt-5" ref={firstName}>
                <Input
                  autoComplete="off"
                  variant="standard"
                  color="light-blue"
                  label="First Name*"
                  className="input-field"
                  {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-xs text-red-900 pt-2">
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>
              <div className="w-full mt-5" ref={lastName}>
                <Input
                  autoComplete="off"
                  variant="standard"
                  color="light-blue"
                  label="Last Name*"
                  className="input-field"
                  {...formik.getFieldProps("lastName")}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-xs text-red-900 pt-2">
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>
              <div className="w-full mt-5" ref={email}>
                <Input
                  autoComplete="off"
                  variant="standard"
                  color="light-blue"
                  label="Email*"
                  className="input-field"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-xs text-red-900 pt-2">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              <div className="w-full mt-5" ref={mobile}>
                <TCTLCountryCodeMobileNumberInput
                  onCountryCodeChange={onCountryCodeChange}
                  {...formik.getFieldProps("mobile")}
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <div className="text-xs text-red-900 pt-2">
                    {formik.errors.mobile}
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="w-full mt-5" ref={passportId}>
                <Input
                  autoComplete="off"
                  variant="standard"
                  color="light-blue"
                  label="Passport/ID*"
                  className="input-field"
                  {...formik.getFieldProps("passportId")}
                />
                {formik.touched.passportId && formik.errors.passportId ? (
                  <div className="text-xs text-red-900 pt-2">
                    {formik.errors.passportId}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="sm:px-12 px-3">
              <div className="w-full  mt-10  text-gray-900">
                By completing and submitting this form you are agreeing to the
                following:
              </div>
              <div className="w-full my-10 border border-gray-200 p-3 text-gray-900">
                {data.props.data.indemnityFormText ? (
                  <DocumentRenderer
                    document={
                      data.props.data.indemnityFormText?.content?.document
                    }
                  />
                ) : (
                  ""
                )}
              </div>

              <div className="w-full max-w-[500px] mt-8 flex">
                <div className="flex flex-col text-sm">
                  <label className="text-blue-gray-400 font-medium">
                    Signature*
                  </label>
                  <SignatureCanvas
                    ref={signatureCanvas}
                    penColor="black"
                    canvasProps={{
                      width: 230,
                      height: 140,
                      className: "border border-grey-200",
                    }}
                    onBegin={() => {
                      formik.setFieldValue("hasSigned", true);
                    }}
                  />
                  {formik.touched.hasSigned && formik.errors.hasSigned ? (
                    <div className="text-xs text-red-900 pt-2">
                      {formik.errors.hasSigned}
                    </div>
                  ) : null}
                </div>
                <Button
                  color="blue-gray"
                  size="lg"
                  className="justify-center text-blue text-white h-8 flex items-center mt-6 ml-2 text-xs"
                  onClick={() => {
                    formik.setFieldValue("hasSigned", false);
                    (signatureCanvas.current as SignatureCanvas).clear();
                  }}
                >
                  Clear
                </Button>
              </div>
              <div className="w-full  max-w-[500px] mt-8 flex">
                {indemnityFormSubmitted ? (
                  <p className="text-base font-bold text-center">
                    Indemnity Submitted
                  </p>
                ) : (
                  <Button
                    type="submit"
                    color="blue"
                    size="lg"
                    className="w-full justify-center text-blue text-white"
                    loading={indemnityFormIsSubmitting}
                  >
                    Submit
                  </Button>
                )}
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
