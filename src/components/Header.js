import logo from "../assets/Tr logos.png";
import { Button, Link } from "react-scroll";
const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo  */}
          <a href="#">
            <img src={logo} alt="" className="h-20" />
          </a>
          <Link
            to="contact"
            smooth
            spy
            className="btn btn-sm flex items-center cursor-pointer "
          >
            {" "}
            Contact me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
