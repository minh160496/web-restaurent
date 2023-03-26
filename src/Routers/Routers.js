import Home from "Page/Home";
import About from "Page/About";
import AllProducts from "Page/AllProducts";
import OutStanding from "Page/OutStanding";
import Every from "Page/Every";
import Blogs from "Page/Blogs";
import Contact from "Page/Contact";
import Appetizer from "Page/Appetizer";
import MainDishes from "Page/MainDishea";
import Soups from "Page/Coffee";
import RiceNoodle from "Page/RiceNoodle";
import CakeDessert from "Page/CakeDessert";
import Drink from "Page/Drink";
import Salad from "Page/Salad";
import Goi from "Page/Goi";
import Beef from "Page/Beef";
import Kitchen from "Page/Kitchen";
import Pork from "Page/Pork";
import Fish from "Page/Fish";
import Canh from "Page/Canh";
import Tiem from "Page/Tiem";
import Sup from "Page/Sup";
import Rice from "Page/Rice";
import Noodle from "Page/Noodle";
import Porridge from "Page/Porridge";
import Dessertd from "Page/Dessertd";
import Cake from "Page/Cake";
import Coffee from "Page/Coffee";
import MilkTea from "Page/MilkTea";
import ProductDetail from "Page/ProductDetail";
import ShoppingCart from "Component/ShoppingCart";
import Login from "Page/Login";
import SignIn from "Page/SignIn";
import UserInf from "Page/UserInf";
import ProductSearch from "Page/ProductSearch";
import Favorite from "Page/Favorite";
import System from "Page/System";
import OrderTable from "Page/OrderTable";
import CheckOut from "Page/CheckOut";
import StatusOrder from "Page/StatusOrder";
import BlogDetail from "Page/BlogDetail";

export const pathObj = {
  about: {
    title: "Giới thiệu",
    path: "/about",
  },
  list: {
    title: "Menu",
    path: "/list",
  },
  outStanding: {
    title: "Món ăn nổi bật",
    path: "/outStanding",
  },
  every: {
    title: "Món ngon mỗi ngày",
    path: "/every",
  },
  blogs: {
    title: "Tin tức",
    path: "/blogs",
  },
  contact: {
    title: "Liên hệ",
    path: "/contact",
  },
  appetizers: {
    title: "Khai vị",
    path: "/list/appetizers",
  },
  mainDishes: {
    title: "Món chính",
    path: "/list/mainDishes",
  },
  soups: {
    title: "Canh - Tiềm - Súp",
    path: "/list/soups",
  },
  riceNoodles: {
    title: "Cơm - Mỳ - Cháo",
    path: "/list/riceNoodles",
  },
  cakeDesserts: {
    title: "Bánh và tráng miệng",
    path: "/list/cakeDesserts",
  },
  drinks: {
    title: "Đồ uống",
    path: "/list/drinks",
  },
  salads: {
    title: "Salad",
    path: "/list/appetizers/salads",
  },
  gois: {
    title: "Gỏi",
    path: "/list/appetizers/gois",
  },
  beefs: {
    title: "Món bò",
    path: "/list/mainDishes/beefs",
  },
  kitchens: {
    title: "Món gà",
    path: "/list/mainDishes/kitchens",
  },
  porks: {
    title: "Món heo",
    path: "/list/mainDishes/porks",
  },
  fishs: {
    title: "Món cá",
    path: "/list/mainDishes/fishs",
  },
  canhs: {
    title: "Canh",
    path: "/list/soups/canhs",
  },
  tiems: {
    title: "Tiềm",
    path: "/list/soups/tiems",
  },
  sups: {
    title: "Súp",
    path: "/list/soups/sups",
  },
  rices: {
    title: "Cơm",
    path: "/list/riceNoodles/rices",
  },
  noodles: {
    title: "Mỳ",
    path: "/list/riceNoodles/noodles",
  },
  porridges: {
    title: "Cháo",
    path: "/list/riceNoodles/porridges",
  },
  dessertds: {
    title: "Tráng miệng",
    path: "/list/cakeDesserts/dessertds",
  },
  cakes: {
    title: "Bánh",
    path: "/list/cakeDesserts/cakes",
  },
  coffees: {
    title: "Cà phê",
    path: "/list/drinks/coffees",
  },

  milkTeas: {
    title: "Trà sữa",
    path: "/list/drinks/milkTeas",
  },

  productDetails: {
    title: "Chi tiết sản phẩm",
    path: "/list/productDetails",
  },

  shoppingCart: {
    title: "Giỏ hàng",
    path: "/shoppingCart",
  },

  logIn: {
    title: "Đăng nhập",
    path: "/logIn",
  },

  signIn: {
    title: "Đăng ký",
    path: "/signIn",
  },

  userInf: {
    title: "Thông tin tài khoản",
    path: "/userInfo",
  },

  logOut: {
    title: "Đăng xuất",
    path: "/",
  },

  userInf: {
    title: "Thông tin tài khoản",
    path: "/userInf",
  },

  productSearchs: {
    title: "Món ăn bạn tìm kiếm",
    path: "/productSearchs",
  },

  favorites: {
    title: "Món ăn yêu thích",
    path: "/favorites",
  },

  system: {
    title: "Hệ thống cửa hàng",
    path: "/system",
  },

  orderTable: {
    title: "Đặt bàn",
    path: "/orderTable",
  },

  checkOut: {
    title: "Thanh toán",
    path: "/checkOut",
  },

  statusOrder: {
    title: "Lịch sử mua hàng",
    path: "/statusOrder",
  },

  blogDetail: {
    title: "Đọc bài viết",
    path: "/blogDetail",
  },
};

