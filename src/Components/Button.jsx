import { Link } from "react-router-dom";

const Button = ({ to = "/", addStyle, children }) => {
  return (
    <div
      className={`text-textColor1 lg:bg-gradient-to-r lg:from-violetColor lg:bg-transparent bg-violetColor px-6 py-3 rounded-full text-center ${addStyle}`}
    >
      <Link to={to}>{children}</Link>
    </div>
  );
};
export default Button;
