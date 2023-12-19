import { FC, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: "1800px",
        padding: "0 12px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};
