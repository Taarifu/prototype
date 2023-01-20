import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function HomeBanner() {
  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          m: 3,
          p: 1,
          backgroundColor: "#263238",
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            m: 2,
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Taarifu
        </Typography>
        <Typography
          variant="h5"
          sx={{
            m: 2,
            backgroundImage: "linear-gradient(50deg, #ffee58, #f06292)",
            backgroundClip: "text",
            textFillColor: "transparent",
            fontWeight: 600,
          }}
        >
          A decentralized citizen reporting platform
        </Typography>
      </Paper>
    </Box>
  );
}
