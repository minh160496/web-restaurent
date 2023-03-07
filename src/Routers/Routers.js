import Home from "Page/Home";
import About from "Page/About";
import List from "Page/List";

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
