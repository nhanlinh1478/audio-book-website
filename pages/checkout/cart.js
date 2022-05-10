import React, { Fragment, useState } from "react";

// MUI COMPONENTS
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

// MY COMPONENTS
import CheckoutCartItem from "../../components/checkout/cart/CheckoutCartItem";

// Utils
import getPriceString from "../../utils/getPriceString";
import getTotalPrice from "../../utils/getTotalPrice";

// DUMMY_CART_ITEMS
export const DUMMY_CART_ITEMS = [
  {
    id: "id1",
    title:
      "Inbound Selling - Thay đổi phương thức bán hàng theo mô hình inbound",
    author: "First News",
    duration: "8h19'",
    price: 94800,
    img: "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/1082/thumb_244c5bcff62918013c190479be7f87f3ef16640d.png",
  },
  {
    id: "id2",
    title: "Những Bài Học Đáng Giá Về Xây Dựng Mối Quan Hệ",
    author: "",
    duration: "6h21'",
    price: 63700,
    img: "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/2138/thumb_e4135f0b8f793febae6bc0b0c649f41102e89621.png",
  },
  {
    id: "id3",
    title: "Đánh Thức Năng Lực Vô Hạn",
    author: "Anthony Robbins",
    duration: "5h50'",
    price: 69600,
    img: "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/1056/thumb_6fbbee1efa16923cc85c9dcee53678ba3ca7cc2b.png",
  },
  {
    id: "id4",
    title: "Sống với niềm vui mỗi ngày",
    author: "Carolyn Hobbs",
    duration: "6h05'",
    price: 61000,
    img: "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/1176/thumb_602e8f042f463dc4.png",
  },
  {
    id: "id5",
    title: "Ngay Cả Buffett Cũng Không Hoàn Hảo",
    author: "Vahan Janjigian",
    duration: "6h48'",
    price: 68100,
    img: "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/1120/thumb_1847f7f22ada472f1958de2962d414ca52d5abb5.jpg",
  },
  {
    id: "id6",
    title: "P.S. I Love You - Tái Bút Anh Yêu Em",
    author: "Cecelia Ahern",
    duration: "7h24'",
    price: 74100,
    img: "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/998/thumb_733dc1fdbadf9747959bd513d5e30b17dea16ba1.jpg",
  },
  {
    id: "id7",
    title: "Tâm Hồn Giản Dị",
    author: "Courtney Carver",
    duration: "7h07'",
    price: 88800,
    img: "https://voiz-prod.s3-wewe.cloud.cmctelecom.vn/uploads/avatar/filename/969/thumb_09dd8c2662b96ce1.png",
  },
];

export default function cart() {
  const [items, setItems] = useState(DUMMY_CART_ITEMS);

  const handleClickRemoveCartItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <Container maxWidth="lg">
      <Toolbar />
      <Grid container justifyContent="flex-start">
        <Grid item container direction="column" rowSpacing={3}>
          <Grid item>
            <Typography variant="h5" color="purple">
              GIỎ HÀNG
            </Typography>
          </Grid>
          {items.length === 0 ? (
            <>
              <Grid item sx={{ ml: 2 }}>
                <Typography>
                  Hiện tại không có sản phẩm nào trong giỏ hàng.
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{ textTransform: "none", borderRadius: 6 }}
                >
                  Quay Lại Trang Chủ
                </Button>
              </Grid>
            </>
          ) : (
            <Grid
              item
              container
              justifyContent="space-between"
              columnSpacing={2}
            >
              <Grid item container xs={8} direction="column" rowSpacing={2}>
                {items.map((item, index, array) => {
                  return (
                    <Fragment key={item.id}>
                      <CheckoutCartItem
                        {...item}
                        onClick={handleClickRemoveCartItem}
                      />
                      <Grid item>
                        {index < array.length - 1 && <Divider />}
                      </Grid>
                    </Fragment>
                  );
                })}
              </Grid>

              {/* Tổng tiền */}
              <Grid item container direction="column" xs={4} rowSpacing={2}>
                <Grid item>
                  <Toolbar
                    sx={{
                      background: "#E7EBF0",
                      borderRadius: 2,
                      color: "#4824BD",
                    }}
                  >
                    <Typography sx={{ flexGrow: 1 }} variant="caption">
                      Tổng tiền
                    </Typography>
                    <Typography variant="h5">
                      {getPriceString(getTotalPrice(items))}
                    </Typography>
                  </Toolbar>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: 6,
                      color: "white",
                      textTransform: "none",
                      background: "red",
                      fontWeight: 300,
                      "&:hover": {
                        backgroundColor: "red",
                      },
                    }}
                    fullWidth
                  >
                    Tiến hành thanh toán
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
