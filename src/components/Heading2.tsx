import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Heading2 = ({ children }: Props) => {
  return <h2 className="text-4xl text-slate-200 tracking-wider">{children}</h2>;
};

export default Heading2;
