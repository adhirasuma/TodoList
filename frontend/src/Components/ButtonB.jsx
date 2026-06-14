import Button from '@mui/material/Button';

export default function ButtonB(props) {
  return (
<Button
  variant="outlined"
  onClick={props.action}
  disabled={props.deactivate}
sx={{
  minWidth: "90px",
  height: "38px",
  borderRadius: "8px",
  textTransform: "none",
  borderColor: "#D8A25E",
  color: "#B07D3C",

  "&:hover": {
    backgroundColor: "#D8A25E",
    color: "white",
    borderColor: "#D8A25E"
  }
}}
>
  {props.children}
</Button>
  );
}