export const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: pathObj.list.path,
    element: AllProducts,
  },
  {
    path: pathObj.about.path,
    element: About,
  },
  {
    path: pathObj.outStanding.path,
    element: OutStanding,
  },
  {
    path: pathObj.every.path,
    element: Every,
  },
  {
    path: pathObj.blogs.path,
    element: Blogs,
  },
  {
    path: pathObj.contact.path,
    element: Contact,
  },
  {
    path: pathObj.appetizers.path,
    element: Appetizer,
  },
  {
    path: pathObj.mainDishes.path,
    element: MainDishes,
  },
  {
    path: pathObj.soups.path,
    element: Soups,
  },
  {
    path: pathObj.riceNoodles.path,
    element: RiceNoodle,
  },
  {
    path: pathObj.cakeDesserts.path,
    element: CakeDessert,
  },
  {
    path: pathObj.drinks.path,
    element: Drink,
  },
  {
    path: pathObj.salads.path,
    element: Salad,
  },
  {
    path: pathObj.gois.path,
    element: Goi,
  },
  {
    path: pathObj.beefs.path,
    element: Beef,
  },
  {
    path: pathObj.kitchens.path,
    element: Kitchen,
  },
  {
    path: pathObj.porks.path,
    element: Pork,
  },
  {
    path: pathObj.fishs.path,
    element: Fish,
  },
  {
    path: pathObj.canhs.path,
    element: Canh,
  },
  {
    path: pathObj.tiems.path,
    element: Tiem,
  },
  {
    path: pathObj.sups.path,
    element: Sup,
  },
  {
    path: pathObj.rices.path,
    element: Rice,
  },
  {
    path: pathObj.noodles.path,
    element: Noodle,
  },
  {
    path: pathObj.porridges.path,
    element: Porridge,
  },
  {
    path: pathObj.dessertds.path,
    element: Dessertd,
  },
  {
    path: pathObj.cakes.path,
    element: Cake,
  },
  {
    path: pathObj.coffees.path,
    element: Coffee,
  },
  {
    path: pathObj.milkTeas.path,
    element: MilkTea,
  },
  {
    path: pathObj.productDetails.path,
    element: ProductDetail,
  },
  {
    path: pathObj.shoppingCart.path,
    element: ShoppingCart,
  },
  {
    path: pathObj.logIn.path,
    element: Login,
  },
  {
    path: pathObj.signIn.path,
    element: SignIn,
  },
  {
    path: pathObj.userInf.path,
    element: UserInf,
  },
  {
    path: pathObj.productSearchs.path,
    element: ProductSearch,
  },

  {
    path: pathObj.favorites.path,
    element: Favorite,
  },

  {
    path: pathObj.system.path,
    element: System,
  },

  {
    path: pathObj.orderTable.path,
    element: OrderTable,
  },

  {
    path: pathObj.checkOut.path,
    element: CheckOut,
  },

  {
    path: pathObj.statusOrder.path,
    element: StatusOrder,
  },

  {
    path: pathObj.blogDetail.path,
    element: BlogDetail,
  },
];
