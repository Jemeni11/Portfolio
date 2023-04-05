import type { MouseEventHandler } from "react/index.d.ts";

export type button = {
  title: string;
  animated?: boolean;
  buttonClass?: string;
  // onClick?: () => void;
  onClick?: MouseEventHandler;
  // onClick?: MouseEventHandler | (() => void);
};

export type linkButtonType = button & {
  href: string;
  linkClass?: string;
};
