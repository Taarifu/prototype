import React, { useState } from "react";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { TaarifuAddress } from "../../../config.js";
import Taarifu from "../../../lib/Taarifu.json";

export default function BecomeValidator() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const [alias, setAlias] = useState("");
  const [motivation, setMotivation] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const router = useRouter();

  async function submitRequest() {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    /* next, create the item */
    let contract = new ethers.Contract(TaarifuAddress, Taarifu.abi, signer);
    let postAction = await contract.becomeValidator(alias, motivation, 0);
    await postAction.wait();
    handleClose();
    router.reload();
  }

  return (
    <div>
      <Box sx={{ m: 1 }}>
        <Button
          variant="contained"
          fullWidth
          onClick={handleClickOpen}
          color="secondary"
          sx={{ borderRadius: 2, textTransform: "none" }}
        >
          Become a validator
        </Button>
      </Box>
      <Dialog
        maxWidth="sm"
        fullWidth
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Become a Validator</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To become a validator you must gain atleast 5% of the members votes,
            and you must have atleast 1000 community points to be eligible for
            consideration.
          </DialogContentText>
          <br />
          <TextField
            autoFocus
            margin="dense"
            label="Alias"
            id="report"
            fullWidth
            variant="filled"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="About you"
            id="report"
            fullWidth
            multiline
            rows={4}
            variant="filled"
            value={motivation}
            onChange={(e) => setMotivation(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitRequest}>Submit Request</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
