import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

import SideNav from "@/src/components/layout/SideNav";
import ValidatorList from "@/src/components/validators/ValidatorList";
import ValidatorsBanner from "@/src/components/validators/ValidatorsBanner";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

import { TaarifuAddress } from "../config.js";
import Taarifu from "../artifacts/contracts/Taarifu.sol/Taarifu.json";

export default function ValidatorsPage() {
  const [validators, setValidators] = useState<any>([]);
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
    const data = await contract.fetchAllValidators();

    /*
     *  map over validators returned from smart contract and format
     *  them as well as fetch their metadata
     */
    const allvalidators: any[] = await Promise.all(
      data.map(async (i: any) => {
        let item = {
          validatorId: i.validatorId.toNumber(),
          memberAddress: i.memberAddress,
          voteCount: i.voteCount.toNumber(),
          alias: i._alias,
          motivation: i.motivation,
        };
        return item;
      })
    );
    setValidators(allvalidators);
    setLoading(false);
    setLoadingState("loaded");
  }

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item lg={3}>
          <ValidatorsBanner />
          <SideNav />
        </Grid>
        <Grid item lg={6}>
          <Box sx={{ m: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              <AssignmentIndIcon sx={{ mr: 1 }} fontSize="large" />
              Validators
            </Typography>
          </Box>
          {loading ? <LinearProgress sx={{ ml: 2, mr: 2 }} /> : null}
          <ValidatorList validators={validators} />
          {loadingState === "loaded" && !validators.length ? (
            <Box sx={{ m: 3 }}>
              <Typography variant="h6">No validators yet</Typography>
            </Box>
          ) : null}
        </Grid>
        <Grid item lg={3}></Grid>
      </Grid>
    </Box>
  );
}
