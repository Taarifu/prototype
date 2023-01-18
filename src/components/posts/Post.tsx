import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export default function Post() {
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
        <Typography variant="body1">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="delete" size="large">
          <KeyboardDoubleArrowUpIcon />
        </IconButton>
        <Typography
          variant="body1"
          sx={
            aggregate < 0
              ? { color: "#ff3d00", ml: 0.5 }
              : aggregate == 0
              ? { color: "#37474f", ml: 0.5 }
              : { color: "#558b2f", ml: 0.5 }
          }
        >
          {aggregate}
        </Typography>
        <IconButton aria-label="delete" size="large">
          <KeyboardDoubleArrowDownIcon />
        </IconButton>
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
          <BarChartRoundedIcon />
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
