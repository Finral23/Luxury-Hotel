import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  disabled: boolean;
  children: ReactNode;
}

const AddButton = ({ onClick, disabled, children }: Props) => {
  return (
    <button
      className="w-7 text-lg border border-neutral-800 disabled:opacity-50"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default AddButton;
