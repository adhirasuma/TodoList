import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function EditButton(props) {
  return (
    <Tooltip title="Logout">
      <IconButton
        onClick={props.action}
        sx={{
          color: "var(--icon-color)",
          transition: "0.3s",

          "&:hover": {
            color: "#D8A25E",
          }
        }}
      >
        <LogoutIcon />
      </IconButton>
    </Tooltip>
  );
}