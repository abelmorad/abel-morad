import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";
import { Switch } from "@mui/material";
import { handleClickToggle } from "./MobileNavBar";

function DesktopNav() {
  return (
    <nav className="mobile:hidden laptop:flex laptop:gap-4 laptop:items-center">
      {[
        ["1","Home", "/"],
        ["2","About", "/about"],
        ["3","Experience", "/experience"],
        ["4","Projects", "/projects"],
        ["5","Contact", "/contact"],
      ].map(([id,title, path]) => (
        <Link className="text-lg font-medium underline-link" to={path} key={id}>
          {title}
        </Link>
      ))}
      <Link
        to="/"
        className="text-lg font-medium bg-transparent px-5 py-1 vaporwave-border hover:scale-105"
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

export default DesktopNav;
