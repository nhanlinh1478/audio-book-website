import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import RotateLeftOutlinedIcon from '@mui/icons-material/RotateLeftOutlined';
// import RotateRightOutlinedIcon from '@mui/icons-material/RotateRightOutlined';
import Layout from "../../components/layout/Layout";
import ReactAudioPlayer from "react-audio-player";
import { useState } from "react";

const UnitItem = styled("div")((props) => ({
  backgroundColor: props.active ? "rgba(196, 196, 196, 0.3)" : "",
  display: "flex",
  padding: "0px 12px",
  alignItems: "center",
  width: "90%",
  height: "56px",
  borderRadius: "6px",
  cursor: "pointer",
  minWidth: "266px",
  ":hover": {
    backgroundColor: "rgba(196, 196, 196, 0.3)",
  },
}));

const unitList = [
  "1. Tiếng vọng nơi phòng ngủ khách sạn",
  "2. 14 điểm đến đang sợ ở Thái Lan",
  "3. Những tấm ảnh chứa linh hồn",
  "4. Bạn có dám bước chân vào những tòa lâu đài này",
  "5. Đừng đi lung tung ở Bắc Kinh",
];

const Index = () => {
  const [activeItem, setActiveItem] = useState("");
  return (
    <>
      <Container sx={{ marginBottom: 4 }} component="main" maxWidth="lg">
        <Box sx={{ height: "auto", width: "100%", padding: "38px 0px" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              <Grid item xs="auto">
                <Box sx={{ width: 312, height: "auto" }}>
                  <Avatar
                    variant="square"
                    sx={{ width: 312, height: 312, borderRadius: 6 }}
                    src="/images/book.jpg"
                  />
                  <div className="pb-4" />
                  <p className="text-xl font-medium pb-4 leading-8">
                    Top Những Địa Danh Ma Ám Không Thể Bỏ Qua
                  </p>
                  <p className="text-lg pb-4">Tác giả: Sưu tầm</p>
                  <p className="text-lg pb-4">Thời lượng: 2h</p>
                  <p className="text-lg pb-4">Kênh: voiz</p>
                </Box>
              </Grid>
              <Grid item xs>
                <Box>
                  <p className="text-xl font-medium pb-4 text-blue-600/100">
                    Lời tựa
                  </p>
                  <p className="text-lg pb-4">
                    Khám phá những địa danh bí ẩn, nhiều ma quỷ nhất trên Thế
                    giới!
                  </p>
                  <Button size="large" variant="contained">
                    Phát tất cả
                  </Button>
                  <div className="pb-8" />
                  {unitList.map((item, key) => (
                    <UnitItem
                      onClick={() => setActiveItem(key)}
                      key={key}
                      active={activeItem == key ? 1 : 0}
                    >
                      <p className="text-lg">{item}</p>
                    </UnitItem>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <div className="pb-8" />
        <Box
          sx={{
            bgcolor: "#3f51b5",
            height: "auto",
            width: "100%",
            padding: "38px",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs>
              <div className="w-full h-full flex justify-center items-center">
                {/* <SkipPreviousIcon sx={{ fontSize: 60, color: 'white' }} />
                                <div className='w-3'/>
                                <RotateLeftOutlinedIcon sx={{ fontSize: 48, color: 'white' }} />
                                <div className='w-3'/>
                                <PlayCircleOutlineIcon sx={{ fontSize: 85, color: 'white' }} />
                                <div className='w-3'/>
                                <RotateRightOutlinedIcon sx={{ fontSize: 48, color: 'white' }} />
                                <div className='w-3'/>
                                <SkipNextIcon sx={{ fontSize: 60, color: 'white' }} /> */}
                <ReactAudioPlayer autoPlay controls />
              </div>
            </Grid>
            <Grid item xs="auto">
              <Avatar sx={{ width: 136, height: 136 }} src="/images/book.jpg" />
            </Grid>
            <Grid item xs>
              <div className="w-full h-full flex justify-center text-xl font-semibold items-center text-white">
                Top những địa danh ma ám không thể bỏ qua
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default Index;

Index.layout = Layout;
