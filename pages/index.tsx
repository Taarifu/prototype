import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import AppNavBar from "@/src/components/layout/AppNavBar";
import SideNav from "@/src/components/layout/SideNav";
import PostList from "@/src/components/posts/PostList";
import CreatePost from "@/src/components/posts/CreatePost/CreatePost";

export default function BasicTextFields() {
  return (
    <Box>
      <AppNavBar />
      <Grid container spacing={1}>
        <Grid item lg={3}>
          <SideNav />
        </Grid>
        <Grid item lg={6}>
          <CreatePost />
          <PostList />
        </Grid>
        <Grid item lg={3}></Grid>
      </Grid>
    </Box>
  );
}
