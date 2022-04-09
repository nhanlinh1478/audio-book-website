import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardMedia,
  CardActionArea,
  Typography,
  CardContent,
  Button,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CalendarViewDayOutlinedIcon from "@mui/icons-material/CalendarViewDayOutlined";
//
import Layout from "../../components/layout/Layout";
//

function Search({ authors }) {
  console.log("authors:", authors);
  return (
    <Box sx={{ flexGrow: 1, mt: 3, mr: 3, ml: 3 }} container>
      <Grid container spacing={2}>
        <Grid item xs={8} container>
          <Typography variant="h5">Kết quả tìm kiếm</Typography>
          <Grid container spacing={4}>
            <Grid item xs={2.5}>
              <Button
                variant="outlined"
                sx={{ padding: "5px 20px", borderRadius: "20px", mt: 1 }}
              >
                Playlist
              </Button>
            </Grid>
            <Grid item xs={2.5}>
              <Button
                variant="outlined"
                sx={{ padding: "5px 20px", borderRadius: "20px", mt: 1 }}
              >
                Audio
              </Button>
            </Grid>
            <Grid item xs={2.5}>
              <Button
                variant="outlined"
                sx={{ padding: "5px 20px", borderRadius: "20px", mt: 1 }}
              >
                Author
              </Button>
            </Grid>
            <Grid item xs={2.5}>
              <Button
                variant="outlined"
                sx={{ padding: "5px 20px", borderRadius: "20px", mt: 1 }}
              >
                Chanel
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} alignItems="center">
          <Typography variant="h5">Bảng xếp hạng</Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                sx={{ padding: "5px 20px", borderRadius: "20px", mt: 1 }}
              >
                Sách nói
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                sx={{ padding: "5px 20px", borderRadius: "20px", mt: 1 }}
              >
                Podcast
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8} container>
          {authors.map((author) => (
            <Grid item xs={4} sm={3} md={3} key={author} sx={{ mt: 3 }}>
              <Card sx={{ maxWidth: 170, maxHeight: 170, borderRadius: 2 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://picsum.photos/200"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {author}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={4} sx={{ mt: 3 }}>
          <Card sx={{ display: "flex" }}>
            <CardActionArea>
              <Box sx={{ display: "flex", flexDirection: "row", mt: 1 }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 100 }}
                    image="https://picsum.photos/200"
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
        </Grid>
      </Grid>
    </Box>
  );
}

export default Search;
Search.layout = Layout;
export async function getServerSideProps(ctx) {
  const keyword = ctx.query.keyword;
  const authors = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5"];
  return {
    props: {
      authors,
    },
  };
}
