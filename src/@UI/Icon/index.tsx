import styled from "@emotion/styled";
import { ReactComponent as BellOn } from "./svgs/light/bell-on.svg";
import { ReactComponent as ChevronDown } from "./svgs/light/chevron-down.svg";
import { ReactComponent as ChevronLeft } from "./svgs/light/chevron-left.svg";
import { ReactComponent as ChevronRight } from "./svgs/light/chevron-right.svg";
import { ReactComponent as ChevronUp } from "./svgs/light/chevron-up.svg";
import { ReactComponent as Children } from "./svgs/light/children.svg";
import { ReactComponent as City } from "./svgs/light/city.svg";
import { ReactComponent as Display } from "./svgs/light/display.svg";
import { ReactComponent as Flask } from "./svgs/light/flask.svg";
import { ReactComponent as HeartPulse } from "./svgs/light/heart-pulse.svg";
import { ReactComponent as Doctor } from "./svgs/light/user-doctor.svg";
import { ReactComponent as Bars } from "./svgs/light/bars.svg";
import { ReactComponent as Logout } from "./svgs/light/arrow-right-from-bracket.svg";

const SpanStyled = styled("span")<{ size: number }>(({ size }) => ({
  svg: {
    width: size,
    height: size,
    fill: "currentcolor",
  },
}));

type IconComponentProps = {
  name: string;
  className?: string;
  size?: number;
};

interface IconTypes {
  [key: string]: ReactSVGComponent;
}

const iconTypes: IconTypes = {
  display: Display,
  doctor: Doctor,
  children: Children,
  bellOn: BellOn,
  city: City,
  flask: Flask,
  heartPulse: HeartPulse,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  bars: Bars,
  logout: Logout,
};

const Icon = ({
  name,
  className = "",
  size = 18,
  ...props
}: IconComponentProps) => {
  const Icon = iconTypes[name];
  return (
    <SpanStyled
      className={`${className} inline-block leading-normal`}
      size={size}
    >
      <Icon {...props} />
    </SpanStyled>
  );
};

export default Icon;