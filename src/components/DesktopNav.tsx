import LightSwitch from "./LightSwitch";
import ResumeBtn from "./ResumeBtn";

function DesktopNav() {
  return (
    <nav className="mobile:hidden laptop:flex laptop:gap-4 laptop:items-center">
      {[
        ["1", "Home", "#"],
        ["2", "About", "#about"],
        ["4", "Projects", "#projects"],
        ["5", "Contact", "#contact"], 
      ].map(([id, title, path]) => (
        <a className="text-lg font-medium underline-link" href={path} key={id}>
          {title}
        </a>
      ))}
      <ResumeBtn />
      <LightSwitch />
    </nav>
  );
}

export default DesktopNav;
