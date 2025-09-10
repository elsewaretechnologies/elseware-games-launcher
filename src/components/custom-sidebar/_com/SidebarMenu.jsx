// Hooks / Node modules / Styles
import { NavLink } from "react-router-dom";

// Reducers / Actions

// Utils / Functions

// Components

// Sub-Components

// Data / Images / Icons

function SidebarMenu({ data }) {
  return (
    <div className="flex flex-col">
      {data.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `flex flex-row gap-3  items-center px-6 py-5 text-gray-400 hover:bg-secondary-800/40 ${
              isActive ? "bg-secondary-800/30 text-gray-300" : ""
            }`
          }
        >
          <div className="text-2xl">{item.icon}</div>
          <div>{item.name}</div>
        </NavLink>
      ))}
    </div>
  );
}

export default SidebarMenu;
