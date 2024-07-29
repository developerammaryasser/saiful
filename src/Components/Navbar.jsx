import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
const Navbar = ({ links }) => {
  const [isNav, setIsNav] = useState(false);

  return (
    <div className="h-[100px] fixed lg:relative z-10">
      <div className="container h-full">
        <div
          className={`fixed top-0 ${
            isNav ? "left-0" :"left-[-1500px]"
          } lg:left-0 transition-all duration-500 w-[70%] p-6 bg-tertiaryColor flex-col z-10
          items-stretch justify-start gap-12 flex lg:w-full lg:justify-between h-full lg:relative lg:items-center lg:p-0 lg:flex-row  lg:bg-transparent`}
        >
          <div className="lg:flex-1 flex items-start  lg:items-center lg:justify-center">
            <ul className="links flex gap-6 flex-col lg:flex-row">
              {links.map((link, i) => (
                <li key={i}>
                  <Link to={link.to}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Button>Here Me!</Button>
        </div>
        <div
          className={`fixed right-5 top-5 lg:hidden`}
          onClick={() => setIsNav(!isNav)}
        >
          {isNav ? <IoCloseOutline size={30} /> : <IoMenuOutline size={30} />}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
