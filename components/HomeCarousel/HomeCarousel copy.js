// import react
import { useRef, useState } from "react";

// import MUI components
import Box from "@mui/material/Box";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Grid } from "@mui/material";
// import icons
import { CarouselNext, CarouselPrev } from "../../components/Icons/index";

const SwiperBtnNext = (props) => {
  const { isSm } = props;
  return {
    position: "absolute",
    transform: "translateX(10px)",
    zIndex: 2,
    ...(isSm && { display: "none" }),
  };
};

const SwiperBtnPrev = (props) => {
  const { isSm } = props;
  return {
    position: "absolute",
    left: 0,
    transform: "translateX(-15px)",
    zIndex: 2,
    ...(isSm && { display: "none" }),
  };
};

export default function HomeCarousel(props) {
  const { isSm } = props;

  const [current, setCurrent] = useState(0);
  const navigationNewContentPrevRef = useRef(null);
  const navigationNewContentNextRef = useRef(null);

  const images = [
    {
      imgSrc: "https://picsum.photos/1190/420?img=1",
      thumbnailSrc: "https://picsum.photos/1190/420?img=1",
      alt: "image 1",
    },
    {
      imgSrc: "https://picsum.photos/1190/420?img=2",
      thumbnailSrc: "https://picsum.photos/1190/420?img=2",
      alt: "image 1",
    },
    {
      imgSrc: "https://picsum.photos/1190/420?img=3",
      thumbnailSrc: "https://picsum.photos/1190/420?img=3",
      alt: "image 1",
    },
    {
      imgSrc: "https://picsum.photos/1190/420?img=4",
      thumbnailSrc: "https://picsum.photos/1190/420?img=4",
      alt: "image 1",
    },
    {
      imgSrc: "https://picsum.photos/1190/420?img=5",
      thumbnailSrc: "https://picsum.photos/1190/420?img=5",
      alt: "image 1",
    },
    {
      imgSrc: "https://picsum.photos/1190/420?img=6",
      thumbnailSrc: "https://picsum.photos/1190/420?img=6",
      alt: "image 1",
    },
    {
      imgSrc: "https://picsum.photos/1190/420?img=7",
      thumbnailSrc: "https://picsum.photos/1190/420?img=7",
      alt: "image 1",
    },
  ];

  const handleChangeSlideClick = (isNext) => {
    let newCurrent = null;
    if (isNext) {
      newCurrent = current < images.length - 1 ? current + 1 : current;
    } else {
      newCurrent = current > 0 ? current - 1 : current;
    }
    setCurrent(newCurrent);
  };

  const handleClickThumbnail = (e) => {
    const id = Number(e.currentTarget.id);
    setCurrent(id);
    e.stopPropagation();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={0.5}></Grid>
        <Grid item xs={11}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={9}>
                <Box
                  sx={{
                    height: isSm ? "280px" : "420px",
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <div style={{ height: "80%", width: "10%" }}>
                    {images.map((image, idx) => (
                      <img
                        style={{
                          ...(idx !== current && { display: "none" }),
                          objectFit: "cover",
                          width: `100%`,
                          position: "absolute",
                          height: "100%",
                          left: 0,
                          borderRadius: "16px",
                        }}
                        alt={image.alt}
                        key={idx}
                        src={image.imgSrc}
                      />
                    ))}
                  </div>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box
                  sx={{
                    position: "absolute",
                    width: isSm ? "30%" : "30%",
                    minWidth: isSm ? "200px" : "200px",

                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    right: { sm: 5, xs: 0 },
                  }}
                >
                  <Swiper
                    direction="vertical"
                    navigation={{
                      prevEl: navigationNewContentPrevRef.current,
                      nextEl: navigationNewContentNextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                      swiper.params.navigation.prevEl =
                        navigationNewContentPrevRef.current;
                      swiper.params.navigation.nextEl =
                        navigationNewContentNextRef.current;
                    }}
                    autoplay={{
                      delay: 1500,
                    }}
                    watchSlidesProgress={true}
                    slidesPerView={3}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                  >
                    {images.map((image, idx) => (
                      <SwiperSlide
                        onClick={handleClickThumbnail}
                        id={idx}
                        key={idx}
                      >
                        <img
                          style={{
                            width: 310,
                            height: 130,
                            marginLeft: "30px",
                            borderRadius: "16px",
                          }}
                          alt={image.alt}
                          key={idx}
                          src={image.imgSrc}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div
                    onClick={() => {
                      handleChangeSlideClick(false);
                    }}
                    style={{
                      ...SwiperBtnPrev({ isSm }),
                    }}
                    ref={navigationNewContentPrevRef}
                  >
                    <CarouselPrev />
                  </div>
                  <div
                    onClick={() => {
                      handleChangeSlideClick(true);
                    }}
                    style={{
                      ...SwiperBtnNext({ isSm }),
                    }}
                    ref={navigationNewContentNextRef}
                  >
                    <CarouselNext />
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={0.5}></Grid>
      </Grid>
    </Box>
  );
}
