import { Link } from "react-router-dom";

const ButtonOutline = ({ to = "/", addStyle, children }) => {
  return (
    <div
      className={`text-textColor2 bg-transparent border-textColor2 cursor-pointer border-2 px-3 py-3 rounded-full text-center ${addStyle}`}
    >
      <Link to={to}>{children}</Link>
    </div>
  );
};
export default ButtonOutline;
