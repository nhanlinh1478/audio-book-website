// import react
import { useRef, useState, useEffect } from "react";

// import next link
import Link from "next/link";

// import MUI components
import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";

// import swiper
import SwiperCore, { Navigation } from "swiper";
import {
  Swiper,
  SwiperSlide,
} from "../../../node_modules/swiper/react/swiper-react.js";
const Title = (props) => {
    const { isSm, content } = props
    return (
        < Box sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: '24px'
        }}>
            <Typography sx={{
                ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h2),
                fontFamily: FONT_FAMILY,
                color: COLORS.white
            }}>
                {content}
            </Typography>
            <Box sx={{ marginLeft: '11.3px', marginTop: '6px' }}>
                <RightArrow fill={COLORS.white} />
            </Box>
        </ Box >
    )
}
const isSm = true;

export default function HomeContent() {
  <Box
    sx={{
      m: isSm ? "40px 20px" : "56px 48px",
    }}
  >
    {<Title content="Gợi ý cho người chưa bắt đầu" isSm={isSm} />}
    <Swiper
      slidesPerView={NUMBER_ITEMS_PER_LINE}
      spaceBetween={SPACE_BETWEEN}
      style={{ marginTop: 35, height: `${getPlaylistImgWidth()}px` }}
    >
      {randomPlaylists.map((item) => (
        <SwiperSlide key={item?.id}>
          <Link href={`/playlists/${item?.id}`}>
            <a>
              <Thumbnail
                style={{ width: "100%", height: "100%", borderRadius: 3 }}
                avtSrc={item?.avatar?.thumb_url}
                alt={`images ${item?.id}`}
                promotion={item?.promotion || ""}
              />
            </a>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>;
}
