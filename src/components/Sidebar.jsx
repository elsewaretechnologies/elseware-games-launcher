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
    <aside className="h-full fixed w-[300px] egl-bg-md border-r border-r-secondary-800/0">
      <CustomBrand />
      <div className="flex flex-col">
        {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `px-4 py-5 hover:bg-secondary-800/40 ${
              isActive ? "bg-secondary-800/30" : ""
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
      </div>
    </aside>
  );
}
