import { cloneElement } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  type?: "button" | "submit" | "reset";
  startIcon?: React.ReactElement<any>;
  endIcon?: React.ReactElement<any>;
  children: React.ReactNode;
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error";
  variant?: "outline" | "contained";
}

const Button: React.FC<Props> = ({
  className = "",
  type = "button",
  startIcon,
  endIcon,
  children,
  variant = "contained",
}): React.ReactElement => {
  let classes;
  if (variant === "contained") {
    classes = `inline-flex items-center bg-primary hover:bg-primary-dark text-white font-bold`;
  }
  if (variant === "outline") {
    classes = `inline-flex items-center bg-transparent hover:bg-primary text-primary font-semibold hover:text-white border border-primary hover:border-transparent`;
  }
  return (
    <button
      type={type}
      className={twMerge(`${classes} py-2 px-4 rounded ${className}`)}
    >
      {startIcon &&
        cloneElement(startIcon, {
          className: "ms-2",
        })}
      {children}
      {endIcon && cloneElement(endIcon, { className: "ms-2" })}
    </button>
  );
};

export default Button;
