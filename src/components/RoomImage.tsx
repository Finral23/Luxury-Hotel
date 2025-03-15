interface Props {
  src: string;
}

const RoomImage = ({ src }: Props) => {
  return (
    <div className="overflow-hidden transition-transform duration-300 shadow-sm hover:scale-105 hover:shadow-lg">
      <img
        className="size-full object-cover"
        src={"/room" + src + ".png"}
        alt="Room"
      />
    </div>
  );
};

export default RoomImage;
