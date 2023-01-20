import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function ReportsBanner() {
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
        <VerifiedIcon
          fontSize="large"
          sx={{ color: "#e3f2fd", ml: 2, mt: 2, mb: -1 }}
        />
        <Typography
          variant="h5"
          sx={{
            m: 2,
            backgroundImage: "linear-gradient(50deg, #e3f2fd, #64b5f6)",
            backgroundClip: "text",
            textFillColor: "transparent",
            fontWeight: 600,
          }}
        >
          Verified reports by community validators
        </Typography>
      </Paper>
    </Box>
  );
}
