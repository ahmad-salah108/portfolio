import { JobCardType } from "@/types";
import { alpha, Chip, Stack, Typography } from "@mui/material";

function JobCard({ data }: { data: JobCardType }) {
  return (
    <Stack
      component={"article"}
      sx={{
        columnGap: "3rem",
        flexDirection: { sm: "row" },
        padding: "2rem",
      }}
    >
      <Typography color="offWhite" sx={{ textWrap: "nowrap" }}>
        {data.date}
      </Typography>
      <Stack>
        <Typography sx={{ fontWeight: "700" }}>{data.job}</Typography>
        <Typography color="offWhite" sx={{ marginBottom: "1rem" }}>
          {data.company}
        </Typography>
        <ul className="work-list" style={{ marginBottom: "1rem" }}>
          {data.description.map((d, i) => (
            <li key={i} style={{ marginBottom: "10px" }}>
              <Typography color="offWhite">{d}</Typography>
            </li>
          ))}
        </ul>
        <Stack direction={"row"} sx={{ gap: "7px", flexWrap: "wrap" }}>
          {data.languages.map((l) => (
            <Chip
              key={l}
              variant="outlined"
              color="primary"
              label={l}
              sx={{
                width: "fit-content",
                fontWeight: "600",
                border: "none",
                background: (theme) => alpha(theme.palette.primary.main, 0.14),
              }}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default JobCard;
