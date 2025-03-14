import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GreenBlock = ({ children }: Props) => {
  return (
    <div className="bg-[url(/green-block.png)] w-[90%] h-auto md:w-[600px] rounded-2xl absolute py-10 px-2 md:px-10">
      {children}
    </div>
  );
};

export default GreenBlock;
