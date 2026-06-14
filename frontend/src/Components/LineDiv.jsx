import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  color: (theme.vars || theme).palette.text.secondary,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function LineDiv(props) {
  return (
    <Root>
      <Divider
        textAlign={props.align}
        sx={{
          "&::before, &::after": {
            borderColor: "var(--divider-color)",
          },
          color: "var(--divider-text)",
        }}
      >
        {props.content}
      </Divider>
    </Root>
  );
}

