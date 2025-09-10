import * as Pages from "../../pages";
import { ROUTE_TYPE } from "../enums";

export const routes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    element: Pages.Home,
    type: ROUTE_TYPE.Public,
    scrollToTop: true,
  },
   {
    path: "/library",
    exact: true,
    name: "Library",
    element: Pages.Library,
    type: ROUTE_TYPE.Public,
    scrollToTop: true,
  },
   {
    path: "/games",
    exact: true,
    name: "Games",
    element: Pages.Games,
    type: ROUTE_TYPE.Public,
    scrollToTop: true,
  },
   {
    path: "/products",
    exact: true,
    name: "Products",
    element: Pages.Products,
    type: ROUTE_TYPE.Public,
    scrollToTop: true,
  },
   {
    path: "/learning",
    exact: true,
    name: "Learning",
    element: Pages.Learning,
    type: ROUTE_TYPE.Public,
    scrollToTop: true,
  },
   {
    path: "/news",
    exact: true,
    name: "News",
    element: Pages.News,
    type: ROUTE_TYPE.Public,
    scrollToTop: true,
  },
   {
    path: "/settings",
    exact: true,
    name: "Settings",
    element: Pages.Settings,
    type: ROUTE_TYPE.Public,
    scrollToTop: true,
  },
   {
    path: "/login",
    exact: true,
    name: "Login",
    element: Pages.Login,
    type: ROUTE_TYPE.Public,
    scrollToTop: true,
  },
];
