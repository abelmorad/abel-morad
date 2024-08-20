import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LightSwitch from "./LightSwitch";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import ResumeBtn from "./ResumeBtn";

function NavBar({ style, onClick }: { style: any; onClick: any }) {
  return (
    <nav
      className="flex flex-col items-end h-screen w-screen absolute 
      right-0 top-0 px-3 pt-3 gap-3 text-3xl font-semibold 
      bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100
      tablet:w-1/2 tablet:shadow-2xl"
      style={style}
    >
      <div className="flex w-full justify-between">
        <LightSwitch />
        <CloseRoundedIcon
          fontSize="large"
          className="text-fuchsia-600"
          onClick={onClick}
        />
      </div>

      {[
        
        ["1", "Home", "#"],
        ["2", "About", "#about"],
        ["4", "Projects", "#projects"],
        ["6", "Contact", "#contact"], 
      ].map(([id, title, path]) => (
        <a
          className="text-4xl font-semibold underline-link"
          href={path}
          key={id}
          onClick={onClick}
        >
          {title}
        </a>
      ))}
      <div className="mt-4">
        <ResumeBtn />
      </div>
      <div className="flex gap-5 absolute bottom-10 right-3">
        <a href="https://github.com/abelmorad" target="_blank">
          <BsGithub size="1.5rem" />
        </a>
        <a href="https://www.linkedin.com/in/sharhabeel-morad/" target="_blank">
          <BsLinkedin size="1.5rem" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100092525047168" target="_blank">
          <BsFacebook size="1.5rem" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
