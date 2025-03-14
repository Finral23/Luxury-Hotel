import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  children: ReactNode;
}
const Button = ({ onClick, children }: Props) => {
  return (
    <button
      className="bg-[#5c902e] hover:bg-lime-700 text-white text-lg px-8 py-3 rounded-3xl shadow-md transition font-sf-thin "
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
