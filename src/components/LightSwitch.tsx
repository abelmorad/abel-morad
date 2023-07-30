import { Switch } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export function handleClickToggle() {
  document.documentElement.classList.toggle("dark");
}

function LightSwitch() {
  return (
    <div className="flex items-center">
      <LightModeIcon fontSize="small" className="text-yellow-500" />
      <Switch size="small" color="warning" onClick={handleClickToggle} />
      <DarkModeIcon fontSize="small" />
    </div>
  );
}

export default LightSwitch;
