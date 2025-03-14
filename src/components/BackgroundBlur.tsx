import { ReactNode } from "react";

interface Props {
  src: string;
  children: ReactNode;
  justify: "start" | "end";
}
const BackgroundBlur = ({ src, children, justify }: Props) => {
  return (
    <div
      className={
        "h-[670px] max-w-7xl mx-auto flex items-center justify-center my-10 " +
        "md:justify-" +
        justify
      }
    >
      <img
        className="absolute h-100 w-full left-0 object-cover blur-xs"
        src={src}
      />
      {children}
    </div>
  );
};

export default BackgroundBlur;
