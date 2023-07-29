import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NavBar from "./NavBar";
import { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";
import { Switch } from "@mui/material";
import { handleClickToggle } from "./NavBar";

function Header() {
  const [openNav, setOpenNav] = useState<boolean>(false);
  return (
    <header className="flex justify-between items-center px-3 py-3 fixed w-screen bg-opacity-95 bg-slate-100 z-50 dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-semibold">ABEL MORAD</h1>
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
          <NavBar
            style={openNav ? { display: "none" } : { display: "flex" }}
            onClick={() => setOpenNav(!openNav)}
          />
      </div>
    </header>
  );
}

export default Header;
