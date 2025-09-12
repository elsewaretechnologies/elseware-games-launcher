import { MenuItem } from "elseware-ui";
import classNames from "classnames";

// Icons
import { MdOutlineAccountCircle, MdSettings } from "react-icons/md";

import { ROLES } from "../enums";

const HeaderMenuItem = ({ icon, name, badge, to, styles }) => {
  return (
    <MenuItem
      icon={icon}
      name={name}
      badge={badge}
      to={to}
      styles={classNames({
        "flex flex-row items-center gap-3 text-sm text-gray-400 p-3 border-b border-green-900/30 w-full": true,
        "bg-gradient-to-r from-slate-800/30": true,
        "hover:cursor-pointer hover:bg-green-700/20": true,
      })}
    />
  );
};

const getHeaderDropdownNavData = (username, roles) => {
  const header_dropdown_nav = [
    {
      component: HeaderMenuItem,
      icon: <MdOutlineAccountCircle />,
      name: "Profile",
      to: `/profile/${username}`,
      allowedRoles: [ROLES.User],
    },
    {
      component: HeaderMenuItem,
      icon: <MdSettings />,
      name: "Settings",
      to: `/account/settings`,
      allowedRoles: [ROLES.User],
    },
  ];

  // filter nav data based on roles
  let filtered_header_dropdown_nav = [];

  for (let i = 0; i < header_dropdown_nav.length; i++) {
    var nav_data = header_dropdown_nav[i];

    if (roles.some((role) => nav_data.allowedRoles.includes(role))) {
      filtered_header_dropdown_nav.push(nav_data);
    }
  }

  return filtered_header_dropdown_nav;
};

export default getHeaderDropdownNavData;
