import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NavBar from "./MobileNavBar";
import { useState } from "react";
import Logo from "../../public/abelmorad.png";
import DesktopNav from "./DesktopNav";

function Header() {
  const [openNav, setOpenNav] = useState<boolean>(false);
  return (
    <header className="flex justify-between items-center px-3 py-3 fixed w-screen bg-opacity-95 laptop:px-10 bg-slate-100 z-50 dark:bg-gray-900 dark:text-gray-100">
      <img src={Logo} alt={Logo} className="h-9" />
      <div>
        <div className="laptop:hidden" onClick={() => setOpenNav(!openNav)}>
          <MenuOutlinedIcon fontSize="large" />
        </div>
        <DesktopNav />
        <NavBar
          style={openNav ? { display: "flex" } : { display: "none" }}
          onClick={() => setOpenNav(!openNav)}
        />
      </div>
    </header>
  );
}

export default Header;
