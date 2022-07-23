import { Icon, Modal } from "@UI";
import { useCountDown } from "hooks";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import PinCode from "./PinCode";
import { useFormik } from "formik";
import { validationSchema } from "utils";

const Auth: React.FC = (): React.ReactElement => {
  const { t } = useTranslation();
  const [timeLeft, { start, pause, resume, reset }] = useCountDown();
  const [open, setOpen] = useState<boolean>(false);

  const { handleSubmit, values, touched, errors } = useFormik({
    enableReinitialize: true,
    initialValues: {
      telephone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {},
  });

  return (
    <div>
      <button
        className="border border-gray-200 rounded-md w-10 h-10 text-gray-400 flex items-center justify-center ms-2"
        onClick={() => setOpen(true)}
      >
        <Icon name="login" />
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex items-center justify-between mb-4">
          <h5>{t("login")}</h5>
          <button onClick={() => setOpen(false)}>
            <Icon name="close" />
          </button>
        </div>
        <form>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="telephone"
            placeholder={t("telephone")}
          />
          <PinCode />
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-primary text-white hover:bg-primary-dark focus:outline-none my-1"
          >
            {t("login")}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Auth;
