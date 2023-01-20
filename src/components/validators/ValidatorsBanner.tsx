import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BecomeValidator from "./BecomeValidator";

export default function ValidatorsBanner() {
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
          variant="h5"
          sx={{
            m: 2,
            backgroundImage: "linear-gradient(45deg, #ffee58, #80cbc4)",
            backgroundClip: "text",
            textFillColor: "transparent",
            fontWeight: 600,
          }}
        >
          Validators are members chosen by the community to verify reports
        </Typography>

        <Box sx={{ p: 1 }}>
          <BecomeValidator />
        </Box>
      </Paper>
    </Box>
  );
}
