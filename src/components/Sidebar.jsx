// Hooks / Node modules / Styles
import { NavLink } from "react-router-dom";

// Reducers / Actions

// Utils / Functions

// Components

// Sub-Components
import CustomBrand from "./custom-brand/CustomBrand";

// Data / Images / Icons

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Library", path: "/library" },
  { name: "Store", path: "/store" },
  { name: "Settings", path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-[400px] egl-bg-md flex flex-col border-r border-secondary-800/60">
      <CustomBrand />
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `px-4 py-4 hover:bg-secondary-800/40 ${
              isActive ? "bg-secondary-800/30" : ""
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </aside>
  );
}
