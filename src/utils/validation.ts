import { string, object } from "yup";

const phoneRegExp = /^(\+98|0)?9\d{9}$/g;

export const validationSchema = object({
  phoneNumber: string()
    .matches(phoneRegExp, "شماره همراه نامعتبر است")
    .required("این فیلد اجباری است"),
});
