import * as React from "react";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import VerifiedIcon from "@mui/icons-material/Verified";

import { TaarifuAddress } from "../../../config.js";
import Taarifu from "../../../lib/Taarifu.json";

interface Props {
  data: {
    newsId: number;
    content: string;
    worthinessVotes: number;
    totalVotes: number;
    verified: boolean;
  };
}

export default function Post(props: Props) {
  const { data } = props;
  const { newsId, content, worthinessVotes, totalVotes, verified } = data;

  const router = useRouter();

  async function castVote(newsId: number, voteType: boolean) {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    /* next, create the item */
    let contract = new ethers.Contract(TaarifuAddress, Taarifu.abi, signer);
    let voteAction = await contract.voteWorthiness(newsId, voteType, 1);
    await voteAction.wait();
    router.replace(router.asPath);
  }

  async function verifyNews() {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    /* next, create the item */
    let contract = new ethers.Contract(TaarifuAddress, Taarifu.abi, signer);
    let voteAction = await contract.verifyNews(newsId);
    await voteAction.wait();
    router.replace(router.asPath);
  }

  const upVote = () => {
    castVote(newsId, true);
  };

  const downVote = () => {
    castVote(newsId, false);
  };

  return (
    <Card sx={{ m: 2, p: 2, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="body1">{content}</Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="delete" size="large" onClick={upVote}>
          <KeyboardDoubleArrowUpIcon />
        </IconButton>
        <Typography
          variant="body1"
          sx={
            worthinessVotes < 0
              ? { color: "#ff3d00", ml: 0.5 }
              : worthinessVotes == 0
              ? { color: "#37474f", ml: 0.5 }
              : { color: "#558b2f", ml: 0.5 }
          }
        >
          {worthinessVotes}
        </Typography>
        <IconButton aria-label="delete" size="large" onClick={downVote}>
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
            {totalVotes}
          </Typography>
        </Paper>
        {verified ? (
          <VerifiedIcon fontSize="large" sx={{ color: "#2962ff" }} />
        ) : (
          <IconButton aria-label="delete" size="large" onClick={verifyNews}>
            <TaskAltIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
