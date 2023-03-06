import Home from "Page/Home";
import List from "Page/List";
import About from "Page/About";

export const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/list",
    element: List,
  },
  {
    path: "/about",
    element: About,
  },
];
