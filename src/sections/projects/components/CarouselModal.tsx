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
import type { ProjectImagesDataType } from "@/types.ts";
import projectImagesData from "../projectImagesData.json";
import Image from "next/image";

const projectImages: ProjectImagesDataType = projectImagesData;

export default function CarouselModal({
  project,
}: {
  project: keyof ProjectImagesDataType;
}) {
  const [open, setOpen] = React.useState(false);
  const OPTIONS: EmblaOptionsType = {};

  const Images = projectImages[project].map((url) => (
    <Image
      src={url}
      alt={project}
      width={400}
      height={400}
      style={{ objectFit: "contain" }}
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
            background: (theme) => theme.palette.paper.main,
          },
        }}
      >
        <DialogContent>
          <ImageCarousel
            slides={Images}
            options={OPTIONS}
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
