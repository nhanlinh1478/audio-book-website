// import react
import { useEffect, useState } from "react";

// import next link
import Link from "next/link";
import {
  Divider,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
// import swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import MUI component
import { Box, Typography, Chip, colors } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CalendarViewDayOutlinedIcon from "@mui/icons-material/CalendarViewDayOutlined";
import StarIcon from "@mui/icons-material/Star";

// import icons
import { AudioBook } from "../Icons/index";

// import utils
import { flexStyle } from "../../utils/flexStyle";
import { TEXT_STYLE, COLORS, SCREEN_BREAKPOINTS } from "../../utils/constants";
import useWindowSize from "../../utils/useWindowSize";

// // import service
// import API from '../../services/api';

const rankingType = [
  {
    id: "sachnoi",
    name: "Sách nói",
  },
  {
    id: "podcast",
    name: "Podcast",
  },
];

export default function PlaylistRanking() {
  // const api = new API();

  const windowSize = useWindowSize();
  const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;
  const [playlists, setPlaylists] = useState([
    {
      id: 1,
      avtSrc:
        "http://res.cloudinary.com/dacnpm-02-18/image/upload/v1649747227/stedjd6dvav1aoesfzns.jpg",
    },
    {
      id: 2,
      avtSrc:
        "http://res.cloudinary.com/dacnpm-02-18/image/upload/v1649747227/stedjd6dvav1aoesfzns.jpg",
    },
    { id: 3, avtSrc: "https://picsum.photos/201/201?img=1" },
    { id: 4, avtSrc: "https://picsum.photos/201/201?img=1" },
    { id: 5, avtSrc: "https://picsum.photos/201/201?img=1" },
    { id: 6, avtSrc: "https://picsum.photos/201/201?img=1" },
  ]);
  const [tab, setTab] = useState("audio_book");
  const [type, setType] = useState("sachnoi");

  const handleTabClick = (e) => {
    const id = e.currentTarget.id;
    setTab(id);
    e.stopPropagation();
  };

  const handleClickType = (e) => {
    const id = e.currentTarget.id;
    setType(id);
    e.stopPropagation();
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          mixBlendMode: "normal",
          ...flexStyle("center", "center"),
          position: "relative",
          mt: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "24px",
            //lineHeight: "72px",
            color: COLORS.purple,
            zIndex: 2,
            mt: 2,
          }}
        >
          Bảng xếp hạng
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          ...flexStyle("center", "flex-start"),
        }}
      >
        <Box
          sx={{
            // mt: isSm ? '32px' : '36px',
            mt: "10px",
            width: isSm ? "90%" : "40%",
            ...(!isSm && { minWidth: "300px" }),
          }}
        >
          <Box
            sx={{
              ...flexStyle("flex-start", "center"),
              ...flexStyle("center", "center"),
              columnGap: "32px",
              //borderBottom: `1px solid ${COLORS.bg2}`,
              // pb: '16px',
              boxSizing: "border-box",
            }}
          >
            {rankingType.map((i) => (
              <Chip
                id={i.id}
                key={i.id}
                label={i.name}
                sx={{
                  bgcolor: i.id === type ? COLORS.purple : "#C4C4C4",
                  color: COLORS.white,
                  ...TEXT_STYLE.title1,
                  ":hover": {
                    bgcolor: COLORS.purple,
                  },
                }}
                onClick={handleClickType}
              />
            ))}
          </Box>
          {playlists.map((i) => (
            <Box>
              <Divider sx={{ mt: 3 }} />
              <Card sx={{ display: "flex", mt: 2, objectFit: "cover" }}>
                <CardActionArea>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      mt: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ width: 100, objectFit: "cover" }}
                        image="https://res.cloudinary.com/dacnpm-02-18/image/upload/v1649748701/yhexq0svrmzjosshrbrr.jpg"
                        alt="Live from space album cover"
                      />
                    </Box>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        <AccountCircleOutlinedIcon sx={{ mr: 1 }} />
                        test
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        <CalendarViewDayOutlinedIcon sx={{ mr: 1 }} />
                        circle
                      </Typography>
                    </CardContent>
                  </Box>
                </CardActionArea>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
