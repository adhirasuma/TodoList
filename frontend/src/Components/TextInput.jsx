import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTheme } from './ThemeProvider';

export default function TextInput(props) {
  const { darkMode } = useTheme();
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label={props.label}
        variant="standard"
        type={props.type}
        name={props.name}
        disabled={props.deactivate}
        value={props.value}
        onChange={props.state}
        sx={{
    width: "220px",

    "& .MuiInputLabel-root": {
      color: darkMode ? "#D6C7B0" : "#8B7355",
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: darkMode ? "#FFD89C" : "#B07D3C",
    },

    "& .MuiInput-underline:before": {
      borderBottomColor: darkMode ? "#8A7A66" : "#D8C3A5",
    },

    "& .MuiInput-underline:hover:before": {
      borderBottomColor: darkMode ? "#FFD89C" : "#B07D3C",
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: darkMode ? "#FFD89C" : "#B07D3C",
    },

    "& .MuiInputBase-input": {
      color: darkMode ? "#FFD89C" : "#444",
    }
  }}
      />
    </Box>
  );
}