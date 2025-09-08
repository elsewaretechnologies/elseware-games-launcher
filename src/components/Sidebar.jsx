import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Library", path: "/library" },
  { name: "Store", path: "/store" },
  { name: "Settings", path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-60 bg-gray-800 flex flex-col p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-6">Launcher</h1>
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `px-4 py-2 rounded hover:bg-gray-700 ${
              isActive ? "bg-gray-700" : ""
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </aside>
  );
}