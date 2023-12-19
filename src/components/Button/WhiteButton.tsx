import { FC } from "react";
import { Button, ButtonProps } from "./index";

type GreenButtonProps = ButtonProps;

export const WhiteButton: FC<GreenButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      className="bg-white px-6 py-3 text-lg rounded-full text-primaryGreen font-light transition-all hover:bg-orangePrimary disabled:bg-transparent disabled:text-gray-30"
    >
      {children}
    </Button>
  );
};
