import { FC } from "react";
import { Button, ButtonProps } from "./index";

type GreenButtonProps = ButtonProps;

export const GreenButton: FC<GreenButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      className="bg-primaryGreen px-6 py-3 text-lg rounded-3xl text-white font-light transition-all hover:bg-orangePrimary disabled:bg-transparent disabled:text-gray-30"
    >
      {children}
    </Button>
  );
};
