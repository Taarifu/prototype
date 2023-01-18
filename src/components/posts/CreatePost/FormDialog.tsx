import React, { Dispatch, SetStateAction } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function FormDialog(props: IProps) {
  const { open, setOpen } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        maxWidth="sm"
        fullWidth
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>What's happening?</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Say it as you see it"
            id="report"
            fullWidth
            multiline
            rows={4}
            variant="filled"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
