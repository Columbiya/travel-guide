import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
}

export const Button: FC<ButtonProps> = ({
  href,
  children,
  className,
  style,
  target,
  ...props
}) => {
  if (href) {
    return (
      <Link href={href} target={target} className={className} style={style}>
        {children}
      </Link>
    );
  }
  return (
    <button className={className} style={style} {...props}>
      {children}
    </button>
  );
};
