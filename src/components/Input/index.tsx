import { FC, InputHTMLAttributes, ReactNode } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  prefix?: ReactNode;
  error?: string;
};

export const Input: FC<InputProps> = ({ prefix, error, ...props }) => {
  return (
    <div>
      <label>
        <span>{prefix}</span>
        <input {...props} className="border border-gray-30 rounded-lg p-3" />
      </label>
    </div>
  );
};
