import { boolean, date, object, string } from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const contactSchema = object({
  subject: string().required("Subject is required"),
  name: string().required("Name is required"),
  phone: string().matches(phoneRegExp, "Mobile number is not valid"),
  email: string().email("Invalid email address").required("Email Required"),
  numberOfPeople: string().required("Number of people is required"),
  date: date()
    .default(() => new Date())
    .required("Date is required"),
  isFlexibleDate: string(),
  isTransportNeeded: string(),
  address: string().when("isTransportNeeded", {
    is: true,
    then: (schema) => schema.required(),
  }),
  message: string(),
});

export default contactSchema;
