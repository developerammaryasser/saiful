import { IoArrowUp } from "react-icons/io5";

const Card = ({ image = "", title = "", text = "", isOpen = false}) => {
  return (
    <div className="rounded-lg relative h-[400px]">
      <div className="size-full overflow-hidden rounded-lg">
        <img src={image} alt={title} className="object-cover size-full" />
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute flex items-center justify-between bottom-12 -left-[5%] w-[110%] BgGradient2 px-6 py-3 rounded-lg`}
      >
        <div>
          <h4 className="font-bold">{title}</h4>
          <p className="text-base">{text}</p>
        </div>
        <div className={` transition-all rotate-45 text-textColor1`}>
          <IoArrowUp size={30} />
        </div>
      </div>
    </div>
  );
};
export default Card;
