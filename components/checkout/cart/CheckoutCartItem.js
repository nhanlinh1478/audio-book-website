import React from "react";

// MUI COMPONENTS
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";

// Utils
import getPriceString from "../../../utils/getPriceString";

const StyledImg = styled("img")(({ theme }) => {
  return `border-radius: ${theme.spacing(1)};`;
});

export default function CheckoutCartItem({
  title,
  author,
  duration,
  price,
  img,
  id,
  onClick,
}) {
  return (
    <Grid item container columnSpacing={2}>
      {/* image */}
      <Grid item xs={2}>
        <StyledImg src={img} />
      </Grid>

      {/* description */}
      <Grid item container direction="column" xs={8}>
        <Grid item container direction="column">
          <Grid item>
            <Typography variant="subtitle2">{title}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" display="inline-block">
              Tác giả:
            </Typography>
            <Typography variant="body2" display="inline-block" sx={{ ml: 0.5 }}>
              {author}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" display="inline-block">
              Thời lượng:
            </Typography>
            <Typography variant="body2" display="inline-block" sx={{ ml: 0.5 }}>
              {duration}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container direction="column" justifyContent="flex-end" xs>
          <Grid item>
            <Button
              variant="outlined"
              size="small"
              sx={{ textTransform: "none" }}
              onClick={() => {
                onClick(id);
              }}
            >
              Xoá
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* price */}
      <Grid item xs={2}>
        <Typography variant="h5" fontWeight={500} color="orange">
          {getPriceString(price)}
        </Typography>
      </Grid>
    </Grid>
  );
}
