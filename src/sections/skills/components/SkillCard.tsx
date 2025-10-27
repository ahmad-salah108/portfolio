import { SkillCardType } from "@/types";
import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function SkillCard(props: SkillCardType) {
  return (
    <div className="box" style={{marginInline: 'auto'}}>
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
    </div>
  );
}
