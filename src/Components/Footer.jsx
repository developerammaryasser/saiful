import { Link } from "react-router-dom";

const Footer = ({ footerLinks }) => {
  return (
    <footer className="primaryColor pb-12 pt-24">
      <div className="container flex flex-col items-center justify-center gap-6">
        <div className="w-full md:flex justify-center">
          <ul className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {footerLinks.map((link, i) => (
              <li key={i} className="text-lg">
                <Link to={link.to}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-textColor2">
            &copy; <b>2024</b> All Right Reserved by{" "}
            <a
              href="https://www.linkedin.com/in/frontend-ammar-yasser"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Ammar Yasser</b>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
