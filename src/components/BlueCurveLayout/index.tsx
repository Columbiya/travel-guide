import { FC, ReactNode } from "react";
import { Bluecurve } from "@/assets";

type BlueCurveLayoutProps = {
  children: ReactNode;
};

export const BlueCurveLayout: FC<BlueCurveLayoutProps> = ({ children }) => {
  return <div style={Bluecurve.style}>{children}</div>;
};
