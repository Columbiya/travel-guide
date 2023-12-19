import { FC } from "react";
import { Button, ButtonProps } from "./index";

type BlackOutlineButtonProps = ButtonProps & { active?: boolean };

export const BlackOutlineButton: FC<BlackOutlineButtonProps> = ({
  className,
  children,
  active,
  ...props
}) => {
  return (
    <Button
      {...props}
      className="bg-transparent px-6 py-3 border hover:border-primaryGreen transition-all text-lg rounded-3xl border-gray-80 text-gray-80 hover:bg-primaryGreen hover:text-white disabled:bg-transparent disabled:text-gray-30"
    >
      {children}
    </Button>
  );
};
