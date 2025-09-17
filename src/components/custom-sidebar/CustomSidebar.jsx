// Hooks / Node modules / Styles

// Reducers / Actions

// Utils / Functions

// Components

// Sub-Components
import CustomBrand from "../custom-brand/CustomBrand";
import SidebarMenu from "./_com/SidebarMenu";

// Data / Images / Icons
import { DEFAULT_LAYOUT_SIDEBAR_NAV } from "../../data/nav/default_layout_sidebar";

export default function CustomSidebar() {
  return (
    <aside className="h-full z-20 fixed w-[300px] egl-bg-md border-r border-r-secondary-800/0">
      <CustomBrand />
      <SidebarMenu data={DEFAULT_LAYOUT_SIDEBAR_NAV} />
    </aside>
  );
}
