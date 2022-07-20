import { RefObject, useEffect, useRef, useState } from "react";

export enum DraggingState {
  undefined = -1,
  starts = 0,
  moves = 1,
  finished = 2,
}

export function useDragging() {
  const [state, setState] = useState(DraggingState.undefined);
  const [point, setPoint] = useState(0);
  const [elementOffset, setElementOffset] = useState(0);
  const [touchOffset, setTouchOffset] = useState(0);
  const ref = useRef() as RefObject<HTMLDivElement>;

  const isDragging = () => {
    return state === DraggingState.starts || state === DraggingState.moves;
  };

  function onMouseDown(e: MouseEvent) {
    const parentElement = ref.current?.offsetParent as HTMLElement;
    if (e.button !== 0 || !ref.current || !parentElement) return;
    setPoint(e.y - parentElement.offsetTop);
    setElementOffset(ref.current.offsetTop);
    setTouchOffset(e.y - parentElement.offsetTop - ref.current.offsetTop);

    setState(DraggingState.starts);
  }

  function onMouseMove(e: MouseEvent) {
    const parentElement = ref.current?.offsetParent as HTMLElement;
    if (!isDragging() || !ref.current || !parentElement) return;
    setState(DraggingState.moves);

    setPoint(e.y - parentElement.offsetTop);
    setElementOffset(e.y - touchOffset - parentElement.offsetTop);
  }

  function onMouseUp(e: MouseEvent) {
    setState(DraggingState.finished);
  }

  function onClick(e: MouseEvent) {
    setState(DraggingState.finished);
  }

  useEffect(() => {
    const element = ref.current;
    element?.addEventListener("mousedown", onMouseDown);

    return () => {
      element?.removeEventListener("mousedown", onMouseDown);
    };
  }, [ref.current]);

  useEffect(() => {
    if (isDragging()) {
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("click", onClick);
    } else {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("click", onClick);
    }
    return () => {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("click", onClick);
    };
  }, [state]);

  return {
    ref: ref,
    state: state,
    point: point,
    elementOffset: elementOffset,
    touchOffset: touchOffset,
  };
}
