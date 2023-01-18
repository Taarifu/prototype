import React from "react";
import Card from "@mui/material/Card";
import Dialog from "@mui/material/Dialog";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";

import FormDialog from "./FormDialog";

export default function CreatePost() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card
        sx={{
          backgroundColor: "#263238",
          color: "#b0bec5",
          m: 2,
          borderRadius: 6,
        }}
      >
        <CardActionArea sx={{ p: 1 }} onClick={handleClickOpen}>
          <CardContent>
            <Box>
              <Typography variant="subtitle1" sx={{ ml: 1 }}>
                {" "}
                | What's happening?
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>

      <FormDialog open={open} setOpen={setOpen} />
    </div>
  );
}
