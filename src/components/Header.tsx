import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NavBar from "./NavBar";
import { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";
import { Switch } from "@mui/material";
import { handleClickToggle } from "./NavBar";
import Logo from "/public/abelmorad.png";

function Header() {
  const [openNav, setOpenNav] = useState<boolean>(false);
  return (
    <header className="flex justify-between items-center px-3 py-3 fixed w-screen bg-opacity-95 laptop:px-10 bg-slate-100 z-50 dark:bg-gray-900 dark:text-gray-100">
      <img src={Logo} alt={Logo} className="h-9"/>
      <div>
        <div className="laptop:hidden" onClick={() => setOpenNav(!openNav)}>
          <MenuOutlinedIcon fontSize="large" />
        </div>
        <div className="mobile:hidden laptop:flex laptop:gap-4 laptop:items-center">
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
        </div>
          <div>
            <NavBar
              style={openNav ? { display: "flex" } : { display: "none" }}
              onClick={() => setOpenNav(!openNav)}
            />
          </div>
      </div>
    </header>
  );
}

export default Header;
