import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Thumbnail from "../../components/Thumbnail/Thumbnail";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import PlaylistRanking from "../PlaylistRanking/PlaylistRanking";

import { Grid } from "@mui/material";

import {
  RightArrow,
  CarouselPrev,
  CarouselNext,
} from "../../components/Icons/index";
import {
  SCREEN_BREAKPOINTS,
  HEADER_HEIGHT,
  DRAWER_WIDTH,
  TEXT_STYLE,
  FONT_FAMILY,
  COLORS,
} from "../../utils/constants";

const fakeData = [
  {
    title: "Sách nói chất lượng",
    categories: [
      "Tất cả",
      "Sắp phát hành",
      "Tâm linh",
      "Con cái",
      "Kỹ năng",
      "Doanh nhân",
      "Thành công",
      "Hạnh phúc",
      "Lịch sử",
    ],
    items: [
      { id: 1, avtSrc: "https://picsum.photos/201/201?img=6" },
      { id: 2, avtSrc: "https://picsum.photos/201/201?img=7" },
      { id: 3, avtSrc: "https://picsum.photos/201/201?img=8" },
      { id: 4, avtSrc: "https://picsum.photos/201/201?img=9" },
      { id: 5, avtSrc: "https://picsum.photos/201/201?img=10" },
      { id: 6, avtSrc: "https://picsum.photos/201/201?img=10" },
      { id: 7, avtSrc: "https://picsum.photos/201/201?img=10" },
    ],
  },
  {
    title: "Truyện nói hấp dẫn",
    categories: [
      "Tất cả",
      "Kinh điển Việt Nam",
      "Kinh điển quốc tế",
      "Ngôn tình",
      "Văn học QT hiện đại",
      "Văn học VN hiện đại",
      "Thành công",
      "Trinh thám",
    ],
    items: [
      { id: 1, avtSrc: "https://picsum.photos/201/201?img=11" },
      { id: 2, avtSrc: "https://picsum.photos/201/201?img=12" },
      { id: 3, avtSrc: "https://picsum.photos/201/201?img=13" },
      { id: 4, avtSrc: "https://picsum.photos/201/201?img=14" },
      { id: 5, avtSrc: "https://picsum.photos/201/201?img=15" },
      { id: 6, avtSrc: "https://picsum.photos/201/201?img=10" },
      { id: 7, avtSrc: "https://picsum.photos/201/201?img=10" },
    ],
  },
  {
    title: "Podcast đặc sắc",
    categories: [
      "Tất cả",
      "Tin tức",
      "Văn hóa",
      "Giải trí",
      "Kiến thức",
      "Phân loại",
      "Kinh dị",
      "Ngủ ngon",
      "Thiền-tĩnh tâm",
      "Tâm sự",
    ],
    items: [
      { id: 1, avtSrc: "https://picsum.photos/201/201?img=16" },
      { id: 2, avtSrc: "https://picsum.photos/201/201?img=17" },
      { id: 3, avtSrc: "https://picsum.photos/201/201?img=18" },
      { id: 4, avtSrc: "https://picsum.photos/201/201?img=19" },
      { id: 5, avtSrc: "https://picsum.photos/201/201?img=20" },
      { id: 6, avtSrc: "https://picsum.photos/201/201?img=10" },
      { id: 7, avtSrc: "https://picsum.photos/201/201?img=10" },
    ],
  },
  {
    title: "Sách tóm tắt tinh gọn",
    items: [
      { id: 1, avtSrc: "https://picsum.photos/201/201?img=21" },
      { id: 2, avtSrc: "https://picsum.photos/201/201?img=22" },
      { id: 3, avtSrc: "https://picsum.photos/201/201?img=23" },
      { id: 4, avtSrc: "https://picsum.photos/201/201?img=24" },
      { id: 5, avtSrc: "https://picsum.photos/201/201?img=25" },
      { id: 6, avtSrc: "https://picsum.photos/201/201?img=10" },
      { id: 7, avtSrc: "https://picsum.photos/201/201?img=10" },
    ],
  },
];

const flexCenterStyle = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
};

const SwiperBtnNext = (props) => ({
  position: "absolute",
  right: 0,
  width: "24px",
  height: "24px",
  top: "50%",
  transform: "translate(-40px, 70%)",
  zIndex: 2,
  ...(windowSize.width <= SCREEN_BREAKPOINTS.sm && { display: "none" }),
});

const SwiperBtnPrev = (props) => ({
  position: "absolute",
  left: 0,
  width: "24px",
  height: "24px",
  top: "50%",
  transform: "translate(28px, 70%)",
  zIndex: 2,
  ...(windowSize.width <= SCREEN_BREAKPOINTS.sm && { display: "none" }),
});

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ open }) => ({
    flexGrow: 1,

    width: "100%",
    marginLeft: 0,
  })
);

const Title = (content) => (
  <Box
    sx={{
      ...flexCenterStyle,
      marginBottom: "24px",
    }}
  >
    <Typography
      sx={{
        ...TEXT_STYLE.h2,
        fontFamily: FONT_FAMILY,
        color: COLORS.purple,
      }}
    >
      {content}
    </Typography>
    <Box sx={{ marginLeft: "11.3px", marginTop: "6px" }}>
      <RightArrow />
    </Box>
  </Box>
);

export default function HomeContent({ open, windowSize, categories, books }) {
  const navigationNewContentPrevRef = useRef(null);
  const navigationNewContentNextRef = useRef(null);

  // console.log(categories, books);

  let num_items_per_line = windowSize.width > SCREEN_BREAKPOINTS.sm ? 5 : 3;

  return (
    <Main open={open}>
      <HomeCarousel windowWidth={windowSize.width} />
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <div className="mt-10">
            {categories.map((category, key) => (
              <Box
                sx={{
                  margin: "0 48px 56px 48px",
                }}
                key={key}
              >
                {Title(category.name)}
                <Swiper
                  slidesPerView={num_items_per_line}
                  spaceBetween={20}
                  style={{ marginTop: 35 }}
                >
                  {books.map((book, index) =>
                    book.categoryId._id === category._id ? (
                      <SwiperSlide key={index}>
                        <Link href={`/book/${book.slug}`}>
                          <a>
                            <Thumbnail
                              style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 3,
                              }}
                              avtSrc={book.thumbnail}
                              alt={`images ${book.slug}`}
                            />
                          </a>
                        </Link>
                      </SwiperSlide>
                    ) : (
                      ""
                    )
                  )}
                </Swiper>
              </Box>
            ))}
          </div>
        </Grid>
        <Grid item xs={3}>
          <PlaylistRanking books={books} />
        </Grid>
      </Grid>
    </Main>
  );
}
