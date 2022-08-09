import { string, object } from "yup";

const phoneRegExp = /^(\+98|0)?9\d{9}$/g;

export const validationSchema = object({
  username: string().required("این فیلد اجباری است"),
  password: string()
    .required("گذرواژه خود را وارد کنید")
    .min(8, "گذرواژه باید بیش از ۸ حرف باشد"),
});
