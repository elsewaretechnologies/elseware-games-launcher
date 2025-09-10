import {
  FaHome,
  FaGamepad,
  FaBookOpen,
  FaCog,
  FaFolderOpen,
} from "react-icons/fa";
import { GiNewspaper } from "react-icons/gi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

export const DEFAULT_LAYOUT_SIDEBAR_NAV = [
  { icon: <FaHome />, name: "Home", path: "/" },
  { icon: <FaFolderOpen />, name: "Library", path: "/library" },
  { icon: <FaGamepad />, name: "Games", path: "/games" },
  { icon: <AiOutlineAppstoreAdd />, name: "Products", path: "/products" },
  { icon: <FaBookOpen />, name: "Learning", path: "/learning" },
  { icon: <GiNewspaper />, name: "News", path: "/news" },
  { icon: <FaCog />, name: "Settings", path: "/settings" },
];
