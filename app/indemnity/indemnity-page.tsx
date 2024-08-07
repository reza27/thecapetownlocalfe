"use client";
import { Button, Checkbox, Input } from "@material-tailwind/react";
import { Formik } from "formik";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { postIndemnityForm } from "../../lib/features/indemnity/indemnitySlice";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import indemnitySchema from "../../lib/schemas/indemnity.schema";

export default function IndemnityPage({ data }) {
  const indemnityFormSubmitted = useAppSelector(
    (state) => state.indemnity.indemnityFormSubmitted
  );
  const indemnityFormIsSubmitting = useAppSelector(
    (state) => state.indemnity.indemnityFormIsSubmitting
  );

  const dispatch = useAppDispatch();

  return (
    <div className="pt-48 flex flex-col w-full min-h-60 bg-white justify-center items-center p-6">
      <h1 className="text-gray-900 text-center">Indemnity Form</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          acceptIndemnity: false,
        }}
        validationSchema={indemnitySchema}
        onSubmit={(values) => {
          dispatch(postIndemnityForm(values));
        }}
      >
        {(formik) => (
          <form
            className="relative flex justify-center mb-28 mt-20 w-full flex-col items-center"
            onSubmit={formik.handleSubmit}
          >
            <div className="w-full max-w-96 mt-5">
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
            <div className="w-full max-w-96 mt-5">
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
            <div className="w-full max-w-96 mt-5">
              <Input
                autoComplete="off"
                variant="standard"
                color="light-blue"
                label="Email*"
                className="input-field"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-xs text-red-900 pt-2">
                  {formik.errors.lastName}
                </div>
              ) : null}
            </div>

            <div className="w-full max-w-96 mt-5">
              <Input
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
            <div className="w-full max-w-96 mt-10  text-gray-900">
              By completing and submitting this form you are agreeing to the
              following:
            </div>
            <div className="w-full max-w-96 my-10 border border-gray-200 p-3 text-gray-900">
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
            <div className="flex justify-start w-full max-w-96 flex-col">
              <Checkbox
                color="blue"
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
            <div className="w-full max-w-96 mt-8">
              {indemnityFormSubmitted ? (
                <p className="text-base font-bold text-center">
                  Indemnity Submitted
                </p>
              ) : (
                <Button
                  type="submit"
                  className="w-full justify-center text-blue text-white"
                  loading={indemnityFormIsSubmitting}
                >
                  Submit
                </Button>
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
