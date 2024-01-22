import { DialogContainer } from "./style";
import IProps from "./interface";

import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

function index(props: IProps) {
  const { open, children, title, submitBtn, onCancel, onSubmit } = props;

  return (
    <DialogContainer open={open}>
      <DialogTitle id="">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onSubmit}>
          {submitBtn ?? "Ok"}
        </Button>
        <Button onClick={onCancel}>Close</Button>
      </DialogActions>
    </DialogContainer>
  );
}

export default index;
