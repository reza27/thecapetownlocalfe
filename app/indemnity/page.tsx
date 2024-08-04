"use client";
import { Button, Input } from "@material-tailwind/react";
import { Formik } from "formik";
import { boolean, date, object, string } from "yup";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { postIndemnityForm } from "../../lib/features/contact/indemnitySlice";

export default function IndemnityPage() {
  const indemnityFormSubmitted = useAppSelector(
    (state) => state.indemnity.indemnityFormSubmitted
  );
  const indemnityFormIsSubmitting = useAppSelector(
    (state) => state.indemnity.indemnityFormIsSubmitting
  );

  const dispatch = useAppDispatch();

  return (
    <div className="pt-48 flex flex-col w-full min-h-60 bg-white justify-center items-center">
      <h1 className="text-gray-900 text-center">Indemnity Form</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          // email: "",
          // mobile: "",
        }}
        validationSchema={object({
          firstName: string().required("First name is required"),
          lastName: string().required("Last name is required"),
          // email: string().email().required("Email is required"),
          // mobile: string().required("Mobile number is required"),
        })}
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
            {/* <div className="w-full max-w-96 mt-5">
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
                {...formik.getFieldProps("email")}
              />
              {formik.touched.mobile && formik.errors.mobile ? (
                <div className="text-xs text-red-900 pt-2">
                  {formik.errors.mobile}
                </div>
              ) : null}
            </div> */}
            <div className="w-full max-w-96 mt-8">
              <Button
                type="submit"
                className="w-full justify-center text-blue"
                loading={indemnityFormIsSubmitting}
              >
                Submit
              </Button>
              {indemnityFormSubmitted ? (
                <p className="text-xs">Enquiry sent.</p>
              ) : (
                <></>
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
