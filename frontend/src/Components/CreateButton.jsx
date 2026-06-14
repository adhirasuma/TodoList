import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function EditButton(props) {
  return (
    <Tooltip title="Add">
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
        <AddIcon />
      </IconButton>
    </Tooltip>
  );
}
