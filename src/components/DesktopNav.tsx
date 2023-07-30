import { Link } from "react-router-dom";
import LightSwitch from "./LightSwitch";

function DesktopNav() {
  return (
    <nav className="mobile:hidden laptop:flex laptop:gap-4 laptop:items-center">
      {[
        ["1", "Home", "/"],
        ["2", "About", "/about"],
        ["3", "Experience", "/experience"],
        ["4", "Projects", "/projects"],
        ["5", "Contact", "/contact"],
      ].map(([id, title, path]) => (
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
      <LightSwitch />
    </nav>
  );
}

export default DesktopNav;
