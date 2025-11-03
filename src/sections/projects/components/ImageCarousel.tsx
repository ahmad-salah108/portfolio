import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ImageCarouselThumbButtons } from "./ImageCarouselThumbButtons";
import { Box } from "@mui/material";

type PropType = {
  slides: React.ReactNode[];
  thumbnails: React.ReactNode[];
  options?: EmblaOptionsType;
};

const ImageCarousel: React.FC<PropType> = (props) => {
  const { slides, options, thumbnails } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  // const scrollPrev = useCallback(() => {
  //   if (emblaMainApi) emblaMainApi.scrollPrev();
  // }, [emblaMainApi]);

  // const scrollNext = useCallback(() => {
  //   if (emblaMainApi) emblaMainApi.scrollNext();
  // }, [emblaMainApi]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {slides.map((el, index) => (
            <Box key={index} className="embla__slide" sx={{height: {xs: '350px', sm: "400px"}}}>{el}</Box>
          ))}
        </div>
      </div>

      <div className="embla-thumbs" >
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {thumbnails.map((image, index) => (
              <ImageCarouselThumbButtons
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                image={image}
              />
            ))}
          </div>
        </div>
      </div>

      {/* <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button> */}
    </div>
  );
};

export default ImageCarousel;
