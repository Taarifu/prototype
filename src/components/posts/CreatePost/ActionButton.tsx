import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";

import FormDialog from "./FormDialog";

export default function ActionButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<EditIcon />}
        onClick={handleClickOpen}
        sx={{ m: 2, borderRadius: 3, textTransform: "none" }}
      >
        Report incedent
      </Button>
      <FormDialog open={open} setOpen={setOpen} />
    </div>
  );
}
