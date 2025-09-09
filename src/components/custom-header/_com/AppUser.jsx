// Hooks / Node modules / Styles
import { Avatar, CloudinaryImage } from "elseware-ui";
import classNames from "classnames";

// Reducers / Actions

// Utils / Functions

// Components

// Sub-Components

// Data / Images / Icons
import { BiChevronDown } from "react-icons/bi";

function AppUser() {
  return (
    <div
      className={classNames({
        "w-fit flex flex-row gap-3 items-center bg-gradient-to-r from-green-700/10 to-green-400/20 rounded-full border border-green-800/50": true,
        "hover:bg-green-700/30 hover:cursor-pointer": true,
        "transition-all ease-in-out duration-200": true,
      })}
    >
      <Avatar size="md" variant="success" styles="w-[40px] h-[40px]">
        {/* <CloudinaryImage publicId={null} /> */}
      </Avatar>

      <div className="pr-5">
        <div className="text-sm font-semibold leading-4 text-gray-400">
          Sample User
        </div>
        <div className="text-xs text-gray-500">sampleuser</div>
      </div>
    </div>
  );
}

export default AppUser;
