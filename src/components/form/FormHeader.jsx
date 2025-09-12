import { NavLink } from "react-router-dom";

import { elsewaregames_hz_textonly } from "../../assets";

function FormHeader() {
  return (
    <div className="relative">
      <img className="mb-7 h-20" src={elsewaregames_hz_textonly} alt="elseware" />
      <NavLink to={"/"}>
        <div className="absolute start-0 end-0 top-[20px] m-auto w-[220px] h-[45px]"></div>
      </NavLink>
    </div>
  );
}

export default FormHeader;
