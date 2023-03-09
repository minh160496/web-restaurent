import Home from "Page/Home";
import About from "Page/About";
import AllProducts from "Page/AllProducts";
import OutStanding from "Page/OutStanding";
import Every from "Page/Every";

export const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/list",
    element: AllProducts,
  },
  {
    path: "/about",
    element: About,
  },
  {
    path: "/outStanding",
    element: OutStanding,
  },
  {
    path: "/every",
    element: Every,
  },
];
