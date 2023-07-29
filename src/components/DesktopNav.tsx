import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";
import { Switch } from "@mui/material";
import { handleClickToggle } from "./MobileNavBar";

function DesktopNav() {
  return (
    <nav className="mobile:hidden laptop:flex laptop:gap-4 laptop:items-center">
      {[
        ["About", "/about"],
        ["Experience", "/experience"],
        ["Projects", "/projects"],
        ["Contact", "/contact"],
      ].map(([title, path]) => (
        <Link to={path}>{title}</Link>
      ))}
      <Link to="/" className="bg-blue-600 text-white px-5 py-1 rounded-md">
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

export default DesktopNav;
