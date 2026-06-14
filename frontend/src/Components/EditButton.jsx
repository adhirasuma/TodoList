import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function EditButton(props) {
  return (
    <Tooltip title="Edit">
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
        <EditIcon />
      </IconButton>
    </Tooltip>
  );
}