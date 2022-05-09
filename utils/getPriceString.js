const getPriceString = (price) => {
  let string = "" + new Intl.NumberFormat("de-DE").format(price) + "đ";
  return string;
};

export default getPriceString;
