import { boolean, object, string } from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const indemnitySchema = object({
  firstName: string().required("First name is required"),
  lastName: string().required("Last name is required"),
  email: string().email("Invalid email address").required("Email required"),
  mobile: string()
    .matches(phoneRegExp, "Mobile number is not valid")
    .required(),
  passportId: string().required("Passport or ID is required"),
  // acceptIndemnity: boolean().oneOf(
  //   [true],
  //   "Acceptence of the terms is required"
  // ),
  hasSigned: boolean().oneOf([true], "Your signature is required"),
});

export default indemnitySchema;
