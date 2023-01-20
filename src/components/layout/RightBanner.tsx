import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function RightBanner() {
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
        <Box sx={{ m: 4 }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              mb: 0,
              color: "#546e7a",
            }}
          >
            "Citizen journalism refers to the act of members of the general
            public playing an active role in the process of collection,
            reporting, analyzing, and disseminating news and information."
            <br />
            <br />
            "Citizen journalism plays a significant role in governance as it
            promotes accountability, transparency, and civic engagement. It
            supports democracy and amplifies the voices of marginalized
            communities."
          </Typography>
        </Box>

        <Typography
          variant="h5"
          sx={{
            m: 2,
            backgroundImage: "linear-gradient(50deg, #ffee58, #f06292)",
            backgroundClip: "text",
            textFillColor: "transparent",
            fontWeight: 600,
          }}
        ></Typography>
      </Paper>
    </Box>
  );
}
