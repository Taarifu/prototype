import * as React from "react";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import Web3Modal from "web3modal";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import TollIcon from "@mui/icons-material/Toll";
import Typography from "@mui/material/Typography";

import HowToVoteIcon from "@mui/icons-material/HowToVote";

import { TaarifuAddress } from "../../../config.js";
import Taarifu from "../../../artifacts/contracts/Taarifu.sol/Taarifu.json";

interface Props {
  data: {
    validatorId: number;
    voteCount: number;
    alias: string;
    motivation: string;
  };
}

export default function ValidatorProfile(props: Props) {
  const { data } = props;
  const { validatorId, voteCount, alias, motivation } = data;

  const router = useRouter();

  async function castValidatorVote() {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    /* next, create the item */
    let contract = new ethers.Contract(TaarifuAddress, Taarifu.abi, signer);
    let voteAction = await contract.voteForValidator(validatorId, 0);
    await voteAction.wait();
    router.replace(router.asPath);
  }

  return (
    <Card sx={{ m: 2, p: 1, borderRadius: 2 }}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item sm={1} lg={1}>
            <Avatar aria-label="validator" sx={{ bgcolor: "#37474f" }}>
              {alias.substring(0, 1)}
            </Avatar>
          </Grid>
          <Grid item sm={11} lg={11}>
            <Typography gutterBottom variant="h5" component="div">
              {alias}
            </Typography>
            <Typography variant="body1">{motivation}</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ ml: 1 }}>
        <IconButton
          aria-label="delete"
          size="large"
          color="secondary"
          onClick={castValidatorVote}
        >
          <HowToVoteIcon sx={{ color: "#fbc02d" }} />
        </IconButton>
        <Typography variant="button">{voteCount}</Typography>
        <TollIcon sx={{ ml: 3 }} />
        <Typography variant="button" sx={{ mr: 1 }}>
          100000
        </Typography>
      </CardActions>
    </Card>
  );
}
