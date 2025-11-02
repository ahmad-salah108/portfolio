import { Box } from "@mui/material";
import React from "react";

type PropType = {
  selected: boolean;
  index: number;
  image: React.ReactNode;
  onClick: () => void;
};

export const ImageCarouselThumbButtons: React.FC<PropType> = (props) => {
  const { selected, index, onClick, image } = props;

  return (
    <Box
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        <Box
        className="embla-thumbs__slide__number__box"
          sx={{
            position: "relative",
            borderRadius: '4px',
            transition: 'all 0.1s',
            "&::after": {
              content: "''",
              position: "absolute",
              top: "0",
              left: "0",
              background: "rgb(0, 0, 0, 0.3)",
              width: "100%",
              height: "100%",
              borderRadius: '4px'
            },
          }}
        >
          {image}
        </Box>
      </button>
    </Box>
  );
};
