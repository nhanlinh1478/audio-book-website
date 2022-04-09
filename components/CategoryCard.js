import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
const categories = ["1", "category 2", "ca3", "ca4", "ca5"];
function CategoryCard({ anchorEl, setAnchorEl, handleClick, handleClose }) {
  const open = Boolean(anchorEl);

  return (
    <div>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <div sx={{ padding: 30 }}>
          <MenuItem onClick={handleClose}>All</MenuItem>
        </div>
        {categories.map((category) => (
          <MenuItem onClick={handleClose}>{category}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default CategoryCard;
