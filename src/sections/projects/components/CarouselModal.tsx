import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import ImageCarousel from "./ImageCarousel";
import { EmblaOptionsType } from "embla-carousel";
import type { ProjectDataType } from "@/types.ts";
import Image from "next/image";
import { Box } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function CarouselModal({
  project,
}: {
  project: ProjectDataType;
}) {
  const [open, setOpen] = React.useState(false);
  const OPTIONS: EmblaOptionsType = {};

  const Images = project.images.map((url) => (
    <Image
      src={url}
      alt={`project image`}
      width={600}
      height={400}
      sizes="(max-width: 768px) 300px, 600px"
      loading="lazy"
      onClick={()=>window.open(url, "_blank")}
      style={{
        objectFit: "contain",
        width: "100%",
        maxWidth: "600px",
        margin: "auto",
        borderRadius: "4px",
        cursor: 'pointer'
      }}
    />
  ));
  const Thumbnails = project.images.map((url) => (
    <Image
      src={url}
      alt={`project thumbnail`}
      width={100}
      height={100}
      loading="lazy"
      style={{
        objectFit: "contain",
        borderRadius: "4px",
      }}
    />
  ));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        id="project-gallery-btn"
        variant="contained"
        color="btnBlackTransparent"
        onClick={handleClickOpen}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "2",
          transition: "all 0.3s",
          opacity: "0",
          backdropFilter: "blur(3px)",
        }}
      >
        <CollectionsOutlinedIcon /> &nbsp; Open Gallery
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiPaper-root": {
            background: (theme) => theme.palette.paperTransparent.main,
            backdropFilter: "blur(20px)",
            maxWidth: "1000px",
            height: {
              xs: "586px",
              sm: "636px",
            },
            overflow: "hidden",
          },
        }}
      >
        <Button sx={{width: 'fit-content', margin: '10px 10px 0 auto'}} onClick={handleClose}>
          <CloseIcon/>
        </Button>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageCarousel
            slides={Images}
            options={OPTIONS}
            thumbnails={Thumbnails}
          />
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
    </React.Fragment>
  );
}
