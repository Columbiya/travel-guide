import { FC } from "react";
import { Button, ButtonProps } from "./index";

type BlackOutlineButtonProps = ButtonProps & { active?: boolean };

export const BlackOutlineHoverBlackButton: FC<BlackOutlineButtonProps> = ({
  className,
  children,
  active,
  style,
  ...props
}) => {
  return (
    <Button
      {...props}
      className="bg-white px-6 py-2 border font-normal hover:border-black transition-all text-lg rounded-3xl border-black text-black hover:bg-black hover:text-white disabled:bg-transparent disabled:text-gray-30"
      style={active ? { ...style, color: "#fff", background: "#000" } : style}
    >
      {children}
    </Button>
  );
};
