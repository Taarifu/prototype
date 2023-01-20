import React, { useState, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { TaarifuAddress } from "../../../../config.js";
import Taarifu from "../../../../lib/Taarifu.json";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function FormDialog(props: IProps) {
  const [content, setContent] = useState("");

  const { open, setOpen } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
  };

  async function postNewsItem() {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    /* next, create the item */
    let contract = new ethers.Contract(TaarifuAddress, Taarifu.abi, signer);
    let postAction = await contract.postNews(content);
    await postAction.wait();
    handleClose();
    router.replace(router.asPath);
  }

  return (
    <div>
      <Dialog
        maxWidth="sm"
        fullWidth
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{`What's happening?`}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Say it as you see it"
            id="report"
            fullWidth
            multiline
            rows={4}
            variant="filled"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={postNewsItem}>Post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
