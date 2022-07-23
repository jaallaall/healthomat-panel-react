import styled from "@emotion/styled";
import { useCountDown } from "hooks";
import { useCallback, useState } from "react";
import ReactCodeInput from "react-code-input";
import { useTranslation } from "react-i18next";
import CountDown from "./CountDown";

interface Props {
  validate?: string;
  setValidate?: (e: string) => void;
  pincode?: string;
  setPincode?: (e: string) => void;
  setDisabled?: (e: boolean) => void;
  setError?: (e: string) => void;
  disabled?: boolean;
  isClicked?: boolean;
  error?: string;
  telephone?: string;
}

const ReactCodeInputStyled = styled(ReactCodeInput)({
  direction: "rtl",
  display: "grid !important",
  gridTemplateColumns: "repeat(5,1fr)",
  gap: 10,
  gridTemplateRows: 50,
  height: 40,
  "& input::-webkit-outer-spin-button,& input::-webkit-inner-spin-button": {
    appearance: "none",
    margin: 0,
  },
  "& input:focus-visible": {
    outlineColor: "bg-primary",
  },
  input: {
    textAlign: "center",
    padding: 5,
  },
});

const PinCode: React.FC<Props> = (props): React.ReactElement => {
  const {
    validate,
    setValidate,
    pincode,
    setPincode,
    disabled,
    setDisabled,
    isClicked,
    error,
    setError,
    telephone,
  } = props;
  const { t } = useTranslation();
  const [message, setMessage] = useState<string>("");

  const [timeLeft, { start, pause, resume, reset }] = useCountDown();

  const restart = useCallback(() => {
    const newTime = 120 * 1000;
    start(newTime);
  }, []);

  //   const handlePinChange = (pinCode: string) => {
  //     setPincode(pinCode);
  //     setError("");
  //   };

  //   const handleClickCode = () => {
  //     const rgexValid = /^09\d{9}$/;
  //     const phoneValid = telephone?.match(rgexValid) ? true : false;
  //     if (!phoneValid) {
  //       setValidate("شماره همراه نامعتبر است");
  //     }
  //     if (!telephone) {
  //       setValidate("شماره همراه را وارد کنید");
  //     }
  //     if (timeLeft === 0) {
  //       setPincode("");
  //     }
  //     if (phoneValid) {
  //       return;
  //     }
  //   };

  //   useEffect(() => {
  //     if (isClicked) {
  //       handleClickCode();
  //     }
  //   }, [isClicked]);

  return (
    <>
      <ReactCodeInputStyled
        name="pinCode"
        type="number"
        inputMode="numeric"
        fields={5}
        autoFocus={disabled}
        //   onChange={handlePinChange}
        //   touch={() => setError("")}
        value={pincode}
        inputStyle={{ border: "1px solid #eee", borderRadius: 6 }}
      />
      <div className="flex justify-between mt-4">
        <CountDown percentage={timeLeft} />
        {message && timeLeft / 1000 >= 115 && <div>{message}</div>}
        <button disabled={!disabled || timeLeft !== 0 ? true : false}>
          {t("resend")}
        </button>
      </div>
    </>
  );
};

export default PinCode;
