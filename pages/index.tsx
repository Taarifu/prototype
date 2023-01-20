import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import SideNav from "@/src/components/layout/SideNav";
import PostList from "@/src/components/posts/PostList";
import CreatePost from "@/src/components/posts/CreatePost/CreatePost";
import HomeBanner from "@/src/components/layout/HomeBanner";

import { TaarifuAddress } from "../config.js";
import Taarifu from "../lib/Taarifu.json";

export default function BasicTextFields() {
  const [newsItems, setNewsItems] = useState<any>([]);
  const [loadingState, setLoadingState] = useState("nor-loaded");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadNewsItems();
  }, []);

  async function loadNewsItems() {
    setLoading(true);
    /* create a generic provider and query new items */
    const provider = new ethers.providers.JsonRpcProvider(
      "https://alfajores-forno.celo-testnet.org"
    );
    const contract = new ethers.Contract(TaarifuAddress, Taarifu.abi, provider);
    const data = await contract.fetchAllNewsItems();

    /*
     *  map over items returned from smart contract and format
     *  them as well as fetch their metadata
     */
    const items: any[] = await Promise.all(
      data.map(async (i: any) => {
        let item = {
          newsId: i.newsId.toNumber(),
          poster: i.poster,
          content: i.content,
          worthinessVotes: i.worthinessVotes.toNumber(),
          totalVotes: i.totalVotes.toNumber(),
          verified: i.verified,
        };
        return item;
      })
    );
    setNewsItems(items);
    items.sort((a, b) => b.newsId - a.newsId);
    setLoading(false);
    setLoadingState("loaded");
  }

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item lg={3}>
          <HomeBanner />
          <SideNav />
        </Grid>
        <Grid item lg={6}>
          <CreatePost />
          {loading ? <LinearProgress sx={{ ml: 2, mr: 2 }} /> : null}
          <PostList posts={newsItems} />
          {loadingState === "loaded" && !newsItems.length ? (
            <Box sx={{ m: 3 }}>
              <Typography variant="h6">No posts yet</Typography>
            </Box>
          ) : null}
        </Grid>
        <Grid item lg={3}></Grid>
      </Grid>
    </Box>
  );
}
