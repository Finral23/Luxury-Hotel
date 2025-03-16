import AddButton from "./AddButton";

interface GuestRowProps {
  label: string;
  count: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const GuestRow = ({
  label,
  count,
  onChange,
  min = 0,
  max = 10,
}: GuestRowProps) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <span className="first-letter:uppercase">{label}</span>
      <div className="flex items-center gap-2">
        <AddButton onClick={() => onChange(count - 1)} disabled={count <= min}>
          -
        </AddButton>
        <span>{count}</span>
        <AddButton onClick={() => onChange(count + 1)} disabled={count >= max}>
          +
        </AddButton>
      </div>
    </div>
  );
};

export default GuestRow;
