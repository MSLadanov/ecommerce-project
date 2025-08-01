import { ReactElement, ReactNode } from "react";

export const Slide = ({
  children,
  imageUrl,
  isActive,
}: {
  children: ReactNode;
  imageUrl: string;
  isActive: boolean;
}): ReactElement => {
  return (
    <div
      className={isActive ? "slide active" : "slide"}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {children}
    </div>
  );
};
