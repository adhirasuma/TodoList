import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { useTheme } from "./ThemeProvider";

export default function ThemeButton() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <Tooltip title={darkMode ? "Light Mode" : "Dark Mode"}>
      <IconButton
        onClick={toggleTheme}
        sx={{
          color: darkMode ? "#FFD89C" : "#5A4A3A",
          transition: "all 0.3s ease",

          "&:hover": {
            transform: "rotate(20deg) scale(1.1)",
          }
        }}
      >
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
}