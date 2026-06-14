import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function EditButton(props) {
  return (
    <Tooltip title="Delete">
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
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}