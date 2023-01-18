import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

import ActionButton from "../posts/CreatePost/ActionButton";
export default function SideNav() {
  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          m: 3,
          backgroundColor: "#e8eaf6",
          borderRadius: 4,
        }}
      >
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon color="inherit" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LibraryAddCheckIcon />
            </ListItemIcon>
            <ListItemText primary="Verified reports" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText primary="Validators" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="My profile" />
          </ListItem>
        </List>

        <Box sx={{ m: 10 }} />

        <ActionButton />
      </Paper>
    </Box>
  );
}
