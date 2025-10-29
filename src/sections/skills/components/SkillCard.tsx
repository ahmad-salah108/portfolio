import { SkillCardType } from "@/types";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function SkillCard(props: SkillCardType) {
  return (
    <Box className="box" sx={{marginInline: 'auto'}}>
      <div className="hover-point"></div>
      <div className="hover-point"></div>
      <div className="hover-point"></div>
      <div className="hover-point"></div>
      <div className="hover-point"></div>
      <div className="hover-point"></div>
      <div className="hover-point"></div>
      <div className="hover-point"></div>
      <Stack className="box-contents center" sx={{gap: '15px'}}>
        <Image src={props.src} alt={props.alt} width={40} height={40}/>
        <code style={{fontSize: '0.9rem'}}>{props.title}</code>
      </Stack>
    </Box>
  );
}
