import { MutableRefObject } from "react";

type SetIsVisible = (value: boolean) => void;

type observationPosition = (
  setIsVisible: SetIsVisible,
  cardRef: MutableRefObject<HTMLElement | null>,
  threshold: number
) => () => void;

export default observationPosition;