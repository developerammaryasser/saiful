import { Link } from "react-router-dom";

const Tab = ({ to, text, isOpen }) => {
  return (
    <li
      className={`h-[50px] py-3 px-6 transition-all duration-300 ${
        isOpen ? "BgGradient" : ""
      } hover:BgGradient rounded-full`}
    >
      <Link to={to} className="text-textColor">
        {text}
      </Link>
    </li>
  );
};
export default Tab;
