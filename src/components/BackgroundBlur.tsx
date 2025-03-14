import { ReactNode } from "react";

interface Props {
  src: string;
  children: ReactNode;
}
const BackgroundBlur = ({ src, children }: Props) => {
  return (
    <div className="h-[670px] max-w-7xl mx-auto flex items-center justify-center md:justify-start my-10">
      <img
        className="absolute h-100 w-full left-0 object-cover blur-xs"
        src={src}
      />
      {children}
    </div>
  );
};

export default BackgroundBlur;
