// Hooks / Node modules / Styles
import { Transition, Button, Menu, sendToast } from "elseware-ui";
import classNames from "classnames";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useClickOutside from "../../../utils/hooks/useClickOutside";
import useAuth from "../../../utils/hooks/authentication/useAuth";

// Reducers / Actions
import { useSendLogoutMutation } from "../../../app/slices/api/authApiSlice";

// Utils / Functions

// Components

// Sub-Components
import AppUser from "./AppUser";

// Data / Images / Icons
import { CiLogout } from "react-icons/ci";
import getHeaderDropdownNavData from "../../../data/nav/header_dropdown_nav";

function LoggedUserSection() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => setDropdownVisible(false));

  const navigate = useNavigate();

  // Authentication and authorization related
  const { username, firstName, lastName, avatar, roles } = useAuth();

  // API Features
  // Logout
  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    }
  }, [isSuccess, navigate]);

  const logoutHandler = async () => {
    try {
      const res = await sendLogout().unwrap();

      if (res) {
        // sendToast(res);
      }
    } catch (error) {
      sendToast({
        status: "error",
        message: error?.data?.message || error.error,
      });
    }
  };

  return (
    <div className="inline-flex gap-5 items-center">
      <div className="relative" ref={dropdownRef}>
        <div onClick={() => setDropdownVisible(!dropdownVisible)}>
          <AppUser
            avatar={avatar}
            firstName={firstName}
            lastName={lastName}
            username={username}
          />
        </div>

        <Transition.TransitionDropdown visibility={dropdownVisible}>
          <div
            className={classNames({
              "flex flex-col absolute right-0 my-1 border border-secondary-800/40 z-20 w-[200px]": true,
            })}
          >
            <Menu data={getHeaderDropdownNavData(username, roles)} />
            <Button
              icon={<CiLogout />}
              text="Logout"
              variant="success"
              onClick={logoutHandler}
              loading={isLoading}
            />
          </div>
        </Transition.TransitionDropdown>
      </div>
    </div>
  );
}

export default LoggedUserSection;
