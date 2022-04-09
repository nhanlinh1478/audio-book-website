import { useState } from "react";
import { useRouter } from "next/router";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Layout from "../../components/layout/Layout";
import ReactAudioPlayer from "react-audio-player";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import {
  TEXT_STYLE,
  FONT_FAMILY,
  COLORS,
} from "../../utils/constants";

// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import RotateLeftOutlinedIcon from '@mui/icons-material/RotateLeftOutlined';
// import RotateRightOutlinedIcon from '@mui/icons-material/RotateRightOutlined';

const UnitItem = styled("div")((props) => ({
  backgroundColor: props.active ? "rgba(196, 196, 196, 0.3)" : "",
  display: "flex",
  padding: "0px 12px",
  alignItems: "center",
  width: "100%",
  height: "56px",
  borderRadius: "6px",
  cursor: "pointer",
  minWidth: "266px",
  ":hover": {
    backgroundColor: "rgba(196, 196, 196, 0.3)",
  },
}));

const bookList = [
  { id: 1, avtSrc: "https://picsum.photos/201/201?img=16" },
  { id: 2, avtSrc: "https://picsum.photos/201/201?img=17" },
  { id: 3, avtSrc: "https://picsum.photos/201/201?img=18" },
  { id: 4, avtSrc: "https://picsum.photos/201/201?img=19" },
  { id: 5, avtSrc: "https://picsum.photos/201/201?img=20" },
  { id: 6, avtSrc: "https://picsum.photos/201/201?img=1" },
  { id: 7, avtSrc: "https://picsum.photos/201/201?img=2" },
  { id: 8, avtSrc: "https://picsum.photos/201/201?img=3" },
  { id: 9, avtSrc: "https://picsum.photos/201/201?img=4" },
  { id: 10, avtSrc: "https://picsum.photos/201/201?img=5" },
  { id: 11, avtSrc: "https://picsum.photos/201/201?img=6" },
  { id: 12, avtSrc: "https://picsum.photos/201/201?img=7" },
  { id: 13, avtSrc: "https://picsum.photos/201/201?img=8" },
  { id: 14, avtSrc: "https://picsum.photos/201/201?img=9" },
  { id: 15, avtSrc: "https://picsum.photos/201/201?img=10" },
];

const Index = () => {
  const router = useRouter();
  return (
    <>
      <Container sx={{ marginBottom: 4 }} component="main" maxWidth="lg">
        <Typography
          sx={{
            ...TEXT_STYLE.h2,
            fontFamily: FONT_FAMILY,
            color: COLORS.purple,
            marginTop: 12
          }}
        >
          Sách đã lưu
        </Typography>
        <Box sx={{ height: "auto", width: "100%", padding: "24px 0px" }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
              bookList.map(item => <Grid key={item.id} item xs="auto">
                <Box onClick={() => router.push("/book/name")} sx={{ width: 200, height: 200 }}>
                  <Thumbnail
                    style={{ width: "100%", height: "100%", borderRadius: 3, cursor: "pointer" }}
                    avtSrc={item.avtSrc}
                    alt={`images ${item.id}`}
                  />
                </Box>
              </Grid>)
            }
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default Index;

Index.layout = Layout;
