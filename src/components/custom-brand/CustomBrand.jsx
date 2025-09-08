// Hooks / Node modules / Styles
import classNames from "classnames";
import { Brand } from "elseware-ui";

// Reducers / Actions

// Utils / Functions

// Components

// Sub-Components

// Data / Images / Icons
import { elsewaregames_hz_textonly } from "../../assets";

function CustomBrand() {
  //   const navigate = useNavigate();

return (
    <img
        src={elsewaregames_hz_textonly}
        alt="Elseware Games"
        className="w-full max-w-xs h-auto object-contain px-5"
        style={{ display: "block" }}
    />
);
}

export default CustomBrand;
