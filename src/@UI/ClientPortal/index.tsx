import { useEffect, useRef, useState } from "react";
import Portal from "./Portal";

interface Propss {
  open: boolean;
  onClose: any;
  children: React.ReactNode;
  className?: string;
}

export default function Sidebar(props: Propss) {
  const { open, onClose, children, className } = props;

  const [active, setActive] = useState(false);
  const backdrop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = backdrop;

    const transitionEnd = () => setActive(open);

    const keyHandler = (e: any) =>
      [27].indexOf(e.which) >= 0 && onClose("left", false);

    const clickHandler = (e: MouseEvent) =>
      e.target === current && onClose("left", false);

    if (current) {
      current.addEventListener("transitionend", transitionEnd);
      current.addEventListener("click", clickHandler);
      window.addEventListener("keyup", keyHandler);
    }

    if (open) {
      window.setTimeout(() => {
        (document.activeElement as HTMLElement).blur();
        setActive(open);
        (document.querySelector("#root") as Element).setAttribute(
          "inert",
          "true"
        );
      }, 10);
    }

    return () => {
      if (current) {
        current.removeEventListener("transitionend", transitionEnd);
        current.removeEventListener("click", clickHandler);
      }

      (document.querySelector("#root") as Element).removeAttribute("inert");
      window.removeEventListener("keyup", keyHandler);
    };
  }, [open, onClose]);

  return (
    <>
      {(open || active) && (
        <Portal>
          <div
            ref={backdrop}
            className={
              active && open
                ? "fixed top-0 bottom-0 left-0 right-0 bg-black/40 transition-colors duration-100 ease-in-out delay-300"
                : ""
            }
          />
          <aside
            className={`${className} transition-transform duration-75 ease-in-out delay-200 ${
              active && open ? "translate-none" : "translate-x-full"
            }`}
          >
            {children}
          </aside>
        </Portal>
      )}
    </>
  );
}
