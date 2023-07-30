import { Link } from "react-router-dom";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LightSwitch from "./LightSwitch";

function NavBar({ style, onClick }: { style: any; onClick: any }) {
  return (
    <nav
      className="flex flex-col items-end h-screen w-screen absolute 
      right-0 top-0 pr-3 pt-3 gap-5 text-3xl font-semibold 
      bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100
      tablet:w-1/2 tablet:shadow-2xl"
      style={style}
    >
      <div onClick={onClick}>
        <CloseRoundedIcon fontSize="large" className="text-fuchsia-600" />
      </div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link
        to="/"
        className="text-lg font-medium bg-transparent px-5 py-1 vaporwave-border  hover:scale-105"
      >
        Resume
      </Link>
      <LightSwitch />
    </nav>
  );
}

export default NavBar;
