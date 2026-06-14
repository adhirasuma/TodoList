import SaveIcon from '@mui/icons-material/Save';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function EditButton(props) {
  return (
    <Tooltip title="Save">
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
        <SaveIcon />
      </IconButton>
    </Tooltip>
  );
}