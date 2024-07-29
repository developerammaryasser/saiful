import { useState } from "react";
import { IoArrowUp } from "react-icons/io5";

const AccordionItem = ({
  number = 0,
  title = "",
  text = "",
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`${
        isOpen || defaultOpen ? "BgGradient " : ""
      } cursor-pointer rounded-md transition-all  p-6 lg:py-3 lg:px-6 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-start`}
    >
      <div>
        <span className="text-lg font-bold hidden lg:block">0{number}</span>
      </div>
      <h3 className="font-bold lg:w-1/2">{title}</h3>
      <p className="lg:w-1/2 opacity-100">{text}</p>
      <div
        className={`${
          isOpen || defaultOpen ? "-rotate-45 lg:text-textColor2" : ""
        } transition-all rotate-45`}
      >
        <IoArrowUp size={30} />
      </div>
    </div>
  );
};
export default AccordionItem;
