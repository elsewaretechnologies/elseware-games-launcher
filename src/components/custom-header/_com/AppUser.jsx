// Hooks / Node modules / Styles
import { Avatar } from "elseware-ui";
import classNames from "classnames";
import useAuth from "../../../utils/hooks/authentication/useAuth";

// Reducers / Actions

// Utils / Functions

// Components
import CloudinaryImage from "../../CloudinaryImage";

// Sub-Components

// Data / Images / Icons
import { BiChevronDown } from "react-icons/bi";

function AppUser() {
  // Authentication and authorization related
  const { username, firstName, lastName, avatar, roles } = useAuth();

  return (
    <div
      className={classNames({
        "w-fit flex flex-row gap-3 items-center bg-gradient-to-r from-green-700/10 to-green-400/20 rounded-full border border-green-800/50": true,
        "hover:bg-green-700/30 hover:cursor-pointer": true,
        "transition-all ease-in-out duration-200": true,
      })}
    >
      <Avatar size="md" variant="success" styles="w-[40px] h-[40px]">
        <CloudinaryImage publicId={avatar} />
      </Avatar>

      <div className="pr-5">
        <div className="text-sm font-semibold leading-4 text-gray-400">
          {firstName + " " + lastName}
        </div>
        <div className="text-xs text-gray-500">{username}</div>
      </div>

      <div className="pr-2 text-2xl text-gray-500">
        <BiChevronDown />
      </div>
    </div>
  );
}

export default AppUser;
