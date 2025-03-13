interface Props {
  className?: string;
}

const CutBlock = ({ className }: Props) => {
  return (
    <div className={"border-l border-white/30 h-6 mx-3 " + className}></div>
  );
};

export default CutBlock;
