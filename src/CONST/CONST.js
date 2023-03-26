export const BLOGS = "blogs";

export const CURRENT_PAGE = "currentPage";

export const SORT_CODE = "SortCode";

export const CONTACT = "contact";

export const FILTER_FIEL = "filterFiel";

export const RANGE_PRICE = "rangePrice";

export const FILTER_SMELLS = "filterSmells";

export const FILTER_SIZES = "filterSizes";

export const CART_NUM = "cartNum";

export const USER_SIGNIN = "userSignIn";

export const USER_LOGIN = "userLogin";

export const PRODUCT_ID_SEARCHS = "productIdSearchs";

export const PRODUCT_ID_FAVORITES = "productIdFavorites";

export const DISCOUNT_CODE = "discountCode";

export const DISCOUNT_USER = "discountUser";

export const USER_ORDERS = "userOrders";

export const myPhone = "0356 553 013";

export const linkProfile =
  "https://www.facebook.com/profile.php?id=100009988841813";

export const midPath = "?&id=";

export const discountCodes = [
  { id: 1, code: "LUCKY10", discountValue: 10 / 100 },
  { id: 2, code: "LUCKY20", discountValue: 20 / 100 },
  { id: 3, code: "LUCKY50", discountValue: 50 / 100 },
];

export const SHIP_EXPENSE = "shipExpensive";

export const cardNumOfContent = [
  {
    id: 1,
    maxBrowserWidth: 768,
    num: 12,
  },
  {
    id: 2,
    maxBrowserWidth: 1199,
    num: 9,
  },
  {
    id: 3,
    maxBrowserWidth: Infinity,
    num: 12,
  },
];

export const conditionsFilterPrice = [
  { top: 100, end: 0 },
  { top: 200, end: 100 },
  { top: 500, end: 200 },
  { top: 1000, end: 500 },
  { end: 1000 },
];

export const conditionsFilterSmells = [
  { id: 1, fiel: "mặn" },
  { id: 2, fiel: "ngọt" },
  { id: 3, fiel: "chua" },
  { id: 4, fiel: "cay" },
];

export const conditionsFilterSizes = [
  { id: 1, fiel: "lớn" },
  { id: 2, fiel: "vừa" },
  { id: 3, fiel: "nhỏ" },
];

export const sortTypes = [
  {
    id: 1,
    type: "Từ A - Z",
    code: "AZ",
    isFilter: false,
  },
  {
    id: 2,
    type: "Từ Z - A",
    code: "ZA",
    isFilter: false,
  },
  {
    id: 3,
    type: "Giá tăng dần",
    code: "price",
    isFilter: false,
  },
  {
    id: 4,
    type: "Giá giảm dần",
    code: "priceReverse",
    isFilter: false,
  },
  {
    id: 5,
    type: "Hàng mới nhất",
    code: "new",
    isFilter: false,
  },
  {
    id: 6,
    type: "Hàng cũ nhất",
    code: "old",
    isFilter: false,
  },
];
