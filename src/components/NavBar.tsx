import { Switch } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export function handleClickToggle() {
  document.documentElement.classList.toggle("dark");
}
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
        <CloseOutlinedIcon fontSize="large" />
      </div>
      <Link to="/about">About</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link
        to="/resume"
        className="bg-blue-600 text-white px-5 py-1 rounded-md"
      >
        Resume
      </Link>
      <div className="flex items-center">
        <LightModeIcon fontSize="small" className="text-yellow-500" />
        <Switch size="small" color="warning" onClick={handleClickToggle} />
        <DarkModeIcon fontSize="small" />
      </div>
    </nav>
  );
}

export default NavBar;
