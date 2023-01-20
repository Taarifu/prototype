import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export default function Report() {
  const image = null;
  const aggregate = 500;
  return (
    <Card sx={{ m: 2, p: 2, borderRadius: 2 }}>
      {image ? (
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={image}
        />
      ) : null}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body1">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            borderRadius: 30,
            backgroundColor: "#fff59d",
            opacity: "0.8",
            p: 1,
            m: 1,
          }}
        >
          <ContentCopyIcon />
          <Typography variant="body1" sx={{ mr: 1 }}>
            1000
          </Typography>
        </Paper>
        <IconButton aria-label="delete" size="large">
          <TaskAltIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
