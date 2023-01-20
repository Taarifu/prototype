import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";

import FormDialog from "./FormDialog";

export default function ActionButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Box sx={{ m: 1 }}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<EditIcon />}
          onClick={handleClickOpen}
          sx={{ borderRadius: 3, textTransform: "none" }}
        >
          Report incedent
        </Button>
      </Box>
      <FormDialog open={open} setOpen={setOpen} />
    </div>
  );
}
