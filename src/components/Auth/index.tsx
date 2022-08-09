import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { validationSchema } from "utils";

const Auth: React.FC = (): React.ReactElement => {
  const { t } = useTranslation();

  const { handleSubmit, values, handleChange, touched, errors } = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
    },
  });

  return (
    <div className="container m-auto px-4 max-w-md">
      <div className="bg-white p-3 rounded-lg border">
        <h3 className="mb-3 text-xl">{t("login")}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={`block border w-full p-3 rounded mb-3 ${
              touched.username && errors.username
                ? "border-red-500"
                : "border-grey-light"
            }`}
            name="username"
            placeholder={t("username")}
            onChange={handleChange}
            value={values.username}
          />
          {touched.username && errors.username && (
            <div className="text-red-500 -mt-2 mb-3 text-sm">
              {errors.username}
            </div>
          )}
          <input
            type="text"
            className={`block border w-full p-3 rounded mb-3 ${
              touched.username && errors.username
                ? "border-red-500"
                : "border-grey-light"
            }`}
            name="password"
            placeholder={t("password")}
            onChange={handleChange}
            value={values.password}
          />

          {touched.password && errors.password && (
            <div className="text-red-500 -mt-2 mb-3 text-sm">
              {errors.password}
            </div>
          )}
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-primary text-white hover:bg-primary-dark focus:outline-none my-1"
          >
            {t("login")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
