import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import SkillCard from "./components/SkillCard";

export type SkillCardType = {
  title: string,
  src: string,
  alt: string
}

const skills: SkillCardType[] = [
  {
    title: 'HTML5',
    src: '/icons/html-icon.svg',
    alt: 'HTML5 Icon'
  },
  {
    title: 'CSS3',
    src: '/icons/css-icon.svg',
    alt: 'CSS3 Icon'
  },
  {
    title: 'JavaScript',
    src: '/icons/javascript-icon.svg',
    alt: 'JavaScript Icon'
  },
  {
    title: 'React',
    src: '/icons/react-icon.svg',
    alt: 'React Icon'
  },
  {
    title: 'Redux Toolkit',
    src: '/icons/redux-icon.svg',
    alt: 'Redux Toolkit Icon'
  },
  {
    title: 'Next',
    src: '/icons/next-icon.svg',
    alt: 'Next Icon'
  },
  {
    title: 'Typescript',
    src: '/icons/typescript-icon.svg',
    alt: 'Typescript Icon'
  },
  {
    title: 'Material UI',
    src: '/icons/mui-icon.svg',
    alt: 'Material UI Icon'
  },
  {
    title: 'Tailwind CSS',
    src: '/icons/tailwind-icon.svg',
    alt: 'Tailwind CSS Icon'
  },
  {
    title: 'Bootstrap5',
    src: '/icons/bootstrap-icon.svg',
    alt: 'Bootstrap5 Icon'
  },
  {
    title: 'jQuery',
    src: '/icons/jquery-icon.svg',
    alt: 'jQuery Icon'
  },
  {
    title: 'Sass',
    src: '/icons/sass-icon.svg',
    alt: 'Sass Icon'
  },
  {
    title: 'Git',
    src: '/icons/git-icon.svg',
    alt: 'Git Icon'
  },
  {
    title: 'GitHub',
    src: '/icons/github-icon.svg',
    alt: 'GitHub Icon'
  },
]

export default function Skills() {
  return (
    <Box id='skills' className="section py-100">
      <Stack sx={{width: '100%', gap: '7rem'}}>
        <Typography
          variant="h2"
          className="section-heading text-gold"
          sx={{ fontWeight: "500", letterSpacing: "1rem", textAlign: 'center', marginInline: 'auto' }}
        >
          Skills
        </Typography>
        {/* <Stack direction={'row'} sx={{width: '100%', columnGap: '100px', rowGap: '50px', flexWrap: 'wrap'}}> */}
        <Grid container sx={{rowGap: '30px'}}>
          {
            skills.map(s => (
              <Grid key={s.title} item xs={12} sm={4} md={3} lg={2.4} >
                <SkillCard title={s.title} src={s.src} alt={s.alt}/>
              </Grid>
            ))
          }
          </Grid>
        {/* </Stack> */}
      </Stack>
    </Box>
  );
}
