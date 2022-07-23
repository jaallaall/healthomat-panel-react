import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Portal from "../ClientPortal";

type ClickHandler = (
  anchor: "left",
  open: boolean
) => (e: React.KeyboardEvent | React.MouseEvent) => Record<string, unknown>;

interface Propss {
  open: boolean;
  onClose: any;
  children: React.ReactNode;
  className?: string;
}

export default function Sidebar(props: Propss) {
  const { open, onClose, children, className } = props;
  const backdrop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = backdrop;

    const keyHandler = (e: any) =>
      [27].indexOf(e.which) >= 0 && onClose("left", false);

    const clickHandler = (e: MouseEvent) =>
      e.target === current && onClose("left", false);

    if (current) {
      current.addEventListener("click", clickHandler);
      window.addEventListener("keyup", keyHandler);
    }

    if (open) {
      window.setTimeout(() => {
        (document.activeElement as HTMLElement).blur();
        document.body.style.overflow = "hidden";
        (document.querySelector("#root") as Element).setAttribute(
          "inert",
          "true"
        );
      }, 10);
    }

    return () => {
      if (current) {
        current.removeEventListener("click", clickHandler);
      }
      document.body.removeAttribute("style");
      (document.querySelector("#root") as Element).removeAttribute("inert");
      window.removeEventListener("keyup", keyHandler);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <Portal>
          <motion.div
            key="backdrop"
            className="fixed top-0 bottom-0 left-0 right-0 bg-black/40"
            exit={{
              opacity: 0,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            ref={backdrop}
          />
          <motion.aside
            key="sidebar"
            initial={{
              opacity: 0,
              x: document.dir === "rtl" ? 100 : -100,
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: document.dir === "rtl" ? 100 : -100,
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
            role={"sidebar"}
            className={className}
          >
            {children}
          </motion.aside>
        </Portal>
      )}
    </AnimatePresence>
  );
}
