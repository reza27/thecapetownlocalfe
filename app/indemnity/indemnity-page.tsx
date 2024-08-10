"use client";
import { Button, Checkbox, Input } from "@material-tailwind/react";
import { Formik, useFormikContext } from "formik";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { postIndemnityForm } from "../../lib/features/indemnity/indemnitySlice";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import indemnitySchema from "../../lib/schemas/indemnity.schema";
import { useEffect, useRef } from "react";
import { ScrollToErrors } from "../../components/forms/ScrollToErrors";

export default function IndemnityPage({ data }) {
  const indemnityFormSubmitted = useAppSelector(
    (state) => state.indemnity.indemnityFormSubmitted
  );
  const indemnityFormIsSubmitting = useAppSelector(
    (state) => state.indemnity.indemnityFormIsSubmitting
  );

  const firstName = useRef<HTMLElement | null>(null);
  const lastName = useRef<HTMLElement | null>(null);
  const email = useRef<HTMLElement | null>(null);
  const mobile = useRef<HTMLElement | null>(null);
  const passportId = useRef<HTMLElement | null>(null);

  const refs = [
    { ref: firstName, id: "firstName" },
    { ref: lastName, id: "lastName" },
    { ref: email, id: "email" },
    { ref: mobile, id: "mobile" },
    { ref: passportId, id: "passportId" },
  ];

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
          acceptIndemnity: false,
        }}
        validationSchema={indemnitySchema}
        onSubmit={(values) => {
          dispatch(postIndemnityForm(values));
        }}
      >
        {(formik) => (
          <form
            className="relative flex flex-col justify-center mb-28 mt-20 w-full"
            onSubmit={formik.handleSubmit}
          >
            <ScrollToErrors refs={refs} />
            <div className="w-full sm:px-12 px-3">
              <div className="w-full mt-5">
                <Input
                  ref={firstName}
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
              <div className="w-full mt-5">
                <Input
                  ref={lastName}
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
              <div className="w-full mt-5">
                <Input
                  ref={email}
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

              <div className="w-full mt-5">
                <Input
                  ref={mobile}
                  autoComplete="off"
                  variant="standard"
                  color="light-blue"
                  label="Mobile*"
                  className="input-field"
                  {...formik.getFieldProps("mobile")}
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <div className="text-xs text-red-900 pt-2">
                    {formik.errors.mobile}
                  </div>
                ) : null}
              </div>
              <div className="w-full mt-5">
                <Input
                  ref={passportId}
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
              <div className="flex justify-start w-full flex-col">
                <Checkbox
                  color="blue"
                  className="xs:text-xs"
                  label="I agree to these terms and conditions"
                  onChange={(aOption) => {
                    formik.setFieldValue(
                      "acceptIndemnity",
                      aOption.target.checked
                    );
                  }}
                />
                <div>
                  {formik.touched.acceptIndemnity &&
                  formik.errors.acceptIndemnity ? (
                    <div className="text-xs text-red-900 pt-2">
                      {formik.errors.acceptIndemnity}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="w-full  max-w-[500px] mt-8 flex ">
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
