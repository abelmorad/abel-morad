import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import NavBar from "./MobileNavBar";
import { useState } from "react";
import Logo from "../../public/abelmorad.png";
import DesktopNav from "./DesktopNav";

function Header() {
  const [openNav, setOpenNav] = useState<boolean>(false);
  return (
    <header className="flex justify-between items-center pl-6 pr-3 py-3 fixed w-screen backdrop-blur-sm laptop:px-10 z-50 dark:bg-gray-900 dark:text-gray-100">
      <img src={Logo} alt={Logo} className="h-9" />
      <div>
        <div className="laptop:hidden" onClick={() => setOpenNav(!openNav)}>
          <MenuRoundedIcon fontSize="large" className="text-fuchsia-600" />
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
