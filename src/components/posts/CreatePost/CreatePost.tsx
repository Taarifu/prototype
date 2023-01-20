import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import FormDialog from "./FormDialog";

export default function CreatePost() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Card
        sx={{
          backgroundColor: "#263238",
          color: "#b0bec5",
          m: 2,
          borderRadius: 8,
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
